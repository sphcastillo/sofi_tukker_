"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { beiko } from "@/utils/fonts";
import { BreadStoreItems } from "@/data/MusicStoreData";
import { useTheme } from "@/context/ThemeContext";
import { MusicStoreVariants } from "@/utils/variants";

type BreadGood = {
  id: number;
  title: string;
  price: string;
  image: string;
  link: string;
}


function MusicStore() {
  const { theme } = useTheme();
  const [breadGoods, setBreadGoods] = useState<BreadGood[]>([]);
  const columnRefs = [useRef(null), useRef(null), useRef(null)];
  const inViewStates = columnRefs.map((ref) => useInView(ref, { once: false }));

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bread-goods`)
      .then((res) => res.json())
      .then((data) => setBreadGoods(data))
      .catch((err) => console.error("Failed to sell those BREAD goods:", err));
  }, []);

  return (
    <div className="p-4 pt-[72px] sm:pt-[120px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {breadGoods.map((breadGood, index) => {
          console.log(breadGood);
          const columnIndex = Math.floor(index / 1); // Each item will be in its own column
          return (
            <motion.div
              key={breadGood.id}
              ref={columnRefs[columnIndex]}
              initial="initial"
              animate={inViewStates[columnIndex] ? "animate" : "initial"}
              variants={MusicStoreVariants}
              className="flex flex-col items-center"
            >
              <div className="relative w-full h-48 min-w-[230px] max-w-[400px] max-h-[300px]">
                <Image
                  src={breadGood.image}
                  alt={breadGood.title}
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
                  {breadGood.title}
                </h2>
                <p
                  className={`text-[18px] xs:text-[28px] mb-4 text-center ${
                    theme === "theme1"
                      ? "text-theme1-musictextcolor"
                      : "text-theme2-musictextcolor"
                  }`}
                >
                  ${breadGood.price}
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
