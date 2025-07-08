import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Vinyl from "@/images/musicStore/vinyl.png";
import CD from "@/images/musicStore/cd.png";
import Cassette from "@/images/musicStore/cassette.png";
import localFont from "next/font/local";

const beiko = localFont({
    src: "../public/fonts/Beiko.otf",
  });

type MusicStoreItems = {
  id: number;
  title: string;
  price: string;
  image: StaticImageData;
  link: string;
};

const BreadStoreItems: MusicStoreItems[] = [
  {
    id: 1,
    title: "VINYL",
    price: "$34.99",
    image: Vinyl,
    link: "/",
  },
  {
    id: 2,
    title: "CD",
    price: "$14.99",
    image: CD,
    link: "/",
  },
  {
    id: 3,
    title: "CASSETTE",
    price: "$14.99",
    image: Cassette,
    link: "/",
  },
];

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
}

function MusicStore() {
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
                  layout="fill"
                  objectFit="contain"
                  className="w-full h-full"
                />
              </div>
              <div className={`${beiko.className} p-4`}>
                <h2 className="text-[18px] xs:text-[28px] font-semibold mb-2 text-center leading-3">
                  {item.title}
                </h2>
                <p className="text-[18px] xs:text-[28px] text-[#000000] mb-4 text-center">
                  {item.price}
                </p>
                <div className="flex justify-center items-center">
                  <button className="text-[16px] tracking-wide text-[#eac0ff] bg-[#000000] pt-2 pb-1 px-3 rounded-3xl hover:bg-[#b562c1]">
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
