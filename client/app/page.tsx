"use client";
import Image from "next/image";
import BREADHeroImage from "@/images/homepage/homepageHeroCover.png";
import SofiTukkerHeroImage from "@/images/homepage/homepageHeroCoverTheme2.png";
import throwSomeAssBuns from "@/images/homepage/breadThrowSomeAssBuns.png";
import breadArtWork from "@/images/homepage/breadAlbumArtwork.png";
import Footer from "@/components/Footer";
import { motion, useInView, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import MusicSection from "@/components/MusicSection";
import { useTheme } from "@/context/ThemeContext";
import TourSection from "@/components/TourSection";
import MerchSection from "@/components/MerchSection";
import VideoGallerySection from "@/components/VideoGallerySection";

const imageVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

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

export default function Home() {
  const { theme } = useTheme();
  const [hasScrolled, setHasScrolled] = useState(false);

  const albumArtworkRef = useRef(null);

  const albumArtworkInView = useInView(albumArtworkRef, { once: false });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="">
      {/* Hero Section */}
      <div>
        <Image
          src={theme === "theme1" ? BREADHeroImage : SofiTukkerHeroImage}
          alt="BREAD Hero Image"
          priority
        />
      </div>

      {/* Music Section */}
      <MusicSection />

      {/* Tour Section */}
      <TourSection />

      {/* Merch Section */}
      <MerchSection />

      {/* Video Gallery Section */}
      <VideoGallerySection />

      {/* Image Gallery Section */}
      <div className="flex w-full h-full overflow-hidden pt-4 bg-[#000000]">
        <motion.div
          className="flex-1"
          ref={albumArtworkRef}
          initial="initial"
          variants={albumArtworkVariants}
          animate={albumArtworkInView ? "animate" : "initial"}
        >
          <Image
            src={throwSomeAssBuns}
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
            src={breadArtWork}
            alt="Bread Album Artwork"
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
