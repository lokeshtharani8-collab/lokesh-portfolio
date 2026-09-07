import React from 'react';

export const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Subtle radial ambient gradients */}
      <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute top-[35%] right-[5%] w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[140px]" />
      <div className="absolute bottom-[10%] left-[10%] w-[550px] h-[550px] rounded-full bg-blue-600/5 blur-[130px]" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-60" />
      
      {/* Subtle floating digital constellation nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-25">
        <defs>
          <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Abstract network connector lines */}
        <line x1="12%" y1="18%" x2="28%" y2="24%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="28%" y1="24%" x2="35%" y2="14%" stroke="url(#neuralGrad)" strokeWidth="1" />
        <line x1="75%" y1="15%" x2="88%" y2="28%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="88%" y1="28%" x2="82%" y2="45%" stroke="url(#neuralGrad)" strokeWidth="1" />
        <line x1="15%" y1="65%" x2="25%" y2="78%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="5 5" />
        <line x1="25%" y1="78%" x2="40%" y2="82%" stroke="url(#neuralGrad)" strokeWidth="1" />
        <line x1="68%" y1="72%" x2="85%" y2="80%" stroke="url(#neuralGrad)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Small node points */}
        <circle cx="12%" cy="18%" r="2" fill="#38bdf8" opacity="0.6" />
        <circle cx="28%" cy="24%" r="3" fill="#818cf8" opacity="0.8" />
        <circle cx="35%" cy="14%" r="2" fill="#38bdf8" opacity="0.5" />
        <circle cx="75%" cy="15%" r="2.5" fill="#38bdf8" opacity="0.7" />
        <circle cx="88%" cy="28%" r="3.5" fill="#6366f1" opacity="0.8" />
        <circle cx="82%" cy="45%" r="2" fill="#38bdf8" opacity="0.6" />
        <circle cx="15%" cy="65%" r="2.5" fill="#38bdf8" opacity="0.6" />
        <circle cx="25%" cy="78%" r="3" fill="#818cf8" opacity="0.7" />
        <circle cx="40%" cy="82%" r="2" fill="#38bdf8" opacity="0.5" />
        <circle cx="68%" cy="72%" r="2" fill="#818cf8" opacity="0.6" />
        <circle cx="85%" cy="80%" r="3" fill="#38bdf8" opacity="0.7" />
      </svg>
    </div>
  );
};
