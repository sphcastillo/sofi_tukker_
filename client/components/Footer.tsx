import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { SocialItems } from "@/data/SocialsData";
import { beiko } from "@/utils/fonts";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#000000]">
      <div className="p-5 pb-[92px] pt-[96px]">
        <div className="flex flex-col space-y-8 md:flex-row md:justify-between items-center sm:space-y-6 md:space-y-0">

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
              {SocialItems.map((item, index) => (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  href={item.link}
                >
                  <span
                    className={`${
                      theme === "theme1"
                        ? "text-theme1-footersociallinks"
                        : "text-theme2-footersociallinks"
                    } h-5 w-5`}
                  >
                    <item.icon size={20} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="">
            <span
              className={`${beiko.className} ${
                theme === "theme1"
                  ? "text-theme1-footertextcolor"
                  : "text-theme2-footertextcolor"
              }`}
            >
              © Copyright {currentYear} Sofi-Tukker. All Rights Reserved.
            </span>
            <div className="flex justify-center md:justify-start">
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
      </div>
    </div>
  );
}
export default Footer;
