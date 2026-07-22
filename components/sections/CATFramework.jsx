"use client";

import { ScanSearch, Compass, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/common/MotionWrapper";
import { CAT_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP = { ScanSearch, Compass, Zap };

export default function CATFramework({ onOpenEnquiry }) {
  return (
    <section
      id="cat-framework"
      className="section-padding bg-[var(--color-dark)] relative overflow-hidden"
      aria-labelledby="cat-heading"
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(31,94,255,1), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-white/8 text-white/60 border border-white/12">
              <span className="w-1 h-1 rounded-full bg-[var(--color-primary)]" />
              Our Methodology
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              id="cat-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              The{" "}
              <span className="gradient-text-gold">CAT Framework</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Our proprietary three-step enterprise learning methodology — used by India&apos;s leading organisations to achieve measurable skill transformation.
            </p>
          </FadeUp>
        </div>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-[3.25rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
            style={{ background: "linear-gradient(to right, rgba(31,94,255,0.4), rgba(31,94,255,0.4))" }}
            aria-hidden="true"
          />

          {CAT_STEPS.map((step, index) => {
            const Icon = ICON_MAP[step.icon];
            return (
              <StaggerItem key={step.step}>
                <article className="relative group">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[var(--color-primary)]/30 group-hover:shadow-[var(--color-primary)]/50 transition-shadow z-10 relative">
                      {Icon && <Icon size={24} className="text-white" aria-hidden="true" />}
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-semibold tracking-widest uppercase">Step {step.step}</p>
                      <p className="text-white font-heading font-bold text-xl leading-tight">{step.word}</p>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl bg-white/5 border border-white/8 p-6 group-hover:bg-white/8 group-hover:border-white/16 transition-all duration-300">
                    <h3 className="font-heading text-base font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">{step.description}</p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-sm text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeUp delay={0.3}>
          <div className="mt-14 text-center">
            <button onClick={onOpenEnquiry} className="btn-primary text-base px-8 py-3.5">
              Start Your CAT Assessment
              <ArrowRight size={16} />
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
