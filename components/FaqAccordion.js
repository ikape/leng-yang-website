"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Can I customize sweetness and ice level?",
    a: "Absolutely — every drink can be made 0–100% sweetness and ice. Just let the team know at the counter or in your order notes.",
  },
  {
    q: "Do you have dairy-free or non-dairy options?",
    a: "Yes! Most milk teas and slushies can be made with a non-dairy milk alternative on request.",
  },
  {
    q: "Can I bring my own cup?",
    a: "Yes, bring a clean reusable cup and we'll happily fill it up — it's good for you and the planet.",
  },
  {
    q: "Do you cater parties or events?",
    a: "We do! Reach out through our Contact page with your event details and headcount, and we'll put together a bubble tea bar for you.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mx-auto flex max-w-[720px] flex-col gap-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl bg-white shadow-brand"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-ink"
            >
              {item.q}
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-all duration-300 ${
                  isOpen ? "rotate-[135deg] bg-blue text-white" : "bg-bg-soft text-blue"
                }`}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
              style={{ maxHeight: isOpen ? "200px" : "0px" }}
            >
              <p className="m-0 px-6 pb-5 text-[14.5px] text-[#3a4358]">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
