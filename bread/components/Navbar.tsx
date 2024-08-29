"use client";
import localFont from "next/font/local";
import sofitukkerlogo from "@/images/header/sofitukker_logo.png";
import Image from "next/image";
import st_logo from "@/images/header/st_logo.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const beiko = localFont({
  src: "../public/fonts/Beiko.otf",
});

const imageVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 2, ease: 'easeOut' }
}

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
    <div className="w-4/5 mx-auto flex justify-center">
      <ul
        className={`${beiko.className} h-[78px] items-end flex space-x-[85px] text-[#DD90E1] text-[22px] font-bold`}
      >
        <li>MUSIC</li>
        <li>TOUR</li>
        <motion.div
            initial="initial"
            animate="animate"
            variants={imageVariants}
            key={isScrolled ? 'st_logo' : 'sofitukkerlogo'}
        >
          <Image
            src={isScrolled ? st_logo : sofitukkerlogo}
            alt="Sofi Tukker Logo"
            priority
            className="object-contain items-start"
          />
        </motion.div>
        <li>STORE</li>
        <li>SIGN UP</li>
      </ul>
    </div>
  );
}
export default Navbar;
