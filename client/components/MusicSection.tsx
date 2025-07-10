"use client";
import Image from "next/image";
import MusicStore from "@/components/MusicStore";
import MusicTitle from "@/images/homepage/musicSection/MUSICtitle.png";
import MusicTitleTheme2 from "@/images/homepage/musicSection/MUSICtheme2.png";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useTheme } from "@/context/ThemeContext";

function MusicSection() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const musicRef = useRef(null);

  useEffect(() => {
    if (hasScrolled && musicRef.current) {
      gsap.fromTo(
        musicRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 }
      );
    }
  }, [hasScrolled]);

  return (
    <div
      className={`relative flex flex-col justify-center items-center ${
        theme === "theme1"
          ? "bg-theme1-musicbgcolor"
          : "bg-theme2-musicbgcolor"
      }`}
    >
      {!hasScrolled ? (
        <div className="top-[-20px] xxs:top-[-50px] absolute object-contain z-20 w-[254px] xxs:w-[292px] xs:w-[383px] sm:w-[457px] md:w-[549px]">
          <Image
            src={theme === "theme1" ? MusicTitle : MusicTitleTheme2}
            alt="MUSIC Title"
            priority
            width={600}
            height={100}
          />
        </div>
      ) : (
        <div
          ref={musicRef}
          className="top-[-20px] xxs:top-[-50px] absolute object-contain z-20 w-[254px] xxs:w-[292px] xs:w-[383px] sm:w-[457px] md:w-[549px]"
          style={{ backgroundColor: "transparent" }}
        >
          <Image
            src={theme === "theme1" ? MusicTitle : MusicTitleTheme2}
            alt="MUSIC Title"
            priority
            width={600}
            height={100}
          />
        </div>
      )}
      <div className="flex-1 w-full">
        <MusicStore />
      </div>
    </div>
  );
}
export default MusicSection;
