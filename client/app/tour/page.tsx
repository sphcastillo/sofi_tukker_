"use client";
import { franklinGothicCondensed } from "@/utils/fonts";
import Image from "next/image";
import TourTitle from "@/images/homepage/tourSection/TOURtitle.png";
import TourTitle2 from "@/images/homepage/tourSection/TourTheme2.png";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

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
  const { theme } = useTheme();
  const [tourDates, setTourDates] = useState<TourDate[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tour-dates`)
      .then((res) => res.json())
      .then((data) => setTourDates(data))
      .catch((err) => console.error("Failed to load tour dates:", err));
  }, []);

  return (
    <div
      className={`pt-12 pb-5 ${
        theme === "theme1"
          ? "bg-theme1-tourpagebgcolor"
          : "bg-theme2-tourpagebgcolor"
      }`}
    >
      <div className="flex items-center justify-center pb-8">
        <Image
          src={theme === "theme1" ? TourTitle : TourTitle2}
          alt="Sofi Tukker - Tour title"
          priority
          className="w-[270px] xxs:w-[312px] xs:w-[412px] sm:w-[487px] md:w-[432px] lg:w-[600px]"
        />
      </div>

      <div className="container mx-auto p-4">
        {tourDates.map((tour, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 gap-4 items-center p-1 xxs:p-2 xs:p-4 md:px-12 lg:px-[120px] rounded-lg mb-4 hover:bg-[#fa264e] transition-colors duration-300 ${
              theme === "theme1"
                ? "bg-theme1-tourpagebgcolor"
                : "bg-theme2-tourpagebgcolor"
            }`}
          >
            {/* First Column: Date and Venue */}
            <div>
              <div
                className={`${
                  franklinGothicCondensed.className
                } text-[15px] xxs:text-[18px] sm:text-[22px] ${
                  theme === "theme1"
                    ? "text-theme1-tourpagetextcolor"
                    : "text-theme2-tourpagetextcolor"
                }`}
              >
                {tour.date}
              </div>
              <div
                className={`${franklinGothicCondensed.className} ${
                  theme === "theme1"
                    ? "text-theme1-tourpagetextcolor"
                    : "text-theme2-tourpagetextcolor"
                } text-[15px] xxs:text-[18px] sm:text-[22px]`}
              >
                {tour.venue}
              </div>
            </div>

            {/* Second Column: City */}
            <div
              className={`${
                franklinGothicCondensed.className
              } text-center text-[15px] xxs:text-[18px] sm:text-[22px] ${
                theme === "theme1"
                  ? "text-theme1-tourpagetextcolor"
                  : "text-theme2-tourpagetextcolor"
              }`}
            >
              {tour.city}
            </div>

            {/* Third Column: Buttons */}
            <div className="flex justify-end gap-2 flex-col xs:flex-row">
              {tour.VIP && (
                <button
                  className={`${
                    franklinGothicCondensed.className
                  } w-full text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white ${
                    theme === "theme1"
                      ? "text-theme1-tourpagebuttontextcolor"
                      : "text-theme2-tourpagebuttontextcolor"
                  } ${
                    theme === "theme1"
                      ? "bg-theme1-tourpagebuttonbgcolor"
                      : "bg-theme2-tourpagebuttonbgcolor"
                  }`}
                >
                  VIP
                </button>
              )}
              {tour.tickets ? (
                <Link href={tour.link} target="_blank">
                  <div
                    className={`${franklinGothicCondensed.className} w-full ${
                      !tour.VIP ? "xl:max-w-[240px]" : ""
                    }  text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white ${
                      theme === "theme1"
                        ? "text-theme1-tourpagebuttontextcolor"
                        : "text-theme2-tourpagebuttontextcolor"
                    } ${
                      theme === "theme1"
                        ? "bg-theme1-tourpagebuttonbgcolor"
                        : "bg-theme2-tourpagebuttonbgcolor"
                    }`}
                  >
                    Tickets
                  </div>
                </Link>
              ) : (
                <Link href={tour.link} target="_blank">
                  <div
                    className={`${franklinGothicCondensed.className} w-full ${
                      !tour.VIP ? "xl:max-w-[240px]" : ""
                    } text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white ${
                      theme === "theme1"
                        ? "text-theme1-tourpagebuttontextcolor"
                        : "text-theme2-tourpagebuttontextcolor"
                    } ${
                      theme === "theme1"
                        ? "bg-theme1-tourpagebuttonbgcolor"
                        : "bg-theme2-tourpagebuttonbgcolor"
                    }`}
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
          className={`${
            franklinGothicCondensed.className
          } text-[15px] xxs:text-[18px] sm:text-[22px] text-center ${
            theme === "theme1"
              ? "text-theme1-tourpagetextcolor"
              : "text-theme2-tourpagetextcolor"
          }`}
        >
          GET NOTIFIED WHEN NEW EVENTS ARE ANNOUNCED IN YOUR AREA
        </span>
      </div>

      <div className="flex items-center justify-center pb-[72px]">
        <button
          className={`${
            franklinGothicCondensed.className
          } text-[15px] xxs:text-[18px] sm:text-[22px] ${
            theme === "theme1"
              ? "text-theme1-tourpagebuttontextcolor"
              : "text-theme2-tourpagebuttontextcolor"
          } ${
            theme === "theme1"
              ? "bg-theme1-tourpagebuttonbgcolor"
              : "bg-theme2-tourpagebuttonbgcolor"
          } py-2 px-4 rounded-3xl hover:text-[#fa264e] hover:bg-[#dd90e1] hover:border-2 hover:border-white`}
        >
          FOLLOW SOFI TUKKER
        </button>
      </div>
    </div>
  );
}
