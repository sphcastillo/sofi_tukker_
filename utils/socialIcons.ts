import { FaDiscord, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSnapchat, FaSpotify } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { IoIosMail, IoIosMusicalNotes } from "react-icons/io";
import { IconType } from "react-icons";

export const socialIconMap: Record<string, IconType> = {
  instagram: FaInstagram,
  facebook: IoLogoFacebook,
  tiktok: FaTiktok,
  twitter: FaTwitter,
  snapchat: FaSnapchat,
  spotify: FaSpotify,
  appleMusic: IoIosMusicalNotes,
  youtube: FaYoutube,
  discord: FaDiscord,
  email: IoIosMail,
};
