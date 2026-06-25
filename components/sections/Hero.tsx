"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, MoveLeft, Sparkles } from "lucide-react";

const roles = ["WordPress Developer","MERN Stack Expert","Next.js Specialist","API Architect","UI/UX Implementation"];
const socialLinks = [
  { label:"GitHub",    href:"https://github.com/AwaisKhalil19/",   path:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
  { label:"LinkedIn",  href:"https://www.linkedin.com/in/awais-khalil-55abbb372/", path:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
  // { label:"Twitter/X", href:"https://twitter.com",  path:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

const stats = [
  { label:"Years Exp.", value:"5+", color:"#818CF8" },
  { label:"Projects",  value:"80+", color:"#22D3EE" },
  { label:"Clients",   value:"40+", color:"#a78bfa" },
];

export default function Hero() {
  const [idx,    setIdx]    = useState(0);
  const [text,   setText]   = useState("");
  const [typing, setTyping] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const cur = roles[idx];
    if (typing) {
      if (text.length < cur.length) { timer.current = setTimeout(() => setText(cur.slice(0, text.length + 1)), 65); }
      else { timer.current = setTimeout(() => setTyping(false), 2000); }
    } else {
      if (text.length > 0) { timer.current = setTimeout(() => setText(text.slice(0, -1)), 32); }
      else { setIdx(i => (i + 1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(timer.current);
  }, [text, typing, idx]);

  return (
    <>
      <style>{`
        /* ── Section ── */
        #hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--bg) 0%, var(--bg-2) 60%, #150a2e 100%);
        }
        html.light #hero { background: linear-gradient(135deg, #F1F5F9 0%, #E8EFFE 60%, #ede9fe 100%); }

        /* ── Inner wrapper ── */
        #hero-inner { position:relative; z-index:10; width:100%; }

        /* ── Two-column grid: stacked on mobile, side-by-side on desktop ── */
        #hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }
        @media(min-width:900px) {
          #hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }

        /* ── Avatar — MOBILE: shown inline above text, centered ── */
        #hero-avatar-mobile {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 8px;
        }
        @media(min-width:900px) { #hero-avatar-mobile { display: none; } }

        /* ── Avatar — DESKTOP: shown in right column ── */
        #hero-visual {
          display: none;
          justify-content: center;
          align-items: center;
        }
        @media(min-width:900px) { #hero-visual { display: flex; } }

        /* ── Mobile avatar card ── */
        #mob-avatar-card {
          position: relative;
          width: 200px;
          height: 200px;
        }
        @media(min-width:480px) {
          #mob-avatar-card { width: 220px; height: 220px; }
        }

        /* ── Mobile stats row under avatar ── */
        #mob-stats {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 16px;
          flex-wrap: wrap;
        }
        @media(min-width:900px) { #mob-stats { display: none; } }

        /* ── Desktop sphere ── */
        #sphere-wrap {
          position: relative;
          width: clamp(260px, 38vw, 340px);
          height: clamp(260px, 38vw, 340px);
        }

        /* ── Shared badge style ── */
        .sphere-badge {
          position: absolute;
          background: var(--glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 8px 14px;
          text-align: center;
          z-index: 10;
        }
        #code-snippet {
          position: absolute;
          right: -48px;
          top: 12px;
          background: var(--glass);
          backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-radius: 11px;
          padding: 11px 13px;
          min-width: 150px;
        }
        @media(max-width:1120px) { #code-snippet { display: none; } }

        /* ── Text section ── */
        #hero-text h1 {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(38px, 7vw, 84px);
          font-weight: 700;
          color: var(--text);
          line-height: 0.95;
          margin: 10px 0 16px;
        }
        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 14px;
          border-radius: 999px;
          background: var(--glass);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(99,102,241,0.25);
          font-size: 13px;
          color: var(--text-2);
          margin-bottom: 18px;
        }
        .hero-role {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
          min-height: 30px;
          flex-wrap: wrap;
        }
        .hero-desc {
          color: var(--text-2);
          font-size: clamp(13px, 2vw, 15px);
          line-height: 1.75;
          margin-bottom: 26px;
          max-width: 480px;
        }
        .hero-btns {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .socials-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .social-link {
          width: 34px; height: 34px;
          border-radius: 8px;
          background: var(--glass);
          backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-2); text-decoration: none;
          transition: all 0.2s;
        }
        .social-link:hover { color:#818CF8; border-color:rgba(99,102,241,0.35); }
      `}</style>

      <section id="hero">
        {/* BG blobs */}
        <div style={{ position:"absolute", top:"20%", left:"10%", width:"min(400px,60vw)", height:"min(400px,60vw)", background:"rgba(99,102,241,0.12)", borderRadius:"50%", filter:"blur(90px)" }} />
        <div style={{ position:"absolute", bottom:"15%", right:"8%", width:"min(300px,50vw)", height:"min(300px,50vw)", background:"rgba(139,92,246,0.12)", borderRadius:"50%", filter:"blur(90px)" }} />
        <div style={{ position:"absolute", inset:0, opacity:0.025, backgroundImage:"linear-gradient(rgba(99,102,241,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.5) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />

        <div id="hero-inner" className="wrap" style={{ paddingTop:"80px", paddingBottom:"60px" }}>
          <div id="hero-grid">

            {/* ══════════════════════════════════════
                MOBILE AVATAR — shown above text on mobile
                hidden on desktop (right column takes over)
            ══════════════════════════════════════ */}
            <motion.div
              id="hero-avatar-mobile"
              initial={{ opacity:0, scale:0.85, y:20 }}
              animate={{ opacity:1, scale:1, y:0 }}
              transition={{ duration:0.7, delay:0.1 }}
            >
              <div>
                {/* Avatar circle */}
                <div id="mob-avatar-card">
                  {/* Glow */}
                  <div style={{ position:"absolute", inset:"10px", borderRadius:"50%", background:"linear-gradient(135deg,rgba(99,102,241,0.3),rgba(139,92,246,0.3))", filter:"blur(18px)" }} />
                  {/* Outer ring */}
                  <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1px solid rgba(99,102,241,0.25)", animation:"spin 10s linear infinite" }} />
                  {/* Inner ring */}
                  <div style={{ position:"absolute", inset:"14px", borderRadius:"50%", border:"1px solid rgba(139,92,246,0.18)", animation:"spin 14s linear infinite reverse" }} />
                  {/* Avatar face */}
                  {/* <div style={{ position:"absolute", inset:"22px", borderRadius:"50%", background:"var(--glass)", backdropFilter:"blur(16px)", border:"2px solid rgba(99,102,241,0.4)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"3px" }}>
                    <span style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:700, fontSize:"clamp(36px,10vw,48px)", lineHeight:1, background:"linear-gradient(135deg,#6366F1,#22D3EE)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Awais Khalil</span>
                    <span style={{ color:"var(--text-4)", fontSize:"10px", fontFamily:"monospace" }}>Developer</span>
                  </div> */}
                  <div style={{
                  position:"relative", zIndex:0,
                  width:"100%", height:"100%",
                  borderRadius:"36px",
                  background:"linear-gradient(145deg, rgba(99,102,241,0.18), rgba(139,92,246,0.12))",
                  backdropFilter:"blur(16px)",
                  border:"2px solid rgba(99,102,241,0.4)",
                  boxShadow:"0 24px 64px rgba(99,102,241,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
                  overflow:"hidden",
                  display:"flex", alignItems:"center", justifyContent:"center"
                }}
                  >
                  <img
                    src="/Portfolio Pic.jpg"
                    alt="Awais Khalil"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      const fallback = document.getElementById("photo-fallback");
                      if (fallback) fallback.style.display = "flex";
                    }}
                    style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block" }}
                    />
                </div>
                </div>
                {/* Stat pills under avatar — mobile only */}
                <div id="mob-stats">
                  {stats.map(s => (
                    <div key={s.label} style={{ display:"flex", alignItems:"center", gap:"6px", padding:"6px 12px", borderRadius:"999px", background:"var(--glass)", backdropFilter:"blur(12px)", border:"1px solid var(--glass-border)" }}>
                      <span style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:700, fontSize:"14px", color:s.color }}>{s.value}</span>
                      <span style={{ color:"var(--text-3)", fontSize:"11px" }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ══════════════════════════════════════
                LEFT TEXT
            ══════════════════════════════════════ */}
            <div id="hero-text">
              <motion.div initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.2 }} className="hero-pill">
                <Sparkles size={13} color="#22D3EE" />
                Available for freelance work
                <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#4ade80", display:"inline-block", animation:"pulse 2s infinite" }} />
              </motion.div>

              <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.25 }}>
                <p style={{ fontFamily:"monospace", color:"#22D3EE", fontSize:"12px", letterSpacing:"0.18em", textTransform:"uppercase" }}>Hello, I&apos;m</p>
                <h1>Awais<br /><span style={{ background:"linear-gradient(135deg,#6366F1,#22D3EE)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Khalil</span></h1>
              </motion.div>

              <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.32 }} className="hero-role">
                <span style={{ color:"var(--text-2)", fontSize:"clamp(13px,2.5vw,17px)" }}>I&apos;m a</span>
                <span style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontSize:"clamp(13px,2.5vw,17px)", fontWeight:600, color:"#a5b4fc" }}>
                  {text}
                  <span style={{ display:"inline-block", width:"2px", height:"1.1em", background:"#22D3EE", marginLeft:"2px", verticalAlign:"middle", animation:"blink 1s step-end infinite" }} />
                </span>
              </motion.div>

              <motion.p initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.38 }} className="hero-desc">
                I craft scalable, performant web applications that solve real problems. 2+ years shipping production-grade MERN stack and Next.js solutions for startups and enterprises.
              </motion.p>

              <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.44 }} className="hero-btns">
                <motion.button whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior:"smooth" })}
                  style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"7px", padding:"12px 22px", borderRadius:"11px", background:"#6366F1", color:"white", fontWeight:600, fontSize:"14px", border:"none", cursor:"pointer", boxShadow:"0 0 24px rgba(99,102,241,0.45)", fontFamily:"inherit", whiteSpace:"nowrap" }}>
                  <Sparkles size={15} /> View My Work
                </motion.button>
                <motion.a href="https://drive.google.com/file/d/1DleZGoXEuJlFJW0XlJehJeM6ynp6nCeK/view?usp=drive_link" download whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}
                  style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"7px", padding:"12px 22px", borderRadius:"11px", background:"var(--glass)", backdropFilter:"blur(12px)", border:"1px solid var(--glass-border)", color:"var(--text)", fontWeight:600, fontSize:"14px", textDecoration:"none", whiteSpace:"nowrap" }}>
                  <Download size={15} /> Download CV
                </motion.a>
              </motion.div>

              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.55, delay:0.5 }} className="socials-row">
                <span style={{ color:"var(--text-4)", fontSize:"12px" }}>Find me on</span>
                <div style={{ display:"flex", gap:"8px" }}>
                  {socialLinks.map(({ label, href, path }) => (
                    <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" whileHover={{ scale:1.12, y:-2 }} aria-label={label} className="social-link">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d={path} /></svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ══════════════════════════════════════
                DESKTOP AVATAR — right column, hidden on mobile
            ══════════════════════════════════════ */}
            <motion.div id="hero-visual"
              initial={{ opacity:0, scale:0.82, x:40 }}
              animate={{ opacity:1, scale:1, x:0 }}
              transition={{ duration:0.85, delay:0.3 }}
            >
              <div id="sphere-wrap">
                {/* Rings */}
                <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1px solid rgba(99,102,241,0.2)", animation:"spin 10s linear infinite" }} />
                <div style={{ position:"absolute", inset:"18px", borderRadius:"50%", border:"1px solid rgba(139,92,246,0.15)", animation:"spin 14s linear infinite reverse" }} />
                {/* Glow */}
                <div style={{ position:"absolute", inset:"8px", borderRadius:"50%", background:"linear-gradient(135deg,rgba(99,102,241,0.2),rgba(139,92,246,0.2))", filter:"blur(22px)" }} />
                
                {/* Face */}
                {/* <div style={{ position:"absolute", inset:"30px", borderRadius:"50%", background:"var(--glass)", backdropFilter:"blur(16px)", border:"2px solid rgba(99,102,241,0.38)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"4px" }}> */}
                  {/* <span style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:700, fontSize:"clamp(48px,8vw,68px)", lineHeight:1, background:"linear-gradient(135deg,#6366F1,#22D3EE)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>AM</span>
                  <span style={{ color:"var(--text-4)", fontSize:"11px", fontFamily:"monospace" }}>Developer</span> */}
                
                  {/* ===== APNI PHOTO YAHAN LAGAO ===== */}
                  {/* /public/profile.jpg mein apni photo rakhein */}
                  <div style={{
                  position:"relative", zIndex:0,
                  width:"100%", height:"100%",
                  borderRadius:"36px",
                  background:"linear-gradient(145deg, rgba(99,102,241,0.18), rgba(139,92,246,0.12))",
                  backdropFilter:"blur(16px)",
                  border:"2px solid rgba(99,102,241,0.4)",
                  boxShadow:"0 24px 64px rgba(99,102,241,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
                  overflow:"hidden",
                  display:"flex", alignItems:"center", justifyContent:"center"
                }}
                  >
                  <img
                    src="/Portfolio Pic.jpg"
                    alt="Awais Khalil"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = "none";
                      const fallback = document.getElementById("photo-fallback");
                      if (fallback) fallback.style.display = "flex";
                    }}
                    style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block" }}
                    />
                  </div>
                {/* </div> */}
                {/* Floating stat badges */}
                {[
                  { label:"2+ Years", sub:"Experience", pos:{ top:"-16px", left:"-16px" }, color:"#818CF8", dur:3.5 },
                  { label:"20+",      sub:"Projects",   pos:{ bottom:"-16px", right:"-28px" }, color:"#22D3EE", dur:4.0 },
                  { label:"10+",      sub:"Clients",    pos:{ bottom:"-16px", left:"-28px" }, color:"#a78bfa", dur:4.5 },
                ].map(({ label, sub, pos, color, dur }) => (
                  <motion.div key={label} className="sphere-badge" style={{ ...pos }}
                    animate={{ y:[0,-7,0] }} transition={{ repeat:Infinity, duration:dur, ease:"easeInOut" }}>
                    <div style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:700, fontSize:"14px", color }}>{label}</div>
                    <div style={{ color:"var(--text-4)", fontSize:"10px" }}>{sub}</div>
                  </motion.div>
                ))}
                {/* Code snippet card */}
                <motion.div id="code-snippet" animate={{ y:[0,-8,0] }} transition={{ repeat:Infinity, duration:5, delay:1 }}>
                  <div style={{ fontFamily:"monospace", fontSize:"11px", lineHeight:1.65, color:"var(--text-2)" }}>
                    <span style={{ color:"#818CF8" }}>const</span>{" "}<span style={{ color:"#22D3EE" }}>dev</span>{" = {"}
                    <div style={{ marginLeft:"10px" }}><span style={{ color:"var(--text-3)" }}>skills: </span><span style={{ color:"#4ade80" }}>∞</span></div>
                    {"}"}
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>{/* end hero-grid */}

          {/* Scroll cue */}
          <motion.button initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.2 }}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior:"smooth" })}
            style={{ display:"block", margin:"40px auto 0", background:"none", border:"none", cursor:"pointer", color:"var(--text-4)", textAlign:"center" }}
            aria-label="Scroll down">
            <div style={{ fontFamily:"monospace", fontSize:"9px", letterSpacing:"0.22em", marginBottom:"6px" }}>SCROLL</div>
            <motion.div animate={{ y:[0,5,0] }} transition={{ repeat:Infinity, duration:1.5 }} style={{ display:"flex", justifyContent:"center" }}>
              <ArrowDown size={14} />
            </motion.div>
          </motion.button>
        </div>
      </section>
    </>
  );
}
