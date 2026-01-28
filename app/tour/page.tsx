"use client";
import { franklinGothicCondensed } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TourDate = {
  date: string;
  venue: string;
  city: string;
  link: string;
  VIP: boolean;
  tickets: boolean;
};


export default function TourPage() {
  const { theme } = useTheme();
  const [tourDates, setTourDates] = useState<TourDate[]>([]);

  useEffect(() => {
    fetch("/api/tour-dates", { cache: "no-store" })
      .then((res) => res.json())
      .then(setTourDates)
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
          src={theme === "theme1" ? '/images/homepage/tourSection/TOURtitle.png' : '/images/homepage/tourSection/TourTheme2.png'}
          alt="Sofi Tukker - Tour title"
          priority
          width={1158}
          height={275}
          className="w-[270px] xxs:w-[312px] xs:w-[412px] sm:w-[487px] md:w-[432px] lg:w-[600px]"
        />
      </div>

      <div className="container mx-auto p-4">
        {tourDates.map((tour, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 gap-4 items-center p-1 xxs:p-2 xs:p-4 md:px-12 lg:px-[120px] rounded-lg mb-4 transition-colors duration-300 ${
              theme === "theme1"
                ? "bg-theme1-tourpagebgcolor"
                : "bg-theme2-tourpagebgcolor"
            } ${
              theme === "theme1"
                ? "hover:bg-theme1-tourpagehoverbgcolor"
                : "hover:bg-theme2-tourpagehoverbgcolor"
            }`}
          >
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

            <div className="flex justify-end gap-2 flex-col xs:flex-row">
              {tour.VIP && (
                <button
                  className={`${
                    franklinGothicCondensed.className
                  } w-full text-center text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:border-2 ${
                    theme === "theme1"
                      ? "hover:bg-theme1-tourpagehoverbutonbgcolor"
                      : "hover:bg-theme2-tourpagehoverbutonbgcolor"
                  } ${
                    theme === "theme1"
                      ? "hover:text-theme1-tourpagehoverbuttontextcolor"
                      : "hover:text-theme2-tourpagehoverbuttontextcolorr"
                  } hover:border-2 
                                     ${
                                       theme === "theme1"
                                         ? "hover:border-theme1-tourpagehoverbuttonbordercolor"
                                         : "hover:border-theme2-tourpagehoverbuttonbordercolor"
                                     } ${
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
                <Link href={tour.link || ''} target="_blank">
                  <div
                    className={`${franklinGothicCondensed.className} w-full ${
                      !tour.VIP ? "xl:max-w-[240px]" : ""
                    } text-center text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl hover:border-2 ${
                      theme === "theme1"
                        ? "hover:bg-theme1-tourpagehoverbutonbgcolor"
                        : "hover:bg-theme2-tourpagehoverbutonbgcolor"
                    } ${
                      theme === "theme1"
                        ? "hover:text-[#000000]"
                        : "hover:text-theme2-tourpagehoverbuttontextcolor"
                    } hover:border-2 
                                       ${
                                         theme === "theme1"
                                           ? "hover:border-[#dd90e1]"
                                           : "hover:border-theme2-tourpagehoverbuttonbordercolor"
                                       } ${
                      theme === "theme1"
                        ? "text-theme1-tourpagebuttontextcolor"
                        : "text-[#606adc]"
                    } ${
                      theme === "theme1"
                        ? "bg-theme1-tourpagebuttonbgcolor"
                        : "bg-[#2fc64d]"
                    }`}
                  >
                    Tickets
                  </div>
                </Link>
              ) : (
                <Link href={tour.link || ''} target="_blank">
                  <div
                    className={`${franklinGothicCondensed.className} w-full ${
                      !tour.VIP ? "xl:max-w-[240px]" : ""
                    } text-center text-[15px] xxs:text-[18px] sm:text-[22px] px-2 py-2 xs:px-4 rounded-xl ${
                      theme === "theme1"
                        ? "hover:bg-theme1-tourpagehoverbutonbgcolor"
                        : "hover:bg-theme2-tourpagehoverbutonbgcolor"
                    } ${
                      theme === "theme1"
                        ? "hover:text-theme1-tourpagehoverbuttontextcolor"
                        : "hover:text-theme2-tourpagehoverbuttontextcolorr"
                    } hover:border-2 
                                       ${
                                         theme === "theme1"
                                           ? "hover:border-theme1-tourpagehoverbuttonbordercolor"
                                           : "hover:border-theme2-tourpagehoverbuttonbordercolor"
                                       }
                   ${
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

      <div className="flex items-center justify-center pb-8 md:pt-10">
        <span
          className={`${
            franklinGothicCondensed.className
          }  text-[15px] xxs:text-[18px] sm:text-[22px] text-center text-pretty ${
            theme === "theme1"
              ? "text-theme1-tourpagenotificationtext"
              : "text-theme2-tourpagenotificationtext"
          }`}
        >
          GET NOTIFIED WHEN NEW EVENTS ARE ANNOUNCED IN YOUR AREA
        </span>
      </div>

      <div className="flex items-center justify-center pb-[72px]">
        <motion.button
          className={`${
            franklinGothicCondensed.className
          } text-[15px] xxs:text-[18px] sm:text-[22px] ${
            theme === "theme1"
              ? "text-theme1-followbuttontextcolor"
              : "text-theme2-followbuttontextcolor"
          } ${
            theme === "theme1"
              ? "bg-theme1-followbuttonbgcolor"
              : "bg-theme2-followbuttonbgcolor"
          } py-2 px-4 rounded-3xl hover:border-2 ${
            theme === "theme1"
              ? "hover:bg-theme1-tourpagehoverbutonbgcolor"
              : "hover:bg-theme2-followbuttonhoverbgcolor"
          } ${
            theme === "theme1"
              ? "hover:text-theme1-tourpagehoverbuttontextcolor"
              : "hover:text-theme2-followbuttonhovertextcolor"
          } hover:border-2 
                             ${
                               theme === "theme1"
                                 ? "hover:border-[#dd90e1]"
                                 : "hover:border-theme2-tourpagehoverbuttonbordercolor"
                             }`}
          whileHover={{ 
            scale: 1.1,
            y: -4,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{ 
            scale: 0.95,
            y: -2,
            transition: { duration: 0.2, ease: "easeOut" }
          }}
        >
          FOLLOW SOFI TUKKER
        </motion.button>
      </div>
    </div>
  );
}
