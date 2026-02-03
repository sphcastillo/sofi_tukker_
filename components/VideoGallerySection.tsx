"use client";
import Image from "next/image";
import VIDEOtitle from "@/public/images/homepage/videogallerySection/VIDEOtitle.png";
import Videotheme2 from "@/public/images/homepage/videogallerySection/Videotheme2.png";
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
            sizes="(min-width: 768px) 549px, (min-width: 640px) 457px, (min-width: 540px) 383px, (min-width: 414px) 292px, 254px"
            src={theme === 'theme1' ? VIDEOtitle : Videotheme2}
            alt="Video Title"
          />
        </motion.div>
      </div>
      <MusicVideosGallery />
    </div>
  );
}
export default VideoGallerySection;
