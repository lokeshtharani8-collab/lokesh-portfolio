import { ProjectItem, SkillCategory, EducationItem, CertificationItem, LanguageItem } from '../types';

export const PERSONAL_INFO = {
  name: "LOKESH K",
  shortName: "Lokesh",
  initials: "LK",
  email: "lokeshtharani8@gmail.com",
  linkedin: "https://www.linkedin.com/in/lokesh-tharani-a1579231b",
  github: "https://github.com",
  role: "AI & Data Science Student",
  subRole: "Aspiring Full Stack Developer",
  tagline: "AI & Data Science Student | Aspiring Full Stack Developer",
  heroDescription: "Motivated B.Sc. Computer Science (AI & Data Science) student with a strong interest in Artificial Intelligence, software development and web technologies.",
  aboutText: "Motivated B.Sc. Computer Science (AI & Data Science) student with strong interest in Artificial Intelligence, software development and web technologies. Skilled in C, Python, HTML and CSS with hands-on experience developing AI-enabled web applications. Passionate about solving real-world problems, quick learner, excellent analytical thinking and eager to contribute to innovative IT projects.",
  infoCards: {
    education: "B.Sc. Computer Science (AI & Data Science)",
    college: "Sona College of Arts and Science, Salem",
    currentStatus: "3rd Year Student",
    interest: "AI, Data Science & Full Stack Development"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Technical Skills",
    description: "Core programming languages and web engineering fundamentals",
    skills: [
      {
        name: "C",
        description: "Low-level system logic, data structures, and memory fundamentals",
        icon: "Cpu",
        color: "from-blue-500 to-indigo-500"
      },
      {
        name: "Python",
        description: "Data analysis, AI scripting, backend algorithms, and automation",
        icon: "Terminal",
        color: "from-yellow-400 to-amber-500"
      },
      {
        name: "HTML",
        description: "Semantic web structuring, modern document hierarchy, accessibility",
        icon: "Code2",
        color: "from-orange-500 to-red-500"
      },
      {
        name: "CSS",
        description: "Responsive styling, modern layouts (Flexbox, Grid), transitions",
        icon: "Palette",
        color: "from-cyan-400 to-blue-500"
      }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Modern developer environment, version control, and cloud tools",
    skills: [
      {
        name: "VS Code",
        description: "Primary development workspace, debugging extensions, workflow",
        icon: "Layers",
        color: "from-blue-400 to-sky-600"
      },
      {
        name: "GitHub",
        description: "Code hosting, collaborative repositories, and release pipelines",
        icon: "GitBranch",
        color: "from-purple-400 to-indigo-600"
      },
      {
        name: "Git",
        description: "Distributed version control, branch management, commit histories",
        icon: "GitMerge",
        color: "from-orange-500 to-rose-600"
      },
      {
        name: "Jupyter Notebook",
        description: "Exploratory data analysis, AI experimentation, and visualizations",
        icon: "FileCode",
        color: "from-amber-500 to-orange-600"
      },
      {
        name: "AWS",
        description: "Cloud computing infrastructure, storage, and foundational cloud services",
        icon: "Cloud",
        color: "from-amber-400 to-yellow-600"
      }
    ]
  },
  {
    category: "Soft Skills",
    description: "Interpersonal communication and collaborative professional abilities",
    skills: [
      {
        name: "Communication",
        description: "Clear technical documentation, verbal presentations, and active listening",
        icon: "MessageSquare",
        color: "from-teal-400 to-emerald-500"
      },
      {
        name: "Leadership",
        description: "Guiding team milestones, peer mentorship, and proactive initiative",
        icon: "Users",
        color: "from-violet-400 to-purple-600"
      },
      {
        name: "Problem Solving",
        description: "Analytical decomposition of algorithmic problems and debugging",
        icon: "Lightbulb",
        color: "from-sky-400 to-blue-600"
      },
      {
        name: "Time Management",
        description: "Prioritizing deliverables, agile task execution, and structured focus",
        icon: "Clock",
        color: "from-rose-400 to-pink-600"
      }
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bsc",
    degree: "B.Sc. Computer Science (AI & Data Science)",
    institution: "Sona College of Arts and Science, Salem",
    period: "2024 – 2027",
    status: "Currently Pursuing (3rd Year)",
    level: "Undergraduate Degree",
    highlights: [
      "Specializing in Artificial Intelligence and Data Science methodologies",
      "Focusing on Python, data structures, predictive modeling, and web architectures",
      "Hands-on project development integrating AI models with web interfaces"
    ]
  },
  {
    id: "hsc",
    degree: "Higher Secondary (12th)",
    institution: "Sree Gokulam Higher Secondary School, Salem",
    period: "2023 – 2024",
    status: "Completed",
    level: "Higher Secondary Certificate",
    highlights: [
      "Rigorous foundations in Mathematics, Physics, and Computer Science",
      "Developed early interest in software logic and computational problem solving"
    ]
  },
  {
    id: "sslc",
    degree: "SSLC (10th)",
    institution: "KPM Higher Secondary School",
    period: "2021 – 2022",
    status: "Completed",
    level: "Secondary School Leaving Certificate",
    highlights: [
      "Core academic curriculum with strong achievements in Mathematics and Science",
      "Participated in school academic contests and technological clubs"
    ]
  }
];

export const FEATURED_PROJECT: ProjectItem = {
  id: "watch-mart-ai",
  name: "AI Based E-Commerce & Watch Mart Platform",
  tagline: "Intelligent Watch E-Commerce with AI Price Comparison & Virtual AR Concepts",
  technologies: ["Python", "HTML", "CSS"],
  description: "Developed an AI-enabled watch e-commerce platform with a user-friendly interface and modern shopping features.",
  details: [
    "Developed an AI-enabled watch e-commerce platform.",
    "Implemented user authentication and responsive interface.",
    "Added product browsing, filtering and watch catalog.",
    "Integrated AI-based features such as price comparison.",
    "Included virtual try-on / AR concept.",
    "Designed a user-friendly frontend using HTML and CSS."
  ],
  githubUrl: "https://github.com",
  liveUrl: "#project-preview"
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Certificate of Appreciation – Prompt Verse Challenge",
    organization: "SaHaa 2026",
    date: "18 March 2026",
    badgeCode: "PVC-2026-SH",
    type: "AI & Prompt Engineering Competition"
  },
  {
    id: "cert-2",
    title: "AWS Cloud Practitioner Essentials",
    organization: "Amazon Web Services (AWS)",
    date: "13 December 2025",
    badgeCode: "AWS-CPE-2025",
    type: "Cloud Computing & Infrastructure"
  },
  {
    id: "cert-3",
    title: "Python Full Stack Development",
    organization: "FutoGen Technologies Private Limited",
    date: "10 June 2026",
    badgeCode: "FUTOGEN-PFS-2026",
    type: "Professional Industry Certification"
  }
];

export const LANGUAGES_DATA: LanguageItem[] = [
  {
    language: "English",
    proficiency: "Fluent",
    note: "Professional working proficiency in verbal and written technical communication"
  },
  {
    language: "Tamil",
    proficiency: "Native",
    note: "Native mother tongue with complete fluency in conversation and writing"
  }
];
