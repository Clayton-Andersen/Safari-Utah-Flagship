import Link from "next/link";
import Section from "@/components/shared/Section";

export const metadata = {
  title: "Policies | Safari Utah",
  description:
    "Refund, cancellation, weather, and guest responsibility policies for Safari Utah guided wildlife experiences.",
};

export default function PoliciesPage() {
  return (
    <>
      <Section eyebrow="Policies" title="Safari Utah Policies">
        <div className="max-w-3xl space-y-8 text-sm leading-7 text-sand/80">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-bone">Refund Policy</h2>
            <p>
              Guests may cancel their tour at least 24 hours before the scheduled
              start time for a full refund. Cancellations made within 24 hours of
              the tour start time are non-refundable. All times are based on the
              local time of the experience.
            </p>
            <p>
              Tours require suitable conditions. In the rare event Safari Utah must
              cancel due to inclement weather or because we are unable to operate,
              guests will receive a full refund.
            </p>
            <p>
              Changes requested within 24 hours of the scheduled start time may
              not be possible and are not guaranteed.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-2xl text-bone">Guest Responsibilities</h2>
            <p>
              Guests should bring water, snacks, weather-appropriate clothing,
              and any personal items needed for comfort. Families are responsible
              for providing any legally required child seats or boosters.
            </p>
            <p>
              Wildlife viewing follows ethical distance and safety guidelines.
              Guests must follow guide instructions around wildlife, roads,
              overlooks, trailheads, and any optional short walks.
            </p>
          </div>

          <div className="rounded-3xl border border-sand/25 bg-sand/[0.07] p-6">
            <p className="font-semibold text-bone">Questions before booking?</p>
            <p className="mt-2">
              Reach out before reserving if you have questions about timing,
              pickup, group needs, mobility, weather, or which tour is the best fit.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-sand/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-sand transition hover:bg-sand hover:text-night"
              >
                Contact Safari Utah
              </Link>
              <Link
                href="/tours/antelope-island#choose-your-tour"
                className="inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-night transition hover:bg-bone"
              >
                Compare and Book Tours
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
