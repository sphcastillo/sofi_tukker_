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

function MusicStore() {
  return (
    <div className="p-4 pt-[72px] sm:pt-[120px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {BreadStoreItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center"
          >
            <div className="relative w-full h-48 max-w-[400px] max-h-[300px]">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
            <div className={`${beiko.className} p-4 `}>
              <h2 className="text-[18px] xs:text-[28px] font-semibold mb-2 text-center leading-3">{item.title}</h2>
              <p className="text-[18px] xs:text-[28px] text-[#000000] mb-4 text-center">{item.price}</p>
              <div className="flex justify-center items-center">
                <button className="text-[16px] tracking-wide text-[#eac0ff] bg-[#000000] pt-2 pb-1 px-3 rounded-3xl hover:bg-[#b562c1]">
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
export default MusicStore;
