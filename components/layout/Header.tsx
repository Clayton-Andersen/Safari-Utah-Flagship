"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/tours/antelope-island", label: "Antelope Island Tours" },
  { href: "/custom-experiences", label: "Custom Experiences" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/20 bg-night/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-serif text-xl tracking-wide">
          Safari Utah
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="uppercase tracking-[0.2em] text-sand/80 transition hover:text-bone"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/tours/antelope-island#choose-your-tour"
            className="inline-flex items-center rounded-full bg-sand px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-night transition hover:bg-bone"
          >
            Book Now
          </Link>
        </nav>

        <button
          className="md:hidden text-sand"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        navItems={navItems}
      />
    </header>
  );
}