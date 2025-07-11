"use client";
import { beiko } from "@/utils/fonts";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme } = useTheme();

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
        className={`${
          beiko.className
        } flex items-center justify-center w-full max-w-screen space-x-4 xxs:space-x-5 xs:space-x-6 sm:space-x-9 md:space-x-12 lg:space-x-20 ${
          theme === "theme1"
            ? "text-theme1-navlinkcolor"
            : "text-theme2-navlinkcolor"
        }`}
      >
        <li className="">
          <Link href="/music" className="cursor-pointer">
            <span className="text-[12px] xs:text-[13px] sm:text-[14px] md:text-[16px] lg:text-[22px] lgPlus:text-[24px]">
              MUSIC
            </span>
          </Link>
        </li>
        <li>
          <Link href="/tour" className="cursor-pointer">
            <span className="text-[12px] xs:text-[13px] sm:text-[14px] md:text-[16px] lg:text-[22px] lgPlus:text-[24px]">
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
              ? "w-[96px] xxs:w-[130px] xs:w-[160px] sm:w-[134px] md:w-[170px] lg:w-[120px] "
              : "w-[115px] xxs:w-[140px] xs:w-[175px] sm:w-[216px] md:w-[240px] lg:w-[320px] lgPlus:w-[295px] xlPlus:w-[320px]"
          }`}
        >
          <Link href="/" className="flex justify-center">
            <Image
              src={isScrolled ? '/images/homepage/header/st_logo.png' : '/images/homepage/header/sofitukker_logo.png'}
              alt="Sofi Tukker Logo"
              width={397}
              height={49}
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
            <span className="text-[12px] xs:text-[13px] sm:text-[14px] md:text-[16px] lg:text-[22px] lgPlus:text-[24px]">
              STORE
            </span>
          </Link>
        </li>
        <li>
          <Link href="/signup" className="cursor-pointer">
            <span className="text-pretty text-[12px] xs:text-[13px] sm:text-[14px]  md:text-[16px] lg:text-[22px] lgPlus:text-[24px]">
              SIGN UP
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
