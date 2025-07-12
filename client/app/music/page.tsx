'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { franklinGothicCondensed } from "@/utils/fonts";
// import { SofiTukkerMusicObjectives } from "@/data/SofiTukkerMusicData";


export default function MusicPage() {
  const [musicReleases, setMusicReleases] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/music-releases`)
      .then((res) => res.json())
      .then((data) => setMusicReleases(data))
      .catch((err) => console.error("Failed to load music releases:", err));
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat pb-[76px] sm:pb-[84px] md:pb-[76px]"
      style={{
        backgroundImage: `url('/images/musicpage/blurredBreadAlbumCover.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="flex justify-center items-center pt-5 pb-1 sm:pt-7">
        <Image
          src='/images/musicpage/SofiTukkerTitle.png'
          alt="Sofi Tukker"
          width={700}
          height={375}
          priority
          className="w-[226px] xxs:w-[260px] xs:w-[342px] sm:w-[360px] md:w-[431px] lg:w-[395px]"
        />
      </div>

      <div className="flex justify-center items-center py-4">
        <Image
          src='/images/musicpage/BreadTitle.png'
          alt="Bread"
          width={700}
          height={375}
          priority
          className="w-[194px] xxs:w-[223px] xs:w-[293px] sm:w-[308px] md:w-[370px] lg:w-[338px]"
        />
      </div>

      <div className={`${franklinGothicCondensed.className} flex items-center justify-center `}>
        <span className="text-[#FFF3E8] text-[22px] xs:text-[25px] text-center lg:text-[24px]">THE NEW ALBUM OUT AUGUST 23rd</span>
      </div>

      <div className="flex justify-center items-center py-4">
        <Image
          src='/images/musicpage/breadAlbumCover.jpeg'
          alt="Bread Album Cover"
          width={700}
          height={375}
          priority
          className="w-[293px] xxs:w-[334px] xs:w-[440px] sm:w-[464px] md:w-[554px] lg:w-[508px]"
        />
      </div>

      <div
        className={`${franklinGothicCondensed.className} flex items-center justify-center`}
      >
        <span className="text-[#FFF3E8] text-[22px] xs:text-[23px] sm:text-[28px]">WITH NEW SONG</span>
      </div>

      <div
        className={`${franklinGothicCondensed.className} flex items-center justify-center pb-2 `}
      >
        <span className="text-[#FFF3E8] text-[22px] xs:text-[23px] sm:text-[28px]">&quot;HEY HOMIE&quot; OUT NOW</span>
      </div>

      <div className="w-full md:w-4/5 mx-auto">
        {musicReleases.map((release) => (
          <div key={release.id} className="mb-2">
            <div
              className={`${franklinGothicCondensed.className} p-1 flex justify-center `}
            >
              <div className="w-[80%] rounded-3xl bg-[#E98CE6] py-2 flex justify-center ">
                <Link 
                  href={objective.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                <span className="text-[18px] text-[#FFF3E8] text-center ">
                  {objective.title}
                </span>
                </Link>

              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-4/5 mx-auto pt-7 pb-3">
        <div
          className={`${franklinGothicCondensed.className} p-1 flex justify-center`}
        >
          <div className="w-[70%] rounded-3xl bg-[#FFF3E8] flex justify-center py-[6px]">
            <span className="text-[#E98CE6] ">EMAIL SIGN UP</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-3">
        <Image
          src='/images/musicpage/STBreadLogo.png'
          alt="Sofi Tukker Bread Logo ~ ST Bread"
          width={700}
          priority
          height={375}
          className="w-[64px] xxs:w-[76px] xs:w-[84px] sm:w-[96px] md:w-[116px] lg:w-[158px]"
        />
      </div>
    </div>
  );
}
