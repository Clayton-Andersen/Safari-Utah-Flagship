import Section from "@/components/shared/Section";
import BokunButton from "@/components/shared/BokunButton";
import BokunLoader from "@/components/shared/BokunLoader";
import Link from "next/link";

export const metadata = {
  title: "Book the Small-Group Tour | Safari Utah",
  description:
    "Book the Antelope Island Small-Group Wildlife Tour with Safari Utah.",
};

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

const badgeClasses =
  "inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand";

export default function SmallGroupBookPage() {
  return (
    <>
      <BokunLoader channelUuid="af390726-dee6-4233-8c58-0c0de47938d0" />

      <Section
        eyebrow="Small-Group Tour Booking"
        title="Book the Small-Group Tour"
        subtitle="A shared wildlife tour with expert guiding and calm pacing."
      >
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-sand/85">
          <p>
            This shared wildlife tour is designed for guests who want a more
            accessible option while still enjoying expert interpretation,
            meaningful time in the field, and a calm, personal feel.
          </p>
          <p>
            <Link
              href="/tours/antelope-island#choose-your-tour"
              className="underline text-sand/80 hover:text-sand"
            >
              Back to tour comparison
            </Link>
          </p>
        </div>
      </Section>

      <Section title="Small-Group Tour">
        <div className="max-w-3xl space-y-4 rounded-2xl border border-sand/20 bg-night/60 p-6 text-sm text-sand/85">
          <span className={badgeClasses}>Small-Group Tour</span>

          <div className="space-y-1">
            <h2 className="font-serif text-2xl text-bone">Small-Group Tour</h2>
            <p className="text-sm text-sand/75">
              Antelope Island Small-Group Wildlife Tour
            </p>
          </div>

          <p className="leading-7">
            A shared wildlife tour for guests who want calm pacing, expert
            guiding, and a more accessible price point without losing the feel
            of a personal outing.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Shared small-group experience</li>
            <li>Approximately 4 hours</li>
            <li>1 adult $160</li>
            <li>2+ adults $140 per person</li>
            <li>Youth with adult $80</li>
          </ul>

          <BokunButton
            buttonId="bokun_a1e37b66_dcb1_4c28_ac37_6eca50dda10e"
            dataSrc="https://widgets.bokun.io/online-sales/af390726-dee6-4233-8c58-0c0de47938d0/experience/1167480?partialView=1"
            label="Book Small-Group Tour"
            className={buttonClasses}
          />
        </div>
      </Section>
    </>
  );
}