"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { beiko } from "@/utils/fonts";
import { useTheme } from "@/context/ThemeContext";
import { MusicStoreVariants } from "@/utils/variants";
// import { BreadStoreItems } from "@/data/MusicStoreData";

type BreadGood = {
  id: number;
  title: string;
  price: string;
  image: string;
  link: string;
};

// ✅ Subcomponent that handles animation and in-view logic per item
function BreadItem({
  breadGood,
  theme,
  variants,
}: {
  breadGood: BreadGood;
  theme: string;
  variants: Variants;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants}
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
                ? "text-theme1-musicbuttontextcolor bg-theme1-musicbuttonbgcolor hover:text-theme1-musicbuttonhovertextcolor"
                : "text-theme2-musicbuttontextcolor bg-theme2-musicbuttonbgcolor hover:text-theme2-musicbuttonhovertextcolor"
            }`}
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ✅ Main component that fetches data
function MusicStore() {
  const { theme } = useTheme();
  const [breadGoods, setBreadGoods] = useState<BreadGood[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bread-goods`)
      .then((res) => res.json())
      .then((data) => setBreadGoods(data))
      .catch((err) =>
        console.error("Failed to sell those BREAD goods:", err)
      );
  }, []);

  return (
    <div className="p-4 pt-[72px] sm:pt-[120px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {breadGoods.map((breadGood) => (
          <BreadItem
            key={breadGood.id}
            breadGood={breadGood}
            theme={theme}
            variants={MusicStoreVariants}
          />
        ))}
      </div>
    </div>
  );
}

export default MusicStore;
