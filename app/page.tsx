import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars";
import Section from "@/components/shared/Section";
import ReviewStrip from "@/components/shared/ReviewStrip";
import BookingProductGroups from "@/components/shared/BookingProductGroups";
import BokunLoader from "@/components/shared/BokunLoader";
import { bookingChannelUuids } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Antelope Island Wildlife Tours from Salt Lake City | Safari Utah",
  description:
    "Private and small-group Antelope Island wildlife tours from Salt Lake City with safari-trained naturalist guides, hotel pickup, bison, birds, Great Salt Lake scenery, and sunset options.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Antelope Island Wildlife Tours from Salt Lake City | Safari Utah",
    description:
      "Private and small-group Antelope Island wildlife tours with safari-trained naturalist guides, hotel pickup, bison, birds, and Great Salt Lake scenery.",
    url: "/",
    siteName: "Safari Utah",
    images: [
      {
        url: "/images/google-search-thumb.jpg",
        width: 1600,
        height: 900,
        alt: "Bison on Antelope Island during a Safari Utah wildlife tour",
      },
    ],
    type: "website",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Safari Utah",
    url: "https://safariutah.com/",
    image: "https://safariutah.com/images/google-search-thumb.jpg",
    telephone: "+1-385-449-0888",
    email: "safariutah@gmail.com",
    description:
      "Private and small-group Antelope Island wildlife tours from Salt Lake City with safari-trained naturalist guides.",
    areaServed: ["Salt Lake City", "Antelope Island", "Great Salt Lake", "Utah"],
    sameAs: [
      "https://www.instagram.com/safariutah/",
      "https://www.facebook.com/safariutah/",
    ],
  };

  return (
    <>
      <BokunLoader channelUuids={bookingChannelUuids} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />

      <Section
        id="book-antelope-island"
        eyebrow="Book Antelope Island Tours"
        title="Choose your tour style first"
        subtitle="Start with the biggest decision: a premium private experience for your group only, or a shared small-group tour with other guests. Then choose the exact tour and book from the card."
      >
        <BookingProductGroups compact />
      </Section>

      <Section
        eyebrow="Antelope Island Tours"
        title="Private and small-group wildlife tours from Salt Lake City"
        subtitle="Safari Utah offers wildlife-focused tours shaped by African safari training, ecological field experience, and a calmer pace in the field."
      >
        <div className="grid items-start gap-8 md:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4 text-sm leading-7 text-sand/85">
            <p>
              Choose the format that fits your style of travel, whether that means a fully private outing, a sunset-focused premium tour, or a shared small-group experience. Every tour is designed to help you slow down, see more, and better understand the island’s wildlife, landscapes, and seasonal rhythms.
            </p>
            <p>
              Antelope Island is only a short drive from Salt Lake City, but it feels like a different world: open grasslands, bison, pronghorn, shorebirds, raptors, lake light, and some of the most distinctive scenery in northern Utah.
            </p>
            <Link
              href="/tours/antelope-island"
              className="inline-flex rounded-full border border-sand/70 px-5 py-2 text-xs uppercase tracking-[0.2em] text-sand transition hover:bg-sand hover:text-night"
            >
              View full tour details
            </Link>
          </div>

          <div className="grid gap-4">
            <div className="relative h-56 overflow-hidden rounded-2xl border border-sand/20 bg-night/40 md:h-72">
              <Image
                src="/images/bison-antelope-island.jpg"
                alt="Bison on Antelope Island viewed during a Safari Utah tour"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-2xl border border-sand/20 bg-night/40 md:h-72">
              <Image
                src="/images/island-sunset.jpg"
                alt="Sunset over the Great Salt Lake from Antelope Island"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <ValuePillars />

      <div className="w-full overflow-x-hidden">
        <ReviewStrip />
      </div>

      <Section
        eyebrow="Custom Experiences"
        title="Custom Experiences — By Request Only"
      >
        <div className="space-y-4 text-sm leading-7 text-sand/85">
          <p>
            For guests seeking something more tailored, Safari Utah offers a limited number of custom outings. Options include full-day trips to Arches or Canyonlands, wildlife and nature outings in the Wasatch Mountains, and personalized African safari planning.
          </p>
          <Link
            href="/custom-experiences"
            className="inline-flex rounded-full border border-sand/70 px-5 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-sand hover:text-night"
          >
            Request a custom experience
          </Link>
        </div>
      </Section>
    </>
  );
}
