import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars";
import Section from "@/components/shared/Section";
import ReviewStrip from "@/components/shared/ReviewStrip";
<meta name="google-site-verification" content="b3os46aRzG6vWhrWXZPR55ggGJhYnNlQzKsrr0xCIKc" />

export const metadata: Metadata = {
  title: "Safari Utah | Private Antelope Island Wildlife Tours",
  description:
    "Private and small-group Antelope Island wildlife tours led by Safari Utah.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Safari Utah | Private Antelope Island Wildlife Tours",
    description:
      "Private and small-group Antelope Island wildlife tours led by Safari Utah.",
    url: "https://safariutah.com/",
    siteName: "Safari Utah",
    images: [
      {
        url: "https://safariutah.com/images/google-search-thumb.jpg",
        width: 1600,
        height: 900,
        alt: "Bison on Antelope Island during a Safari Utah wildlife tour",
      },
    ],
    type: "website",
  },
};

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-night transition hover:bg-bone";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Safari Utah",
    url: "https://safariutah.com/",
    image: "https://safariutah.com/images/google-search-thumb.jpg",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://safariutah.com/images/google-search-thumb.jpg",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero />

      <ValuePillars />

      <Section
        eyebrow="Our Premium Wildlife Experience"
        title="Premium Antelope Island Wildlife Tours"
        subtitle="Private premium safaris, with a small-group option for guests who prefer a shared experience."
      >
        <div
          id="tours"
          className="grid gap-8 md:grid-cols-[2fr,2fr] items-start"
        >
          <div className="space-y-4 text-sm text-sand/80">
            <p>
              Discover Antelope Island through immersive, expert-guided wildlife
              experiences inspired by the depth of African safari guiding.
              Choose between fully private premium tours or a calm, capped
              small-group option. Each format is designed to help you connect
              with the island’s wildlife and landscapes in a thoughtful,
              intentional way.
            </p>
            <p>
              You’ll gain a clearer understanding of the island’s ecology,
              wildlife patterns, and the forces that shape these landscapes.
              Whether you prefer complete privacy or a calm shared outing, each
              tour offers space to slow down, observe, and genuinely connect
              with Utah’s wild side.
            </p>

            <div className="relative h-56 md:h-80 rounded-2xl overflow-hidden border border-sand/20 bg-night/40">
              <Image
                src="/images/google-search-thumb.jpg"
                alt="Bison on Antelope Island viewed during a Safari Utah tour"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-56 md:h-80 rounded-2xl overflow-hidden border border-sand/20 bg-night/40">
              <Image
                src="/images/island-sunset.jpg"
                alt="Sunset over the Great Salt Lake from Antelope Island"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 text-sm text-sand/80">
            <div className="border border-sand/20 rounded-2xl p-8 bg-night/50 space-y-3">
              <h3 className="font-serif text-lg">
                Premium Antelope Island Tour
              </h3>
              <p>
                A four-hour private wildlife experience designed around the best
                daylight viewing. From hotel pickup to drop-off, we move through
                Antelope Island&apos;s landscapes at a comfortable, flexible
                pace, stopping for wildlife, photography, and interpretation as
                opportunities arise.
              </p>
              <p className="font-medium">
                Minimum fare: $450 per tour (1–4 guests).
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/book/private" className={buttonClasses}>
                  Book Your Private Antelope Island Tour
                </a>
                <Link
                  href="/tours/antelope-island"
                  className="text-xs uppercase tracking-[0.2em] underline text-sand/70 hover:text-sand"
                >
                  View full tour details
                </Link>
              </div>
            </div>

            <div className="border border-sand/20 rounded-2xl p-8 bg-night/50 space-y-3">
              <h3 className="font-serif text-lg">
                Premium Antelope Island Elite Sunset Tour
              </h3>
              <p>
                The Sunset Elite version follows the same private wildlife
                itinerary as our daytime tour but extends the experience into
                the island&apos;s most stunning light, timed around sunset for
                quiet views and photography.
              </p>
              <p className="font-medium">
                Minimum fare: $500 per tour (1–4 guests). Fridays and Mondays,
                4.5–5 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/book/sunset" className={buttonClasses}>
                  Book Your Sunset Elite Experience
                </a>
                <Link
                  href="/tours/antelope-island"
                  className="text-xs uppercase tracking-[0.2em] underline text-sand/70 hover:text-sand"
                >
                  View full tour details
                </Link>
              </div>
            </div>

            <div className="border border-sand/20 rounded-2xl p-7 bg-night/50 space-y-3">
              <h3 className="font-serif text-lg">
                Antelope Island Small-Group Wildlife Tour
              </h3>
              <p>
                A four-hour small-group wildlife experience for guests who
                prefer a shared tour while still valuing calm, space, and expert
                guidance. Group size is capped to keep the outing intimate as we
                move through Antelope Island. The itinerary mirrors the private
                tour but follows a set schedule and shared vehicle.
              </p>
              <p className="text-xs text-sand/70">
                Pricing: 1 adult $160 · 2+ adults $140 per person · Youth with
                adult $80
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/book/small-group" className={buttonClasses}>
                  Book the Small-Group Tour
                </a>

                <Link
                  href="/tours/antelope-island#small-group"
                  className="text-xs uppercase tracking-[0.2em] underline text-sand/70 hover:text-sand"
                >
                  View small-group details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="About Safari Utah"
        title="African-Inspired Nature Guiding in the American West"
      >
        <div className="space-y-8 text-sm text-sand/80">
          <div className="space-y-3">
            <p>
              Safari Utah brings African-inspired nature guiding to the American
              West through private, expert-led wildlife experiences. Our focus
              is to connect people with nature through clear insight, meaningful
              moments, and a deeper understanding of place.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl">About Your Guide</h3>
            <p>
              Educated in the natural sciences, with ecological field experience
              and professional FGASA safari guide training, Clayton offers a
              grounded, holistic approach to interpreting landscapes and
              wildlife. His goal is to help people understand the natural world
              more deeply and recognize our connection to it.
            </p>
          </div>
        </div>
        <div>
          <p>
            <Link
              href="/about"
              className="text-xs underline text-sand/70 hover:text-sand"
            >
              Learn more about Safari Utah & your guide
            </Link>
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Custom Experiences"
        title="Custom Experiences — By Request Only"
      >
        <div className="space-y-4 text-sm text-sand/80">
          <p>
            For guests seeking something tailored, Safari Utah offers a limited
            number of custom outings. Options include full-day trips to Arches
            or Canyonlands, wildlife and nature outings in the Wasatch
            Mountains, and personalized African safari planning. These
            experiences are curated individually and available by request.
          </p>
          <a
            href="/custom-experiences"
            className="inline-flex rounded-full border border-sand/70 px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-sand hover:text-night transition"
          >
            Request a custom experience
          </a>
        </div>
      </Section>

      <div className="w-full overflow-x-hidden">
        <ReviewStrip />
      </div>
    </>
  );
}