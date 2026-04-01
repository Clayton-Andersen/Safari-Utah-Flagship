import Section from "@/components/shared/Section";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Antelope Island Wildlife Tours | Safari Utah",
  description:
    "Private premium Antelope Island wildlife tours and a small-group option, guided with expert natural history interpretation.",
};

const primaryButtonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

const secondaryButtonClasses =
  "inline-flex items-center justify-center rounded-full border border-sand/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-sand transition hover:bg-sand hover:text-night font-sans";

const cardClasses =
  "rounded-2xl border border-sand/20 bg-night/60 p-6 md:p-8";

const badgeClasses =
  "inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand";

export default function AntelopeIslandTourPage() {
  return (
    <>
      <section className="relative h-[68vh] md:h-[82vh] overflow-hidden">
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
              <p className="text-xs uppercase tracking-[0.3em] text-sand/80">
                Antelope Island Wildlife Tours
              </p>

              <h1 className="font-serif text-3xl md:text-5xl text-bone">
                Private and small-group Antelope Island wildlife tours
              </h1>

              <p className="max-w-2xl text-sm md:text-base text-sand/90">
                Explore Antelope Island’s sweeping landscapes, diverse
                ecosystems, and remarkable wildlife with an experienced
                safari-trained guide. Choose a private premium experience for
                your group, or join our small-group wildlife tour.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/book/private" className={primaryButtonClasses}>
                  Book Private Tour
                </Link>
                <Link
                  href="#choose-your-tour"
                  className={secondaryButtonClasses}
                >
                  Compare Tours
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="choose-your-tour"
        eyebrow="Choose Your Tour"
        title="The fastest way to decide"
        subtitle="If you want the tour to be private and flexible, choose one of our premium private experiences. If you’re comfortable joining others, choose the small-group wildlife tour."
      >
        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          <div className="md:col-span-2 space-y-6">
            <div className={cardClasses}>
              <div className="space-y-3">
                <span className={badgeClasses}>Private Tours</span>
                <h2 className="font-serif text-2xl md:text-3xl text-bone">
                  Premium private experiences for your group only
                </h2>
                <p className="max-w-2xl text-sm text-sand/80">
                  Our private Antelope Island tours are best for guests who want
                  exclusivity, flexibility, and a more personal pace in the
                  field. These tours are shaped by real-time conditions, with
                  time for wildlife viewing, photography, and natural history
                  interpretation throughout.
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-sand/15 bg-night/50 p-5 space-y-4">
                  <h3 className="font-serif text-xl text-bone">
                    Premium Antelope Island Tour
                  </h3>
                  <p className="text-sm text-sand/80">
                    A four-hour private wildlife experience designed around the
                    best daylight viewing.
                  </p>
                  <ul className="list-disc pl-5 text-sm text-sand/80 space-y-1">
                    <li>Private experience</li>
                    <li>Approximately 4 hours</li>
                    <li>$400 minimum fare</li>
                    <li>1 to 4 guests</li>
                  </ul>
                  <p className="text-sm text-sand/80">
                    <span className="font-semibold text-bone">Best for:</span>{" "}
                    couples, families, photographers, and guests who want a
                    private wildlife experience at their own pace.
                  </p>
                  <Link
                    href="/book/private"
                    className={primaryButtonClasses}
                  >
                    Book Private Tour
                  </Link>
                </div>

                <div className="rounded-2xl border border-sand/15 bg-night/50 p-5 space-y-4">
                  <h3 className="font-serif text-xl text-bone">
                    Premium Antelope Island Elite Sunset Tour
                  </h3>
                  <p className="text-sm text-sand/80">
                    A longer private experience timed for the island’s best
                    evening light and a memorable finish over the Great Salt
                    Lake.
                  </p>
                  <ul className="list-disc pl-5 text-sm text-sand/80 space-y-1">
                    <li>Private experience</li>
                    <li>Approximately 4.5 to 5 hours</li>
                    <li>$500 minimum fare</li>
                    <li>1 to 4 guests</li>
                  </ul>
                  <p className="text-sm text-sand/80">
                    <span className="font-semibold text-bone">Best for:</span>{" "}
                    guests who want sunset light, stronger photography
                    opportunities, and extra time on the island.
                  </p>
                  <a href="/book/sunset" className={primaryButtonClasses}>
                    Book Sunset Tour
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={cardClasses}>
            <div className="space-y-4">
              <span className={badgeClasses}>Small-Group Tour</span>
              <h2 className="font-serif text-2xl text-bone">
                Antelope Island Small-Group Wildlife Tour
              </h2>
              <p className="text-sm text-sand/80">
                A shared wildlife experience for guests who want expert guiding,
                a calm pace, and a more accessible price point.
              </p>

              <ul className="list-disc pl-5 text-sm text-sand/80 space-y-1">
                <li>Shared small-group experience</li>
                <li>Approximately 4 hours</li>
                <li>1 adult $160</li>
                <li>2 or more guests at $140 per adult</li>
                <li>Youth with adult $80</li>
              </ul>

              <p className="text-sm text-sand/80">
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
        <div className="max-w-3xl space-y-4 text-sm text-sand/80">
          <p>
            Safari Utah brings the depth and interpretive style of African
            safari guiding to Antelope Island. That means more than simply
            driving from stop to stop. You’ll spend time understanding the
            island’s wildlife, geology, ecology, and seasonal rhythms with a
            guide who knows how to read the landscape.
          </p>
          <p>
            Whether you choose a private experience or a small-group tour, the
            goal is the same: meaningful time in the field, guided by someone
            who can help you see more and understand more.
          </p>
        </div>
      </Section>

      <Section title="Premium Tour Overview">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
          <div className="space-y-4 text-sm text-sand/80">
            <p>
              Our premium Antelope Island tours are fully private and exclusive
              to your group. From pickup to drop-off, we move through the
              island’s sweeping landscapes at a comfortable, flexible pace,
              watching for bison, pronghorn, mule deer, coyotes, and seasonal
              birdlife along the way.
            </p>
            <p>
              These tours are shaped by real-time conditions rather than a fixed
              script, allowing time for wildlife sightings, photography, scenic
              viewpoints, and ecological interpretation as opportunities arise.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Private experience for your group only</li>
              <li>Flexible pacing shaped by wildlife and conditions</li>
              <li>Photography support and natural history interpretation</li>
              <li>Optional short, easy walks when appropriate</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-sand/20 bg-night/50 p-6 space-y-4">
            <h3 className="font-serif text-xl text-bone">
              Included on all tours
            </h3>
            <ul className="list-disc pl-5 text-sm text-sand/80 space-y-1">
              <li>Salt Lake City area pickup and drop-off</li>
              <li>Expert naturalist guiding</li>
              <li>Wildlife viewing and scenic stops</li>
              <li>Time for photos and interpretation</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Premium Antelope Island Tour">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
          <div className="space-y-4 text-sm text-sand/80">
            <p>
              This is our signature private daytime wildlife experience. It is
              designed around the best daylight viewing and offers the greatest
              flexibility for guests who want a private tour at their own pace.
            </p>
            <p>
              From hotel pickup to drop-off, we explore the island with time for
              wildlife, scenery, photography, and interpretation throughout the
              outing.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Approximately 4 hours</li>
              <li>$400 minimum fare</li>
              <li>1 to 4 guests</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-sand/20 bg-night/50 p-6 space-y-4">
            <h3 className="font-serif text-xl text-bone">Best fit</h3>
            <p className="text-sm text-sand/80">
              Ideal for couples, families, photographers, and visitors who want
              a private introduction to Antelope Island with expert guiding.
            </p>
            <a href="/book/private" className={primaryButtonClasses}>
              Book Private Tour
            </a>
          </div>
        </div>
      </Section>

      <Section title="Premium Antelope Island Private Sunset Tour">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
          <div className="space-y-4 text-sm text-sand/80">
            <p>
              The private sunset experience follows the same private wildlife
              format as our daytime tour but extends the outing into the
              island’s most beautiful light. It creates more space for evening
              atmosphere, memorable views, and sunset photography.
            </p>
            <p>
              This tour is ideal for guests who want a more elevated finish to
              the day and extra time in the field.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Approximately 4.5 to 5 hours</li>
              <li>$500 minimum fare</li>
              <li>1 to 4 guests</li>
              <li>Offered Fridays and Mondays</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-sand/20 bg-night/50 p-6 space-y-4">
            <h3 className="font-serif text-xl text-bone">Best fit</h3>
            <p className="text-sm text-sand/80">
              Best for guests who want dramatic evening light, a more atmospheric
              experience, and additional time for photography and scenic stops.
            </p>
            <a href="/book/sunset" className={primaryButtonClasses}>
              Book Sunset Tour
            </a>
          </div><div className="rounded-2xl border border-sand/20 bg-night/50 p-6 space-y-4">
            <h3 className="font-serif text-xl text-bone">Best fit</h3>
            <p className="text-sm text-sand/80">
              Best for guests who want dramatic evening light, a more atmospheric
              experience, and additional time for photography and scenic stops.
            </p>
            <a href="/book/sunset" className={primaryButtonClasses}>
              Book Sunset Tour
            </a>
          </div>
        </div>
      </Section>

      <Section id="small-group" title="Antelope Island Small-Group Wildlife Tour">
        <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
          <div className="space-y-4 text-sm text-sand/80">
            <p>
              Our small-group wildlife tour offers a shared way to experience
              Antelope Island with expert guiding and a calm, intentionally paced
              outing. Group size is kept limited so the experience still feels
              personal rather than crowded.
            </p>
            <p>
              The itinerary mirrors our private tour, but follows a set schedule
              and shared vehicle format.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Approximately 4 hours</li>
              <li>1 adult $160</li>
              <li>2+ adults $140 per person</li>
              <li>Youth with adult $80</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-sand/20 bg-night/50 p-6 space-y-4">
            <h3 className="font-serif text-xl text-bone">Best fit</h3>
            <p className="text-sm text-sand/80">
              A good fit for guests who want professional guiding and a more
              accessible price point, and who are comfortable joining others on
              the tour.
            </p>
            <a href="/book/sunset" className={primaryButtonClasses}>
              Book Sunset Tour
            </a>
          </div>
        </div>
      </Section>

      <Section title="What to Expect">
        <div className="max-w-3xl space-y-4 text-sm text-sand/80">
          <p>
            Tours begin with pickup from your Salt Lake City area hotel and end
            with return drop-off. Most of the outing is spent exploring the
            island by vehicle, with opportunities to step out for closer views
            and occasional short, easy walks when conditions allow.
          </p>
          <p>
            Wildlife is never scripted, which is part of what makes each tour
            special. Every outing is guided with attention to current
            conditions, seasonality, light, and animal activity to make the most
            of your time on the island.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Ready to Book"
        title="Choose your Antelope Island experience"
      >
        <div className="max-w-3xl space-y-4 text-sm text-sand/80">
          <p>
            View availability and book the tour that fits your group best. If
            you want privacy and flexibility, choose one of our premium private
            experiences. If you prefer a shared outing, choose the small-group
            wildlife tour.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <a href="/book/private" className={primaryButtonClasses}>
              Book Private Tour
            </a>
            <a href="/book/sunset" className={primaryButtonClasses}>
              Book Sunset Tour
            </a>
            <a href="/book/small-group" className={primaryButtonClasses}>
              Book Small-Group Tour
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}