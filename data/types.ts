export interface NavLink {
  id: string;
  label: string;
}

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

export interface SelectOption {
  value: string;
  label: string;
}

export interface PortfolioData {
  brand: string;
  author: string;
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    links: NavLink[];
    cta: string;
    languageLabel: string;
    menuAria: string;
  };
  availability: {
    status: string;
    scope: string;
  };
  headline: {
    body: string;
    highlight: string;
    end: string;
  };
  bio: {
    body: string;
    tech: string;
    end: string;
  };
  avatar: string;
  location: {
    short: string;
    full: string;
  };
  email: string;
  buttons: {
    projects: string;
    cv: string;
  };
  hero: {
    placeholderAvatarText: string;
  };
  sections: {
    projects: {
      kicker: string;
      title: string;
    };
    about: {
      kicker: string;
      title: string;
    };
    contact: {
      kicker: string;
      title: string;
      description: string;
    };
  };
  projectLabels: {
    expandDetails: string;
    collapseDetails: string;
    challenge: string;
    architecture: string;
    results: string;
    demoLive: string;
    placeholderImageText: string;
  };
  socialLinks: SocialLink[];
  projects: Project[];
  manifesto: {
    title: string;
    quote: string;
    paragraph: {
      intro: string;
      pillar1: string;
      pillar2: string;
      pillar3: string;
      outro: string;
    };
    badgeTitle: string;
    badgeSubtitle: string;
  };
  skillCategories: SkillCategory[];
  contact: {
    emailLabel: string;
    locationLabel: string;
    socialTitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      projectTypeLabel: string;
      projectTypeOptions: SelectOption[];
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: {
        idle: string;
        submitting: string;
        success: string;
      };
      feedbackSuccess: string;
      feedbackError: string;
    };
  };
  footer: {
    copyright: string;
    links: NavLink[];
  };
}

export type Language = "es" | "en";

