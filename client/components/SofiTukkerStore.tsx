"use client";
import Image from "next/image";
import { BandStoreProducts } from "@/data/SofiTukkerStoreData";
import { franklinGothicCondensed } from "@/utils/fonts";
import { useEffect, useState } from "react";

type StoreItem = {
  id: number;
  title: string;
  price: string;
  image: string;
};

export default function SofiTukkerStore() {
  const [storeItems, setStoreItems] = useState<StoreItem[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/store-items`)
      .then((res) => res.json())
      .then((data) => setStoreItems(data))
      .catch((err) => console.error("Failed to load store items:", err));
  }, []);


  return (
    <div className="bg-[#FFF3E8] px-3 xs:px-[54px]">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
        {storeItems.map((item, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center"
          >
            <div className="relative w-full h-48 min-w-[230px] max-w-[400px] max-h-[300px] my-2">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
                fill
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
