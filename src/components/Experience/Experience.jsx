import React from "react";

function Experience() {
  const data = [
    {
      year: "Feb 2025 - Present",
      title: "Angular / Ionic Developer",
      company: "Macreel Infosoft Pvt. Ltd.",
      desc: "Working on scalable mobile & web apps, CMS mobile app, and school management system.",
      tech: ["Angular", "Ionic", "TypeScript", "MySQL"],
    },
    {
      year: "2024",
      title: "React Native Developer",
      company: "Personal Projects",
      desc: "Built Vakil Uncle app with chat, calling, payments & notifications.",
      tech: ["React Native", "Firebase", "Redux"],
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Learning Phase",
      desc: "Learned Angular, React, TypeScript and built multiple real-world projects.",
      tech: ["HTML/CSS", "JS", "Tailwind"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-black via-[#0f172a] to-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-blue-500">Experience</span>
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line - Hidden on small mobile, visible on tablet+ */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-400 to-transparent opacity-30"></div>

          {data.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between mb-16 w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-row`}
            >
              {/* Dot with Pulse Effect */}
              <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 z-20">
                <div className="relative flex items-center justify-center">
                  <div className="absolute h-6 w-6 rounded-full bg-blue-500 animate-ping opacity-20"></div>
                  <div className="h-4 w-4 rounded-full bg-blue-600 border-4 border-slate-950 shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
                </div>
              </div>

              {/* Content Card */}
              <div
                className="w-full md:w-[45%] pl-12 md:pl-0"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className="p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-all duration-500 group shadow-xl">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4 tracking-wider uppercase">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-blue-200/70 font-medium mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {item.company}
                  </p>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] bg-slate-800 text-slate-300 rounded border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty Space for Desktop Grid */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
