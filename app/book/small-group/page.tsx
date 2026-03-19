import Section from "@/components/shared/Section";
import BokunButton from "@/components/shared/BokunButton";
import BokunLoader from "@/components/shared/BokunLoader";
import Link from "next/link";

export const metadata = {
    title: "Book the Small-Group Wildlife Tour | Safari Utah",
    description:
        "Book the Antelope Island Small-Group Wildlife Tour with Safari Utah.",
};

const buttonClasses =
    "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

export default function SmallGroupBookPage() {
    return (
        <>
            <BokunLoader channelUuid="af390726-dee6-4233-8c58-0c0de47938d0" />

            <Section
                eyebrow="Small-Group Booking"
                title="Book the Antelope Island Small-Group Wildlife Tour"
                subtitle="A shared wildlife experience with expert guiding and calm pacing."
            >
                <div className="max-w-3xl space-y-4 text-sm text-sand/80">
                    <p>
                        This shared small-group experience is designed for guests who want a
                        more accessible option while still enjoying expert interpretation
                        and meaningful time in the field.
                    </p>
                    <p>
                        <a href="/book" className="underline text-sand/80 hover:text-sand">
                            Back to all booking options
                        </a>
                    </p>
                </div>
            </Section>

            <Section title="Small-Group Tour">
                <div className="max-w-3xl rounded-2xl border border-sand/20 bg-night/60 p-6 text-sm text-sand/80 space-y-4">
                    <span className="inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand">
                        Small Group Tour
                    </span>

                    <h2 className="font-serif text-2xl text-bone">
                        Antelope Island Small-Group Wildlife Tour
                    </h2>

                    <p>
                        A shared wildlife experience for guests who prefer a more accessible
                        option while still enjoying calm pacing, expert guiding, and an
                        intimate group size.
                    </p>

                    <ul className="space-y-2 list-disc pl-5">
                        <li>Shared small-group experience</li>
                        <li>Approximately 4 hours</li>
                        <li>1 adult $160</li>
                        <li>2+ adults $140 per person</li>
                        <li>Youth with adult $80</li>
                    </ul>

                    <BokunButton
                        buttonId="bokun_a1e37b66_dcb1_4c28_ac37_6eca50dda10e"
                        dataSrc="https://widgets.bokun.io/online-sales/af390726-dee6-4233-8c58-0c0de47938d0/experience/1167480?partialView=1"
                        label="Book the Small-Group Tour"
                        className={buttonClasses}
                    />
                </div>
            </Section>
        </>
    );
}