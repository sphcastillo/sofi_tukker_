"use client";
import localFont from "next/font/local";
import Image from "next/image";
import TourTitle from "@/images/homepage/TOURtitle.png";
import Link from "next/link";
import { useEffect, useState } from "react";
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

// const tourDates = [
//   {
//     date: "JUL 15, 2025",
//     venue: "BUDAPEST PARK",
//     city: "BUDAPEST, HUNGARY",
//     VIP: false,
//     tickets: true,
//     link: "https://www.livenation.hu/en/tickets/sofi-tukker-budapest-events-edp1562763",
//   },
//   {
//     date: "JUL 17, 2025",
//     venue: "ELECTRIC CASTLE",
//     city: "TRANSYLVANIA, ROMANIA",
//     VIP: false,
//     tickets: true,
//     link: "https://electriccastle.com/tickets",
//   },
//   {
//     date: "JUL 18, 2025",
//     venue: "INPULSTANZ FESTIVAL",
//     city: "VIENNA, AUSTRIA",
//     VIP: false,
//     tickets: true,
//     link: "https://www.impulstanz.com/en/social/aid2149/",
//   },
//   {
//     date: "JUL 19, 2025",
//     venue: "COLOURS OF OSTRAVA",
//     city: "OSTRAVA, MORAVIAN-SILESIAN REGION",
//     VIP: false,
//     tickets: true,
//     link: "https://www.colours.cz/vstupenky-2025/",
//   },
//   {
//     date: "JUL 20, 2025",
//     venue: "TOMORROWLAND (DJ SET)",
//     city: "BOOM, ANTWERP, BELGIUM",
//     VIP: false,
//     tickets: false,
//     link: "https://belgium.tomorrowland.com/en/passes-packages/",
//   },
//   {
//     date: "JUL 27, 2025",
//     venue: "SHAMBHALA MUSIC FESTIVAL",
//     city: "SALMO, CANADA",
//     VIP: false,
//     tickets: false,
//     link: "https://www.shambhalamusicfestival.com/",
//   },
//   {
//     date: "AUG 1, 2025",
//     venue: "NEWPORT JAZZ FESTIVAL (BUTTER SET)",
//     city: "NEWPORT, RI",
//     VIP: false,
//     tickets: false,
//     link: "https://newportjazz.org/",
//   },
//   {
//     date: "AUG 9, 2025",
//     venue: "ELEMENTS MUSIC & ARTS FESTIVAL",
//     city: "LONG POND, PA",
//     VIP: false,
//     tickets: true,
//     link: "https://www.elementsfest.us/",
//   },
//   {
//     date: "AUG 10, 2025",
//     venue: "ÎLESONIQ FESTIVAL",
//     city: "MONTREAL, CANADA",
//     VIP: false,
//     tickets: true,
//     link: "https://www.ticketmaster.ca/event/310060F7E5C355F9?lang=fr-ca&brand=ilesoniq&language=en-ca",
//   },
//   {
//     date: "AUG 13, 2025",
//     venue: "ENCORE BEACH CLUB AT NIGHT (DJ RESIDENCY)",
//     city: "LAS VEGAS, NV",
//     VIP: false,
//     tickets: true,
//     link: "https://www.wynnsocial.com/event/EVE116300020250813/sofi-tukker/",
//   },
//   {
//     date: "AUG 15, 2025",
//     venue: "XS NIGHTCLUB (DJ RESIDENCY)",
//     city: "LAS VEGAS, NV",
//     VIP: false,
//     tickets: true,
//     link: "https://www.wynnsocial.com/event/EVE111500020250815/sofi-tukker/",
//   },
//   {
//     date: "AUG 16, 2025",
//     venue: "THE CONCOURSE PROJECT",
//     city: "AUSTIN, TX",
//     VIP: false,
//     tickets: false,
//     link: "https://go.seated.com/tour-events/a056855a-e67d-49f4-8560-b5dffd9a64bb?utm_referrer=https%3A%2F%2Fsofitukker.com%2F",
//   },
//   {
//     date: "AUG 17, 2025",
//     venue: "SPLASH HOUSE",
//     city: "PALM SPRINGS, CA",
//     VIP: false,
//     tickets: true,
//     link: "https://www.tixr.com/groups/splashhouse/events/splash-house-2025-130850",
//   },
//   {
//     date: "AUG 29, 2025",
//     venue: "ENCORE BEACH CLUB (DJ RESIDENCY)",
//     city: "LAS VEGAS, NV",
//     VIP: false,
//     tickets: true,
//     link: "https://www.wynnsocial.com/event/EVE110300020250829/sofi-tukker/",
//   },
//   {
//     date: "AUG 30, 2025",
//     venue: "NORTH COAST MUSIC FESTIVAL",
//     city: "BRIDGEVIEW, IL",
//     VIP: false,
//     tickets: true,
//     link: "https://wl.seetickets.us/event/North-Coast-Music-Festival-2025-15-Year-Anniversary/619463?afflky=NorthCoastMusicFestival",
//   },
//   {
//     date: "AUG 31, 2025",
//     venue: "CABANA POOL BAR",
//     city: "TORONTO, ON",
//     VIP: false,
//     tickets: true,
//     link: "https://www.ticketweb.ca/event/sofi-tukker-cabana-toronto-tickets/14379943?pl=cabanatoronto",
//   },
//   {
//     date: "SEP 14, 2025",
//     venue: "ENCORE BEACH CLUB (DJ RESIDENCY)",
//     city: "LAS VEGAS, NV",
//     VIP: false,
//     tickets: true,
//     link: "https://www.tixr.com/groups/ebc/events/wynn-las-vegas--sofi-tukker-128175?_gl=1*bio7ox*_gcl_au*MTg3NzczODI2Ni4xNzUxOTI3MDAz*_ga*ODE3NTc2OTY5LjE3NTE5MjcwMDQ.*_ga_WWT4E4PXL7*czE3NTE5MjcwMDMkbzEkZzEkdDE3NTE5MjcwMjQkajM5JGwwJGgw&_ga=2.145575540.1524183808.1751927004-817576969.1751927004",
//   },
//   {
//     date: "SEP 26, 2025",
//     venue: "XS NIGHTCLUB (DJ RESIDENCY)",
//     city: "LAS VEGAS, NV",
//     VIP: false,
//     tickets: true,
//     link: "https://www.wynnsocial.com/event/EVE111500020250926/sofi-tukker/",
//   },
//   {
//     date: "OCT 4, 2025",
//     venue: "PALM TREE MUSIC FESTIVAL - MONTECITO",
//     city: "MONTECITO, CA",
//     VIP: false,
//     tickets: true,
//     link: "https://posh.vip/e/palm-tree-music-festival-montecito",
//   },
//   {
//     date: "NOV 9, 2025",
//     venue: "EDC - ORLANDO",
//     city: "ORLANDO, FL",
//     VIP: false,
//     tickets: true,
//     link: "https://edcorlando.frontgatetickets.com/?irgwc=1&clickid=V02QCa1P0xycTmuVoOQuFTBsUksSRlUdIx6ZWw0&camefrom=CFC_BUYAT_1387536&impradid=1387536&REFERRAL_ID=tmfeedbuyat1387536&wt.mc_id=aff_BUYAT_1387536&utm_source=1387536-Seated&impradname=Seated&utm_medium=affiliate&ircid=4272",
//   },
//   // {
//   //   date: "",
//   //   venue: "",
//   //   city: "",
//   //   VIP: false,
//   //   tickets: true,
//   // },
// ];

type TourDate = {
  id: number;
  date: string;
  venue: string;
  city: string;
  VIP: boolean;
  tickets: boolean;
  link: string;
};

export default function TourPage() {
  const [tourDates, setTourDates] = useState<TourDate[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tour-dates`)
      .then((res) => res.json())
      .then((data) => setTourDates(data))
      .catch((err) => console.error("Failed to load tour dates:", err));
  }, []);

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
                <Link href={tour.link} target="_blank">
                  <div
                    className={`${franklinGothicCondensed.className} w-full ${
                      !tour.VIP ? "xl:max-w-[240px]" : ""
                    } text-[#dd90e1] bg-[#000000] text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white`}
                  >
                    Tickets
                  </div>
                </Link>
              ) : (
                <Link href={tour.link} target="_blank">
                  <div
                    className={`${franklinGothicCondensed.className} w-full ${
                      !tour.VIP ? "xl:max-w-[240px]" : ""
                    } text-[#dd90e1] bg-[#000000] text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white`}
                  >
                    Join Waitlist
                  </div>
                </Link>
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
