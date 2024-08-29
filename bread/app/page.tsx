import Image from "next/image";
import BREADHeroImage from "@/images/homepage/homepageHeroCover.png";
import MusicTitle from "@/images/homepage/MUSICtitle.png";

export default function Home() {
  return (
    <main className="">
      <div>
        <Image
          src={BREADHeroImage}
          alt="BREAD Hero Image"
          priority
        />
      </div>
      <div className="h-[635px] bg-[#dd90e1] flex justify-center items-center">
        <Image 
          src={MusicTitle}
          alt="MUSIC Title"
          priority
        />
      </div>
    </main>
  );
}
