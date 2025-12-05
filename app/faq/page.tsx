import Section from "@/components/shared/Section";
import Accordion from "@/components/shared/Accordion";

export const metadata = {
  title: "FAQ | Safari Utah",
  description:
    "Frequently asked questions about Safari Utah private wildlife experiences.",
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
      "The experience runs 4 hours total from pickup to drop-off. Antelope Island is roughly 30 minutes from SLC.",
  },
  {
    question: "What wildlife will we see?",
    answer:
      "Bison are reliably present. Pronghorn, mule deer, coyotes, and seasonal birdlife such as American avocets, hawks, and various shorebirds are commonly observed.",
  },
  {
    question: "Is the tour suitable for children/older adults?",
    answer:
      "Yes. We recommend children be 8+ and not require a car seat.",
  },
  {
    question: "What’s included?",
    answer: "Guiding, transportation, and all entrance fees.",
  },
  {
    question: "What should I bring?",
    answer:
      "Water, snacks, binoculars and a camera if you have them, plus comfortable weather-appropriate clothing and shoes suitable for light walking.",
  },
  {
    question: "What’s the group size?",
    answer:
    <div className="space-y-2">
      <p><strong>Premium Tours:</strong> fully private, 1–4 guests.</p>
      <p><strong>Small-Group Tour:</strong> shared experience with a capped group size for calm, comfortable wildlife viewing.</p>
    </div>
  },
  {
    question: "Why is the group size limited to 4?",
    answer:
      "This applies to the premium private tours. The small-group tour has a slightly larger shared capacity but remains intentionally capped.",
  },
  {
    question: "What if the weather changes?",
    answer:
      "Weather on Antelope Island rarely prevents a quality experience. If conditions affect safety or visibility, Safari Utah may cancel and issue a full refund or offer an alternative date.",
  },
  {
    question: "Why is there a minimum fare?",
    answer:
      "Tours are private, and the minimum fare reflects the time, professional guiding, vehicle use, and preparation required to deliver a premium experience for your group alone.",
  },
  {
    question: "How close can we get to wildlife?",
    answer:
      "Viewing follows ethical wildlife guidelines. Most encounters are enjoyed from the vehicle, maintaining comfort and safety for both guests and animals.",
  },
  {
    question: "Why choose this tour over a van tour?",
    answer:
      "Premium tours are private, flexible, and guided by a professionally trained safari guide. There are no crowded vehicles, fixed routes, or rushed stops. You get time, space, and expert interpretation tailored to your interests.",
  },
  {
    question: "Is there walking involved?",
    answer:
      "Light walking may be included when conditions allow, but most wildlife viewing is done from the vehicle.",
  },
  {
    question: "Are restrooms available?",
    answer:
      "Restrooms are available throughout the island during the tour.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Section eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="max-w-3xl">
          <Accordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
