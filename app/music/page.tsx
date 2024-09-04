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
    title: '"HEY HOMIE" VIDEO',
    url: "/",
  },
  {
    id: 4,
    title: "PRE-SAVE ALBUM ON SPOTIFY",
    url: "/",
  },
  {
    id: 5,
    title: "PRE-ADD ALBUM APPLE MUSIC",
    url: "/",
  },
  {
    id: 6,
    title: "PRE-SAVE ALBUM AMAZON MUSIC",
    url: "/",
  },
  {
    id: 7,
    title: "VINYL, CD + CASSETTE",
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
    url: "/",
  },
  {
    id: 10,
    title: 'LISTEN TO "SPIRAL"',
    url: "/",
  },
  {
    id: 11,
    title: '"SPIRAL" MUSIC VIDEO',
    url: "/",
  },
];

export default function MusicPage() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center pb-[76px] sm:pb-[84px] md:pb-[76px]"
      style={{
        backgroundImage: `url(${blurredAlbumCover.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="flex justify-center items-center pt-5 pb-1 sm:pt-7">
        <Image
          src={sofitukkerTitle}
          alt="Sofi Tukker"
          width={700}
          height={375}
          className="w-[226px] xxs:w-[260px] xs:w-[342px] sm:w-[360px] md:w-[431px] lg:w-[395px]"
        />
      </div>

      <div className="flex justify-center items-center py-4">
        <Image
          src={breadTitle}
          alt="Bread"
          width={700}
          height={375}
          className="w-[194px] xxs:w-[223px] xs:w-[293px] sm:w-[308px] md:w-[370px] lg:w-[338px]"
        />
      </div>

      <div className={`${franklinGothicCondensed.className} flex items-center justify-center `}>
        <span className="text-[#FFF3E8] text-[22px] xs:text-[25px] text-center lg:text-[24px]">THE NEW ALBUM OUT AUGUST 23rd</span>
      </div>

      <div className="flex justify-center items-center py-4">
        <Image
          src={breadAlbumCover}
          alt="Bread Album Cover"
          width={700}
          height={375}
          className="w-[293px] xxs:w-[334px] xs:w-[440px] sm:w-[464px] md:w-[554px] lg:w-[508px]"
        />
      </div>

      <div
        className={`${franklinGothicCondensed.className} flex items-center justify-center`}
      >
        <span className="text-[#FFF3E8] text-[22px] xs:text-[23px] sm:text-[28px]">WITH NEW SONG</span>
      </div>

      <div
        className={`${franklinGothicCondensed.className} flex items-center justify-center pb-2 `}
      >
        <span className="text-[#FFF3E8] text-[22px] xs:text-[23px] sm:text-[28px]">"HEY HOMIE" OUT NOW</span>
      </div>

      <div className="w-full md:w-4/5 mx-auto">
        {SofiTukkerMusicObjectives.map((objective) => (
          <div key={objective.id} className="mb-2">
            <div
              className={`${franklinGothicCondensed.className} p-1 flex justify-center `}
            >
              <div className="w-[80%] rounded-3xl bg-[#E98CE6] py-2 flex justify-center">
                <span className="text-[18px] text-[#FFF3E8] text-center">
                  {objective.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-4/5 mx-auto pt-7 pb-3">
        <div
          className={`${franklinGothicCondensed.className} p-1 flex justify-center`}
        >
          <div className="w-[70%] rounded-3xl bg-[#FFF3E8] flex justify-center py-[6px]">
            <span className="text-[#E98CE6]">EMAIL SIGN UP</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center  pt-3">
        <Image
          src={stBreadLogo}
          alt="Sofi Tukker Bread Logo ~ ST Bread"
          width={700}
          height={375}
          className="w-[64px] xxs:w-[76px] xs:w-[84px] sm:w-[96px] md:w-[116px] lg:w-[158px]"
        />
      </div>
    </div>
  );
}
