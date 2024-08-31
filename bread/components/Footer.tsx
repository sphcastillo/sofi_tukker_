import Link from "next/link";
import NavSocials from "./NavSocials";
import { FaChevronRight } from "react-icons/fa";
import localFont from "next/font/local";

const beiko = localFont({
  src: "../public/fonts/Beiko.otf",
});

function Footer() {
  return (
    <div className="bg-[#000000]">
      <div className="p-5 pb-[92px] pt-[96px]">
        <div className="flex flex-col space-y-8 md:flex-row md:justify-between items-center spac-y-6 md:space-y-0">

          {/* Subscribe Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className={`${beiko.className} text-[#FA264E]`}>
                SUBSCRIBE
              </span>
              <div className="text-[#FA264E]">
                {" "}
                <FaChevronRight />
              </div>
            </Link>
          </div>

          {/* Social Icons Section */}
          <div>
            <NavSocials />
          </div>

          {/* Copyright Section */}
          <div className="">
            <span className={`${beiko.className} text-[#FA264E]`}>
              © Copyright 2024 Sofi Tukker LLC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
