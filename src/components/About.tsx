import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Building2,
  Calendar,
  Compass,
  Code2,
  BrainCircuit,
  Sparkles,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const cards = [
    {
      label: 'Education',
      value: PERSONAL_INFO.infoCards.education,
      subtext: 'Core specialization in algorithms & machine intelligence',
      icon: GraduationCap,
      color: 'from-cyan-500/20 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
    },
    {
      label: 'College',
      value: PERSONAL_INFO.infoCards.college,
      subtext: 'Salem, Tamil Nadu, India',
      icon: Building2,
      color: 'from-indigo-500/20 to-purple-500/10',
      borderColor: 'border-indigo-500/30',
      iconColor: 'text-indigo-400',
    },
    {
      label: 'Current Status',
      value: PERSONAL_INFO.infoCards.currentStatus,
      subtext: 'Batch 2024 – 2027 • Actively seeking opportunities',
      icon: Calendar,
      color: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
    },
    {
      label: 'Interest',
      value: PERSONAL_INFO.infoCards.interest,
      subtext: 'Building intelligent applications & responsive web tools',
      icon: Compass,
      color: 'from-amber-500/20 to-orange-500/10',
      borderColor: 'border-amber-500/30',
      iconColor: 'text-amber-400',
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-3" />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between h-full space-y-6"
          >
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <BrainCircuit className="w-36 h-36 text-cyan-400" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Driven by Technology &amp; Innovation
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    B.Sc. Computer Science (AI &amp; Data Science)
                  </p>
                </div>
              </div>

              {/* Exact user-provided content text */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {PERSONAL_INFO.aboutText}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                    Problem Solving
                  </span>
                  <span className="text-xs text-slate-400 leading-snug">
                    Quick learner with sharp analytical logic and adaptability.
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block mb-1">
                    Hands-on Dev
                  </span>
                  <span className="text-xs text-slate-400 leading-snug">
                    Creating real-world AI-enabled web applications and platforms.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Small Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className={`glass-panel glass-panel-hover p-6 rounded-2xl border ${card.borderColor} bg-gradient-to-br ${card.color} flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        {card.label}
                      </span>
                      <div className={`p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 ${card.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 leading-snug">
                      {card.value}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 pt-3 border-t border-slate-800/60 mt-2">
                    {card.subtext}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
