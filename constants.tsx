
import { Experience, Project, Skill, Certificate, Education } from './types';
import { Linkedin, Github, Mail, Globe, MapPin, Phone } from 'lucide-react';

export const PROFILE = {
  name: "MINN THWAY KHAING",
  role: "Senior Software Engineer",
  summary: "Senior Software Engineer with over 5+ years of comprehensive experience in Full Stack development, specializing in Go, React, and Microservices architecture. Proven track record in designing AI-powered chatbots (Gemini Model), Core Banking Systems, and scalable automation solutions. Passionate about mentorship, clean architecture, and delivering high-impact technical solutions.",
  location: "Watthana, Bangkok 10110",
  phone: "0650125735",
  email: "minthwaykhaing28@gmail.com",
  linkedin: "https://www.linkedin.com/in/minthway-khaing-357a82239/",
  github: "https://github.com/MinThwayKhaing",
  portfolio: "https://minthwaykhaing.github.io/newPortfolio/",
};

export const CONTACT_LINKS = [
  { icon: Mail, label: "Email", href: `mailto:${PROFILE.email}`, text: PROFILE.email },
  { icon: Linkedin, label: "LinkedIn", href: PROFILE.linkedin, text: "LinkedIn Profile" },
  { icon: Github, label: "GitHub", href: PROFILE.github, text: "GitHub Profile" },
  { icon: Globe, label: "Portfolio", href: PROFILE.portfolio, text: "Portfolio Website" },
  { icon: Phone, label: "Phone", href: `tel:${PROFILE.phone}`, text: PROFILE.phone },
  { icon: MapPin, label: "Location", href: "#", text: PROFILE.location },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "SOFTWARE ENGINEER",
    company: "Inbiz Enterprise Co., Ltd",
    location: "Bangkok, Thailand",
    period: "07/2024 - 07/2025",
    description: [
      "Designed and developed Chatbot AI for AIS and True Agent using Go, React, and Gemini Model, significantly improving response accuracy and user satisfaction.",
      "Built reusable software components, reducing development time across multiple projects by 25%.",
      "Ensured scalability and maintainability through clean architecture and microservices implementation."
    ],
    techStack: ["Go", "React", "Gemini AI", "Microservices"]
  },
  {
    id: "2",
    role: "SENIOR SOFTWARE DEVELOPER (FRONTEND & FULLSTACK)",
    company: "Myanmar Information Technology (MIT)",
    location: "Yangon, Myanmar",
    period: "03/2022 - 01/2024",
    description: [
      "Led frontend development for the Core Banking Project (Digital Finance System), impacting thousands of customers.",
      "Trained and mentored 5+ junior developers, improving team productivity and onboarding efficiency.",
      "Spearheaded CI/CD deployment pipelines, cutting release times by 30%.",
      "Collaborated with cross-functional teams to deliver robust solutions under tight deadlines."
    ],
    techStack: ["Java", "Spring Boot", "Angular", "CI/CD", "PostgreSQL"]
  },
  {
    id: "3",
    role: "JUNIOR SOFTWARE DEVELOPER",
    company: "Daiwa Ace Technology (DAT)",
    location: "Yangon, Myanmar",
    period: "02/2021 - 02/2022",
    description: [
      "Developed in DFS Core Banking Department, specializing in Linux administration and backend systems.",
      "Contributed to system maintenance and feature enhancements, ensuring smooth digital financial operations.",
      "Assisted in customer service support for technical issues, reducing downtime for clients."
    ],
    techStack: ["Linux", "Backend Systems", "Java"]
  },
  {
    id: "4",
    role: "FREELANCE DEVELOPER",
    company: "Self-Employed",
    location: "Remote",
    period: "01/2020 - Present",
    description: [
      "Develop and deliver diverse products including websites, mobile applications, and automation tools for international clients."
    ],
    techStack: ["React Native", "Flutter", "Go", "Docker"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p8",
    name: "NestJS Module Generator",
    description: "Open-source NPM CLI package that automates the generation of NestJS modules, controllers, and services. Available on NPM.",
    techStack: ["Node.js", "TypeScript", "NPM", "NestJS"],
    link: "https://github.com/MinThwayKhaing/nestjs-module-generator",
    category: "Personal"
  },
  {
    id: "p1",
    name: "Chatbots AI",
    description: "AI-powered customer support system for AIS and True Agent using Go, React, and Gemini Model.",
    techStack: ["Go", "React", "Gemini Model", "AI"],
    category: "Professional"
  },
  {
    id: "p2",
    name: "Core Banking System",
    description: "FullStack development for a digital finance platform handling complex financial transactions.",
    techStack: ["Java", "Spring Boot", "JPA", "PostgreSQL"],
    category: "Professional"
  },
  {
    id: "p3",
    name: "POS System",
    description: "Real-time transaction handling system built for retail stores.",
    techStack: ["Angular", "Java", "SQL Server"],
    category: "Professional"
  },
  {
    id: "p4",
    name: "Distribution Mobile App",
    description: "Cross-platform application for streamlining logistics operations.",
    techStack: ["Flutter", "Rust", "Docker"],
    category: "Professional"
  },
  {
    id: "p5",
    name: "USDT-English-Myanmar-Japanese App",
    description: "Multi-language application deployed on Play Store and App Store.",
    techStack: ["React Native", "Golang", "Docker", "Mobile"],
    category: "Freelance"
  },
  {
    id: "p6",
    name: "Automation Facebook POS",
    description: "Automation tools for Point of Sale integration with Facebook.",
    techStack: ["React", "Golang", "Docker"],
    category: "Freelance"
  },
  {
    id: "p7",
    name: "Shwe App (Thai Myanmar Agent)",
    description: "Application for Thai-Myanmar agents.",
    techStack: ["Java", "FlutterFlow", "Docker"],
    category: "Freelance"
  }
];

