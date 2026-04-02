import Section from "@/components/shared/Section";
import BokunButton from "@/components/shared/BokunButton";
import BokunLoader from "@/components/shared/BokunLoader";
import Link from "next/link";

export const metadata = {
  title: "Book the Private Sunset Tour | Safari Utah",
  description:
    "Book the Premium Antelope Island Elite Sunset Tour, a private evening wildlife tour on Antelope Island.",
};

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

const badgeClasses =
  "inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand";

export default function SunsetBookPage() {
  return (
    <>
      <BokunLoader channelUuid="0e590548-6d52-498f-9513-129853da57cf" />

      <Section
        eyebrow="Private Sunset Tour Booking"
        title="Book the Private Sunset Tour"
      >
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-sand/85">
          <p>
            This extended private tour on Antelope Island is designed for guests
            who want the island’s best evening light, a more atmospheric pace,
            and extra time in the field. It is the strongest fit for guests who
            value sunset color, photography, and a more elevated finish to the
            day.
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

      <Section title="Private Sunset Tour">
        <div className="max-w-3xl space-y-4 rounded-2xl border border-sand/20 bg-night/60 p-6 text-sm text-sand/85">
          <span className={badgeClasses}>Private Sunset Tour</span>

          <div className="space-y-1">
            <h2 className="font-serif text-2xl text-bone">
              Premium Antelope Island Private Sunset Tour
            </h2>
          </div>

          <p className="leading-7">
            A longer private tour for guests who want evening light, a more
            atmospheric experience, and extra time to enjoy Antelope Island at a
            relaxed pace.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Private experience for your group only</li>
            <li>Approximately 4.5 to 5 hours</li>
            <li>From $500 per tour (1–4 guests)</li>
            <li>Salt Lake City area pickup and drop-off included</li>
          </ul>

          <BokunButton
            buttonId="bokun_0188482c_9722_4886_953e_c2bbfdb222f0"
            dataSrc="https://widgets.bokun.io/online-sales/0e590548-6d52-498f-9513-129853da57cf/experience/1174895?partialView=1"
            label="Book Private Sunset Tour"
            className={buttonClasses}
          />
        </div>
      </Section>
    </>
  );
}