import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get the best competitive prices for laptops, desktops, networking equipment, and IT hardware. Request a free quote from Sancheti Computers, Bengaluru.",
  openGraph: {
    title: "Request a Quote | Sancheti Computers",
    description: "Get competitive quotes for IT hardware, laptops, desktops, networking and more. B2C, B2B & GEM enquiries welcome.",
    url: `${baseUrl}/quote`,
  },
  alternates: {
    canonical: `${baseUrl}/quote`,
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
