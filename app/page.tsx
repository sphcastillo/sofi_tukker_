"use client";
import Image from "next/image";
import BREADHeroImage from "@/images/homepage/homepageHeroCover.png";
import MusicTitle from "@/images/homepage/MUSICtitle.png";
import MusicStore from "@/components/MusicStore";
import TourTitle from "@/images/homepage/TOURtitle.png";
import MerchTitle from "@/images/homepage/MERCHtitle.png";
import VideoTitle from "@/images/homepage/VIDEOtitle.png";
import localFont from "next/font/local";
import BreadMerchandise from "@/components/BreadMerchandise";
import MusicVideosGallery from "@/components/MusicVideosGallery";
import throwSomeAssBuns from "@/images/homepage/breadThrowSomeAssBuns.png";
import breadArtWork from "@/images/homepage/breadAlbumArtwork.png";
import Footer from "@/components/Footer";
import { motion, useInView, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

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

const beiko = localFont({
  src: "../public/fonts/Beiko.otf",
});

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const musicRef = useRef(null);
  const tourRef = useRef(null);
  const merchRef = useRef(null);
  const videoRef = useRef(null);
  const albumArtworkRef = useRef(null);

  const tourInView = useInView(tourRef, { once: false });
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

  useEffect(() => {
    if (hasScrolled && musicRef.current) {
      gsap.fromTo(
        musicRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 }
      );
    }
  }, [hasScrolled]);

  return (
    <main className="">
      {/* Hero Section */}
      <div>
        <Image src={BREADHeroImage} alt="BREAD Hero Image" priority />
      </div>

      {/* Music Section */}
      <div className="relative  bg-[#dd90e1] flex flex-col justify-center items-center">
        {!hasScrolled ? (
          <div className="top-[-20px] xxs:top-[-50px] absolute object-contain z-20 w-[254px]">
            <Image
              src={MusicTitle}
              alt="MUSIC Title"
              priority
              width={600}
              height={100}
              className=""
            />
          </div>
        ) : (
          <div
            ref={musicRef}
            className="top-[-20px] xxs:top-[-50px] absolute object-contain z-20 w-[254px]"
            style={{ backgroundColor: "transparent" }}
          >
            <Image
              src={MusicTitle}
              alt="MUSIC Title"
              priority
              width={600}
              height={100}
            />
          </div>
        )}
        <div className="flex-1 w-full">
          <MusicStore />
        </div>
      </div>

      {/* Tour Section */}
      <div className="bg-[#b9ddba]">
        <div className="flex justify-center">
          <motion.div
            ref={tourRef}
            initial="initial"
            animate={tourInView ? "animate" : "initial"}
            variants={imageVariants}
            className="flex pt-[42px] xs:pt-[66px] justify-center object-contain w-[234px] z-20"
          >
            <Image
              src={TourTitle}
              alt="Tour Title"
              priority
              width={600}
              height={100}
            />
          </motion.div>
        </div>
        <div
          className={`${beiko.className} flex justify-center items-center pt-[48px] xs:pt-[54px] pb-10`}
        >
          <button className="rounded-full text-[#dd90e1] bg-[#ffffff] border-[2px] border-white pb-3 pt-[14px] px-4 ">
            <Link href="/tour">
              <span className="flex items-center text-[18px] sm:text-[40px]">
                PURCHASE TICKETS
              </span>
            </Link>
          </button>
        </div>
      </div>

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
            className="flex pt-[66px] justify-center object-contain w-[254px] z-20"
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
            className="flex pt-[66px] justify-center object-contain w-[254px] z-20 mb-[60px]"
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
