import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FileDown,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Terminal,
  Cpu,
  Brain,
  Sparkles,
  Activity,
  Layers,
  Code2,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'code' | 'neural' | 'metrics'>('code');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.45, 0.27, 0.9] }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>Available for Internships &amp; Roles</span>
            </div>

            {/* Small text */}
            <p className="text-slate-400 font-medium text-lg md:text-xl tracking-wide mb-2">
              Hello, I'm
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Main Title */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                AI &amp; Data Science Student
              </h2>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 mt-1">
                Aspiring Full Stack Developer
              </h3>
            </div>

            {/* Short Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Buttons Group */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                id="hero-view-projects-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                id="hero-contact-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResume}
                id="hero-resume-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Icons & Quick Stats */}
            <div className="flex items-center gap-5 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 text-xs font-medium transition-all group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 text-xs font-medium transition-all group"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Developer & AI Interactive Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.45, 0.27, 0.9] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-indigo-600/20 blur-xl opacity-70" />

            {/* Main Interactive Developer Window */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
                  <span className="text-[11px] font-mono text-slate-400 ml-2">
                    lokesh_ai_system.py
                  </span>
                </div>

                {/* Sub-view switcher tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'code'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => setActiveTab('neural')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'neural'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Neural Net
                  </button>
                  <button
                    onClick={() => setActiveTab('metrics')}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                      activeTab === 'metrics'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Metrics
                  </button>
                </div>
              </div>

              {/* Window Content Area */}
              <div className="p-5 min-h-[340px] flex flex-col justify-between">
                {activeTab === 'code' && (
                  <div className="space-y-2 font-mono text-xs text-slate-300">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-800 pb-2">
                      <span># AI &amp; Watch Mart Pipeline</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Running
                      </span>
                    </div>

                    <p className="text-slate-500">
                      <span className="text-purple-400">import</span> torch
                      <br />
                      <span className="text-purple-400">from</span> lokesh_ai <span className="text-purple-400">import</span> WatchMartEngine
                    </p>

                    <div className="pl-2 border-l border-slate-800 space-y-1">
                      <p>
                        <span className="text-blue-400">developer</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"name"</span>: <span className="text-amber-300">"LOKESH K"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"degree"</span>: <span className="text-amber-300">"B.Sc. CS (AI &amp; Data Science)"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"institution"</span>: <span className="text-amber-300">"Sona CAS, Salem"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"stack"</span>: [<span className="text-emerald-300">"Python"</span>, <span className="text-emerald-300">"C"</span>, <span className="text-emerald-300">"HTML"</span>, <span className="text-emerald-300">"CSS"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-cyan-300">"passion"</span>: <span className="text-amber-300">"AI-Driven Solutions &amp; Full Stack"</span>
                      </p>
                      <p>&#125;</p>
                    </div>

                    <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80 text-[11px] text-cyan-300 mt-3">
                      <span className="text-slate-500">&gt;&gt;&gt; </span>
                      <span>engine = WatchMartEngine(ai_features=[</span>
                      <span className="text-amber-300">"price_compare"</span>, <span className="text-amber-300">"virtual_tryon"</span>
                      <span>])</span>
                      <br />
                      <span className="text-emerald-400">&gt;&gt;&gt; engine.status() -&gt; "Ready for production deployment"</span>
                    </div>
                  </div>
                )}

                {activeTab === 'neural' && (
                  <div className="flex flex-col items-center justify-center py-2 h-full">
                    <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 mb-3 px-2">
                      <span>Input (Data / Specs)</span>
                      <span>Hidden Layers (Weights)</span>
                      <span>Prediction (Output)</span>
                    </div>

                    {/* Interactive SVG Neural Network */}
                    <div className="w-full bg-slate-950/60 rounded-xl p-3 border border-slate-800">
                      <svg viewBox="0 0 400 160" className="w-full h-36">
                        {/* Layer 1 to Layer 2 Synapses */}
                        {[35, 75, 115].map((y1, i) =>
                          [25, 55, 85, 115, 140].map((y2, j) => (
                            <line
                              key={`l1-${i}-${j}`}
                              x1="60"
                              y1={y1}
                              x2="200"
                              y2={y2}
                              stroke="#0284c7"
                              strokeWidth="1"
                              strokeOpacity="0.25"
                            />
                          ))
                        )}

                        {/* Layer 2 to Layer 3 Synapses */}
                        {[25, 55, 85, 115, 140].map((y2, j) =>
                          [50, 100].map((y3, k) => (
                            <line
                              key={`l2-${j}-${k}`}
                              x1="200"
                              y1={y2}
                              x2="340"
                              y2={y3}
                              stroke="#818cf8"
                              strokeWidth="1.2"
                              strokeOpacity="0.35"
                            />
                          ))
                        )}

                        {/* Layer 1 Nodes */}
                        {[35, 75, 115].map((y, i) => (
                          <g key={`n1-${i}`}>
                            <circle cx="60" cy={y} r="8" fill="#0369a1" />
                            <circle cx="60" cy={y} r="4" fill="#38bdf8" />
                          </g>
                        ))}

                        {/* Layer 2 Nodes */}
                        {[25, 55, 85, 115, 140].map((y, j) => (
                          <g key={`n2-${j}`}>
                            <circle cx="200" cy={y} r="8" fill="#4338ca" />
                            <circle cx="200" cy={y} r="4" fill="#a5b4fc" />
                          </g>
                        ))}

                        {/* Layer 3 Nodes */}
                        {[50, 100].map((y, k) => (
                          <g key={`n3-${k}`}>
                            <circle cx="340" cy={y} r="10" fill="#0891b2" />
                            <circle cx="340" cy={y} r="5" fill="#67e8f9" />
                          </g>
                        ))}
                      </svg>
                    </div>

                    <div className="flex items-center justify-between w-full text-[11px] font-mono text-slate-400 mt-3 px-1">
                      <span className="flex items-center gap-1.5 text-cyan-300">
                        <Brain className="w-3.5 h-3.5" /> Neural Network Active
                      </span>
                      <span className="text-emerald-400 font-semibold">Loss: 0.0142 | Acc: 98.6%</span>
                    </div>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div className="space-y-4 py-2">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">Core Focus</span>
                        <p className="text-base font-bold text-cyan-300 mt-0.5">AI &amp; Data Science</p>
                        <p className="text-[11px] text-slate-500">Machine learning models &amp; web</p>
                      </div>
                      <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                        <span className="text-[10px] font-mono text-slate-400 uppercase">Year / Status</span>
                        <p className="text-base font-bold text-indigo-300 mt-0.5">3rd Year Student</p>
                        <p className="text-[11px] text-slate-500">Sona College, Salem</p>
                      </div>
                    </div>

                    <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-300">Featured System: Watch Mart AI</span>
                        <span className="text-emerald-400 font-semibold">Active Build</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 w-[92%]" />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1">
                        <span>Python Backend • HTML/CSS UI</span>
                        <span>Price Compare + AR Concept</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Tech Badges Bar */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono">
                      Python
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-300 text-[10px] font-mono">
                      C
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-950/60 border border-amber-500/30 text-amber-300 text-[10px] font-mono">
                      AWS
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-orange-950/60 border border-orange-500/30 text-orange-300 text-[10px] font-mono">
                      HTML/CSS
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-300 text-[10px] font-mono">
                      Git
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Salem, India
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Developer Stat Badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex items-center gap-2.5 absolute -bottom-5 -left-6 bg-slate-900/95 border border-cyan-500/40 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md z-20"
            >
              <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white leading-tight">AI &amp; Data Science</p>
                <p className="text-[9px] font-mono text-cyan-400">Sona CAS • 2024–2027</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="hidden sm:flex items-center gap-2.5 absolute -top-5 -right-4 bg-slate-900/95 border border-indigo-500/40 px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md z-20"
            >
              <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-white leading-tight">Watch Mart AI Platform</p>
                <p className="text-[9px] font-mono text-indigo-300">Featured Project</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
