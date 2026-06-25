// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   technologies: string[];
//   liveUrl?: string;
//   githubUrl?: string;
//   featured?: boolean;
//   category: string;
// }

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
  color: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  type: "work" | "education";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}
