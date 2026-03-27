export interface Profile {
  name: string;
  title: string;
  shortBio: string;
  email: string;
  github: string;
  linkedin: string;
  profilePhoto?: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  color?: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Highlight {
  title: string;
  description: string;
  year?: string;
}
