"use client";

import { ClipboardList, Phone, PenLine, BarChart2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";
import { HOW_IT_WORKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP = { ClipboardList, Phone, PenLine, BarChart2 };

export default function HowItWorks({ onOpenEnquiry }) {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-white"
      aria-labelledby="hiw-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="How It Works"
          title={
            <>
              Up and running in{" "}
              <span className="gradient-text">four steps</span>
            </>
          }
          description="From your first enquiry to full-scale training deployment — our enterprise onboarding is designed to be seamless."
          id="hiw-heading"
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {HOW_IT_WORKS.map((step, index) => {
            const Icon = ICON_MAP[step.icon];
            const isLast = index === HOW_IT_WORKS.length - 1;

            return (
              <StaggerItem key={step.step} className="relative">
                <article className="group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-secondary)] p-6 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/[0.02] transition-all duration-300">
                  {/* Step number */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors">
                      {Icon && <Icon size={20} className="text-[var(--color-primary)]" aria-hidden="true" />}
                    </div>
                    <span className="font-heading text-5xl font-black text-[var(--color-border)] group-hover:text-[var(--color-primary)]/20 transition-colors leading-none select-none">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-[var(--color-dark)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </article>

                {/* Arrow connector (desktop) */}
                {!isLast && (
                  <div
                    className="hidden lg:flex absolute top-10 -right-3 z-10 items-center"
                    aria-hidden="true"
                  >
                    <ArrowRight size={16} className="text-[var(--color-border)]" />
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button onClick={onOpenEnquiry} className="btn-primary text-base px-8 py-3.5">
            Begin Your Enquiry
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
