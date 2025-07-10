"use client";
import Navbar from "./Navbar/Navbar";
import NavbarBanner from "./Navbar/NavbarBanner";
import NavSocials from "./Navbar/NavSocials";
import { useTheme } from "@/context/ThemeContext";

function Header() {
  const { theme } = useTheme();
  return (
    <div>
      <NavbarBanner />
      <div className={`sticky top-0 w-full z-50 ${
          theme === "theme1"
            ? "bg-theme1-navbgcolor"
            : "bg-theme2-navbgcolor"
        }`}>
        <div className="pt-11 pb-8 sm:pt-[60px] flex justify-center sm:justify-end sm:w-4/5 sm:mx-auto sm:pb-[49px]">
          <NavSocials />
        </div>
        <Navbar />
      </div>
    </div>
  );
}
export default Header;
