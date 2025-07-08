import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "414px",
        xs: "540px",
        md825: "825px",
        md925: "925px",
        lgPlus: "1105px",
        xlPlus: "1220px",
        maxW: "1280px",
        xtraMax: "1360px",
        ultraMax: "1440px",
        ultraMaxPlus: "1520px",
        ultraMaxPlusPlus: "1600px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
