"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("hero");
  const [open,     setOpen]     = useState(false);
  const { theme, toggleTheme }  = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navLinks.map(l => l.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 900) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <style>{`
        /* ── Nav bar heights ── */
        .nav-bar { position:fixed; top:0; left:0; right:0; z-index:50; transition:background 0.4s, border-color 0.4s, box-shadow 0.4s; }
        .nav-inner { max-width:1280px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; height:56px; padding:0 16px; }
        @media(min-width:480px)  { .nav-inner { height:60px; padding:0 24px; } }
        @media(min-width:768px)  { .nav-inner { height:64px; padding:0 32px; } }
        @media(min-width:1024px) { .nav-inner { height:68px; padding:0 48px; } }

        /* ── Logo ── */
        .nav-logo { display:flex; align-items:center; gap:8px; background:none; border:none; cursor:pointer; flex-shrink:0; text-decoration:none; }
        .nav-logo-icon { width:28px; height:28px; border-radius:7px; background:linear-gradient(135deg,#6366F1,#8B5CF6); display:flex; align-items:center; justify-content:center; box-shadow:0 0 14px rgba(99,102,241,0.4); flex-shrink:0; }
        @media(min-width:480px) { .nav-logo-icon { width:32px; height:32px; border-radius:8px; } }
        .nav-logo-text { font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; background:linear-gradient(135deg,#6366F1,#22D3EE); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; white-space:nowrap; }
        @media(min-width:480px) { .nav-logo-text { font-size:16px; } }

        /* ── Desktop links (hidden on mobile) ── */
        .nav-links { display:none; align-items:center; gap:2px; }
        @media(min-width:900px) { .nav-links { display:flex; } }
        .nav-lnk { position:relative; padding:6px 11px; border-radius:8px; font-size:13px; font-weight:500; background:none; border:none; cursor:pointer; font-family:inherit; color:var(--text-2); transition:color 0.2s; white-space:nowrap; }
        .nav-lnk:hover { color:var(--text); }
        .nav-lnk.act { color:#818CF8; }

        /* ── Right actions ── */
        .nav-actions { display:flex; align-items:center; gap:6px; flex-shrink:0; }
        @media(min-width:360px) { .nav-actions { gap:8px; } }
        .nav-icon-btn { width:32px; height:32px; border-radius:8px; background:var(--glass); backdrop-filter:blur(12px); border:1px solid var(--glass-border); display:flex; align-items:center; justify-content:center; cursor:pointer; color:var(--text-2); flex-shrink:0; }
        @media(min-width:480px) { .nav-icon-btn { width:34px; height:34px; } }
        .nav-hire { display:none; padding:7px 14px; border-radius:8px; background:#6366F1; color:white; font-size:13px; font-weight:600; border:none; cursor:pointer; font-family:inherit; box-shadow:0 0 16px rgba(99,102,241,0.4); white-space:nowrap; }
        @media(min-width:480px) { .nav-hire { display:block; } }
        .nav-mob-btn { display:flex; }
        @media(min-width:900px) { .nav-mob-btn { display:none; } }

        /* ── Mobile drawer ── */
        .mob-drawer { position:fixed; top:56px; left:0; right:0; z-index:40; backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); padding:8px 12px 14px; }
        @media(min-width:480px) { .mob-drawer { top:60px; padding:8px 16px 16px; } }
        @media(min-width:768px) { .mob-drawer { top:64px; } }
        @media(min-width:900px) { .mob-drawer { display:none !important; } }
        .mob-link { display:flex; align-items:center; width:100%; text-align:left; padding:10px 14px; border-radius:9px; font-size:14px; font-weight:500; border:none; cursor:pointer; font-family:inherit; margin-bottom:3px; transition:all 0.2s; background:transparent; }
        .mob-link.act { background:rgba(99,102,241,0.12); color:#818CF8; border-left:2px solid #6366F1; }
        .mob-link:not(.act) { color:var(--text-2); border-left:2px solid transparent; }
        .mob-link:not(.act):hover { background:rgba(255,255,255,0.04); color:var(--text); }
        .mob-hire { display:block; width:100%; margin-top:8px; padding:11px; border-radius:9px; background:#6366F1; color:white; font-size:14px; font-weight:600; border:none; cursor:pointer; font-family:inherit; text-align:center; }
      `}</style>

      {/* ── Top Bar ── */}
      <motion.nav
        className="nav-bar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55 }}
        style={{
          background:    scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter:scrolled ? "blur(18px)"    : "none",
          borderBottom:  scrolled ? "1px solid var(--border)" : "none",
          boxShadow:     scrolled ? "0 2px 20px rgba(0,0,0,0.14)" : "none",
        }}
      >
        <div className="nav-inner">
          {/* Logo */}
          <motion.button className="nav-logo" onClick={() => scrollTo("#hero")} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <div className="nav-logo-icon"><Code2 size={14} color="white"/></div>
            <span className="nav-logo-text">Awais Khalil</span>
          </motion.button>

          {/* Desktop links */}
          <div className="nav-links">
            {navLinks.map(link => {
              const isActive = active === link.href.replace("#", "");
              return (
                <button key={link.href} onClick={() => scrollTo(link.href)} className={`nav-lnk${isActive ? " act" : ""}`}>
                  {isActive && (
                    <motion.span layoutId="nav-pill"
                      style={{ position:"absolute", inset:0, borderRadius:"8px", background:"rgba(99,102,241,0.12)", border:"1px solid rgba(99,102,241,0.22)" }}
                      transition={{ type:"spring", stiffness:300, damping:30 }}
                    />
                  )}
                  <span style={{ position:"relative", zIndex:1 }}>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="nav-actions">
            {/* Theme toggle */}
            <motion.button className="nav-icon-btn" onClick={toggleTheme} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Toggle theme">
              {theme === "dark" ? <Sun size={14}/> : <Moon size={14}/>}
            </motion.button>

            {/* Hire Me — hidden on very small screens */}
            <motion.button className="nav-hire" onClick={() => scrollTo("#contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Hire Me
            </motion.button>

            {/* Hamburger — hidden on desktop */}
            <button className="nav-icon-btn nav-mob-btn" onClick={() => setOpen(o => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
              <AnimatePresence mode="wait">
                {open
                  ? <motion.span key="x"    initial={{ rotate:-90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:90, opacity:0 }} transition={{ duration:0.18 }}><X    size={16}/></motion.span>
                  : <motion.span key="menu" initial={{ rotate:90,  opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:-90,opacity:0 }} transition={{ duration:0.18 }}><Menu size={16}/></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mob-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ background: "var(--nav-bg)", borderBottom: "1px solid var(--border)" }}
          >
            {navLinks.map(link => (
              <button key={link.href} onClick={() => scrollTo(link.href)}
                className={`mob-link${active === link.href.replace("#","") ? " act" : ""}`}>
                {link.label}
              </button>
            ))}
            <button className="mob-hire" onClick={() => scrollTo("#contact")}>
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
