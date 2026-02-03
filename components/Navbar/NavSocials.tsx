'use client';
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { socialIconMap } from "@/utils/socialIcons";

type SocialLink = {
  id: number;
  name: string;
  platform: string;
  link: string;
};

function NavSocials() {
  const { theme } = useTheme();
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    fetch("/api/social-links")
      .then((res) => res.json())
      .then((data) => setSocialLinks(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to load social links:", err));
  }, []);

  return (
    <div className="flex space-x-3 xxs:space-x-5 sm:space-x-8 sm:pr-[30px]">
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
            <span className={`${
            theme === "theme1"
              ? "text-theme1-navsociallinks"
              : "text-theme2-navsociallinks"
          }`}>
              <Icon className="h-4 w-4 sm:h-5 sm:w-5"/>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export default NavSocials;
