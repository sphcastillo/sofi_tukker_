import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: {
    default: "Home : Sofi-Tukker",
    template: "%s : Sofi-Tukker",
  },
  description:
    "Fan-made portfolio recreation of the Sofi Tukker website. Not affiliated with or endorsed by Sofi Tukker. Built to showcase front-end development skills.",
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
