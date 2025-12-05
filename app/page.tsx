import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars"; // optional – keep or remove as you like
import Section from "@/components/shared/Section";
import ReviewStrip from "@/components/shared/ReviewStrip"; // you can comment out until you add it
import BookingButton from "@/components/shared/BookingButton";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Optional “Value pillars” section – keep if you like the structure */}
      <ValuePillars />

            {/* Our Premium Wildlife Experience / Tours preview */}
      <Section
        eyebrow="Our Premium Wildlife Experience"
        title="Premium Antelope Island Wildlife Tours"
        subtitle="Private premium safaris, with a small-group option for guests who prefer a shared experience."
      >
        <div
          id="tours"
          className="grid gap-8 md:grid-cols-[2fr,2fr] items-start"
        >
          {/* Left: copy + image */}
          <div className="space-y-4 text-sm text-sand/80">
            <p>
              Discover Antelope Island with a private, expertly guided wildlife
              tour inspired by the depth of African safari guiding. Each
              experience is tailored to you, offering time to slow down, observe,
              and appreciate the landscape and the animals that define it.
            </p>

            <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden border border-sand/20 bg-night/40">
              <Image
                src="/images/bison-antelope-island.jpg"
                alt="Bison on Antelope Island viewed during a Safari Utah tour"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: three tour cards (two premium, one small-group) */}
          <div className="grid gap-4 text-sm text-sand/80">
            {/* Premium daytime tour */}
            <div className="border border-sand/20 rounded-2xl p-6 bg-night/50 space-y-3">
              <h3 className="font-serif text-lg">
                Premium Antelope Island Tour
              </h3>
              <p>
                A four-hour private wildlife experience designed around the best
                daylight viewing. From hotel pickup to drop-off, we move through
                Antelope Island&apos;s landscapes at a comfortable, flexible pace,
                stopping for wildlife, photography, and interpretation as
                opportunities arise.
              </p>
              <p className="font-medium">
                Minimum fare: $400 per tour (1–4 guests).
              </p>
              <div className="flex flex-wrap gap-3">
                <BookingButton
                  size="sm"
                  label="Book Your Private Antelope Island Tour"
                />
                <Link
                  href="/tours/antelope-island"
                  className="text-xs uppercase tracking-[0.2em] underline text-sand/70 hover:text-sand"
                >
                  View full tour details
                </Link>
              </div>
            </div>

            {/* Premium Sunset Elite tour */}
            <div className="border border-sand/20 rounded-2xl p-6 bg-night/50 space-y-3">
              <h3 className="font-serif text-lg">
                Premium Antelope Island Elite Sunset Tour
              </h3>
              <p>
                The Sunset Elite version follows the same private wildlife
                itinerary as our daytime tour but extends the experience into the
                island&apos;s most stunning light, timed around sunset for quiet
                views and photography.
              </p>
              <p className="font-medium">
                Minimum fare: $500 per tour (1–4 guests). Fridays and Mondays,
                4.5–5 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <BookingButton
                  size="sm"
                  label="Book Your Sunset Elite Experience"
                />
                <Link
                  href="/tours/antelope-island"
                  className="text-xs uppercase tracking-[0.2em] underline text-sand/70 hover:text-sand"
                >
                  View full tour details
                </Link>
              </div>
            </div>

            {/* Small-group tour (lower tier, but present) */}
            <div className="border border-sand/20 rounded-2xl p-6 bg-night/50 space-y-3">
              <h3 className="font-serif text-lg">
                Antelope Island Small-Group Wildlife Tour
              </h3>
              <p>
                A four-hour small-group wildlife experience for guests who prefer
                a shared tour while still valuing calm, space, and expert guidance.
                Group size is capped to keep the outing intimate as we move
                through Antelope Island&apos;s landscapes, stopping for wildlife,
                photography, and clear ecological interpretation.
              </p>
              <p>
                The itinerary mirrors the private tour but follows a set schedule
                and shared vehicle, offering a more accessible way to experience
                the island with a naturalist guide.
              </p>
              <p className="text-xs text-sand/70">
                Pricing: 1 adult $160 · 2+ adults $140 per person · Youth with
                adult $80
              </p>
              <div className="flex flex-wrap gap-3">
                <BookingButton
                  size="sm"
                  label="Book the Small-Group Tour"
                />
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

      {/* About Safari Utah + About Your Guide */}
      <Section
        eyebrow="About Safari Utah"
        title="African-Inspired Nature Guiding in the American West"
      >
        <div className="space-y-8 text-sm text-sand/80">
          <div className="space-y-3">
            <p>
              Safari Utah brings African-inspired nature guiding to the American West through private, expert-led wildlife experiences. Our focus is to connect people with nature through clear insight, meaningful moments, and a deeper understanding of place.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl">About Your Guide</h3>
            <p>
              Educated in the natural sciences, with ecological field experience and professional FGASA safari guide training, Clayton offers a grounded, holistic approach to interpreting landscapes and wildlife. His goal is to help people understand the natural world more deeply and recognize our connection to it.
            </p>
          </div>
        </div>
        <div>
          <p><Link href="/about" className="text-xs underline text-sand/70 hover:text-sand">
            Learn more about Safari Utah & your guide
          </Link></p>
        </div>
      </Section>

      {/* Custom Experiences – By Request Only */}
      <Section
        eyebrow="Custom Experiences"
        title="Custom Experiences — By Request Only"
      >
        <div className="space-y-4 text-sm text-sand/80">
          <p>
            For guests seeking something tailored, Safari Utah offers a limited number of custom outings. Options include full-day trips to Arches or Canyonlands, wildlife and nature outings in the Wasatch Mountains, and personalized African safari planning. These experiences are curated individually and available by request.
          </p>
          <a
            href="/custom-experiences"
            className="inline-flex rounded-full border border-sand/70 px-5 py-2 text-xs uppercase tracking-[0.2em] hover:bg-sand hover:text-night transition"
          >
            Request a custom experience
          </a>
        </div>
      </Section>

      {/* Reviews – once you’ve added ReviewStrip with real quotes */}
      <ReviewStrip />
    </>
  );
}
