export interface ProjectDetail {
  challenge: string;
  architecture: string;
  results: string;
}

export interface Project {
  id: string;
  title: string;
  badge: string;
  tags: string[];
  image: string;
  alt: string;
  description: string;
  details: ProjectDetail;
  repoUrl: string;
  demoUrl: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  iconColor: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const portfolioData = {
  brand: "Dev/Design",
  author: "Lucía Méndez",
  headline: "Desarrolladora Fullstack & Diseñadora Web",
  availability: {
    status: "AVAILABLE FOR WORK",
    scope: "Roles Remotos & Proyectos Clave",
  },
  bio: "Creo experiencias digitales memorables fusionando código escalable y arquitectura limpia con diseño centrado en el usuario. +5 años materializando interfaces de alto rendimiento con React, TypeScript, Node.js, Tailwind y sistemas de diseño meticulosos.",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhwixM_Mw8-l5ki0OmGB5SvniuedMkcrDFPqVo0i7E_G6GUS3st-k5LJrwjgUN_KFrX3V4_PEtKgKUo2Dx2X369U_Ec8puPwcRY9AUHZ_bURrYN1GrTPsqEnyuiOg1f8021oP4pWpArdIXQY3TQ_bH1tEN6_07bJ-j0AYwhxRHW5chUe4kNT82Ew01X8glMf_M6XomsBSX5paqjs6nG78WGUBn9KYrHJc8aIBfGvkk0cbqrA2hm0nu",
  locationShort: "Madrid / Remoto",
  locationFull: "Madrid (CET) & Buenos Aires (UTC-3) // Remoto Global",
  email: "hola@luciamendez.dev",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "code",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "work",
    },
    {
      name: "Twitter / X",
      url: "https://twitter.com",
      icon: "send",
    },
  ],
  projects: [
    {
      id: "aura-capital",
      title: "Aura Capital // Plataforma Institucional FinTech",
      badge: "2024 — FinTech SaaS",
      tags: ["Next.js 14", "TypeScript", "PostgreSQL", "Tailwind"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBshkkiZ9cyapI9mkbVFN_SSHLhGL4M-emUEBoFsHS_JNlzAJKMeZny1XnWnrfCt2Mv_6d38QxcrWVmWQmGF-8-FXMj7gmNBsXVbtbI9K8hR_eoJtJqHIaL22HEUfH-rTdqR3UzbeQuoCNxFmR-THkHsaLCuIjcyg8jh3SqFC5BxCGL3JaM6mh2FTHoBMMztlFoLm5Ve5gidrOgtll4Hl1DZR9Ym7jiAj7Ho8aRg9wTiqIUgJkTAkN3",
      alt: "Aura Capital - Plataforma Institucional FinTech",
      description: "Plataforma web para orquestación de pagos internacionales y analítica predictiva de tesorería con latencia menor a 120ms y dashboards en tiempo real.",
      details: {
        challenge: "Procesamiento de miles de transacciones concurrentes con reconciliación bancaria automatizada.",
        architecture: "Serverless edge functions, Redis cache layer y diseño de micro-interacciones con WebSockets.",
        results: "Reducción del 99.4% en tiempo de reconciliación y 99.98% de disponibilidad verificada en producción.",
      },
      repoUrl: "#contact",
      demoUrl: "#contact",
    },
    {
      id: "kanso-objects",
      title: "Kanso Objects // E-Commerce Editorial",
      badge: "2024 — Editorial Store",
      tags: ["React", "GraphQL", "Stripe API", "Framer Motion"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFcwzDoyT1rW-jqhzNl61KSB7qhCv-T42SxOnS6oUAzemPHFesOGWcFtUARB5KEPJ_MYfUSbZO2MhU82iF8FCkudy3V6jT-M24Yce2pH5NiQhdNkjNCRiaUHegc6bQOTzFW1F5ejqJK2VwfOtkU-75oPYgb9zhpjM-S3pa9NkvXOlJYbI1RtGrVIT1py3hQ7TtT4evk2XK35Rujxsf2-ZdveOgLpKUjqpA3W5Mgprp0H7q1NBF80qC",
      alt: "Kanso Objects - E-Commerce Editorial",
      description: "Tienda de diseño nórdico con navegación fluida sin recarga de página, checkout optimizado de 1-click y sistema de diseño modular de 60+ componentes.",
      details: {
        challenge: "Mantener puntuación 100 en Google Lighthouse conservando transiciones visuales cinematográficas.",
        architecture: "Headless Shopify con frontend desacoplado y carga progresiva optimizada.",
        results: "Incremento del 42% en la tasa de conversión en mobile y un tiempo First Contentful Paint inferior a 0.8s.",
      },
      repoUrl: "#contact",
      demoUrl: "#contact",
    },
    {
      id: "synapse-intelligence",
      title: "Synapse Intelligence // Monitor de Modelos LLM",
      badge: "2023 — LLM Ops & Data",
      tags: ["Vue 3", "Python / FastAPI", "Tailwind", "Docker"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw5Weg6EKMGeMkk-R9UebQs16ivZHNgs2fHO6TtEbKbDLfiLYV2HCVW-BAeuKczA-bsVAb07xNMJfuh8WR0EweYyPU02ArxuUFaVtDnKP9HOBY8hjMAaUt2h846_J9Zxx2g5zXY-iL4Eq3I0lKr40L6rtIEiJs3VPKWopxewZm6XFtNM7F_rTmULjo6DJ8sLcTjowudZyd303nzDxNuA7JVhugdBgDP81rtvL9S9--Hbk53fg2ke3N",
      alt: "Synapse Intelligence - Monitor de Modelos LLM",
      description: "Consola de observabilidad para pipelines de inteligencia artificial generativa con alertas de anomalías y visualización de grafos dimensionales.",
      details: {
        challenge: "Renderizar miles de nodos sin degradación del thread principal de JavaScript en navegadores web.",
        architecture: "Canvas WebGL acelerado por hardware combinado con streaming de eventos vía gRPC.",
        results: "Tasa de refresco constante a 60 FPS con más de 10,000 conexiones concurrentes.",
      },
      repoUrl: "#contact",
      demoUrl: "#contact",
    },
    {
      id: "draftgrid",
      title: "DraftGrid // Espacio Colaborativo para Equipos UI",
      badge: "2023 — Creative Suite",
      tags: ["Next.js", "WebSockets", "CRDTs / Yjs", "Figma API"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpENQX5L04hJwfDgueVM0XvtoC2TbqkSc3bU_bY2hHOVbW-lcesVITPPeqYsY7KpNsHLcDQoDi5i4UDYiPt8_3mugt16819KRcHGspsq_qKaTZCtSHfEM4XHjhp2pKqRVLVjQPV4CyrE-HPtql8cArQJgrlwunKjJ5TtW_cdfQ90OsvKvPReYFHdKnrd6qwdWC9v6SB2V_l5aaX1b7XHUjQdmIC5Ji5lZyEA-0s0X44_nXWBWJ7dhC",
      alt: "DraftGrid - Espacio Colaborativo para Equipos UI",
      description: "Herramienta multiusuario para sincronizar especificaciones de diseño y tokens directamente a repositorios de código mediante PRs automatizadas.",
      details: {
        challenge: "Resolución de conflictos de estado en tiempo real entre múltiples diseñadores concurrentes.",
        architecture: "Algoritmos CRDT distribuidos en edge nodes con compresión binaria personalizada.",
        results: "Sincronización continua de design tokens adoptada por más de 15 equipos de producto.",
      },
      repoUrl: "#contact",
      demoUrl: "#contact",
    },
  ],
  manifesto: {
    title: "// MANIFIESTO TÉCNICO",
    quote: '"No creo en la separación artificial entre frontend y diseño de producto. El mejor software nace cuando la persona que diseña la interacción entiende la complejidad algorítmica de implementarla."',
    paragraph: "Mi trabajo se fundamenta en tres pilares irremplazables: accesibilidad universal (a11y), código mantenible y tipado estricto, y micro-interacciones deliberadas que transmiten elegancia y solidez.",
    badgeTitle: "Sistemas Modulares",
    badgeSubtitle: "Design Tokens & Clean Code",
  },
  skillCategories: [
    {
      title: "Frontend & Arquitectura Cliente",
      icon: "web",
      iconColor: "text-primary",
      skills: [
        "React 18+",
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js / Nuxt",
        "Zustand & Redux",
        "Framer Motion",
      ],
    },
    {
      title: "Backend & Infraestructura de Datos",
      icon: "database",
      iconColor: "text-secondary",
      skills: [
        "Node.js & Express",
        "Python / FastAPI",
        "PostgreSQL",
        "Prisma ORM",
        "Redis",
        "GraphQL / REST",
        "Docker & CI/CD",
      ],
    },
    {
      title: "Diseño UI/UX & Metodología",
      icon: "palette",
      iconColor: "text-tertiary",
      skills: [
        "Figma (Tokens & Components)",
        "Prototipado Interactivo",
        "WCAG 2.1 AA Compliance",
        "User Testing",
        "Editorial Layouts",
      ],
    },
  ],
  telemetry: {
    status: "OPERATIONAL",
    nodeEnv: "production",
    latency: "14ms",
    build: "v4.8.2",
  },
};

