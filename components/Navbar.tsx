"use client";
import localFont from "next/font/local";
import sofitukkerlogo from "@/images/header/sofitukker_logo.png";
import Image from "next/image";
import st_logo from "@/images/header/st_logo.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const beiko = localFont({
  src: "../public/fonts/Beiko.otf",
});

const imageVariants: Variants = {
  initial: { 
    y: 50, 
    opacity: 0, 
    transition: { duration: 2, ease: "easeOut" } 
  },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 2, ease: "easeOut" } 
  }
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 230) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full mx-auto flex justify-center">
      <ul
        className={`${beiko.className} flex items-center justify-center w-full max-w-screen space-x-5 sm:space-x-5 md:space-x-12 lg:space-x-20 text-[#DD90E1]`}
      >
        <li className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[22px]">MUSIC</li>
        <li className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[22px]">TOUR</li>
        <motion.div
            initial="initial"
            animate="animate"
            variants={imageVariants}
            key={isScrolled ? 'st_logo' : 'sofitukkerlogo'}
            className="w-[185px] sm:w-[186px] md:w-[220px] lg:w-[280px]"
        >
          <Image
            src={isScrolled ? st_logo : sofitukkerlogo}
            alt="Sofi Tukker Logo"
            priority
            className="object-cover "
          />
        </motion.div>
        <li className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[22px]">STORE</li>
        <li className="text-pretty text-[11px] sm:text-[13px] md:text-[16px] lg:text-[22px]">SIGN UP</li>
      </ul>
    </div>
  );
}
export default Navbar;
