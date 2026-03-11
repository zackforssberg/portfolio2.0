import TopControls from "@/components/TopControls";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <TopControls />
      <div>
        <Hero />
        <Testimonials />
        {/* <About /> */}
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
