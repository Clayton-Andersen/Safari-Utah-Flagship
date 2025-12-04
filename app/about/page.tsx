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
              Safari Utah is a small, owner-led guiding company built around a simple idea; bring the
              depth and clarity of African safari guiding to the wild heart of Utah. We specialize in
              private, expert-led wildlife experiences that blend solid natural science with an easygoing,
              human approach. Every tour is designed to slow things down so you can actually see and
              understand what is in front of you; from the shape of the land to the behavior of the animals
              that live here. Our job is to translate the landscape for you so the day feels both relaxed
              and deeply informative, not rushed or scripted.
            </p>
            <p>
              On every outing, we keep group sizes small, move at your pace, and stay focused on real 
              connection with place; quiet moments, clear explanations, and time to ask questions. You can 
              expect ethical wildlife viewing, honest answers, and a guide who is paying close attention to 
              both the environment and your comfort. Whether you are a first-time visitor or a local seeing 
              the Great Salt Lake and surrounding ecosystems with fresh eyes, Safari Utah gives you a 
              structured yet flexible experience that feels personal, grounded, and memorable.
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
              I’m Clayton, a Utah native, safari guide, and unabashed nature nerd who built Safari Utah
              to give guests the kind of wildlife experiences I wish more people had. I studied the natural
              sciences and trained as a FGASA safari guide in South Africa, then spent years working in the
              field here in Utah, learning how to read landscapes, track wildlife, and notice the small
              details most people walk right past. That mix of African safari training and deep local
              experience shapes every tour I run from the way I plan the day to how I explain what we’re
              seeing. My style is calm, professional, and unhurried; I want you to feel like you’re out
              with a highly skilled friend, not stuck on a tour bus.
            </p>
            <p>
              What matters most to me is helping people slow down, really see a place, and walk away
              feeling more connected to the natural world and to themselves. Whether we’re watching bison
              graze on Antelope Island, scanning for coyotes and birds of prey, or just sitting in a quiet
              moment taking in the light on the lake, I’ll give you clear, meaningful context for what
              you’re seeing so it sticks with you long after the trip ends. I keep my groups small and the
              experience highly personalized so we can follow your interests, your pace, and your comfort
              level. My goal is simple: you feel safe, cared for, and genuinely inspired by the time we
              say goodbye.
            </p>

            <BookingButton label="Book Your Experience" size="md" />
          </div>
        </div>
      </Section>
    </>
  );
}
