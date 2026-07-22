"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Building2 } from "lucide-react";
import { FadeUp } from "@/components/common/MotionWrapper";

export default function CTA({ onOpenEnquiry }) {
  return (
    <section
      id="cta"
      className="section-padding bg-[var(--color-dark)] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 80% at 20% 50%, rgba(31,94,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 80% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 bg-white/8 text-white/60 border border-white/12">
              <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Ready to Transform?
            </div>
          </FadeUp>

          {/* Headline */}
          <FadeUp delay={0.08}>
            <h2
              id="cta-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Your workforce&apos;s best{" "}
              <span className="gradient-text-gold">chapter starts here</span>
            </h2>
          </FadeUp>

          {/* Description */}
          <FadeUp delay={0.16}>
            <p className="mt-6 text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
              Join India&apos;s leading enterprises in building future-ready teams. Our consultants are ready to design a custom program around your objectives.
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.24}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="btn-primary text-base px-8 py-4 w-full sm:w-auto justify-center"
                id="cta-enquiry-btn"
              >
                <PhoneCall size={16} />
                Schedule Enterprise Demo
                <ArrowRight size={16} />
              </button>
              <a
                href="https://enterprise.accredian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white/80 hover:border-white/40 hover:text-white text-base font-semibold transition-all duration-200 w-full sm:w-auto"
              >
                <Building2 size={16} />
                Explore Enterprise Platform
              </a>
            </div>
          </FadeUp>

          {/* Trust signals */}
          <FadeUp delay={0.32}>
            <div className="mt-10 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-white/40 text-xs font-medium">
              {[
                "No commitment required",
                "Response within 24 hours",
                "Custom program design included",
              ].map((signal) => (
                <div key={signal} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-green-400" />
                  {signal}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
