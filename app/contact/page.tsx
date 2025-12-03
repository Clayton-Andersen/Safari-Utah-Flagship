import Section from "@/components/shared/Section";
import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Contact | Safari Utah",
  description:
    "Contact Safari Utah to inquire about private wildlife tours and custom experiences.",
};

export default function ContactPage() {
  return (
    <>
      <Section
        eyebrow="Contact"
        title="Get in touch with Safari Utah"
        subtitle="Reach out with questions, trip ideas, or to discuss private wildlife experiences."
      >
        <div className="grid gap-10 md:grid-cols-[1.5fr,1fr] items-start text-sm text-sand/80">
          {/* Form */}
          <div>
            <ContactForm />
          </div>

          {/* Direct contact info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-lg mb-2">Direct Contact</h3>
              <p className="text-sand/80">
                Prefer to reach out directly? You&apos;re welcome to call or
                email.
              </p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="block text-xs uppercase tracking-[0.2em] text-sand/60">
                  Phone
                </span>
                <a
                  href="tel:+13854490888"
                  className="text-sand/90 hover:text-bone"
                >
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
                For tour details, you can also visit the{" "}
                <Link
                  href="/tours/antelope-island"
                  className="underline hover:text-bone"
                >
                  Premium Antelope Island Wildlife Tour
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
