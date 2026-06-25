"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [cur,setCur]=useState(0);
  const [dir,setDir]=useState(1);
  const [ref,inView]=useInView({triggerOnce:true,threshold:0.08});
  const nav=(d:1|-1)=>{ setDir(d); setCur(c=>(c+d+testimonials.length)%testimonials.length); };
  const t=testimonials[cur];
  const ini=t.name.split(" ").map(n=>n[0]).join("");

  return (
    <section id="testimonials" className="sec" style={{ background:"var(--bg)", position:"relative", overflow:"hidden", transition:"background 0.3s" }}>
      <div style={{ position:"absolute", top:0, left:0, width:"min(360px,60vw)", height:"min(360px,60vw)", background:"rgba(99,102,241,0.04)", borderRadius:"50%", filter:"blur(90px)" }}/>
      <div style={{ position:"absolute", bottom:0, right:0, width:"min(360px,60vw)", height:"min(360px,60vw)", background:"rgba(139,92,246,0.04)", borderRadius:"50%", filter:"blur(90px)" }}/>
      <div className="wrap" style={{ maxWidth:"860px", position:"relative", zIndex:1 }}>
        <div className="sec-center">
          <div><span className="sec-tag"><span className="sec-tag-dot" /> Testimonials</span></div>
          <h2 className="sec-title">What Clients <span className="gradient-text">Say About Me</span></h2>
          <p className="sec-sub">Real feedback from people I&apos;ve had the pleasure of working with.</p>
        </div>
        <motion.div ref={ref} initial={{ opacity:0, y:36 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.55, delay:0.15 }}>
          <div style={{ overflow:"hidden", borderRadius:"20px" }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div key={cur} custom={dir} initial={{ opacity:0, x:dir*70 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:dir*-70 }} transition={{ duration:0.38 }}
                style={{ background:"var(--bg-card)", backdropFilter:"blur(12px)", border:"1px solid var(--border)", borderRadius:"20px", padding:"clamp(20px,4vw,40px)" }}>
                <div style={{ display:"flex", gap:"clamp(14px,3vw,28px)", alignItems:"flex-start", flexWrap:"wrap" }}>
                  <div style={{ width:"clamp(52px,8vw,72px)", height:"clamp(52px,8vw,72px)", borderRadius:"14px", background:"linear-gradient(135deg,#6366F1,#8B5CF6)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:700, fontSize:"clamp(16px,3vw,22px)", color:"white", boxShadow:"0 0 24px rgba(99,102,241,0.35)", flexShrink:0 }}>{ini}</div>
                  <div style={{ flex:1, minWidth:"200px" }}>
                    <div style={{ display:"flex", gap:"3px", marginBottom:"12px" }}>{Array.from({length:t.rating}).map((_,i)=><Star key={i} size={14} color="#FBBF24" fill="#FBBF24"/>)}</div>
                    <div style={{ color:"rgba(99,102,241,0.3)", marginBottom:"8px" }}><Quote size={24}/></div>
                    <blockquote style={{ color:"var(--text-2)", fontSize:"clamp(13px,2vw,15px)", lineHeight:1.78, marginBottom:"18px", fontStyle:"italic" }}>&ldquo;{t.text}&rdquo;</blockquote>
                    <div>
                      <div style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:600, color:"var(--text)", fontSize:"clamp(13px,1.8vw,15px)" }}>{t.name}</div>
                      <div style={{ color:"var(--text-3)", fontSize:"clamp(11px,1.5vw,13px)", marginTop:"2px" }}>{t.role} · <span style={{ color:"#818CF8" }}>{t.company}</span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Controls */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"14px", marginTop:"24px" }}>
            <button onClick={()=>nav(-1)} aria-label="Previous" style={{ width:"38px", height:"38px", borderRadius:"9px", background:"var(--bg-card)", backdropFilter:"blur(12px)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"var(--text-2)" }}><ChevronLeft size={17}/></button>
            <div style={{ display:"flex", gap:"7px" }}>
              {testimonials.map((_,i)=><button key={i} onClick={()=>{setDir(i>cur?1:-1);setCur(i);}} style={{ height:"7px", borderRadius:"999px", border:"none", cursor:"pointer", transition:"all 0.3s", background:i===cur?"#6366F1":"var(--border)", width:i===cur?"22px":"7px" }}/>)}
            </div>
            <button onClick={()=>nav(1)} aria-label="Next" style={{ width:"38px", height:"38px", borderRadius:"9px", background:"var(--bg-card)", backdropFilter:"blur(12px)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", color:"var(--text-2)" }}><ChevronRight size={17}/></button>
          </div>
          {/* Avatar row */}
          <div style={{ display:"flex", justifyContent:"center", gap:"8px", marginTop:"14px", flexWrap:"wrap" }}>
            {testimonials.map((test,i)=>{
              const in2=test.name.split(" ").map(n=>n[0]).join("");
              return (
                <button key={test.id} onClick={()=>{setDir(i>cur?1:-1);setCur(i);}}
                  style={{ width:"36px", height:"36px", borderRadius:"9px", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:700, fontSize:"12px", cursor:"pointer", border:"1px solid var(--border)", transition:"all 0.2s",
                    background:i===cur?"#6366F1":"var(--bg-card)", color:i===cur?"white":"var(--text-3)",
                    boxShadow:i===cur?"0 0 14px rgba(99,102,241,0.4)":"none", transform:i===cur?"scale(1.08)":"scale(1)" }}>
                  {in2}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
