import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Exploring from "@/components/Exploring";
import Contact from "@/components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-ink-900 text-cream-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Exploring />
        <Contact />
      </main>
    </div>
  );
}

export default App;
