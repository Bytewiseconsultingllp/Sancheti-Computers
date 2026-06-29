import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read what our customers say about Sancheti Computers. Trusted reviews from happy customers across Bengaluru for genuine products and excellent service.",
  openGraph: {
    title: "Customer Reviews | Sancheti Computers",
    description: "See why customers trust Sancheti Computers for their IT needs. 4.8 star rating on Google Reviews.",
    url: `${baseUrl}/testimonials`,
  },
  alternates: {
    canonical: `${baseUrl}/testimonials`,
  },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
