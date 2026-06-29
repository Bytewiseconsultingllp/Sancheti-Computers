import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Computer sales, laptop sales, networking solutions, CCTV, IT infrastructure, system upgrades, repairs & more. Comprehensive IT services at Sancheti Computers, Bengaluru.",
  openGraph: {
    title: "Our Services | Sancheti Computers",
    description: "Comprehensive IT solutions including computer sales, networking, CCTV, IT infrastructure setup and more.",
    url: `${baseUrl}/services`,
  },
  alternates: {
    canonical: `${baseUrl}/services`,
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
