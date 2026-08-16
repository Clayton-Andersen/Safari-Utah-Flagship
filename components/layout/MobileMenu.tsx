"use client";

import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

export default function MobileMenu({
  open,
  onClose,
  navItems,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <nav className="border-t border-sand/20 bg-night md:hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="uppercase tracking-[0.2em] text-sand/80"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/tours/antelope-island#choose-your-tour"
          className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-night transition hover:bg-bone"
          onClick={onClose}
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
