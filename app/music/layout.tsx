import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
};

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
