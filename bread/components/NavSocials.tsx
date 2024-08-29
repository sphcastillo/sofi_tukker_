import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoIosMusicalNotes } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IconType } from "react-icons";
import Link from "next/link";

type Socials = {
  id: number;
  name: string;
  icon: IconType;
  link: string;
};

const SocialItems: Socials[] = [
  {
    id: 1,
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    name: "Facebook",
    icon: IoLogoFacebook,
    link: "https://www.facebook.com/",
  },
  {
    id: 3,
    name: "Tiktok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/",
  },
  {
    id: 4,
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/",
  },
  {
    id: 5,
    name: "Snapchat",
    icon: FaSnapchat,
    link: "https://www.snapchat.com/",
  },
  {
    id: 6,
    name: "Spotify",
    icon: FaSpotify,
    link: "https://www.spotify.com/",
  },
  {
    id: 7,
    name: "Apple Music",
    icon: IoIosMusicalNotes,
    link: "https://www.apple.com/music/",
  },
  {
    id: 8,
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/",
  },
  {
    id: 9,
    name: "Discord",
    icon: FaDiscord,
    link: "https://discord.com/",
  },
  {
    id: 10,
    name: "Email",
    icon: IoIosMail,
    link: "mailto:",
  },
];

function NavSocials() {
  return (
    <div className="pt-[60px] flex justify-end w-4/5 mx-auto pb-[30px]">
      <div className="flex space-x-8 pr-[30px]">
        {SocialItems.map((item) => (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            key={item.id}
            href={item.link}
          >
            <span className="text-[#DD90E1] h-5 w-5">
              <item.icon size={20} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default NavSocials;
