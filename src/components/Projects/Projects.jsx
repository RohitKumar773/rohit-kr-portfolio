import React, { useState } from "react";
import { PROJECTS_DATA } from "../../data/portfolioData";
import {
  PlayStoreIcon,
  ExternalLinkIcon,
  CheckIcon,
  CloseIcon,
  SmartphoneIcon,
  SparklesIcon
} from "../Icons";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = [
    { id: "all", label: "All Apps (7)" },
    { id: "Legal Tech", label: "Legal Tech" },
    { id: "EdTech & Medical", label: "EdTech & Medical" },
    { id: "GovTech & Enterprise", label: "GovTech & Enterprise" },
    { id: "Enterprise & Operations", label: "Workforce & CMS" },
    { id: "CivicTech & Field", label: "CivicTech & CRM" },
    { id: "TravelTech & B2B", label: "Travel & B2B" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12">
        {/* SECTION HEADER */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <PlayStoreIcon className="w-3.5 h-3.5" />
            <span>Google Play Store Production Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-gradient">Mobile Applications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            All 7 live mobile applications engineered, deployed, and maintained on Google Play Store with real users, payment gateways, and real-time architectures.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div data-aos="fade-up" className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group relative flex flex-col bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              {/* IMAGE / MOCKUP CONTAINER */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950 flex items-center justify-center border-b border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Badges Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase rounded-full bg-slate-950/80 backdrop-blur-md text-blue-400 border border-blue-500/30 shadow-md">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] font-bold tracking-wide rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30 shadow-md">
                    {project.badge}
                  </span>
                </div>

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-xs text-blue-400 font-medium line-clamp-1">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.overview}
                  </p>
                </div>

                {/* KEY HIGHLIGHTS CHECKLIST */}
                <div className="space-y-1.5 py-2 border-y border-slate-800/80">
                  {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckIcon className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* TECH STACK BADGES */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-slate-800/80 text-slate-300 rounded border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* CARD FOOTER BUTTONS */}
                <div className="pt-2 flex items-center gap-2.5">
                  {/* Google Play Store Direct Link */}
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-md shadow-blue-600/20 hover:shadow-blue-500/40 transition-all hover:scale-[1.02]"
                  >
                    <PlayStoreIcon className="w-4 h-4" />
                    <span>Google Play</span>
                    <ExternalLinkIcon className="w-3 h-3 text-blue-200" />
                  </a>

                  {/* Details Trigger */}
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="py-2.5 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition"
                    title="View Full Case Study"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED PROJECT MODAL */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-60 sm:h-72 w-full bg-slate-950 border-b border-slate-800">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/80 hover:bg-slate-900 text-white rounded-full transition"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-4 flex gap-2">
                <span className="px-2.5 py-1 text-xs font-bold bg-blue-600 text-white rounded-md">
                  {activeProjectModal.category}
                </span>
                <span className="px-2.5 py-1 text-xs font-bold bg-slate-900/90 text-slate-200 rounded-md border border-slate-700">
                  {activeProjectModal.badge}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {activeProjectModal.name}
                </h3>
                <p className="text-sm text-blue-400 font-medium">
                  {activeProjectModal.subtitle}
                </p>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  Package ID: {activeProjectModal.packageId}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeProjectModal.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Technical Achievements
                </h4>
                <div className="space-y-2">
                  {activeProjectModal.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-800 text-blue-300 rounded-lg border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs text-slate-400 font-mono">
                Platform: <strong className="text-slate-200">Google Play Store</strong>
              </span>

              <a
                href={activeProjectModal.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-6 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition"
              >
                <PlayStoreIcon className="w-4 h-4" />
                <span>Open in Google Play Store</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
