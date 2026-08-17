import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/shared/Section";
import BokunLoader from "@/components/shared/BokunLoader";
import BookingProductGroups from "@/components/shared/BookingProductGroups";
import { bookingProducts } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Antelope Island Wildlife Tours from Salt Lake City",
  description:
    "Compare and book private and small-group Antelope Island wildlife tours from Salt Lake City with Safari Utah, led by safari-trained naturalist guides.",
  alternates: {
    canonical: "/tours/antelope-island",
  },
  openGraph: {
    title: "Antelope Island Wildlife Tours from Salt Lake City | Safari Utah",
    description:
      "Private and small-group Antelope Island wildlife tours with hotel pickup, bison, birding, Great Salt Lake scenery, and safari-trained naturalist guides.",
    url: "https://safariutah.com/tours/antelope-island",
    images: [
      {
        url: "https://safariutah.com/images/avocets.jpeg",
        width: 1600,
        height: 900,
        alt: "Wildlife and shoreline landscape on Antelope Island",
      },
    ],
  },
};

const primaryButtonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

const secondaryButtonClasses =
  "inline-flex items-center justify-center rounded-full border border-sand/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-sand transition hover:bg-sand hover:text-night font-sans";

const quickFacts = [
  "Salt Lake City pickup and drop-off",
  "Private and shared options",
  "Day and sunset tours",
  "Bison, birds, pronghorn, lake views, and changing seasonal wildlife",
];

const fitCards = [
  {
    title: "Choose private if",
    body: "You want your group only, a flexible pace, and more room to shape the day around photography, birding, family needs, or quieter wildlife viewing.",
  },
  {
    title: "Choose small-group if",
    body: "You are comfortable joining other guests and want a calm, guided Antelope Island experience with per-person pricing and a shared schedule.",
  },
  {
    title: "Choose sunset if",
    body: "You want evening light, Great Salt Lake atmosphere, stronger photography conditions, and a more dramatic finish to the island experience.",
  },
];

