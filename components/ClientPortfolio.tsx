"use client"

import { useState, useEffect } from "react"
import { useLanguageContext } from "@/hooks/LanguageContext"
import { translations, staticData, type Language, type PersonalData } from "@/lib/data"
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

interface ClientPortfolioProps {
  initialData: PersonalData
  initialLanguage: Language
}

export default function ClientPortfolio({ initialData }: ClientPortfolioProps) {
  const [activeSection, setActiveSection] = useState("hero")
  const { language, isInitialized } = useLanguageContext()
  
  // Use initial data until context is initialized, then use context data
  const data = isInitialized ? translations[language] : initialData

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "experience", "skills", "contact"]
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
      window.open(`https://${staticData.contact.github}`, "_blank")
    }
  }

  const handleProjectLink = (url: string) => {
    window.open(url, "_blank")
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
        
        <ProjectsSection 
          data={data} 
          handleProjectLink={handleProjectLink} 
        />
        
        <ExperienceSection data={data} />
        
        <SkillsSection data={data} />
        
        <ContactSection 
          data={data} 
          handleContactLink={handleContactLink} 
        />
        
        <Footer data={data} />
      </div>
    </div>
  )
}