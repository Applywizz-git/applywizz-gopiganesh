import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS if needed
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
