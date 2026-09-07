export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  technologies: string[];
  description: string;
  details: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    description: string;
    icon: string;
    color: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  status?: string;
  level: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  badgeCode?: string;
  credentialId?: string;
  type: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  note: string;
}
