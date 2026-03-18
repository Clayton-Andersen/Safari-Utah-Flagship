import Section from "@/components/shared/Section";
import Link from "next/link";

export const metadata = {
  title: "Book Your Utah Wildlife Tour | Safari Utah",
  description:
    "Choose between our premium private Antelope Island tours and our small-group wildlife tour.",
};

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

export default function BookPage() {
  return (
    <>
      <Section
        eyebrow="Booking"
        title="Choose Your Antelope Island Experience"
        subtitle="Select the booking path that fits your style of travel."
      >
        <div className="max-w-3xl space-y-4 text-sm text-sand/80">
          <p>
            Safari Utah offers two premium private experiences and one
            small-group wildlife tour on Antelope Island. Choose your preferred
            path below to view availability and complete your booking.
          </p>
        </div>
      </Section>

      <Section title="Booking Options">
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl text-sm text-sand/80">
          <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/60 p-6 md:col-span-2">
            <span className="inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand">
              Premium Private Experiences
            </span>

            <h2 className="font-serif text-2xl text-bone">
              Book a Private Antelope Island Experience
            </h2>

            <p>
              Choose between our signature private daytime wildlife tour and our
              longer Elite Sunset Tour. Both are private experiences for your
              group only.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Premium Antelope Island Tour</li>
              <li>Premium Antelope Island Elite Sunset Tour</li>
              <li>Private experience; 1 to 4 guests</li>
            </ul>

            <Link href="/book/private" className={buttonClasses}>
              View Private Booking Options
            </Link>
          </div>

          <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/60 p-6">
            <span className="inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand">
              Small Group Tour
            </span>

            <h2 className="font-serif text-2xl text-bone">
              Book the Small-Group Tour
            </h2>

            <p>
              A shared wildlife experience with expert guiding and a more
              accessible price point.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Antelope Island Small-Group Wildlife Tour</li>
              <li>Shared small-group experience</li>
              <li>Approximately 4 hours</li>
            </ul>

            <Link href="/book/small-group" className={buttonClasses}>
              View Small-Group Booking
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}