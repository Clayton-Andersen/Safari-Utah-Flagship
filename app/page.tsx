import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars";
import Section from "@/components/shared/Section";
import ReviewStrip from "@/components/shared/ReviewStrip";

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-night transition hover:bg-bone";

const outlinedHeadingClasses =
  "inline-block rounded-xl border border-sand/20 px-4 py-3 font-serif text-lg text-bone";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Antelope Island Tours"
        title="Choose Your Antelope Island Tour"
        subtitle="3 ways to experience Antelope Island: a private day tour, a private sunset tour, or a small-group outing."
      >
        <div
          id="tours"
          className="grid items-start gap-8 md:grid-cols-[2fr,2fr]"
        >
          <div className="space-y-4 text-sm leading-7 text-sand/85">
            <p>
              Safari Utah offers wildlife-focused Antelope Island tours shaped by
              African safari training, ecological field experience, and a calmer
              pace in the field. Choose the format that fits your style of travel,
              whether that means a fully private outing or a shared small-group
              experience.
            </p>
            <p>
              Every tour is designed to help you slow down, see more, and better
              understand the island’s wildlife, landscapes, and seasonal rhythms.
            </p>

            <div className="relative h-56 overflow-hidden rounded-2xl border border-sand/20 bg-night/40 md:h-80">
              <Image
                src="/images/bison-antelope-island.jpg"
                alt="Bison on Antelope Island viewed during a Safari Utah tour"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-56 overflow-hidden rounded-2xl border border-sand/20 bg-night/40 md:h-80">
              <Image
                src="/images/island-sunset.jpg"
                alt="Sunset over the Great Salt Lake from Antelope Island"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-2xl border border-sand/20 bg-night/40 md:h-80">
              <Image
                src="/images/meadowlark niiiiice.jpg"
                alt="Western meadowlard atop a small shrub"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 text-sm text-sand/85">
            <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/50 p-6">
              <div className="space-y-3 border-b border-sand/15 pb-4">
                <h3 className={outlinedHeadingClasses}>Private Day Tour</h3>
                
              </div>

              <p className="leading-7">
                A private daytime wildlife tour designed around the best daylight
                viewing, with a flexible pace for wildlife, photography, and
                natural history interpretation.
              </p>

              <ul className="list-disc space-y-1 pl-5 text-sand/85">
                <li>Private experience for your group only</li>
                <li>Approximately 4 hours</li>
                <li>Salt Lake City pickup and drop-off included</li>
                <li>Best for flexibility and privacy</li>
              </ul>

              <p className="font-medium text-bone">
                From $400 per tour (1–4 guests)
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="/book/private" className={buttonClasses}>
                  Book Private Day Tour
                </a>
                <Link
                  href="/tours/antelope-island"
                  className="text-xs uppercase tracking-[0.2em] text-sand/75 underline hover:text-sand"
                >
                  View full tour details
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/50 p-6">
              <div className="space-y-3 border-b border-sand/15 pb-4">
                <h3 className={outlinedHeadingClasses}>Private Sunset Tour</h3>
                
              </div>

              <p className="leading-7">
                A longer private wildlife tour timed for the island’s most
                beautiful evening light, with extra atmosphere and strong
                photography opportunities.
              </p>

              <ul className="list-disc space-y-1 pl-5 text-sand/85">
                <li>Private experience for your group only</li>
                <li>Approximately 4.5 to 5 hours</li>
                <li>Offered Fridays and Mondays</li>
                <li>Best for sunset light and photography</li>
              </ul>

              <p className="font-medium text-bone">
                From $500 per tour (1–4 guests)
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="/book/sunset" className={buttonClasses}>
                  Book Sunset Tour
                </a>
                <Link
                  href="/tours/antelope-island"
                  className="text-xs uppercase tracking-[0.2em] text-sand/75 underline hover:text-sand"
                >
                  View full tour details
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/50 p-6">
              <div className="space-y-3 border-b border-sand/15 pb-4">
                <h3 className={outlinedHeadingClasses}>Small-Group Tour</h3>
                <p className="text-sm text-sand/75">
                  Antelope Island Small-Group Wildlife Tour
                </p>
              </div>

              <p className="leading-7">
                A shared wildlife experience for guests who want calm pacing,
                expert guiding, and a more accessible price point without losing
                the feel of a personal outing.
              </p>

              <ul className="list-disc space-y-1 pl-5 text-sand/85">
                <li>Shared small-group experience</li>
                <li>Approximately 4 hours</li>
                <li>Lower entry price</li>
                <li>Best for guests comfortable joining others</li>
              </ul>

              <p className="text-bone">
                <span className="font-medium">Pricing:</span> 1 adult $160 · 2+
                adults $140 per person · Youth with adult $80
              </p>

              <div className="flex flex-wrap gap-3">
                <a href="/book/small-group" className={buttonClasses}>
                  Book Small-Group Tour
                </a>
                <Link
                  href="/tours/antelope-island#small-group"
                  className="text-xs uppercase tracking-[0.2em] text-sand/75 underline hover:text-sand"
                >
                  View small-group details
                </Link>
              </div>
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
            For guests seeking something more tailored, Safari Utah offers a
            limited number of custom outings. Options include full-day trips to
            Arches or Canyonlands, wildlife and nature outings in the Wasatch
            Mountains, and personalized African safari planning.
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