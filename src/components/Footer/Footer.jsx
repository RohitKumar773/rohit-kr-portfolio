import React from "react";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { FileTextIcon } from "../Icons";

export default function Footer({ onOpenResume }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand */}
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold text-white">Rohit Kumar</span>
            <span className="text-blue-500 font-mono text-sm">//</span>
            <span className="text-xs font-mono text-slate-400">Mobile Dev</span>
          </div>
          <p className="text-xs text-slate-500 text-center md:text-left">
            Engineering robust cross-platform mobile apps for iOS & Android.
          </p>
        </div>

        {/* Center Quick Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-400">
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-blue-400 transition">
            Experience
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
          <button
            onClick={onOpenResume}
            className="text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
          >
            <FileTextIcon className="w-3.5 h-3.5" />
            Resume
          </button>
        </div>

        {/* Right Back to Top & Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <button
            onClick={scrollToTop}
            className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition"
          >
            ↑ Back to Top
          </button>
          <p className="text-[11px] text-slate-500 font-mono">
            © {currentYear} Rohit Kumar. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}