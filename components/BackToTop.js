"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          aria-label="Back to top"
          className="glass-card fixed bottom-6 right-6 z-[80] flex h-14 w-14 items-center justify-center rounded-full text-blue shadow-brand-lg"
        >
          <svg className="absolute inset-0 h-14 w-14 -rotate-90" viewBox="0 0 56 56">
            <circle
              cx="28"
              cy="28"
              r="25"
              fill="none"
              stroke="rgba(0,102,255,0.15)"
              strokeWidth="3"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="25"
              fill="none"
              stroke="#0066FF"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-[1] text-xl font-bold leading-none"
            aria-hidden="true"
          >
            ↑
          </motion.span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
