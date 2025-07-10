"use client";
import localFont from "next/font/local";
import Image from "next/image";
import TourTitle from "@/images/homepage/TOURtitle.png";
import Link from "next/link";
import { useEffect, useState } from "react";
const franklinGothicCondensed = localFont({
  src: "../../public/fonts/FGC.ttf",
});

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
