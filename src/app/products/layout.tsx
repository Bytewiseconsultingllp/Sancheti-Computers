import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our wide range of laptops, desktops, gaming systems, printers, networking equipment, SSDs, monitors, CCTV products, and computer accessories at Sancheti Computers.",
  openGraph: {
    title: "Products | Sancheti Computers",
    description: "Wide range of IT products including laptops, desktops, networking equipment, CCTV, and accessories at competitive prices.",
    url: `${baseUrl}/products`,
  },
  alternates: {
    canonical: `${baseUrl}/products`,
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
