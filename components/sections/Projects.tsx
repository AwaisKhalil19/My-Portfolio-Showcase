// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { ExternalLink, Star } from "lucide-react";
// import { projects } from "@/lib/data";

// const filters=["All","Next.js","React","Node.js"];
// const emojis=["📊","🛒","🤖","💬","🔧","📱"];
// const gradBgs=["linear-gradient(135deg,rgba(99,102,241,0.25),rgba(139,92,246,0.1))","linear-gradient(135deg,rgba(34,211,238,0.2),rgba(99,102,241,0.1))","linear-gradient(135deg,rgba(139,92,246,0.22),rgba(34,211,238,0.08))","linear-gradient(135deg,rgba(99,102,241,0.18),rgba(34,211,238,0.08))","linear-gradient(135deg,rgba(139,92,246,0.18),rgba(99,102,241,0.08))","linear-gradient(135deg,rgba(34,211,238,0.18),rgba(139,92,246,0.08))"];
// const GH="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";
// const tc:Record<string,string>={"React":"#61DAFB","Next.js":"#818CF8","TypeScript":"#3B82F6","Node.js":"#22C55E","MongoDB":"#4ADE80","PostgreSQL":"#60A5FA","Tailwind CSS":"#22D3EE","Redis":"#F87171","Docker":"#60A5FA","GraphQL":"#F472B6","AWS":"#FB923C","Stripe":"#A78BFA","Express":"#FBBF24","Redux":"#A78BFA","OpenAI":"#4ADE80","Prisma":"#2DD4BF","Socket.io":"#94A3B8","AWS S3":"#FB923C","React Native":"#60A5FA","Chart.js":"#FB923C"};

// export default function Projects() {
//   const [filter,setFilter]=useState("All");
//   const [ref,inView]=useInView({triggerOnce:true,threshold:0.04});
//   const filtered=filter==="All"?projects:projects.filter(p=>p.category===filter);
//   return (
//     <section id="projects" className="sec" style={{ background:"var(--bg-2)", transition:"background 0.3s" }}>
//       <style>{`
//         #proj-grid { display:grid; grid-template-columns:1fr; gap:16px; }
//         @media(min-width:640px){ #proj-grid { grid-template-columns:1fr 1fr; } }
//         @media(min-width:1024px){ #proj-grid { grid-template-columns:repeat(3,1fr); } }
//         #proj-filters { display:flex; justify-content:center; gap:8px; margin:32px 0 40px; flex-wrap:wrap; }
//         .pr-card { background:var(--bg-card); backdrop-filter:blur(12px); border:1px solid var(--border); border-radius:18px; overflow:hidden; transition:all 0.3s; }
//         .pr-card:hover { border-color:rgba(99,102,241,0.3); box-shadow:0 6px 32px rgba(99,102,241,0.12); }
//         .pr-card:hover .pr-ov { opacity:1 !important; }
//         .pr-card:hover .pr-title { color:#a5b4fc !important; }
//       `}</style>
//       <div className="wrap">
//         <div className="sec-center">
//           <div><span className="sec-tag"><span className="sec-tag-dot" /> My Projects</span></div>
//           <h2 className="sec-title">Work That <span className="gradient-text">Speaks for Itself</span></h2>
//           <p className="sec-sub">A selection of projects I&apos;ve built — each solving a real problem with thoughtful engineering.</p>
//         </div>
//         <div id="proj-filters">
//           {filters.map(f=>(
//             <motion.button key={f} onClick={()=>setFilter(f)} whileHover={{scale:1.05}} whileTap={{scale:0.95}}
//               style={{ padding:"7px 18px", borderRadius:"10px", fontSize:"13px", fontWeight:500, cursor:"pointer", border:"none", fontFamily:"inherit", transition:"all 0.2s",
//                 background:filter===f?"#6366F1":"var(--bg-card)", color:filter===f?"white":"var(--text-2)",
//                 boxShadow:filter===f?"0 0 18px rgba(99,102,241,0.4)":"none", backdropFilter:"blur(12px)" }}>
//               {f}
//             </motion.button>
//           ))}
//         </div>
//         <div ref={ref} id="proj-grid">
//           <AnimatePresence>
//             {filtered.map((p,i)=>(
//               <motion.div key={p.id} className="pr-card" initial={{ opacity:0, y:26, scale:0.96 }} animate={inView?{opacity:1,y:0,scale:1}:{}} exit={{ opacity:0, scale:0.95 }} transition={{ duration:0.38, delay:Math.min(i*0.07,0.35) }}>
//                 <div style={{ position:"relative", height:"clamp(160px,25vw,200px)", background:gradBgs[parseInt(p.id)-1], overflow:"hidden" }}>
//                   <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"6px" }}>
//                     <span style={{ fontSize:"clamp(36px,6vw,48px)" }}>{emojis[parseInt(p.id)-1]}</span>
//                     <span style={{ color:"var(--text-4)", fontSize:"10px", fontFamily:"monospace" }}>{p.category}</span>
//                   </div>
//                   {p.featured&&<div style={{ position:"absolute", top:"10px", left:"10px", display:"inline-flex", alignItems:"center", gap:"4px", padding:"3px 9px", borderRadius:"7px", background:"rgba(99,102,241,0.85)", color:"white", fontSize:"10px", fontWeight:600 }}><Star size={9} fill="currentColor"/> Featured</div>}
//                   <div className="pr-ov" style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,0.88),transparent)", opacity:0, transition:"opacity 0.3s", display:"flex", alignItems:"flex-end", justifyContent:"center", paddingBottom:"14px", gap:"8px" }}>
//                     {p.liveUrl&&<a href={p.liveUrl} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{ display:"inline-flex", alignItems:"center", gap:"5px", padding:"6px 12px", borderRadius:"7px", background:"#6366F1", color:"white", fontSize:"11px", fontWeight:600, textDecoration:"none" }}><ExternalLink size={11}/> Live Demo</a>}
//                     {p.githubUrl&&<a href={p.githubUrl} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{ display:"inline-flex", alignItems:"center", gap:"5px", padding:"6px 12px", borderRadius:"7px", background:"rgba(255,255,255,0.14)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.2)", color:"white", fontSize:"11px", fontWeight:600, textDecoration:"none" }}><svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d={GH}/></svg> Code</a>}
//                   </div>
//                 </div>
//                 <div style={{ padding:"clamp(14px,2.5vw,20px)" }}>
//                   <h3 className="pr-title" style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:600, fontSize:"clamp(14px,2vw,17px)", color:"var(--text)", marginBottom:"7px", transition:"color 0.2s" }}>{p.title}</h3>
//                   <p style={{ color:"var(--text-3)", fontSize:"clamp(11px,1.6vw,13px)", lineHeight:1.65, marginBottom:"12px", display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical", overflow:"hidden" }}>{p.description}</p>
//                   <div style={{ display:"flex", flexWrap:"wrap", gap:"5px" }}>
//                     {p.technologies.slice(0,4).map(t=>(
//                       <span key={t} style={{ padding:"2px 7px", borderRadius:"5px", fontSize:"10px", fontFamily:"monospace", fontWeight:500, background:`${tc[t]||"#6366F1"}18`, color:tc[t]||"#818CF8", border:`1px solid ${tc[t]||"#6366F1"}22` }}>{t}</span>
//                     ))}
//                     {p.technologies.length>4&&<span style={{ color:"var(--text-4)", fontSize:"10px", padding:"2px 7px" }}>+{p.technologies.length-4}</span>}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }
