import Section from "@/components/shared/Section";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Custom Experiences | Safari Utah",
  description:
    "By-request-only custom wildlife and nature experiences in Utah and beyond.",
};

export default function CustomExperiencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <Image
          src="/images/salt-flats-sunset.jpg" // you can swap this to something more 'custom'
          alt="Western landscape suitable for custom wildlife and nature outings"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto max-w-6xl px-4 pb-10 space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-sand/80">
              Custom Experiences
            </p>
            <h1 className="font-serif text-3xl md:text-5xl text-bone max-w-3xl">
              Custom Experiences — By Request Only
            </h1>
            <p className="max-w-xl text-sm md:text-base text-sand/80">
              For guests seeking something tailored, Safari Utah offers a limited
              number of custom outings in Utah and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <div className="space-y-4 text-sm text-sand/80 max-w-3xl">
          <p>
            For guests seeking something tailored, Safari Utah offers a limited
            number of custom outings. Options include full-day trips to Arches
            or Canyonlands, wildlife and nature outings in the Wasatch
            Mountains, and personalized African safari planning. These
            experiences are curated individually and available by request.
          </p>
        </div>
      </Section>

      {/* Example Experiences with images */}
      <Section title="Examples of Custom Outings">
        <div className="grid gap-6 md:grid-cols-3 text-sm text-sand/80">
          {/* Arches / Canyonlands */}
          <div className="border border-sand/20 rounded-2xl bg-night/50 overflow-hidden flex flex-col">
            <div className="relative h-40">
              <Image
                src="/images/arches.jpg"
                alt="Arches or Canyonlands red rock landscape"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2 flex-1">
              <h3 className="font-serif text-lg">
                Full-Day Arches or Canyonlands
              </h3>
              <p>
                Explore red rock landscapes with a naturalist guide, focusing on
                geology, ecology, and unhurried time in iconic locations.
              </p>
            </div>
          </div>

          {/* Wasatch */}
          <div className="border border-sand/20 rounded-2xl bg-night/50 overflow-hidden flex flex-col">
            <div className="relative h-40">
              <Image
                src="/images/wasatch.jpg"
                alt="Wasatch Mountain landscape for wildlife and nature outings"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2 flex-1">
              <h3 className="font-serif text-lg">
                Wasatch Wildlife & Nature Outings
              </h3>
              <p>
                Custom-paced days in the Wasatch Mountains, shaped around
                wildlife, forest ecology, and time outside that fits your energy
                and interests.
              </p>
            </div>
          </div>

          {/* African Safari Planning */}
          <div className="border border-sand/20 rounded-2xl bg-night/50 overflow-hidden flex flex-col">
            <div className="relative h-40">
              <Image
                src="/images/hornbill.jpg" // you can swap this for a more Africa-leaning image later
                alt="Sunlit landscape representing custom safari planning"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-2 flex-1">
              <h3 className="font-serif text-lg">African Safari Planning</h3>
              <p>
                Personalized guidance for planning your own African safari,
                informed by professional safari guide training and experience.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section title="Request a Custom Experience">
        <div className="space-y-3 text-sm text-sand/80 max-w-3xl">
          <p>
            Every custom experience begins with a conversation. Share your
            interests, timeline, and group details, and we&apos;ll explore what
            might be possible.
          </p>
          <p>
            Use the contact form below or on the Contact page to start the
            process.
          </p>
          <Link
            href="/contact?reason=custom"
            className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-night transition hover:bg-bone"
          >
            Request a custom experience
          </Link>
        </div>
      </Section>
    </>
  );
}
