"use client";
import { motion } from "framer-motion";
import { Code2, Mail } from "lucide-react";
const socials=[{label:"GitHub",href:"https://github.com/AwaisKhalil19/",path:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},{label:"LinkedIn",href:"https://www.linkedin.com/in/awais-khalil-55abbb372/",path:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"},];
export default function Footer() {
  return (
    <footer style={{background:"var(--bg)",borderTop:"1px solid var(--border)",padding:"48px 0",transition:"background 0.3s"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"0 32px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"20px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <div style={{width:"28px",height:"28px",borderRadius:"7px",background:"linear-gradient(135deg,#6366F1,#8B5CF6)",display:"flex",alignItems:"center",justifyContent:"center"}}><Code2 size={13} color="white"/></div>
          <span style={{fontFamily:"'Space Grotesk',system-ui,sans-serif",fontWeight:700,background:"linear-gradient(135deg,#6366F1,#22D3EE)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>Awais Khalil</span>
        </div>
        <p style={{color:"var(--text-3)",fontSize:"13px",display:"flex",alignItems:"center",gap:"5px"}}>{}</p>
        <div style={{display:"flex",gap:"8px"}}>
          {socials.map(({href,label,path})=>(
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" whileHover={{scale:1.1,y:-2}} aria-label={label}
              style={{width:"32px",height:"32px",borderRadius:"8px",background:"var(--bg-card)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--icon-dim)",textDecoration:"none"}}>
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d={path}/></svg>
            </motion.a>
          ))}
          <motion.a href="mailto:awaiskhalil476@gmail.com" whileHover={{scale:1.1,y:-2}} aria-label="Email"
            style={{width:"32px",height:"32px",borderRadius:"8px",background:"var(--bg-card)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--icon-dim)"}}>
            <Mail size={13}/>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
