import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our wide range of laptops, desktops, gaming systems, printers, networking equipment, SSDs, monitors, CCTV products, and computer accessories at Sancheti Computers. Best prices in Bengaluru.",
  keywords: [
    "laptops for sale bangalore",
    "desktop computers bengaluru",
    "gaming PC build bangalore",
    "printer price karnataka",
    "networking equipment bengaluru",
    "SSD price bangalore",
    "monitor price bengaluru",
    "CCTV camera bangalore",
    "computer accessories SP road",
    "HP laptop price bangalore",
    "Dell desktop bengaluru",
    "Lenovo laptop bangalore",
    "gaming laptop india",
    "refurbished computer bangalore",
    "IT products online india",
  ],
  openGraph: {
    title: "Products | Sancheti Computers",
    description: "Wide range of IT products — laptops, desktops, networking equipment, CCTV, and accessories at competitive prices.",
    url: `${baseUrl}/products`,
  },
  alternates: {
    canonical: `${baseUrl}/products`,
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
