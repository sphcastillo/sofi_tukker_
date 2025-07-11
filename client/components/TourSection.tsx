"use client";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { beiko } from "@/utils/fonts";
import { useTheme } from "@/context/ThemeContext";
import { imageVariants } from "@/utils/variants";

function TourSection() {
  const { theme } = useTheme();
  const tourRef = useRef(null);

  const tourInView = useInView(tourRef, { once: false });
  return (
    <div className={`${
        theme === "theme1"
          ? "bg-theme1-tourbgcolor"
          : "bg-theme2-tourbgcolor"
      }`}>
      <div
        className={`flex justify-center`}
      >
        <motion.div
          ref={tourRef}
          initial="initial"
          animate={tourInView ? "animate" : "initial"}
          variants={imageVariants}
          className="flex pt-[42px] xs:pt-[66px] justify-center object-contain w-[234px] xxs:w-[254px] z-20 xs:w-[315px] sm:w-[375px] md:w-[429px]"
        >
          <Image
            src={theme === 'theme1' ? '/images/homepage/tourSection/TOURtitle.png' : '/images/homepage/tourSection/TourTheme2.png'} 
            alt="Tour Title"
            priority
            width={1158}
            height={275}
          />
        </motion.div>
      </div>
      <div
        className={`${beiko.className} flex justify-center items-center pt-[48px] xs:pt-[54px] pb-10`}
      >
        <button className={`rounded-full bg-[#ffffff] border-[2px] pb-[9px] pt-[14px] px-4 ${
          theme === "theme1"
            ? "border-theme1-tourbuttonbordercolor"
            : "border-theme2-tourbuttonbordercolor"
        } ${
            theme === "theme1"
              ? "text-theme1-tourbuttontextcolor"
              : "text-theme2-tourbuttontextcolor"
          } ${
            theme === "theme1"
              ? "bg-theme1-tourbuttonbgcolor"
              : "bg-theme2-tourbuttonbgcolor"
          }`}>
          <Link href="/tour">
            <span className="flex items-center text-[18px] sm:text-[36px]">
              PURCHASE TICKETS
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}
export default TourSection;
