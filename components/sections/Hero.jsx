"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play, Shield, Star, Users, GraduationCap, Award, Zap } from "lucide-react";
import { PARTNER_LOGOS } from "@/lib/constants";
import { HeroAnimate } from "@/components/common/MotionWrapper";

function HeroIllustration() {
  const prefersReduced = useReducedMotion();

  // Variants for data pulses flowing along the lines
  const pulseVariants = {
    animate: {
      offsetDistance: ["0%", "100%"],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }
    }
  };

  return (
    <div className="relative w-full h-full min-h-[450px] lg:min-h-[580px] flex items-center justify-center">
      {/* Decorative luxury mesh background lights */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-amber-500/8 blur-[70px] pointer-events-none" />

      {/* Main Glassmorphic Panel (Stripe/Linear inspired) */}
      <motion.div
        animate={prefersReduced ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="relative w-full max-w-[500px] rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-xl shadow-[0_32px_96px_rgba(0,0,0,0.3)] p-6 overflow-hidden"
      >
        {/* Shiny top light reflection line */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        {/* Header bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="text-[11px] font-mono text-slate-500 tracking-wider uppercase">
            Transformation Engine v2.0
          </div>
          <div className="w-4 h-4 rounded bg-slate-800 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          </div>
        </div>

        {/* Visual Engine Network Flow Diagram */}
        <div className="relative h-48 bg-slate-950/60 rounded-xl border border-slate-800/60 p-4 mb-5 flex items-center justify-center overflow-hidden">
          {/* Animated Mesh Grid background */}
          <div className="absolute inset-0 opacity-15"
               style={{
                 backgroundImage: "radial-gradient(rgba(31,94,255,0.15) 1px, transparent 1px)",
                 backgroundSize: "16px 16px"
               }}
          />

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50,96 C 120,96 150,40 250,40" fill="none" stroke="rgba(31,94,255,0.2)" strokeWidth="2" />
            <path d="M 50,96 C 120,96 150,96 250,96" fill="none" stroke="rgba(31,94,255,0.2)" strokeWidth="2" />
            <path d="M 50,96 C 120,96 150,150 250,150" fill="none" stroke="rgba(31,94,255,0.2)" strokeWidth="2" />

            {/* Glowing flowing pulse markers along paths */}
            {!prefersReduced && (
              <>
                <circle r="4" fill="#1F5EFF" style={{ motionPath: "path('M 50,96 C 120,96 150,40 250,40')" }} className="shadow-[0_0_8px_#1F5EFF]">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 50,96 C 120,96 150,40 250,40" />
                </circle>
                <circle r="4" fill="#D4AF37" style={{ motionPath: "path('M 50,96 C 120,96 150,150 250,150')" }} className="shadow-[0_0_8px_#D4AF37]">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M 50,96 C 120,96 150,150 250,150" />
                </circle>
              </>
            )}
          </svg>

          {/* Core Central Node */}
          <div className="absolute left-6 flex flex-col items-center z-10">
            <motion.div
              animate={prefersReduced ? {} : { scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 p-[1px] shadow-[0_0_24px_rgba(31,94,255,0.4)] flex items-center justify-center cursor-pointer"
            >
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Zap size={20} className="text-blue-400 fill-blue-400/20" />
              </div>
            </motion.div>
            <span className="text-[10px] font-semibold text-blue-300 mt-2 tracking-wide uppercase">Talent</span>
          </div>

          {/* Target Institution Nodes */}
          <div className="absolute right-6 flex flex-col gap-6 items-end z-10">
            {[
              { name: "IITs", label: "Core tech", border: "border-blue-500/30" },
              { name: "IIMs", label: "Strategy", border: "border-amber-500/30" },
              { name: "XLRI", label: "Leadership", border: "border-emerald-500/30" },
            ].map((node, idx) => (
              <div key={node.name} className="flex items-center gap-2">
                <div className="text-right">
                  <p className="text-xs font-bold text-white leading-none">{node.name}</p>
                  <p className="text-[9px] text-slate-500 leading-none mt-0.5">{node.label}</p>
                </div>
                <div className={`w-8 h-8 rounded-lg bg-slate-900 border ${node.border} flex items-center justify-center text-[10px] font-bold text-slate-200 shadow-lg`}>
                  {node.name.slice(0, 3)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time metrics visualization */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-300">Cohort Skill Acceleration</span>
            <span className="text-emerald-400 font-mono font-semibold">+94% Success Rate</span>
          </div>

          {/* Custom SVG Line Graph */}
          <div className="relative h-20 bg-slate-950/40 rounded-lg border border-slate-800/40 overflow-hidden px-1">
            <svg className="w-full h-full" viewBox="0 0 300 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1F5EFF" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1F5EFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Path area fill */}
              <path d="M 0,80 Q 50,55 100,60 T 200,30 T 300,10 L 300,80 L 0,80 Z" fill="url(#gradient-area)" />
              {/* Path line */}
              <motion.path
                d="M 0,80 Q 50,55 100,60 T 200,30 T 300,10"
                fill="none"
                stroke="#1F5EFF"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              {/* Gold overlay target line */}
              <motion.line
                x1="0" y1="40" x2="300" y2="40"
                stroke="rgba(212,175,55,0.25)"
                strokeDasharray="4,4"
                strokeWidth="1.5"
              />
            </svg>
            <div className="absolute top-1 right-2 text-[9px] font-mono text-amber-400/80">
              Target ROI Threshold
            </div>
          </div>

          <div className="flex justify-between items-center text-[11px] text-slate-500 border-t border-slate-800/60 pt-3">
            <span className="flex items-center gap-1"><Users size={12} className="text-blue-400" /> 10k+ Alumni Network</span>
            <span className="flex items-center gap-1"><Award size={12} className="text-amber-400" /> Academic Credentials</span>
          </div>
        </div>
      </motion.div>

      {/* Glassmorphic floating card - Top Right */}
      <motion.div
        animate={prefersReduced ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 4.2, ease: "easeInOut", repeat: Infinity, delay: 0.8 }}
        className="absolute top-4 right-0 lg:right-[-2rem] bg-slate-900/90 border border-slate-800/80 backdrop-blur-md rounded-xl p-4 shadow-xl flex items-center gap-3 max-w-[190px] z-20"
      >
        <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
          <Star size={16} className="text-amber-400 fill-amber-400/20" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">60% Salary Hike</p>
          <p className="text-[10px] text-slate-400 leading-none mt-1">Average outcome</p>
        </div>
      </motion.div>

      {/* Glassmorphic floating card - Bottom Left */}
      <motion.div
        animate={prefersReduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 4.8, ease: "easeInOut", repeat: Infinity, delay: 0.3 }}
        className="absolute bottom-6 left-0 lg:left-[-2rem] bg-slate-900/90 border border-slate-800/80 backdrop-blur-md rounded-xl p-4 shadow-xl flex items-center gap-3 max-w-[200px] z-20"
      >
        <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <Shield size={16} className="text-blue-400" />
        </div>
        <div>
          <p className="text-xs font-bold text-white">IIT/IIM Faculty</p>
          <p className="text-[10px] text-slate-400 leading-none mt-1">Direct interactive classes</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero({ onOpenEnquiry }) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-grid bg-[var(--color-secondary)]"
      aria-label="Hero section"
    >
      {/* Premium background mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 20%, rgba(31,94,255,0.08) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(212,175,55,0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide py-16 lg:py-24 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Elegant Trust Badge */}
            <HeroAnimate delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/5 text-xs font-semibold text-[var(--color-primary)] tracking-wide shadow-[0_2px_12px_rgba(31,94,255,0.05)]">
                <Star size={11} className="fill-current text-blue-500" />
                India&apos;s #1 Enterprise Learning Platform
              </div>
            </HeroAnimate>

            {/* Premium Typography Hook */}
            <HeroAnimate delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-[var(--color-dark)]">
                Where Talent{" "}
                <span className="relative">
                  <span className="gradient-text">Becomes</span>
                  <span className="absolute bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-indigo-400 opacity-60" />
                </span>
                <br />
                Transformation.
              </h1>
            </HeroAnimate>

            {/* High-quality Description */}
            <HeroAnimate delay={0.18}>
              <p className="text-lg sm:text-xl text-[var(--color-muted)] leading-relaxed max-w-lg">
                Upskill your workforce with certified executive programs from{" "}
                <strong className="text-[var(--color-text)] font-bold">IITs, IIMs, XLRI & SP Jain</strong>.
                Designed for high-impact teams with real-time performance insights and measurable L&D ROI.
              </p>
            </HeroAnimate>

            {/* Sleek CTAs */}
            <HeroAnimate delay={0.26}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenEnquiry}
                  className="btn-primary text-base px-8 py-4 relative overflow-hidden group shadow-[0_4px_24px_rgba(31,94,255,0.25)]"
                  id="hero-enquiry-cta"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Schedule Enterprise Demo
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <a
                  href="#solutions"
                  className="btn-ghost text-base px-8 py-4 text-center"
                  id="hero-programs-cta"
                >
                  Explore Programs
                </a>
              </div>
            </HeroAnimate>

            {/* Clean metrics row */}
            <HeroAnimate delay={0.34}>
              <div className="flex items-center gap-8 pt-4 border-t border-[var(--color-border)]/60">
                {[
                  { value: "10,000+", label: "Trained" },
                  { value: "60%", label: "Salary Hike" },
                  { value: "15+", label: "Academic Partners" },
                ].map((m, i) => (
                  <div key={m.label} className={`${i > 0 ? "pl-8 border-l border-[var(--color-border)]" : ""}`}>
                    <p className="text-2xl font-black text-[var(--color-dark)] font-heading leading-none">{m.value}</p>
                    <p className="text-xs text-[var(--color-muted)] font-semibold mt-1 tracking-wider uppercase">{m.label}</p>
                  </div>
                ))}
              </div>
            </HeroAnimate>

            {/* Certifying logo badges */}
            <HeroAnimate delay={0.42}>
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                  Partnering Institutions
                </p>
                <div className="flex items-center flex-wrap gap-3">
                  {PARTNER_LOGOS.slice(0, 6).map((logo) => (
                    <div
                      key={logo.name}
                      className="h-10 w-10 rounded-lg border border-[var(--color-border)] bg-white flex items-center justify-center p-1.5 shadow-xs hover:border-[var(--color-primary)]/40 transition-colors"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={28}
                        height={28}
                        className="max-h-7 max-w-7 object-contain"
                        priority
                      />
                    </div>
                  ))}
                  <div className="h-10 px-3 rounded-lg border border-[var(--color-border)] bg-white flex items-center justify-center shadow-xs">
                    <span className="text-xs font-medium text-[var(--color-muted)] font-semibold">+8 more</span>
                  </div>
                </div>
              </div>
            </HeroAnimate>
          </div>

          {/* Right — Interactive Visual Engine */}
          <HeroAnimate delay={0.2} className="relative z-10 lg:pl-6">
            <HeroIllustration />
          </HeroAnimate>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-[var(--color-muted)] font-medium">Scroll to explore</span>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[var(--color-muted)] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[var(--color-muted)]" />
        </motion.div>
      </div>
    </section>
  );
}
