import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SchemaMarkup from "@/components/SchemaMarkup";
import FAQSchema from "@/components/FAQSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sancheticomputers.com";

export const metadata: Metadata = {
  title: {
    default: "Sancheti Computers | IT Hardware, Laptops & Networking Solutions in Bengaluru",
    template: "%s | Sancheti Computers",
  },
  description:
    "Sancheti Computers is a trusted IT hardware, software, laptop, desktop, networking and accessories provider in Bengaluru since 2012. Competitive prices, genuine products and excellent service. Serving B2C, B2B & GEM.",
  keywords: [
    "Computer Shop in SP Road",
    "Computer Store Bangalore",
    "Laptop Store Bangalore",
    "Networking Products Bangalore",
    "IT Hardware Supplier Bangalore",
    "Computer Accessories Bangalore",
    "Best Computer Shop SP Road",
    "Genuine IT Products Bangalore",
    "GEM IT Hardware Supplier",
    "Bulk Computer Dealer Bangalore",
    "CCTV Installation Bengaluru",
    "Office IT Setup Bangalore",
    "Desktop Computer Price Bangalore",
    "HP Laptop Dealer Bangalore",
    "Dell Laptop Store Bangalore",
    "Lenovo Desktop Bangalore",
    "Printer Dealer Bangalore",
    "Wi-Fi Router Setup Bangalore",
    "Server Setup Bangalore",
    "Software License Bangalore",
    "IT AMC Bengaluru",
    "Refurbished Computer Bangalore",
    "Gaming PC Build Bangalore",
    "UPS Battery Backup Bangalore",
    "Surveillance Camera Installation Bangalore",
    "Government e-Marketplace IT Supplier",
    "B2B IT Hardware Karnataka",
  ],
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Sancheti Computers" }],
  creator: "Sancheti Computers",
  openGraph: {
    title: "Sancheti Computers | IT Hardware, Laptops & Networking Solutions",
    description:
      "Trusted IT solutions provider in Bengaluru since 2012. Computers, laptops, networking, software & more at competitive prices. B2C, B2B & GEM.",
    url: siteUrl,
    siteName: "Sancheti Computers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Sancheti Computers - IT Solutions Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sancheticomputers",
    creator: "@sancheticomputers",
    title: "Sancheti Computers | IT Hardware & Networking Solutions",
    description: "Trusted IT solutions provider in Bengaluru since 2012. Computers, laptops, networking & more.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const CLARITY_ID = "YOUR_CLARITY_ID";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9716;77.5726" />
        <meta name="ICBM" content="12.9716, 77.5726" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION" />
        <SchemaMarkup />
        <FAQSchema />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_ID}");`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-[72px] lg:pt-[80px]">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
