"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";

// Viewport settings for scroll-triggered animations
const defaultViewport = { once: true, margin: "-80px" };

export function FadeUp({ children, delay = 0, className, ...props }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: {
            ...fadeUp.visible.transition,
            delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, delay = 0, className, ...props }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        ...fadeIn,
        visible: {
          ...fadeIn.visible,
          transition: {
            ...fadeIn.visible.transition,
            delay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideInLeft({ children, delay = 0, className, ...props }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        ...slideInLeft,
        visible: {
          ...slideInLeft.visible,
          transition: { ...slideInLeft.visible.transition, delay },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideInRight({ children, delay = 0, className, ...props }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        ...slideInRight,
        visible: {
          ...slideInRight.visible,
          transition: { ...slideInRight.visible.transition, delay },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className, ...props }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        ...scaleIn,
        visible: {
          ...scaleIn.visible,
          transition: { ...scaleIn.visible.transition, delay },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, fast = false, ...props }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={defaultViewport}
      variants={
        prefersReduced
          ? {}
          : {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: fast ? 0.07 : 0.1,
                  delayChildren: 0.05,
                },
              },
            }
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      variants={prefersReduced ? {} : fadeUp}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// For hero animations that trigger immediately on load
export function HeroAnimate({ children, delay = 0, className, ...props }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      initial={prefersReduced ? "visible" : "hidden"}
      animate="visible"
      variants={{
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
