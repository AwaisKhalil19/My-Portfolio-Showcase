"use client";
import { motion, useScroll, useSpring } from "framer-motion";
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", zIndex: 100, transformOrigin: "left", scaleX, background: "linear-gradient(90deg,#6366F1,#8B5CF6,#22D3EE)" }} />
  );
}
