import breadAlbumCover from "@/images/musicpage/breadAlbumCover.jpeg";
import sofitukkerTitle from "@/images/musicpage/SofiTukkerTitle.png";
import breadTitle from "@/images/musicpage/BreadTitle.png";
import blurredAlbumCover from "@/images/musicpage/blurredBreadAlbumCover.jpg";
import stBreadLogo from "@/images/musicpage/STBreadLogo.png";
import Image from "next/image";


export default function MusicPage() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${blurredAlbumCover.src})`,
      }}
    >
      <div className="flex justify-center items-center">
        <Image 
          src={sofitukkerTitle}
          alt="Sofi Tukker"
          width={700}
          height={375}
          className=""
        />
      </div>

      <div className="flex justify-center items-center">
        <Image 
          src={breadTitle}
          alt="Bread"
          width={700}
          height={375}
          className=""
        />
      </div>

      <div className="flex justify-center items-center">
        <Image 
          src={breadAlbumCover}
          alt="Bread Album Cover"
          width={700}
          height={375}
          className=""
        />
      </div>

      <div className="flex justify-center items-center">
        <Image 
          src={stBreadLogo}
          alt="Sofi Tukker Bread Logo ~ ST Bread" 
          width={700}
          height={375}
          className=""
        />
      </div>
    </div>
  );
}