import type { Project, Skill, Experience, Service, Stat } from "@/types";

// export const projects: Project[] = [
//   {
//     id: "1",
//     title: "SaaS Analytics Dashboard",
//     description: "A real-time analytics platform with interactive charts, team management, and custom reporting built with Next.js and PostgreSQL.",
//     image: "/projects/analytics.jpg",
//     technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Chart.js", "Tailwind CSS"],
//     liveUrl: "https://demo.example.com",
//     githubUrl: "https://github.com/alexmorgan",
//     featured: true,
//     category: "Next.js",
//   },
//   {
//     id: "2",
//     title: "E-Commerce Platform",
//     description: "Full-featured e-commerce solution with payment integration, inventory management, and real-time order tracking.",
//     image: "/projects/ecommerce.jpg",
//     technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "Redux"],
//     liveUrl: "https://shop.example.com",
//     githubUrl: "https://github.com/alexmorgan",
//     featured: true,
//     category: "React",
//   },
//   {
//     id: "3",
//     title: "AI Content Generator",
//     description: "An AI-powered content creation tool leveraging GPT-4 to generate blog posts, social media content, and marketing copy.",
//     image: "/projects/ai-content.jpg",
//     technologies: ["Next.js", "OpenAI", "Prisma", "PostgreSQL", "TypeScript"],
//     liveUrl: "https://ai.example.com",
//     githubUrl: "https://github.com/alexmorgan",
//     featured: true,
//     category: "Next.js",
//   },
//   {
//     id: "4",
//     title: "Real-Time Chat App",
//     description: "Scalable messaging application with WebSocket support, group channels, file sharing, and end-to-end encryption.",
//     image: "/projects/chat.jpg",
//     technologies: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
//     liveUrl: "https://chat.example.com",
//     githubUrl: "https://github.com/alexmorgan",
//     category: "Node.js",
//   },
//   {
//     id: "5",
//     title: "DevOps Monitoring Tool",
//     description: "Infrastructure monitoring solution with alerting, performance metrics, log aggregation, and automated incident response.",
//     image: "/projects/devops.jpg",
//     technologies: ["Node.js", "TypeScript", "Docker", "Prometheus", "Grafana", "Redis"],
//     githubUrl: "https://github.com/alexmorgan",
//     category: "Node.js",
//   },
//   {
//     id: "6",
//     title: "Social Media App",
//     description: "Feature-rich social platform with posts, stories, real-time notifications, and algorithmic feed powered by ML recommendations.",
//     image: "/projects/social.jpg",
//     technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS"],
//     liveUrl: "https://social.example.com",
//     githubUrl: "https://github.com/alexmorgan",
//     category: "React",
//   },
// ];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 95, icon: "⚛️", category: "frontend", color: "#61DAFB" },
  { name: "Next.js", level: 92, icon: "▲", category: "frontend", color: "#FFFFFF" },
  { name: "TypeScript", level: 90, icon: "TS", category: "frontend", color: "#3178C6" },
  { name: "Tailwind CSS", level: 95, icon: "🎨", category: "frontend", color: "#06B6D4" },
  //{ name: "Framer Motion", level: 85, icon: "🎭", category: "frontend", color: "#BB4BFF" },
  //{ name: "Redux Toolkit", level: 88, icon: "🔄", category: "frontend", color: "#764ABC" },
  // Backend
  { name: "Node.js", level: 92, icon: "🟢", category: "backend", color: "#339933" },
  { name: "Express.js", level: 90, icon: "🚀", category: "backend", color: "#000000" },
  //{ name: "GraphQL", level: 80, icon: "◈", category: "backend", color: "#E535AB" },
  { name: "REST APIs", level: 95, icon: "🔌", category: "backend", color: "#6366F1" },
  //{ name: "Socket.io", level: 82, icon: "⚡", category: "backend", color: "#010101" },
  //{ name: "Python", level: 72, icon: "🐍", category: "backend", color: "#3776AB" },
  // Database
  { name: "MongoDB", level: 90, icon: "🍃", category: "database", color: "#47A248" },
  //{ name: "PostgreSQL", level: 85, icon: "🐘", category: "database", color: "#336791" },
  //{ name: "Redis", level: 78, icon: "⚡", category: "database", color: "#DC382D" },
  //{ name: "Prisma ORM", level: 88, icon: "◆", category: "database", color: "#2D3748" },
  //{ name: "MySQL", level: 80, icon: "🔵", category: "database", color: "#4479A1" },
  //{ name: "Firebase", level: 75, icon: "🔥", category: "database", color: "#FFCA28" },
  // Tools
  { name: "Docker", level: 82, icon: "🐳", category: "tools", color: "#2496ED" },
  { name: "Git & GitHub", level: 95, icon: "🐙", category: "tools", color: "#F05032" },
  { name: "AWS", level: 75, icon: "☁️", category: "tools", color: "#FF9900" },
  //{ name: "CI/CD", level: 78, icon: "🔁", category: "tools", color: "#6366F1" },
  { name: "Figma", level: 80, icon: "🎯", category: "tools", color: "#F24E1E" },
  //{ name: "Linux", level: 82, icon: "🐧", category: "tools", color: "#FCC624" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "WordPress Development",
    company: "Freelance",
    period: "1+ years",
    description: [
      "Skilled in custom themes, plugins, Elementor, and website optimization",
      "Focused on delivering high-performance and SEO-friendly solutions",
      "Passionate about creating modern and scalable web experiences",
      "Creating modern, responsive, and high-performance WordPress websites",
    ],
    technologies: ["Elementor", "Crocoblock", "ACF",],
    type: "work",
  },
  {
    id: "2",
    role: "MERN Stack Developer",
    company: "Freelancer",
    period: "1+ years",
    description: [
      "Built 6+ client projects ranging from e-commerce platforms to real-time collaboration tools",
      "Designed RESTful and GraphQL APIs consumed by web and mobile applications",
      "Integrated third-party services including Stripe, SendGrid, and AWS S3",
      "Achieved 85+ Lighthouse performance scores across all delivered projects",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "AWS S3",],
    type: "work",
  },
  {
    id: "3",
    role: "Frontend Developer",
    company: "Freelancer",
    period: "Jan 2020 – May 2021",
    description: [
      "Front-End Developer with a passion for creating modern and responsive web applications",
      "Collaborated with UI/UX designers to implement pixel-perfect interfaces",
      "Skilled in HTML, CSS, JavaScript, React.js, and Next.js",
      "Wrote unit and integration tests achieving 85%+ code coverage",
    ],
    technologies: ["React", "JavaScript", "SASS", "TypeScript", "Webpack"],
    type: "work",
  },
  {
    id: "4",
    role: "B.Sc. Information Technology",
    company: "Virtual University Of Pakistan",
    period: "2025 – 2029",
    description: [
      "Graduated with First Class Honours, GPA 2.7/4.0",
      "Specialization in Software Engineering and Distributed Systems",
      "Final year project: Distributed task scheduling system using microservices architecture",
    ],
    technologies: ["C++", "Java", "Python", "Algorithms", "Data Structures"],
    type: "education",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description: "End-to-end web applications built with modern frameworks, optimized for performance, accessibility, and SEO.",
    features: ["Next.js / React Applications", "Performance Optimization", "SEO & Core Web Vitals", "Progressive Web Apps", "Responsive Design"],
    icon: "🌐",
    gradient: "from-primary to-secondary",
  },
  {
    id: "2",
    title: "MERN Stack Development",
    description: "Full-stack solutions using MongoDB, Express, React, and Node.js — scalable from MVP to enterprise-grade applications.",
    features: ["MongoDB Schema Design", "REST & GraphQL APIs", "React Frontend", "Node.js Backend", "Authentication & Authorization"],
    icon: "⚙️",
    gradient: "from-secondary to-accent",
  },
  {
    id: "3",
    title: "API Development",
    description: "Robust, well-documented APIs with proper security, rate limiting, versioning, and scalability built in from day one.",
    features: ["RESTful API Design", "GraphQL Schemas", "API Documentation", "Security & Auth (JWT, OAuth)", "Rate Limiting & Caching"],
    icon: "🔌",
    gradient: "from-accent to-primary",
  },
  {
    id: "4",
    title: "UI/UX Implementation",
    description: "Translating designs into pixel-perfect, animated, accessible interfaces that users love to interact with.",
    features: ["Figma to Code", "Framer Motion Animations", "Component Libraries", "Accessibility (WCAG 2.1)", "Design Systems"],
    icon: "🎨",
    gradient: "from-primary to-accent",
  },
];

export const stats: Stat[] = [
  { label: "Years of Experience", value: "2", suffix: "+" },
  { label: "Projects Delivered", value: "20", suffix: "+" },
  { label: "Happy Clients", value: "6", suffix: "+" },
  { label: "GitHub Stars", value: "1.2", suffix: "k" },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
