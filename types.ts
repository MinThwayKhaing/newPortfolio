export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  category: 'Professional' | 'Personal' | 'Freelance';
}

export interface Skill {
  name: string;
  level: number; // 1-5 scale
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Languages';
}

export interface Certificate {
  name: string;
  issuer: string;
  link: string;
  date?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
}
