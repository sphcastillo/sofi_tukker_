"use client";
import Image from "next/image";
import breadThrowSomeAssBuns from "@/public/images/homepage/imageGallerySection/breadThrowSomeAssBuns.png";
import butter1 from "@/public/images/homepage/imageGallerySection/butter1.jpg";
import breadAlbumArtwork from "@/public/images/homepage/imageGallerySection/breadAlbumArtwork.png";
import butter2 from "@/public/images/homepage/imageGallerySection/butter2.jpg";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
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
          sizes="50vw"
          src={
            theme === "theme1"
              ? breadThrowSomeAssBuns
              : butter1
          }
          alt={theme === "theme1" ? "Throw Some Ass buns artwork" : "SOFI TUKKER — BUTTER artwork"}
          placeholder="blur"
          className="w-full h-full object-cover"
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
          sizes="50vw"
          src={
            theme === "theme1"
              ? breadAlbumArtwork
              : butter2
          }
          alt={theme === "theme1" ? "BREAD album artwork" : "SOFI TUKKER — BUTTER artwork"}
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
export default ImageGallerySection;
