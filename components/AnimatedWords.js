"use client";

import { motion } from "framer-motion";

export default function AnimatedWords({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.08,
  duration = 0.5,
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word = {
    hidden: { opacity: 0, y: 20, rotate: -4 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
    >
      {words.map((w, i) => (
        <motion.span key={i} className="inline-block" variants={word}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
