"use client";

import { motion } from "framer-motion";

const SPARKLES = [
  { emoji: "✨", top: "6%", left: "8%", delay: 0, duration: 3.2 },
  { emoji: "🧋", top: "62%", left: "82%", delay: 0.6, duration: 3.8 },
  { emoji: "✨", top: "78%", left: "12%", delay: 1.2, duration: 3.4 },
];

export default function AnimatedCup() {
  return (
    <div className="relative mx-auto flex h-[min(70vw,280px)] w-[min(70vw,280px)] items-center justify-center">
      <div className="absolute h-full w-full rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_70%)]" />

      {SPARKLES.map((s, i) => (
        <motion.span
          key={i}
          className="absolute select-none text-3xl"
          style={{ top: s.top, left: s.left }}
          animate={{ y: [0, -14, 0], opacity: [0.5, 1, 0.5], rotate: [0, 12, 0] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {s.emoji}
        </motion.span>
      ))}

      <motion.div
        animate={{ y: [0, -16, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08, rotate: 0 }}
        className="relative z-[1] text-[min(38vw,150px)] leading-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
      >
        🧋
      </motion.div>
    </div>
  );
}
