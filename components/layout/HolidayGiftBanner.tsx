"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  holidayGiftDismissalCookie,
  isHolidayGiftSeason,
} from "@/lib/seasonal";

type HolidayGiftBannerProps = {
  initiallyVisible: boolean;
};

export default function HolidayGiftBanner({ initiallyVisible }: HolidayGiftBannerProps) {
  const [visible, setVisible] = useState(initiallyVisible);
  const pathname = usePathname();

  useEffect(() => {
    const refresh = () => {
      if (document.visibilityState !== "visible") return;
      const wasDismissed = document.cookie
        .split(";")
        .some((part) => part.trim().startsWith(`${holidayGiftDismissalCookie}=1`));
      setVisible(!wasDismissed && isHolidayGiftSeason());
    };

    refresh();
    document.addEventListener("visibilitychange", refresh);
    const interval = window.setInterval(refresh, 60_000);
    return () => {
      document.removeEventListener("visibilitychange", refresh);
      window.clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const href = pathname === "/" ? "/#tour-options" : "/tours/antelope-island#choose-your-tour";

  const dismiss = () => {
    // No expiration: a functional session cookie, not a persistent campaign preference.
    document.cookie = `${holidayGiftDismissalCookie}=1; Path=/; SameSite=Lax`;
    setVisible(false);
  };

  return (
    <aside aria-label="Seasonal gift experiences" className="relative z-50 border-b border-sand/15 bg-[#142d29] text-bone">
      <div className="mx-auto flex min-h-12 max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-1 px-12 py-2 text-center sm:px-14">
        <p className="font-serif text-sm tracking-wide text-bone sm:text-base">
          Give the Gift of the Wild. Let them choose the date.
        </p>
        <Link
          href={href}
          className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sand underline underline-offset-4 transition hover:text-bone"
        >
          Explore Gift Experiences
        </Link>
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-sand/90 hover:bg-white/10 hover:text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-sand sm:right-5"
          aria-label="Dismiss gift experiences announcement for this session"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
