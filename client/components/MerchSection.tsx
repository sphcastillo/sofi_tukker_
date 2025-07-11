"use client";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import MerchTitle from "@/images/homepage/merchSection/MERCHtitle.png";
import MerchTitleTheme2 from "@/images/homepage/merchSection/Merchtheme2.png";
import { useTheme } from "@/context/ThemeContext";
import SofiTukkerMerch from "@/components/SofiTukkerMerch";

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

function MerchSection() {
  const { theme } = useTheme();
  const merchRef = useRef(null);
  const merchInView = useInView(merchRef, { once: false });

  return (
    <div
      id="merchSection"
      className={`relative flex flex-col pb-9 ${
        theme === "theme1"
          ? "bg-theme1-merchbgcolor"
          : "bg-theme2-merchbgcolor"
      }`}
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
            src={theme === 'theme1' ? MerchTitle : MerchTitleTheme2} 
            alt="Merch Title"
            priority
            width={600}
            height={100}
          />
        </motion.div>
      </div>
      <SofiTukkerMerch />
    </div>
  );
}
export default MerchSection;
