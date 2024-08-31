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

function BreadMerchandise() {
  return (
    <div className="p-4 pt-[120px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {BreadShopItems.map((item) => (
          <div key={item.id} className="">
            <Image
              src={item.image}
              alt={item.title}
              width={5600} // Adjust size as needed
              height={350} // Adjust size as needed
              className=" h-[260px] object-contain"
            />
            <div className={`${beiko.className} p-4 `}>
              <h2 className="text-[28px] text-[#fa264e] text-center leading-tight">
                {item.title}
              </h2>
              <p className="text-[28px] text-[#fa264e] mb-3 text-center mt-[-8px]">
                {item.price}
              </p>
              <div className="flex justify-center items-center">
                <button className=" text-[#eac0ff] bg-[#eb3d3b] pt-2 pb-1 px-3 rounded-3xl hover:bg-[#b562c1]">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BreadMerchandise;
