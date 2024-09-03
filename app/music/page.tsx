import breadAlbumCover from "@/images/musicpage/breadAlbumCover.jpeg";
import sofitukkerTitle from "@/images/musicpage/SofiTukkerTitle.png";
import breadTitle from "@/images/musicpage/BreadTitle.png";
import blurredAlbumCover from "@/images/musicpage/blurredBreadAlbumCover.jpg";
import stBreadLogo from "@/images/musicpage/STBreadLogo.png";
import Image from "next/image";
import localFont from "next/font/local";

const franklinGothicCondensed = localFont({
  src: "../../public/fonts/FGC.ttf", 
});

const SofiTukkerMusicObjectives = [
  {
    id: 1,
    title: '"WOOF (FEAT. KAH-LO)" MUSIC VIDEO',
    url: "/",
  }, 
  {
    id: 2,
    title: 'LISTEN TO "HEY HOMIE"',
    url: "/",
  }, 
  {
    id: 3,
    title: '"HEY HOMEIE" VIDEO',
    url: "/",
  }, 
  {
    id: 4,
    title: 'PRE-SAVE ALBUM ON SPOTIFY',
    url: "/",
  },
  {
    id: 5,
    title: 'PRE-ADD ALBUM APPLE MUSIC',
    url: "/",
  },
  {
    id: 6,
    title: 'PRE-SAVE ALBUM AMAZON MUSIC',
    url: "/",
  },
  {
    id: 7,
    title: 'VINYL, CD + CASSETTE',
    url: "/",
  },
  {
    id: 8,
    title: 'LISTEN TO "THROW SOME ASS"',
    url: "/",
  },
  {
    id: 9,
    title: '"THROW SOME ASS" VIDEO',
    url: "/"
  },
  {
    id: 10,
    title: 'LISTEN TO "SPIRAL"',
    url: "/"
  },
  {
    id: 11,
    title: '"SPIRAL" MUSIC VIDEO',
    url: '/'
  }
]


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

      <div className="w-4/5 mx-auto">
        {
          SofiTukkerMusicObjectives.map((objective, index) => (
            <div key={objective.id}>
              <div className={`${franklinGothicCondensed.className} p-1 flex justify-center`}>
                <div className="rounded-3xl bg-[#E98CE6] flex justify-center">
                  <span className="text-[18px] text-[#FFF3E8] text-center">{objective.title}</span>
                </div>
              </div>
            </div>
        ))}
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