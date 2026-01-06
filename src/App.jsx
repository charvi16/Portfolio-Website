import gsap from 'gsap';
import { SplitText, ScrollTrigger } from 'gsap/all';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills'; 
import Footer from './components/Footer';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function App() {

  return (
    <main>
      <Navbar/>
    </main>
  )
}
