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

type BreadMerchandiseItems = {
  id: number;
  title: string;
  price: string;
  image: StaticImageData;
  link: string;
};

export const BreadShopItems: BreadMerchandiseItems[] = [
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
