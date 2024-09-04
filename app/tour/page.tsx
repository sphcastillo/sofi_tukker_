import localFont from "next/font/local";

const franklinGothicCondensed = localFont({
  src: "../../public/fonts/FGC.ttf",
});


export default function TourPage() {
  return (
    <div className="pt-12">
      <div className={`${franklinGothicCondensed.className} flex items-center justify-center `}>
        <span className="text-[28px]">HEY HOMIE, COMING SOON! ...</span>
      </div>
    </div>
  )
}
