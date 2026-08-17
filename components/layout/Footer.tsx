import Link from "next/link";

const footerNav = [
  { href: "/tours/antelope-island", label: "Antelope Island Tours" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/custom-experiences", label: "Custom Experiences" },
  { href: "/policies", label: "Policies" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand/20 bg-night">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 text-sm text-sand/80 md:grid-cols-[1.1fr,1.4fr]">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="font-serif text-2xl text-bone">Safari Utah</p>
            <p className="max-w-sm text-sm leading-7 text-sand/75">
              African-inspired nature guiding in the American West, with private
              and small-group Antelope Island wildlife tours from Salt Lake City.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/safariutah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Safari Utah on Instagram"
              className="rounded-full border border-sand/20 p-2 text-sand transition hover:bg-sand hover:text-night"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M7.75 2h8.5A5.756 5.756 0 0 1 22 7.75v8.5A5.756 5.756 0 0 1 16.25 22h-8.5A5.756 5.756 0 0 1 2 16.25v-8.5A5.756 5.756 0 0 1 7.75 2Zm0 1.5A4.254 4.254 0 0 0 3.5 7.75v8.5A4.254 4.254 0 0 0 7.75 20.5h8.5a4.254 4.254 0 0 0 4.25-4.25v-8.5a4.254 4.254 0 0 0-4.25-4.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Zm5.25-2.125a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/safariutah/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Safari Utah on Facebook"
              className="rounded-full border border-sand/20 p-2 text-sand transition hover:bg-sand hover:text-night"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M13.5 22v-8.25h2.77l.42-3.22H13.5V8.47c0-.93.26-1.56 1.59-1.56h1.7V4.03c-.29-.04-1.27-.12-2.42-.12-2.39 0-4.03 1.46-4.03 4.13v2.49H7.63v3.22h2.71V22h3.16Z" />
              </svg>
            </a>
          </div>

          <p className="text-xs text-sand/55">
            © {new Date().getFullYear()} Safari Utah. All rights reserved.
          </p>
        </div>

        <div className="space-y-6 md:text-right">
          <div className="rounded-2xl border border-sand/20 bg-sand/[0.06] p-5 md:ml-auto md:max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sand/70">
              Ready to see Utah differently?
            </p>
            <p className="mt-2 text-sm leading-7 text-sand/80">
              Compare private and small-group Antelope Island tours, then book
              directly with the local guides who operate the experience.
            </p>
            <Link
              href="/tours/antelope-island#choose-your-tour"
              className="mt-4 inline-flex rounded-full bg-sand px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-night transition hover:bg-bone"
            >
              Book Direct
            </Link>
          </div>

          <nav
            className="flex flex-wrap gap-3 md:justify-end text-xs uppercase tracking-[0.18em] text-sand/70"
            aria-label="Footer navigation"
          >
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-bone transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-2 text-xs text-sand/70">
            <p>
              Phone:{" "}
              <a href="tel:+13854490888" className="hover:text-bone">
                (385) 449-0888
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:safariutah@gmail.com" className="hover:text-bone">
                safariutah@gmail.com
              </a>
            </p>
            <p>
              Prefer a form?{" "}
              <Link href="/contact" className="underline underline-offset-4 hover:text-bone">
                Visit the contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
