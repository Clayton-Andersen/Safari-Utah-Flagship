import Section from "../shared/Section";

const pillars = [
  {
    title: "Wildlife-Focused",
    body: "We read behavior, light, and weather to position you for meaningful encounters rather than just passing sightings.",
  },
  {
    title: "Crowd-Free",
    body: "Small, private groups. No megabuses, no loud groups, no rushed checklists.",
  },
  {
    title: "Expert-Guided",
    body: "Guiding informed by field ecology and FGASA-style training, adapted for the American West.",
  },
];

export default function ValuePillars() {
  return (
    <Section eyebrow="Premium Experience" title="A safari mindset, in Utah.">
      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="border border-sand/20 rounded-2xl p-6 bg-night/40"
          >
            <h3 className="font-serif text-xl mb-3">{pillar.title}</h3>
            <p className="text-sm text-sand/80">{pillar.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
