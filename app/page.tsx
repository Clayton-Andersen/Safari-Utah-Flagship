import Hero from "@/components/home/Hero";
import ValuePillars from "@/components/home/ValuePillars"; // optional – keep or remove as you like
import Section from "@/components/shared/Section";
import ReviewStrip from "@/components/shared/ReviewStrip"; // you can comment out until you add it

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
        subtitle="Discover Antelope Island with a private, expertly guided wildlife tour inspired by the depth of African safari guiding. Each experience is tailored to you, offering time to slow down, observe, and appreciate the landscape and the animals that define it.
      "
      >
        <div
          id="tours"
          className="grid gap-8 md:grid-cols-[2fr,1fr] items-start"
        >
          <div className="space-y-4 text-sm text-sand/80">
            <p>
            </p>
          </div>

          <div className="space-y-3 text-sm text-sand/80">
            <div>
              <p className="font-serif text-lg">
                Premium Antelope Island Tour
              </p>
            </div>
            <div>
              <p className="font-serif text-lg">
                Premium Antelope Island Elite Sunset Tour
              </p>
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
