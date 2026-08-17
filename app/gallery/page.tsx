import Link from "next/link";
import Section from "@/components/shared/Section";
import Gallery from "@/components/shared/Gallery";

export const metadata = {
  title: "Gallery | Safari Utah",
  description:
    "A visual look at Safari Utah wildlife, landscapes, and field experiences on Antelope Island and around Utah.",
};

export default function GalleryPage() {
  return (
    <>
      <Section
        eyebrow="Gallery"
        title="Scenes from Safari Utah"
        subtitle="A glimpse of the wildlife, landscapes, and quiet moments that define our time in the field."
        headingLevel="h1"
      >
        <Gallery />
      </Section>

      <Section
        eyebrow="See it in the field"
        title="Ready to experience Antelope Island with a guide?"
      >
        <div className="rounded-3xl border border-sand/25 bg-sand/[0.07] p-6 text-sm leading-7 text-sand/85 md:p-8">
          <p className="max-w-3xl">
            The gallery gives you a sense of the island, but the best moments are
            shaped by the day&apos;s light, wildlife movement, and time spent watching
            carefully with a naturalist guide.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tours/antelope-island#choose-your-tour"
              className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night transition hover:bg-bone"
            >
              Compare and Book Tours
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-sand/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-sand transition hover:bg-sand hover:text-night"
            >
              Meet Your Guides
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
