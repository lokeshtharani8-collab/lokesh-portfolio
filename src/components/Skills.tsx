import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Terminal,
  FileCode2,
  Palette,
  Layers,
  GitBranch,
  GitMerge,
  BookOpen,
  Cloud,
  MessageSquare,
  Users,
  Lightbulb,
  Clock,
  Sparkles,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Map icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return Cpu;
      case 'Terminal':
        return Terminal;
      case 'Code2':
        return FileCode2;
      case 'Palette':
        return Palette;
      case 'Layers':
        return Layers;
      case 'GitBranch':
        return GitBranch;
      case 'GitMerge':
        return GitMerge;
      case 'FileCode':
        return BookOpen;
      case 'Cloud':
        return Cloud;
      case 'MessageSquare':
        return MessageSquare;
      case 'Users':
        return Users;
      case 'Lightbulb':
        return Lightbulb;
      case 'Clock':
        return Clock;
      default:
        return Code;
    }
  };

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'Technical Skills', label: 'Technical Skills' },
    { id: 'Tools & Platforms', label: 'Tools & Platforms' },
    { id: 'Soft Skills', label: 'Soft Skills' },
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mt-3 mb-6" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A comprehensive overview of my programming proficiencies, developer toolchains, and collaborative professional abilities.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md shadow-cyan-900/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Skill Cards Grid */}
        <div className="space-y-12">
          {filteredCategories.map((group, groupIdx) => (
            <div key={group.category} className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                  {group.skills.length} competencies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.skills.map((skill, index) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: index * 0.05 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="glass-panel p-5 rounded-xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 shadow-md group-hover:scale-105 transition-transform`}>
                            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-slate-100">
                              <Icon className="w-5 h-5 group-hover:text-cyan-300 transition-colors" />
                            </div>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-400 border border-slate-700/60">
                            Verified
                          </span>
                        </div>

                        <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Proficient</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
