import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sancheti Computers — a trusted IT hardware, software, and networking solutions provider in Bengaluru since 2012. Founded by Mahendra Kumar.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
