import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get the best competitive prices for laptops, desktops, networking equipment, and IT hardware. Request a free quote from Sancheti Computers, Bengaluru.",
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
