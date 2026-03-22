import React from "react";

import angular from "../../assets/skill06.png";
import ionic from "../../assets/skill13.png";
import react from "../../assets/skill05.png";
import ts from "../../assets/skill08.png";
import js from "../../assets/skill03.png";
import tailwind from "../../assets/skill07.png";
import html from "../../assets/skill01.png";
import css from "../../assets/skill02.png";
import bootstrap from "../../assets/skill04.png";
import mysql from "../../assets/skill12.png";
import git from "../../assets/git.png";
import postman from "../../assets/postman.png";

import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import github from "../../assets/github.png";
import twitter from "../../assets/twitter.png";
import android from "../../assets/android.png";
import ios from "../../assets/ios.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import figma from "../../assets/figma.png";
import adobe from "../../assets/adobe.png";
import mongo from "../../assets/mongo.png";

function Skills() {
  const skills = [
    // Mobile Development Core
    { name: "React Native", img: react },
    { name: "Android Dev", img: android },
    { name: "iOS Dev", img: ios },
    { name: "Ionic", img: ionic },

    // Web/Frontend Skills
    { name: "Angular", img: angular },
    { name: "React JS", img: react },
    { name: "TypeScript", img: ts },
    { name: "JavaScript", img: js },
    { name: "HTML", img: html },
    { name: "CSS / SCSS", img: css },
    { name: "Tailwind CSS", img: tailwind },
    { name: "Bootstrap", img: bootstrap },

    // Backend / Database
    { name: "Node.js", img: node },
    { name: "Express", img: express },
    { name: "MySQL", img: mysql },
    { name: "MongoDB", img: mongo },

    // Tools / Version Control / API
    { name: "Git & GitHub", img: git },
    { name: "Postman", img: postman },

    // Design / UI
    { name: "Figma", img: figma },
    { name: "Adobe Photoshop", img: adobe },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-b from-black via-[#0f172a] to-black text-white px-4 sm:px-6 md:px-10 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-14">
          My <span className="text-blue-500">Tech Stack</span>
        </h1>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="group relative z-10 flex flex-col items-center justify-center 
bg-white/5 border border-white/10 rounded-xl p-5 
hover:scale-105 hover:border-blue-500/40 
transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div
                className="absolute w-20 h-20 bg-blue-500/20 blur-2xl opacity-0 
group-hover:opacity-100 transition duration-300 pointer-events-none"
              ></div>

              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-3 relative z-10"
              />

              <p className="text-sm text-center relative z-10">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* CONTACT SECTION */}
        <div
          className="mt-20 text-center bg-white/5 border border-white/10 
          rounded-2xl p-8 backdrop-blur-md relative overflow-hidden"
          data-aos="fade-up"
          id="contact"
        >
          {/* Glow */}
          <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-0 pointer-events-none"></div>

          <h2 className="text-2xl font-semibold mb-3">
            Let’s Build Something Amazing 🚀
          </h2>

          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Have a project idea or opportunity? Let’s connect and make it real.
          </p>

          {/* EMAIL */}
          <p className="text-blue-400 font-medium mb-6 cursor-pointer">
            <a href="mailto:kumarrohit35511@gmail.com">
              kumarrohit35511@gmail.com
            </a>
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/rohit-kumar-18a749245/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer transform transition hover:scale-110"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-8 h-8 relative z-10"
              />
            </a>

            <a
              href="https://x.com/RohitKu84499807"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer transform transition hover:scale-110"
            >
              <img
                src={twitter}
                alt="Twitter"
                className="w-8 h-8 relative z-10"
              />
            </a>

            <a
              href="https://github.com/RohitKumar773"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer transform transition hover:scale-110"
            >
              <img
                src={github}
                alt="GitHub"
                className="w-8 h-8 relative z-10"
              />
            </a>

            <a
              href="https://www.instagram.com/__r_o_h_i_t__kumar__/"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer transform transition hover:scale-110"
            >
              <img
                src={insta}
                alt="Instagram"
                className="w-8 h-8 relative z-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
