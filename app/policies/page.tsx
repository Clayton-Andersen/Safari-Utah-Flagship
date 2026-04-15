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
      </Section>

      {/* You can add more sections here later, e.g. Safety Policy, Terms, Privacy Policy */}
    </>
  );
}
