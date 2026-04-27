"use client";

import { motion } from "framer-motion";

export default function AnimatedGridBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="grid-surface absolute inset-0 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent)]"
      />
      <motion.div
        animate={{ rotate: [0, 3, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-[-12%] top-[-10%] h-[44rem] rounded-[42rem] bg-[conic-gradient(from_160deg_at_50%_50%,rgba(83,230,255,0.12),rgba(122,124,255,0.08),rgba(255,79,216,0.12),rgba(83,230,255,0.12))] blur-3xl"
      />
    </div>
  );
}