export default function AntelopeIslandTourPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://safariutah.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Antelope Island Wildlife Tours",
          item: "https://safariutah.com/tours/antelope-island",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: "Antelope Island Wildlife Tours from Salt Lake City",
      description:
        "Private and small-group Antelope Island wildlife tours guided with expert natural history interpretation, Salt Lake City pickup, and Great Salt Lake scenery.",
      provider: {
        "@type": "LocalBusiness",
        name: "Safari Utah",
        url: "https://safariutah.com/",
        telephone: "+1-385-449-0888",
      },
      touristType: ["Wildlife viewers", "Birders", "Photographers", "Families", "Couples"],
      itinerary: {
        "@type": "ItemList",
        itemListElement: bookingProducts.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.title,
          description: product.description,
          url: `https://safariutah.com/tours/antelope-island#${product.id}`,
        })),
      },
    },
  ];

  return (
    <>
      <BokunLoader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden md:min-h-[82svh]">
        <Image
          src="/images/avocets.jpeg"
          alt="Wildlife and shoreline landscape on Antelope Island"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.60]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/75 via-night/35 to-night/15" />

        <div className="relative z-10 flex min-h-[calc(100svh-4rem)] items-end py-20 md:min-h-[82svh] md:py-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sand">
                Antelope Island Wildlife Tours
              </p>

              <h1 className="font-serif text-4xl leading-tight text-bone md:text-6xl">
                Antelope Island wildlife tours from Salt Lake City
              </h1>

              <p className="max-w-2xl text-sm leading-7 text-sand/95 md:text-base md:leading-8">
                Explore Antelope Island with wildlife-focused guiding shaped by
                African safari training and ecological field experience. Choose
                a private or small-group tour, day or sunset, and experience the
                island with time to notice what most visitors miss.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <a href="#choose-your-tour" className={primaryButtonClasses}>
                  Compare and Book Tours
                </a>
                <a href="#what-to-expect" className={secondaryButtonClasses}>
                  What to Expect
                </a>
              </div>

              <div className="grid gap-2 pt-4 text-xs text-sand/85 sm:grid-cols-2 md:flex md:flex-wrap md:gap-x-4 md:text-sm">
                {quickFacts.map((fact) => (
                  <span
                    key={fact}
                    className="rounded-full border border-sand/20 bg-night/35 px-3 py-2 backdrop-blur"
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="choose-your-tour"
        eyebrow="Compare Tours"
        title="One island, four ways to experience it"
        subtitle="Start by choosing private or shared, then choose daylight or sunset. All options are guided by Safari Utah and booked directly here."
      >
        <BookingProductGroups />
      </Section>

      <Section
        eyebrow="Find Your Fit"
        title="Which Antelope Island tour fits your style?"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {fitCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-sand/20 bg-night/45 p-6 text-sm leading-7 text-sand/85"
            >
              <h2 className="mb-3 font-serif text-xl text-bone">{card.title}</h2>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Book Direct"
        title="Reserve directly with Safari Utah"
      >
        <div className="grid gap-6 rounded-3xl border border-sand/25 bg-sand/[0.07] p-6 text-sm leading-7 text-sand/85 md:grid-cols-[1.1fr,0.9fr] md:p-8">
          <div className="space-y-4">
            <p>
              This page shows the current Safari Utah Antelope Island tour
              lineup in one place. Booking buttons open the secure Bókun
              calendar for each product, while Safari Utah remains your direct
              point of contact for pickup details, questions, and special needs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#choose-your-tour" className={primaryButtonClasses}>
                Choose a Tour
              </a>
              <Link href="/contact" className={secondaryButtonClasses}>
                Ask a Question
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
            <li className="rounded-2xl border border-sand/15 bg-night/35 p-4">
              Direct communication with the local guides
            </li>
            <li className="rounded-2xl border border-sand/15 bg-night/35 p-4">
              Secure booking through Bókun
            </li>
            <li className="rounded-2xl border border-sand/15 bg-night/35 p-4">
              Clear private and shared tour choices
            </li>
          </ul>
        </div>
      </Section>

      <Section id="what-to-expect" title="What to Expect">
        <div className="grid items-start gap-8 md:grid-cols-[1.4fr,1fr]">
          <div className="space-y-4 text-sm leading-7 text-sand/85">
            <p>
              Tours begin with pickup from your Salt Lake City area hotel or a
              convenient meeting location and end with return drop-off. Most of
              the outing is spent exploring the island by vehicle, with
              opportunities to step out for closer views and occasional short,
              easy walks when conditions allow.
            </p>
            <p>
              Wildlife is never scripted, which is part of what makes each tour
              special. Every outing is guided with attention to current
              conditions, seasonality, light, and animal activity to make the
              most of your time on the island.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/50 p-6">
            <h2 className="font-serif text-xl text-bone">
              Included on all tours
            </h2>
            <ul className="list-disc space-y-1 pl-5 text-sm text-sand/85">
              <li>Salt Lake City area pickup and drop-off</li>
              <li>Expert naturalist guiding</li>
              <li>Wildlife viewing and scenic stops</li>
              <li>Time for photos and interpretation</li>
              <li>Antelope Island entrance fees</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Why Antelope Island">
        <div className="relative overflow-hidden rounded-2xl border border-sand/20 bg-night/50">
          <Image
            src="/images/IMG_9056-01-01-01-01-01.jpeg"
            alt="Wildlife and landscape on Antelope Island"
            fill
            sizes="100vw"
            className="object-cover brightness-[0.55]"
          />
          <div className="relative z-10 max-w-3xl space-y-4 p-8 text-sm leading-7 text-bone/95 md:p-10">
            <p>
              Antelope Island is one of the most distinctive landscapes in Utah,
              where open grasslands, rocky slopes, wetlands, and salt flats meet
              the vast water and light of the Great Salt Lake. It is a place of
              sweeping views, strong wildlife habitat, and exceptional birdlife,
              with opportunities to see bison, pronghorn, mule deer, raptors,
              shorebirds, and migratory birds depending on the season and
              conditions.
            </p>
            <p>
              What makes the island especially memorable is not just its scenery,
              but the way its ecology, geology, and changing light shape the
              experience. Safari Utah helps you experience those connections more
              clearly, so your time on the island feels deeper, more grounded,
              and more rewarding than simply passing through.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Why Safari Utah">
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-sand/85">
          <p>
            Safari Utah brings the depth and interpretive style of African safari
            guiding to Antelope Island. That means more than simply driving from
            stop to stop. You spend time understanding the island&apos;s wildlife,
            geology, ecology, and seasonal rhythms with guides who know how to
            read the landscape.
          </p>
          <p>
            Whether you choose a private tour or a small-group outing, the goal
            is the same: meaningful time in the field, guided by someone who can
            help you see more and understand more.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/about" className={secondaryButtonClasses}>
              Meet Your Guides
            </Link>
            <Link href="/gallery" className={secondaryButtonClasses}>
              View Gallery
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
