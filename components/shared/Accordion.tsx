"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type Props = {
  items: AccordionItem[];
};

export default function Accordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-sand/20 rounded-2xl bg-night/40"
        >
          <button
            className="w-full text-left px-5 py-4 flex justify-between items-center"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-serif text-bone">{item.question}</span>
            <span className="text-sand/50">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>

          {openIndex === i && (
            <div className="px-5 pb-4 text-sm text-sand/80">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
