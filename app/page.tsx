import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars";
import Section from "@/components/shared/Section";
import ReviewStrip from "@/components/shared/ReviewStrip";

export const metadata: Metadata = {
  title: "Safari Utah | Antelope Island Wildlife Tours from Salt Lake City",
  description:
    "Book private and small-group Antelope Island wildlife tours from Salt Lake City with Safari Utah, led by safari-trained naturalist guides.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Safari Utah | Antelope Island Wildlife Tours from Salt Lake City",
    description:
      "Private and small-group Antelope Island wildlife tours with safari-trained naturalist guides, hotel pickup, bison, birds, and Great Salt Lake scenery.",
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

const primaryButtonClasses =
  "inline-flex w-full items-center justify-center rounded-full bg-sand px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-night transition hover:bg-bone sm:w-auto";

const secondaryButtonClasses =
  "inline-flex w-full items-center justify-center rounded-full border border-sand/60 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-sand transition hover:bg-sand hover:text-night sm:w-auto";

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

const directBookingReasons = [
  "Book with the local guides who operate the tour",
  "See the current Safari Utah lineup in one place",
  "Use secure online checkout through Bókun",
  "Ask us directly about pickup, timing, private needs, or larger groups",
];

const reviewThemes = [
  {
    title: "Guests see more with a guide",
    body: "Reviews often mention wildlife guests would have missed on their own, from bison and pronghorn to owls, porcupines, coyotes, and shorebirds.",
  },
  {
    title: "The pace feels personal",
    body: "Guests repeatedly describe the tours as relaxed, flexible, friendly, and small enough to feel more like a private field day than a scripted bus tour.",
  },
  {
    title: "The island makes more sense",
    body: "Many guests highlight the natural history, geology, birding, and ecological context that turns the outing into more than a scenic drive.",
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
    mainEntity: {
      "@type": "ItemList",
      name: "Safari Utah Antelope Island tour options",
      itemListElement: tourCards.map((tour, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tour.title,
        url: `https://safariutah.com${tour.href}`,
      })),
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
        id="tour-options"
        eyebrow="Antelope Island Tour Options"
        title="Choose your Safari Utah experience"
        subtitle="Choose private for your group only, or shared for a small-group public tour with per-person pricing."
      >
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr,1.35fr]">
          <div className="space-y-5 text-sm leading-7 text-sand/80">
            <p>
              Discover Antelope Island through immersive, expert-guided wildlife
              experiences inspired by the depth of African safari guiding. Each
              tour is designed to help you connect with the island&apos;s wildlife,
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
                  className="flex h-full flex-col space-y-3 rounded-2xl border border-sand/20 bg-night/50 p-6 text-sm text-sand/80 shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sand/60">
                    {tour.eyebrow}
                  </p>
                  <h3 className="font-serif text-xl text-bone">{tour.title}</h3>
                  <p className="leading-7">{tour.description}</p>
                  <p className="font-medium text-bone">{tour.price}</p>
                  <div className="mt-auto pt-2">
                    <Link href={tour.href} className={primaryButtonClasses}>
                      {tour.buttonLabel}
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-2xl border border-sand/15 bg-sand/[0.06] p-5 text-sm leading-7 text-sand/80">
              <p>
                Not sure which format fits best? Compare the full Antelope Island
                lineup, including what each tour includes and who each option is
                best for.
              </p>
              <Link
                href="/tours/antelope-island#choose-your-tour"
                className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-sand underline underline-offset-4 hover:text-bone"
              >
                Compare all Antelope Island tours
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Book Direct"
        title="Book with the guides who operate the tour"
        subtitle="A direct booking should feel as trustworthy as a marketplace, with a more personal connection to the people actually leading your day."
      >
        <div className="grid gap-6 rounded-3xl border border-sand/25 bg-sand/[0.07] p-6 md:grid-cols-[1fr,1.1fr] md:p-8">
          <div className="space-y-4 text-sm leading-7 text-sand/85">
            <p>
              Booking directly keeps the experience simple: you choose the tour,
              reserve through secure Bókun checkout, and communicate directly
              with Safari Utah about pickup details, timing, private needs, and
              special questions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tours/antelope-island#choose-your-tour"
                className={primaryButtonClasses}
              >
                Book Direct
              </Link>
              <Link href="/faq" className={secondaryButtonClasses}>
                Read FAQ
              </Link>
            </div>
          </div>

          <ul className="grid gap-3 text-sm text-sand/85 sm:grid-cols-2">
            {directBookingReasons.map((reason) => (
              <li
                key={reason}
                className="rounded-2xl border border-sand/15 bg-night/35 p-4 leading-6"
              >
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Guest Proof"
        title="Why guests remember the island differently with Safari Utah"
        subtitle="The full review strip is preserved below, but these are the themes guests mention again and again."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {reviewThemes.map((theme) => (
            <article
              key={theme.title}
              className="rounded-2xl border border-sand/20 bg-night/45 p-6 text-sm leading-7 text-sand/85"
            >
              <h3 className="mb-3 font-serif text-xl text-bone">{theme.title}</h3>
              <p>{theme.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="About Safari Utah"
        title="African-inspired nature guiding in the American West"
      >
        <div className="grid items-start gap-8 md:grid-cols-[1.25fr,0.9fr]">
          <div className="space-y-4 text-sm leading-7 text-sand/80">
            <p>
              Safari Utah brings African-inspired nature guiding to the American
              West through expert-led wildlife experiences. Our focus is to
              connect people with nature through clear insight, meaningful
              moments, and a deeper understanding of place.
            </p>
            <p>
              Educated in the natural sciences, with ecological field experience
              and professional FGASA safari guide training, Clayton and Sinéad
              offer a grounded, guest-centered approach to interpreting
              landscapes and wildlife.
            </p>
            <Link href="/about" className={secondaryButtonClasses}>
              Meet Your Guides
            </Link>
          </div>

          <div className="relative h-72 overflow-hidden rounded-2xl border border-sand/20 bg-night/40 md:h-80">
            <Image
              src="/images/about-safari.jpg"
              alt="Safari Utah mountain and bison brand mark"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-contain p-8"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Gallery"
        title="A look at the wildlife, light, and landscapes"
        subtitle="The gallery remains available for guests who want a visual feel for the experience before booking."
      >
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              src: "/images/bison-antelope-island.jpg",
              alt: "Bison grazing on Antelope Island",
            },
            {
              src: "/images/avocets.jpeg",
              alt: "American avocets near Antelope Island",
            },
            {
              src: "/images/IslandSunset.jpg",
              alt: "Sunset over Antelope Island and the Great Salt Lake",
            },
          ].map((image) => (
            <div
              key={image.src}
              className="relative h-52 overflow-hidden rounded-2xl border border-sand/20 bg-night/40"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Link href="/gallery" className={secondaryButtonClasses}>
            View Gallery
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Custom Experiences"
        title="Custom experiences by request"
      >
        <div className="space-y-4 text-sm leading-7 text-sand/80">
          <p>
            For guests seeking something tailored, Safari Utah offers a limited
            number of custom outings. Options include full-day trips to Arches
            or Canyonlands, wildlife and nature outings in the Wasatch
            Mountains, and personalized African safari planning. These
            experiences are curated individually and available by request.
          </p>
          <Link href="/custom-experiences" className={secondaryButtonClasses}>
            Request a custom experience
          </Link>
        </div>
      </Section>

      <div className="w-full overflow-x-hidden">
        <ReviewStrip />
      </div>
    </>
  );
}
