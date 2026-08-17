import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/shared/SkipLink";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://safariutah.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Antelope Island Wildlife Tours from Salt Lake City | Safari Utah",
    template: "%s | Safari Utah",
  },
  description:
    "Private and small-group Antelope Island wildlife tours from Salt Lake City with safari-trained naturalist guides, hotel pickup, bison, birds, and Great Salt Lake scenery.",
  applicationName: "Safari Utah",
  openGraph: {
    siteName: "Safari Utah",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/google-search-thumb.jpg`,
        width: 1600,
        height: 900,
        alt: "Bison on Antelope Island during a Safari Utah wildlife tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "b3os46aRzG6vWhrWXZPR55ggGJhYnNlQzKsrr0xCIKc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "Safari Utah",
  url: siteUrl,
  image: `${siteUrl}/images/google-search-thumb.jpg`,
  logo: `${siteUrl}/images/about-safari.jpg`,
  telephone: "+1-385-449-0888",
  email: "safariutah@gmail.com",
  description:
    "Safari Utah offers private and small-group Antelope Island wildlife tours from Salt Lake City with safari-trained naturalist guides.",
  areaServed: [
    {
      "@type": "City",
      name: "Salt Lake City",
    },
    {
      "@type": "Place",
      name: "Antelope Island State Park",
    },
    {
      "@type": "Place",
      name: "Great Salt Lake",
    },
  ],
  sameAs: [
    "https://www.instagram.com/safariutah/",
    "https://www.facebook.com/safariutah/",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Private Antelope Island Wildlife Tour",
        serviceType: "Guided wildlife tour",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Small-Group Antelope Island Wildlife Tour",
        serviceType: "Guided wildlife tour",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-night text-bone overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
