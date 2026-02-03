"use client";
import Image from "next/image";
import MERCHtitle from "@/public/images/homepage/merchSection/MERCHtitle.png";
import Merchtheme2 from "@/public/images/homepage/merchSection/Merchtheme2.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import SofiTukkerMerch from "@/components/SofiTukkerMerch";
import { imageVariants } from "@/utils/variants";

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
            sizes="(min-width: 768px) 549px, (min-width: 640px) 457px, (min-width: 540px) 383px, (min-width: 414px) 292px, 254px"
            src={theme === 'theme1' ? MERCHtitle : Merchtheme2}
            alt="Merch Title"
          />
        </motion.div>
      </div>
      <SofiTukkerMerch />
    </div>
  );
}
export default MerchSection;
