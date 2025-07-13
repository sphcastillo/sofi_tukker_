import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { beiko } from "@/utils/fonts";
import { BreadStoreItems } from "@/data/MusicStoreData";
import { useTheme } from "@/context/ThemeContext";

const MusicStoreVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
};

function MusicStore() {
  const { theme } = useTheme();
  const columnRefs = [useRef(null), useRef(null), useRef(null)];
  const inViewStates = columnRefs.map((ref) => useInView(ref, { once: false }));

  return (
    <div className="p-4 pt-[72px] sm:pt-[120px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {BreadStoreItems.map((item, index) => {
          const columnIndex = Math.floor(index / 1); // Each item will be in its own column
          return (
            <motion.div
              key={item.id}
              ref={columnRefs[columnIndex]}
              initial="initial"
              animate={inViewStates[columnIndex] ? "animate" : "initial"}
              variants={MusicStoreVariants}
              className="flex flex-col items-center"
            >
              <div className="relative w-full h-48 min-w-[230px] max-w-[400px] max-h-[300px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="w-full h-full object-contain"
                />
              </div>
              <div className={`${beiko.className} p-4`}>
                <h2
                  className={`text-[18px] xs:text-[28px] font-semibold mb-2 text-center leading-3 ${
                    theme === "theme1"
                      ? "text-theme1-musictextcolor"
                      : "text-theme2-musictextcolor"
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className={`text-[18px] xs:text-[28px] mb-4 text-center ${
                    theme === "theme1"
                      ? "text-theme1-musictextcolor"
                      : "text-theme2-musictextcolor"
                  }`}
                >
                  ${item.price}
                </p>
                <div className="flex justify-center items-center">
                  <button
                    className={`text-[16px] tracking-wide pt-2 pb-1 px-3 rounded-3xl  ${
                      theme === "theme1"
                        ? "text-theme1-musicbuttontextcolor"
                        : "text-theme2-musicbuttontextcolor"
                    }
                    ${
                      theme === "theme1"
                        ? "bg-theme1-musicbuttonbgcolor"
                        : "bg-theme2-musicbuttonbgcolor"
                    }
                                        ${
                      theme === "theme1"
                        ? "hover:text-theme1-musicbuttonhovertextcolor"
                        : "hover:text-theme2-musicbuttonhovertextcolor"
                    }
                    `}
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
export default MusicStore;
