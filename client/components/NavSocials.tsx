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
    link: "https://www.instagram.com/sofitukker/"
  },
  {
    id: 2,
    name: "Facebook",
    icon: IoLogoFacebook,
    link: "https://www.facebook.com/sofitukker",
  },
  {
    id: 3,
    name: "Tiktok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@sofitukker?lang=en",
  },
  {
    id: 4,
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/sofitukker",
  },
  {
    id: 5,
    name: "Snapchat",
    icon: FaSnapchat,
    link: "https://ffm.link/sofitukkersnapchat",
  },
  {
    id: 6,
    name: "Spotify",
    icon: FaSpotify,
    link: "https://open.spotify.com/artist/586uxXMyD5ObPuzjtrzO1Q?si=mVU722GuREmKQHKhx18X8A&nd=1&dlsi=de2a9525e08a4a78",
  },
  {
    id: 7,
    name: "Apple Music",
    icon: IoIosMusicalNotes,
    link: "https://music.apple.com/us/artist/sofi-tukker/998656537",
  },
  {
    id: 8,
    name: "Youtube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@SOFITUKKER",
  },
  {
    id: 9,
    name: "Discord",
    icon: FaDiscord,
    link: "https://discord.com/invite/AK8nFnSbDR",
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
    <div className="flex space-x-3 xxs:space-x-5 sm:space-x-8 sm:pr-[30px]">
      {SocialItems.map((item) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
          href={item.link}
        >
          <span className="text-[#DD90E1]">
            <item.icon className="h-4 w-4 sm:h-5 sm:w-5"/>
          </span>
        </Link>
      ))}
    </div>
  );
}
export default NavSocials;
