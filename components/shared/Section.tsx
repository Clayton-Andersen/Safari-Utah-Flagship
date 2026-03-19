import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ eyebrow, title, subtitle, id, children, className }: Props) {
  return (
    <section id={id} className={`px-4 py-12 md:py-10 ${className ?? ""}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || subtitle) && (
          <header className="mb-4 max-w-2xl space-y-3">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.25em] text-sand/70">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl md:text-4xl text-bone">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm text-sand/80">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
