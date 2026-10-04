import React, { useState } from "react";
import { SKILLS_DATA, ALL_SKILLS } from "../../data/portfolioData";
import { SparklesIcon, DatabaseIcon, CodeIcon, SmartphoneIcon } from "../Icons";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "Mobile Engineering", label: "Mobile Dev" },
    { id: "Languages & Frameworks", label: "Languages & Web" },
    { id: "Databases & Local Storage", label: "Databases & Storage" },
    { id: "Styling & UI Systems", label: "Styling Systems" },
    { id: "Tools, VCS & CI/CD", label: "Tools & DevOps" },
  ];

  const displayedSkills =
    activeTab === "all"
      ? ALL_SKILLS
      : SKILLS_DATA.find((c) => c.category === activeTab)?.skills.map((s) => ({
          name: s.name,
          img: s.img,
          tag: s.badge || s.level,
        })) || [];

  return (
    <section
      id="skills"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-[#0B0F19] to-slate-950 text-white overflow-hidden"
    >
      {/* Background Subtle Gradient Spheres */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* SECTION HEADER */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
            // Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Specialized <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Targeted toolkit perfected for cross-platform mobile engineering, offline databases, and performant user interfaces.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div data-aos="fade-up" className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SKILLS CARDS GRID */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5"
        >
          {displayedSkills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
            >
              {/* Radial Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                {/* Skill Icon */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-md rounded-lg"
                  />
                </div>

                {/* Skill Title */}
                <p className="text-xs sm:text-sm font-bold text-white text-center group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </p>

                {/* Tag / Category Badge */}
                {skill.tag && (
                  <span className="mt-2 text-[10px] font-mono font-medium text-slate-400 bg-slate-800/90 px-2 py-0.5 rounded-md border border-slate-700/60 group-hover:text-slate-200">
                    {skill.tag}
                  </span>
                )}
              </div>
          ))}
        </div>

        {/* DETAILED CATEGORY CARDS ACCORDION/SECTION */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {SKILLS_DATA.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 border border-slate-800/90 rounded-2xl p-5 hover:border-blue-500/30 transition duration-300"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {cat.category}
                </h3>
                <span className="text-[11px] font-mono text-slate-500">
                  {cat.skills.length} skills
                </span>
              </div>

              <div className="space-y-2.5">
                {cat.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between text-xs py-1 px-2 rounded-lg hover:bg-slate-800/50 transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <img
                        src={s.img}
                        alt={s.name}
                        className="w-5 h-5 object-contain rounded"
                      />
                      <span className="font-medium text-slate-200">{s.name}</span>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-slate-800 text-blue-400 border border-slate-700">
                      {s.badge || s.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
