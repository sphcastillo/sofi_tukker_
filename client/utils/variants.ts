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