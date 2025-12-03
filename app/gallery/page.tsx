import Section from "@/components/shared/Section";
import Gallery from "@/components/shared/Gallery";

export const metadata = {
  title: "Gallery | Safari Utah",
  description:
    "A visual look at Safari Utah wildlife, landscapes, and field experiences.",
};

export default function GalleryPage() {
  return (
    <>
      <Section
        eyebrow="Gallery"
        title="Scenes from Safari Utah"
        subtitle="A glimpse of the wildlife, landscapes, and quiet moments that define our time in the field."
      >
        <Gallery />
      </Section>
    </>
  );
}
