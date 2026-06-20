import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our wide range of laptops, desktops, gaming systems, printers, networking equipment, SSDs, monitors, CCTV products, and computer accessories at Sancheti Computers.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
