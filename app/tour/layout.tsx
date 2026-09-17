import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour",
};

export default function TourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
