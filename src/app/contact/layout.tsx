import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sancheti Computers at 112, Sadar Patrappa Road, Bengaluru. Call +91 80507 73494 or fill our contact form for IT hardware inquiries.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
