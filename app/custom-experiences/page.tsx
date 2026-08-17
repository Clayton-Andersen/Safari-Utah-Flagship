import Section from "@/components/shared/Section";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Custom Experiences | Safari Utah",
  description:
    "By-request-only custom wildlife and nature experiences in Utah and beyond with Safari Utah.",
};

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night transition hover:bg-bone";

export default function CustomExperiencesPage() {
  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden md:min-h-[72svh]">
        <Image
          src="/images/salt-flats-sunset.jpg"
          alt="Western landscape suitable for custom wildlife and nature outings"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.62]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-night/72 via-night/34 to-night/14" />
        <div className="relative z-10 flex min-h-[70svh] items-start py-16 md:min-h-[72svh] md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-sand">
                Custom Experiences
              </p>
              <h1 className="font-serif text-4xl leading-tight text-bone md:text-6xl">
                Custom experiences by request
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-sand/95 md:text-base md:leading-8">
                For guests seeking something tailored, Safari Utah offers a limited
                number of custom outings in Utah and beyond. Options include
                full-day trips to Arches or Canyonlands, wildlife and nature
                outings in the Wasatch Mountains, and personalized African safari
                planning. These experiences are curated individually and available
                by request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section title="Examples of Custom Outings">
        <div className="grid gap-6 text-sm text-sand/80 md:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-sand/20 bg-night/50">
            <div className="relative h-40">
              <Image
                src="/images/arches.jpg"
                alt="Arches or Canyonlands red rock landscape"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-2 p-6">
              <h2 className="font-serif text-lg text-bone">
                Full-Day Arches or Canyonlands
              </h2>
              <p>
                Explore red rock landscapes with a naturalist guide, focusing on
                geology, ecology, and unhurried time in iconic locations.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl border border-sand/20 bg-night/50">
            <div className="relative h-40">
              <Image
                src="/images/wasatch.jpg"
                alt="Wasatch Mountain landscape for wildlife and nature outings"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-2 p-6">
              <h2 className="font-serif text-lg text-bone">
                Wasatch Wildlife and Nature Outings
              </h2>
              <p>
                Custom-paced days in the Wasatch Mountains, shaped around
                wildlife, forest ecology, and time outside that fits your energy
                and interests.
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-2xl border border-sand/20 bg-night/50">
            <div className="relative h-40">
              <Image
                src="/images/hornbill.jpg"
                alt="Sunlit landscape representing custom safari planning"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-2 p-6">
              <h2 className="font-serif text-lg text-bone">African Safari Planning</h2>
              <p>
                Personalized guidance for planning your own African safari,
                informed by professional safari guide training and experience.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Request a Custom Experience">
        <div className="max-w-3xl space-y-3 rounded-3xl border border-sand/25 bg-sand/[0.07] p-6 text-sm leading-7 text-sand/80 md:p-8">
          <p>
            Every custom experience begins with a conversation. Share your
            interests, timeline, group details, and what kind of day you&apos;re
            hoping for, and we&apos;ll explore what might be possible.
          </p>
          <Link href="/contact?reason=custom" className={buttonClasses}>
            Request a custom experience
          </Link>
        </div>
      </Section>
    </>
  );
}
