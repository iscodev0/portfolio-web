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
    title: "Backend Developer & DevOps Engineer",
    location: "Portugal",
    status: "Disponible",
    remoteWork: "Trabajo Remoto",
    about: {
      intro: "Backend Developer especializado en crear sistemas escalables y automatización.",
      description: "Experiencia sólida en Go, Node.js, y tecnologías de containerización.",
      currentFocus:
        "Actualmente enfocado en web scraping, microservicios, y DevOps. Con experiencia liderando equipos y migrando sistemas críticos.",
    },
    experience: {
      title: "Experiencia Laboral",
      jobs: [
        {
          id: "kadecode",
          company: "KadeCode",
          position: "Go Developer",
          period: "Diciembre 2024 - Actualidad",
          current: true,
          badge: "Actual",
          description: [
            "Desarrollo de sistemas de web scraping y automatización con Go",
            "Implementación de pipelines de datos escalables y eficientes",
            "Containerización y deployment con Docker en entornos Linux",
          ],
          technologies: [
            "Go",
            "Go-Colly",
            "Playwright",
            "Docker",
            "Linux",
            "PostgreSQL",
            "Drizzle",
            "HonoJS",
            "Next.js",
            "TypeScript",
          ],
        },
        {
          id: "techcomet-pm",
          company: "TechComet",
          position: "Product Manager",
          period: "Diciembre 2023 - Julio 2024",
          badge: "Liderazgo",
          description: [
            "Lideré equipo de 5 desarrolladores en migración React Native → Flutter",
            "Arquitectura de microservicios y orquestación con Kubernetes",
            "Implementación de CI/CD pipelines y gestión de infraestructura AWS",
          ],
          technologies: [
            "Next.js",
            "Nest.js",
            "TypeScript",
            "AWS",
            "Kubernetes",
            "Docker",
            "PostgreSQL",
            "Redis",
            "Flutter",
            "Microservices",
          ],
        },
        {
          id: "techcomet-dev",
          company: "TechComet",
          position: "FullStack Developer",
          period: "Junio 2022 - Diciembre 2023",
          badge: "Blockchain",
          description: [
            "Desarrollo de proyectos blockchain y algoritmos de eficiencia",
            "Implementación de APIs GraphQL y integración con AWS services",
            "Desarrollo de aplicaciones móviles y web con stack moderno",
          ],
          technologies: [
            "Next.js",
            "Nest.js",
            "TypeScript",
            "AWS",
            "CI/CD",
            "Docker",
            "Firebase",
            "GraphQL",
            "Prisma",
            "PostgreSQL",
          ],
        },
        {
          id: "freelancer",
          company: "Freelancer",
          position: "Web Developer",
          period: "Abril 2021 - Junio 2022",
          badge: "Blockchain",
          description: [
            "Desarrollo completo de aplicaciones blockchain y DeFi",
            "Implementación de smart contracts y integración Web3",
            "Configuración de servidores Linux y optimización de sistemas",
          ],
          technologies: ["React", "Next.js", "Linux", "Nginx", "Express", "MongoDB", "MySQL", "Blockchain"],
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
          description: "Sistemas automatizados de extracción de datos",
        },
        blockchain: { title: "Blockchain & Web3", description: "Smart contracts y aplicaciones descentralizadas" },
        architecture: { title: "Arquitectura & Diseño", description: "Sistemas escalables y microservicios" },
      },
    },
    projects: {
      title: "Proyectos Destacados",
      items: [
        // {
        //   id: "pandaonline",
        //   name: "pandaonline",
        //   year: "2025",
        //   description:
        //     "Plataforma de lectura de cómics con interfaz similar a Webtoon. Permite subida y gestión de contenido por usuarios.",
        //   technologies: ["Next.js", "React", "TypeScript"],
        //   emoji: "📚",
        // },
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
        {
          id: "scraping",
          name: "Sistemas de Scraping",
          year: "2024 - En curso",
          description:
            "Sistemas automatizados de extracción de datos con Go. Procesamiento masivo y almacenamiento eficiente.",
          technologies: ["Go", "Go-Colly", "Docker"],
          emoji: "🔍",
        },
        {
          id: "microservices",
          name: "Arquitectura de Microservicios",
          year: "2023 - 2024",
          description:
            "Arquitectura de microservicios escalable con Kubernetes. CI/CD automatizado y monitoreo completo.",
          technologies: ["Kubernetes", "AWS", "Docker"],
          emoji: "🏗️",
        },
        {
          id: "honojs",
          name: "APIs con HonoJS",
          year: "2024",
          description: "APIs ultra-rápidas con HonoJS. Optimizadas para edge computing, alojadas en Cloudflare alta concurrencia.",
          technologies: ["HonoJS", "Cloudflare", "TypeScript"],
          emoji: "⚡",
        },
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Interesado en colaborar? ¡Hablemos!",
      description: "Disponible para proyectos de backend, DevOps, y sistemas de automatización",
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
    title: "Backend Developer & DevOps Engineer",
    location: "Portugal",
    status: "Available",
    remoteWork: "Remote Work",
    about: {
      intro: "Backend Developer specialized in creating scalable systems and automation.",
      description: "Strong experience in Go, Node.js, and containerization technologies.",
      currentFocus:
        "Currently focused on web scraping, microservices, and DevOps. With experience leading teams and migrating critical systems.",
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          id: "kadecode",
          company: "KadeCode",
          position: "Go Developer",
          period: "December 2024 - Present",
          current: true,
          badge: "Current",
          description: [
            "Development of web scraping and automation systems with Go",
            "Implementation of scalable and efficient data pipelines",
            "Containerization and deployment with Docker in Linux environments",
          ],
          technologies: [
            "Go",
            "Go-Colly",
            "Playwright",
            "Docker",
            "Linux",
            "PostgreSQL",
            "Drizzle",
            "HonoJS",
            "Next.js",
            "TypeScript",
          ],
        },
        {
          id: "techcomet-pm",
          company: "TechComet",
          position: "Product Manager",
          period: "December 2023 - July 2024",
          badge: "Leadership",
          description: [
            "Led team of 5 developers in React Native → Flutter migration",
            "Microservices architecture and orchestration with Kubernetes",
            "Implementation of CI/CD pipelines and AWS infrastructure management",
          ],
          technologies: [
            "Next.js",
            "Nest.js",
            "TypeScript",
            "AWS",
            "Kubernetes",
            "Docker",
            "PostgreSQL",
            "Redis",
            "Flutter",
            "Microservices",
          ],
        },
        {
          id: "techcomet-dev",
          company: "TechComet",
          position: "FullStack Developer",
          period: "June 2022 - December 2023",
          badge: "Blockchain",
          description: [
            "Development of blockchain projects and efficiency algorithms",
            "Implementation of GraphQL APIs and AWS services integration",
            "Mobile and web application development with modern stack",
          ],
          technologies: [
            "Next.js",
            "Nest.js",
            "TypeScript",
            "AWS",
            "CI/CD",
            "Docker",
            "Firebase",
            "GraphQL",
            "Prisma",
            "PostgreSQL",
          ],
        },
        {
          id: "freelancer",
          company: "Freelancer",
          position: "Web Developer",
          period: "April 2021 - June 2022",
          badge: "Blockchain",
          description: [
            "Complete development of blockchain and DeFi applications",
            "Smart contracts implementation and Web3 integration",
            "Linux server configuration and system optimization",
          ],
          technologies: ["React", "Next.js", "Linux", "Nginx", "Express", "MongoDB", "MySQL", "Blockchain"],
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
        scraping: { title: "Web Scraping & Automation", description: "Automated data extraction systems" },
        blockchain: { title: "Blockchain & Web3", description: "Smart contracts and decentralized applications" },
        architecture: { title: "Architecture & Design", description: "Scalable systems and microservices" },
      },
    },
    projects: {
      title: "Featured Projects",
      items: [
        // {
        //   id: "pandaonline",
        //   name: "pandaonline",
        //   year: "2025",
        //   description:
        //     "Comic reading platform with Webtoon-like interface. Allows users to upload and manage their own content.",
        //   technologies: ["Next.js", "React", "TypeScript"],
        //   emoji: "📚",
        // },
        {
          id: "rodaapp",
          name: "rodaapp.com",
          year: "2024",
          description: "Delivery and transportation platform. Complete system with geolocation and route management.",
          technologies: ["React Native", "Node.js", "MongoDB"],
          emoji: "🚗",
        },
        {
          id: "loxcoin",
          name: "loxcoin.io",
          year: "2021",
          description:
            "Cryptocurrency management platform focused on security and scalability. Complete Web3 integration.",
          technologies: ["Blockchain", "Solidity", "Web3"],
          emoji: "💰",
        },
        {
          id: "scraping",
          name: "Scraping Systems",
          year: "2024 - Ongoing",
          description: "Automated data extraction systems with Go. Massive processing and efficient storage.",
          technologies: ["Go", "Go-Colly", "Docker"],
          emoji: "🔍",
        },
        {
          id: "microservices",
          name: "Microservices Architecture",
          year: "2023 - 2024",
          description: "Scalable microservices architecture with Kubernetes. Automated CI/CD and complete monitoring.",
          technologies: ["Kubernetes", "AWS", "Docker"],
          emoji: "🏗️",
        },
        {
          id: "honojs",
          name: "HonoJS APIs",
          year: "2024",
          description: "Ultra-fast APIs with HonoJS. Optimized for edge computing and high concurrency.",
          technologies: ["HonoJS", "Cloudflare", "TypeScript"],
          emoji: "⚡",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Interested in collaborating? Let's talk!",
      description: "Available for backend projects, DevOps, and automation systems",
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
    title: "Backend Developer & DevOps Engineer",
    location: "Portugal",
    status: "Disponível",
    remoteWork: "Trabalho Remoto",
    about: {
      intro: "Backend Developer especializado em criar sistemas escaláveis e automação.",
      description: "Experiência sólida em Go, Node.js, e tecnologias de containerização.",
      currentFocus:
        "Atualmente focado em web scraping, microserviços, e DevOps. Com experiência liderando equipes e migrando sistemas críticos.",
    },
    experience: {
      title: "Experiência Profissional",
      jobs: [
        {
          id: "kadecode",
          company: "KadeCode",
          position: "Go Developer",
          period: "Dezembro 2024 - Presente",
          current: true,
          badge: "Atual",
          description: [
            "Desenvolvimento de sistemas de web scraping e automação com Go",
            "Implementação de pipelines de dados escaláveis e eficientes",
            "Containerização e deployment com Docker em ambientes Linux",
          ],
          technologies: [
            "Go",
            "Go-Colly",
            "Playwright",
            "Docker",
            "Linux",
            "PostgreSQL",
            "Drizzle",
            "HonoJS",
            "Next.js",
            "TypeScript",
          ],
        },
        {
          id: "techcomet-pm",
          company: "TechComet",
          position: "Product Manager",
          period: "Dezembro 2023 - Julho 2024",
          badge: "Liderança",
          description: [
            "Liderei equipe de 5 desenvolvedores na migração React Native → Flutter",
            "Arquitetura de microserviços e orquestração com Kubernetes",
            "Implementação de pipelines CI/CD e gestão de infraestrutura AWS",
          ],
          technologies: [
            "Next.js",
            "Nest.js",
            "TypeScript",
            "AWS",
            "Kubernetes",
            "Docker",
            "PostgreSQL",
            "Redis",
            "Flutter",
            "Microservices",
          ],
        },
        {
          id: "techcomet-dev",
          company: "TechComet",
          position: "FullStack Developer",
          period: "Junho 2022 - Dezembro 2023",
          badge: "Blockchain",
          description: [
            "Desenvolvimento de projetos blockchain e algoritmos de eficiência",
            "Implementação de APIs GraphQL e integração com serviços AWS",
            "Desenvolvimento de aplicações móveis e web com stack moderno",
          ],
          technologies: [
            "Next.js",
            "Nest.js",
            "TypeScript",
            "AWS",
            "CI/CD",
            "Docker",
            "Firebase",
            "GraphQL",
            "Prisma",
            "PostgreSQL",
          ],
        },
        {
          id: "freelancer",
          company: "Freelancer",
          position: "Web Developer",
          period: "Abril 2021 - Junho 2022",
          badge: "Blockchain",
          description: [
            "Desenvolvimento completo de aplicações blockchain e DeFi",
            "Implementação de smart contracts e integração Web3",
            "Configuração de servidores Linux e otimização de sistemas",
          ],
          technologies: ["React", "Next.js", "Linux", "Nginx", "Express", "MongoDB", "MySQL", "Blockchain"],
        },
      ],
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: {
        frontend: { title: "Frontend", icon: "💻" },
        backend: { title: "Backend", icon: "⚙️" },
        databases: { title: "Bases de Dados", icon: "🗄️" },
        devops: { title: "DevOps & Cloud", icon: "☁️" },
      },
      specialized: {
        scraping: { title: "Web Scraping & Automação", description: "Sistemas automatizados de extração de dados" },
        blockchain: { title: "Blockchain & Web3", description: "Smart contracts e aplicações descentralizadas" },
        architecture: { title: "Arquitetura & Design", description: "Sistemas escaláveis e microserviços" },
      },
    },
    projects: {
      title: "Projetos em Destaque",
      items: [
        // {
        //   id: "pandaonline",
        //   name: "pandaonline",
        //   year: "2025",
        //   description:
        //     "Plataforma de leitura de quadrinhos com interface similar ao Webtoon. Permite upload e gestão de conteúdo pelos usuários.",
        //   technologies: ["Next.js", "React", "TypeScript"],
        //   emoji: "📚",
        // },
        {
          id: "rodaapp",
          name: "rodaapp.com",
          year: "2024",
          description: "Plataforma de delivery e transporte. Sistema completo com geolocalização e gestão de rotas.",
          technologies: ["React Native", "Node.js", "MongoDB"],
          emoji: "🚗",
        },
        {
          id: "loxcoin",
          name: "loxcoin.io",
          year: "2021",
          description:
            "Plataforma de gestão de criptomoedas com foco em segurança e escalabilidade. Integração Web3 completa.",
          technologies: ["Blockchain", "Solidity", "Web3"],
          emoji: "💰",
        },
        {
          id: "scraping",
          name: "Sistemas de Scraping",
          year: "2024 - Em andamento",
          description:
            "Sistemas automatizados de extração de dados com Go. Processamento massivo e armazenamento eficiente.",
          technologies: ["Go", "Go-Colly", "Docker"],
          emoji: "🔍",
        },
        {
          id: "microservices",
          name: "Arquitetura de Microserviços",
          year: "2023 - 2024",
          description:
            "Arquitetura de microserviços escalável com Kubernetes. CI/CD automatizado e monitoramento completo.",
          technologies: ["Kubernetes", "AWS", "Docker"],
          emoji: "🏗️",
        },
        {
          id: "honojs",
          name: "APIs com HonoJS",
          year: "2024",
          description: "APIs ultra-rápidas com HonoJS. Otimizadas para edge computing e alta concorrência.",
          technologies: ["HonoJS", "Cloudflare", "TypeScript"],
          emoji: "⚡",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Interessado em colaborar? Vamos conversar!",
      description: "Disponível para projetos de backend, DevOps, e sistemas de automação",
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
    github: "github.com/loxzer01",
    linkedin: "linkedin.com/in/franciscobanquez",
    portfolio: "loxzer01.netlify.app",
  },
  skills: {
    frontend: ["React", "Next.js", "Astro", "TypeScript", "JavaScript", "Flutter", "React Native"],
    backend: ["Go", "Node.js", "HonoJS", "Express", "Nest.js", "Python", "Django", "GraphQL"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase", "Prisma", "Drizzle"],
    devops: ["Docker", "Kubernetes", "AWS", "Cloudflare", "Linux", "Nginx", "CI/CD", "Git"],
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
