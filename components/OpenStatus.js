"use client";

import { useEffect, useState } from "react";

const HOURS = {
  weekday: { open: 10, close: 21 },
  weekend: { open: 11, close: 22 },
};

export default function OpenStatus() {
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours() + now.getMinutes() / 60;
    const isWeekend = day === 0 || day === 6;
    const { open, close } = isWeekend ? HOURS.weekend : HOURS.weekday;
    setIsOpen(hour >= open && hour < close);
  }, []);

  if (isOpen === null) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
        isOpen ? "bg-emerald-100 text-emerald-700" : "bg-bg-soft text-[#3a4358]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isOpen ? "animate-pulse bg-emerald-500" : "bg-[#8a97ad]"
        }`}
      />
      {isOpen ? "Open now" : "Closed now"}
    </span>
  );
}
