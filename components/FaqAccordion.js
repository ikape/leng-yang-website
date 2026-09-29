"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RevealGroup, RevealItem } from "@/components/Reveal";

const FAQ_ITEMS = [
  {
    icon: "🎚️",
    q: "Can I customize sweetness and ice level?",
    a: "Absolutely — every drink can be made 0–100% sweetness and ice. Just let the team know at the counter or in your order notes.",
  },
  {
    icon: "🥛",
    q: "Do you have dairy-free or non-dairy options?",
    a: "Yes! Most milk teas and slushies can be made with a non-dairy milk alternative on request.",
  },
  {
    icon: "♻️",
    q: "Can I bring my own cup?",
    a: "Yes, bring a clean reusable cup and we'll happily fill it up — it's good for you and the planet.",
  },
  {
    icon: "🎉",
    q: "Do you cater parties or events?",
    a: "We do! Reach out through our Contact page with your event details and headcount, and we'll put together a bubble tea bar for you.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <RevealGroup className="mx-auto flex max-w-[720px] flex-col gap-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <RevealItem key={item.q}>
            <div
              className={`glass-card overflow-hidden rounded-2xl transition-shadow duration-300 ${
                isOpen ? "shadow-brand-lg ring-1 ring-blue/25" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-white/30"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg transition-colors duration-300 ${
                    isOpen ? "bg-blue/15" : "bg-bg-soft"
                  }`}
                >
                  {item.icon}
                </span>
                <span className="flex-1 font-display text-base font-semibold text-ink">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 135 : 0 }}
                  transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-colors duration-300 ${
                    isOpen ? "bg-blue text-white" : "bg-bg-soft text-blue"
                  }`}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="m-0 pb-5 pl-[76px] pr-6 text-[14.5px] leading-relaxed text-[#3a4358]">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
