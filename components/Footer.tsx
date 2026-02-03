'use client';
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { beiko } from "@/utils/fonts";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import { socialIconMap } from "@/utils/socialIcons";

type SocialLink = {
  id: number;
  name: string;
  platform: string;
  link: string;
};

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    fetch("/api/social-links")
      .then((res) => res.json())
      .then((data) => setSocialLinks(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to load social links:", err));
  }, []);

  return (
    <div className="bg-[#000000]">
      <div className="p-5 pb-[92px] pt-[96px]">
        <div className="flex flex-col space-y-8 items-center sm:space-y-6">

          <div className="flex items-center">
            <Link
              href="/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 cursor-pointer"
            >
              <span
                className={`${beiko.className} ${
                  theme === "theme1"
                    ? "text-theme1-footertextcolor"
                    : "text-theme2-footertextcolor"
                }`}
              >
                SUBSCRIBE
              </span>
              <div
                className={`${
                  theme === "theme1"
                    ? "text-theme1-footertextcolor"
                    : "text-theme2-footertextcolor"
                }`}
              >
                <FaChevronRight />
              </div>
            </Link>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex flex-wrap justify-center gap-8">
              {socialLinks.map((item) => {
                const Icon = socialIconMap[item.platform];
                if (!Icon) return null;
                return (
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                    href={item.link}
                  >
                    <span
                      className={`${
                        theme === "theme1"
                          ? "text-theme1-footersociallinks"
                          : "text-theme2-footersociallinks"
                      } h-5 w-5`}
                    >
                      <Icon size={20} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div
              className={`${beiko.className} flex flex-col xs:flex-row xs:whitespace-nowrap xs:space-x-1 ${
                theme === "theme1"
                  ? "text-theme1-footertextcolor"
                  : "text-theme2-footertextcolor"
              }`}
            >
              <span>© Copyright {currentYear} Sofi-Tukker.</span>
              <span className="text-center">All Rights Reserved.</span>
            </div>
            <div className="flex justify-center">
              <p
                className={`${
                  beiko.className
                } text-xs tracking-wide leading-5 pt-1 ${
                  theme === "theme1"
                    ? "text-theme1-footerBycolor"
                    : "text-theme2-footerBycolor"
                }`}
              >
                Website by
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.builtbysophia.com/"
                  className={`pl-1 tracking-wide  ${
                    theme === "theme1"
                      ? "text-theme1-footertextcolor"
                      : "text-theme2-footertextcolor"
                  }
                  ${
                    theme === "theme1"
                      ? "hover:text-theme1-builtbysophiahover"
                      : "hover:text-theme2-builtbysophiahover"
                  }`}
                >
                  Built By Sophia
                </Link>
              </p>
            </div>
          </div>
        </div>

        <p
          className={`${beiko.className} mt-10 text-center text-[11px] sm:text-[12px] leading-relaxed max-w-2xl mx-auto ${
            theme === "theme1"
              ? "text-theme1-footerBycolor"
              : "text-theme2-footerBycolor"
          }`}
        >
          Fan-made portfolio project only. This is not the official Sofi Tukker
          website and is not affiliated with or endorsed by Sofi Tukker or their
          label. All trademarks and content belong to their respective owners.
        </p>
      </div>
    </div>
  );
}

