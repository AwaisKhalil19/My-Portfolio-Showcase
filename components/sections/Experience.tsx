"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

const tc:Record<string,string>={"React":"#61DAFB","Next.js":"#818CF8","TypeScript":"#3B82F6","Node.js":"#22C55E","MongoDB":"#4ADE80","PostgreSQL":"#60A5FA","Redis":"#F87171","Docker":"#60A5FA","GraphQL":"#F472B6","AWS":"#FB923C","Stripe":"#A78BFA","Express":"#FBBF24","Redux":"#A78BFA","Prisma":"#2DD4BF","Socket.io":"#94A3B8","Python":"#3776AB","SASS":"#F472B6","Jest":"#C084FC","Webpack":"#60A5FA","Prometheus":"#F87171","Grafana":"#FB923C","C++":"#60A5FA","Java":"#FB923C","Algorithms":"#818CF8","Data Structures":"#22D3EE"};

function Card({ exp }:{ exp:typeof experiences[0] }) {
  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"10px", marginBottom:"10px", flexWrap:"wrap" }}>
        <div>
          <h3 style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:600, fontSize:"clamp(13px,2vw,16px)", color:"var(--text)", marginBottom:"3px" }}>{exp.role}</h3>
          {/* <div style={{ display:"flex", alignItems:"center", gap:"4px", color:"#818CF8", fontSize:"clamp(11px,1.6vw,13px)", fontWeight:500 }}><MapPin size={11}/>{exp.company}</div> */}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"3px", color:"var(--text-4)", fontSize:"10px", fontFamily:"monospace", whiteSpace:"nowrap", flexShrink:0 }}><Calendar size={10}/>{exp.period}</div>
      </div>
      <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"5px", marginBottom:"12px" }}>
        {exp.description.map((d,i)=><li key={i} style={{ display:"flex", gap:"6px", color:"var(--text-2)", fontSize:"clamp(11px,1.6vw,12px)", lineHeight:1.6 }}><span style={{ color:"#6366F1", flexShrink:0, marginTop:"1px" }}>›</span>{d}</li>)}
      </ul>
      <div style={{ display:"flex", flexWrap:"wrap", gap:"5px" }}>
        {exp.technologies.map(t=><span key={t} style={{ padding:"2px 7px", borderRadius:"5px", fontSize:"10px", fontFamily:"monospace", fontWeight:500, background:`${tc[t]||"#6366F1"}15`, color:tc[t]||"#818CF8", border:`1px solid ${tc[t]||"#6366F1"}20` }}>{t}</span>)}
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref,inView]=useInView({triggerOnce:true,threshold:0.04});
  return (
    <section id="experience" className="sec" style={{ background:"var(--bg-2)", transition:"background 0.3s" }}>
      <style>{`
        .ex-desktop { display:none; }
        .ex-mobile  { display:flex; flex-direction:column; }
        @media(min-width:900px){ .ex-desktop { display:grid; grid-template-columns:1fr 56px 1fr; position:relative; } .ex-mobile { display:none; } }
        .ex-card { background:var(--bg-card); backdrop-filter:blur(12px); border:1px solid var(--border); border-radius:15px; padding:clamp(16px,2.5vw,24px); transition:border-color 0.3s; }
        .ex-card:hover { border-color:rgba(99,102,241,0.25); }
      `}</style>
      <div className="wrap">
        <div className="sec-center">
          <div><span className="sec-tag"><span className="sec-tag-dot" /> Experience</span></div>
          <h2 className="sec-title">My Professional <span className="gradient-text">Journey</span></h2>
          <p className="sec-sub">Timeline of roles, companies, and milestones that shaped who I am as an engineer.</p>
        </div>
        <div ref={ref} style={{ marginTop:"48px" }}>
          {/* Desktop alternating */}
          <div className="ex-desktop">
            <div style={{ position:"absolute", left:"50%", top:0, bottom:0, width:"1px", background:"var(--border)", transform:"translateX(-50%)" }} />
            {experiences.map((exp,i)=>{
              const isL=i%2===0;
              return (
                <motion.div key={exp.id} style={{ display:"contents" }}>
                  <div style={{ padding:"0 24px 40px 0", display:"flex", justifyContent:"flex-end" }}>
                    {isL&&<motion.div className="ex-card" style={{ maxWidth:"420px", width:"100%" }} initial={{ opacity:0, x:-28 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.45, delay:i*0.12 }}><Card exp={exp}/></motion.div>}
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", alignItems:"center", paddingBottom:"40px" }}>
                    <motion.div initial={{ scale:0 }} animate={inView?{scale:1}:{}} transition={{ duration:0.35, delay:i*0.12+0.08, type:"spring" }}
                      style={{ width:"40px", height:"40px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, zIndex:2, position:"relative",
                        background:exp.type==="work"?"#6366F1":"#8B5CF6", border:`2px solid ${exp.type==="work"?"#818CF8":"#A78BFA"}`,
                        boxShadow:`0 0 18px ${exp.type==="work"?"rgba(99,102,241,0.4)":"rgba(139,92,246,0.4)"}` }}>
                      {exp.type==="work"?<Briefcase size={16} color="white"/>:<GraduationCap size={16} color="white"/>}
                    </motion.div>
                    {i<experiences.length-1&&<div style={{ width:"1px", flex:1, marginTop:"6px", background:"linear-gradient(180deg,#6366F1,#8B5CF6,#22D3EE)", minHeight:"30px" }}/>}
                  </div>
                  <div style={{ padding:"0 0 40px 24px" }}>
                    {!isL&&<motion.div className="ex-card" style={{ maxWidth:"420px", width:"100%" }} initial={{ opacity:0, x:28 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.45, delay:i*0.12 }}><Card exp={exp}/></motion.div>}
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Mobile stacked */}
          <div className="ex-mobile">
            {experiences.map((exp,i)=>(
              <motion.div key={exp.id} initial={{ opacity:0, y:18 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.4, delay:i*0.09 }}
                style={{ display:"flex", gap:"12px", marginBottom:"16px" }}>
                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                  <div style={{ width:"32px", height:"32px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", background:exp.type==="work"?"#6366F1":"#8B5CF6", border:`2px solid ${exp.type==="work"?"#818CF8":"#A78BFA"}`, flexShrink:0 }}>
                    {exp.type==="work"?<Briefcase size={13} color="white"/>:<GraduationCap size={13} color="white"/>}
                  </div>
                  {i<experiences.length-1&&<div style={{ width:"1px", flex:1, marginTop:"6px", background:"linear-gradient(180deg,#6366F1,#8B5CF6)", minHeight:"24px" }}/>}
                </div>
                <div className="ex-card" style={{ flex:1, marginBottom:i<experiences.length-1?"0":"0" }}>
                  <Card exp={exp}/>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
