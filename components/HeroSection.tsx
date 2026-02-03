"use client";
import Image from "next/image";
import homepageHeroCover from "@/public/images/homepage/hero/homepageHeroCover.png";
import homepageHeroTheme2Signed from "@/public/images/homepage/hero/homepageHeroTheme2Signed.png";
import { useTheme } from "@/context/ThemeContext";

function HeroSection() {
  const { theme } = useTheme();
  return (
    <div>
      <Image
        sizes="100vw"
        src={theme === "theme1" ? homepageHeroCover : homepageHeroTheme2Signed}
        alt={theme === "theme1" ? "SOFI TUKKER — BREAD" : "SOFI TUKKER — BUTTER, signed artwork"}
        className="w-full h-auto"
        placeholder="blur"
        priority
      />
    </div>
  );
}
export default HeroSection;
