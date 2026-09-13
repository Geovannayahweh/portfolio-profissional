export const profile = {
  name: "Geovanna Karolyne Jave Soto",
  shortName: "Geovanna Soto",
  initials: "GS",
  photo: "/geovanna.jpg",
  github: "https://github.com/Geovannayahweh",
  linkedin: "https://www.linkedin.com/in/geovanna-soto-4aaa9b233/",
  // Substitua pelo e-mail que a Geovanna quiser divulgar no portfólio.
  email: "geovanna.soto@exemplo.com",
  location: "Curitiba, PR — Brasil",
} as const;

export type SkillCategory = "frontend" | "backend" | "tools";

export type Skill = {
  name: string;
  icon: string;
  color: string;
  category: SkillCategory;
};

export const skills: Skill[] = [
  { name: "HTML5", icon: "html", color: "#E44D26", category: "frontend" },
  { name: "CSS3", icon: "css", color: "#2965F1", category: "frontend" },
  { name: "JavaScript", icon: "javascript", color: "#E9A227", category: "frontend" },
  { name: "React", icon: "react", color: "#3FA9C8", category: "frontend" },

  { name: "Python", icon: "python", color: "#3572A5", category: "backend" },
  { name: "Java", icon: "java", color: "#D0743C", category: "backend" },
  { name: "MySQL", icon: "mysql", color: "#00758F", category: "backend" },
  { name: "SQLite", icon: "sqlite", color: "#5EA5D9", category: "backend" },

  { name: "Git", icon: "git", color: "#E44C30", category: "tools" },
  { name: "GitHub", icon: "github", color: "#4B3B41", category: "tools" },
];

export type Project = {
  key: "cinelog" | "csc" | "biblioteca" | "tde3" | "senhas" | "batalha";
  repo: string;
  stack: string[];
  featured?: boolean;
  accent: [string, string];
};

export const projects: Project[] = [
  {
    key: "cinelog",
    repo: "https://github.com/Geovannayahweh/CineLog",
    stack: ["React", "Node.js", "Express", "SQLite", "JWT", "Jest"],
    featured: true,
    accent: ["#c75f86", "#8e5a8f"],
  },
  {
    key: "csc",
    repo: "https://github.com/Geovannayahweh/Projeto-Disciplina-CSC",
    stack: ["Python", "Sockets TCP", "Threads", "JSON"],
    featured: true,
    accent: ["#8e5a8f", "#b189c9"],
  },
  {
    key: "biblioteca",
    repo: "https://github.com/Geovannayahweh/Sistema-de-Biblioteca",
    stack: ["Java", "POO"],
    accent: ["#c9a063", "#e08ba6"],
  },
  {
    key: "tde3",
    repo: "https://github.com/Geovannayahweh/TDE-3-Web",
    stack: ["JavaScript", "Fetch API", "Async/Await"],
    accent: ["#b189c9", "#e795b1"],
  },
  {
    key: "senhas",
    repo: "https://github.com/Geovannayahweh/Gerador-de-Senhas",
    stack: ["JavaScript", "HTML", "CSS"],
    accent: ["#e795b1", "#c9a063"],
  },
  {
    key: "batalha",
    repo: "https://github.com/Geovannayahweh/Batalha-Naval",
    stack: ["Python", "Lógica"],
    accent: ["#8e5a8f", "#c75f86"],
  },
];

export const navLinks = [
  { id: "about", key: "about" },
  { id: "experience", key: "experience" },
  { id: "skills", key: "skills" },
  { id: "projects", key: "projects" },
  { id: "contact", key: "contact" },
] as const;
