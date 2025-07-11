"use client";
import Image from "next/image";
import BREADHeroImage from "@/images/homepage/homepageHeroCover.png";
import SofiTukkerHeroImage from "@/images/homepage/homepageHeroCoverTheme2.png";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import MusicSection from "@/components/MusicSection";
import { useTheme } from "@/context/ThemeContext";
import TourSection from "@/components/TourSection";
import MerchSection from "@/components/MerchSection";
import VideoGallerySection from "@/components/VideoGallerySection";
import ImageGallerySection from "@/components/ImageGallerySection";


export default function Home() {
  const { theme } = useTheme();
  const [hasScrolled, setHasScrolled] = useState(false);


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

  return (
    <main className="">
      {/* Hero Section */}
      <div>
        <Image
          src={theme === "theme1" ? BREADHeroImage : SofiTukkerHeroImage}
          alt="BREAD Hero Image"
          priority
        />
      </div>
      <MusicSection />
      <TourSection />
      <MerchSection />
      <VideoGallerySection />
      <ImageGallerySection />
      <Footer />
    </main>
  );
}
