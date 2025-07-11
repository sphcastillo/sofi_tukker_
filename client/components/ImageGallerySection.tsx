"use client";
import Image from "next/image";
import throwSomeAssBuns from "@/images/homepage/imageGallerySection/breadThrowSomeAssBuns.png";
import breadArtWork from "@/images/homepage/imageGallerySection/breadAlbumArtwork.png";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import butter1 from "@/images/homepage/imageGallerySection/butter1.jpg";
import butter2 from "@/images/homepage/imageGallerySection/butter2.jpg";
import { useTheme } from "@/context/ThemeContext";

const albumArtworkVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.65 },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.65 },
  },
};

function ImageGallerySection() {
  const { theme } = useTheme();

  const albumArtworkRef = useRef(null);

  const albumArtworkInView = useInView(albumArtworkRef, { once: false });

  return (
    <div className="flex w-full h-full overflow-hidden pt-4 bg-[#000000]">
      <motion.div
        className="flex-1"
        ref={albumArtworkRef}
        initial="initial"
        variants={albumArtworkVariants}
        animate={albumArtworkInView ? "animate" : "initial"}
      >
        <Image
          src={theme === 'theme1' ? throwSomeAssBuns : butter1}
          alt="Throw Some Ass Buns"
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
      <motion.div
        ref={albumArtworkRef}
        initial="initial"
        variants={albumArtworkVariants}
        animate={albumArtworkInView ? "animate" : "initial"}
        className="flex-1"
      >
        <Image
          src={theme === 'theme1' ? breadArtWork : butter2}
          alt="Bread Album Artwork"
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}
export default ImageGallerySection;
