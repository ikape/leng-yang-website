"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[110] h-[3px] origin-left bg-gradient-to-r from-blue via-[#4a90ff] to-blue-dark"
    />
  );
}
