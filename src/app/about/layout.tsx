import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sancheti Computers — trusted IT solutions provider in Bengaluru since 2012. Serving B2C, B2B and GEM clients with genuine products and competitive pricing.",
  keywords: ["about sancheti computers", "IT company bengaluru", "computer store since 2012", "SP Road computer shop"],
  openGraph: {
    title: "About Us | Sancheti Computers",
    description: "Trusted IT solutions provider in Bengaluru since 2012. Serving B2C, B2B and GEM clients.",
    url: `${baseUrl}/about`,
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
