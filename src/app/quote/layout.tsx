import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free quote for bulk IT hardware, laptops, desktops, networking equipment, or enterprise procurement. Sancheti Computers — B2B & GEM specialist in Bengaluru.",
  keywords: ["IT hardware quote bengaluru", "bulk computer price bangalore", "GEM IT procurement", "B2B IT hardware karnataka"],
  openGraph: {
    title: "Get a Quote | Sancheti Computers",
    description: "Request a free quote for bulk IT procurement. B2B & GEM specialist.",
    url: `${baseUrl}/quote`,
  },
  alternates: {
    canonical: `${baseUrl}/quote`,
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
