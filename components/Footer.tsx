import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import localFont from "next/font/local";
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

const beiko = localFont({
  src: "../public/fonts/Beiko.otf",
});

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
    link: "https://www.instagram.com/sofitukker/",
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
    link: "https://music.apple.com/us/artist/sofi-tukker/998656537"
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

function Footer() {
  return (
    <div className="bg-[#000000]">
      <div className="p-5 pb-[92px] pt-[96px]">
        <div className="flex flex-col space-y-8 md:flex-row md:justify-between items-center sm:space-y-6 md:space-y-0">
          {/* Subscribe Section */}
          <div className="flex items-center">
            <Link 
              href="/signup" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 cursor-pointer"
            >
              <span className={`${beiko.className} text-[#FA264E]`}>
                SUBSCRIBE
              </span>
              <div className="text-[#FA264E]">
                <FaChevronRight />
              </div>
            </Link>
          </div>

          {/* Social Icons Section */}
          <div className="w-full md:w-auto">
            <div className="flex flex-wrap justify-center gap-8">
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
