import React from "react";
import project1 from "../../assets/lcmis.png";
import project2 from "../../assets/macreelweb.png";
import project3 from "../../assets/sms.png";
import project4 from "../../assets/vakiluncle.png";

function Projects() {
  const projects = [
    {
      image: project1,
      name: "LCMIS",
      desc: "Developed and maintained a Legal Case Management Information System for a government client, streamlining case tracking, document handling, and real-time notifications.",
      live: "https://play.google.com/store/apps/details?id=com.lcmis.mac.app&hl=en_IN",
      code: "https://github.com/RohitKumar773",
    },
    {
      image: project4,
      name: "Vakil Uncle",
      desc: "Built a full-featured legal service platform connecting clients and advocates with chat, calling, payments, and seamless case management.",
      live: "https://play.google.com/store/apps/details?id=com.vakiluncle.app",
      code: "https://github.com/RohitKumar773",
    },
    {
      image: project2,
      name: "Macreel Website",
      desc: "Official company website with modern UI & performance",
      live: "https://macreel.co.in/",
      code: "https://github.com/RohitKumar773",
    },
    {
      image: project3,
      name: "School Management System",
      desc: "Full-featured system for managing students & data",
      live: "https://swami-vivaknand-school.vercel.app/",
      code: "https://github.com/RohitKumar773/SwamiVivaknandSchoolweb",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gradient-to-b from-black via-[#0f172a] to-black text-white px-4 sm:px-6 md:px-10 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Featured <span className="text-blue-500">Projects</span>
        </h1>

        {/* GRID - Updated to 4 columns on extra large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl bg-slate-900/50 border border-white/5 shadow-xl transition-all duration-300 hover:border-blue-500/30"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* IMAGE - Reduced height to h-48 for compact look */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                {/* Subtle bottom gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              </div>

              {/* DARK OVERLAY (HOVER) */}
              <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center p-5 text-center">
                <h2 className="text-lg font-bold text-white mb-2">
                  {project.name}
                </h2>
                <p className="text-xs text-gray-400 mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* BUTTONS - Compact size */}
                <div className="flex justify-center gap-2">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <button className="px-4 py-1.5 text-xs font-semibold rounded bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
                      Live
                    </button>
                  </a>
                  {/* <a href={project.code} target="_blank" rel="noreferrer">
                    <button className="px-4 py-1.5 text-xs font-semibold rounded border border-white/20 hover:bg-white/10 transition-colors">
                      Code
                    </button>
                  </a> */}
                </div>
              </div>

              {/* BOTTOM INFO - Visible when not hovering */}
              <div className="p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h2 className="text-sm font-bold truncate">{project.name}</h2>
                <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider font-mono">
                  View Details →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
