import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  Calendar,
  Building2,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
  Eye,
  X
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Credentials &amp; Awards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-3 mb-6" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Formal recognitions, industry training completions, and competitive technical achievements.
          </p>
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top ambient highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Top Bar with Icon & Tag */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/80">
                    {cert.badgeCode}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Organization */}
                <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm font-medium mb-3">
                  <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>{cert.organization}</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono mb-4">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{cert.date}</span>
                </div>

                {/* Domain note */}
                <p className="text-xs text-slate-400 pt-3 border-t border-slate-800/80">
                  {cert.type}
                </p>
              </div>

              {/* View Certificate Button Placeholder */}
              <div className="pt-5 mt-4 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-cyan-400">
                <Award className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Verified Credential Preview
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Styled Display */}
            <div className="my-6 p-6 rounded-xl border-2 border-dashed border-cyan-500/30 bg-slate-950 text-center relative overflow-hidden">
              <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">
                Certificate of Completion / Appreciation
              </p>
              <h4 className="text-base font-bold text-white mb-2">
                {selectedCert.title}
              </h4>
              <p className="text-xs text-slate-400">Awarded to</p>
              <p className="text-sm font-extrabold text-cyan-300 my-1 font-mono">LOKESH K</p>
              <p className="text-xs text-slate-400">Issued by</p>
              <p className="text-xs font-semibold text-slate-200">{selectedCert.organization}</p>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Date: {selectedCert.date}</span>
                <span className="text-emerald-400">Status: Verified</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-mono text-[11px]">
                Ref Code: {selectedCert.badgeCode}
              </span>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 font-medium cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
