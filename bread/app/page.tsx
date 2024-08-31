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
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const imageVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
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

  const tourInView = useInView(tourRef, { once: false });
  const merchInView = useInView(merchRef, { once: false });
  const videoInView = useInView(videoRef, { once: false });

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 20) {

        setHasScrolled(true);
      } 
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (hasScrolled && musicRef.current) {
      gsap.fromTo(musicRef.current, 
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
          <div className="top-[-50px] absolute object-contain md:mx-[200px] lg:mx-[120px] z-20">
            <Image
              src={MusicTitle}
              alt="MUSIC Title"
              priority
              width={600}
              height={100}
            />
          </div>
        ) : (
          <div
            ref={musicRef}
            className="top-[-50px] absolute object-contain md:mx-[200px] lg:mx-[120px] z-20"
            style={{ backgroundColor: 'transparent' }}
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
      <div className="bg-[#b9ddba] h-[500px]">
        <motion.div
          ref={tourRef}
          initial="initial"
          animate={tourInView ? "animate" : "initial"}
          variants={imageVariants}
          className="flex pt-[66px] justify-center object-contain md:mx-[200px] lg:mx-[120px] z-20"
        >
          <Image
            src={TourTitle}
            alt="Tour Title"
            priority
            width={600}
            height={100}
          />
        </motion.div>
        <div
          className={`${beiko.className} flex justify-center items-center pt-[54px]`}
        >
          <button className="rounded-full text-[#dd90e1] bg-[#ffffff] border-[2px] border-white pb-3 pt-[14px] px-4 ">
            <span className="flex items-center text-[40px]">
              PURCHASE TICKETS
            </span>
          </button>
        </div>
      </div>

      {/* Merch Section */}
      <div className="bg-[#fff2e7] relative min-h-screen flex flex-col">
        <motion.div
          ref={merchRef}
          initial="initial"
          animate={merchInView ? "animate" : "initial"}
          variants={imageVariants}
          className="flex pt-[66px] justify-center object-contain md:mx-[200px] lg:mx-[120px] z-20"
        >
          <Image
            src={MerchTitle}
            alt="Merch Title"
            priority
            width={600}
            height={100}
          />
        </motion.div>
        <BreadMerchandise />
      </div>

      {/* Video Gallery Section */}
      <div className="bg-[#000000]">
        <motion.div
          ref={videoRef}
          initial="initial"
          animate={videoInView ? "animate" : "initial"}
          variants={imageVariants}
          className="flex pt-[66px] justify-center object-contain md:mx-[200px] lg:mx-[120px] z-20 mb-[60px]"
        >
          <Image
            src={VideoTitle}
            alt="Video Title"
            priority
            width={600}
            height={100}
          />
        </motion.div>
        <MusicVideosGallery />
      </div>

      {/* Image Gallery Section */}
      <div className="flex w-full h-full overflow-hidden pt-4 bg-[#000000]">
        <div className="flex-1">
          <Image
            src={throwSomeAssBuns}
            alt="Throw Some Ass Buns"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <Image
            src={breadArtWork}
            alt="Bread Album Artwork"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
