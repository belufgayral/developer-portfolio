import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import TerminalStatus from "@/components/TerminalStatus";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="flex-grow pt-16 bg-grid-subtle">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <TerminalStatus />
      </main>
      <Footer />
    </div>
  );
}
