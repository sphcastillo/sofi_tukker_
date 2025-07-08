import Image, { StaticImageData } from "next/image";
import Vinyl from "@/images/musicStore/vinyl.png";
import CD from "@/images/musicStore/cd.png";
import Cassette from "@/images/musicStore/cassette.png";
import hoodie from "@/images/breadMerchandise/breadHoodie1.png";
import breadtshirt from "@/images/breadMerchandise/breadTee2.png";
import crop from "@/images/breadMerchandise/breadCrop3.png";
import joggers from "@/images/breadMerchandise/breadJoggers4.png";
import tshirt from "@/images/breadMerchandise/breadTee5.png";
import thong from "@/images/breadMerchandise/breadThong6.png";
import socks from "@/images/breadMerchandise/breadSocks7.png";
import tee from "@/images/breadMerchandise/breadTee8.png";
import sticker from "@/images/breadMerchandise/breadSticker9.png";
import st1 from "@/images/storeFrontpage/stMusic1.png";
import st2 from "@/images/storeFrontpage/stMusic2.png";
import st3 from "@/images/storeFrontpage/stMusic3.png";
import st4 from "@/images/storeFrontpage/stMusic4.png";
import st5 from "@/images/storeFrontpage/stMusic5.png";
import st6 from "@/images/storeFrontpage/stMusic6.png";
import st7 from "@/images/storeFrontpage/stMusic7.png";
import localFont from "next/font/local";

const franklinGothicCondensed = localFont({
  src: "../public/fonts/FGC.ttf",
});

type BandStoreFrontItems = {
  id: number;
  title: string;
  image: StaticImageData;
  price: string;
};

const BandStoreProducts: BandStoreFrontItems[] = [
  {
    id: 1,
    title: "VINYL",
    price: "34.99",
    image: Vinyl,
  },
  {
    id: 2,
    title: "CD",
    price: "14.99",
    image: CD,
  },
  {
    id: 3,
    title: "CASSETTE",
    price: "14.99",
    image: Cassette,
  },
  {
    id: 4,
    title: "HOODIE",
    price: "125.00",
    image: hoodie,
  },
  {
    id: 5,
    title: "TEE",
    price: "45.00",
    image: breadtshirt,
  },
  {
    id: 6,
    title: "CROP",
    price: "35.00",
    image: crop,
  },
  {
    id: 7,
    title: "JOGGERS",
    price: "110.00",
    image: joggers,
  },
  {
    id: 8,
    title: "TEE",
    price: "45.00",
    image: tshirt,
  },
  {
    id: 9,
    title: "THONG",
    price: "35.00",
    image: thong,
  },
  {
    id: 10,
    title: "SOCKS",
    price: "30.00",
    image: socks,
  },
  {
    id: 11,
    title: "TEE",
    price: "45.00",
    image: tee,
  },
  {
    id: 12,
    title: "STICKER",
    price: "6.00",
    image: sticker,
  },
  {
    id: 13,
    title: "SOFT ANIMALS LIMITED EDITION GREEN VINYL",
    price: "35.00",
    image: st1,
  },
  {
    id: 14,
    image: st2,
    title: "WET TENNIS CD",
    price: "14.99",
  },
  {
    id: 15,
    image: st3,
    title: "WET TENNIS VINYL",
    price: "29.99",
  },
  {
    id: 16,
    image: st4,
    title: "TREEHOUSE VINYL",
    price: "29.99",
  },
  {
    id: 17,
    image: st5,
    title: "SOFT ANIMALS CD",
    price: "12.00",
  },
  {
    id: 18,
    image: st6,
    title: "DANCING ON THE PEOPLE VINYL",
    price: "24.99",
  },
  {
    id: 19,
    image: st7,
    title: "SOFT ANIMALS VINYL",
    price: "24.99",
  },
];

export default function SofiTukkerStore() {
  return (
    <div className="bg-[#FFF3E8] px-3 xs:px-[54px]">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
        {BandStoreProducts.map((item) => (
          <div
            key={item.id}
            className="relative group flex flex-col items-center"
          >
            <div className="relative w-full h-48 min-w-[230px] max-w-[400px] max-h-[300px] my-2">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full"
                objectFit="contain"
                layout="fill"
              />
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
              <h3 className={`${franklinGothicCondensed.className} text-lg `}>
                {item.title}
              </h3>
              <p className={`${franklinGothicCondensed.className} text-sm`}>
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
