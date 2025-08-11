export type Language = "es" | "en" | "pt"

export interface PersonalData {
  name: string
  title: string
  location: string
  status: string
  remoteWork: string
  about: {
    intro: string
    description: string
    currentFocus: string
  }
  experience: {
    title: string
    jobs: {
      id: string
      company: string
      position: string
      period: string
      current?: boolean
      badge: string
      description: string[]
      technologies: string[]
    }[]
  }
  skills: {
    title: string
    categories: {
      frontend: { title: string; icon: string }
      backend: { title: string; icon: string }
      databases: { title: string; icon: string }
      devops: { title: string; icon: string }
    }
    specialized: {
      scraping: { title: string; description: string }
      blockchain: { title: string; description: string }
      architecture: { title: string; description: string }
    }
  }
  projects: {
    title: string
    items: {
      id: string
      name: string
      year: string
      description: string
      technologies: string[]
      emoji: string
    }[]
  }
  contact: {
    title: string
    subtitle: string
    description: string
    availability: string
    cta: {
      email: string
      github: string
    }
  }
  footer: {
    thanks: string
    builtWith: string
  }
}

export const translations: Record<Language, PersonalData> = {
  es: {
    name: "Francisco Banquez",
    title: "Backend Developer",
    location: "Portugal",
    status: "Disponible",
    remoteWork: "Trabajo Remoto",
    about: {
      intro: "Desarrollador Backend con casi 5 años de experiencia en la construcción de sistemas robustos y escalables.",
      description: "Mi stack principal incluye Node.js, TypeScript y Go, con una sólida base en PostgreSQL y Docker.",
      currentFocus:
        "Actualmente estoy profundizando mis habilidades en Go y arquitecturas de microservicios para crear aplicaciones más eficientes.",
    },
    experience: {
      title: "Experiencia Laboral",
      jobs: [
        {
          id: "techcomet-pm",
          company: "TechComet",
          position: "Product Manager",
          period: "Diciembre 2023 - Julio 2024",
          badge: "Liderazgo",
          description: [
            "Guié a un equipo de 5 desarrolladores en la migración de una app de React Native a Flutter, mejorando el rendimiento.",
            "Colaboré en el diseño y migración hacia una arquitectura de microservicios, adquiriendo conocimientos fundamentales de Kubernetes.",
            "Participé en la definición y supervisión de pipelines de CI/CD y en el despliegue de servicios en AWS.",
          ],
          technologies: ["Flutter", "TypeScript", "Nest.js", "AWS", "Docker", "PostgreSQL", "Kubernetes (Foundational)"],
        },
        {
          id: "techcomet-dev",
          company: "TechComet",
          position: "FullStack Developer",
          period: "Junio 2022 - Diciembre 2023",
          badge: "Blockchain",
          description: [
            "Desarrollo de APIs robustas con NestJS y GraphQL para una plataforma con integración blockchain.",
            "Implementación de la integración con Web3.js para interactuar con smart contracts en Ethereum.",
            "Trabajé con Firebase y AWS para servicios de autenticación y almacenamiento.",
          ],
          technologies: ["Next.js", "Nest.js", "GraphQL", "AWS", "Firebase", "Prisma", "PostgreSQL"],
        },
        {
          id: "freelancer",
          company: "Freelancer",
          position: "Web Developer",
          period: "Abril 2021 - Junio 2022",
          badge: "Web Apps",
          description: [
            "Desarrollo de aplicaciones web completas para diversos clientes.",
            "Implementación de smart contracts básicos y su integración con interfaces en React.",
            "Configuración y mantenimiento de servidores Linux (VPS) para despliegues.",
          ],
          technologies: ["React", "Node.js", "Express", "MongoDB", "Linux", "Nginx", "Blockchain (Basic)"],
        },
      ],
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: {
        frontend: { title: "Frontend", icon: "💻" },
        backend: { title: "Backend", icon: "⚙️" },
        databases: { title: "Bases de Datos", icon: "🗄️" },
        devops: { title: "DevOps & Cloud", icon: "☁️" },
      },
      specialized: {
        scraping: {
          title: "Web Scraping & Automatización",
          description: "Sistemas para la extracción automatizada de datos.",
        },
        blockchain: {
          title: "Blockchain & Web3",
          description: "Conocimientos en smart contracts y aplicaciones descentralizadas.",
        },
        architecture: { title: "Arquitectura de Software", description: "Principios de diseño de APIs y sistemas." },
      },
    },
    projects: {
      title: "Proyectos Destacados",
      items: [
        {
          id: "image-optimization-api",
          name: "Image Optimization API",
          year: "2025",
          description:
            "Servidor de optimización de imágenes en tiempo real con sistema de caché inteligente. Soporte multi-formato y respuestas en microsegundos.",
          technologies: ["Go", "Image Processing", "Cache System", "REST API"],
          emoji: "🖼️",
        },
        {
          id: "rodaapp",
          name: "rodaapp.com",
          year: "2024",
          description: "Plataforma de delivery y transporte. Sistema completo con geolocalización y gestión de rutas.",
          technologies: ["React Native", "Node.js", "MongoDB"],
          emoji: "🚗",
        },
        {
          id: "loxcoin",
          name: "loxcoin.io",
          year: "2021",
          description:
            "Plataforma de gestión de criptomonedas con enfoque en seguridad y escalabilidad. Integración Web3 completa.",
          technologies: ["Blockchain", "Solidity", "Web3"],
          emoji: "💰",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Interesado en colaborar? ¡Hablemos!",
      description: "Abierto a oportunidades en desarrollo Backend, especialmente con Go y Node.js.",
      availability: "Disponible para trabajo remoto",
      cta: {
        email: "Enviar Email",
        github: "Ver GitHub",
      },
    },
    footer: {
      thanks: "¡Gracias por visitar!",
      builtWith: "Construido con Next.js & TypeScript",
    },
  },
  en: {
    name: "Francisco Banquez",
    title: "Backend Developer",
    location: "Portugal",
    status: "Available",
    remoteWork: "Remote Work",
    about: {
      intro: "Backend Developer with nearly 5 years of experience in building robust and scalable systems.",
      description: "My core stack includes Node.js, TypeScript, and Go, with a strong foundation in PostgreSQL and Docker.",
      currentFocus:
        "I am currently deepening my skills in Go and microservices architecture to create more efficient applications.",
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          id: "techcomet-pm",
          company: "TechComet",
          position: "Product Manager",
          period: "December 2023 - July 2024",
          badge: "Leadership",
          description: [
            "Led a team of 5 developers in migrating a React Native app to Flutter, improving performance.",
            "Collaborated on the design and migration to a microservices architecture, gaining foundational knowledge of Kubernetes.",
            "Participated in defining and overseeing CI/CD pipelines and deploying services on AWS.",
          ],
          technologies: ["Flutter", "TypeScript", "Nest.js", "AWS", "Docker", "PostgreSQL", "Kubernetes (Foundational)"],
        },
        {
          id: "techcomet-dev",
          company: "TechComet",
          position: "FullStack Developer",
          period: "June 2022 - December 2023",
          badge: "Blockchain",
          description: [
            "Developed robust APIs with NestJS and GraphQL for a platform with blockchain integration.",
            "Implemented Web3.js integration to interact with smart contracts on the Ethereum blockchain.",
            "Worked with Firebase and AWS for authentication and storage services.",
          ],
          technologies: ["Next.js", "Nest.js", "GraphQL", "AWS", "Firebase", "Prisma", "PostgreSQL"],
        },
        {
          id: "freelancer",
          company: "Freelancer",
          position: "Web Developer",
          period: "April 2021 - June 2022",
          badge: "Web Apps",
          description: [
            "Developed full web applications for various clients.",
            "Implemented basic smart contracts and integrated them with React interfaces.",
            "Configured and maintained Linux servers (VPS) for deployments.",
          ],
          technologies: ["React", "Node.js", "Express", "MongoDB", "Linux", "Nginx", "Blockchain (Basic)"],
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      categories: {
        frontend: { title: "Frontend", icon: "💻" },
        backend: { title: "Backend", icon: "⚙️" },
        databases: { title: "Databases", icon: "🗄️" },
        devops: { title: "DevOps & Cloud", icon: "☁️" },
      },
      specialized: {
        scraping: {
          title: "Web Scraping & Automation",
          description: "Systems for automated data extraction.",
        },
        blockchain: {
          title: "Blockchain & Web3",
          description: "Knowledge of smart contracts and decentralized applications.",
        },
        architecture: { title: "Software Architecture", description: "Principles of API and system design." },
      },
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          id: "image-optimization-api",
          name: "Image Optimization API",
          year: "2025",
          description:
            "Real-time image optimization server with a smart caching system. Multi-format support and microsecond responses.",
          technologies: ["Go", "Image Processing", "Cache System", "REST API"],
          emoji: "🖼️",
        },
        {
          id: "rodaapp",
          name: "rodaapp.com",
          year: "2024",
          description: "Delivery and transportation platform. A complete system with geolocation and route management.",
          technologies: ["React Native", "Node.js", "MongoDB"],
          emoji: "🚗",
        },
        {
          id: "loxcoin",
          name: "loxcoin.io",
          year: "2021",
          description:
            "Cryptocurrency management platform focused on security and scalability. Full Web3 integration.",
          technologies: ["Blockchain", "Solidity", "Web3"],
          emoji: "💰",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Interested in collaborating? Let's talk!",
      description: "Open to opportunities in Backend development, especially with Go and Node.js.",
      availability: "Available for remote work",
      cta: {
        email: "Send Email",
        github: "View GitHub",
      },
    },
    footer: {
      thanks: "Thanks for visiting!",
      builtWith: "Built with Next.js & TypeScript",
    },
  },
  pt: {
    name: "Francisco Banquez",
    title: "Desenvolvedor Backend",
    location: "Portugal",
    status: "Disponível",
    remoteWork: "Trabalho Remoto",
    about: {
      intro: "Desenvolvedor Backend com quase 5 anos de experiência na construção de sistemas robustos e escaláveis.",
      description: "Meu stack principal inclui Node.js, TypeScript e Go, com uma base sólida em PostgreSQL e Docker.",
      currentFocus:
        "Atualmente, estou a aprofundar as minhas competências em Go e arquiteturas de microserviços para criar aplicações mais eficientes.",
    },
    experience: {
      title: "Experiência Profissional",
      jobs: [
        {
          id: "techcomet-pm",
          company: "TechComet",
          position: "Product Manager",
          period: "Dezembro 2023 - Julho 2024",
          badge: "Liderança",
          description: [
            "Liderei uma equipa de 5 desenvolvedores na migração de uma app de React Native para Flutter, melhorando o desempenho.",
            "Colaborei no desenho e migração para uma arquitetura de microserviços, adquirindo conhecimentos fundamentais de Kubernetes.",
            "Participei na definição e supervisão de pipelines de CI/CD e na implantação de serviços na AWS.",
          ],
          technologies: ["Flutter", "TypeScript", "Nest.js", "AWS", "Docker", "PostgreSQL", "Kubernetes (Fundamental)"],
        },
        {
          id: "techcomet-dev",
          company: "TechComet",
          position: "FullStack Developer",
          period: "Junho 2022 - Dezembro 2023",
          badge: "Blockchain",
          description: [
            "Desenvolvimento de APIs robustas com NestJS e GraphQL para uma plataforma com integração blockchain.",
            "Implementação da integração com Web3.js para interagir com smart contracts na blockchain Ethereum.",
            "Trabalhei com Firebase e AWS para serviços de autenticação e armazenamento.",
          ],
          technologies: ["Next.js", "Nest.js", "GraphQL", "AWS", "Firebase", "Prisma", "PostgreSQL"],
        },
        {
          id: "freelancer",
          company: "Freelancer",
          position: "Web Developer",
          period: "Abril 2021 - Junho 2022",
          badge: "Aplicações Web",
          description: [
            "Desenvolvimento de aplicações web completas para diversos clientes.",
            "Implementação de smart contracts básicos e sua integração com interfaces em React.",
            "Configuração e manutenção de servidores Linux (VPS) para implantações.",
          ],
          technologies: ["React", "Node.js", "Express", "MongoDB", "Linux", "Nginx", "Blockchain (Básico)"],
        },
      ],
    },
    skills: {
      title: "Competências Técnicas",
      categories: {
        frontend: { title: "Frontend", icon: "💻" },
        backend: { title: "Backend", icon: "⚙️" },
        databases: { title: "Bases de Dados", icon: "🗄️" },
        devops: { title: "DevOps & Cloud", icon: "☁️" },
      },
      specialized: {
        scraping: {
          title: "Web Scraping & Automação",
          description: "Sistemas para a extração automatizada de dados.",
        },
        blockchain: {
          title: "Blockchain & Web3",
          description: "Conhecimento em smart contracts e aplicações descentralizadas.",
        },
        architecture: { title: "Arquitetura de Software", description: "Princípios de desenho de APIs e sistemas." },
      },
    },
    projects: {
      title: "Projetos em Destaque",
      items: [
        {
          id: "image-optimization-api",
          name: "Image Optimization API",
          year: "2025",
          description:
            "Servidor de otimização de imagens em tempo real com um sistema de cache inteligente. Suporte a múltiplos formatos e respostas em microssegundos.",
          technologies: ["Go", "Image Processing", "Cache System", "REST API"],
          emoji: "🖼️",
        },
        {
          id: "rodaapp",
          name: "rodaapp.com",
          year: "2024",
          description: "Plataforma de delivery e transporte. Um sistema completo com geolocalização e gestão de rotas.",
          technologies: ["React Native", "Node.js", "MongoDB"],
          emoji: "🚗",
        },
        {
          id: "loxcoin",
          name: "loxcoin.io",
          year: "2021",
          description:
            "Plataforma de gestão de criptomoedas focada em segurança e escalabilidade. Integração Web3 completa.",
          technologies: ["Blockchain", "Solidity", "Web3"],
          emoji: "💰",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Interessado em colaborar? Vamos conversar!",
      description: "Aberto a oportunidades em desenvolvimento Backend, especialmente com Go e Node.js.",
      availability: "Disponível para trabalho remoto",
      cta: {
        email: "Enviar Email",
        github: "Ver GitHub",
      },
    },
    footer: {
      thanks: "Obrigado pela visita!",
      builtWith: "Construído com Next.js & TypeScript",
    },
  },
}

// Static data that doesn't need translation
export const staticData = {
  contact: {
    email: "banquezfrancisco@yahoo.com",
    github: "github.com/iscodev0",
    linkedin: "linkedin.com/in/franciscobanquez",
    portfolio: "iscodev-web.vercel.app",
  },
  skills: {
    frontend: ["React", "Next.js", "Astro", "TypeScript", "JavaScript", "Flutter", "React Native"],
    backend: ["Go", "Node.js", "HonoJS", "Express", "Nest.js", "Python", "Django", "GraphQL"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase", "Prisma", "Drizzle"],
    devops: ["Docker", "AWS", "Cloudflare", "Linux", "Nginx", "CI/CD", "Git"],
    specialized: {
      scraping: ["Go-Colly", "Playwright", "Puppeteer", "Process Automation"],
      blockchain: ["Solidity", "Web3.js", "Ethers.js", "Smart Contracts"],
      architecture: ["Microservices", "RESTful APIs", "System Design", "Scalable Systems"],
    },
  },
}

export const languageNames: Record<Language, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
}

export const languageFlags: Record<Language, string> = {
  es: "🇪🇸",
  en: "🇺🇸",
  pt: "🇵🇹",
}