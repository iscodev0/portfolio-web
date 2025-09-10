import { Badge } from "@/components/ui/badge"
import { Building2 } from "lucide-react"
import { PersonalData } from "@/lib/data"
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
  SiLinux,
  SiNginx,
  SiSolidity,
  SiEthereum,
} from "react-icons/si"

interface ExperienceProps {
  data: PersonalData
}

export const ExperienceSection = ({ data }: ExperienceProps) => {
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
      case 'linux': return <SiLinux className="w-3 h-3 text-[#FCC624]" />
      case 'nginx': return <SiNginx className="w-3 h-3 text-[#009639]" />
      case 'solidity': return <SiSolidity className="w-3 h-3 text-[#363636]" />
      case 'ethereum': return <SiEthereum className="w-3 h-3 text-[#627EEA]" />
      default: return null
    }
  }

  return (
    <section id="experience" className="py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {data.experience.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Different positions for mobile and desktop */}
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-8 lg:space-y-12">
            {data.experience.jobs.map((job, index: number) => (
              <div key={job.id} className="relative">
                
                {/* Mobile Layout (Default) */}
                <div className="block lg:hidden ml-10">
                  <div className="bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                    {/* Header with date and badge */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div className="text-sm font-bold text-primary">{job.period}</div>
                        <Badge variant="secondary" className="text-xs w-fit">{job.badge}</Badge>
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-foreground mb-1">
                        {job.position}
                      </h3>
                      <div className="flex items-center text-muted-foreground">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                      {job.description.map((desc: string, descIndex: number) => (
                        <p key={descIndex} className="text-muted-foreground leading-relaxed text-sm">
                          {desc}
                        </p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech: string) => {
                        const icon = getIcon(tech)
                        
                        return (
                          <div key={tech} className="flex items-center gap-1 px-2 py-1 bg-secondary rounded-md">
                            {icon}
                            <span className="text-xs font-medium">{tech}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (Alternating) */}
                <div className={`hidden lg:flex items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Date */}
                  <div className={`lg:w-48 flex-shrink-0 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                    <div className="text-sm font-bold text-primary mb-1">{job.period}</div>
                    <Badge variant="secondary" className="text-xs">{job.badge}</Badge>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {job.position}
                          </h3>
                          <div className="flex items-center text-muted-foreground">
                            <Building2 className="w-4 h-4 mr-2" />
                            <span className="font-medium">{job.company}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {job.description.map((desc: string, descIndex: number) => (
                          <p key={descIndex} className="text-muted-foreground leading-relaxed text-sm">
                            {desc}
                          </p>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech: string) => {
                          const icon = getIcon(tech)
                          
                          return (
                            <div key={tech} className="flex items-center gap-1 px-2 py-1 bg-secondary rounded-md">
                              {icon}
                              <span className="text-xs font-medium">{tech}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}