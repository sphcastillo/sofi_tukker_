import Vinyl from "@/images/musicStore/vinyl.png";
import CD from "@/images/musicStore/cd.png";
import Cassette from "@/images/musicStore/cassette.png";
import { StaticImageData } from "next/image";

type MusicStoreItems = {
    id: number;
    title: string;
    price: string;
    image: StaticImageData;
    link: string;
  };
  
  export const BreadStoreItems: MusicStoreItems[] = [
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