import React, { useState, useEffect } from "react";
import { MenuIcon, CloseIcon, FileTextIcon, MailIcon } from "../Icons";

export default function Header({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-white text-lg">
              R<span className="text-blue-400">K</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-blue-400 transition flex items-center gap-1.5">
              Rohit Kumar
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for work"></span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest -mt-0.5">
              React Native Dev
            </span>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white rounded-full hover:bg-white/5 transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-4"></span>
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Resume Trigger */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-full shadow-sm hover:border-blue-500/40 transition-all hover:scale-[1.02]"
          >
            <FileTextIcon className="w-3.5 h-3.5 text-blue-400" />
            <span>Resume</span>
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all hover:scale-[1.02]"
          >
            <MailIcon className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium"
            title="Resume"
          >
            <FileTextIcon className="w-4 h-4 text-blue-400" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-xl"
            >
              <FileTextIcon className="w-4 h-4 text-blue-400" />
              View ATS Resume
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-600/30"
            >
              <MailIcon className="w-4 h-4" />
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}