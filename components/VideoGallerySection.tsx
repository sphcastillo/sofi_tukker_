"use client";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import MusicVideosGallery from "@/components/MusicVideosGallery";
import { imageVariants } from "@/utils/variants";


function VideoGallerySection() {
  const { theme } = useTheme();

  const videoRef = useRef(null);

  const videoInView = useInView(videoRef, { once: false });

  return (
    <div className="bg-[#000000]">
      <div className="flex justify-center">
        <motion.div
          ref={videoRef}
          initial="initial"
          animate={videoInView ? "animate" : "initial"}
          variants={imageVariants}
          className="flex pt-[66px] justify-center object-contain w-[254px] z-20 mb-[60px] xxs:w-[292px] xs:w-[383px] sm:w-[457px] md:w-[549px]"
        >
          <Image
            src={theme === 'theme1' ? '/images/homepage/videogallerySection/VIDEOtitle.png' : '/images/homepage/videogallerySection/Videotheme2.png'} 
            alt="Video Title"
            priority
            width={600}
            height={100}
          />
        </motion.div>
      </div>
      <MusicVideosGallery />
    </div>
  );
}
export default VideoGallerySection;
