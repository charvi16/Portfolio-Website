import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,168,212,0.25),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_40%)],_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.16),_transparent_30%)]" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Hi, I’m <span className="text-pink-200">Charvi</span>
          </h1>

          <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
            Software Developer • Problem Solver • AI Enthusiast
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl leading-7 text-base sm:text-lg">
            I build modern, scalable, and impactful digital products using
            full-stack development, machine learning, and strong problem-solving.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-pink-300 text-black font-semibold hover:scale-105 transition shadow-[0_0_25px_rgba(249,168,212,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-pink-300 text-black font-semibold hover:scale-105 transition shadow-[0_0_25px_rgba(249,168,212,0.4)]"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full bg-gradient-to-br from-cyan-400/25 to-purple-500/20 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(34,211,238,0.15)] flex items-center justify-center">
            <div className="w-[80%] h-[80%] rounded-full border border-cyan-400/30 bg-[#111] flex items-center justify-center text-center px-6">
              <p className="text-gray-300 text-lg sm:text-xl font-medium">
                Clean Code
                <br />
                Modern UI
                <br />
                Strong Logic
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}