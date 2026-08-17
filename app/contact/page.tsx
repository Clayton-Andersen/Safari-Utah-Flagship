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
  "inline-flex items-center justify-center rounded-full bg-sand px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-night transition hover:bg-bone";

const secondaryButtonClasses =
  "inline-flex items-center justify-center rounded-full border border-sand/60 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand transition hover:bg-sand hover:text-night";

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Get in touch with Safari Utah"
        subtitle="Questions, custom outings, larger groups, special pickup needs, and anything you want to clarify before booking."
      >
        <div className="grid items-start gap-10 text-sm text-sand/80 md:grid-cols-[1.5fr,1fr]">
          <div>
            <div className="mb-5 rounded-2xl border border-sand/30 bg-sand/[0.06] px-5 py-5 text-sm leading-7 text-sand/80">
              <p className="font-semibold text-bone">Ready to book online?</p>
              <p className="mt-1">
                Most Antelope Island tours can be booked directly online. Use
                the form for custom dates, larger groups, special pickup needs,
                accessibility questions, or anything that would help you book
                with confidence.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/tours/antelope-island#choose-your-tour" className={buttonClasses}>
                  Compare and Book Tours
                </Link>
                <Link href="/faq" className={secondaryButtonClasses}>
                  Read FAQ
                </Link>
              </div>
            </div>

            <ContactForm />
          </div>

          <div className="space-y-6 rounded-2xl border border-sand/20 bg-night/45 p-6">
            <div>
              <h2 className="mb-2 font-serif text-xl text-bone">Direct Contact</h2>
              <p className="text-sand/80">
                Prefer to reach out directly? You&apos;re welcome to call or email.
              </p>
            </div>

            <div className="space-y-4">
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

            <div className="border-t border-sand/15 pt-5">
              <p className="text-xs leading-6 text-sand/65">
                For tour details, pricing, duration, and secure direct booking,
                start with the{" "}
                <Link href="/tours/antelope-island" className="underline underline-offset-4 hover:text-bone">
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
