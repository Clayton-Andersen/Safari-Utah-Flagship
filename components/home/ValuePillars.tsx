import Section from "../shared/Section";

const pillars = [
  {
    title: "Safari-Trained",
    body: "Our guiding is shaped by African safari training, with an emphasis on reading behavior, light, weather, and the landscape itself rather than simply moving from stop to stop.",
  },
  {
    title: "Ecologically Grounded",
    body: "With a background in natural science and ecological fieldwork, we help guests understand not only what they are seeing, but how the island’s wildlife, geology, and seasonal rhythms fit together.",
  },
  {
    title: "Calm by Design",
    body: "Small private groups, unhurried pacing, and thoughtful interpretation create a more personal experience that feels closer to a real safari than a standard sightseeing tour.",
  },
];

export default function ValuePillars() {
  return (
    <Section
      eyebrow="Why Safari Utah"
      title="A safari mindset, in Utah."
      subtitle="African safari training, ecological field experience, and a calmer, more personal way to explore the wild."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl border border-sand/20 bg-night/40 p-6"
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