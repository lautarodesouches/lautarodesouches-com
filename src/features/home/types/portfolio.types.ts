// Portfolio domain types — split from legacy src/data/portfolio.ts

export interface Project {
    title: string;
    type: string;
    description: string;
    problem: string;
    solution: string;
    tech: string[];
    impact: string;
    demoUrl: string;
    repoUrl: string;
    image?: string;
}

export interface HeroSection {
    headline: string;
    subtitle: string;
    intro: string;
    cta: string;
    contactCta: string;
}

export interface AboutSection {
    description: string[];
    quickData: { label: string; value: string }[];
}

export interface SkillGroup {
    category: string;
    techs: string[];
}

export interface SkillsSection {
    core: { title: string; items: SkillGroup[] };
    secondary: { title: string; items: string[] };
    background: { title: string; items: string[] };
    tools: { title: string; items: string[] };
}

export interface ContactSection {
    message: string;
    email: string;
    linkedin: string;
    github: string;
}

export interface PortfolioData {
    hero: HeroSection;
    about: AboutSection;
    projects: Project[];
    skills: SkillsSection;
    contact: ContactSection;
}
