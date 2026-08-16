import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Safari Utah",
  description:
    "Contact Safari Utah for Antelope Island wildlife tour questions, custom experiences, larger groups, and special pickup needs.",
  alternates: {
    canonical: "/contact",
  },
};

const buttonClasses =
  "inline-flex items-center justify-center rounded-full border border-sand/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand transition hover:bg-sand hover:text-night";

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Get in touch with Safari Utah"
        subtitle="Reach out with questions, trip ideas, larger groups, special pickup needs, or custom wildlife experiences."
      >
        <div className="grid items-start gap-10 text-sm text-sand/80 md:grid-cols-[1.5fr,1fr]">
          <div>
            <div className="mb-4 rounded-xl border border-sand/30 bg-night/60 px-4 py-4 text-xs text-sand/80">
              <p className="font-semibold text-sand">Ready to book?</p>
              <p className="mt-1">
                Most Antelope Island tours can now be booked online. Use this form for custom dates, larger groups, new small-group tour questions, special pickup needs, or anything you want to clarify before booking.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link href="/tours/antelope-island#choose-your-tour" className={buttonClasses}>
                  Book Antelope Island Tours
                </Link>
                <Link href="/tours/antelope-island#choose-your-tour" className={buttonClasses}>
                  Compare Tour Options
                </Link>
              </div>
            </div>

            <ContactForm />
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="mb-2 font-serif text-lg">Direct Contact</h2>
              <p className="text-sand/80">
                Prefer to reach out directly? You&apos;re welcome to call or email.
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="block text-xs uppercase tracking-[0.2em] text-sand/60">
                  Phone
                </span>
                <a href="tel:+13854490888" className="text-sand/90 hover:text-bone">
                  (385) 449-0888
                </a>
              </p>

              <p>
                <span className="block text-xs uppercase tracking-[0.2em] text-sand/60">
                  Email
                </span>
                <a
                  href="mailto:safariutah@gmail.com"
                  className="text-sand/90 hover:text-bone"
                >
                  safariutah@gmail.com
                </a>
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xs text-sand/60">
                For tour details, visit the {" "}
                <Link href="/tours/antelope-island" className="underline hover:text-bone">
                  Antelope Island Wildlife Tours
                </Link>{" "}
                page.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
