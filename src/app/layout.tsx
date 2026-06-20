import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sancheti Computers | IT Hardware, Laptops & Networking Solutions in Bengaluru",
    template: "%s | Sancheti Computers",
  },
  description:
    "Sancheti Computers is a trusted IT hardware, software, laptop, desktop, networking and accessories provider in Bengaluru since 2017. Competitive prices, genuine products and excellent service.",
  keywords: [
    "Computer Shop in SP Road",
    "Computer Store Bangalore",
    "Laptop Store Bangalore",
    "Networking Products Bangalore",
    "IT Hardware Supplier Bangalore",
    "Computer Accessories Bangalore",
    "Best Computer Shop SP Road",
    "Genuine IT Products Bangalore",
  ],
  openGraph: {
    title: "Sancheti Computers | IT Hardware, Laptops & Networking Solutions",
    description:
      "Trusted IT solutions provider in Bengaluru since 2017. Computers, laptops, networking, software & more at competitive prices.",
    url: "https://sancheticomputers.com",
    siteName: "Sancheti Computers",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
