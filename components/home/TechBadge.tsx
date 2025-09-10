import { 
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
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
  SiKubernetes,
  SiAmazon,
  SiLinux,
  SiNginx,
  SiSelenium,
  SiSolidity,
  SiEthereum,
} from "react-icons/si"
import { IconType } from "react-icons"

interface TechBadgeProps {
  icon: IconType
  name: string
  color: string
}

export const TechBadge = ({ icon: Icon, name, color }: TechBadgeProps) => {
  return (
    <div
      className="flex items-center gap-2 bg-secondary rounded-lg px-2 py-1 text-xs"
      title={name}
    >
      <Icon 
        className="w-3 h-3" 
        style={{ color }}
      />
      <span>{name}</span>
    </div>
  )
}

export const techStacks = {
  frontend: [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" }
  ],
  backend: [
    { icon: SiGo, name: "Go", color: "#00ADD8" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" }
  ],
  databases: [
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiRedis, name: "Redis", color: "#DC382D" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" }
  ],
  devops: [
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { icon: SiAmazon, name: "AWS", color: "#FF9900" },
    { icon: SiLinux, name: "Linux", color: "#FCC624" },
    { icon: SiNginx, name: "Nginx", color: "#009639" }
  ],
  specialized: {
    scraping: [
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiSelenium, name: "Selenium", color: "#43B02A" }
    ],
    blockchain: [
      { icon: SiSolidity, name: "Solidity", color: "#363636" },
      { icon: SiEthereum, name: "Ethereum", color: "#627EEA" }
    ]
  }
}