"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";
export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 700); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          style={{ position: "fixed", inset: 0, zIndex: 200, background: "#0A0F1E", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.6, ease: "backOut" }}
            style={{ width: "80px", height: "80px", borderRadius: "20px", background: "linear-gradient(135deg,#6366F1,#8B5CF6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 40px rgba(99,102,241,0.4)", marginBottom: "24px" }}>
            <Code2 size={36} color="white" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "24px", fontWeight: 700, background: "linear-gradient(135deg,#6366F1,#22D3EE)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: "24px" }}>
            Awais Khalil
          </motion.div>
          <div style={{ display: "flex", gap: "8px" }}>
            {[0, 1, 2].map(i => (
              <motion.div key={i} animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#6366F1" }} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
