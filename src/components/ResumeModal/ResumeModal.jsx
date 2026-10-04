import React, { useState } from "react";
import {
  PrinterIcon,
  DownloadIcon,
  CopyIcon,
  CheckIcon,
  CloseIcon,
  ExternalLinkIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon
} from "../Icons";
import resumePdf from "../../assets/rohitKumar_Resume.pdf";
import { PERSONAL_INFO, PROJECTS_DATA, EXPERIENCE_DATA, EDUCATION_DATA } from "../../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const plainText = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title}
Noida, UP, India | Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
Portfolio: ${PERSONAL_INFO.portfolioUrl} | GitHub: ${PERSONAL_INFO.githubUrl} | LinkedIn: ${PERSONAL_INFO.linkedinUrl}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bio}

TECHNICAL SKILLS
- Mobile Development: React Native (CLI & Expo), Android with Kotlin, iOS Development, Expo Go, OTA Updates (Expo/EAS), App Deployment
- Languages: JavaScript (ES6+), TypeScript
- Frameworks & Libraries: React Native, React.js, Angular, Ionic
- State & Navigation: Redux, Redux Toolkit, React Navigation, Deep Linking, Context API
- APIs & Storage: REST APIs, Axios, Fetch API, SQLite, AsyncStorage, Secure Storage, Firebase Firestore
- Authentication & Integrations: JWT Authentication, Google OAuth, Razorpay Payment Integration, Push Notifications (FCM/APNs), Real-Time Chat, WebRTC
- Tools & Platforms: Git, GitHub, Postman, Android Studio, Xcode, Firebase, EAS CLI

PROFESSIONAL EXPERIENCE
${EXPERIENCE_DATA[0].company} (${EXPERIENCE_DATA[0].duration})
${EXPERIENCE_DATA[0].role} — ${EXPERIENCE_DATA[0].location}
${EXPERIENCE_DATA[0].bullets.map(b => "• " + b).join("\n")}

KEY LIVE PROJECTS (GOOGLE PLAY STORE)
${PROJECTS_DATA.map(p => `• ${p.name} (${p.category})
  Play Store: ${p.playStoreUrl}
  Tech: ${p.techStack.join(", ")}
  ${p.overview}
  Highlights: ${p.highlights.join(" | ")}`).join("\n\n")}

