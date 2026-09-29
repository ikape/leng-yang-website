"use client";

import { motion } from "framer-motion";

export default function MenuCard({ icon, title, body, accent, rotate = 0, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.94, rotate }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -8,
        rotate: 0,
        scale: 1.04,
        transition: { type: "spring", stiffness: 260, damping: 18 },
      }}
      whileTap={{ scale: 0.97 }}
      className="glass-card rounded-brand px-6 py-8 text-center"
    >
      <motion.div
        whileHover={{ rotate: [0, -12, 10, -8, 6, 0], scale: 1.15 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full text-3xl ${accent}`}
      >
        {icon}
      </motion.div>
      <h3 className="mb-2 text-xl">{title}</h3>
      <p className="m-0 text-[14.5px]">{body}</p>
    </motion.div>
  );
}
