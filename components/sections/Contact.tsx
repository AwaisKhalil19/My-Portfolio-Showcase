"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Mail, MapPin, Clock, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

const GH="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";
const LI="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z";
//const TW="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z";

interface Form { name:string; email:string; subject:string; message:string; }
interface Errs { name?:string; email?:string; subject?:string; message?:string; }
type Status = "idle"|"loading"|"success"|"error";

const inputStyle = (err: boolean): React.CSSProperties => ({
  width:"100%", background:"var(--input-bg)",
  border:`1px solid ${err ? "rgba(239,68,68,0.55)" : "var(--border)"}`,
  borderRadius:"10px", padding:"11px 14px", color:"var(--text)",
  fontSize:"14px", fontFamily:"inherit", outline:"none",
  boxSizing:"border-box", transition:"border-color 0.2s, background 0.2s",
});

const infoItems = [
  { Icon:Mail,  label:"Email Me At",    value:"awaiskhalil476@gmail.com",        href:"mailto:awaiskhalil476@gmail.com" },
  { Icon:MapPin,label:"Location",       value:"Lahore, Pakistan" },
  { Icon:Clock, label:"Availability",   value:"Mon–Fri, 9AM–6PM EST" },
];

const socialLinks = [
  { href:"https://github.com/AwaisKhalil19/",   label:"GitHub",   path:GH },
  { href:"https://www.linkedin.com/in/awais-khalil-55abbb372/", label:"LinkedIn", path:LI },
  // { href:"https://twitter.com",  label:"X / Twitter", path:TW },
];

