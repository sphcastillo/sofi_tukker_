"use client";

import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import MusicSection from "@/components/MusicSection";
import TourSection from "@/components/TourSection";
import MerchSection from "@/components/MerchSection";
import VideoGallerySection from "@/components/VideoGallerySection";
import ImageGallerySection from "@/components/ImageGallerySection";
import HeroSection from "@/components/HeroSection";


export default function Home() {
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
    <main>
      <HeroSection />
      <MusicSection />
      <TourSection />
      <MerchSection />
      <VideoGallerySection />
      <ImageGallerySection />
      <Footer />
    </main>
  );
}
