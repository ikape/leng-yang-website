"use client";

import { motion } from "framer-motion";

const ICON_MOTION = {
  bounce: { y: [0, -6, 0] },
  swing: { rotate: [0, -8, 8, -4, 0] },
  wiggle: { rotate: [0, -10, 10, -6, 0] },
};

export default function VisitCard({
  icon,
  iconMotion = "bounce",
  title,
  delay = 0,
  children,
}) {
  const animate = ICON_MOTION[iconMotion] || ICON_MOTION.bounce;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card rounded-brand p-7"
    >
      <div className="relative mb-4 flex h-14 w-14 items-center justify-center">
        <span className="animate-ping-slow absolute inset-0 rounded-2xl bg-blue/25" />
        <motion.div
          animate={animate}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            repeatDelay: 0.6,
            ease: "easeInOut",
          }}
          className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue to-blue-dark text-2xl shadow-[0_8px_20px_rgba(0,102,255,0.35)]"
        >
          {icon}
        </motion.div>
      </div>
      <h3 className="mb-2 text-lg">{title}</h3>
      {children}
    </motion.div>
  );
}
