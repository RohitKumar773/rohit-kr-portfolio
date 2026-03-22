import React from "react";

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#020617] text-white px-4 sm:px-6 md:px-10 py-20 flex items-center"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">

        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          About <span className="text-blue-500">Me</span>
        </h1>

        {/* SUB HEADING */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300">
          Frontend & Mobile App Developer crafting scalable and user-friendly applications
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm sm:text-base leading-7">
          Hello 👋, I’m <span className="text-white font-semibold">Rohit Kumar</span>.
          I specialize in building modern web and mobile applications with a strong focus on
          performance, scalability, and clean user interfaces. I enjoy transforming complex
          ideas into simple, elegant solutions that deliver real value.
        </p>

        <p className="text-gray-400 text-sm sm:text-base leading-7">
          With hands-on experience in real-world projects, I continuously strive to improve
          my development skills and stay updated with the latest technologies. I am passionate
          about writing maintainable code and building products that users love.
        </p>

        {/* CTA */}
        <div className="pt-6">
          <a href="#contact">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 
            text-white font-medium shadow-lg hover:scale-105 hover:shadow-blue-500/50 
            transition-all duration-300">
              Let’s Connect 🚀
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;