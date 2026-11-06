'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useInView, Variants } from "framer-motion";

type MusicVideo = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
};

const musicVideosVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.5 },
  },
};

function MusicVideosGallery() {
  const [activeVideo, setActiveVideo] = useState<MusicVideo | null>(null);
  const [videos, setVideos] = useState<MusicVideo[]>([]);
  const [mounted, setMounted] = useState(false);

  const musicVideoRef = useRef(null);
  const musicVideoInView = useInView(musicVideoRef, { once: false });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetch("/api/music-videos")
      .then((res) => res.json())
      .then((data) => setVideos(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to load music videos:", err));
  }, []);

  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo]);

  return (
    <>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 w-full overflow-hidden"
        ref={musicVideoRef}
        initial="initial"
        variants={musicVideosVariants}
        animate={musicVideoInView ? "animate" : "initial"}
      >
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="relative w-full aspect-video cursor-pointer"
            onClick={() => setActiveVideo(video)}
            whileHover={{
              scale: 1.05,
              zIndex: 10,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
          >
            <Image
              sizes="(min-width: 640px) 25vw, 50vw"
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
              width={280}
              height={160}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white text-2xl">▶️</span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {mounted &&
        activeVideo &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={activeVideo.title}
            onClick={() => setActiveVideo(null)}
          >
            <button
              type="button"
              aria-label="Close video"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl leading-none hover:opacity-80"
              onClick={() => setActiveVideo(null)}
            >
              ×
            </button>
            <div
              className="relative w-full max-w-6xl aspect-video"
              onClick={(event) => event.stopPropagation()}
            >
              <iframe
                src={activeVideo.url}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
export default MusicVideosGallery;
