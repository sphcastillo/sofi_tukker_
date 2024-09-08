import localFont from "next/font/local";
import Image from "next/image";
import TourTitle from "@/images/homepage/TOURtitle.png";
const franklinGothicCondensed = localFont({
  src: "../../public/fonts/FGC.ttf",
});

const tourDates = [
  { date: "Sep 15, 2024", venue: "Madison Square Garden", city: "New York, NY" },
  { date: "Oct 1, 2024", venue: "Staples Center", city: "Los Angeles, CA" },
  { date: "Nov 20, 2024", venue: "United Center", city: "Chicago, IL" },
];



export default function TourPage() {
  return (
    <div className="pt-12 pb-5 bg-[#b9ddba]">
      <div className="flex items-center justify-center pb-8">
        <Image src={TourTitle} alt="Sofi Tukker - Tour title" />
      </div>
      <div className="container mx-auto p-4">
      {tourDates.map((tour, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 items-center bg-[#b9ddba] p-4 rounded-lg mb-4 hover:bg-[#fa264e] transition-colors duration-300">
          {/* First Column: Date and Venue */}
          <div>
            <div className={`${franklinGothicCondensed.className} text-black text-lg`}>{tour.date}</div>
            <div className={`${franklinGothicCondensed.className} text-black text-lg`}>{tour.venue}</div>
          </div>

          {/* Second Column: City */}
          <div className={`${franklinGothicCondensed.className} text-center text-lg text-black`}>{tour.city}</div>

          {/* Third Column: Buttons */}
          <div className="flex justify-end gap-2">
            <button className={`${franklinGothicCondensed.className} text-[#dd90e1] bg-[#000000] py-2 px-4 rounded-xl hover:bg-yellow-500`}>
              VIP
            </button>
            <button className={`${franklinGothicCondensed.className} text-[#dd90e1] bg-[#000000] py-2 px-4 rounded-xl hover:bg-blue-600`}>
              Tickets
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
