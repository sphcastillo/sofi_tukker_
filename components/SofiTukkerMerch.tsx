"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { beiko } from "@/utils/fonts";
import { useTheme } from "@/context/ThemeContext";
import { imageVariants } from "@/utils/variants";

type MerchItem = {
  id: number;
  title: string;
  price: string;
  image: string;
  link: string;
};

function MerchItem({
  item,
  theme,
  variants,
} : {
  item: MerchItem;
  theme: string;
  variants: Variants;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
    ref={ref}
    className="flex flex-col items-center"
    initial="initial"
    animate={isInView ? "animate" : "initial"}
    variants={imageVariants}
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
      className="w-full h-full flex justify-center items-center"
      whileHover={{ 
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={560}
        height={350}
        className="max-h-[260px] object-contain z-10 w-auto h-auto"
      />
    </motion.div>
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
  )
}

export default function SofiTukkerMerch() {
  const { theme } = useTheme();
  const [merchItems, setMerchItems] = useState<MerchItem[]>([]);


  useEffect(() => {
    fetch("/api/merch-products")
      .then((res) => res.json())
      .then((data) => setMerchItems(data))
      .catch(console.error);
  }, []);
  
  useEffect(() => {
    console.log("merchItems updated:", merchItems);
  }, [merchItems]);
  

  return (
    <div
      className={`p-4 flex justify-center `}
    >
      <div className="z-20 mt-[-32px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {merchItems.map((item) => (
          <MerchItem
            key={item.id}
            item={item}
            theme={theme}
            variants={imageVariants}
          />
        ))}
      </div>
    </div>
  );
}
