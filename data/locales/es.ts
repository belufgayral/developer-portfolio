import { PortfolioData } from "../types";

export const es: PortfolioData = {
  brand: "Dev/Design",
  author: "Belén Fernández Gayral",

  meta: {
    title: "Dev/Design | Belén Fernández Gayral — Fullstack Engineer & Designer",
    description: "Portafolio profesional: interfaces de alto rendimiento con React, TypeScript, Next.js y arquitectura limpia.",
  },

  navigation: {
    links: [
      { id: "home", label: "Inicio" },
      { id: "projects", label: "Proyectos" },
      { id: "about", label: "Sobre mí" },
      { id: "contact", label: "Contacto" },
    ],
    cta: "Contactame",
    languageLabel: "Idioma:",
    menuAria: "Toggle navigation menu",
  },

  availability: {
    status: "DISPONIBLE PARA TRABAJAR",
    scope: "Fullstack",
  },

  headline: {
    body: "Desarrolladora",
    highlight: "Fullstack",
    end: "& Diseñadora Web",
  },

  bio: {
    body: "Creo experiencias digitales de calidad fusionando código escalable y arquitectura limpia con diseño centrado en el usuario. Interfaces de alto rendimiento con",
    tech: "React, TypeScript, Node.js, Tailwind",
    end: "y sistemas de diseño meticulosos.",
  },

  avatar: "/imgs/personal-photo.jpg",

  location: {
    short: "Argentina / Remoto",
    full: "Buenos Aires (UTC-3) // Remoto Global",
  },

  email: "belenfernandezgayral@gmail.com",

  buttons: {
    projects: "Ver proyectos destacados",
    cv: "Descargar CV",
  },

  hero: {
    placeholderAvatarText: "[Foto de perfil placeholder]",
  },

  sections: {
    projects: {
      kicker: "01 / PROYECTOS SELECCIONADOS",
      title: "Arquitectura técnica & diseño sin concesiones",
    },
    about: {
      kicker: "02 / SOBRE MÍ & FILOSOFÍA",
      title: "Equilibrio entre rigor de ingeniería y sensibilidad de diseño",
    },
    contact: {
      kicker: "03 / INICIEMOS CONVERSACIÓN",
      title: "¿Tenés un proyecto en mente? Hablemos.",
      description: "Siempre abierta a discutir nuevas iniciativas tecnológicas, roles estratégicos y colaboraciones en proyectos ambiciosos.",
    },
  },

  projectLabels: {
    expandDetails: "Expandir detalles",
    collapseDetails: "Colapsar detalles",
    challenge: "Desafío:",
    architecture: "Arquitectura:",
    results: "Resultados:",
    repoTitle: "Ver repositorio de código",
    demoLive: "Demo Live",
    placeholderImageText: "¡Próximamente! Proyecto en construcción.",
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
      title: "Gobierno Abierto // Plataforma Institucional Lobería",
      badge: "2025 — Plataforma institucional",
      tags: ["Next.js", "NestJS", "PostgreSQL", "JWT", "Docker"],
      image: "imgs/gobierno-abierto-loberia.png",
      alt: "Gobierno Abierto - Plataforma Institucional Lobería",
      description: "Plataforma digital accesible, interactiva y transparente que garantice a la ciudadanía el acceso a la información pública, fomente la participación cívica y promueva la rendición de cuentas.",
      details: {
        challenge: "Profundo estudio de UX/UI y backend para garantizar un acceso optimizado, intuitivo y de calidad, tanto para ciudadanos como administradores municipales.",
        architecture: "Arquitectura fullstack desacoplada con Next.js, NestJS, PostgreSQL y Docker, implementando autenticación segura y control de acceso por roles.",
        results: "Mejora del acceso a la información pública.",
      },
      demoUrl: "https://gobiernoabierto.loberia.gob.ar",
    },
    {
      id: "writer-blog",
      title: "Mary Su Sarlat // Blog personal de escritora",
      badge: "2026 — Blog comercial",
      tags: ["Next.js", "React", "i18n", "Resend"],
      image: "imgs/mary-su-sarlat-blog.png",
      alt: "Mary Su Sarlat - Blog personal de escritora",
      description: "Blog personal de la escritora Mary Su Sarlat, con un diseño editorial limpio y elegante, optimizado para una experiencia inmersiva y fluida.",
      details: {
        challenge: "Optimizar el diseño de single landing page y manejar las traducciones en tiempo real.",
        architecture: "Next.js con i18n y Resend para la gestión de traducciones y envío de correos electrónicos, asegurando un rendimiento rápido y una experiencia de usuario fluida.",
        results: "Inserción de contenido multimedia fluida y optimización de tres idiomas.",
      },
      demoUrl: "https://www.marysusarlat.com",
    },
    {
      id: "photographer-portfolio",
      title: "Alejandra Gayral Fotografía // Portfolio de fotógrafa profesional",
      badge: "2025 — Portfolio artístico",
      tags: ["React", "Tailwind"],
      image: "",
      alt: "Alejandra Gayral - Portfolio de fotógrafa profesional",
      description: "Portfolio de trabajo de la fotógrafa Alejandra Gayral, con un diseño moderno y minimalista, optimizado para la carga de archivos pesados.",
      details: {
        challenge: "Distribución y renderizado de imágenes de alta resolución sin degradación del rendimiento.",
        architecture: "Frontend moderno en React optimizado con carga progresiva y diseño adaptativo.",
        results: "Presentación fluida de imágenes de alta resolución y transiciones instantáneas.",
      },
      demoUrl: "",
    },
  ],

  manifesto: {
    title: "// MANIFIESTO TÉCNICO",
    quote: '"No creo en la separación artificial entre frontend y diseño de producto. El mejor software nace cuando la persona que diseña la interacción entiende la complejidad algorítmica de implementarla."',
    paragraph: {
      intro: "Mi trabajo se fundamenta en tres pilares irremplazables:",
      pillar1: "experiencia de usuario fluida",
      pillar2: "código mantenible y escalable",
      pillar3: "sistemas de diseño modulares",
      outro: "que transmiten elegancia y solidez.",
    },
    badgeTitle: "Sistemas Modulares",
    badgeSubtitle: "Design Tokens & Clean Code",
  },

  skillCategories: [
    {
      title: "Frontend & Diseño UX/UI",
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
      title: "Backend & Infraestructura de Datos",
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
      title: "Metodología & Arquitectura",
      icon: "schema",
      iconColor: "text-tertiary",
      skills: [
        "Microservicios",
        "Scrum",
        "Diagramas de clases",
        "Trello",
        "Github",
      ],
    },
  ],

  contact: {
    emailLabel: "Email directo",
    locationLabel: "Ubicación & Zona Horaria",
    socialTitle: "Perfiles en la red",
    form: {
      nameLabel: "Nombre completo *",
      namePlaceholder: "Ej. Martín Soler",
      emailLabel: "Correo electrónico *",
      emailPlaceholder: "martin@empresa.com",
      projectTypeLabel: "Tipo de Proyecto / Asunto",
      projectTypeOptions: [
        { value: "fullstack", label: "Desarrollo Web Fullstack Completo" },
        { value: "frontend", label: "Frontend Engineering & UI Architecture" },
        { value: "design-system", label: "Sistemas de Diseño & Auditoría UI/UX" },
        { value: "consulting", label: "Consultoría Técnica / Rol Remoto" },
        { value: "other", label: "Otra consulta" },
      ],
      messageLabel: "Detalles del mensaje *",
      messagePlaceholder: "Describe los objetivos clave, cronograma estimado o detalles sobre tu equipo...",
      submitButton: {
        idle: "Enviar mensaje",
        submitting: "Transmitiendo paquete...",
        success: "Mensaje Enviado",
      },
      feedbackSuccess: "✓ Mensaje transmitido con éxito. Te responderé en menos de 24 horas laborables.",
      feedbackError: "✕ Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo o contáctame directamente por email.",
    },
  },

  footer: {
    copyright: "© 2026 Fullstack Engineer & Designer. Built with precision.",
    links: [
      { id: "home", label: "Inicio" },
      { id: "projects", label: "Proyectos" },
      { id: "about", label: "Sobre Mí" },
      { id: "contact", label: "Contacto" },
    ],
  },
};

export default es;

