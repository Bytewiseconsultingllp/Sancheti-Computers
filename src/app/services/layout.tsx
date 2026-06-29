import type { Metadata } from "next";

const baseUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional IT services from Sancheti Computers — computer sales, laptop repairs, networking solutions, CCTV installation, IT infrastructure and enterprise procurement in Bengaluru.",
  keywords: ["computer repair bengaluru", "networking solutions bangalore", "CCTV installation bengaluru", "IT infrastructure bangalore", "IT AMC bengaluru"],
  openGraph: {
    title: "Services | Sancheti Computers",
    description: "Professional IT services — computer sales, repairs, networking, CCTV, IT infrastructure in Bengaluru.",
    url: `${baseUrl}/services`,
  },
  alternates: {
    canonical: `${baseUrl}/services`,
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
