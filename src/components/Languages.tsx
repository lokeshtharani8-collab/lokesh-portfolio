import React from 'react';
import { motion } from 'motion/react';
import { Languages as LanguagesIcon, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { LANGUAGES_DATA } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section id="languages" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Linguistic Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Languages
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-3 mb-4" />
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Languages spoken for workplace collaboration and technical discourse.
          </p>
        </div>

        {/* Clean Language Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {LANGUAGES_DATA.map((lang, index) => (
            <motion.div
              key={lang.language}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {lang.language}
                    </h3>
                    <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 mt-0.5">
                      {lang.proficiency}
                    </span>
                  </div>
                </div>

                <div className="text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>

              <p className="text-xs text-slate-400 pt-3 border-t border-slate-800/80 leading-relaxed">
                {lang.note}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
