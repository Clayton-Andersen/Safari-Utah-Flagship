import Section from "@/components/shared/Section";
import BookingButton from "@/components/shared/BookingButton";

export const metadata = {
  title: "Custom Experiences | Safari Utah",
  description:
    "By-request-only custom wildlife and nature experiences in Utah and beyond.",
};

export default function CustomExperiencesPage() {
  return (
    <>
      {/* Intro */}
      <Section
        eyebrow="Custom Experiences"
        title="Custom Experiences — By Request Only"
      >
        <div className="space-y-4 text-sm text-sand/80 max-w-3xl">
          <p>
            For guests seeking something tailored, Safari Utah offers a limited
            number of custom outings. Options include full-day trips to Arches
            or Canyonlands, wildlife and nature outings in the Wasatch
            Mountains, and personalized African safari planning. These
            experiences are curated individually and available by request.
          </p>
        </div>
      </Section>

      {/* Example Experiences */}
      <Section title="Examples of Custom Outings">
        <div className="grid gap-6 md:grid-cols-3 text-sm text-sand/80">
          <div className="border border-sand/20 rounded-2xl p-6 bg-night/50 space-y-2">
            <h3 className="font-serif text-lg">Full-Day Arches or Canyonlands</h3>
            <p>
              Explore red rock landscapes with a naturalist guide, focusing on
              geology, ecology, and unhurried time in iconic locations.
            </p>
          </div>

          <div className="border border-sand/20 rounded-2xl p-6 bg-night/50 space-y-2">
            <h3 className="font-serif text-lg">
              Wasatch Wildlife & Nature Outings
            </h3>
            <p>
              Custom-paced days in the Wasatch Mountains, shaped around
              wildlife, forest ecology, and time outside that fits your energy
              and interests.
            </p>
          </div>

          <div className="border border-sand/20 rounded-2xl p-6 bg-night/50 space-y-2">
            <h3 className="font-serif text-lg">African Safari Planning</h3>
            <p>
              Personalized guidance for planning your own African safari,
              informed by professional safari guide training and experience.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section title="Request a Custom Experience">
        <div className="space-y-3 text-sm text-sand/80 max-w-3xl">
          <p>
            Every custom experience begins with a conversation. Share your
            interests, timeline, and group details, and we&apos;ll explore what
            might be possible.
          </p>
          <p>
            Use the contact form below or on the Contact page to start the
            process.
          </p>
          <BookingButton label="Request a custom experience" size="md" />
        </div>
      </Section>
    </>
  );
}
