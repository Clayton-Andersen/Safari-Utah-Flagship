import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars";
import Section from "@/components/shared/Section";
import ReviewStrip from "@/components/shared/ReviewStrip";

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-night transition hover:bg-bone";

const badgeClasses =
  "inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand";

export default function HomePage() {
  return (
    <>
      <Hero />

      <ValuePillars />

      <Section
        eyebrow="Antelope Island Tours"
        title="Choose the experience that fits your style"
        subtitle="Private tours for guests who want exclusivity and flexibility, plus a small-group option for those who prefer a shared experience."
      >
        <div
          id="tours"
          className="grid gap-8 md:grid-cols-[2fr,2fr] items-start"
        >
          <div className="space-y-4 text-sm leading-7 text-sand/85">
            <p>
              Discover Antelope Island through immersive, expert-guided wildlife
              experiences inspired by the depth of African safari guiding.
              Choose between fully private premium tours or a calm, capped
              small-group option. Each format is designed to help you connect
              with the island’s wildlife and landscapes in a thoughtful,
              intentional way.
            </p>
            <p>
              Whether you prefer complete privacy or a shared outing, each tour
              offers time to slow down, observe, and gain a clearer
              understanding of the island’s wildlife, ecology, and seasonal
              rhythms.
            </p>

            <div className="relative h-56 overflow-hidden rounded-2xl border border-sand/20 bg-night/40 md:h-72">
              <Image
                src="/images/bison-antelope-island.jpg"
                alt="Bison on Antelope Island viewed during a Safari Utah tour"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-56 overflow-hidden rounded-2xl border border-sand/20 bg-night/40 md:h-72">
              <Image
                src="/images/island-sunset.jpg"
                alt="Sunset over the Great Salt Lake from Antelope Island"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 text-sm text-sand/85">
            <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/50 p-6">
              <span className={badgeClasses}>Private Tour</span>

              <h3 className="font-serif text-lg text-bone">
                Premium Antelope Island Tour
              </h3>

              <p className="leading-7">
                A four-hour private wildlife experience designed around the best
                daylight viewing, with a flexible pace for wildlife,
                photography, and interpretation throughout the outing.
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
                  Book Your Private Tour
                </a>
                <Link
                  href="/tours/antelope-island"
                  className="text-xs uppercase tracking-[0.2em] text-sand/75 underline hover:text-sand"
                >
                  View full details
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/50 p-6">
              <span className={badgeClasses}>Private Sunset Tour</span>

              <h3 className="font-serif text-lg text-bone">
                Premium Antelope Island Elite Sunset Tour
              </h3>

              <p className="leading-7">
                A longer private wildlife experience timed for the island’s
                most beautiful evening light, with extra atmosphere and strong
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
                  Book Your Sunset Tour
                </a>
                <Link
                  href="/tours/antelope-island"
                  className="text-xs uppercase tracking-[0.2em] text-sand/75 underline hover:text-sand"
                >
                  View full details
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/50 p-6">
              <span className={badgeClasses}>Small-Group Tour</span>

              <h3 className="font-serif text-lg text-bone">
                Antelope Island Small-Group Wildlife Tour
              </h3>

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
                  Book the Small-Group Tour
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

      <Section
        eyebrow="About Safari Utah"
        title="African-Inspired Nature Guiding in the American West"
      >
        <div className="space-y-8 text-sm leading-7 text-sand/85">
          <div className="space-y-3">
            <p>
              Safari Utah brings African-inspired nature guiding to the American
              West through private, expert-led wildlife experiences. Our focus
              is to connect people with nature through clear insight,
              meaningful moments, and a deeper understanding of place.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl text-bone">About Your Guide</h3>
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
              className="text-xs underline text-sand/75 hover:text-sand"
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
        <div className="space-y-4 text-sm leading-7 text-sand/85">
          <p>
            For guests seeking something tailored, Safari Utah offers a limited
            number of custom outings. Options include full-day trips to Arches
            or Canyonlands, wildlife and nature outings in the Wasatch
            Mountains, and personalized African safari planning. These
            experiences are curated individually and available by request.
          </p>
          <a
            href="/custom-experiences"
            className="inline-flex rounded-full border border-sand/70 px-5 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-sand hover:text-night"
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