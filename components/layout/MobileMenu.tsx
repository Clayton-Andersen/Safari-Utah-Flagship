"use client";

import Link from "next/link";
import BookingButton from "../shared/BookingButton";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

export default function MobileMenu({ open, onClose, navItems }: MobileMenuProps) {
  if (!open) return null;

  return (
    <nav className="md:hidden border-t border-sand/20 bg-night">
      <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3 text-sm">
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
        <BookingButton size="md" />
      </div>
    </nav>
  );
}
