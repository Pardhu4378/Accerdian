"use client";

import { MapPin, BookOpen, FlaskConical, Award, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import { LEARNING_JOURNEY } from "@/lib/constants";

const ICON_MAP = { MapPin, BookOpen, Beaker: FlaskConical, Award, Users };

function TimelineItem({ item, index, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = ICON_MAP[item.icon] || MapPin;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -32 : 32 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6 lg:gap-10 items-start pb-10 last:pb-0"
    >
      {/* Vertical line + dot */}
      <div className="flex flex-col items-center flex-shrink-0 relative">
        {/* Dot */}
        <div className="relative z-10 w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center shadow-md shadow-[var(--color-primary)]/30">
          <Icon size={16} className="text-white" aria-hidden="true" />
        </div>
        {/* Line segment */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: "easeOut" }}
            className="w-px flex-1 mt-2 origin-top"
            style={{ background: "linear-gradient(to bottom, var(--color-primary), var(--color-border))", minHeight: "3rem" }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 pb-2">
        {/* Phase label */}
        <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-2">
          {item.phase}
        </p>
        <div className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
          <h3 className="font-heading text-base font-bold text-[var(--color-dark)] mb-1.5">
            {item.title}
          </h3>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function LearningJourney() {
  return (
    <section
      id="learning-journey"
      className="section-padding bg-[var(--color-secondary)]"
      aria-labelledby="journey-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="Your Learning Journey"
          title={
            <>
              From enrollment to{" "}
              <span className="gradient-text">career transformation</span>
            </>
          }
          description="A structured, milestone-driven journey designed to deliver mastery — not just completion."
          id="journey-heading"
        />

        <div className="mt-14 max-w-2xl mx-auto">
          {LEARNING_JOURNEY.map((item, index) => (
            <TimelineItem
              key={item.phase}
              item={item}
              index={index}
              isLast={index === LEARNING_JOURNEY.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
