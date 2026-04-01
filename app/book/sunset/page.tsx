import Section from "@/components/shared/Section";
import BokunButton from "@/components/shared/BokunButton";
import BokunLoader from "@/components/shared/BokunLoader";
import Link from "next/link";

export const metadata = {
  title: "Book the Elite Sunset Tour | Safari Utah",
  description:
    "Book the Premium Antelope Island Elite Sunset Tour with Safari Utah.",
};

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

export default function SunsetBookPage() {
  return (
    <>
      <BokunLoader channelUuid="0e590548-6d52-498f-9513-129853da57cf" />

      <Section
        eyebrow="Private Sunset Booking"
        title="Book the Premium Antelope Island Elite Sunset Tour"
        subtitle="A private evening wildlife experience for your group only."
      >
        <div className="max-w-3xl space-y-4 text-sm text-sand/80">
          <p>
            This extended private experience is timed for the island’s most
            beautiful evening light, with extra time for wildlife viewing,
            photography, and a memorable finish over the Great Salt Lake.
          </p>
          <p>
            <Link
              href="/tours/antelope-island"
              className="underline text-sand/80 hover:text-sand"
            >
              Back to Antelope Island tour details
            </Link>
          </p>
        </div>
      </Section>

      <Section title="Elite Sunset Tour">
        <div className="max-w-3xl rounded-2xl border border-sand/20 bg-night/60 p-6 text-sm text-sand/80 space-y-4">
          <span className="inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand">
            Private Sunset Tour
          </span>

          <h2 className="font-serif text-2xl text-bone">
            Premium Antelope Island Elite Sunset Tour
          </h2>

          <p>
            A longer private wildlife experience timed for the island’s best
            evening light, with exceptional sunset atmosphere and strong
            photography opportunities.
          </p>

          <ul className="space-y-2 list-disc pl-5">
            <li>Private experience for your group only</li>
            <li>Approximately 4.5 to 5 hours</li>
            <li>$500 minimum fare; 1 to 4 guests</li>
            <li>Offered Fridays and Mondays</li>
          </ul>

          <BokunButton
            buttonId="bokun_0188482c_9722_4886_953e_c2bbfdb222f0"
            dataSrc="https://widgets.bokun.io/online-sales/0e590548-6d52-498f-9513-129853da57cf/experience/1174895?partialView=1"
            label="Book Your Private Sunset Elite Experience"
            className={buttonClasses}
          />
        </div>
      </Section>
    </>
  );
}