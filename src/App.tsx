import React, { useState } from 'react';
import { TechBackground } from './components/TechBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { ProjectSection } from './components/ProjectSection';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 relative selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Background ambient network and subtle lighting */}
      <TechBackground />

      {/* Fixed / Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Education />
        <ProjectSection />
        <Certifications />
        <Languages />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Downloadable / Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
