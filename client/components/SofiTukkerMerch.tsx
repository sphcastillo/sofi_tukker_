"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SofiTukkerMerchItems } from "@/data/SofiTukkerMerchData";
import { beiko } from "@/utils/fonts";
import { useTheme } from "@/context/ThemeContext";
import { imageVariants } from "@/utils/variants";

export default function SofiTukkerMerch() {
  const { theme } = useTheme();
  const refs = SofiTukkerMerchItems.map(() => useRef<HTMLDivElement>(null));
  const inViewStates = refs.map((ref) => useInView(ref, { once: false }));

  return (
    <div
      className={`p-4 flex justify-center ${
        theme === "theme1" ? "bg-theme1-merchbgcolor" : "bg-theme2-merchbgcolor"
      }`}
    >
      <div className="z-20 mt-[-32px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {SofiTukkerMerchItems.map((item, index) => {
          const ref = refs[index];
          const isInView = inViewStates[index];
          return (
            <motion.div
              key={index}
              ref={ref}
              className="flex flex-col items-center"
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={imageVariants}
            >
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={560}
                  height={350}
                  className="max-h-[260px] object-contain z-10 w-auto h-auto"
                />
              </div>
              <div className={`${beiko.className} p-4 w-full`}>
                <h2
                  className={`text-[18px] xs:text-[28px] text-center leading-tight ${
                    theme === "theme1"
                      ? "text-theme1-merchtextcolor"
                      : "text-theme2-merchtextcolor"
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className={`text-[18px] xs:text-[28px] mb-3 text-center mt-[-8px] ${
                    theme === "theme1"
                      ? "text-theme1-merchtextcolor"
                      : "text-theme2-merchtextcolor"
                  }`}
                >
                  {item.price}
                </p>
                <div className="flex justify-center items-center">
                  <button
                    className={`text-[16px] tracking-wide pt-2 pb-1 px-3 rounded-3xl ${
                      theme === "theme1"
                        ? "text-theme1-merchbuttontextcolor"
                        : "text-theme2-merchbuttontextcolor"
                    } ${
                      theme === "theme1"
                        ? "bg-theme1-merchbuttonbgcolor"
                        : "bg-theme2-merchbuttonbgcolor"
                    }
                    ${
                      theme === "theme1"
                        ? "hover:text-theme1-merchbuttonhovertextcolor"
                        : "hover:text-theme2-merchbuttonhovertextcolor"
                    }          ${
                      theme === "theme1"
                        ? "hover:bg-theme1-merchbuttonhoverbgcolor"
                        : "hover:bg-theme2-merchbuttonhoverbgcolor"
                    }`}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
