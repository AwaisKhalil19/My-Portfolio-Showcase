"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/lib/data";

type Cat = "all"|"frontend"|"backend"|"database"|"tools";
const cats: {id:Cat;label:string;emoji:string}[] = [
  {id:"all",label:"All",emoji:"🌟"},{id:"frontend",label:"Frontend",emoji:"🎨"},
  {id:"backend",label:"Backend",emoji:"⚙️"},{id:"database",label:"Database",emoji:"🗄️"},
  {id:"tools",label:"Tools",emoji:"🔧"},
];

export default function Skills() {
  const [active, setActive] = useState<Cat>("all");
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.05 });
  const filtered = active==="all" ? skills : skills.filter(s=>s.category===active);

  return (
    <section id="skills" className="sec" style={{ background:"var(--bg)", position:"relative", overflow:"hidden", transition:"background 0.3s" }}>
      <div style={{ position:"absolute", top:"10%", left:"15%", width:"min(280px,50vw)", height:"min(280px,50vw)", background:"rgba(99,102,241,0.05)", borderRadius:"50%", filter:"blur(70px)" }} />
      <div style={{ position:"absolute", bottom:"10%", right:"15%", width:"min(280px,50vw)", height:"min(280px,50vw)", background:"rgba(139,92,246,0.05)", borderRadius:"50%", filter:"blur(70px)" }} />
      <style>{`
        #skills-grid { display:grid; grid-template-columns:1fr; gap:12px; }
        @media(min-width:480px){ #skills-grid { grid-template-columns:1fr 1fr; } }
        @media(min-width:900px){ #skills-grid { grid-template-columns:repeat(3,1fr); } }
        #skills-filters { display:flex; flex-wrap:wrap; justify-content:center; gap:8px; margin:32px 0 40px; }
        .sk-card { background:var(--bg-card); backdrop-filter:blur(12px); border:1px solid var(--border); border-radius:14px; padding:16px; transition:all 0.3s; }
        .sk-card:hover { border-color:rgba(99,102,241,0.3); box-shadow:0 0 20px rgba(99,102,241,0.1); }
      `}</style>
      <div className="wrap" style={{ position:"relative", zIndex:1 }}>
        <div className="sec-center">
          <div><span className="sec-tag"><span className="sec-tag-dot" /> Technical Skills</span></div>
          <h2 className="sec-title">Tools & Technologies I <span className="gradient-text">Master</span></h2>
          <p className="sec-sub">A curated collection of tools I use to build exceptional digital products.</p>
        </div>
        <div id="skills-filters">
          {cats.map(c => (
            <motion.button key={c.id} onClick={()=>setActive(c.id)} whileHover={{scale:1.05}} whileTap={{scale:0.95}}
              style={{ display:"inline-flex", alignItems:"center", gap:"5px", padding:"7px 14px", borderRadius:"10px", fontSize:"13px", fontWeight:500, cursor:"pointer", border:"none", fontFamily:"inherit", transition:"all 0.2s",
                background:active===c.id?"#6366F1":"var(--bg-card)", color:active===c.id?"white":"var(--text-2)",
                boxShadow:active===c.id?"0 0 18px rgba(99,102,241,0.4)":"none", backdropFilter:"blur(12px)" }}>
              {c.emoji} {c.label}
            </motion.button>
          ))}
        </div>
        <div ref={ref} id="skills-grid">
          <AnimatePresence>
            {filtered.map((sk,i) => (
              <motion.div key={sk.name} className="sk-card" initial={{ opacity:0, y:18 }} animate={inView?{opacity:1,y:0}:{}} exit={{ opacity:0, scale:0.92 }} transition={{ duration:0.35, delay:Math.min(i*0.05,0.4) }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"12px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <div style={{ width:"36px", height:"36px", borderRadius:"9px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"15px", background:`${sk.color}15`, border:`1px solid ${sk.color}28`, flexShrink:0 }}>{sk.icon}</div>
                    <div>
                      <div style={{ color:"var(--text)", fontWeight:500, fontSize:"13px" }}>{sk.name}</div>
                      <div style={{ color:"var(--text-3)", fontSize:"10px", textTransform:"capitalize", marginTop:"1px" }}>{sk.category}</div>
                    </div>
                  </div>
                  <span style={{ fontFamily:"monospace", fontWeight:600, fontSize:"12px", color:sk.color }}>{sk.level}%</span>
                </div>
                <div style={{ height:"5px", background:"var(--border)", borderRadius:"999px", overflow:"hidden" }}>
                  <motion.div initial={{ width:0 }} animate={inView?{width:`${sk.level}%`}:{}} transition={{ duration:1.1, delay:0.25+i*0.04, ease:"easeOut" }}
                    style={{ height:"100%", borderRadius:"999px", background:`linear-gradient(90deg,${sk.color}70,${sk.color})` }} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
