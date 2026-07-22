"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Metrics from "@/components/sections/Metrics";
import Solutions from "@/components/sections/Solutions";
import AccredianEdge from "@/components/sections/AccredianEdge";
import CATFramework from "@/components/sections/CATFramework";
import LearningJourney from "@/components/sections/LearningJourney";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import EnquiryModal from "@/components/common/EnquiryModal";

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");

  const handleOpenEnquiry = (programName = "") => {
    setSelectedProgram(programName);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setSelectedProgram("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-grow" role="main">
        {/* Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* Trusted By Partner Logos & Marquees */}
        <TrustedBy />

        {/* Metrics Section (Dark BG) */}
        <Metrics />

        {/* Solutions Grid */}
        <Solutions onOpenEnquiry={handleOpenEnquiry} />

        {/* Bento Grid (Accredian Edge) */}
        <AccredianEdge />

        {/* CAT Methodology Framework (Dark BG) */}
        <CATFramework onOpenEnquiry={handleOpenEnquiry} />

        {/* Learning Journey (Timeline) */}
        <LearningJourney />

        {/* How It Works (Numbered steps) */}
        <HowItWorks onOpenEnquiry={handleOpenEnquiry} />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Enterprise CTA (Dark BG) */}
        <CTA onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Enquiry Form Modal (3-step) */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialProgram={selectedProgram}
        key={selectedProgram + isEnquiryOpen}
      />
    </div>
  );
}
