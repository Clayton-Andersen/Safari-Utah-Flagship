import Section from "@/components/shared/Section";
import BokunButton from "@/components/shared/BokunButton";
import BokunLoader from "@/components/shared/BokunLoader";
import Link from "next/link";

export const metadata = {
  title: "Book the Shared Small-Group Tour | Safari Utah",
  description:
    "Book the Antelope Island Small-Group Wildlife Tour, a shared public wildlife tour on Antelope Island.",
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
        eyebrow="Shared Small-Group Tour Booking"
        title="Book the Shared Small-Group Tour"
      >
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-sand/85">
          <p>
            This shared public tour on Antelope Island is designed for guests
            who want expert guiding, calm pacing, and a more accessible way to
            experience the island. It is the best fit for guests who are
            comfortable joining others while still wanting a small-scale,
            wildlife-focused outing.
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

      <Section title="Shared Small-Group Tour">
        <div className="max-w-3xl space-y-4 rounded-2xl border border-sand/20 bg-night/60 p-6 text-sm text-sand/85">
          <span className={badgeClasses}>Small-Group Tour</span>

          <div className="space-y-1">
            <h2 className="font-serif text-2xl text-bone">
              Antelope Island Shared Small-Group Tour
            </h2>
          </div>

          <p className="leading-7">
            A shared public wildlife tour for guests who want expert guiding, a
            calm pace, and a more accessible price point without losing the feel
            of a personal outing.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Shared public small-group experience</li>
            <li>Approximately 4 hours</li>
            <li>1 adult $160 · 2+ adults $140 per person · Youth with adult $80</li>
            <li>Salt Lake City downtown area pickup and drop-off included</li>
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