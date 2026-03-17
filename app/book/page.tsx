import Section from "@/components/shared/Section";
import BokunButton from "@/components/shared/BokunButton";
import BokunLoader from "@/components/shared/BokunLoader";

export const metadata = {
  title: "Book Your Utah Wildlife Tour | Safari Utah",
  description:
    "Choose between our premium private Antelope Island tours and our small-group wildlife tour, then book directly online.",
};

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-night shadow-md transition hover:bg-bone font-sans";

export default function BookPage() {
  return (
    <>
      <BokunLoader />

      <Section
        eyebrow="Booking"
        title="Book Your Antelope Island Experience"
        subtitle="Choose the experience that best fits your style of travel; private, sunset, or small-group."
      >
        <div className="max-w-3xl space-y-4 text-sm text-sand/80">
          <p>
            Safari Utah offers thoughtfully guided wildlife experiences on
            Antelope Island with a focus on calm pacing, meaningful
            interpretation, and unhurried time in the field. Choose a fully
            private experience for maximum flexibility, or a small-group option
            for a more accessible shared outing.
          </p>
          <p>
            All Antelope Island experiences include expert guiding and Salt Lake
            City area hotel pickup and drop-off. Select your preferred option
            below to view availability and complete your booking.
          </p>
        </div>
      </Section>

      <Section id="private-tours" title="Private Tours">
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
              <li>Best for guests wanting privacy and flexibility</li>
            </ul>

            <BokunButton
              buttonId="bokun_a8b8c870_f1b5_43ed_938f_e2ecc26c0e7c"
              dataSrc="https://widgets.bokun.io/online-sales/af390726-dee6-4233-8c58-0c0de47938d0/experience/1167473?partialView=1"
              label="Book Your Private Antelope Island Tour"
              className={buttonClasses}
            />
          </div>

          <div className="space-y-4 rounded-2xl border border-sand/20 bg-night/60 p-6">
            <span className="inline-block rounded-md border border-sand/30 bg-night px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-sand">
              Private Tour
            </span>

            <h2 className="font-serif text-2xl text-bone">
              Premium Antelope Island Private Sunset Tour
            </h2>

            <p>
              A longer private experience timed for the island’s most beautiful
              light, with exceptional sunset atmosphere, quieter evening mood,
              and strong photography opportunities.
            </p>

            <ul className="space-y-2 list-disc pl-5">
              <li>Private experience for your group only</li>
              <li>Approximately 4.5 to 5 hours</li>
              <li>$500 minimum fare; 1 to 4 guests</li>
              <li>Offered Fridays and Mondays</li>
            </ul>

            <BokunButton
              buttonId="bokun_575e496d_2e94_4ceb_b15b_4d97c4169d3a"
              dataSrc="https://widgets.bokun.io/online-sales/af390726-dee6-4233-8c58-0c0de47938d0/experience/1174895?partialView=1"
              label="Book Your Private Sunset Experience"
              className={buttonClasses}
            />
          </div>
        </div>
      </Section>

      <Section id="small-group" title="Small-Group Tour">
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
            buttonId="bokun_e3b3df68_08d6_4bac_9502_253c7f72c8ef"
            dataSrc="https://widgets.bokun.io/online-sales/af390726-dee6-4233-8c58-0c0de47938d0/experience/1167480?partialView=1"
            label="Book the Small-Group Tour"
            className={buttonClasses}
          />
        </div>
      </Section>

      <Section title="Before You Book">
        <div className="max-w-3xl space-y-4 text-sm text-sand/80">
          <p>
            Wildlife is never scripted, which is part of what makes each outing
            special. Every tour is guided with attention to current conditions,
            light, seasonality, and animal activity to make the most of your
            time on the island.
          </p>
          <p>
            Custom experiences beyond Antelope Island are available separately
            by request through our Custom Experiences page.
          </p>
        </div>
      </Section>
    </>
  );
}