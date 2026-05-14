"use client";

import { motion } from "framer-motion";

// Fixed-position animated background — slow-drifting blue gradient orbs.
// Sits behind all content as ambient atmosphere.
export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-electric/15 blur-[140px]"
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]"
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
