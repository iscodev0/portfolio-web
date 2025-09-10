"use client"

import { useState, useEffect } from "react"
import { useLanguageContext } from "@/hooks/LanguageContext"
import { translations, staticData } from "@/lib/data"
import {
  AnimatedBackground,
  Navigation,
  HeroSection,
  AboutSection,
  ExperienceSection,
  SkillsSection,
  ProjectsSection,
  ContactSection,
  Footer
} from "@/components/home"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { language, isInitialized } = useLanguageContext()
  const data = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "projects", "contact"]
      const scrollY = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContactLink = (type: "email" | "github") => {
    if (type === "email") {
      window.open(`mailto:${staticData.contact.email}`, "_blank")
    } else {
      window.open(staticData.contact.github, "_blank")
    }
  }

  const handleProjectLink = (url: string) => {
    window.open(url, "_blank")
  }

  if (!isInitialized) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navigation 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />
        
        <HeroSection 
          data={data} 
          scrollToSection={scrollToSection} 
        />
        
        <AboutSection data={data} />
        
        <ExperienceSection data={data} />
        
        <SkillsSection data={data} />
        
        <ProjectsSection 
          data={data} 
          handleProjectLink={handleProjectLink} 
        />
        
        <ContactSection 
          data={data} 
          handleContactLink={handleContactLink} 
        />
        
        <Footer data={data} />
      </div>
    </div>
  )
}
