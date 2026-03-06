"use client";
import RezdyModalButton from "@/components/RezdyModalButton";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tours/antelope-island", label: "Flagship Tour" },
  { href: "/about", label: "About" },
  { href: "/custom-experiences", label: "Custom Experiences" },
  { href: "/gallery", label: "Gallery" },
  //{ href: "/faq", label: "FAQ" },
  //{ href: "/policies", label: "Policies" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-night/80 backdrop-blur border-b border-sand/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-serif text-xl tracking-wide">
          Safari Utah
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="uppercase tracking-[0.2em] text-sand/80 hover:text-bone transition"
            >
              {item.label}
            </Link>
          ))}
          <RezdyModalButton label="BOOK NOW" href="https://safariutah.rezdy.com" />
        </nav>

        <button
          className="md:hidden text-sand"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} navItems={navItems} />
    </header>
  );
}
