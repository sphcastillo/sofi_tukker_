import Image from "next/image";
import BREADHeroImage from "@/images/homepage/homepageHeroCover.png";
import MusicTitle from "@/images/homepage/MUSICtitle.png";
import MusicStore from "@/components/MusicStore";
import TourTitle from "@/images/homepage/Tour.png";

export default function Home() {
  return (
    <main className="">
      <div>
        <Image src={BREADHeroImage} alt="BREAD Hero Image" priority />
      </div>
      <div className="relative min-h-screen bg-[#dd90e1] flex flex-col justify-center items-center">
        <div className="top-[-50px] absolute object-contain md:mx-[200px] lg:mx-[120px] z-20">
          <Image
            src={MusicTitle}
            alt="MUSIC Title"
            priority
            width={600}
            height={100}
          />
        </div>
        <div className="flex-1 w-full">
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
      </div>
    </main>
  );
}
