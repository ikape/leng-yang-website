"use client";

import { motion } from "framer-motion";
import { InstagramIcon } from "@/components/SocialIcons";

export default function GalleryTile({ emoji, label, gradient, rotate = 0, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.03 }}
      className={`group relative aspect-square overflow-hidden rounded-[18px] bg-gradient-to-br ${gradient} text-white`}
    >
      <motion.div
        className="flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-center font-display text-sm font-bold"
        whileHover={{ scale: 1.08, rotate }}
        transition={{ type: "spring", stiffness: 260, damping: 16 }}
      >
        <span className="text-[34px]">{emoji}</span>
        {label}
      </motion.div>

      <div className="glass-dark absolute inset-x-2 bottom-2 flex translate-y-[130%] items-center justify-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <InstagramIcon className="h-3.5 w-3.5" />
        View post
      </div>
    </motion.div>
  );
}
