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
      github?: string
      demo?: string
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
      intro: "Desarrollador Backend con 5 años de experiencia en la construcción de sistemas robustos y escalables.",
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
            "Lideré un equipo de 5 desarrolladores en la migración crítica de una aplicación de React Native a Flutter, mejorando el rendimiento y la mantenibilidad del código.",
            "Colaboré en el diseño arquitectónico y la migración a un modelo de microservicios, adquiriendo conocimientos fundamentales sobre gestión de VPS y escalados.",
            "Manejé conexiones bancarias mediante APIs, implementando el sistema de verificación de pago automático.",
            "Desarrollé con éxito la nueva versión de la aplicación SafyRide.",
          ],
          technologies: ["Flutter", "TypeScript", "Nest.js", "AWS", "Microservicios", "API Bancaria", "VPS"],
        },
        {
          id: "techcomet-dev",
          company: "TechComet",
          position: "Full-Stack Developer",
          period: "Junio 2022 - Diciembre 2023",
          badge: "Blockchain",
          description: [
            "Desarrollé y mantuve APIs robustas con GraphQL y Nest.js para una plataforma con integración blockchain.",
            "Implementé la integración con Web3.js para conectar aplicaciones frontend con smart contracts en Ethereum, creando aplicaciones descentralizadas y de inversión con sistema de staking.",
            "Utilicé AWS para manejar la conexión bancaria bajo un VPN, mejorando así la seguridad y la integridad del servicio.",
            "Participé y terminé con éxito la aplicación SafyRide. En producción mitigamos muchos bugs que surgieron por miles de dispositivos diferentes, escribiendo código nativo en Java para solucionarlo.",
          ],
          technologies: ["GraphQL", "Nest.js", "Web3.js", "Ethereum", "AWS", "VPN", "Java", "DeFi", "Staking"],
        },
        {
          id: "freelancer",
          company: "Freelancer",
          position: "Web Developer",
          period: "Octubre 2020 - Junio 2022",
          badge: "Web Apps",
          description: [
            "Entregué aplicaciones web full-stack para múltiples clientes, desde el concepto inicial hasta el despliegue.",
            "Configuré y gestioné servidores SMTP para envíos múltiples de email, también creando un hosting para respuestas manuales de los correos.",
            "Desarrollé bots de WhatsApp para automatización de procesos.",
            "Desarrollé smart contracts básicos y los integré con interfaces de usuario basadas en React.",
          ],
          technologies: ["React", "Node.js", "Express", "MongoDB", "SMTP", "WhatsApp Bot", "Smart Contracts"],
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
            "Servidor de optimización de imágenes en tiempo real construido con Go, con un sistema de caché inteligente para entregar respuestas en microsegundos.",
          technologies: ["Go", "Image Processing", "Caching", "REST API"],
          emoji: "image",
          github: "https://github.com/iscodev0/serve-img-optimized",
        },
        {
          id: "rodaapp",
          name: "rodaapp.com",
          year: "2024",
          description: "Una plataforma de traslado, una aplicación móvil para conductor y cliente, con un dashboard para administrar los usuarios.",
          technologies: ["Dart/Flutter", "Next.js", "NestJS", "Microservicios", "WebSocket"],
          emoji: "🚗",
          demo: "https://rodaapp.com",
        },
        {
          id: "pandascan",
          name: "pandascan.online",
          year: "2024",
          description:
            "Una aplicación para poder juntar imágenes en cascada en un PDF.",
          technologies: ["PDFjs", "Astro"],
          emoji: "file-text",
          github: "https://github.com/iscodev0/many-images-to-pdf",
          demo: "https://pandascan.online",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Interesado en colaborar? ¡Hablemos!",
      description: "Disponible para el desarrollo de proyectos Backend, especialmente con Go y Node.js.",
      availability: "Disponible para proyectos remotos",
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
      intro: "Backend Developer with 5 years of experience in building robust and scalable systems.",
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
            "Led a team of 5 developers in the critical migration of a React Native application to Flutter, improving performance and code maintainability.",
            "Collaborated on architectural design and migration to a microservices model, gaining fundamental knowledge about VPS management and scaling.",
            "Handled banking connections through APIs, implementing the automatic payment verification system.",
            "Successfully developed the new version of the SafyRide application.",
          ],
          technologies: ["Flutter", "TypeScript", "Nest.js", "AWS", "Microservices", "Banking API", "VPS"],
        },
        {
          id: "techcomet-dev",
          company: "TechComet",
          position: "Full-Stack Developer",
          period: "June 2022 - December 2023",
          badge: "Blockchain",
          description: [
            "Developed and maintained robust APIs with GraphQL and Nest.js for a platform with blockchain integration.",
            "Implemented Web3.js integration to connect frontend applications with smart contracts on Ethereum, creating decentralized applications and investment platforms with staking systems.",
            "Used AWS to handle banking connections under a VPN, thus improving security and service integrity.",
            "Participated and successfully completed the SafyRide application. In production, we mitigated many bugs that occurred due to thousands of different devices, writing native Java code to solve them.",
          ],
          technologies: ["GraphQL", "Nest.js", "Web3.js", "Ethereum", "AWS", "VPN", "Java", "DeFi", "Staking"],
        },
        {
          id: "freelancer",
          company: "Freelancer",
          position: "Web Developer",
          period: "October 2020 - June 2022",
          badge: "Web Apps",
          description: [
            "Delivered full-stack web applications for multiple clients, from initial concept to deployment.",
            "Configured and managed SMTP servers for multiple email sending, also creating hosting for manual email responses.",
            "Developed WhatsApp bots for process automation.",
            "Developed basic smart contracts and integrated them with React-based user interfaces.",
          ],
          technologies: ["React", "Node.js", "Express", "MongoDB", "SMTP", "WhatsApp Bot", "Smart Contracts"],
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
            "Real-time image optimization server built with Go, featuring a smart caching system to deliver responses in microseconds.",
          technologies: ["Go", "Image Processing", "Caching", "REST API"],
          emoji: "image",
          github: "https://github.com/iscodev0/serve-img-optimized",
        },
        {
          id: "rodaapp",
          name: "rodaapp.com",
          year: "2024",
          description: "A transportation platform, a mobile application for drivers and clients, with a dashboard to manage users.",
          technologies: ["Dart/Flutter", "Next.js", "NestJS", "Microservices", "WebSocket"],
          emoji: "🚗",
          demo: "https://rodaapp.com",
        },
        {
          id: "pandascan",
          name: "pandascan.online",
          year: "2024",
          description:
            "An application to combine cascading images into a PDF.",
          technologies: ["PDFjs", "Astro"],
          emoji: "file-text",
          github: "https://github.com/iscodev0/many-images-to-pdf",
          demo: "https://pandascan.online",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Interested in collaborating? Let's talk!",
      description: "Available for Backend development projects, especially with Go and Node.js.",
      availability: "Available for remote projects",
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
      intro: "Desenvolvedor Backend com 5 anos de experiência na construção de sistemas robustos e escaláveis.",
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
            "Liderei uma equipa de 5 desenvolvedores na migração crítica de uma aplicação de React Native para Flutter, melhorando o desempenho e a manutenção do código.",
            "Colaborei no design arquitetónico e na migração para um modelo de microserviços, adquirindo conhecimentos fundamentais sobre gestão de VPS e escalamento.",
            "Geri conexões bancárias através de APIs, implementando o sistema de verificação de pagamento automático.",
            "Desenvolvi com sucesso a nova versão da aplicação SafyRide.",
          ],
          technologies: ["Flutter", "TypeScript", "Nest.js", "AWS", "Microserviços", "API Bancária", "VPS"],
        },
        {
          id: "techcomet-dev",
          company: "TechComet",
          position: "Full-Stack Developer",
          period: "Junho 2022 - Dezembro 2023",
          badge: "Blockchain",
          description: [
            "Desenvolvi e mantive APIs robustas com GraphQL e Nest.js para uma plataforma com integração blockchain.",
            "Implementei a integração com Web3.js para conectar aplicações frontend com smart contracts no Ethereum, criando aplicações descentralizadas e de investimento com sistema de staking.",
            "Utilizei AWS para gerir a conexão bancária sob uma VPN, melhorando assim a segurança e a integridade do serviço.",
            "Participei e terminei com sucesso a aplicação SafyRide. Em produção mitigamos muitos bugs que surgiram devido a milhares de dispositivos diferentes, escrevendo código nativo em Java para solucioná-los.",
          ],
          technologies: ["GraphQL", "Nest.js", "Web3.js", "Ethereum", "AWS", "VPN", "Java", "DeFi", "Staking"],
        },
        {
          id: "freelancer",
          company: "Freelancer",
          position: "Web Developer",
          period: "Outubro 2020 - Junho 2022",
          badge: "Aplicações Web",
          description: [
            "Entreguei aplicações web full-stack para múltiplos clientes, desde o conceito inicial até ao deployment.",
            "Configurei e geri servidores SMTP para envios múltiplos de email, também criando hosting para respostas manuais dos emails.",
            "Desenvolvi bots de WhatsApp para automatização de processos.",
            "Desenvolvi smart contracts básicos e integrei-os com interfaces de utilizador baseadas em React.",
          ],
          technologies: ["React", "Node.js", "Express", "MongoDB", "SMTP", "WhatsApp Bot", "Smart Contracts"],
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
            "Servidor de otimização de imagens em tempo real construído com Go, com um sistema de cache inteligente para entregar respostas em microssegundos.",
          technologies: ["Go", "Image Processing", "Caching", "REST API"],
          emoji: "image",
          github: "https://github.com/iscodev0/serve-img-optimized",
        },
        {
          id: "rodaapp",
          name: "rodaapp.com",
          year: "2024",
          description: "Uma plataforma de transporte, uma aplicação móvel para condutor e cliente, com um dashboard para administrar os utilizadores.",
          technologies: ["Dart/Flutter", "Next.js", "NestJS", "Microserviços", "WebSocket"],
          emoji: "🚗",
          demo: "https://rodaapp.com",
        },
        {
          id: "pandascan",
          name: "pandascan.online",
          year: "2024",
          description:
            "Uma aplicação para poder juntar imagens em cascata num PDF.",
          technologies: ["PDFjs", "Astro"],
          emoji: "file-text",
          github: "https://github.com/iscodev0/many-images-to-pdf",
          demo: "https://pandascan.online",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Interessado em colaborar? Vamos conversar!",
      description: "Disponível para desenvolvimento de projetos Backend, especialmente com Go e Node.js.",
      availability: "Disponível para projetos remotos",
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
    email: "isco@iscodev.com",
    github: "github.com/iscodev0",
    linkedin: "linkedin.com/in/franciscobanquez",
    portfolio: "iscodev.com",
  },
  skills: {
    frontend: ["Astro", "React", "Next.js", "Flutter", "React Native", "TypeScript", "JavaScript"],
    backend: ["Go", "Node.js", "HonoJS", "Express", "NestJS", "Python", "SQL", "GraphQL"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Mongoose", "Drizzle"],
    devops: ["Docker", "AWS (EC2, S3)", "Linux", "Nginx", "CI/CD", "Git"],
    languages: ["Go", "Node.js", "TypeScript", "Python", "JavaScript", "SQL"],
    specialized: {
      scraping: ["Go-Colly", "Playwright", "Process Automation"],
      blockchain: ["Solidity", "Web3.js", "Smart Contracts", "DeFi", "Staking Systems"],
      architecture: ["Microservices", "RESTful APIs", "System Design", "VPS Management"],
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
