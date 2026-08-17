import Image from "next/image";
import Link from "next/link";

const trustItems = [
  "Salt Lake City pickup",
  "Private and small-group tours",
  "Safari-trained naturalist guides",
  "Secure direct booking",
];

export default function Hero() {
  return (
    <section className="relative min-h-[70svh] overflow-hidden md:min-h-[72svh]">
      <Image
        src="/images/hero-antelope-island.jpg"
        alt="Antelope Island landscape with wildlife viewing opportunities"
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-[0.62]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night/72 via-night/34 to-night/14" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-night/46 via-night/18 to-transparent md:w-[58%]" />

      <div className="relative z-10 flex min-h-[70svh] items-start py-16 md:min-h-[72svh] md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-sand/90">
              Private and small-group wildlife tours from Salt Lake City
            </p>

            <h1 className="mb-5 max-w-3xl font-serif text-4xl leading-[1.05] text-bone drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)] sm:text-5xl md:mb-6 md:text-6xl">
              Inspired by Africa, Discover the American West
            </h1>

            <p className="mb-7 max-w-2xl text-sm leading-7 text-sand/95 md:text-base md:leading-8">
              Step into the wild with Antelope Island tours led by safari-trained
              naturalist guides. Safari Utah brings African-inspired guiding to
              Utah&apos;s most remarkable landscapes, with calm pacing, meaningful
              wildlife encounters, and a deeper understanding of place.
            </p>

            <div className="flex flex-col gap-3 text-sm sm:flex-row">
              <Link
                href="#tour-options"
                className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 font-semibold uppercase tracking-[0.16em] text-night shadow-lg transition hover:bg-bone sm:px-8 sm:py-4"
              >
                Choose Your Tour
              </Link>

              <Link
                href="#why-safari-utah"
                className="inline-flex items-center justify-center rounded-full border border-sand/70 px-6 py-3 font-semibold uppercase tracking-[0.16em] text-sand transition hover:bg-sand hover:text-night"
              >
                Why Safari Utah
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 text-xs font-semibold leading-5 text-sand/95 sm:max-w-2xl lg:flex lg:max-w-none lg:flex-nowrap lg:items-center lg:gap-x-0 lg:text-sm">
              {trustItems.map((item, index) => (
                <span key={item} className="whitespace-normal lg:whitespace-nowrap">
                  {item}
                  {index < trustItems.length - 1 && (
                    <span className="hidden px-3 text-sand/45 lg:inline" aria-hidden="true">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
