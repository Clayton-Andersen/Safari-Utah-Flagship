import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  children: ReactNode;
  className?: string;
  headingLevel?: "h1" | "h2";
};

export default function Section({
  eyebrow,
  title,
  subtitle,
  id,
  children,
  className,
  headingLevel = "h2",
}: Props) {
  const HeadingTag = headingLevel;

  return (
    <section id={id} className={`scroll-mt-28 px-4 py-12 md:scroll-mt-32 md:py-10 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || subtitle) && (
          <header className="mb-4 max-w-2xl space-y-3">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.25em] text-sand/70">
                {eyebrow}
              </p>
            )}
            {title && (
              <HeadingTag className="font-serif text-3xl text-bone md:text-4xl">
                {title}
              </HeadingTag>
            )}
            {subtitle && <p className="text-sm text-sand/80">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
