"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";
import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? "text-[var(--color-accent)] fill-current" : "text-gray-200 fill-current"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function Avatar({ initials }) {
  return (
    <div
      className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-blue-400 flex items-center justify-center flex-shrink-0"
      aria-hidden="true"
    >
      <span className="text-white text-xs font-bold">{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="Success Stories"
          title={
            <>
              Trusted by{" "}
              <span className="gradient-text">10,000+ professionals</span>
            </>
          }
          description="From individual career transformation to enterprise workforce upskilling — hear it from the people who've lived it."
          id="testimonials-heading"
        />

        <StaggerContainer className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, index) => (
            <StaggerItem key={index}>
              <motion.article
                whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="group h-full rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300 flex flex-col"
                aria-label={`Testimonial from ${t.name}`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <StarRating rating={t.rating} />
                  <Quote
                    size={20}
                    className="text-[var(--color-primary)]/20 group-hover:text-[var(--color-primary)]/40 transition-colors"
                    aria-hidden="true"
                  />
                </div>

                {/* Quote */}
                <blockquote className="flex-1 text-[var(--color-text)] text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Program tag */}
                <div className="mb-4">
                  <span className="text-[10px] font-semibold text-[var(--color-primary)] uppercase tracking-widest bg-[var(--color-primary)]/8 px-2.5 py-1 rounded-full">
                    {t.program}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                  <Avatar initials={t.initials} />
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-dark)]">{t.name}</p>
                    <p className="text-xs text-[var(--color-muted)]">{t.role}, {t.company}</p>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
