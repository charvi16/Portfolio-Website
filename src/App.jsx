import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen scroll-smooth selection:bg-cyan-400 selection:text-black">
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />

        <Suspense
          fallback={
            <div className="py-20 text-center text-gray-400">Loading section...</div>
          }
        >
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
}