import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/shared/Section";
import BokunLoader from "@/components/shared/BokunLoader";
import BookingProductGroups from "@/components/shared/BookingProductGroups";
import { bookingChannelUuids, bookingProducts } from "@/lib/booking";

export const metadata: Metadata = {
  title: "Antelope Island Wildlife Tours | Safari Utah",
  description:
    "Private Antelope Island wildlife tours and a small-group option, guided with expert natural history interpretation.",
  alternates: {
    canonical: "/tours/antelope-island",
  },
};

const primaryButtonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

export default function AntelopeIslandTourPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Antelope Island Wildlife Tours",
    description:
      "Private Antelope Island wildlife tours and small-group options guided with expert natural history interpretation.",
    provider: {
      "@type": "LocalBusiness",
      name: "Safari Utah",
      url: "https://safariutah.com/",
      telephone: "+1-385-449-0888",
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: bookingProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.title,
        description: product.description,
      })),
    },
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

      <section className="relative h-[70vh] overflow-hidden md:h-[80vh]">
        <Image
          src="/images/avocets.jpeg"
          alt="Wildlife and shoreline landscape on Antelope Island"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.55]"
        />

        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto max-w-6xl px-4 pb-10 md:pb-14">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs uppercase font-bold tracking-[0.3em] text-sand">
                Antelope Island Wildlife Tours
              </p>

              <h1 className="font-serif text-3xl text-bone md:text-5xl">
                Private and small-group Antelope Island wildlife tours
              </h1>

              <p className="max-w-2xl text-sm text-sand/95 md:text-base">
                Explore Antelope Island with wildlife-focused guiding shaped by
                African safari training and ecological field experience. Choose a
                flexible private daytime tour, a more atmospheric sunset tour, or
                a calm small-group outing.
              </p>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <a href="#choose-your-tour" className={primaryButtonClasses}>
                  Compare Antelope Island Tours
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="choose-your-tour"
        eyebrow="Compare Tours"
        title="Which Antelope Island tour fits your style?"
      >
        <BookingProductGroups />
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
              Antelope Island is one of the most distinctive landscapes in Utah, where
              open grasslands, rocky slopes, wetlands, and salt flats meet the vast
              water and light of the Great Salt Lake. It is a place of sweeping views,
              strong wildlife habitat, and exceptional birdlife, with opportunities to
              see bison, pronghorn, mule deer, raptors, shorebirds, and migratory birds
              depending on the season and conditions.
            </p>
            <p>
              What makes the island especially memorable is not just its scenery, but
              the way its ecology, geology, and changing light shape the experience.
              Safari Utah helps you experience those connections more clearly, so your
              time on the island feels deeper, more grounded, and more rewarding than
              simply passing through.
            </p>
          </div>
        </div>
      </Section>

      <Section title="What to Expect">
        <div className="grid items-start gap-8 md:grid-cols-[1.4fr,1fr]">
          <div className="space-y-4 text-sm leading-7 text-sand/85">
            <p>
              Tours begin with pickup from your Salt Lake City area hotel or
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
            <h3 className="font-serif text-xl text-bone">
              Included on all tours
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-sand/85">
              <li>Salt Lake City area pickup and drop-off</li>
              <li>Expert naturalist guiding</li>
              <li>Wildlife viewing and scenic stops</li>
              <li>Time for photos and interpretation</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Why Safari Utah">
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-sand/85">
          <p>
            Safari Utah brings the depth and interpretive style of African safari
            guiding to Antelope Island. That means more than simply driving from
            stop to stop. You spend time understanding the island’s wildlife,
            geology, ecology, and seasonal rhythms with a guide who knows how to
            read the landscape.
          </p>
          <p>
            Whether you choose a private tour or a small-group outing, the goal
            is the same: meaningful time in the field, guided by someone who can
            help you see more and understand more.
          </p>
        </div>
      </Section>
    </>
  );
}
