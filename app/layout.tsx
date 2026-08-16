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

export const metadata: Metadata = {
  metadataBase: new URL("https://safariutah.com"),
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
        <SkipLink />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
