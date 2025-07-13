import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Sofi Tukker: Developer Edition",
  description:
    "As a passionate web developer and Sofi Tukker fan, I've taken on the challenge of recreating their official website as closely as possible. This project showcases my ability to meticulously replicate design elements while maintaining the vibrant and dynamic feel that Sofi Tukker is known for. Dive into my work to see how I've combined creativity and technical expertise to bring this ambitious vision to life!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#000000]">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
