"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
const acc=["#6366F1","#8B5CF6","#22D3EE","#6366F1"];
export default function Services() {
  const [ref,inView]=useInView({triggerOnce:true,threshold:0.08});
  return (
    <section id="services" className="sec" style={{ background:"var(--bg)", position:"relative", overflow:"hidden", transition:"background 0.3s" }}>
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"min(500px,80vw)", height:"min(350px,60vw)", background:"rgba(99,102,241,0.04)", borderRadius:"50%", filter:"blur(100px)" }} />
      <style>{`
        #svc-grid { display:grid; grid-template-columns:1fr; gap:14px; margin-top:48px; }
        @media(min-width:640px){ #svc-grid { grid-template-columns:1fr 1fr; gap:16px; } }
        .svc-card { background:var(--bg-card); backdrop-filter:blur(12px); border-radius:18px; padding:clamp(20px,3vw,32px); transition:all 0.3s; }
        .svc-feat { display:flex; align-items:center; gap:10px; color:var(--text-2); font-size:clamp(12px,1.8vw,14px); }
      `}</style>
      <div className="wrap" style={{ position:"relative", zIndex:1 }}>
        <div className="sec-center">
          <div><span className="sec-tag"><span className="sec-tag-dot" /> Services</span></div>
          <h2 className="sec-title">What I <span className="gradient-text">Bring to the Table</span></h2>
          <p className="sec-sub">Specialized services from initial concept to production deployment.</p>
        </div>
        <div ref={ref} id="svc-grid">
          {services.map((s,i)=>(
            <motion.div key={s.id} className="svc-card" initial={{ opacity:0, y:26 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.45, delay:i*0.1 }}
              whileHover={{ boxShadow:`0 0 36px ${acc[i]}14` }}
              style={{ border:`1px solid ${acc[i]}22` }}>
              <div style={{ width:"clamp(44px,6vw,56px)", height:"clamp(44px,6vw,56px)", borderRadius:"13px", background:`${acc[i]}15`, border:`1px solid ${acc[i]}28`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"clamp(20px,3vw,26px)", marginBottom:"16px" }}>{s.icon}</div>
              <h3 style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:700, fontSize:"clamp(16px,2.5vw,20px)", color:"var(--text)", marginBottom:"10px" }}>{s.title}</h3>
              <p style={{ color:"var(--text-2)", fontSize:"clamp(12px,1.8vw,14px)", lineHeight:1.7, marginBottom:"16px" }}>{s.description}</p>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"9px", marginBottom:"20px" }}>
                {s.features.map(f=>(
                  <li key={f} className="svc-feat">
                    <span style={{ width:"18px", height:"18px", borderRadius:"50%", background:`${acc[i]}15`, border:`1px solid ${acc[i]}28`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><Check size={10} color={acc[i]}/></span>{f}
                  </li>
                ))}
              </ul>
              <button onClick={()=>document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})}
                style={{ display:"inline-flex", alignItems:"center", gap:"5px", fontSize:"13px", fontWeight:600, color:acc[i], background:"none", border:"none", cursor:"pointer", fontFamily:"inherit", padding:0 }}>
                Get Started <ArrowRight size={13}/>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
