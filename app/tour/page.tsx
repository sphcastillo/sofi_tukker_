import localFont from "next/font/local";
import Image from "next/image";
import TourTitle from "@/images/homepage/TOURtitle.png";
const franklinGothicCondensed = localFont({
  src: "../../public/fonts/FGC.ttf",
});

// {
//   date: "",
//   venue: "",
//   city: "",
//   VIP: false,
//   tickets: false,
// },

const tourDates = [
  {
    date: "FEB 20, 2025",
    venue: "BELLY UP ASPEN (DJ SET)",
    city: "ASPEN, CO",
    VIP: false,
    tickets: true,
  },
  {
    date: "FEB 21, 2025",
    venue: "THE SNOW LODGE (DJ SET)",
    city: "ASPEN, CO",
    VIP: false,
    tickets: true,
  },
  {
    date: "FEB 22, 2025",
    venue: "PALM TREE MUSIC FESTIVAL ASPEN (DJ SET)",
    city: "ASPEN, CO",
    VIP: false,
    tickets: true,
  },
  {
    date: "MAR 6, 2025",
    venue: "AT OF THE WILD (DJ SET)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "MAR 28, 2025",
    venue: 'ENCORE BEACH CLUB (DJ RESIDENCY)',
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "MAR 29, 2025",
    venue: "TREEFORT MUSIC FEST (DJ SET)",
    city: "BOISE, ID",
    VIP: false,
    tickets: true,
  },
  {
    date: "APR 5, 2025",
    venue: "PALM TREE MUSIC FESTIVAL (DJ SET)",
    city: "MIAMI, FL",
    VIP: false,
    tickets: true,
  },
  {
    date: "APR 5, 2025",
    venue: "LIV (DJ SET)",
    city: "MIAMI BEACH, FL",
    VIP: false,
    tickets: true,
  },
  {
    date: "APR 18, 2025 - APR 19, 2025",
    venue: "BREAKAWAY MUSIC FESTIVAL ARIZONA (DJ SET)",
    city: "PHOENIX, AZ",
    VIP: false,
    tickets: true,
  },
  {
    date: "APR 26, 2025",
    venue: "BIG NIGHT LIVE",
    city: "BOSTON, MA",
    VIP: false,
    tickets: true,
  },
  {
    date: "MAY 2, 2025",
    venue: "ENCORE BEACH CLUB (DJ RESIDENCY)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "MAY 23, 2025 - MAY 25, 2025",
    venue: "BOTTLE ROCK NAPA VALLEY",
    city: "NAPA, CA",
    VIP: false,
    tickets: true,
  },
  {
    date: "MAY 31, 2025",
    venue: "SILO",
    city: "DALLAS, TX",
    VIP: false,
    tickets: true,
  },
  {
    date: "JUN 13, 2025",
    venue: "XS NIGHTCLUB (DJ RESIDENCY)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "JUN 25, 2025",
    venue: "ENCORE BEACH CLUB AT NIGHT (DJ RESIDENCY)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "JUN 27, 2025",
    venue: "XS NIGHTCLUB (DJ RESIDENCY)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "JUL 15, 2025",
    venue: "XS NIGHTCLUB (DJ RESIDENCY)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "JUL 16, 2025 - JUL 20, 2025",
    venue: "ELECTRIC CASTLE",
    city: "TRANSYLVANIA, ROMANIA",
    VIP: false,
    tickets: true,
  },
  {
    date: "JUL 19, 2025",
    venue: "COLOURS OF OSTRAVA",
    city: "OSTRAVA, MORAVIAN-SILESIAN REGION",
    VIP: false,
    tickets: true,
  },
  {
    date: "JUL 20, 2025",
    venue: "TOMORROWLAND (DJ SET)",
    city: "BOOM, ANTWERP, BELGIUM",
    VIP: false,
    tickets: true,
  },
  {
    date: "AUG 8, 2025 - AUG 10, 2025",
    venue: "ELEMENTS MUSIC & ARTS FESTIVAL",
    city: "LONG POND, PA",
    VIP: false,
    tickets: true,
  },
  {
    date: "AUG 9, 2025 - AUG 10, 2025",
    venue: "ÎLESONIQ FESTIVAL",
    city: "MONTREAL, CANADA",
    VIP: false,
    tickets: true,
  },
  {
    date: "AUG 13, 2025",
    venue: "ENCORE BEACH CLUB AT NIGHT (DJ RESIDENCY)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "AUG 15, 2025",
    venue: "XS NIGHTCLUB (DJ RESIDENCY)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "AUG 29, 2025",
    venue: "ENCORE BEACH CLUB (DJ RESIDENCY)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "SEP 14, 2025",
    venue: "ENCORE BEACH CLUB (DJ RESIDENCY)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
  {
    date: "SEP 26, 2025",
    venue: "XS NIGHTCLUB (DJ RESIDENCY)",
    city: "LAS VEGAS, NV",
    VIP: false,
    tickets: true,
  },
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
          <div
            key={index}
            className="grid grid-cols-3 gap-4 items-center bg-[#b9ddba] p-1 xxs:p-2 xs:p-4 md:px-12 lg:px-[120px] rounded-lg mb-4 hover:bg-[#fa264e] transition-colors duration-300"
          >
            {/* First Column: Date and Venue */}
            <div>
              <div
                className={`${franklinGothicCondensed.className} text-black text-[15px] xxs:text-[18px] sm:text-[22px]`}
              >
                {tour.date}
              </div>
              <div
                className={`${franklinGothicCondensed.className} text-black text-[15px] xxs:text-[18px] sm:text-[22px]`}
              >
                {tour.venue}
              </div>
            </div>

            {/* Second Column: City */}
            <div
              className={`${franklinGothicCondensed.className} text-center text-[15px] xxs:text-[18px] sm:text-[22px] text-black`}
            >
              {tour.city}
            </div>

            {/* Third Column: Buttons */}
            <div className="flex justify-end gap-2 flex-col xs:flex-row">
              {tour.VIP && (
                <button
                  className={`${franklinGothicCondensed.className} w-full text-[#dd90e1] bg-[#000000] text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white`}
                >
                  VIP
                </button>
              )}
              {tour.tickets ? (
                <button
                  className={`${franklinGothicCondensed.className} w-full ${
                    !tour.VIP ? "xl:max-w-[240px]" : ""
                  } text-[#dd90e1] bg-[#000000] text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white`}
                >
                  Tickets
                </button>
              ) : (
                <button
                  className={`${franklinGothicCondensed.className} w-full ${
                    !tour.VIP ? "xl:max-w-[240px]" : ""
                  } text-[#dd90e1] bg-[#000000] text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white`}
                >
                  Join Waitlist
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center pb-4 md:pt-10">
        <span
          className={`${franklinGothicCondensed.className} text-[15px] xxs:text-[18px] sm:text-[22px] text-center`}
        >
          GET NOTIFIED WHEN NEW EVENTS ARE ANNOUNCED IN YOUR AREA
        </span>
      </div>

      <div className="flex items-center justify-center pb-[72px]">
        <button
          className={`${franklinGothicCondensed.className} text-[15px] xxs:text-[18px] sm:text-[22px] text-[#dd90e1] bg-[#000000] py-2 px-4 rounded-3xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white`}
        >
          FOLLOW SOFI TUKKER
        </button>
      </div>
    </div>
  );
}
