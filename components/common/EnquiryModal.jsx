"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Check, Loader2, Building2, User, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const STEPS = [
  { id: 1, title: "Personal Details", icon: User, description: "Tell us about yourself" },
  { id: 2, title: "Company Details", icon: Building2, description: "About your organisation" },
  { id: 3, title: "Requirements", icon: MessageSquare, description: "What you're looking for" },
];

const PROGRAM_OPTIONS = [
  "Generative AI & ML",
  "Leadership Elevation",
  "Product & Innovation",
  "Tech & Data Insights",
  "Fintech Innovation",
  "Operations Excellence",
  "Other",
];

const TEAM_SIZE_OPTIONS = ["1–10", "11–50", "51–200", "201–500", "500+"];

const defaultFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  companyName: "",
  designation: "",
  teamSize: "",
  industry: "",
  program: "",
  timeline: "",
  message: "",
};

function FieldError({ message }) {
  if (!message) return null;
  return <p className="text-red-500 text-xs mt-1" role="alert">{message}</p>;
}

export default function EnquiryModal({ isOpen, onClose, initialProgram = "" }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    ...defaultFormData,
    program: initialProgram,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back

  const update = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => { const e = { ...prev }; delete e[field]; return e; });
  };

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
      else if (!/^\+?[\d\s\-()]{8,}$/.test(formData.phone)) newErrors.phone = "Enter a valid phone number";
    }
    if (step === 2) {
      if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
      if (!formData.designation.trim()) newErrors.designation = "Designation is required";
      if (!formData.teamSize) newErrors.teamSize = "Please select team size";
    }
    if (step === 3) {
      if (!formData.program) newErrors.program = "Please select a program";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    if (step < 3) { setDirection(1); setStep((s) => s + 1); }
  };

  const prevStep = () => { setDirection(-1); setStep((s) => s - 1); };

 const handleSubmit = async () => {
  if (!validateStep()) return;

  setStatus("loading");

  try {
    await addDoc(collection(db, "enquiries"), {
      ...formData,
      status: "new",
      createdAt: serverTimestamp(),
    });

    setStatus("success");

    setFormData(defaultFormData);
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setFormData(defaultFormData);
      setErrors({});
      setStatus("idle");
    }, 300);
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 32 : -32 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-lg bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden max-h-[90vh]"
          >
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-[var(--color-border)] flex-shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-1">
                    Enterprise Enquiry
                  </p>
                  <h2 id="enquiry-title" className="font-heading text-xl font-bold text-[var(--color-dark)]">
                    {status === "success" ? "Thank you!" : "Get Started with Accredian"}
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="p-1.5 rounded-lg text-[var(--color-muted)] hover:bg-gray-100 hover:text-[var(--color-text)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Progress bar */}
              {status !== "success" && (
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    {STEPS.map((s, i) => (
                      <div key={s.id} className="flex items-center gap-2 flex-1">
                        <div className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 flex-shrink-0",
                          step > s.id ? "bg-[var(--color-primary)] text-white" :
                          step === s.id ? "bg-[var(--color-primary)] text-white ring-4 ring-[var(--color-primary)]/20" :
                          "bg-[var(--color-border)] text-[var(--color-muted)]"
                        )}>
                          {step > s.id ? <Check size={12} /> : s.id}
                        </div>
                        <span className={cn(
                          "text-xs font-medium hidden sm:block",
                          step >= s.id ? "text-[var(--color-text)]" : "text-[var(--color-muted)]"
                        )}>
                          {s.title}
                        </span>
                        {i < STEPS.length - 1 && (
                          <div className={cn(
                            "flex-1 h-px transition-all duration-300",
                            step > s.id ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"
                          )} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait" custom={direction}>
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center px-6 py-12 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <Check size={28} className="text-green-500" />
                      </motion.div>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[var(--color-dark)]">
                      Enquiry Submitted!
                    </h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed max-w-xs">
                      Our enterprise learning consultant will reach out within <strong>24 hours</strong> to schedule your needs assessment call.
                    </p>
                    <button onClick={handleClose} className="btn-primary mt-2">
                      Done
                    </button>
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center px-6 py-10 text-center gap-4"
                  >
                    <p className="text-[var(--color-muted)]">Something went wrong. Please try again.</p>
                    <button onClick={() => setStatus("idle")} className="btn-ghost text-sm">
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={step}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="px-6 py-6 space-y-4"
                  >
                    {/* Step 1: Personal */}
                    {step === 1 && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="form-label" htmlFor="firstName">First Name *</label>
                            <input id="firstName" type="text" className={cn("form-input", errors.firstName && "error")} placeholder="Priya" value={formData.firstName} onChange={e => update("firstName", e.target.value)} autoComplete="given-name" />
                            <FieldError message={errors.firstName} />
                          </div>
                          <div>
                            <label className="form-label" htmlFor="lastName">Last Name *</label>
                            <input id="lastName" type="text" className={cn("form-input", errors.lastName && "error")} placeholder="Sharma" value={formData.lastName} onChange={e => update("lastName", e.target.value)} autoComplete="family-name" />
                            <FieldError message={errors.lastName} />
                          </div>
                        </div>
                        <div>
                          <label className="form-label" htmlFor="email">Work Email *</label>
                          <input id="email" type="email" className={cn("form-input", errors.email && "error")} placeholder="priya@company.com" value={formData.email} onChange={e => update("email", e.target.value)} autoComplete="email" />
                          <FieldError message={errors.email} />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="phone">Phone Number *</label>
                          <input id="phone" type="tel" className={cn("form-input", errors.phone && "error")} placeholder="+91 98765 43210" value={formData.phone} onChange={e => update("phone", e.target.value)} autoComplete="tel" />
                          <FieldError message={errors.phone} />
                        </div>
                      </>
                    )}

                    {/* Step 2: Company */}
                    {step === 2 && (
                      <>
                        <div>
                          <label className="form-label" htmlFor="companyName">Company Name *</label>
                          <input id="companyName" type="text" className={cn("form-input", errors.companyName && "error")} placeholder="Acme Technologies" value={formData.companyName} onChange={e => update("companyName", e.target.value)} autoComplete="organization" />
                          <FieldError message={errors.companyName} />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="designation">Your Designation *</label>
                          <input id="designation" type="text" className={cn("form-input", errors.designation && "error")} placeholder="Head of L&D / CTO / CHRO" value={formData.designation} onChange={e => update("designation", e.target.value)} autoComplete="organization-title" />
                          <FieldError message={errors.designation} />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="teamSize">Team Size *</label>
                          <select id="teamSize" className={cn("form-input", errors.teamSize && "error")} value={formData.teamSize} onChange={e => update("teamSize", e.target.value)}>
                            <option value="">Select team size</option>
                            {TEAM_SIZE_OPTIONS.map(o => <option key={o} value={o}>{o} employees</option>)}
                          </select>
                          <FieldError message={errors.teamSize} />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="industry">Industry (Optional)</label>
                          <input id="industry" type="text" className="form-input" placeholder="Technology / BFSI / Healthcare..." value={formData.industry} onChange={e => update("industry", e.target.value)} />
                        </div>
                      </>
                    )}

                    {/* Step 3: Requirements */}
                    {step === 3 && (
                      <>
                        <div>
                          <label className="form-label">Program Interest *</label>
                          <div className="grid grid-cols-2 gap-2 mt-1">
                            {PROGRAM_OPTIONS.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => update("program", opt)}
                                className={cn(
                                  "text-left px-3 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200",
                                  formData.program === opt
                                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/8 text-[var(--color-primary)]"
                                    : "border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)]/40"
                                )}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                          <FieldError message={errors.program} />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="timeline">Preferred Timeline (Optional)</label>
                          <select id="timeline" className="form-input" value={formData.timeline} onChange={e => update("timeline", e.target.value)}>
                            <option value="">Select timeline</option>
                            <option>Immediately</option>
                            <option>Within 1 month</option>
                            <option>1–3 months</option>
                            <option>3–6 months</option>
                            <option>Planning ahead</option>
                          </select>
                        </div>
                        <div>
                          <label className="form-label" htmlFor="message">Additional Requirements (Optional)</label>
                          <textarea
                            id="message"
                            className="form-input resize-none"
                            rows={3}
                            placeholder="Tell us more about your specific learning objectives..."
                            value={formData.message}
                            onChange={e => update("message", e.target.value)}
                          />
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer actions */}
            {status !== "success" && status !== "error" && (
              <div className="px-6 py-4 border-t border-[var(--color-border)] flex items-center justify-between flex-shrink-0 gap-4">
                {step > 1 ? (
                  <button onClick={prevStep} className="btn-ghost flex items-center gap-2 text-sm py-2.5 px-4">
                    <ArrowLeft size={14} /> Back
                  </button>
                ) : <div />}

                {step < 3 ? (
                  <button onClick={nextStep} className="btn-primary flex items-center gap-2 text-sm">
                    Continue <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="btn-primary flex items-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <><Loader2 size={14} className="animate-spin" /> Submitting…</>
                    ) : (
                      <>Submit Enquiry <ArrowRight size={14} /></>
                    )}
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
