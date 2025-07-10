"use client";
import Image from "next/image";
import BREADHeroImage from "@/images/homepage/homepageHeroCover.png";
import SofiTukkerHeroImage from "@/images/homepage/homepageHeroCoverTheme2.png";
import MerchTitle from "@/images/homepage/MERCHtitle.png";
import VideoTitle from "@/images/homepage/VIDEOtitle.png";
import BreadMerchandise from "@/components/BreadMerchandise";
import MusicVideosGallery from "@/components/MusicVideosGallery";
import throwSomeAssBuns from "@/images/homepage/breadThrowSomeAssBuns.png";
import breadArtWork from "@/images/homepage/breadAlbumArtwork.png";
import Footer from "@/components/Footer";
import { motion, useInView, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MusicSection from "@/components/MusicSection";
import { useTheme } from "@/context/ThemeContext";
import TourSection from "@/components/TourSection";

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

  const merchRef = useRef(null);
  const videoRef = useRef(null);
  const albumArtworkRef = useRef(null);

  const merchInView = useInView(merchRef, { once: false });
  const videoInView = useInView(videoRef, { once: false });
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
          src={theme === 'theme1' ? BREADHeroImage : SofiTukkerHeroImage} 
          alt="BREAD Hero Image" 
          priority 
        />
      </div>

      {/* Music Section */}
      <MusicSection  />

      {/* Tour Section */}
      <TourSection />

      {/* Merch Section */}
      <div
        id="merchSection"
        className="bg-[#fff2e7] relative flex flex-col pb-9 "
      >
        <div className="flex justify-center">
          <motion.div
            ref={merchRef}
            initial="initial"
            animate={merchInView ? "animate" : "initial"}
            variants={imageVariants}
            className="flex pt-[66px] justify-center object-contain w-[254px] z-20 xxs:w-[292px] xs:w-[383px] sm:w-[457px] md:w-[549px]"
          >
            <Image
              src={MerchTitle}
              alt="Merch Title"
              priority
              width={600}
              height={100}
            />
          </motion.div>
        </div>
        <BreadMerchandise />
      </div>

      {/* Video Gallery Section */}
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
              src={VideoTitle}
              alt="Video Title"
              priority
              width={600}
              height={100}
            />
          </motion.div>
        </div>
        <MusicVideosGallery />
      </div>

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
