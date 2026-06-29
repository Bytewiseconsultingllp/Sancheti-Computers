import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read genuine customer reviews and testimonials for Sancheti Computers — trusted IT solutions provider in Bengaluru since 2012. See why 500+ customers recommend us.",
  keywords: ["sancheti computers reviews", "computer store bengaluru testimonials", "best computer shop bangalore reviews"],
  openGraph: {
    title: "Customer Reviews | Sancheti Computers",
    description: "Read genuine customer reviews. 500+ customers recommend Sancheti Computers.",
    url: `${baseUrl}/testimonials`,
  },
  alternates: {
    canonical: `${baseUrl}/testimonials`,
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
