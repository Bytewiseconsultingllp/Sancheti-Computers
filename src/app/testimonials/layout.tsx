import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials",
  description:
    "Read what our customers say about Sancheti Computers. Trusted reviews from happy customers across Bengaluru for genuine products and excellent service.",
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
