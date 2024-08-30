import Image from "next/image";
import BREADHeroImage from "@/images/homepage/homepageHeroCover.png";
import MusicTitle from "@/images/homepage/MUSICtitle.png";
import MusicStore from "@/components/MusicStore";
import TourTitle from "@/images/homepage/TOURtitle.png";
import MerchTitle from "@/images/homepage/MERCHtitle.png";
import VideoTitle from "@/images/homepage/VIDEOtitle.png";
import localFont from "next/font/local";
import BreadMerchandise from "@/components/BreadMerchandise";
import MusicVideosGallery from "@/components/MusicVideosGallery";
import throwSomeAssBuns from "@/images/homepage/breadThrowSomeAssBuns.png";
import breadArtWork from "@/images/homepage/breadAlbumArtwork.png";
import Footer from "@/components/Footer";

const beiko = localFont({
  src: "../public/fonts/Beiko.otf",
});

export default function Home() {
  return (
    <main className="">
      <div>
        <Image src={BREADHeroImage} alt="BREAD Hero Image" priority />
      </div>
      <div className="relative  bg-[#dd90e1] flex flex-col justify-center items-center">
        <div className="top-[-50px] absolute object-contain md:mx-[200px] lg:mx-[120px] z-20">
          <Image
            src={MusicTitle}
            alt="MUSIC Title"
            priority
            width={600}
            height={100}
          />
        </div>
        <div className="flex-1 w-full ">
          <MusicStore />
        </div>
      </div>
      <div className="bg-[#b9ddba] h-[500px]">
        <div className="flex pt-[66px] justify-center object-contain md:mx-[200px] lg:mx-[120px] z-20">
          <Image
            src={TourTitle}
            alt="Tour Title"
            priority
            width={600}
            height={100}
          />
        </div>
        <div
          className={`${beiko.className} flex justify-center items-center pt-[54px]`}
        >
          <button className="rounded-full text-[#dd90e1] bg-[#ffffff] border-[2px] border-white pb-3 pt-[14px] px-4 ">
            <span className="flex items-center text-[40px]">
              PURCHASE TICKETS
            </span>
          </button>
        </div>
      </div>
      <div className="bg-[#fff2e7] relative min-h-screen flex flex-col">
        <div className="flex pt-[66px] justify-center object-contain md:mx-[200px] lg:mx-[120px] z-20">
          <Image
            src={MerchTitle}
            alt="Merch Title"
            priority
            width={600}
            height={100}
          />
        </div>
        <BreadMerchandise />
      </div>
      <div className="bg-[#000000]">
        <div className="flex pt-[66px] justify-center object-contain md:mx-[200px] lg:mx-[120px] z-20 mb-[60px]">
          <Image
            src={VideoTitle}
            alt='Video Title'
            priority
            width={600}
            height={100}
          />
        </div>
        <MusicVideosGallery />

      </div>
      <div className="flex w-full h-full overflow-hidden pt-4 bg-[#000000]">
      <div className="flex-1">
        <Image
          src={throwSomeAssBuns}
          alt="Throw Some Ass Buns"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="flex-1">
        <Image
          src={breadArtWork}
          alt="Bread Album Artwork"
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
    <Footer />

    </main>
  );
}
