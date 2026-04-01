import Section from "@/components/shared/Section";
import BokunButton from "@/components/shared/BokunButton";
import BokunLoader from "@/components/shared/BokunLoader";
import Link from "next/link";

export const metadata = {
  title: "Book the Sunset Tour | Safari Utah",
  description:
    "Book the Premium Antelope Island Elite Sunset Tour with Safari Utah.",
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
        title="Book the Sunset Tour"
        subtitle="A private evening wildlife tour for your group only."
      >
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-sand/85">
          <p>
            This extended private wildlife tour is timed for the island’s most
            beautiful evening light, with extra time for wildlife viewing,
            photography, and a memorable finish over the Great Salt Lake.
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
              Private Sunset Tour
            </h2>
            <p className="text-sm text-sand/75">
              Premium Antelope Island Elite Sunset Tour
            </p>
          </div>

          <p className="leading-7">
            A longer private wildlife tour timed for the island’s best evening
            light, with exceptional sunset atmosphere and strong photography
            opportunities.
          </p>

          <ul className="list-disc space-y-2 pl-5">
            <li>Private experience for your group only</li>
            <li>Approximately 4.5 to 5 hours</li>
            <li>From $500 per tour (1–4 guests)</li>
            <li>Offered Fridays and Mondays</li>
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