"use client";

import { Users, TrendingUp, PlayCircle, Building2 } from "lucide-react";
import AnimatedCounter from "@/components/common/AnimatedCounter";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/common/MotionWrapper";
import { METRICS } from "@/lib/constants";

const ICON_MAP = { Users, TrendingUp, PlayCircle, Building2 };

export default function Metrics() {
  return (
    <section
      className="bg-[var(--color-dark)] section-padding relative overflow-hidden"
      aria-labelledby="metrics-heading"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, rgba(31,94,255,1) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(212,175,55,1) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative">
        {/* Section header */}
        <div className="text-center mb-14">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-white/8 text-white/60 border border-white/12">
              <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
              Business Impact
            </div>
          </FadeUp>
          <FadeUp delay={0.08}>
            <h2
              id="metrics-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Numbers that speak for{" "}
              <span className="gradient-text-gold">themselves</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.16}>
            <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
              Measurable results across every dimension of enterprise learning.
            </p>
          </FadeUp>
        </div>

        {/* Metrics grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric) => {
            const Icon = ICON_MAP[metric.icon];
            return (
              <StaggerItem key={metric.label}>
                <div className="relative group rounded-2xl bg-white/5 border border-white/8 p-8 hover:bg-white/8 hover:border-white/16 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)]/30 transition-colors">
                    {Icon && <Icon size={22} className="text-[var(--color-primary)]" aria-hidden="true" />}
                  </div>

                  {/* Value */}
                  <div className="font-heading text-5xl font-bold text-white mb-2 leading-none">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-white/90 font-semibold text-base mb-1">{metric.label}</p>
                  <p className="text-white/40 text-sm">{metric.description}</p>

                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(circle at 50% 0%, rgba(31,94,255,0.06) 0%, transparent 70%)" }}
                    aria-hidden="true"
                  />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