export default function Contact() {
  const [form, setForm]     = useState<Form>({ name:"", email:"", subject:"", message:"" });
  const [errors, setErrors] = useState<Errs>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");
  const [ref, inView] = useInView({ triggerOnce:true, threshold:0.05 });

  const validate = () => {
    const e: Errs = {};
    if (!form.name.trim() || form.name.trim().length < 4)    e.name    = "Name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))      e.email   = "Please enter a valid email address.";
    if (!form.subject.trim() || form.subject.trim().length < 5) e.subject = "Subject must be at least 5 characters.";
    if (!form.message.trim() || form.message.trim().length < 20) e.message = "Message must be at least 20 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name as keyof Errs]) setErrors(er => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setServerMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setForm({ name:"", email:"", subject:"", message:"" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setServerMsg(data.error || "Something went wrong. Please try again.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setServerMsg("Network error. Please check your connection and try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="sec" style={{ background:"var(--bg-2)", position:"relative", overflow:"hidden", transition:"background 0.3s" }}>
      <div style={{ position:"absolute", top:"50%", left:0, width:"min(350px,60vw)", height:"min(350px,60vw)", background:"rgba(99,102,241,0.05)", borderRadius:"50%", filter:"blur(100px)", transform:"translateY(-50%)" }}/>
      <div style={{ position:"absolute", top:"50%", right:0, width:"min(350px,60vw)", height:"min(350px,60vw)", background:"rgba(139,92,246,0.05)", borderRadius:"50%", filter:"blur(100px)", transform:"translateY(-50%)" }}/>

      <style>{`
        .ct-grid { display:grid; grid-template-columns:1fr; gap:20px; margin-top:48px; }
        @media(min-width:900px){ .ct-grid { grid-template-columns:320px 1fr; gap:32px; } }
        @media(min-width:1100px){ .ct-grid { grid-template-columns:360px 1fr; gap:40px; } }
        .ct-form-row { display:grid; grid-template-columns:1fr; gap:14px; }
        @media(min-width:520px){ .ct-form-row { grid-template-columns:1fr 1fr; } }
        .ct-inp::placeholder { color:var(--placeholder); }
        .ct-inp:focus { border-color:rgba(99,102,241,0.55)!important; background:rgba(99,102,241,0.06)!important; }
        .social-icon-btn { width:40px; height:40px; border-radius:9px; background:var(--glass); backdrop-filter:blur(12px); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; color:var(--text-2); text-decoration:none; transition:all 0.2s; }
        .social-icon-btn:hover { color:#818CF8; border-color:rgba(99,102,241,0.35); transform:translateY(-2px); }
      `}</style>

      <div ref={ref} className="wrap" style={{ position:"relative", zIndex:1 }}>
        {/* Heading */}
        <div className="sec-center">
          <div><span className="sec-tag"><span className="sec-tag-dot"/> Contact</span></div>
          <h2 className="sec-title">Let&apos;s Build Something <span className="gradient-text">Great Together</span></h2>
          <p className="sec-sub">Have a project in mind? Fill the form and your message lands directly in my inbox.</p>
        </div>

        <div className="ct-grid">
          {/* ── LEFT INFO PANEL ── */}
          <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5 }}
            style={{ display:"flex", flexDirection:"column", gap:"12px" }}>

            {/* Contact info */}
            <div style={{ background:"var(--bg-card)", backdropFilter:"blur(12px)", border:"1px solid var(--border)", borderRadius:"16px", padding:"20px" }}>
              <h3 style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:600, fontSize:"15px", color:"var(--text)", marginBottom:"18px" }}>Get In Touch</h3>
              {infoItems.map(({ Icon, label, value, href }) => (
                <div key={label} style={{ display:"flex", alignItems:"flex-start", gap:"12px", marginBottom:"14px" }}>
                  <div style={{ width:"36px", height:"36px", borderRadius:"9px", background:"rgba(99,102,241,0.1)", border:"1px solid rgba(99,102,241,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <Icon size={15} color="#818CF8"/>
                  </div>
                  <div>
                    <div style={{ color:"var(--text-3)", fontSize:"10px", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"2px" }}>{label}</div>
                    {href
                      ? <a href={href} style={{ color:"var(--text)", fontSize:"13px", textDecoration:"none", fontWeight:500 }}>{value}</a>
                      : <div style={{ color:"var(--text)", fontSize:"13px", fontWeight:500 }}>{value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ background:"var(--bg-card)", backdropFilter:"blur(12px)", border:"1px solid var(--border)", borderRadius:"16px", padding:"18px" }}>
              <h3 style={{ fontFamily:"'Space Grotesk',system-ui,sans-serif", fontWeight:600, fontSize:"14px", color:"var(--text)", marginBottom:"12px" }}>Follow Me</h3>
              <div style={{ display:"flex", gap:"8px" }}>
                {socialLinks.map(({ href, label, path }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d={path}/></svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div style={{ background:"rgba(34,197,94,0.07)", border:"1px solid rgba(34,197,94,0.22)", borderRadius:"12px", padding:"14px 16px", display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{ width:"9px", height:"9px", borderRadius:"50%", background:"#4ADE80", animation:"pulse 2s infinite", flexShrink:0 }}/>
              <div>
                <div style={{ color:"#4ADE80", fontSize:"13px", fontWeight:600 }}>Currently Available</div>
                <div style={{ color:"var(--text-3)", fontSize:"11px", marginTop:"1px" }}>Response time: within 24 hours</div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT FORM ── */}
          <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:0.1 }}>
            <form onSubmit={handleSubmit} noValidate
              style={{ background:"var(--bg-card)", backdropFilter:"blur(12px)", border:"1px solid var(--border)", borderRadius:"18px", padding:"clamp(18px,4vw,28px)", display:"flex", flexDirection:"column", gap:"14px" }}>

              {/* Name + Email */}
              <div className="ct-form-row">
                <div>
                  <label style={{ display:"block", color:"var(--text-3)", fontSize:"11px", fontWeight:600, marginBottom:"5px", letterSpacing:"0.04em" }}>FULL NAME *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name"
                    style={inputStyle(!!errors.name)} className="ct-inp" autoComplete="name"/>
                  {errors.name && <p style={{ color:"#F87171", fontSize:"11px", marginTop:"4px", display:"flex", alignItems:"center", gap:"3px" }}><AlertCircle size={10}/>{errors.name}</p>}
                </div>
                <div>
                  <label style={{ display:"block", color:"var(--text-3)", fontSize:"11px", fontWeight:600, marginBottom:"5px", letterSpacing:"0.04em" }}>YOUR EMAIL *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email@example.com"
                    style={inputStyle(!!errors.email)} className="ct-inp" autoComplete="email"/>
                  {errors.email && <p style={{ color:"#F87171", fontSize:"11px", marginTop:"4px", display:"flex", alignItems:"center", gap:"3px" }}><AlertCircle size={10}/>{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display:"block", color:"var(--text-3)", fontSize:"11px", fontWeight:600, marginBottom:"5px", letterSpacing:"0.04em" }}>SUBJECT *</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project Discussion / Freelance Inquiry"
                  style={inputStyle(!!errors.subject)} className="ct-inp"/>
                {errors.subject && <p style={{ color:"#F87171", fontSize:"11px", marginTop:"4px", display:"flex", alignItems:"center", gap:"3px" }}><AlertCircle size={10}/>{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label style={{ display:"block", color:"var(--text-3)", fontSize:"11px", fontWeight:600, marginBottom:"5px", letterSpacing:"0.04em" }}>MESSAGE *</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  placeholder="Tell me about your project — what you're building, timeline, budget, tech stack..."
                  rows={5} style={{ ...inputStyle(!!errors.message), resize:"none" }} className="ct-inp"/>
                <div style={{ display:"flex", justifyContent:"space-between", marginTop:"4px" }}>
                  {errors.message
                    ? <p style={{ color:"#F87171", fontSize:"11px", display:"flex", alignItems:"center", gap:"3px" }}><AlertCircle size={10}/>{errors.message}</p>
                    : <span/>
                  }
                  <span style={{ color:form.message.length >= 20 ? "#4ADE80" : "var(--text-4)", fontSize:"11px" }}>{form.message.length} / 20 min</span>
                </div>
              </div>

              {/* Server error */}
              {status === "error" && serverMsg && (
                <div style={{ display:"flex", alignItems:"center", gap:"8px", padding:"10px 14px", borderRadius:"9px", background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.3)", color:"#F87171", fontSize:"13px" }}>
                  <XCircle size={14} style={{ flexShrink:0 }}/>
                  {serverMsg}
                </div>
              )}

              {/* Submit */}
              <motion.button type="submit" disabled={status === "loading" || status === "success"}
                whileHover={status === "idle" ? { scale:1.02 } : {}}
                whileTap={status === "idle" ? { scale:0.98 } : {}}
                style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"13px 20px", borderRadius:"11px", border:"none", fontFamily:"inherit", fontWeight:600, fontSize:"14px",
                  cursor: status === "loading" || status === "success" ? "default" : "pointer",
                  transition:"all 0.25s",
                  background: status === "success" ? "#16A34A" : status === "error" ? "#DC2626" : "#6366F1",
                  color:"white",
                  boxShadow: status === "success" ? "0 0 20px rgba(22,163,74,0.35)" : "0 0 22px rgba(99,102,241,0.45)",
                  opacity: status === "loading" ? 0.8 : 1 }}>
                {status === "loading" && (
                  <motion.span animate={{ rotate:360 }} transition={{ repeat:Infinity, duration:0.9, ease:"linear" }}
                    style={{ width:"15px", height:"15px", border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"white", borderRadius:"50%", display:"block" }}/>
                )}
                {status === "success" && <CheckCircle2 size={15}/>}
                {status === "error"   && <XCircle size={15}/>}
                {status === "idle"    && <Send size={15}/>}
                {status === "loading" ? "Sending your message…"
                  : status === "success" ? "Message sent! I'll reply soon ✓"
                  : status === "error"   ? "Failed — click to retry"
                  : "Send Message"}
              </motion.button>

            </form>
              {/* <p style={{ color:"var(--text-4)", fontSize:"11px", textAlign:"center" }}>
                Your message is delivered directly to my inbox via secure email.
              </p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