export const SKILLS: Skill[] = [
  { name: "Next.js", level: 5, category: "Frontend" },
  { name: "Nest.js", level: 5, category: "Backend" },
  { name: "Go (Golang)", level: 5, category: "Languages" },
  { name: "Java", level: 5, category: "Languages" },
  { name: "React", level: 5, category: "Frontend" },
  { name: "Angular", level: 5, category: "Frontend" },
  { name: "SQL Server (SSMS)", level: 5, category: "Database" },
  { name: "PostgreSQL", level: 5, category: "Database" },
  { name: "MySQL", level: 5, category: "Database" },
  { name: "Cloud Service", level: 5, category: "DevOps" },
  { name: "CI/CD", level: 5, category: "DevOps" },
  { name: "AI Shell Script", level: 5, category: "DevOps" },
  { name: "Rust", level: 2, category: "Languages" },
  { name: "C Programming", level: 2, category: "Languages" },
  { name: "Kafka", level: 2, category: "Backend" },
  { name: "Microservices", level: 5, category: "Backend" }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    name: "Hacker Rank (SQL Advanced)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/bf83ecbd962d"
  },
  {
    name: "Hacker Rank Java Script (Intermediate)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/258cc4791ff3"
  },
  {
    name: "Hacker Rank (Software Engineer)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/iframe/d69c02fafd43"
  },
  {
    name: "Explore Digital Technology Job Simulation",
    issuer: "GE Aerospace",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/GE%20Aerospace/fjk7MFbQbedPXb3ws_GE%20Aerospace_5K648ZpzhuHyZ94PF_1715495878714_completion_certificate.pdf"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Economics",
    institution: "Institute of Yangon University of Economics",
    location: "Yangon",
    year: "01/2023"
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Greenwich (UK)",
    location: "Greenwich",
    year: "01/2018"
  }
];

export const PERSONALITY_TRAITS = [
  "Ability to work under pressure",
  "Time management",
  "Detail Oriented",
  "Honest and Hardworking",
  "Problem Solver",
  "Fast Learner",
  "Strong Documentation Skills",
  "Knowledge Sharing"
];

export const STATS = {
  yearsOfExperience: "5+",
  totalProjects: PROJECTS.length + "+", 
};
