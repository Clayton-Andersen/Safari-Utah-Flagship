import Section from "@/components/shared/Section";
import BokunButton from "@/components/shared/BokunButton";
import BokunLoader from "@/components/shared/BokunLoader";
import Link from "next/link";

export const metadata = {
  title: "Book the Private Day Tour | Safari Utah",
  description:
    "Book the Premium Antelope Island Tour, a private daytime wildlife tour on Antelope Island.",
};

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

const badgeClasses =
  "inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand";

export default function PrivateBookPage() {
  return (
    <>
      <BokunLoader channelUuid="0e590548-6d52-498f-9513-129853da57cf" />

      <Section
        eyebrow="Private Day Tour Booking"
        title="Book the Private Day Tour"
        subtitle="A private daytime wildlife tour for your group only."
      >
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-sand/85">
          <p>
            This is our signature private daytime wildlife tour on Antelope
            Island, designed around the best daylight viewing with flexibility
            for wildlife sightings, photography, and natural history
            interpretation throughout the outing.
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

      <Section title="Private Day Tour">
        <div className="max-w-3xl space-y-4 rounded-2xl border border-sand/20 bg-night/60 p-6 text-sm text-sand/85">
          <span className={badgeClasses}>Private Day Tour</span>

          <div className="space-y-1">
            <h2 className="font-serif text-2xl text-bone">Private Day Tour</h2>
            <p className="text-sm text-sand/75">Premium Antelope Island Tour</p>
          </div>

          <p className="leading-7">
            A private daytime wildlife tour designed around the best daylight
            viewing, with a flexible pace for wildlife, photography, and natural
            history interpretation.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Private experience for your group only</li>
            <li>Approximately 4 hours</li>
            <li>From $400 per tour (1–4 guests)</li>
            <li>Salt Lake City area pickup and drop-off included</li>
          </ul>

          <BokunButton
            buttonId="bokun_1a0059c4_a599_458b_91d5_474f465422cd"
            dataSrc="https://widgets.bokun.io/online-sales/0e590548-6d52-498f-9513-129853da57cf/experience/1167473?partialView=1"
            label="Book Private Day Tour"
            className={buttonClasses}
          />
        </div>
      </Section>
    </>
  );
}