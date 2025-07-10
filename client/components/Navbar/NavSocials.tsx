'use client';
import Link from "next/link";
import { SocialItems } from "@/data/NavSocialsData";
import { useTheme } from "@/context/ThemeContext";

function NavSocials() {
  const { theme } = useTheme();

  return (
    <div className="flex space-x-3 xxs:space-x-5 sm:space-x-8 sm:pr-[30px]">
      {SocialItems.map((item) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          href={item.link}
        >
          <span className={`${
          theme === "theme1"
            ? "text-theme1-navsociallinks"
            : "text-theme2-navsociallinks"
        }`}>
            <item.icon className="h-4 w-4 sm:h-5 sm:w-5"/>
          </span>
        </Link>
      ))}
    </div>
  );
}
export default NavSocials;
