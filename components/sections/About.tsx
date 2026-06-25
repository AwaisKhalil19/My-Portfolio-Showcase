"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { stats } from "@/lib/data";

function Counter({ value, suffix="" }: { value:string; suffix?:string }) {
  const num = parseFloat(value.replace(/[^0-9.]/g,""));
  const isD = value.includes(".");
  const [cur, setCur] = useState(0);
  const [ref, inView] = useInView({ triggerOnce:true });
  useEffect(() => {
    if (!inView) return;
    const s = Date.now();
    const tick = () => { const p=Math.min((Date.now()-s)/2000,1); setCur((1-Math.pow(1-p,3))*num); if(p<1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }, [inView, num]);
  return <span ref={ref}>{isD ? cur.toFixed(1) : Math.floor(cur)}{suffix}</span>;
}

const cards = [
  { Icon:User, title:"Who I Am", text:"A MERN-stack developer & WordPress Developer based in Pakistan with a love for crafting elegant solutions to complex problems.", accent:"#6366F1" },
  { Icon:Briefcase, title:"What I Do", text:"I build scalable web applications from concept to deployment. My specialty is MERN Stack and Next.js.", accent:"#8B5CF6" },
  { Icon:GraduationCap, title:"My Background", text:"Undergraduate In BBIT with 2+ years of experience. Worked with startups and enterprises, always delivering maintainable code.", accent:"#22D3EE" },
  { Icon:Code2, title:"My Approach", text:"Clean, tested, documented code. Performance by default, accessibility as a necessity, great DX as a competitive edge.", accent:"#6366F1" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.08 });
  return (
    <section id="about" className="sec" style={{ background:"var(--bg-2)", transition:"background 0.3s" }}>
      <style>{`
        #about-stats { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; margin:40px 0 48px; }
        @media(min-width:640px){ #about-stats { grid-template-columns:repeat(4,1fr); gap:16px; margin:48px 0 56px; } }
        #about-cards { display:grid; grid-template-columns:1fr; gap:14px; }
        @media(min-width:640px){ #about-cards { grid-template-columns:1fr 1fr; gap:16px; } }
      `}</style>
      <div className="wrap">
        <div className="sec-center">
          <div><span className="sec-tag"><span className="sec-tag-dot" /> About Me</span></div>
          <h2 className="sec-title">Crafting Digital Experiences with <span className="gradient-text">Purpose & Precision</span></h2>
          <p className="sec-sub">I&apos;m not just a developer — I&apos;m a product-minded engineer who cares about the full journey from wireframe to production.</p>
        </div>
        <div ref={ref} id="about-stats">
          {stats.map((s,i) => (
            <motion.div key={s.label} initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.45, delay:i*0.08 }}
              style={{ background:"var(--bg-card)", backdropFilter:"blur(12px)", border:"1px solid var(--border)", borderRadius:"14px", padding:"clamp(16px,3vw,28px) 16px", textAlign:"center" }}>
              <div className="gradient-text" style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontSize:"clamp(28px,5vw,38px)", fontWeight:700, marginBottom:"5px" }}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div style={{ color:"var(--text-3)", fontSize:"clamp(11px,2vw,13px)" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
        <div id="about-cards">
          {cards.map((c,i) => (
            <motion.div key={c.title} initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.45, delay:0.3+i*0.08 }}
              whileHover={{ boxShadow:`0 0 28px ${c.accent}18` }}
              style={{ background:"var(--bg-card)", backdropFilter:"blur(12px)", border:`1px solid ${c.accent}22`, borderRadius:"18px", padding:"clamp(18px,3vw,28px)", transition:"all 0.3s" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"11px", background:`${c.accent}18`, border:`1px solid ${c.accent}30`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"14px" }}>
                <c.Icon size={20} color={c.accent} />
              </div>
              <h3 style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:600, fontSize:"clamp(15px,2vw,18px)", color:"var(--text)", marginBottom:"8px" }}>{c.title}</h3>
              <p style={{ color:"var(--text-2)", fontSize:"clamp(12px,1.8vw,14px)", lineHeight:1.7 }}>{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
