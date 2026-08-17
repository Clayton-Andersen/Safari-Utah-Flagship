import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars";
import Section from "@/components/shared/Section";
import ReviewStrip from "@/components/shared/ReviewStrip";

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
  "inline-flex w-full items-center justify-center rounded-full bg-sand px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-night transition hover:bg-bone sm:w-auto";

const secondaryLinkClasses =
  "text-xs font-semibold uppercase tracking-[0.18em] underline underline-offset-4 text-sand/70 hover:text-sand";

const tourCards = [
  {
    eyebrow: "Private Experience",
    title: "Private Day Tour",
    description:
      "A flexible daytime wildlife tour for guests who want privacy, expert guiding, and a personal pace on Antelope Island.",
    price: "From $450 per private tour",
    href: "/tours/antelope-island#private-day",
    buttonLabel: "Book Private Day Tour",
  },
  {
    eyebrow: "Private Experience",
    title: "Private Sunset Tour",
    description:
      "A longer private tour timed for evening light, photography, and a more atmospheric finish on the island.",
    price: "From $500 per private tour",
    href: "/tours/antelope-island#private-sunset",
    buttonLabel: "Book Private Sunset Tour",
  },
  {
    eyebrow: "Shared Small Group",
    title: "Small-Group Day Tour",
    description:
      "A shared daytime wildlife tour for guests who want expert guiding, a calm pace, and per-person pricing.",
    price: "1 adult $160 · 2+ adults $140 · Youth $80",
    href: "/tours/antelope-island#small-group-day",
    buttonLabel: "Book Small-Group Day Tour",
  },
  {
    eyebrow: "Shared Small Group",
    title: "Small-Group Sunset Tour",
    description:
      "A shared sunset outing with Great Salt Lake views, wildlife stops, birding, photography, and natural history interpretation.",
    price: "1 adult $170 · 2+ adults $150 · Youth $90",
    href: "/tours/antelope-island#small-group-sunset",
    buttonLabel: "Book Small-Group Sunset Tour",
  },
];

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
        eyebrow="Antelope Island Tour Options"
        title="Choose your Safari Utah experience"
        subtitle="Choose private for a tour with your group only, or shared for a small-group public tour with per-person pricing."
      >
        <div
          id="tours"
          className="grid items-start gap-8 lg:grid-cols-[0.95fr,1.35fr]"
        >
          <div className="space-y-4 text-sm leading-7 text-sand/80">
            <p>
              Discover Antelope Island through immersive, expert-guided wildlife
              experiences inspired by the depth of African safari guiding. Each
              tour is designed to help you connect with the island’s wildlife,
              scenery, ecology, and changing light in a thoughtful, unhurried way.
            </p>
            <p>
              Pick the format that fits your travel style: private day, private
              sunset, small-group day, or small-group sunset. All options keep
              the experience calm, personal, and focused on meaningful time in
              the field.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="relative h-56 overflow-hidden rounded-2xl border border-sand/20 bg-night/40 md:h-72">
                <Image
                  src="/images/google-search-thumb.jpg"
                  alt="Bison on Antelope Island viewed during a Safari Utah tour"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="relative h-56 overflow-hidden rounded-2xl border border-sand/20 bg-night/40 md:h-72">
                <Image
                  src="/images/island-sunset.jpg"
                  alt="Sunset over the Great Salt Lake from Antelope Island"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              {tourCards.map((tour) => (
                <article
                  key={tour.href}
                  className="flex h-full flex-col space-y-3 rounded-2xl border border-sand/20 bg-night/50 p-6 text-sm text-sand/80"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand/60">
                    {tour.eyebrow}
                  </p>
                  <h3 className="font-serif text-xl text-bone">{tour.title}</h3>
                  <p className="leading-7">{tour.description}</p>
                  <p className="font-medium text-bone">{tour.price}</p>
                  <div className="mt-auto pt-2">
                    <Link href={tour.href} className={buttonClasses}>
                      {tour.buttonLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-2xl border border-sand/15 bg-night/40 p-5 text-sm leading-7 text-sand/80">
              <p>
                Not sure which format fits best? Compare the full Antelope Island
                lineup, including what each tour includes and who each option is
                best for.
              </p>
              <Link
                href="/tours/antelope-island#choose-your-tour"
                className={secondaryLinkClasses}
              >
                Compare all Antelope Island tours
              </Link>
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
