import React, { useState } from 'react';
import {
  Printer,
  Copy,
  Check,
  X,
  FileDown,
  Mail,
  Linkedin,
  GraduationCap,
  Award,
  Briefcase,
  Code2,
  CheckCircle2
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  FEATURED_PROJECT,
  CERTIFICATIONS_DATA,
  SKILL_CATEGORIES,
  LANGUAGES_DATA
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumePlain = `
==================================================
${PERSONAL_INFO.name}
${PERSONAL_INFO.tagline}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
==================================================

PROFILE SUMMARY
${PERSONAL_INFO.aboutText}

EDUCATION
1. ${EDUCATION_DATA[0].degree}
   ${EDUCATION_DATA[0].institution} (${EDUCATION_DATA[0].period}) - ${EDUCATION_DATA[0].status}
2. ${EDUCATION_DATA[1].degree}
   ${EDUCATION_DATA[1].institution} (${EDUCATION_DATA[1].period})
3. ${EDUCATION_DATA[2].degree}
   ${EDUCATION_DATA[2].institution} (${EDUCATION_DATA[2].period})

TECHNICAL SKILLS
• Programming & Web: C, Python, HTML, CSS
• Tools & Platforms: VS Code, GitHub, Git, Jupyter Notebook, AWS
• Professional Skills: Communication, Leadership, Problem Solving, Time Management

FEATURED PROJECT
${FEATURED_PROJECT.name}
Technologies: ${FEATURED_PROJECT.technologies.join(', ')}
Description: ${FEATURED_PROJECT.description}
Details:
${FEATURED_PROJECT.details.map(d => `- ${d}`).join('\n')}

CERTIFICATIONS
1. ${CERTIFICATIONS_DATA[0].title} | ${CERTIFICATIONS_DATA[0].organization} (${CERTIFICATIONS_DATA[0].date})
2. ${CERTIFICATIONS_DATA[1].title} | ${CERTIFICATIONS_DATA[1].organization} (${CERTIFICATIONS_DATA[1].date})
3. ${CERTIFICATIONS_DATA[2].title} | ${CERTIFICATIONS_DATA[2].organization} (${CERTIFICATIONS_DATA[2].date})

LANGUAGES
• English — Fluent
• Tamil — Native
==================================================
`;

    navigator.clipboard.writeText(resumePlain);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-3xl w-full shadow-2xl relative my-8 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileDown className="w-5 h-5 text-cyan-400" />
            <span className="font-mono text-sm font-bold text-white">
              Resume / Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-300 hover:bg-slate-700 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain-text CV"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900 text-slate-200 text-sm space-y-7 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-cyan-400 font-mono text-sm mt-1 font-semibold">
              {PERSONAL_INFO.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
                linkedin.com/in/lokesh-tharani-a1579231b
              </span>
              <span>Salem, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              {PERSONAL_INFO.aboutText}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>

            <div className="space-y-3">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white text-sm">{edu.degree}</span>
                    <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{edu.institution}</p>
                  {edu.status && (
                    <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50 mt-2">
                      {edu.status}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Featured Project */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Featured Project</span>
            </h2>

            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                <span className="font-bold text-white text-sm">{FEATURED_PROJECT.name}</span>
                <span className="text-xs font-mono text-cyan-300">
                  {FEATURED_PROJECT.technologies.join(' • ')}
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-3">{FEATURED_PROJECT.description}</p>
              
              <ul className="space-y-1.5 text-xs text-slate-400 pl-1">
                {FEATURED_PROJECT.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Skills &amp; Competencies</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80">
                  <span className="text-[11px] font-mono font-bold text-white block mb-2">
                    {cat.category}
                  </span>
                  <ul className="space-y-1 text-xs text-slate-400">
                    {cat.skills.map((s) => (
                      <li key={s.name} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        <span>{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certifications</span>
              </h2>
              <div className="space-y-2">
                {CERTIFICATIONS_DATA.map((c) => (
                  <div key={c.id} className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80 text-xs">
                    <p className="font-bold text-white">{c.title}</p>
                    <p className="text-[11px] text-slate-400">{c.organization} • {c.date}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
                Languages
              </h2>
              <div className="space-y-2">
                {LANGUAGES_DATA.map((l) => (
                  <div key={l.language} className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80 text-xs flex items-center justify-between">
                    <span className="font-bold text-white">{l.language}</span>
                    <span className="text-xs font-mono text-cyan-300">{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
