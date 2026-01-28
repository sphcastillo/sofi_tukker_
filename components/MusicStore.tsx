"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { beiko } from "@/utils/fonts";
import { useTheme } from "@/context/ThemeContext";
import { MusicStoreVariants } from "@/utils/variants";
import Link from "next/link";

type BreadGood = {
  id: number;
  title: string;
  price: string;
  image: string;
  link: string;
};

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
      className="flex flex-col items-center w-full max-w-full"
      whileHover={{ 
        y: -12,
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
    >
      <motion.div 
        className="relative w-full h-32 xs:h-40 sm:h-48 md:min-w-[230px] md:max-w-[400px] md:max-h-[300px]"
        whileHover={{ 
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        <Image
          src={breadGood.image}
          alt={breadGood.title}
          fill
          className="w-full h-full object-contain"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 33vw"
        />
      </motion.div>
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
          <Link href={breadGood.link} target="_blank" rel="noopener noreferrer">
          <button
            className={`text-[16px] tracking-wide pt-2 pb-1 px-3 rounded-3xl  ${
              theme === "theme1"
                ? "text-theme1-musicbuttontextcolor bg-theme1-musicbuttonbgcolor hover:text-theme1-musicbuttonhovertextcolor"
                : "text-theme2-musicbuttontextcolor bg-theme2-musicbuttonbgcolor hover:text-theme2-musicbuttonhovertextcolor"
            }`}
          >
            SHOP NOW
          </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MusicStore() {
  const { theme } = useTheme();
  const [breadGoods, setBreadGoods] = useState<BreadGood[]>([]);

  useEffect(() => {
    fetch('/api/bread-goods')
      .then((res) => res.json())
      .then((data) => setBreadGoods(data))
      .catch((err) =>
        console.error("Failed to sell those BREAD goods:", err)
      );
  }, []);

  return (
    <div className="xs:p-4 pt-[72px] sm:pt-[120px]">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
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
