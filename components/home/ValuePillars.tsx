import Section from "../shared/Section";

const pillars = [
  {
    title: "Safari-Trained",
    body: "Guiding shaped by professional African safari training, with attention to animal behavior, light, weather, and the landscape itself.",
  },
  {
    title: "Ecologically Grounded",
    body: "Natural science and field experience help connect what you see: bison, birds, geology, lake ecology, seasonal rhythms, and changing habitat.",
  },
  {
    title: "Calm by Design",
    body: "Small groups, unhurried pacing, and thoughtful interpretation create a more personal alternative to standard sightseeing or self-driving.",
  },
];

export default function ValuePillars() {
  return (
    <Section
      id="why-safari-utah"
      eyebrow="Why Safari Utah"
      title="A safari mindset, in Utah."
      subtitle="Expert naturalist guiding, small-scale experiences, and a calmer way to explore Antelope Island."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl border border-sand/20 bg-night/40 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
          >
            <h3 className="mb-3 font-serif text-xl text-bone">
              {pillar.title}
            </h3>
            <p className="text-sm leading-7 text-sand/85">{pillar.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
