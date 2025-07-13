import { Variants } from "framer-motion";

export const imageVariants: Variants = {
    initial: {
      y: 50,
      opacity: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  export const MusicStoreVariants: Variants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
};
