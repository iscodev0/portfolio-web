import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Cloud, Zap } from "lucide-react"
import { PersonalData } from "@/lib/data"
import { TechBadge, techStacks } from "./TechBadge"

interface SkillsProps {
  data: PersonalData
}

export const SkillsSection = ({ data }: SkillsProps) => {
  return (
    <section id="skills" className="py-16 px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {data.skills.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills grouped in cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {/* Frontend Card */}
          <Card className="hover:shadow-lg transition-shadow border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Code2 className="w-5 h-5 mr-2 text-blue-500" />
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStacks.frontend.map((tech) => (
                  <TechBadge 
                    key={tech.name}
                    icon={tech.icon}
                    name={tech.name}
                    color={tech.color}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Backend Card */}
          <Card className="hover:shadow-lg transition-shadow border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                Backend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStacks.backend.map((tech) => (
                  <TechBadge 
                    key={tech.name}
                    icon={tech.icon}
                    name={tech.name}
                    color={tech.color}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Databases Card */}
          <Card className="hover:shadow-lg transition-shadow border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Database className="w-5 h-5 mr-2 text-green-500" />
                Bases de Datos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStacks.databases.map((tech) => (
                  <TechBadge 
                    key={tech.name}
                    icon={tech.icon}
                    name={tech.name}
                    color={tech.color}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* DevOps Card */}
          <Card className="hover:shadow-lg transition-shadow border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Cloud className="w-5 h-5 mr-2 text-orange-500" />
                DevOps & Cloud
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStacks.devops.map((tech) => (
                  <TechBadge 
                    key={tech.name}
                    icon={tech.icon}
                    name={tech.name}
                    color={tech.color}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Specialized Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🕷️</span>
                <CardTitle className="text-lg">{data.skills.specialized.scraping.title}</CardTitle>
              </div>
              <CardDescription className="text-sm">
                {data.skills.specialized.scraping.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {techStacks.specialized.scraping.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-1 text-xs text-muted-foreground">
                    <tech.icon className="w-3 h-3" style={{ color: tech.color }} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">⛓️</span>
                <CardTitle className="text-lg">{data.skills.specialized.blockchain.title}</CardTitle>
              </div>
              <CardDescription className="text-sm">
                {data.skills.specialized.blockchain.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {techStacks.specialized.blockchain.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-1 text-xs text-muted-foreground">
                    <tech.icon className="w-3 h-3" style={{ color: tech.color }} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🏗️</span>
                <CardTitle className="text-lg">{data.skills.specialized.architecture.title}</CardTitle>
              </div>
              <CardDescription className="text-sm">
                {data.skills.specialized.architecture.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                <div className="text-xs text-muted-foreground">Microservices • REST • Patterns</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}