EDUCATION
${EDUCATION_DATA.degree} – ${EDUCATION_DATA.major} (${EDUCATION_DATA.period})
${EDUCATION_DATA.institution}
    `.trim();

    navigator.clipboard.writeText(plainText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md transition-all">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800 gap-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-slate-200">
              Rohit Kumar — Professional Resume
            </span>
            <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-medium bg-blue-500/20 text-blue-300 rounded border border-blue-500/30">
              ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Copy Plain Text */}
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
              title="Copy ATS text version to clipboard"
            >
              {copied ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
              {copied ? "Copied!" : "Copy Text"}
            </button>

            {/* Print / Save PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
              title="Print or Save as PDF"
            >
              <PrinterIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>Print / PDF</span>
            </button>

            {/* Download Original PDF */}
            <a
              href={resumePdf}
              download="Rohit_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition"
              title="Download PDF File"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition ml-1"
              aria-label="Close resume modal"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900 text-slate-200" id="printable-resume">
          {/* Header */}
          <div className="border-b border-slate-700/60 pb-6 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1.5">
              ROHIT KUMAR
            </h1>
            <p className="text-base sm:text-lg font-bold text-blue-400 tracking-wide uppercase mb-4">
              MOBILE APPLICATION DEVELOPER • REACT NATIVE DEVELOPER
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <MapPinIcon className="w-4 h-4 text-blue-400" /> Noida, UP, India
              </span>
              <span className="flex items-center gap-1.5">
                <PhoneIcon className="w-4 h-4 text-blue-400" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-blue-400 transition">
                  {PERSONAL_INFO.phoneDisplay}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <MailIcon className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-400 transition">
                  {PERSONAL_INFO.email}
                </a>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-blue-400">
              <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                rohit-kr-portfolio.vercel.app <ExternalLinkIcon className="w-3 h-3" />
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                github.com/RohitKumar773 <ExternalLinkIcon className="w-3 h-3" />
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                linkedin.com/in/rohit-kumar <ExternalLinkIcon className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-700/60 pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed text-justify">
              Results-driven React Native Mobile Developer with 1.9 years of professional experience, engineering scalable high-performance cross-platform applications for iOS and Android. Expert in integrating secure JWT authentication, Razorpay payment gateways, Google OAuth, real-time chat, and push notifications (FCM/APNs). Proficient in end-to-end app deployment, OTA updates via Expo/EAS, and building clean, component-based architectures to optimize application performance and deliver seamless user experiences.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-700/60 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-white">Mobile Development:</span>{" "}
                <span className="text-slate-300">
                  React Native (CLI & Expo), Android with Kotlin, iOS Development, Expo Go, OTA Updates (Expo/EAS), App Deployment
                </span>
              </div>
              <div>
                <span className="font-semibold text-white">Languages:</span>{" "}
                <span className="text-slate-300">JavaScript (ES6+), TypeScript</span>
              </div>
              <div>
                <span className="font-semibold text-white">Frameworks & Libraries:</span>{" "}
                <span className="text-slate-300">React Native, React.js, Angular, Ionic</span>
              </div>
              <div>
                <span className="font-semibold text-white">State & Navigation:</span>{" "}
                <span className="text-slate-300">Redux, Redux Toolkit, React Navigation, Deep Linking, Context API</span>
              </div>
              <div>
                <span className="font-semibold text-white">APIs & Storage:</span>{" "}
                <span className="text-slate-300">
                  REST APIs, Axios, Fetch API, SQLite, AsyncStorage, Secure Storage, Firebase Firestore
                </span>
              </div>
              <div>
                <span className="font-semibold text-white">Authentication & Integrations:</span>{" "}
                <span className="text-slate-300">
                  JWT Authentication, Google OAuth, Razorpay Payment Integration, Push Notifications (FCM/APNs), Real-Time Chat, WebRTC, SignalR
                </span>
              </div>
              <div>
                <span className="font-semibold text-white">Tools & Platforms:</span>{" "}
                <span className="text-slate-300">Git, GitHub, Postman, Android Studio, Xcode, Firebase, EAS CLI</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-700/60 pb-1 mb-4">
              Professional Experience
            </h2>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">Macreel Infosoft Pvt. Ltd.</h3>
                  <p className="text-xs sm:text-sm text-blue-300 font-medium">
                    Mobile Application Developer (React Native & Mobile) — Noida, UP, India
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400 sm:text-right mt-1 sm:mt-0 bg-slate-800 px-2.5 py-1 rounded">
                  Feb 2025 – Present
                </span>
              </div>

              <ul className="list-disc list-outside pl-4 space-y-2 text-xs sm:text-sm text-slate-300">
                <li>
                  Engineered scalable cross-platform React Native applications for iOS & Android with clean architecture, reusable components, Redux Toolkit, React Navigation, and deep linking to deliver seamless production-grade user experiences.
                </li>
                <li>
                  Implemented secure JWT Authentication, Google OAuth, Razorpay Payment Integration, Real-Time Chat Features, Push Notifications (FCM/APNs), and secure REST API integration across multiple live mobile applications.
                </li>
                <li>
                  Managed end-to-end mobile app lifecycle including App Deployment, OTA updates (Expo/EAS), Firebase integration, CI/CD workflows, performance optimization, and production release management for enterprise and government-based applications.
                </li>
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-700/60 pb-1 mb-4">
              Key Production Projects (Live on Google Play Store)
            </h2>

            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="border-l-2 border-blue-500/40 pl-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {proj.name}
                      <span className="text-[11px] font-medium text-slate-400">({proj.category})</span>
                    </h3>
                    <a
                      href={proj.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-blue-400 hover:underline flex items-center gap-1"
                    >
                      Google Play Store <ExternalLinkIcon className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 mb-1">
                    <strong className="text-slate-300">Tech Stack:</strong> {proj.techStack.join(", ")}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-1.5">
                    {proj.overview}
                  </p>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-[11px] text-slate-400">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 border-b border-slate-700/60 pb-1 mb-3">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
              <div>
                <h3 className="text-sm font-bold text-white">
                  Bachelor of Computer Applications (BCA) – Computer Science
                </h3>
                <p className="text-xs text-slate-400">
                  Babasaheb Bhimrao Ambedkar Bihar University
                </p>
              </div>
              <span className="text-xs text-slate-400 mt-1 sm:mt-0 font-medium">
                2022 – Expected 2027
              </span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="px-6 py-3 bg-slate-950/90 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
