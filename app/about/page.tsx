import Section from "@/components/shared/Section";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Safari Utah",
  description:
    "Meet Safari Utah's safari-trained naturalist guides and learn about African-inspired nature guiding in the American West.",
};

const buttonClasses =
  "inline-flex items-center justify-center rounded-full bg-sand px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night transition hover:bg-bone";

const secondaryButtonClasses =
  "inline-flex items-center justify-center rounded-full border border-sand/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-sand transition hover:bg-sand hover:text-night";

export default function AboutPage() {
  return (
    <>
      <Section
        title="About Safari Utah"
        subtitle="African-inspired guiding in the American West"
        headingLevel="h1"
      >
        <div className="mb-10 border-b border-sand/20" />

        <div className="grid items-start gap-10 md:grid-cols-[2fr,1.2fr]">
          <div className="max-w-prose space-y-6 text-sm leading-7 text-sand/85">
            <p>
              Safari Utah is a small, owner-led guiding company built around a
              simple idea: bring the depth and clarity of African safari guiding
              to the wild heart of Utah. We specialize in private, expert-led
              wildlife experiences that blend solid natural science with an
              easygoing, human approach. Every tour is designed to slow things
              down so you can actually see and understand what is in front of
              you, from the shape of the land to the behavior of the animals
              that live here.
            </p>
            <p>
              On every outing, we keep group sizes small, move at your pace, and
              stay focused on real connection with place: quiet moments, clear
              explanations, and time to ask questions. You can expect ethical
              wildlife viewing, honest answers, and guides who are paying close
              attention to both the environment and your comfort. The goal is a
              day that feels personal, grounded, and memorable rather than
              rushed or scripted.
            </p>
          </div>

          <div className="self-start overflow-hidden rounded-2xl border border-sand/20 bg-night/40">
            <div className="aspect-square w-full p-6 md:p-8">
              <Image
                src="/images/about-safari.jpg"
                alt="Safari Utah logo of mountains and bison"
                width={800}
                height={800}
                className="block h-full w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section title="About Your Guides">
        <div className="mb-10 border-b border-sand/20" />

        <div className="space-y-12">
          <div className="grid items-start gap-10 md:grid-cols-[1fr,2fr]">
            <div className="overflow-hidden rounded-2xl border border-sand/20 bg-night/40">
              <Image
                src="/images/guide.jpg"
                alt="Clayton, Safari Utah owner and guide"
                width={600}
                height={800}
                className="block h-full w-full object-cover"
              />
            </div>

            <div className="space-y-6 text-sm leading-7 text-sand/85">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-bone">Clayton</h3>
                <p className="text-sm text-sand/75">
                  Owner, guide, and co-creator of Safari Utah
                </p>
              </div>

              <p>
                I’m Clayton, a Utah native, safari guide, and lifelong nature
                nerd who built Safari Utah to offer the kind of wildlife
                experiences I always wished more people had access to. I studied
                the natural sciences, trained as a FGASA safari guide in South
                Africa, and then spent years working in the field here in Utah,
                learning how to read landscapes, understand animal behavior, and
                notice the small details most people pass right by. That mix of
                African safari training and deep local experience shapes every
                tour I lead, from the way I plan the day to how I interpret what
                we’re seeing in the moment.
              </p>
              <p>
                At the heart of my guiding is the belief that people connect
                more deeply with a place when they are given the time and
                context to really see it. My style is calm, personal, and
                unhurried. I want you to feel like you’re out in the field with
                a highly skilled friend, not being pushed through a scripted
                tour. Whether we’re watching bison on Antelope Island, scanning
                for coyotes and birds of prey, or simply taking in the light on
                the lake, I aim to give you meaningful context that stays with
                you long after the day is over. My goal is simple: you leave
                feeling inspired and more connected to the natural world.
              </p>
            </div>
          </div>

          <div className="grid items-start gap-10 md:grid-cols-[2fr,1fr]">
            <div className="space-y-6 text-sm leading-7 text-sand/85">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-bone">Sinéad</h3>
                <p className="text-sm text-sand/75">
                  Guide and co-creator of Safari Utah
                </p>
              </div>

              <p>
                I’m Sinéad, an English transplant who moved to the US for the
                wild open spaces and big landscapes of the American West. After
                a childhood immersed in the British countryside, my fascination
                with wildlife deepened through FGASA safari guide training in
                South Africa and nearly a decade working in animal medicine. I’m
                also a self-confessed bird nerd, and I’m often happiest with
                binoculars in hand, whether I’m watching hummingbirds for far
                too long or heading into the Wasatch in search of fresh air,
                elevation, and whatever wildlife the day brings.
              </p>
              <p>
                My approach to guiding is rooted in ecology, with a special
                interest in birding and animal behavior. I believe the outdoors
                should feel accessible, engaging, and restorative, and my role
                is to help guests connect with a place in a way that feels
                personal and meaningful. Our tours are guest-centered, so we can
                adapt the day around your interests, pace, and comfort. Whether
                you are here for bison, birds, human history, or simply the
                beauty of Antelope Island itself, I want you to leave with a
                deeper appreciation for the landscape and the life it holds.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-sand/20 bg-night/40">
              <Image
                src="/images/Sinead.jpg"
                alt="Sinéad, Safari Utah guide"
                width={600}
                height={800}
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Ready to head into the field?"
        title="Choose the Antelope Island tour that fits your style"
      >
        <div className="rounded-3xl border border-sand/25 bg-sand/[0.07] p-6 text-sm leading-7 text-sand/85 md:p-8">
          <p className="max-w-3xl">
            The best way to understand Safari Utah is to spend time on the island
            with us. Compare private and small-group options, then book directly
            through the current Safari Utah tour lineup.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/tours/antelope-island#choose-your-tour" className={buttonClasses}>
              Compare and Book Tours
            </Link>
            <Link href="/gallery" className={secondaryButtonClasses}>
              View Gallery
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
