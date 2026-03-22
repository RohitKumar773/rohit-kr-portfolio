import React from "react";
import portfrolioimg from "../../assets/portfolio.png";
import Resume from "../../assets/myresume.pdf";

function Home() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center 
      bg-gradient-to-b from-black via-[#0f172a] to-black text-white px-4 sm:px-6 md:px-10"
      id="home"
    >
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10"
      >
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          {/* Intro */}
          <p className="text-blue-400 font-medium text-sm sm:text-base">
            👋 Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Rohit Kumar
          </h1>

          {/* Role */}
          <h2
            className="text-lg sm:text-xl md:text-2xl font-semibold 
          bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text"
          >
            Frontend Developer | React Native | Angular
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            I build scalable, high-performance web and mobile applications with
            clean UI and real-world functionality.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-center md:justify-start">
            {/* Resume */}
            <a href={Resume} download>
              <button
                className="w-full sm:w-auto px-6 py-3 rounded-full 
              bg-gradient-to-r from-blue-600 to-indigo-600 font-medium 
              shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300"
              >
                Download CV →
              </button>
            </a>

            {/* Contact */}
            <a href="#contact">
              <button
                className="w-full sm:w-auto px-6 py-3 rounded-full 
              border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Contact Me
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Outer Glow (big soft blur) */}
          <div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 
  bg-blue-500/30 rounded-full blur-[120px]"
          ></div>

          {/* Inner Glow (focused light) */}
          <div
            className="absolute w-40 h-40 sm:w-60 sm:h-60 
  bg-indigo-500/40 rounded-full blur-[80px]"
          ></div>

          {/* Image */}
          <img
            src={portfrolioimg}
            alt="Rohit Developer"
            className="relative z-10 w-52 sm:w-64 md:w-80 lg:w-[380px] 
    drop-shadow-[0_20px_40px_rgba(59,130,246,0.4)]
    hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
