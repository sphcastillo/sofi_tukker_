'use client';
import { useTheme } from "@/context/ThemeContext";

function NavbarBanner() {
  const { theme } = useTheme();
  return (
    <div className={`w-full py-2 flex justify-center items-center max-w-screen space-x-4 xxs:space-x-5 xs:space-x-6 sm:space-x-9 md:space-x-12 lg:space-x-20 ${
      theme === "theme1"
        ? "bg-theme1-navbannercolor"
        : "bg-theme2-navbannercolor"
    }`}>
        <span className="text-pretty font-medium tracking-wide italic text-[10px] sm:text-[12px]">
        🎶 Created by a Sofi Tukker fan, for portfolio purposes only! 🎧
        </span>
    </div>
  )
}
export default NavbarBanner