import SofiTukkerStore from "@/components/SofiTukkerStore";
import SofiTukkerStoreLogo from "@/images/storeFrontpage/sofitukkerstorelogo.png";
import localFont from "next/font/local";
import Image from "next/image";

const franklinGothicCondensed = localFont({
  src: "../../public/fonts/FGC.ttf",
});

export default function StorePage
() {
  return (
    <div className="w-full bg-[#FFF3E8] pb-[124px]">
      <div className="flex items-center justify-center pt-7">
        <Image 
          src={SofiTukkerStoreLogo}
          alt="Sofi Tukker Store Logo"
          width={800}
          height={225}
          className=""
          priority
        />
      </div>

     <div className="pt-12">
      <SofiTukkerStore />
      </div>
    </div>
  )
}
