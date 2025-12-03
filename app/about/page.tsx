import Section from "@/components/shared/Section";
import BookingButton from "@/components/shared/BookingButton";
import Image from "next/image";

export const metadata = {
  title: "About Safari Utah",
  description:
    "African-inspired nature guiding in the American West, led by an expert safari guide.",
};

export default function AboutPage() {
  return (
    <>
      {/* About Safari Utah */}
      <Section
        title="About Safari Utah"
        subtitle="African-Inspired Guiding in the American West"
      >
        <div className="grid gap-10 md:grid-cols-[2fr,1.2fr] items-start">

          {/* Text Column */}
          <div className="space-y-6 text-sm text-sand/80 max-w-prose">
            <p>
              Safari Utah brings African-inspired nature guiding to the American West
              through private, expert-led wildlife experiences. Our focus is to
              connect people with nature through clear insight, meaningful moments,
              and a deeper understanding of place.
            </p>
            <p>
              Each tour emphasizes presence, ecological context, and the quiet,
              unhurried rhythm of time in the field — drawing from the traditions and
              depth of southern African safari guiding.
            </p>
          </div>

          {/* Image Column — NEW */}
          <div className="rounded-2xl overflow-hidden border border-sand/20 bg-night/40 h-full">
            <Image
              src="/images/about-safari.jpg"
              alt="Safari Utah wildlife viewing experience on Antelope Island"
              width={800}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </Section>


      {/* About Your Guide */}
      <Section title="About Your Guide">
        <div className="grid gap-10 md:grid-cols-[1fr,2fr] items-start">
          {/* Guide Photo */}
          <div className="rounded-2xl overflow-hidden border border-sand/20 bg-night/40">
            <Image
              src="/images/guide.jpg" // make sure this matches your filename
              alt="Clayton Andersen, Safari Utah guide"
              width={600}
              height={800}
              className="object-cover h-full w-full"
              priority
            />
          </div>

          {/* Guide Text */}
          <div className="space-y-6 text-sm text-sand/80">
            <p>
              Educated in the natural sciences, with ecological field
              experience and professional FGASA safari guide training, Clayton
              offers a grounded, holistic approach to interpreting landscapes
              and wildlife. His goal is to help people understand the natural
              world more deeply and recognize our connection to it.
            </p>

            <BookingButton label="Book Your Experience" size="md" />
          </div>
        </div>
      </Section>
    </>
  );
}
