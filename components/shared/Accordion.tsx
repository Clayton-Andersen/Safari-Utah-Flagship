"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type AccordionItem = {
  question: string;
  answer: ReactNode;
};

type Props = {
  items: AccordionItem[];
};

export default function Accordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const buttonId = `accordion-button-${i}`;
        const panelId = `accordion-panel-${i}`;

        return (
          <div
            key={item.question}
            className="rounded-2xl border border-sand/20 bg-night/40"
          >
            <h2>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="font-serif text-bone">{item.question}</span>
                <span className="text-sand/60" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h2>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-4 text-sm leading-7 text-sand/80"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
