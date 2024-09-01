'use client'
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

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
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const musicVideoRef = useRef(null);

  const musicVideoInView = useInView(musicVideoRef, { once: false });

  const videos = [
    {
      id: 1,
      thumbnail: "https://img.youtube.com/vi/bwNDSAuDACc/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/bwNDSAuDACc?autoplay=1",
      title: "SOFI TUKKER - Woof (feat. Kah-Lo) [Official Music Video]",
    },
    {
      id: 2,
      thumbnail: "https://img.youtube.com/vi/nRpCivrtmXM/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/nRpCivrtmXM?autoplay=1",
      title: "SOFI TUKKER - Throw Some Ass (Official Music Video)",
    },
    {
      id: 3,
      thumbnail: "https://img.youtube.com/vi/sc04A4n0qkk/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/sc04A4n0qkk?autoplay=1",
      title: "SOFI TUKKER - Spiral (Official Music Video)",
    },
    {
      id: 4,
      thumbnail: "https://img.youtube.com/vi/6wYLQmMyhF0/maxresdefault.jpg",
      url: "https://www.youtube.com/embed/6wYLQmMyhF0?autoplay=1",
      title: "SOFI TUKKER - Hey Homie (Official Music Video)",
    },
  ];
  return (
    <motion.div 
      className="flex w-full overflow-hidden"
      ref={musicVideoRef}
      initial='initial'
      variants={musicVideosVariants}
      animate={musicVideoInView ? 'animate' : 'initial'}
    >
      {videos.map((video) => (
        <div
          key={video.id}
          className="relative w-1/4 h-auto aspect-video cursor-pointer"
          onClick={() => setActiveVideo(video.url)}
        >
          {activeVideo === video.url ? (
            <iframe
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <Image
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
              width={280}
              height={160}
            />
          )}
          {!activeVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="text-white text-2xl">▶️</button>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
}
export default MusicVideosGallery;
