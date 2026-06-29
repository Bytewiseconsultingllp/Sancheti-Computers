import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sancheti Computers at 112, Sadar Patrappa Road, Bengaluru. Call +91 80507 73494 or fill our contact form for IT hardware inquiries.",
  openGraph: {
    title: "Contact Us | Sancheti Computers",
    description: "Reach us at SP Road, Bengaluru. Call, WhatsApp, or fill the form for IT product and service enquiries.",
    url: `${baseUrl}/contact`,
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
