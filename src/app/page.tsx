import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="max-w-5xl mx-auto">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Footer />
      </div>
    </main>
  );
}