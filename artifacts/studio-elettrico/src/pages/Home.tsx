import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
