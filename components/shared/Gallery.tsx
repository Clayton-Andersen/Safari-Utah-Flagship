"use client";

import { useState, useEffect, KeyboardEvent } from "react";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  label?: string;
};

const items: GalleryItem[] = [
  {
    src: "/images/bison-antelope-island.jpg",
    alt: "Bison grazing on Antelope Island during a Safari Utah tour",
    label: "Bison on Antelope Island",
  },
  {
    src: "/images/bison calf.jpg",
    alt: "Bison calf curiously looks up at us",
    label: "Curious Bison Calf",
  },
  {
    src: "/images/yellow blackbird.jpg",
    alt: "Yellow-headed blackbird during birding tour",
    label: "Yellow-headed blackbird during birding tour",
  },
  {
    src: "/images/sunset.jpg",
    alt: "Enjoying a sunset view",
    label: "Buffalo Point Sunset",
  },
  {
    src: "/images/coyote.jpg",
    alt: "Coyote strolling through the shallow lake edges at the Great Salt Lake",
    label: "Coyote strolling shallows on the Great Salt Lake",
  },
  {
    src: "/images/Killdeer.jpg",
    alt: "Killdeer near Antelope Island",
    label: "Killdeer Standing Atop Rock",
  },
  {
    src: "/images/kestrel.jpeg",
    alt: "American kestrel",
    label: "Small but Fierce American Kestrel",
  },
  {
    src: "/images/Great Horned Owl.jpeg",
    alt: "Great horned owl in tree",
    label: "Great Horned Owl",
  },
  {
    src: "/images/bison-landscape.jpeg",
    alt: "Bison grazing on Antelope Island during a Safari Utah tour",
    label: "Bison Roaming the Windy Plains",
  },
  {
    src: "/images/IslandSunset.jpg",
    alt: "One of the many spectacular sunsets from Antelope Island",
    label: "Sunset on Antelope Island",
  },
  {
    src: "/images/avocets.jpeg",
    alt: "American avocets wading in shallow water near Antelope Island",
    label: "American avocets",
  },
  {
    src: "/images/hero-antelope-island.jpg",
    alt: "Wide landscape view of Antelope Island and the Great Salt Lake",
    label: "Antelope Island Landscape",
  },
  {
    src: "/images/arches.jpg",
    alt: "Red rock formations representing custom Arches or Canyonlands outings",
    label: "Red Rock Country",
  },
  {
    src: "/images/wasatch.jpg",
    alt: "Wasatch Mountain landscape suitable for wildlife and nature outings",
    label: "Wasatch Mountains",
  },
  {
    src: "/images/canyonlands.jpg",
    alt: "Sunlit canyon landscape used for custom planning imagery",
    label: "Canyonlands Vista",
  },
  {
    src: "/images/burrowing-owl.jpg",
    alt: "Burrowing owls seen on the island and around Utah",
    label: "Burrowing Owl",
  },
  {
    src: "/images/stansbury-pink-water.jpg",
    alt: "Stansbury Island offers stunning pink salt flats photography",
    label: "Pink Water on the Great Salt Lake",
  },
  {
    src: "/images/wild-horses.jpg",
    alt: "Wild horses in Northern Utah",
    label: "Wild Horses in Utah's West Desert",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % items.length);
  };

  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (activeIndex === null) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  };

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <div className="space-y-6" tabIndex={-1} onKeyDown={handleKeyDown}>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-sand/20 bg-night/40 text-left"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open image: ${item.label ?? item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {item.label && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2 text-left">
                <p className="text-xs font-medium text-bone">
                  {item.label}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 px-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[activeIndex].src}
              alt={items[activeIndex].alt}
              width={1600}
              height={1066}
              className="h-auto w-full rounded-2xl object-contain"
            />
            {items[activeIndex].label && (
              <p className="mt-3 text-center text-sm text-sand/80">
                {items[activeIndex].label}
              </p>
            )}

            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-sand hover:bg-black"
              aria-label="Close gallery image viewer"
            >
              Close
            </button>

            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 top-1/2 rounded-full bg-black/60 px-3 py-2 text-sm text-sand hover:bg-black"
              aria-label="Show previous gallery image"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 top-1/2 rounded-full bg-black/60 px-3 py-2 text-sm text-sand hover:bg-black"
              aria-label="Show next gallery image"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
