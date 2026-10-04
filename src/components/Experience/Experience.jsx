import React from "react";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "../../data/portfolioData";
import {
  BriefcaseIcon,
  GraduationCapIcon,
  CheckIcon,
  MapPinIcon,
  CalendarIcon,
  SparklesIcon
} from "../Icons";

export default function Experience() {
  const currentExp = EXPERIENCE_DATA[0];

  return (
    <section
      id="experience"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-[#0B0F19] to-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-14">
        {/* SECTION HEADER */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
            // Career Trajectory
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High-impact software engineering experience verified from my professional resume.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative pl-6 sm:pl-10 space-y-12 border-l-2 border-slate-800">
          
          {/* EXPERIENCE NODE */}
          <div data-aos="fade-up" className="relative group">
            {/* Timeline Pulsing Beacon */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
              <span className="absolute w-7 h-7 rounded-full bg-blue-500/20 animate-ping"></span>
              <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-slate-950 shadow-lg shadow-blue-500/50 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl transition-all duration-300">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {currentExp.status}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {currentExp.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {currentExp.role}
                  </h3>
                  <div className="text-base font-semibold text-blue-400 mt-0.5">
                    {currentExp.company}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 text-slate-200 font-semibold">
                    <CalendarIcon className="w-3.5 h-3.5 text-blue-400" />
                    {currentExp.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400 mt-1">
                    <MapPinIcon className="w-3.5 h-3.5 text-slate-500" />
                    {currentExp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Key Responsibilities & Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {currentExp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Tag Cloud */}
              <div className="pt-2 border-t border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2.5">
                  Applied Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentExp.techUsed.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-800/90 text-blue-300 rounded-lg border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* EDUCATION NODE */}
          <div data-aos="fade-up" className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-slate-800 border-4 border-slate-950 shadow-md flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <GraduationCapIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {EDUCATION_DATA.degree} – {EDUCATION_DATA.major}
                    </h3>
                    <p className="text-xs text-blue-400">
                      {EDUCATION_DATA.institution}
                    </p>
                  </div>
                </div>

                <span className="inline-block px-3 py-1 text-xs font-mono font-semibold rounded-lg bg-slate-800 text-slate-300 border border-slate-700/60 self-start sm:self-center">
                  {EDUCATION_DATA.period}
                </span>
              </div>

              <div className="pt-2 text-xs text-slate-400 leading-relaxed">
                Foundational coursework in Object-Oriented Software Design, Data Structures & Algorithms, Database Systems (DBMS), and Modern Mobile App Architecture.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
