"use client";
import MusicSection from "@/components/MusicSection";
import TourSection from "@/components/TourSection";
import MerchSection from "@/components/MerchSection";
import VideoGallerySection from "@/components/VideoGallerySection";
import ImageGallerySection from "@/components/ImageGallerySection";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <MusicSection />
      <TourSection />
      <MerchSection />
      <VideoGallerySection />
      <ImageGallerySection />
    </main>
  );
}
