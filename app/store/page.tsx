import SofiTukkerStore from "@/components/SofiTukkerStore";
import SofiTukkerStoreLogo from "@/images/storeFrontpage/sofitukkerstorelogo.png";
import Image from "next/image";
import localFont from "next/font/local";
import SofiTukkerBreadLogo from "@/images/musicpage/STBreadLogo.png";

const franklinGothicCondensed = localFont({
  src: "../../public/fonts/FGC.ttf",
});


export default function StorePage() {
  return (
    <div className="w-full bg-[#FFF3E8] pt-6 pb-[124px]">
      <div className="flex items-center justify-center pt-2 xs:pt-7">
        <Image
          src={SofiTukkerStoreLogo}
          alt="Sofi Tukker Store Logo"
          width={800}
          height={225}
          className="w-[289px] xxs:w-[317px] xs:w-[330px] sm:w-[410px] md:w-[470px] lg:w-[720px]"
          priority
        />
      </div>

      <div className="pt-10">
        <ul className={`${franklinGothicCondensed.className} flex flex-row justify-center space-x-5 xxs:space-x-8 items-center`}>
          <li>
            <span className="tracking-wide text-[#fa264e] text-[15px] xs:text-[18px] sm:text-[20px]">FEATURED</span>
          </li>
          <li>
            <span className="tracking-wide text-[#fa264e] text-[15px] xs:text-[18px] sm:text-[20px]">APPAREL</span>
          </li>
          <li>
            <span className="tracking-wide text-[#fa264e] text-[15px] xs:text-[18px] sm:text-[20px]">ACCESSORIES</span>
          </li>
          <li>
            <span className="tracking-wide text-[#fa264e] text-[15px] xs:text-[18px] sm:text-[20px]">MUSIC</span>
          </li>
        </ul>
      </div>

      <div className="pt-8 xs:pt-9 sm:pt-12">
        <SofiTukkerStore />
      </div>

      <div className="flex items-center justify-center pt-8">
        <Image 
          src={SofiTukkerBreadLogo}
          alt="Sofi Tukker Bread Logo"
          width={800}
          height={225}
          className="w-[119px] xxs:w-[127px] xs:w-[160px] md:w-[170px] lg:w-[180px]"
          priority
        />
      </div>
    </div>
  );
}
