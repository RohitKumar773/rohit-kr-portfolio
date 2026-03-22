import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="text-2xl md:text-3xl font-bold text-white tracking-wide cursor-pointer">
          Rohi<span className="text-blue-500">T</span>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex space-x-10 text-white font-medium">
          {["Home", "About", "Skills", "Projects", "Experience"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}

              {/* Hover underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <div>
          <a href="mailto:dev.rohit.kr773@gmail.com">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300">
              Hire Me
            </button>
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;