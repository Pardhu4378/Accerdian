"use client";

import { Sparkles, Crown, Layers, BarChart3, Landmark, Cog, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";
import { SOLUTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP = { Sparkles, Crown, Layers, BarChart3, Landmark, Cog };

const COLOR_CLASSES = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    tag: "bg-blue-50 text-blue-700",
    border: "hover:border-blue-200",
  },
  gold: {
    icon: "bg-amber-50 text-amber-600",
    tag: "bg-amber-50 text-amber-700",
    border: "hover:border-amber-200",
  },
  purple: {
    icon: "bg-purple-50 text-purple-600",
    tag: "bg-purple-50 text-purple-700",
    border: "hover:border-purple-200",
  },
  teal: {
    icon: "bg-teal-50 text-teal-600",
    tag: "bg-teal-50 text-teal-700",
    border: "hover:border-teal-200",
  },
  green: {
    icon: "bg-emerald-50 text-emerald-600",
    tag: "bg-emerald-50 text-emerald-700",
    border: "hover:border-emerald-200",
  },
  orange: {
    icon: "bg-orange-50 text-orange-600",
    tag: "bg-orange-50 text-orange-700",
    border: "hover:border-orange-200",
  },
};

export default function Solutions({ onOpenEnquiry }) {
  return (
    <section
      id="solutions"
      className="section-padding bg-white"
      aria-labelledby="solutions-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="Enterprise Solutions"
          title={
            <>
              Programs built for{" "}
              <span className="gradient-text">every ambition</span>
            </>
          }
          description="Six specialised learning tracks designed to address the skill gaps that matter most — from AI transformation to operations excellence."
          id="solutions-heading"
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((solution) => {
            const Icon = ICON_MAP[solution.icon];
            const colors = COLOR_CLASSES[solution.color];

            return (
              <StaggerItem key={solution.id}>
                <motion.article
                  onClick={() => onOpenEnquiry(solution.title)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "group relative rounded-2xl border border-[var(--color-border)] bg-white p-7",
                    "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]",
                    "transition-all duration-300 cursor-pointer",
                    colors.border
                  )}
                  aria-label={`${solution.title} program`}
                >
                  {/* Icon */}
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-5", colors.icon)}>
                    {Icon && <Icon size={22} aria-hidden="true" />}
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-lg font-bold text-[var(--color-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {solution.tags.map((tag) => (
                      <span key={tag} className={cn("text-xs font-medium px-2.5 py-1 rounded-full", colors.tag)}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Explore Program
                    <ArrowRight size={12} />
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-muted)] mb-4">
            Don&apos;t see what you need? We design custom learning tracks for enterprise teams.
          </p>
          <button onClick={onOpenEnquiry} className="btn-primary">
            Build a Custom Program
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
