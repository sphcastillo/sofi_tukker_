"use client";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

function HeroSection() {
  const { theme } = useTheme();
  return (
    <div>
      <Image
        src={theme === "theme1" ? '/images/homepage/hero/homepageHeroCover.png' : '/images/homepage/hero/homepageHeroTheme2Signed.png'}
        alt="BREAD Hero Image"
        width={2888}
        height={1373}
        priority
      />
    </div>
  );
}
export default HeroSection;
