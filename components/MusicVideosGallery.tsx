'use client'
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { videos } from "@/data/MusicVideosData";

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


  return (
    <motion.div 
      className="grid grid-cols-2 sm:grid-cols-4 w-full overflow-hidden"
      ref={musicVideoRef}
      initial='initial'
      variants={musicVideosVariants}
      animate={musicVideoInView ? 'animate' : 'initial'}
    >
      {videos.map((video) => (
        <motion.div
          key={video.id}
          className="relative w-full aspect-video cursor-pointer"
          onClick={() => setActiveVideo(video.url)}
          whileHover={{ 
            scale: 1.05,
            zIndex: 10,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{ 
            scale: 0.98,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
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
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <button className="text-white text-2xl">▶️</button>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
export default MusicVideosGallery;
