"use client";

import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    icon: "🎂",
    title: "Birthday Reward",
    body: "Sign up and get a free drink on us during your birthday month.",
  },
  {
    icon: "🎃",
    title: "Seasonal Drop",
    body: "Pumpkin Spice Swirl is back for a limited time — grab it before it's gone.",
  },
  {
    icon: "⭐",
    title: "Loyalty Rewards",
    body: "Earn a stamp with every cup. Ten stamps, one free drink of your choice.",
  },
  {
    icon: "🎁",
    title: "Gift Cards",
    body: "Treat a friend (or yourself) to Leng Yang, any amount, any occasion.",
    cta: true,
  },
];

export default function RewardsCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const goTo = (i) => setCurrent(i);

  return (
    <div className="mx-auto max-w-[560px]">
      <div className="relative min-h-[260px] rounded-brand bg-gradient-to-br from-bg-soft to-white shadow-brand">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.title}
            className={`absolute inset-0 flex flex-col items-center justify-center px-8 py-10 text-center transition-[opacity,transform] duration-500 ${
              i === current
                ? "pointer-events-auto opacity-100 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]"
                : "pointer-events-none translate-x-6 scale-[0.97] opacity-0"
            }`}
          >
            <div className="mb-3 text-[44px]">{slide.icon}</div>
            <h3 className="mb-2 text-[22px]">{slide.title}</h3>
            <p className="m-0 max-w-[400px]">{slide.body}</p>
            {slide.cta && (
              <a
                href="#"
                className="mt-4 inline-block rounded-full bg-blue px-[22px] py-2.5 font-display text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,102,255,0.35)] transition hover:-translate-y-0.5 hover:bg-blue-dark"
              >
                Get a Gift Card
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-2.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 w-2.5 rounded-full transition-transform ${
              i === current ? "scale-[1.3] bg-blue" : "bg-bg-soft"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
