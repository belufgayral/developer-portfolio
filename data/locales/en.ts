import { PortfolioData } from "../types";

export const en: PortfolioData = {
  brand: "Dev/Design",
  author: "Belén Fernández Gayral",

  meta: {
    title: "Dev/Design | Belén Fernández Gayral — Fullstack Engineer & Designer",
    description: "Professional portfolio: high-performance interfaces built with React, TypeScript, Next.js, and clean architecture.",
  },

  navigation: {
    links: [
      { id: "home", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    cta: "Get in Touch",
    languageLabel: "Language:",
    menuAria: "Toggle navigation menu",
  },

  availability: {
    status: "AVAILABLE FOR WORK",
    scope: "Fullstack",
  },

  headline: {
    body: "Fullstack",
    highlight: "Developer",
    end: "& Web Designer",
  },

  bio: {
    body: "I build high-quality digital experiences blending scalable code and clean architecture with user-centered design. High-performance interfaces with",
    tech: "React, TypeScript, Node.js, Tailwind",
    end: "and meticulous design systems.",
  },

  avatar: "/imgs/personal-photo.jpg",

  location: {
    short: "Argentina / Remote",
    full: "Buenos Aires (UTC-3) // Global Remote",
  },

  email: "belenfernandezgayral@gmail.com",

  buttons: {
    projects: "View featured projects",
    cv: "Download Resume",
  },

  hero: {
    placeholderAvatarText: "[Profile photo placeholder]",
  },

  sections: {
    projects: {
      kicker: "01 / FEATURED PROJECTS",
      title: "Technical architecture & uncompromising design",
    },
    about: {
      kicker: "02 / ABOUT ME & PHILOSOPHY",
      title: "Balancing engineering rigor with design sensibility",
    },
    contact: {
      kicker: "03 / START A CONVERSATION",
      title: "Have a project in mind? Let's talk.",
      description: "Always open to discussing new tech initiatives, strategic roles, and collaborations on ambitious projects.",
    },
  },

  projectLabels: {
    expandDetails: "Expand details",
    collapseDetails: "Collapse details",
    challenge: "Challenge:",
    architecture: "Architecture:",
    results: "Results:",
    demoLive: "Live Demo",
    placeholderImageText: "Coming soon! Project under construction.",
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/belufgayral",
      icon: "code",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/belen-fernandez-gayral/",
      icon: "work",
    },
  ],

  projects: [
    {
      id: "loberia-platform",
      title: "Open Government // Lobería Institutional Platform",
      badge: "2025 — Institutional Platform",
      tags: ["Next.js", "NestJS", "PostgreSQL", "JWT", "Docker"],
      image: "imgs/gobierno-abierto-loberia.png",
      alt: "Open Government - Lobería Institutional Platform",
      description: "An accessible, interactive, and transparent digital platform ensuring public access to municipal information, fostering civic participation, and promoting accountability.",
      details: {
        challenge: "In-depth UX/UI research and backend engineering to ensure optimized, intuitive, and quality access for both citizens and municipal administrators.",
        architecture: "Decoupled fullstack architecture with Next.js, NestJS, PostgreSQL, and Docker, implementing secure authentication and role-based access control.",
        results: "Enhanced public access to institutional information.",
      },
      demoUrl: "https://gobiernoabierto.loberia.gob.ar",
    },
    {
      id: "writer-blog",
      title: "Mary Su Sarlat // Author's Personal Blog",
      badge: "2026 — Commercial Blog",
      tags: ["Next.js", "React", "i18n", "Resend"],
      image: "imgs/mary-su-sarlat-blog.png",
      alt: "Mary Su Sarlat - Author's Personal Blog",
      description: "Personal blog for writer Mary Su Sarlat, featuring a clean editorial design optimized for an immersive, fluid reading experience.",
      details: {
        challenge: "Optimizing single landing page performance and managing real-time translations across locales.",
        architecture: "Next.js with i18n and Resend for translation management and email delivery, ensuring swift loading and fluid user experience.",
        results: "Fluid multimedia content delivery and seamless optimization for three languages.",
      },
      demoUrl: "https://www.marysusarlat.com",
    },
    {
      id: "photographer-portfolio",
      title: "Alejandra Gayral Photography // Professional Portfolio",
      badge: "2025 — Artistic Portfolio",
      tags: ["React", "Tailwind"],
      image: "",
      alt: "Alejandra Gayral - Professional Photography Portfolio",
      description: "Showcase portfolio for photographer Alejandra Gayral with a modern minimalist layout, optimized for high-resolution asset loading.",
      details: {
        challenge: "Distribution and rendering of high-resolution images without performance degradation.",
        architecture: "Modern React frontend with progressive loading and responsive design.",
        results: "Fluid presentation of high-resolution images and instant transitions.",
      },
      demoUrl: "",
    },
  ],

  manifesto: {
    title: "// TECHNICAL MANIFESTO",
    quote: '"I don\'t believe in the artificial divide between frontend engineering and product design. The best software emerges when the person designing the interaction understands the algorithmic complexity of implementing it."',
    paragraph: {
      intro: "My work is grounded in three indispensable pillars:",
      pillar1: "fluid user experience",
      pillar2: "maintainable and scalable code",
      pillar3: "modular design systems",
      outro: "that convey elegance and solidity.",
    },
    badgeTitle: "Modular Systems",
    badgeSubtitle: "Design Tokens & Clean Code",
  },

  skillCategories: [
    {
      title: "Frontend & UX/UI Design",
      icon: "web",
      iconColor: "text-primary",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Figma",
      ],
    },
    {
      title: "Backend & Data Infrastructure",
      icon: "database",
      iconColor: "text-secondary",
      skills: [
        "Node.js",
        "NestJS",
        "Python",
        "Springboot",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "GraphQL / REST",
        "Docker",
        "APIs",
      ],
    },
    {
      title: "Methodology & Architecture",
      icon: "schema",
      iconColor: "text-tertiary",
      skills: [
        "Microservices",
        "Scrum",
        "Class diagrams",
        "Trello",
        "Github",
      ],
    },
  ],

  contact: {
    emailLabel: "Direct Email",
    locationLabel: "Location & Time Zone",
    socialTitle: "Online Profiles",
    form: {
      nameLabel: "Full name *",
      namePlaceholder: "e.g., Jane Doe",
      emailLabel: "Email address *",
      emailPlaceholder: "jane@company.com",
      projectTypeLabel: "Project Type / Subject",
      projectTypeOptions: [
        { value: "fullstack", label: "Fullstack Web Development" },
        { value: "frontend", label: "Frontend Engineering & UI Architecture" },
        { value: "design-system", label: "Design Systems & UI/UX Audit" },
        { value: "consulting", label: "Technical Consulting / Remote Role" },
        { value: "other", label: "Other inquiry" },
      ],
      messageLabel: "Message details *",
      messagePlaceholder: "Describe key objectives, estimated timeline, or team details...",
      submitButton: {
        idle: "Send message",
        submitting: "Transmitting packet...",
        success: "Message Sent",
      },
      feedbackSuccess: "✓ Message transmitted successfully. I'll get back to you within 24 business hours.",
      feedbackError: "✕ There was a problem sending the message. Please try again or reach out directly via email.",
    },
  },

  footer: {
    copyright: "© 2026 Fullstack Engineer & Designer. Built with precision.",
    links: [
      { id: "home", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
  },
};

export default en;

