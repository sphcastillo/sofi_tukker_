"use client";
import localFont from "next/font/local";
import sofitukkerlogo from "@/images/header/sofitukker_logo.png";
import Image from "next/image";
import st_logo from "@/images/header/st_logo.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import Link from "next/link";

const beiko = localFont({
  src: "../public/fonts/Beiko.otf",
});

const imageVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" },
  },
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
    <div className="w-full mx-auto flex justify-center pb-4 sm:pb-6">
      <ul
        className={`${beiko.className} flex items-center justify-center w-full max-w-screen space-x-4 xxs:space-x-5 sm:space-x-5 md:space-x-12 lg:space-x-20 text-[#DD90E1]`}
      >
        <li className="">
          <Link href="/music" className="cursor-pointer">
            <span className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[22px]">
              MUSIC
            </span>
          </Link>
        </li>
        <li>
          <Link href="/tour" className="cursor-pointer">
            <span className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[22px]">
              TOUR
            </span>
          </Link>
        </li>
        <motion.div
          initial="initial"
          animate="animate"
          variants={imageVariants}
          key={isScrolled ? "st_logo" : "sofitukkerlogo"}
          className={`flex justify-center ${
            isScrolled
              ? "w-[96px] xxs:w-[130px] xs:w-[160px] sm:w-[134px] md:w-[170px] lg:w-[120px]"
              : "w-[115px] xxs:w-[140px] xs:w-[175px] sm:w-[216px] md:w-[240px] lg:w-[320px]"
          }`}
        >
          <Link href="/" className="flex justify-center">
            <Image
              src={isScrolled ? st_logo : sofitukkerlogo}
              alt="Sofi Tukker Logo"
              priority
              className={`object-cover cursor-pointer ${
                isScrolled
                  ? "w-[82px] xxs:w-[87px] xs:w-[97px] sm:w-[99px] md:w-[102px] lg:w-[280px]"
                  : "w-[99px] xxs:w-[124px] xs:w-[157px] sm:w-[186px] md:w-[210px] lg:w-[280px]"
              } `}
            />
          </Link>
        </motion.div>
        <li>
          <Link href="/store" className="cursor-pointer">
            <span className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[22px]">
              STORE
            </span>
          </Link>
        </li>
        <li>
          <Link href="/signup" className="cursor-pointer">
            <span className="text-pretty text-[11px] sm:text-[13px] md:text-[16px] lg:text-[22px]">
              SIGN UP
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
