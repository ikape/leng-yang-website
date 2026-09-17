"use client";

import { useState } from "react";

export default function Newsletter() {
  const [note, setNote] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setNote("Thanks for joining! 🎉 See you at the counter.");
    e.target.reset();
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="mt-5 flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          placeholder="you@email.com"
          aria-label="Email address"
          required
          className="flex-1 rounded-full border-none px-5 py-3.5 font-body text-[15px] outline-none focus:shadow-[0_0_0_3px_rgba(255,255,255,0.5)]"
        />
        <button
          type="submit"
          className="rounded-full bg-white px-7 py-3.5 font-display text-base font-bold text-blue shadow-[0_10px_24px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5"
        >
          Subscribe
        </button>
      </form>
      <p
        role="status"
        aria-live="polite"
        className="m-0 mt-3.5 min-h-[20px] text-sm font-semibold text-[#baffd6]"
      >
        {note}
      </p>
    </>
  );
}
