"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedCounter({ value, suffix = "", duration = 2000 }: { value: string; suffix?: string; duration?: number }) {
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isDecimal = value.includes(".");
  const [cur, setCur] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      setCur((1 - Math.pow(1 - p, 3)) * num);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, num, duration]);
  return <span ref={ref}>{isDecimal ? cur.toFixed(1) : Math.floor(cur)}{suffix}</span>;
}
