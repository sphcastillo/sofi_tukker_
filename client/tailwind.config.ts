import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme1: {
          navbannercolor: '#fff2e7',
          navsociallinks: '#DD90E1',
          navlinkcolor: '#DD90E1',
          musicbgcolor: '#DD90E1',
          musictextcolor: '#000000',
          musicbuttonbgcolor: '#000000',
          musicbuttontextcolor: '#EAC0FF',
          tourbgcolor: '#B9DDBA',
          tourbuttonbgcolor: '#FFFFFF',
          tourbuttonbordercolor: '#FFFFFF',
          tourbuttontextcolor: '#DD90E1',
          merchbgcolor: '#fff2e7',
          merchtextcolor: '#fa264e',
          merchbuttonbgcolor: '#eb3d3b',
          merchbuttontextcolor: '#EAC0FF',
          footertextcolor: '#fa264e',
          footersociallinks: '#DD90E1',
        },
        theme2: {
          navbannercolor: '#9DDAED',
          navsociallinks: '#FDF729',
          navlinkcolor: '#FFFFFF',
          musicbgcolor: '#161314',
          musictextcolor: '#E985BA',
          musicbuttonbgcolor: '#606ADC',
          musicbuttontextcolor: '#DD90E1',
          tourbgcolor: '#9DDAED',
          tourbuttonbgcolor: '#EBEA36',
          tourbuttonbordercolor: '#EBEA36',
          tourbuttontextcolor: '#161314',
          merchbgcolor: '#0064E1',
          merchtextcolor: '#f81810',
          merchbuttonbgcolor: '#000000',
          merchbuttontextcolor: '#ef2018',
          footertextcolor: '#9bdaec',
          footersociallinks: '#FDF729',
        }
      },
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
