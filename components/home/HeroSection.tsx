import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"
import Image from "next/image"
import { PersonalData } from "@/lib/data"
import { 
  SiGo,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiAmazon,
} from "react-icons/si"

interface HeroProps {
  data: PersonalData
  scrollToSection: (sectionId: string) => void
}

export const HeroSection = ({ data, scrollToSection }: HeroProps) => {
  return (
    <section id="hero" className="pt-32 pb-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted border border-border mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-muted-foreground">{data.status} • {data.remoteWork}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="block text-foreground">
                {data.name.split(" ")[0]}
              </span>
              <span className="block text-muted-foreground">
                {data.name.split(" ")[1]}
              </span>
            </h1>

            {/* Subtitle */}
            <div className="mb-10">
              <p className="text-2xl md:text-3xl font-medium mb-4 text-muted-foreground">
                {data.title}
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                {data.about.intro}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 text-lg font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 text-lg font-medium"
              >
                View projects
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="bg-muted border border-border rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                Specialized Technologies
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {[
                  { icon: SiGo, name: "Go", color: "#00ADD8" },
                  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
                  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
                  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
                  { icon: SiDocker, name: "Docker", color: "#2496ED" },
                  { icon: SiAmazon, name: "AWS", color: "#FF9900" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 hover:bg-accent transition-colors"
                    title={tech.name}
                  >
                    <tech.icon 
                      className="w-5 h-5 transition-colors" 
                      style={{ color: tech.color }}
                    />
                    <span className="text-sm font-medium text-card-foreground hidden sm:inline">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Illustration */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <Image 
                src="/image/ilustracion.png" 
                alt="Professional Developer Illustration" 
                width={400}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}