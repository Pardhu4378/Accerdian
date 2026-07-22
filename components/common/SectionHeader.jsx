"use client";

import { cn } from "@/lib/utils";
import { FadeUp } from "@/components/common/MotionWrapper";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter && "mx-auto text-center",
        !isCenter && "text-left",
        className
      )}
    >
      {eyebrow && (
        <FadeUp delay={0}>
          <div
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4",
              light
                ? "bg-white/10 text-white/70 border border-white/20"
                : "bg-[var(--color-primary)]/8 text-[var(--color-primary)] border border-[var(--color-primary)]/20"
            )}
          >
            <span className={cn(
              "w-1 h-1 rounded-full",
              light ? "bg-white/60" : "bg-[var(--color-primary)]"
            )} />
            {eyebrow}
          </div>
        </FadeUp>
      )}

      <FadeUp delay={0.08}>
        <h2
          className={cn(
            "font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight",
            light ? "text-white" : "text-[var(--color-dark)]"
          )}
        >
          {title}
        </h2>
      </FadeUp>

      {description && (
        <FadeUp delay={0.16}>
          <p
            className={cn(
              "mt-4 text-base sm:text-lg leading-relaxed",
              light ? "text-white/60" : "text-[var(--color-muted)]",
              isCenter && "mx-auto"
            )}
          >
            {description}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
