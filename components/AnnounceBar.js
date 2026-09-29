"use client";

import { useEffect, useState } from "react";

export default function AnnounceBar() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("lengyang_announce_dismissed") === "1") {
      setDismissed(true);
    }
  }, []);

  const dismiss = () => {
    setDismissed(true);
    localStorage.setItem("lengyang_announce_dismissed", "1");
  };

  return (
    <div
      className={`overflow-hidden bg-ink text-white transition-[max-height,padding] duration-300 ${
        dismissed ? "max-h-0" : "max-h-20 sm:max-h-11"
      }`}
    >
      <div className="relative mx-auto flex w-full max-w-[1160px] items-center justify-center gap-4 px-6 py-2.5">
        <p className="m-0 max-w-[calc(100%-2rem)] text-center text-[13.5px] font-semibold leading-snug text-white sm:max-w-none">
          🎉 Grand Opening Special — 20% off your first order with code{" "}
          <strong className="text-[#7fb0ff]">WELCOME20</strong>
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 text-xl leading-none text-slate-300 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
}
