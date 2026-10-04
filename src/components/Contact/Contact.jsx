import React, { useState } from "react";
import { PERSONAL_INFO } from "../../data/portfolioData";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CopyIcon,
  CheckIcon,
  ExternalLinkIcon,
  FileTextIcon,
  SparklesIcon
} from "../Icons";

import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import twitterIcon from "../../assets/twitter.png";
import instaIcon from "../../assets/insta.png";

export default function Contact({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone).then(() => {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    });
  };

  const socials = [
    {
      name: "LinkedIn",
      url: PERSONAL_INFO.linkedinUrl,
      icon: linkedinIcon,
      handle: "rohit-kumar",
      description: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      url: PERSONAL_INFO.githubUrl,
      icon: githubIcon,
      handle: "RohitKumar773",
      description: "View GitHub Repositories",
    },
    {
      name: "Twitter / X",
      url: PERSONAL_INFO.twitterUrl,
      icon: twitterIcon,
      handle: "@RohitKu84499807",
      description: "Follow on Twitter/X",
    },
    {
      name: "Instagram",
      url: PERSONAL_INFO.instagramUrl,
      icon: instaIcon,
      handle: "__r_o_h_i_t__kumar__",
      description: "Personal Profile",
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto space-y-14">
        {/* SECTION HEADER */}
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 font-mono">
            // Professional Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Interested in collaborating or discussing mobile engineering opportunities? Reach out directly through any of the channels below.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* AVAILABILITY STATUS BANNER */}
        <div
          data-aos="fade-up"
          className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="relative flex items-center justify-center shrink-0">
              <span className="w-4 h-4 rounded-full bg-emerald-400 animate-ping absolute"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 relative"></span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Available for New Mobile Opportunities
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Open to Full-Time Roles, Contract Engagements & Cross-Platform Mobile Consulting.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              <MailIcon className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition"
            >
              <FileTextIcon className="w-4 h-4 text-blue-400" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* PRIMARY CONTACT CHANNELS (3 CARDS) */}
        <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Email Card */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-6 space-y-4 transition-all duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <MailIcon className="w-6 h-6" />
            </div>

            <div>
              <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                Direct Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors block truncate mt-1"
                title={PERSONAL_INFO.email}
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
              >
                {copiedEmail ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? "Copied" : "Copy"}</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 text-blue-400 hover:text-white bg-slate-800 hover:bg-blue-600 rounded-lg border border-slate-700 transition"
                title="Send Email"
              >
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/40 rounded-2xl p-6 space-y-4 transition-all duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
              <PhoneIcon className="w-6 h-6" />
            </div>

            <div>
              <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                Phone / WhatsApp
              </span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors block mt-1"
              >
                {PERSONAL_INFO.phoneDisplay}
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={handleCopyPhone}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition"
              >
                {copiedPhone ? <CheckIcon className="w-3.5 h-3.5 text-emerald-400" /> : <CopyIcon className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? "Copied" : "Copy"}</span>
              </button>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2 text-indigo-400 hover:text-white bg-slate-800 hover:bg-indigo-600 rounded-lg border border-slate-700 transition"
                title="Call Directly"
              >
                <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 hover:border-emerald-500/40 rounded-2xl p-6 space-y-4 transition-all duration-300 shadow-xl group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <MapPinIcon className="w-6 h-6" />
            </div>

            <div>
              <span className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                Location & Timezone
              </span>
              <div className="text-sm font-bold text-white mt-1">
                {PERSONAL_INFO.location}
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block px-3 py-1.5 text-xs font-mono font-semibold rounded-lg bg-slate-800 text-slate-300 border border-slate-700 w-full text-center">
                IST (UTC +5:30) • Remote Ready
              </span>
            </div>
          </div>
        </div>

        {/* SOCIAL PROFILES HUB */}
        <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">
              Professional Profiles & Code Repositories
            </h3>
            <p className="text-xs text-slate-400">
              Explore my open-source code contributions and professional network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-4 bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 hover:border-blue-500/40 rounded-2xl transition-all duration-300 shadow-lg group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>

                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1">
                    <span>{social.name}</span>
                    <ExternalLinkIcon className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition" />
                  </div>
                  <div className="text-[11px] text-slate-400 truncate">
                    {social.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
