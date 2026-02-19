import Section from "@/components/shared/Section";
import BookingButton from "@/components/shared/BookingButton";
import Image from "next/image";

export const metadata = {
  title: "Premium Antelope Island Wildlife Tour | Safari Utah",
  description:
    "Premium private Antelope Island wildlife tours, with a small-group option, inspired by the depth of African safari guiding.",
};

export default function AntelopeIslandTourPage() {
  return (
    <>
      {/* Visual Hero */}
      <section className="relative h-[50vh] md:h-[80vh] overflow-hidden">
        <Image
          src="/images/avocets.jpeg" // 👈 your strong wildlife/tour image
          alt="American avocets wading in shallow water near Antelope Island"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto max-w-6xl px-4 pb-10 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-sand/80">
              Premium Antelope Island Wildlife Tour
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-bone max-w-3xl">
              A private, expert-guided wildlife experience.
            </h1>
            <p className="max-w-xl text-sm md:text-base text-sand/80">
              Explore Antelope Island’s sweeping landscapes, diverse ecosystems, and remarkable wildlife with an experienced safari-trained guide.
            </p>
            <BookingButton label="Book your private Antelope Island tour" size="md" />
          </div>
        </div>
      </section>

      {/* Premium Tour Overview */}
      <Section title="Premium Tour Overview">
        <div className="space-y-4 text-sm text-sand/80 max-w-3xl">
          <p>
            This four-hour private wildlife experience (from pickup to drop-off) explores the sweeping landscapes and diverse ecosystems of Antelope Island. Expect a scenic drive with views of the Great Salt Lake and Wasatch Mountains, along with stops for wildlife sightings. We’ll watch for bison, pronghorn, mule deer, and seasonal birdlife, with opportunities for photography and ecological interpretation throughout.
          </p>
          <p>
            Every premium tour is exclusive to your group and shaped by real-time conditions, allowing an unhurried pace and time to focus on the moments that matter most to you.
          </p>
        </div>
      </Section>

      {/* Key Highlights */}
      <Section title="Key Highlights">
        <ul className="space-y-2 text-sm text-sand/80 list-disc pl-5 max-w-3xl">
          <li>
            Wildlife viewing: bison, pronghorn, mule deer, coyotes, and seasonal birdlife
          </li>
          <li>Scenic landscapes: panoramic lake and mountain views</li>
          <li>Photography support</li>
          <li>Ecological and geological insight</li>
          <li>Flexible stops with optional short, easy walks</li>
        </ul>
      </Section>

      {/* Why the Premium Tours Are Different */}
      <Section title="Why the Premium Tours Are Different">
        <div className="space-y-4 text-sm text-sand/80 max-w-3xl">
          <p>
            The premium tours are fully private, giving you space, calm, and the freedom to focus on what interests you most. The pace is flexible, adapting to wildlife, lighting, and the natural rhythm of the day rather than a fixed script. Guided by a professionally trained safari guide with deep knowledge of the region, every moment gains context and clarity.
          </p>
          <p>
            They are intentional, personal ways to explore Antelope Island—designed for guests who value depth, presence, and expert interpretation.
          </p>
        </div>
      </Section>

      {/* Premium Antelope Island Tour */}
      <Section title="Premium Antelope Island Tour">
        <div className="space-y-4 text-sm text-sand/80 max-w-3xl">
          <p>
            A four-hour private wildlife experience designed around the best daylight viewing. From hotel pickup to drop-off, we move through Antelope Island’s landscapes at a comfortable, flexible pace, stopping for wildlife, photography, and interpretation as opportunities arise.
          </p>
          <p className="font-medium">
            Minimum fare: $400 per tour (1–4 guests).
          </p>

          

<script type="text/javascript" src="https://safariutah.rezdy.com/pluginJs?script=modal"></script>

<style>
#button-booking {
  display: inline-block;
  background-color: #d7c6a3; /* warm beige/tan */
  color: #1a1a1a; /* dark text */
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 14px 32px;
  border-radius: 999px; /* pill shape */
  text-decoration: none;
  text-align: center;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

#button-booking:hover {
  background-color: #cbb896; /* slightly darker on hover */
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}
</style>

<a id="button-booking"
   class="button-booking rezdy rezdy-modal"
   href="https://safariutah.rezdy.com">
   BOOK YOUR PRIVATE ANTELOPE ISLAND TOUR
</a>
          
          


          
          <BookingButton label="Book your private Antelope Island tour" />
        </div>
      </Section>

      {/* Premium Antelope Island Elite Sunset Tour */}
      <Section title="Premium Antelope Island Elite Sunset Tour">
        <div className="space-y-4 text-sm text-sand/80 max-w-3xl">
          <p>
            The Sunset Elite version follows the same private wildlife itinerary as our daytime tour but extends the experience into the island’s most stunning light. We time the outing around sunset, creating space for exceptional photography and quiet moments as the sun drops over the Great Salt Lake. A final stop at a curated viewpoint gives the tour an unhurried, memorable finish.
          </p>
          <p>
            This 4.5–5 hour experience is offered on Fridays and Mondays.
          </p>
          <p className="font-medium">
            Minimum fare: $500 per tour (1–4 guests).
          </p>
          <BookingButton label="Book your Sunset Elite experience" />
        </div>
      </Section>
      {/* Small-group shared tour */}
      <Section
        id="small-group"
        title="Antelope Island Small-Group Wildlife Tour"
      >
        <div className="space-y-4 text-sm text-sand/80 max-w-3xl">
          <p>
            A four-hour small-group wildlife experience for guests who prefer a
            shared tour while still valuing calm, space, and expert guidance.
            Group size is capped to keep the outing intimate as we move through
            Antelope Island&apos;s landscapes, stopping for wildlife,
            photography, and clear ecological interpretation.
          </p>
          <p>
            The itinerary mirrors our private tour but follows a set schedule and
            shared vehicle, offering a more accessible way to experience the
            island with a naturalist guide.
          </p>
          <p className="font-medium">
            Pricing: 1 adult $160 · 2+ adults $140 per person · Youth with
            adult $80.
          </p>
          <BookingButton label="Book the Small-Group Tour" />
        </div>
      </Section>

      {/* What to Expect */}
      <Section title="What to Expect">
        <div className="space-y-4 text-sm text-sand/80 max-w-3xl">
          <p>
            Your tour begins with pickup from your Salt Lake City area hotel or the airport and ends with return drop-off. Most of the outing is spent exploring the island by vehicle, with opportunities to step out for closer views or short, easy walks when conditions allow. Weather on the island is generally similar to Salt Lake City, so comfortable clothing and shoes are recommended.
          </p>
          <p>
            Every tour adapts to real-time conditions to make the most of your time on the island.
          </p>
        </div>
      </Section>

      {/* Final booking section */}
      <Section title="Book Your Experience">
        <div className="grid gap-6 md:grid-cols-2 text-sm text-sand/80 max-w-4xl">
          <div className="space-y-2 border border-sand/20 rounded-2xl p-6 bg-night/60">
            <span className="inline-block px-2 py-1 text-[10px] uppercase tracking-[0.2em] bg-night text-sand border border-sand/30 rounded-md">
              Private Tour
            </span>
            <h3 className="font-serif text-lg">Premium Antelope Island Tour</h3>
            <p>
              A four-hour private wildlife and island experience designed around the best
              daylight viewing.
            </p>
            <BookingButton label="Book your private Antelope Island tour" />
          </div>
          <div className="space-y-2 border border-sand/20 rounded-2xl p-6 bg-night/60">
            <span className="inline-block px-2 py-1 text-[10px] uppercase tracking-[0.2em] bg-night text-sand border border-sand/30 rounded-md">
              Private Tour
            </span>
            <h3 className="font-serif text-lg">
              Premium Antelope Island Elite Sunset Tour
            </h3>
            <p>
              A 4.5–5 hour private sunset experience offered Fridays and Mondays.
            </p>
            <BookingButton label="Book your Sunset Elite experience" />
          </div>
          <div className="border border-sand/20 rounded-2xl p-6 bg-night/60 space-y-3">
            <span className="inline-block px-2 py-1 text-[10px] uppercase tracking-[0.2em] bg-night text-sand border border-sand/30 rounded-md">
              Small Group Tour
            </span>

            <h3 className="font-serif text-lg">
              Antelope Island Small-Group Wildlife Tour
            </h3>

            <p>
              A four-hour shared wildlife and island experience.
            </p>

            <div>
              <BookingButton size="sm" label="Book your Small-Group Tour" />
            </div>
          </div>

        </div>
      </Section>
    </>
  );
}
