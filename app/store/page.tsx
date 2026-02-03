'use client';
import Image from "next/image";
import sofitukkerstorelogo from "@/public/images/storeFrontpage/sofitukkerstorelogo.png";
import STBreadLogo from "@/public/images/musicpage/STBreadLogo.png";
import { useEffect, useState } from "react";
import { franklinGothicCondensed } from "@/utils/fonts";

type StoreItem = {
  id: number;
  title: string;
  price: string;
  image: string;
};

export default function StorePage() {
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);

  useEffect(() => {
    fetch('/api/store-items')
      .then((res) => res.json())
      .then((data) => setStoreItems(data))
      .catch((err) => console.error("Failed to load store items:", err));
  }, []);
  return (
    <div className="w-full bg-[#FFF3E8] pt-6 pb-[124px]">
      <div className="flex items-center justify-center pt-2 xs:pt-7">
        <Image
          sizes="(min-width: 1024px) 720px, (min-width: 768px) 470px, (min-width: 640px) 410px, (min-width: 540px) 330px, (min-width: 414px) 317px, 289px"
          src={sofitukkerstorelogo}
          alt="Sofi Tukker Store Logo"
          className="w-[289px] xxs:w-[317px] xs:w-[330px] sm:w-[410px] md:w-[470px] lg:w-[720px]"
          priority
        />
      </div>

      <div className="hidden pt-10">
        <ul className={`${franklinGothicCondensed.className} flex flex-row justify-center space-x-5 xxs:space-x-8 items-center`}>
          <li>
            <span className="tracking-wide text-[#fa264e] text-[15px] xs:text-[18px] sm:text-[20px]">FEATURED</span>
          </li>
          <li>
            <span className="tracking-wide text-[#fa264e] text-[15px] xs:text-[18px] sm:text-[20px]">APPAREL</span>
          </li>
          <li>
            <span className="tracking-wide text-[#fa264e] text-[15px] xs:text-[18px] sm:text-[20px]">ACCESSORIES</span>
          </li>
          <li>
            <span className="tracking-wide text-[#fa264e] text-[15px] xs:text-[18px] sm:text-[20px]">MUSIC</span>
          </li>
        </ul>
      </div>

      <div className="pt-8 xs:pt-9 sm:pt-12">
        <div className="bg-[#FFF3E8] px-4 sm:px-12">
          <div className="">
            <p className={`${franklinGothicCondensed.className} text-[#fa264e] text-[20px] tracking-wide`}>Total Items: {storeItems.length}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {storeItems.map((item) => (
              <div
                key={item.id}
                className="relative group flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-3 active:-translate-y-3"
              >
                <div className="relative w-full h-32 xs:h-40 sm:h-48 md:max-w-[400px] md:max-h-[300px] my-2">
                  <Image
                    sizes="(min-width: 1344px) 400px, (min-width: 768px) calc((100vw - 144px) / 3), (min-width: 640px) calc((100vw - 120px) / 2), calc((100vw - 48px) / 2)"
                    src={item.image}
                    alt={item.title}
                    className="object-contain"
                    fill
                    priority={item.id <= 3}
                  />
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
                  <h3 className={`${franklinGothicCondensed.className} text-pretty text-center text-lg `}>
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
      </div>

      <div className="flex items-center justify-center pt-8">
        <Image
          sizes="(min-width: 1024px) 180px, (min-width: 768px) 170px, (min-width: 540px) 160px, (min-width: 414px) 127px, 119px"
          src={STBreadLogo}
          alt="Sofi Tukker Bread Logo"
          className="w-[119px] xxs:w-[127px] xs:w-[160px] md:w-[170px] lg:w-[180px]"
        />
      </div>
    </div>
  );
}
