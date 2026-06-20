import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Computer sales, laptop sales, networking solutions, CCTV, IT infrastructure, system upgrades, repairs & more. Comprehensive IT services at Sancheti Computers, Bengaluru.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
