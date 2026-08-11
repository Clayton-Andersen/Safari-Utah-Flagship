import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] overflow-hidden md:h-[80vh]">
      <Image
        src="/images/hero-antelope-island.jpg"
        alt="Antelope Island landscape with wildlife viewing opportunities"
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[0.55]"
      />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-sand/85">
            Private and small-group wildlife tours from Salt Lake City
          </p>

          <h1 className="mb-6 max-w-3xl font-serif text-4xl text-bone md:text-6xl">
            Inspired by Africa, Discover the American West
          </h1>

          <p className="mb-8 max-w-xl text-sm text-sand/100 lg:text-base">
            Step into the wild with private and small-group Antelope Island tours led by safari-trained naturalist guides. Safari Utah brings African-inspired guiding to Utah&apos;s most remarkable landscapes, with calm pacing, meaningful wildlife encounters, and a deeper understanding of place.
          </p>

          <div className="flex flex-col gap-4 text-xs sm:flex-row sm:text-sm">
            <a
              href="#book-antelope-island"
              className="inline-flex items-center justify-center rounded-full bg-sand px-8 py-4 text-base font-semibold uppercase tracking-[0.2em] text-night transition hover:bg-bone"
            >
              Choose & Book Your Tour
            </a>

            <Link
              href="/tours/antelope-island"
              className="inline-flex items-center justify-center rounded-full border border-sand/70 px-6 py-3 uppercase tracking-[0.2em] text-sand transition hover:bg-sand hover:text-night"
            >
              View Full Tour Details
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-sand/90">
            <span>Private and small-group options</span>
            <span>Salt Lake City pickup included</span>
            <span>Safari-trained naturalist guides</span>
            <span>Calm, small-scale experiences</span>
          </div>
        </div>
      </div>
    </section>
  );
}
