import { StaticImageData } from "next/image";
import Vinyl from "@/images/musicStore/vinyl.png";
import CD from "@/images/musicStore/cd.png";
import Cassette from "@/images/musicStore/cassette.png";
import woof from "@/images/breadMerchandise/woof.png";
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

type BandStoreFrontItems = {
  id: number;
  title: string;
  image: StaticImageData;
  price: string;
};

export const BandStoreProducts: BandStoreFrontItems[] = [
  {
    id: 1,
    title: "TEE",
    price: "45.00",
    image: woof,
  },
  {
    id: 2,
    title: "VINYL",
    price: "34.99",
    image: Vinyl,
  },
  {
    id: 3,
    title: "CD",
    price: "14.99",
    image: CD,
  },
  {
    id: 4,
    title: "CASSETTE",
    price: "14.99",
    image: Cassette,
  },
  {
    id: 5,
    title: "HOODIE",
    price: "125.00",
    image: hoodie,
  },
  {
    id: 6,
    title: "TEE",
    price: "45.00",
    image: breadtshirt,
  },
  {
    id: 7,
    title: "CROP",
    price: "35.00",
    image: crop,
  },
  {
    id: 8,
    title: "JOGGERS",
    price: "110.00",
    image: joggers,
  },
  {
    id: 9,
    title: "TEE",
    price: "45.00",
    image: tshirt,
  },
  {
    id: 10,
    title: "THONG",
    price: "35.00",
    image: thong,
  },
  {
    id: 11,
    title: "SOCKS",
    price: "30.00",
    image: socks,
  },
  {
    id: 12,
    title: "TEE",
    price: "45.00",
    image: tee,
  },
  {
    id: 13,
    title: "STICKER",
    price: "6.00",
    image: sticker,
  },
  {
    id: 14,
    title: "SOFT ANIMALS LIMITED EDITION GREEN VINYL",
    price: "35.00",
    image: st1,
  },
  {
    id: 15,
    image: st2,
    title: "WET TENNIS CD",
    price: "14.99",
  },
  {
    id: 16,
    image: st3,
    title: "WET TENNIS VINYL",
    price: "29.99",
  },
  {
    id: 17,
    image: st4,
    title: "TREEHOUSE VINYL",
    price: "29.99",
  },
  {
    id: 18,
    image: st5,
    title: "SOFT ANIMALS CD",
    price: "12.00",
  },
  {
    id: 19,
    image: st6,
    title: "DANCING ON THE PEOPLE VINYL",
    price: "24.99",
  },
  {
    id: 20,
    image: st7,
    title: "SOFT ANIMALS VINYL",
    price: "24.99",
  },
];
