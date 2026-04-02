import Section from "@/components/shared/Section";
import Image from "next/image";

export const metadata = {
  title: "Antelope Island Wildlife Tours | Safari Utah",
  description:
    "Private Antelope Island wildlife tours and a small-group option, guided with expert natural history interpretation.",
};

const primaryButtonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

const cardClasses =
  "rounded-2xl border border-sand/20 bg-night/60 p-6 md:p-8";

const outlinedHeadingClasses =
  "inline-block rounded-xl border border-sand/20 px-4 py-3 font-serif text-lg text-bone md:text-3xl";

export default function AntelopeIslandTourPage() {
  return (
    <>
      <section className="relative h-[70vh] overflow-hidden md:h-[80vh]">
        <Image
          src="/images/avocets.jpeg"
          alt="Wildlife and shoreline landscape on Antelope Island"
          fill
          priority
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
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <div className={cardClasses}>
              <div className="space-y-4">
                <div className="space-y-3 border-b border-sand/20 pb-4">
                  <h2 className={outlinedHeadingClasses}>Private Tours</h2>
                  <p className="max-w-2xl text-sm leading-7 text-sand/85">
                    Best for guests who want privacy, flexibility, and a more
                    personal pace in the field. Choose between our classic
                    daytime private tour and a longer sunset option with more
                    evening atmosphere.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-sand/15 bg-night/50 p-5">
                  <div className="space-y-3 border-b border-sand/15 pb-4">
                    <h3 className="font-serif text-xl text-bone">
                      Private Day Tour
                    </h3>
                    <p className="text-sm text-sand/75">
                      Premium Antelope Island Private Tour
                    </p>
                  </div>

                  <p className="text-sm leading-7 text-sand/85">
                    Our most flexible private option, timed around the best
                    daylight hours for wildlife viewing and scenery.
                  </p>

                  <ul className="list-disc space-y-1 pl-5 text-sm text-sand/85">
                    <li>Private experience for your group only</li>
                    <li>Approximately 4 hours</li>
                    <li>From $400</li>
                    <li>1 to 4 guests</li>
                  </ul>

                  <p className="text-sm text-sand/85">
                    <span className="font-semibold text-bone">Best for:</span>{" "}
                    couples, families, photographers, and first-time visitors who
                    want a private wildlife tour at their own pace.
                  </p>

                  <a href="/book/private" className={primaryButtonClasses}>
                    Book Private Day Tour
                  </a>
                </div>

                <div className="space-y-4 rounded-2xl border border-sand/15 bg-night/50 p-5">
                  <div className="space-y-3 border-b border-sand/15 pb-4">
                    <h3 className="font-serif text-xl text-bone">
                      Private Sunset Tour
                    </h3>
                    <p className="text-sm text-sand/75">
                      Premium Antelope Island Private Sunset Tour
                    </p>
                  </div>

                  <p className="text-sm leading-7 text-sand/85">
                    A longer private outing designed for guests who want the
                    island’s best evening light and a more atmospheric finish to
                    the day.
                  </p>

                  <ul className="list-disc space-y-1 pl-5 text-sm text-sand/85">
                    <li>Private experience for your group only</li>
                    <li>Approximately 4.5 to 5 hours</li>
                    <li>From $500</li>
                    <li>1 to 4 guests</li>
                  </ul>

                  <p className="text-sm text-sand/85">
                    <span className="font-semibold text-bone">Best for:</span>{" "}
                    guests who want sunset light, stronger photography
                    opportunities, and a more elevated feel in the field.
                  </p>

                  <a href="/book/sunset" className={primaryButtonClasses}>
                    Book Private Sunset Tour
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={cardClasses}>
            <div className="space-y-4">
              <div className="space-y-3 border-b border-sand/20 pb-4">
                <h2 className={outlinedHeadingClasses}>Small-Group Tour</h2>
                <p className="text-sm text-sand/75">
                  Antelope Island Shared Small-Group Tour
                </p>
              </div>

              <p className="text-sm leading-7 text-sand/85">
                A shared public tour for guests who want expert guiding, a
                calm pace, and a lower entry price while still keeping the
                experience small-scale.
              </p>

              <ul className="list-disc space-y-1 pl-5 text-sm text-sand/85">
                <li>Shared small-group experience</li>
                <li>Approximately 4 hours</li>
                <li>1 adult $160</li>
                <li>2+ adults $140 per adult</li>
                <li>Youth with adult $80</li>
              </ul>

              <p className="text-sm text-sand/85">
                <span className="font-semibold text-bone">Best for:</span>{" "}
                guests who are comfortable joining others and want a more
                accessible way to experience the island without losing the value
                of expert guiding.
              </p>

              <a href="/book/small-group" className={primaryButtonClasses}>
                Book Small-Group Tour
              </a>
            </div>
          </div>
        </div>
      </Section>


      <Section title="Why Antelope Island">
        <div className="relative overflow-hidden rounded-2xl border border-sand/20 bg-night/50">
          <Image
            src="/images/IMG_9056-01-01-01-01-01.jpeg"
            alt="Wildlife and landscape on Antelope Island"
            fill
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

      <Section
        //eyebrow="Why Safari Utah"
        title="Why Safari Utah"
      >
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-sand/85">
          <p>
            Safari Utah brings the depth and interpretive style of African safari
            guiding to Antelope Island. That means more than simply driving from
            stop to stop. You spend time understanding the island’s wildlife,
            geology, ecology, and seasonal rhythms with a guide who knows how to
            read the landscape.
          </p>
          <p> Whether you choose a private tour or a small-group outing, the goal
            is the same: meaningful time in the field, guided by someone who can
            help you see more and understand more.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Ready to Book"
        title="Choose your Antelope Island experience"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <a href="/book/private" className={primaryButtonClasses}>
            Book Private Day Tour
          </a>
          <a href="/book/sunset" className={primaryButtonClasses}>
            Book Private Sunset Tour
          </a>
          <a href="/book/small-group" className={primaryButtonClasses}>
            Book Small-Group Tour
          </a>
        </div>
      </Section>
    </>
  );
}