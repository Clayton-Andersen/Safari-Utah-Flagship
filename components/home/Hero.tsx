import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <Image
        src="/images/hero-antelope-island.jpg"
        alt="Antelope Island landscape with wildlife viewing opportunities"
        fill
        priority
        className="object-cover brightness-[0.55]"
      />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-sand/85">
            Private Antelope Island wildlife tours from Salt Lake City
          </p>

          <h1 className="mb-6 max-w-3xl font-serif text-4xl text-bone md:text-6xl">
            Inspired by Africa, Discover the American West
          </h1>

          <p className="mb-8 max-w-xl text-sm text-sand/100 lg:text-base">
            Step into the wild with exclusive, private tours led by an expert
            safari guide. Safari Utah brings African-inspired experience to some
            of the West’s most iconic and beautiful landscapes, connecting you
            with nature through clear insight, intimate wildlife moments, and
            unhurried time in the field.
          </p>

          <div className="flex flex-col gap-4 text-xs sm:flex-row sm:text-sm">
            <a
              href="/book/private"
              className="inline-flex items-center justify-center rounded-full bg-sand px-8 py-4 text-base font-semibold uppercase tracking-[0.2em] text-night transition hover:bg-bone"
            >
              Book your private Antelope Island tour
            </a>

            <Link
              href="#tours"
              className="inline-flex items-center justify-center rounded-full border border-sand/70 px-6 py-3 uppercase tracking-[0.2em] text-sand transition hover:bg-sand hover:text-night"
            >
              Compare Antelope Island tours
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-sand/90">
            <span>Private tours available</span>
            <span>Salt Lake City pickup included</span>
            <span>Expert safari-trained guide</span>
            <span>Small-group option available</span>
          </div>
        </div>
      </div>
    </section>
  );
}