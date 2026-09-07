import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ExternalLink,
  Github,
  CheckCircle2,
  Watch,
  Search,
  Filter,
  Eye,
  SlidersHorizontal,
  Code2,
  Cpu,
  Layers,
  ShoppingBag,
  ShieldCheck,
  TrendingDown,
  Camera,
  Maximize2
} from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';

export const ProjectSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'ai-pricing' | 'virtual-tryon' | 'tech'>('catalog');
  const [selectedWatch, setSelectedWatch] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const sampleWatches = [
    {
      id: 1,
      name: 'ChronoTech AI Edition',
      category: 'Smart Hybrid',
      price: '$289',
      competitorPrice: '$349',
      savings: '17% Lower',
      rating: '4.9',
      features: ['AI Health Telemetry', 'Dual Sapphire Crystal', 'AR Wrist Tracking'],
      color: 'from-cyan-500/20 to-blue-600/20',
      tag: 'Best Seller'
    },
    {
      id: 2,
      name: 'AeroStealth Minimalist',
      category: 'Titanium Automatic',
      price: '$195',
      competitorPrice: '$230',
      savings: '15% Lower',
      rating: '4.8',
      features: ['Matte Grade-5 Titanium', 'Japanese Movement', 'Virtual AR Ready'],
      color: 'from-indigo-500/20 to-purple-600/20',
      tag: 'AI Recommended'
    },
    {
      id: 3,
      name: 'Quantum DeepDiver 300M',
      category: 'Pro Diver',
      price: '$340',
      competitorPrice: '$410',
      savings: '20% Lower',
      rating: '5.0',
      features: ['Ceramic Rotating Bezel', 'Helium Escape Valve', 'Luminescent Dial'],
      color: 'from-emerald-500/20 to-teal-600/20',
      tag: 'Top Rated'
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My Project
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-3 mb-6" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A showcase of my flagship software engineering project combining intelligent data comparison with responsive e-commerce architecture.
          </p>
        </div>

        {/* Large Featured Project Card Container */}
        <div className="glass-panel rounded-3xl border border-slate-800/90 overflow-hidden bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950 shadow-2xl relative">
          
          {/* Subtle Top Gradient Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
            
            {/* Left Column: Project Details & Information */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {FEATURED_PROJECT.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                    AI E-Commerce
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
                  {FEATURED_PROJECT.name}
                </h3>

                {/* Tagline / Summary */}
                <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                  {FEATURED_PROJECT.description}
                </p>

                {/* Bulleted Project Details (Exact User Specifications) */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Key Features &amp; Implementation:
                  </h4>
                  <ul className="space-y-2.5">
                    {FEATURED_PROJECT.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  id="project-view-btn"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.3)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Project Preview</span>
                </button>

                <a
                  href={FEATURED_PROJECT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="project-github-btn"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <span className="text-[11px] font-mono text-slate-500 italic block sm:inline">
                  * Repository placeholder ready for easy linking
                </span>
              </div>
            </div>

            {/* Right Column: Attractive Interactive Project Preview Area */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl flex flex-col h-full">
                
                {/* Preview Navigation Header */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Watch className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-slate-200">
                      WatchMart AI Preview
                    </span>
                  </div>

                  {/* Preview Tabs */}
                  <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setActiveTab('catalog')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeTab === 'catalog'
                          ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Catalog
                    </button>
                    <button
                      onClick={() => setActiveTab('ai-pricing')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeTab === 'ai-pricing'
                          ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      AI Pricing
                    </button>
                    <button
                      onClick={() => setActiveTab('virtual-tryon')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeTab === 'virtual-tryon'
                          ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Virtual AR
                    </button>
                    <button
                      onClick={() => setActiveTab('tech')}
                      className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                        activeTab === 'tech'
                          ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Stack
                    </button>
                  </div>
                </div>

                {/* Preview Interactive Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  {/* TAB 1: Catalog & Watch Browsing */}
                  {activeTab === 'catalog' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <Search className="w-3.5 h-3.5 text-slate-500" />
                          <span>Search watches (3 items indexed)</span>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                          Auth: User Logged In
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {sampleWatches.map((w, idx) => (
                          <div
                            key={w.id}
                            onClick={() => setSelectedWatch(idx)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer ${
                              selectedWatch === idx
                                ? 'bg-cyan-950/30 border-cyan-400 shadow-md shadow-cyan-950/30'
                                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 mb-1.5 inline-block">
                              {w.tag}
                            </span>
                            <div className="h-16 flex items-center justify-center my-2 bg-slate-950/80 rounded-lg border border-slate-800/80">
                              <Watch className={`w-8 h-8 ${selectedWatch === idx ? 'text-cyan-400' : 'text-slate-500'}`} />
                            </div>
                            <h5 className="text-xs font-bold text-white truncate">{w.name}</h5>
                            <p className="text-[10px] text-slate-400">{w.category}</p>
                            <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-800/60">
                              <span className="text-xs font-bold text-cyan-400">{w.price}</span>
                              <span className="text-[9px] text-emerald-400 font-mono">{w.savings}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Selected Item Detail Strip */}
                      <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white">
                            Selected: {sampleWatches[selectedWatch].name}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            Features: {sampleWatches[selectedWatch].features.join(' • ')}
                          </p>
                        </div>
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> Verified Catalog
                        </span>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: AI Price Comparison Feature */}
                  {activeTab === 'ai-pricing' && (
                    <div className="space-y-4">
                      <div className="bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/30">
                        <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-1">
                          <TrendingDown className="w-4 h-4" />
                          <span>AI Real-Time Price Comparison Engine</span>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          Scrapes and evaluates 5 competitor marketplace rates in Python to guarantee lowest consumer watch cost.
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold text-white">WatchMart Direct Price</span>
                            <p className="text-[10px] text-slate-400">Direct distributor verified price</p>
                          </div>
                          <span className="text-sm font-bold text-emerald-400 font-mono">$289.00</span>
                        </div>

                        <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800 flex items-center justify-between opacity-80">
                          <div>
                            <span className="text-xs font-semibold text-slate-300">Competitor Store A</span>
                            <p className="text-[10px] text-slate-500">Retail price</p>
                          </div>
                          <span className="text-xs font-medium text-slate-400 font-mono line-through">$349.00</span>
                        </div>

                        <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800 flex items-center justify-between opacity-80">
                          <div>
                            <span className="text-xs font-semibold text-slate-300">Competitor Store B</span>
                            <p className="text-[10px] text-slate-500">Retail price</p>
                          </div>
                          <span className="text-xs font-medium text-slate-400 font-mono line-through">$325.00</span>
                        </div>
                      </div>

                      <div className="text-[11px] font-mono text-cyan-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
                        <span>Net AI Savings Calculated:</span>
                        <span className="text-emerald-400 font-bold">$60.00 saved (17.2%)</span>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: Virtual Try-On / AR Concept */}
                  {activeTab === 'virtual-tryon' && (
                    <div className="space-y-3">
                      <div className="bg-indigo-950/30 p-3 rounded-xl border border-indigo-500/30">
                        <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold mb-1">
                          <Camera className="w-4 h-4" />
                          <span>Virtual Try-On / AR Concept Mode</span>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          Conceptual camera-based wrist dimension tracking and 3D overlay preview before purchasing.
                        </p>
                      </div>

                      <div className="h-36 rounded-xl bg-slate-900/80 border border-slate-800 relative flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                        {/* AR Scan Target UI */}
                        <div className="absolute inset-4 border border-dashed border-cyan-500/30 rounded-lg pointer-events-none flex items-center justify-center">
                          <div className="w-24 h-12 border-2 border-cyan-400/80 rounded-md animate-pulse flex items-center justify-center">
                            <span className="text-[9px] font-mono text-cyan-300">Wrist Anchor</span>
                          </div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                          <Watch className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] mb-1" />
                          <p className="text-xs font-bold text-white">ChronoTech 42mm Case</p>
                          <p className="text-[10px] text-slate-400 font-mono">Scale: 1:1 Anatomical Fit Concept</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                        <span>Frontend: HTML5 Canvas / CSS3 Transforms</span>
                        <span className="text-cyan-400">AR Anchor: Active</span>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: Architecture & Stack */}
                  {activeTab === 'tech' && (
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
                          <Code2 className="w-4 h-4" />
                          <span>Python Backend Engine</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          Handles data logic, user authentication verification, watch database management, and price comparison evaluation algorithms.
                        </p>
                      </div>

                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-indigo-300">
                          <Layers className="w-4 h-4" />
                          <span>HTML &amp; CSS User Interface</span>
                        </div>
                        <p className="text-xs text-slate-300">
                          Clean semantic HTML structure with responsive CSS layouts, animated product cards, filtering drawers, and intuitive checkout flow.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Bottom Preview Footer bar */}
                  <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Watch Mart AI • Single Project Showcase</span>
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 className="w-3 h-3" /> Full Project Detail
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Watch className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{FEATURED_PROJECT.name}</h4>
                  <p className="text-xs font-mono text-cyan-400">Python • HTML • CSS</p>
                </div>
              </div>
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-5 text-sm text-slate-300">
              <div>
                <h5 className="text-xs font-mono uppercase text-slate-400 mb-2">Project Summary</h5>
                <p className="leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
                  {FEATURED_PROJECT.description}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-mono uppercase text-slate-400 mb-2">Architectural Highlights</h5>
                <ul className="space-y-2">
                  {FEATURED_PROJECT.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-slate-300">
                <span className="font-bold text-cyan-300 block mb-1">Developer Notes:</span>
                Developed as an innovative, complete student project at Sona College of Arts and Science. Codebase and full presentation deck are prepared for recruiters and faculty evaluation.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-medium cursor-pointer"
              >
                Close Window
              </button>
              <a
                href={FEATURED_PROJECT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs flex items-center gap-1.5 hover:bg-cyan-400"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
