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
  "inline-block rounded-xl border border-sand/20 px-4 py-3 font-serif text-2xl text-bone md:text-3xl";

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
              <p className="text-xs uppercase tracking-[0.3em] text-sand/85">
                Antelope Island Wildlife Tours
              </p>

              <h1 className="font-serif text-3xl text-bone md:text-5xl">
                Private and small-group Antelope Island wildlife tours
              </h1>

              <p className="max-w-2xl text-sm text-sand/95 md:text-base">
                Explore Antelope Island with wildlife-focused guiding shaped by
                African safari training and ecological field experience. Choose
                a private daytime tour, a private sunset tour, or a small-group
                outing.
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
        title="Choose a Tour that Fits Your Style"
      >
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <div className={cardClasses}>
              <div className="space-y-4">
                <div className="space-y-3 border-b border-sand/20 pb-4">
                  <h2 className={outlinedHeadingClasses}>Private Tours</h2>
                  <p className="max-w-2xl text-sm leading-7 text-sand/85">
                    Our private Antelope Island tours are best for guests who
                    want a more personal pace in the field. These outings are
                    shaped by real-time conditions, with time for wildlife
                    viewing, photography, and natural history interpretation
                    throughout.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-sand/15 bg-night/50 p-5">
                  <div className="space-y-3 border-b border-sand/15 pb-4">
                    <h3 className="font-serif text-xl text-bone">
                      Private Day Tour
                    </h3>
                    
                  </div>

                  <p className="text-sm leading-7 text-sand/85">
                    A four-hour private wildlife tour designed around the best
                    daylight viewing.
                  </p>

                  <ul className="list-disc space-y-1 pl-5 text-sm text-sand/85">
                    <li>Private experience</li>
                    <li>Approximately 4 hours</li>
                    <li>From $400</li>
                    <li>1 to 4 guests</li>
                  </ul>

                  <p className="text-sm text-sand/85">
                    <span className="font-semibold text-bone">Best for:</span>{" "}
                    couples, families, photographers, and guests who want a
                    private wildlife experience at their own pace.
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
                    
                  </div>

                  <p className="text-sm leading-7 text-sand/85">
                    A longer private wildlife tour timed for the island’s best
                    evening light and a memorable finish over the Great Salt
                    Lake.
                  </p>

                  <ul className="list-disc space-y-1 pl-5 text-sm text-sand/85">
                    <li>Private experience</li>
                    <li>Approximately 4.5 to 5 hours</li>
                    <li>From $500</li>
                    <li>1 to 4 guests</li>
                  </ul>

                  <p className="text-sm text-sand/85">
                    <span className="font-semibold text-bone">Best for:</span>{" "}
                    guests who want sunset light, stronger photography
                    opportunities, and extra time on the island.
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
                
              </div>

              <p className="text-sm leading-7 text-sand/85">
                A shared wildlife experience for guests who want expert guiding,
                a calm pace, and a more accessible price point.
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
                guests who are comfortable sharing the tour and want a lower
                entry price without losing the value of expert guiding.
              </p>

              <a href="/book/small-group" className={primaryButtonClasses}>
                Book Small-Group Tour
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Why Safari Utah"
        title="A more personal way to experience Antelope Island"
      >
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-sand/85">
          <p>
            Safari Utah brings the depth and interpretive style of African
            safari guiding to Antelope Island. That means more than simply
            driving from stop to stop. You will spend time understanding the
            island’s wildlife, geology, ecology, and seasonal rhythms with a
            guide who knows how to read the landscape.
          </p>
          <p>
            Whether you choose a private tour or a small-group outing, the goal
            is the same: meaningful time in the field, guided by someone who can
            help you see more and understand more.
          </p>
        </div>
      </Section>

      <Section title="What to Expect">
        <div className="grid items-start gap-8 md:grid-cols-[1.4fr,1fr]">
          <div className="space-y-4 text-sm leading-7 text-sand/85">
            <p>
              Tours begin with pickup from your Salt Lake City area hotel and
              end with return drop-off. Most of the outing is spent exploring
              the island by vehicle, with opportunities to step out for closer
              views and occasional short, easy walks when conditions allow.
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