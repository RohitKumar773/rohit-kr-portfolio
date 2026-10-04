import React from "react";
import { CORE_COMPETENCIES, EDUCATION_DATA, PERSONAL_INFO } from "../../data/portfolioData";
import {
  LayersIcon,
  CreditCardIcon,
  MessageSquareIcon,
  DatabaseIcon,
  BellIcon,
  RocketIcon,
  GraduationCapIcon,
  FileTextIcon,
  MapPinIcon,
  MailIcon,
  PhoneIcon
} from "../Icons";

export default function About({ onOpenResume }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Layers":
        return <LayersIcon className="w-5 h-5 text-blue-400" />;
      case "CreditCard":
        return <CreditCardIcon className="w-5 h-5 text-indigo-400" />;
      case "MessageSquare":
        return <MessageSquareIcon className="w-5 h-5 text-cyan-400" />;
      case "Database":
        return <DatabaseIcon className="w-5 h-5 text-emerald-400" />;
      case "Bell":
        return <BellIcon className="w-5 h-5 text-amber-400" />;
      case "Rocket":
        return <RocketIcon className="w-5 h-5 text-purple-400" />;
      default:
        return <LayersIcon className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="about"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Subtle Ambient Lights */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
            // About Rohit Kumar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Crafting Apps That <span className="text-gradient">Scale Seamlessly</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A dedicated Mobile Application Developer driven by clean component design, deterministic state management, and production stability.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* BIO & QUICK DETAILS GRID */}
        <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story (8 Cols) */}
          <div className="lg:col-span-8 bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              Architecting Production-Ready Mobile Experiences
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a results-driven <strong className="text-white">React Native Mobile Developer</strong> with <strong className="text-white">1.9 years of professional experience</strong> at Macreel Infosoft Pvt. Ltd., where I lead the architecture and implementation of scalable cross-platform applications for Android and iOS.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              My core expertise lies in developing end-to-end mobile products—from low-latency real-time chat (WebRTC/SignalR) and seamless Razorpay payment integrations to offline-first architectures utilizing embedded SQLite databases. I take applications from ideation to Google Play Store and Apple App Store deployment, ensuring high crash-free session rates and fluid 60 FPS interfaces.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Having published <strong className="text-white font-medium">7 live production applications</strong> spanning Legal Tech, EdTech (5K+ downloads), Enterprise CMS, Election CRM, and B2B Travel systems, I thrive on solving complex architectural challenges with reusable, clean TypeScript code.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition"
              >
                <FileTextIcon className="w-4 h-4" />
                <span>View Full ATS Resume</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-xl border border-slate-700 transition"
              >
                <span>Explore Live Projects</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Quick Info & Education Card (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Contact Snapshot */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
                Quick Snapshot
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-blue-400" /> Location
                  </span>
                  <span className="font-semibold text-slate-200">{PERSONAL_INFO.location}</span>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-blue-400" /> Phone
                  </span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="font-semibold text-blue-400 hover:underline">
                    {PERSONAL_INFO.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center justify-between text-slate-400">
                  <span className="flex items-center gap-2">
                    <MailIcon className="w-4 h-4 text-blue-400" /> Email
                  </span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-slate-200 hover:text-blue-400 truncate max-w-[170px]">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="flex items-center justify-between text-slate-400 pt-2 border-t border-slate-800/80">
                  <span>Current Employment</span>
                  <span className="font-semibold text-emerald-400">Macreel Infosoft</span>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-400">
                <GraduationCapIcon className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  Education
                </h4>
              </div>

              <div>
                <h5 className="text-sm font-bold text-white">
                  {EDUCATION_DATA.degree}
                </h5>
                <p className="text-xs text-blue-400 font-medium">
                  {EDUCATION_DATA.major}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {EDUCATION_DATA.institution}
                </p>
                <div className="inline-block mt-2 px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
                  {EDUCATION_DATA.period}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* CORE COMPETENCIES / WHAT I BRING */}
        <div data-aos="fade-up" className="space-y-6 pt-6">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-white">
              Core Engineering <span className="text-gradient">Competencies</span>
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Key specialized domains mastered through high-stakes production delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_COMPETENCIES.map((comp, index) => (
              <div
                key={index}
                className="group p-5 bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  {getIcon(comp.icon)}
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                  {comp.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}