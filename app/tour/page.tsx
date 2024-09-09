import localFont from "next/font/local";
import Image from "next/image";
import TourTitle from "@/images/homepage/TOURtitle.png";
const franklinGothicCondensed = localFont({
  src: "../../public/fonts/FGC.ttf",
});

const tourDates = [
  { date: "SEP 18, 2024", venue: "MOODY AMPHITHEATER", city: "AUSTIN, TX" },
  { date: "SEP 20, 20024", venue: "BAYOU MUSIC CENTER", city: "HOUSTON, TX" },
  { date: "SEP 21, 2024", venue: "SOUTH SIDE BALLROOM", city: "DALLAS, TX" },
  { date: "SEP 24, 2024", venue: "TABERNACLE", city: "ATLANTA, GA" },
  { date: "SEP 26, 2024", venue: "FOREST HILLS STADIUM", city: "QUEENS, NY" },
  { date: "SEP 30, 2024", venue: "AGORA THEATRE AND BALLROOM", city: "CLEVELAND, OH" },
  { date: "OCT 2, 2024", venue: "FRANKLIN MUSIC HALL", city: "PHILADELPHIA, PA" },
  { date: "OCT 3, 2024", venue: "ROADRUNNER", city: "BOSTON, MA" },
  { date: "OCT 4, 2024", venue: "ROADRUNNER", city: "BOSTON, MA" },
  { date: "OCT 5, 2024", venue: "THE ANTHEM", city: "WASHINGTON, DC" },
  { date: "OCT 8, 2024", venue: "MTELUS", city: "MONTREAL, QC" },
  { date: "OCT 9, 2024", venue: "MTELUS", city: "MONTREAL, QC" },
  { date: "OCT 11, 2024", venue: "HISTORY", city: "TORONTO, ON" },
  { date: "OCT 12, 2024", venue: "HISTORY", city: "TORONTO, ON" },
  { date: "OCT 18, 2024", venue: "THE ARMORY", city: "MINNEAPOLIS, MN" },
  { date: "OCT 19, 2024", venue: "BYLINE BANK ARAGON BALLROOM", city: "CHICAGO, IL" },
  { date: "OCT 22, 2024", venue: "THE MIDLAND THEATRE", city: "KANSAS CITY, MO" },
  { date: "OCT 24, 2024", venue: "RED ROCKS AMPHITHEATRE", city: "MORRISON, CO" },
  { date: "OCT 25, 2024", venue: "ROCKWELL AT THE COMPLEX", city: "SALT LAKE CITY, UT" },
  { date: "OCT 29, 2024", venue: "THEATER OF THE CLOUDS AT MODA CENTER", city: "PORTLAND, OR" },
  { date: "OCT 30, 2024", venue: "WAMU THEATER", city: "SEATTLE, WA" },
  { date: "NOV 2, 2024", venue: "THE TORCH AT THE LA MEMORIAL COLISEUM", city: "LOS ANGELES, CA" },
  { date: "NOV 3, 2024", venue: "GALLAGHER SQUARE AT PETCO PARK", city: "SAN DIEGO, CA" },
  { date: "NOV 7, 2024", venue: "SANTA BARBARA BOWL", city: "SANTA BARBARA, CA" },
  { date: "NOV 8, 2024", venue: "BILL GRAHAM CIVIC AUDITORIUM", city: "SAN FRANCISCO, CA" },
  { date: "NOV 15, 2024", venue: "MARQUEE NIGHTCLUB [DJ RESIDENCY]", city: "LAS VEGAS, NV" },
  { date: "NOV 20, 2024", venue: "GROSSE FREIHEIT 36", city: "HAMBURG, GERMANY" },
  { date: "NOV 21, 2024", venue: "LANXESS ARENA", city: "COLOGNE, GERMANY" },
  { date: "NOV 23, 2024", venue: "WIENER STADTHALLE", city: "VIENNA, AUSTRIA" },
  { date: "NOV 24, 2024", venue: "UBER EATS MUSIC HALL", city: "BERLIN, GERMANY" },
  { date: "NOV 26, 2024", venue: "ZIGGO DOME", city: "AMSTERDAM, NETHERLANDS" },
  { date: "NOV 29, 2024", venue: "MEDIOLANUM FORUM", city: "MILAN, ITALY" },
  { date: "DEC 1, 2024", venue: "KOMPLEX 457", city: "ZÜRICH, SWITZERLAND" },
  { date: "DEC 3, 2024", venue: "WIZINK CENTER", city: "MADRID, SPAIN" },
  { date: "DEC 6, 2024", venue: "ING ARENA", city: "BRUSSELS, BELGIUM" },
  { date: "DEC 7, 2024", venue: "ACCOR ARENA", city: "PARIS, FRANCE" },
  { date: "DEC 11, 2024", venue: "THE 02", city: "LONDON, UK" },
  { date: "DEC 13, 2024", venue: "3ARENA", city: "DUBLIN, IRELAND" },
];



export default function TourPage() {
  return (
    <div className="pt-12 pb-5 bg-[#b9ddba]">
      <div className="flex items-center justify-center pb-8">
        <Image 
          src={TourTitle} 
          alt="Sofi Tukker - Tour title" 
          priority
          className="w-[270px] xxs:w-[312px] xs:w-[412px] sm:w-[487px] md:w-[432px] lg:w-[600px]"
        />
      </div>
      
      <div className="container mx-auto p-4">
      {tourDates.map((tour, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 items-center bg-[#b9ddba] p-1 xxs:p-2 xs:p-4 md:px-12 lg:px-[120px] rounded-lg mb-4 hover:bg-[#fa264e] transition-colors duration-300">
          {/* First Column: Date and Venue */}
          <div>
            <div className={`${franklinGothicCondensed.className} text-black text-[15px] xxs:text-[18px] sm:text-[22px]`}>{tour.date}</div>
            <div className={`${franklinGothicCondensed.className} text-black text-[15px] xxs:text-[18px] sm:text-[22px]`}>{tour.venue}</div>
          </div>

          {/* Second Column: City */}
          <div className={`${franklinGothicCondensed.className} text-center text-[15px] xxs:text-[18px] sm:text-[22px] text-black`}>{tour.city}</div>

          {/* Third Column: Buttons */}
          <div className="flex justify-end gap-2 flex-col xs:flex-row">
            <button className={`${franklinGothicCondensed.className} w-full text-[#dd90e1] bg-[#000000] text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white`}>
              VIP
            </button>
            <button className={`${franklinGothicCondensed.className} w-full text-[#dd90e1] bg-[#000000] text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white`}>
              Tickets
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="flex items-center justify-center pb-4">
      <span className={`${franklinGothicCondensed.className} text-[15px] xxs:text-[18px] sm:text-[22px]`}>GET NOTIFIED WHEN NEW EVENTS ARE ANNOUNCED IN YOUR AREA</span>
    </div>

    <div className="flex items-center justify-center pb-[72px]">
      <button className={`${franklinGothicCondensed.className} text-[15px] xxs:text-[18px] sm:text-[22px] text-[#dd90e1] bg-[#000000] py-2 px-4 rounded-3xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white`}>
        FOLLOW SOFI TUKKER
      </button>
    </div>
    </div>
  )
}
