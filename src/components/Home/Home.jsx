import React from "react";
import { useOutletContext } from "react-router-dom";
import profileImg from "../../assets/rohit-img.png";
import resumePdf from "../../assets/rohitKumar_Resume.pdf";
import { PERSONAL_INFO } from "../../data/portfolioData";
import {
  DownloadIcon,
  FileTextIcon,
  PlayStoreIcon,
  ArrowRightIcon,
  SparklesIcon,
  SmartphoneIcon,
  CheckIcon
} from "../Icons";

export default function Home({ onOpenResume }) {
  const outletCtx = useOutletContext();
  const handleOpenResume = onOpenResume || outletCtx?.onOpenResume;

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-mesh-dark overflow-hidden"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="relative max-w-7xl w-full mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold tracking-wide"
            >
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Mobile Application & React Native Specialist</span>
            </div>

            {/* Name Heading */}
            <div data-aos="fade-up" data-aos-delay="100" className="space-y-2">
              <p className="text-slate-400 font-medium text-base sm:text-lg">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Rohit <span className="text-gradient">Kumar</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-300">
                React Native Developer • Cross-Platform Mobile Engineer
              </h2>
            </div>

            {/* Value Proposition */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              With <strong className="text-white font-semibold">1.9+ years of professional experience</strong>, I build scalable, high-performance mobile applications for <strong className="text-white font-semibold">iOS & Android</strong>. Specialist in Razorpay payment gateways, real-time chat (WebRTC/SignalR), push notifications, offline SQLite databases, and seamless OTA deployment.
            </p>

            {/* CTA BUTTONS */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              {/* Projects CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 rounded-full shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                <PlayStoreIcon className="w-4 h-4" />
                <span>Explore 7 Live Apps</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>

              {/* View ATS Resume */}
              <button
                onClick={handleOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/40 rounded-full shadow-md hover:scale-105 transition-all duration-300"
              >
                <FileTextIcon className="w-4 h-4 text-blue-400" />
                <span>View ATS Resume</span>
              </button>

              {/* Download PDF */}
              <a
                href={resumePdf}
                download="Rohit_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-400 hover:text-white border border-white/10 hover:border-white/20 rounded-full hover:bg-white/5 transition-all duration-300"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>CV (.pdf)</span>
              </a>
            </div>

            {/* METRICS & STATS BAR */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-3 text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT PROFILE & FLOATING BADGES */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-full lg:w-2/5 flex justify-center relative select-none"
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-400/20 blur-3xl animate-pulse-slow pointer-events-none"></div>

            <div className="relative">
              {/* Outer decorative gradient border ring */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-blue-500 via-indigo-600 to-cyan-400 shadow-2xl shadow-blue-500/30">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 p-1">
                  <img
                    src={profileImg}
                    alt="Rohit Kumar"
                    className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Pill 1: Top Right */}
              <div className="absolute -top-3 -right-4 sm:-right-8 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <SmartphoneIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-white">React Native</div>
                  <div className="text-[9px] text-slate-400">iOS & Android CLI</div>
                </div>
              </div>

              {/* Floating Pill 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5 animate-float [animation-delay:2s]">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckIcon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-white">7 Live Apps</div>
                  <div className="text-[9px] text-slate-400">Google Play Store</div>
                </div>
              </div>

              {/* Floating Pill 3: Bottom Right */}
              <div className="absolute bottom-6 -right-2 sm:-right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-2xl shadow-xl flex items-center gap-2 animate-float [animation-delay:4s]">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                <span className="text-[10px] font-mono font-semibold text-slate-200">
                  SQLite • Redux • EAS
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
