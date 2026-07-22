"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/common/MotionWrapper";
import { FAQS } from "@/lib/constants";

function FAQItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StaggerItem>
      <div className="border-b border-[var(--color-border)] last:border-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
          id={`faq-question-${index}`}
          className="w-full flex items-start justify-between gap-4 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:rounded"
        >
          <span className="font-heading text-base font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
            {item.question}
          </span>
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center mt-0.5 group-hover:bg-[var(--color-primary)]/10 transition-colors">
            {isOpen ? (
              <Minus size={13} className="text-[var(--color-primary)]" aria-hidden="true" />
            ) : (
              <Plus size={13} className="text-[var(--color-muted)]" aria-hidden="true" />
            )}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-5 pr-10 text-[var(--color-muted)] text-sm leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StaggerItem>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section-padding bg-[var(--color-secondary)]"
      aria-labelledby="faq-heading"
    >
      <div className="container-wide">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about Accredian's enterprise learning platform."
          id="faq-heading"
        />

        <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl border border-[var(--color-border)] shadow-[var(--shadow-card)] px-8">
          <StaggerContainer>
            {FAQS.map((item, index) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
