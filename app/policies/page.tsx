import Section from "@/components/shared/Section";

export const metadata = {
  title: "Policies | Safari Utah",
  description:
    "Refund and cancellation policies for Safari Utah guided wildlife experiences.",
};

export default function PoliciesPage() {
  return (
    <>
      <Section eyebrow="Policies" title="Refund Policy">
        <div className="space-y-4 text-sm text-sand/80 max-w-3xl">
          <p>
            Guests may cancel their tour up to 24 hours before the scheduled
            start time for a full refund. Cancellations made less than 24 hours
            before the start time are non-refundable, and any changes requested
            inside the 24-hour window cannot be accommodated. All times are
            based on the local time of the experience.
          </p>

          <p>
            Tours may require suitable weather conditions. If Safari Utah must
            cancel due to weather or any operational reason, guests will receive
            either a rescheduled date or a full refund.
          </p>

          <p>
            If Safari Utah cancels a tour for any reason, a full refund will be
            issued.
          </p>
        </div>
      </Section>

      {/* You can add more sections here later, e.g. Safety Policy, Terms, Privacy Policy */}
    </>
  );
}
