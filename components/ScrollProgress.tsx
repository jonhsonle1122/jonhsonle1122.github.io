"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-40 h-[3px] origin-left bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500"
      style={{ scaleX }}
    />
  );
}

