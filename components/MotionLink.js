"use client";

import { motion } from "framer-motion";

export default function MotionLink({ href, className, children, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
