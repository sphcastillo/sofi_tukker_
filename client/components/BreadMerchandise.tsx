import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import hoodie from "@/images/breadMerchandise/breadHoodie1.png";
import breadtshirt from "@/images/breadMerchandise/breadTee2.png";
import crop from "@/images/breadMerchandise/breadCrop3.png";
import joggers from "@/images/breadMerchandise/breadJoggers4.png";
import tshirt from "@/images/breadMerchandise/breadTee5.png";
import thong from "@/images/breadMerchandise/breadThong6.png";
import socks from "@/images/breadMerchandise/breadSocks7.png";
import tee from "@/images/breadMerchandise/breadTee8.png";
import sticker from "@/images/breadMerchandise/breadSticker9.png";
import localFont from "next/font/local";

const beiko = localFont({
  src: "../public/fonts/Beiko.otf",
});

type BreadMerchandiseItems = {
  id: number;
  title: string;
  price: string;
  image: StaticImageData;
  link: string;
};

const BreadShopItems: BreadMerchandiseItems[] = [
  {
    id: 1,
    title: "HOODIE",
    price: "$125",
    image: hoodie,
    link: "/",
  },
  {
    id: 2,
    title: "TEE",
    price: "$45",
    image: breadtshirt,
    link: "/",
  },
  {
    id: 3,
    title: "CROP",
    price: "$35",
    image: crop,
    link: "/",
  },
  {
    id: 4,
    title: "JOGGERS",
    price: "$110",
    image: joggers,
    link: "/",
  },
  {
    id: 5,
    title: "TEE",
    price: "$45",
    image: tshirt,
    link: "/",
  },
  {
    id: 6,
    title: "THONG",
    price: "$35",
    image: thong,
    link: "/",
  },
  {
    id: 7,
    title: "SOCKS",
    price: "$30",
    image: socks,
    link: "/",
  },
  {
    id: 8,
    title: "TEE",
    price: "$45",
    image: tee,
    link: "/",
  },
  {
    id: 9,
    title: "STICKER",
    price: "$6",
    image: sticker,
    link: "/",
  },
];

const itemVariants: Variants = {
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

function BreadMerchandise() {
  const refs = BreadShopItems.map(() => useRef<HTMLDivElement>(null));
  const inViewStates = refs.map((ref) => useInView(ref, { once: false }));

  return (
    <div className="p-4 flex justify-center bg-[#fff2e7]">
      <div className="z-20 mt-[-32px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {BreadShopItems.map((item, index) => {
          const ref = refs[index];
          const isInView = inViewStates[index];
          return (
            <motion.div
              key={index}
              ref={ref}
              className="flex flex-col items-center"
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={itemVariants}
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
                <h2 className="text-[18px] xs:text-[28px] text-[#fa264e] text-center leading-tight">
                  {item.title}
                </h2>
                <p className="text-[18px] xs:text-[28px] text-[#fa264e] mb-3 text-center mt-[-8px]">
                  {item.price}
                </p>
                <div className="flex justify-center items-center">
                  <button className="text-[16px] tracking-wide text-[#eac0ff] bg-[#eb3d3b] pt-2 pb-1 px-3 rounded-3xl hover:bg-[#b562c1]">
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
export default BreadMerchandise;
