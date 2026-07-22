"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navVariants = {
    top: { backgroundColor: "rgba(255,255,255,0)", backdropFilter: "blur(0px)", boxShadow: "none" },
    scrolled: {
      backgroundColor: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(16px)",
      boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
    },
  };

  return (
    <>
      <motion.header
        role="banner"
        className="fixed top-0 left-0 right-0 z-40"
        animate={isScrolled ? "scrolled" : "top"}
        variants={prefersReduced ? {} : navVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={prefersReduced ? { backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)", boxShadow: "0 1px 0 rgba(0,0,0,0.06)" } : {}}
      >
        <nav
          className="container-wide flex items-center justify-between h-16 lg:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-md"
            aria-label="Accredian homepage"
          >
            <Image
              src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
              alt="Accredian"
              width={130}
              height={38}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                role="listitem"
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-gray-50",
                  "transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://enterprise.accredian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              For Enterprise
            </a>
            <button
              onClick={onOpenEnquiry}
              className="btn-primary text-sm py-2.5 px-5"
              aria-label="Open enquiry form"
            >
              Get Started
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-[var(--color-text)] hover:bg-gray-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[min(320px,90vw)] bg-white z-40 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--color-border)]">
                <Image
                  src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
                  alt="Accredian"
                  width={110}
                  height={32}
                  className="h-7 w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 py-6 overflow-y-auto">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-[var(--color-text)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="https://enterprise.accredian.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-[var(--color-text)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      For Enterprise
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div className="px-4 pb-6 space-y-3 border-t border-[var(--color-border)] pt-4">
                <button
                  onClick={() => { onOpenEnquiry(); setMobileOpen(false); }}
                  className="btn-primary w-full justify-center"
                >
                  Get Started
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
