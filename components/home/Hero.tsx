import BookingButton from "../shared/BookingButton";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <Image
        src="/images/hero-antelope-island.jpg" // 👈 your real hero image
        alt="Antelope Island landscape with wildlife viewing opportunities"
        fill
        priority
        className="object-cover brightness-[0.55]"
      />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-bone max-w-3xl mb-6">
            Inspired by Africa, Discover the American West
          </h1>

          <p className="max-w-xl text-sm lg:text-base text-sand/100 mb-8">
            Step into the wild with exclusive, private tours led by an expert safari guide. Safari Utah brings African-inspired experience to some of the West’s most iconic and beautiful landscapes, connecting you with nature through clear insight, intimate wildlife moments, and unhurried time in the field.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-xs sm:text-sm">
            <BookingButton
              size="lg"
              label="Book your private Antelope Island tour"
            />
            <Link
              href="#tours"
              className="inline-flex items-center justify-center rounded-full border border-sand/70 px-6 py-3 uppercase tracking-[0.2em] text-sand hover:bg-sand hover:text-night transition"
            >
              Explore all tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
