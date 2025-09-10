import { Zap } from "lucide-react"
import Image from "next/image"
import { PersonalData } from "@/lib/data"

interface AboutProps {
  data: PersonalData
}

export const AboutSection = ({ data }: AboutProps) => {
  return (
    <section id="about" className="py-16 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {data.about.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-2 items-center">
          {/* Left Column - Profile Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="w-72 h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-red-600 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                  <Image 
                    src="/image/isco.jpg" 
                    alt="Francisco Banquez" 
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-red-500 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                My core stack includes Node.js, TypeScript, and Go, with a strong foundation in PostgreSQL and Docker.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {data.about.intro}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{data.location}</p>
                    <p className="text-xs text-muted-foreground">Based in</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Available</p>
                    <p className="text-xs text-muted-foreground">For opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                Current Focus
              </h4>
              <p className="text-muted-foreground">
                {data.about.currentFocus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}