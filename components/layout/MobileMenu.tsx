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
    <nav
      id="mobile-menu"
      className="border-t border-sand/20 bg-night lg:hidden"
      aria-label="Mobile navigation"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-2 py-3 uppercase tracking-[0.18em] text-sand/85 hover:bg-sand/10 hover:text-bone"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/tours/antelope-island#choose-your-tour"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night transition hover:bg-bone"
          onClick={onClose}
        >
          Book Direct
        </Link>
      </div>
    </nav>
  );
}
