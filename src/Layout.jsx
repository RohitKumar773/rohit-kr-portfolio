import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import ResumeModal from "./components/ResumeModal/ResumeModal";

export default function Layout() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#030712] text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-blue-300">
      {/* Top Navbar */}
      <Header onOpenResume={() => setResumeOpen(true)} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* Hero Section (via Outlet) */}
        <Outlet context={{ onOpenResume: () => setResumeOpen(true) }} />
        
        {/* Detailed Sections */}
        <About onOpenResume={() => setResumeOpen(true)} />
        <Skills />
        <Projects />
        <Experience />
        <Contact onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Interactive Recruiter ATS Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
