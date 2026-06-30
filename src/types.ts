export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. "90%", "Expert", "Advanced"
}

export interface SkillCategory {
  id: string;
  tag: string; // e.g. "01 / STACK_LANG"
  title: string; // e.g. "Languages"
  skills: SkillItem[];
}

export type SectionType = "home" | "about" | "projects" | "skills" | "certification" | "contact";
