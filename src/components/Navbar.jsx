import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../data/portfolioData";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          const bottom = top + section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-2 bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "py-4 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

        {/* LOGO */}
        <a href="#hero" className="flex items-center group">
          <img
            src={logo}
            alt="logo"
            className="h-10 transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(249,168,212,0.6)]"
          />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 relative">

          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;

            return (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm text-gray-300 hover:text-pink-200 transition duration-300"
              >
                {link.name}

                {/* 🔥 Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-pink-200 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* 🔥 MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-6">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-pink-200 text-lg transition duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>
      </div>
    </header>
  );
}