"use client";

import { GraduationCap, Radio, Rocket, LineChart, ShieldCheck, Infinity } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";
import { ACCREDIAN_EDGE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP = { GraduationCap, Radio, Rocket, LineChart, ShieldCheck, Infinity };

export default function AccredianEdge() {
  return (
    <section
      id="edge"
      className="section-padding bg-[var(--color-secondary)]"
      aria-labelledby="edge-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="The Accredian Edge"
          title={
            <>
              Everything enterprises need,{" "}
              <span className="gradient-text">nothing they don&apos;t</span>
            </>
          }
          description="A platform engineered for scale, designed for outcomes, and built to be loved by learners and L&D leaders alike."
          id="edge-heading"
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {ACCREDIAN_EDGE.map((item, index) => {
            const Icon = ICON_MAP[item.icon];
            const isLarge = item.size === "large";

            return (
              <StaggerItem
                key={item.id}
                className={cn(isLarge && "md:col-span-2 lg:col-span-1")}
              >
                <motion.article
                  whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
                  className={cn(
                    "group h-full rounded-2xl border border-[var(--color-border)] bg-white p-7",
                    "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
                    "transition-shadow duration-300 relative overflow-hidden"
                  )}
                  aria-label={item.title}
                >
                  {/* Background accent for large cards */}
                  {isLarge && (
                    <div
                      className="absolute top-0 right-0 w-40 h-40 opacity-[0.04] pointer-events-none"
                      style={{
                        background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
                      }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Icon + Stat row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/8 flex items-center justify-center group-hover:bg-[var(--color-primary)]/16 transition-colors">
                      {Icon && <Icon size={22} className="text-[var(--color-primary)]" aria-hidden="true" />}
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-2xl font-bold text-[var(--color-dark)] leading-none">{item.stat}</p>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">{item.statLabel}</p>
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="font-heading text-lg font-bold text-[var(--color-dark)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
