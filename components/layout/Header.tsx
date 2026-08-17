"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/tours/antelope-island", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/custom-experiences", label: "Custom" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/20 bg-night/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-serif text-xl tracking-wide text-bone">
          Safari Utah
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="uppercase tracking-[0.18em] text-sand/80 transition hover:text-bone"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/tours/antelope-island#choose-your-tour"
            className="inline-flex items-center rounded-full bg-sand px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-night transition hover:bg-bone"
          >
            Book Direct
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-sand/30 text-sand md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span aria-hidden="true">☰</span>
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
