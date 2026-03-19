import Section from "@/components/shared/Section";
import BokunButton from "@/components/shared/BokunButton";
import BokunLoader from "@/components/shared/BokunLoader";
import Link from "next/link";

export const metadata = {
    title: "Book a Private Antelope Island Tour | Safari Utah",
    description:
        "Book either the Premium Antelope Island Tour or the Premium Antelope Island Elite Sunset Tour.",
};

const buttonClasses =
    "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

export default function PrivateBookPage() {
    return (
        <>
            <BokunLoader channelUuid="0e590548-6d52-498f-9513-129853da57cf" />

            <Section
                eyebrow="Private Booking"
                title="Choose Your Premium Private Experience"
                subtitle="Both options are private experiences for your group only."
            >
                <div className="max-w-3xl space-y-4 text-sm text-sand/80">
                    <p>
                        Choose between our signature daytime private wildlife tour and our
                        longer Elite Sunset Tour. Both experiences include expert guiding
                        and Salt Lake City area hotel pickup and drop-off.
                    </p>
                    <p>
                        <a href="/book" className="underline text-sand/80 hover:text-sand">
                            Back to all booking options
                        </a>
                    </p>
                </div>
            </Section>

            <Section title="Private Tours">
                <div className="grid gap-6 md:grid-cols-2 max-w-5xl text-sm text-sand/80">
                    <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/60 p-6">
                        <span className="inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand">
                            Private Tour
                        </span>

                        <h2 className="font-serif text-2xl text-bone">
                            Premium Antelope Island Tour
                        </h2>

                        <p>
                            A private daytime wildlife experience designed around the best
                            daylight viewing, with flexibility for wildlife sightings,
                            photography, and interpretation throughout the outing.
                        </p>

                        <ul className="space-y-2 list-disc pl-5">
                            <li>Private experience for your group only</li>
                            <li>Approximately 4 hours</li>
                            <li>$400 minimum fare; 1 to 4 guests</li>
                        </ul>

                        <BokunButton
                            buttonId="bokun_1a0059c4_a599_458b_91d5_474f465422cd"
                            dataSrc="https://widgets.bokun.io/online-sales/0e590548-6d52-498f-9513-129853da57cf/experience/1167473?partialView=1"
                            label="Book Your Private Antelope Island Tour"
                            className={buttonClasses}
                        />
                    </div>

                    <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/60 p-6">
                        <span className="inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand">
                            Private Tour
                        </span>

                        <h2 className="font-serif text-2xl text-bone">
                            Premium Antelope Island Elite Sunset Tour
                        </h2>

                        <p>
                            A longer private experience timed for the island’s most beautiful
                            light, with exceptional sunset atmosphere and strong photography
                            opportunities.
                        </p>

                        <ul className="space-y-2 list-disc pl-5">
                            <li>Private experience for your group only</li>
                            <li>Approximately 4.5 to 5 hours</li>
                            <li>$500 minimum fare; 1 to 4 guests</li>
                        </ul>

                        <BokunButton
                            buttonId="bokun_0188482c_9722_4886_953e_c2bbfdb222f0"
                            dataSrc="https://widgets.bokun.io/online-sales/0e590548-6d52-498f-9513-129853da57cf/experience/1174895?partialView=1"
                            label="Book Your Private Sunset Elite Experience"
                            className={buttonClasses}
                        />
                    </div>
                </div>
            </Section>
        </>
    );
}