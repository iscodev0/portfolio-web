import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiDocker,
  SiAmazon,
  SiGo,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiGraphql,
  SiJavascript,
  SiVuedotjs,
  SiSass,
  SiFirebase,
  SiGit,
} from "react-icons/si"

interface ProjectsProps {
  data: any
  handleProjectLink: (url: string) => void
}

export const ProjectsSection = ({ data, handleProjectLink }: ProjectsProps) => {
  const getIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react': return <SiReact className="w-3 h-3 text-[#61DAFB]" />
      case 'next.js': return <SiNextdotjs className="w-3 h-3 text-black dark:text-white" />
      case 'typescript': return <SiTypescript className="w-3 h-3 text-[#3178C6]" />
      case 'node.js': return <SiNodedotjs className="w-3 h-3 text-[#339933]" />
      case 'express': return <SiExpress className="w-3 h-3 text-black dark:text-white" />
      case 'mongodb': return <SiMongodb className="w-3 h-3 text-[#47A248]" />
      case 'postgresql': return <SiPostgresql className="w-3 h-3 text-[#336791]" />
      case 'tailwind css': return <SiTailwindcss className="w-3 h-3 text-[#06B6D4]" />
      case 'python': return <SiPython className="w-3 h-3 text-[#3776AB]" />
      case 'django': return <SiDjango className="w-3 h-3 text-[#092E20]" />
      case 'docker': return <SiDocker className="w-3 h-3 text-[#2496ED]" />
      case 'aws': return <SiAmazon className="w-3 h-3 text-[#FF9900]" />
      case 'go': return <SiGo className="w-3 h-3 text-[#00ADD8]" />
      case 'mysql': return <SiMysql className="w-3 h-3 text-[#4479A1]" />
      case 'redis': return <SiRedis className="w-3 h-3 text-[#DC382D]" />
      case 'kubernetes': return <SiKubernetes className="w-3 h-3 text-[#326CE5]" />
      case 'graphql': return <SiGraphql className="w-3 h-3 text-[#E10098]" />
      case 'javascript': return <SiJavascript className="w-3 h-3 text-[#F7DF1E]" />
      case 'vue.js': return <SiVuedotjs className="w-3 h-3 text-[#4FC08D]" />
      case 'sass': return <SiSass className="w-3 h-3 text-[#CC6699]" />
      case 'firebase': return <SiFirebase className="w-3 h-3 text-[#FFCA28]" />
      case 'git': return <SiGit className="w-3 h-3 text-[#F05032]" />
      default: return null
    }
  }

  return (
    <section id="projects" className="py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {data.projects.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.items.map((project: any) => (
            <Card
              key={project.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => project.demo && handleProjectLink(project.demo)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{project.emoji}</span>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                
                <Badge variant="secondary" className="w-fit">
                  {project.year}
                </Badge>
              </CardHeader>

              <CardContent>
                <CardDescription className="mb-6 leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech: string) => {
                    const icon = getIcon(tech)
                    
                    return (
                      <div key={tech} className="flex items-center gap-1 px-2 py-1 bg-secondary rounded-md">
                        {icon}
                        <span className="text-xs font-medium">{tech}</span>
                      </div>
                    )
                  })}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProjectLink(project.github!)
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProjectLink(project.demo!)
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}