"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props { tag: string; title: string; highlight?: string; subtitle?: string; }

export default function SectionHeading({ tag, title, highlight, subtitle }: Props) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const parts = highlight ? title.split(highlight) : [title];
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-indigo-500/20 text-indigo-400 text-xs font-mono tracking-widest uppercase mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {tag}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
        {highlight ? <>{parts[0]}<span className="gradient-text">{highlight}</span>{parts[1]}</> : title}
      </h2>
      {subtitle && <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}
