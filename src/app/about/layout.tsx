import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sancheti Computers — a trusted IT hardware, software, and networking solutions provider in Bengaluru since 2012. Founded by Mahendra Kumar.",
  openGraph: {
    title: "About Us | Sancheti Computers",
    description: "Trusted IT solutions provider in Bengaluru since 2012. Learn about our story, mission, and why customers choose us.",
    url: `${baseUrl}/about`,
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
