import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import Accordion from "@/components/shared/Accordion";

export const metadata: Metadata = {
  title: "Antelope Island Tour FAQ",
  description:
    "Frequently asked questions about Safari Utah private, sunset, and small-group Antelope Island wildlife tours from Salt Lake City.",
  alternates: {
    canonical: "/faq",
  },
};

const faqItems = [
  {
    question: "Where do we meet?",
    answer:
      "Pickup is arranged with your guide. Most guests are collected from their Salt Lake City accommodation near downtown, or from a pre-agreed location with free day parking.",
  },
  {
    question: "How long is the tour?",
    answer:
      "The private and small-group day tours are approximately 4.5 hours from pickup to drop-off. The private sunset and small-group sunset tours run approximately 4.5 to 5 hours from pick up to drop off.",
  },
  {
    question: "What wildlife will we see?",
    answer:
      "Bison are reliably present. Pronghorn, mule deer, coyotes, and seasonal birdlife such as American avocets, hawks, and various shorebirds are commonly observed, but wildlife is never guaranteed.",
  },
  {
    question: "Is the tour suitable for children or older adults?",
    answer:
      "Yes. Most of the experience is vehicle-based with optional short, easy walks when conditions allow. Youth must travel with an adult, and guests are responsible for providing any legally required child seats or boosters.",
  },
  {
    question: "What’s included?",
    answer: "Guiding, transportation, Salt Lake City area pickup and drop-off, and Antelope Island entrance fees.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring water, snacks, binoculars and a camera if you have them, plus comfortable weather-appropriate clothing and shoes suitable for light walking.",
  },
  {
    question: "What’s the group size?",
    answer:
      "Private tours are for your group only, typically 1–4 guests. Small-group tours are shared experiences with capped group sizes for calmer, more comfortable wildlife viewing.",
  },
  {
    question: "What small-group tours are available?",
    answer:
      "Safari Utah offers a small-group day tour and a small-group sunset tour. These shared public tours use per-person pricing and capped group sizes while keeping the experience calm, wildlife-focused, and personal in feel.",
  },
  {
    question: "What if the weather changes?",
    answer:
      "Weather on Antelope Island rarely prevents a quality experience. If conditions affect safety or visibility, Safari Utah may cancel and issue a full refund or offer an alternative date.",
  },
  {
    question: "How close can we get to wildlife?",
    answer:
      "Viewing follows ethical wildlife guidelines. Most encounters are enjoyed from the vehicle while maintaining comfort and safety for both guests and animals.",
  },
  {
    question: "Is there walking involved?",
    answer:
      "Light walking may be included when conditions allow, but most wildlife viewing is done from the vehicle.",
  },
  {
    question: "Are restrooms available?",
    answer:
      "Restrooms are available at several stops on Antelope Island during the tour.",
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
