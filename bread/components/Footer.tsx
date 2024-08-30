import Link from "next/link";
import NavSocials from "./NavSocials";
import localFont from "next/font/local";

const beiko = localFont({
    src: "../public/fonts/Beiko.otf",
  });
  
function Footer() {
  return (
    <div className="bg-[#000000]">
      <div className="p-5 pb-[112px] pt-[96px]">
        <div>
          <div>
            <span className={`${beiko.className} text-[#FA264E]`}>
              © Copyright 2024 Sofi Tukker LLC
            </span>
          </div>
          <NavSocials />
          <div>
            <Link href="/">
              <span className={`${beiko.className} text-[#FA264E]`}>SUBSCRIBE</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
