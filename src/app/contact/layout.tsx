import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sancheti Computers for IT products, laptop repair, networking solutions, and enterprise procurement. Located on SP Road, Bengaluru. Call +91 80507 73494.",
  keywords: ["contact sancheti computers", "computer shop SP road contact", "IT store bengaluru phone number"],
  openGraph: {
    title: "Contact Us | Sancheti Computers",
    description: "Get in touch with Sancheti Computers — SP Road, Bengaluru. Call +91 80507 73494.",
    url: `${baseUrl}/contact`,
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
