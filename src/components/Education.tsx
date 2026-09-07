import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Calendar,
  Building2,
  MapPin,
  Sparkles,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-3 mb-6" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            My formal academic journey in computer science, artificial intelligence, and foundational sciences.
          </p>
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central glowing line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800" />

          <div className="space-y-12 relative">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              const isCurrent = item.status?.includes('Currently');

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center border-2 ${
                        isCurrent
                          ? 'bg-slate-900 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)] text-cyan-300'
                          : 'bg-slate-900 border-indigo-400/60 text-indigo-300'
                      }`}
                    >
                      <GraduationCap className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div
                      className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                        isCurrent
                          ? 'border-cyan-500/40 bg-gradient-to-br from-cyan-950/30 to-slate-900/80 shadow-lg shadow-cyan-950/20'
                          : 'border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-slate-800/90 text-cyan-300 border border-slate-700">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>

                        {isCurrent ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold">
                            <Clock className="w-3 h-3 animate-spin" />
                            Currently Pursuing
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-800 text-slate-400 border border-slate-700">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Completed
                          </span>
                        )}
                      </div>

                      {/* Title & Institution */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                        {item.degree}
                      </h3>

                      <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-4">
                        <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="space-y-1.5 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
