import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGo,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiDocker,
  SiAmazon,
  SiLinux,
  SiNginx,
  SiSelenium,
  SiSolidity,
  SiEthereum,
  SiHono,
  SiNestjs,
  SiRust,
  SiFirebase,
  SiDrizzle,
  SiPrisma,
  SiWeb3Dotjs,
  SiEthers,
} from "react-icons/si"
import { IconType } from "react-icons"
import { FaFlutter } from "react-icons/fa6"

interface TechBadgeProps {
  icon: IconType
  name: string
  color: string
}

export const TechBadge = ({ icon: Icon, name, color }: TechBadgeProps) => {
  return (
    <div
      className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2 text-sm hover:bg-accent transition-colors"
      title={name}
    >
      <Icon 
        className="w-4 h-4" 
        style={{ color }}
      />
      <span className="font-medium">{name}</span>
    </div>
  )
}

export const techStacks = {
  frontend: [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: FaFlutter, name: "Dart/Flutter", color: "#02569B" },
  ],
  backend: [
    { icon: SiGo, name: "Go", color: "#00ADD8" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { icon: SiHono, name: "HonoJS", color: "#f20202" },
    { icon: SiNestjs, name: "NestJS", color: "#E0234E" },
    { icon: SiRust, name: "Rust", color: "#000000" },
  ],
  databases: [
    { icon: SiDrizzle, name: "Drizzle ORM", color: "#00aaaa" },
    { icon: SiPrisma, name: "Prisma", color: "#0c344b" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiRedis, name: "Redis", color: "#DC382D" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  ],
  devops: [
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiAmazon, name: "AWS", color: "#FF9900" },
    { icon: SiLinux, name: "Linux", color: "#FCC624" },
    { icon: SiNginx, name: "Nginx", color: "#009639" },
  ],
  specialized: {
    scraping: [
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiSelenium, name: "Selenium", color: "#43B02A" },
    ],
    blockchain: [
      { icon: SiSolidity, name: "Solidity", color: "#363636" },
      { icon: SiEthereum, name: "Ethereum", color: "#627EEA" },
      { icon: SiWeb3Dotjs, name: "Web3.js", color: "#F16822" },
      { icon: SiEthers, name: "Ethers.js", color: "#627EEA" },
    ]
  }
}
