"use client";
import { beiko } from "@/utils/fonts";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { imageVariants } from "@/utils/variants";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY:", window.scrollY);
      setIsScrolled(window.scrollY > 52);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let logoSrc = "/images/homepage/header/sofitukker_logo.png";
  let logoWidthClassName = "";

  if (!isScrolled) {
    if (theme === "theme1") {
      logoSrc = "/images/homepage/header/st_logo.png";
      logoWidthClassName =
        "w-[82px] xxs:w-[87px] xs:w-[97px] sm:w-[99px] md:w-[102px] lg:w-[280px]";
    } else {
      logoSrc = "/images/homepage/header/sofitukkertheme2.png";
      logoWidthClassName =
        "";
    }
  } else {
    logoWidthClassName =
      "w-[99px] xxs:w-[124px] xs:w-[157px] sm:w-[186px] md:w-[210px] lg:w-[280px]";
  }

  const navLinks = [
    { href: "/music", label: "MUSIC" },
    { href: "/tour", label: "TOUR" },
    { href: "/store", label: "STORE" },
    { href: "/signup", label: "SIGN UP" },
  ];

  return (
    <div
      className={`w-full mx-auto flex justify-center pb-4 sm:pb-6 transition-all duration-300 ${
        isScrolled ? "sticky top-0 z-50 backdrop-blur-md" : ""
      }`}
    >
      <ul
        className={`${
          beiko.className
        } flex items-center justify-center w-full max-w-screen space-x-4 xxs:space-x-5 xs:space-x-6 sm:space-x-9 md:space-x-12 lg:space-x-20 ${
          theme === "theme1"
            ? "text-theme1-navlinkcolor"
            : "text-theme2-navlinkcolor"
        }`}
      >
        {navLinks.slice(0, 2).map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className="cursor-pointer">
              <span className="text-[12px] xs:text-[13px] sm:text-[14px] md:text-[16px] lg:text-[22px] lgPlus:text-[24px]">
                {label}
              </span>
            </Link>
          </li>
        ))}

        <motion.div
          initial="initial"
          animate="animate"
          variants={imageVariants}
          className={`flex justify-center transition-all duration-300 ${
            isScrolled
              ? "w-[96px] xxs:w-[130px] xs:w-[160px] sm:w-[134px] md:w-[170px] lg:w-[120px] "
              : "w-[115px] xxs:w-[140px] xs:w-[175px] sm:w-[216px] md:w-[240px] lg:w-[320px] lgPlus:w-[295px] xlPlus:w-[320px]"
          }`}
        >
          <Link href="/" className="flex justify-center">
            <Image
              src={logoSrc}
              alt="Sofi Tukker Logo"
              width={397}
              height={49}
              priority
              className={`object-cover cursor-pointer ${logoWidthClassName}`}
            />
          </Link>
        </motion.div>
        {navLinks.slice(2).map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className="cursor-pointer">
              <span className="text-[12px] xs:text-[13px] sm:text-[14px] md:text-[16px] lg:text-[22px] lgPlus:text-[24px]">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Navbar;
