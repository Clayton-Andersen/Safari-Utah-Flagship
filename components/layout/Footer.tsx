import Link from "next/link";

const footerNav = [
  { href: "/tours/antelope-island", label: "Flagship Tour" },
  { href: "/about", label: "About" },
  { href: "/custom-experiences", label: "Custom Experiences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/policies", label: "Policies" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sand/20 bg-night">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-[2fr,1.5fr] text-sm text-sand/80">
        {/* Brand / tagline */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-sand/60">
            Safari Utah
          </p>
          <p>
            Quiet, intimate wildlife encounters. Based in Utah, inspired by
            Africa. Private, expert-guided safaris with an emphasis on ecology,
            photography, and stillness.
          </p>
          <div className="space-y-1 text-xs text-sand/60">
            <p>© {new Date().getFullYear()} Safari Utah. All rights reserved.</p>
          </div>
        </div>

        {/* Nav + contact info */}
        <div className="space-y-4 md:text-right">
          <nav className="flex flex-wrap gap-3 md:justify-end text-xs uppercase tracking-[0.2em] text-sand/70">
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
              <a
                href="mailto:safariutah@gmail.com"
                className="hover:text-bone"
              >
                safariutah@gmail.com
              </a>
            </p>
            <p>
              Prefer a form?{" "}
              <Link href="/contact" className="underline hover:text-bone">
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
