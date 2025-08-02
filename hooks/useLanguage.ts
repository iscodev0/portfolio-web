"use client"

import { useState, useEffect } from "react"
import type { Language } from "@/lib/data"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("es")
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    try {
      // Get language from localStorage or browser preference
      const savedLanguage = localStorage.getItem("portfolio-language") as Language
      if (savedLanguage && ["es", "en", "pt"].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      } else {
        // Detect browser language
        const browserLang = navigator.language.toLowerCase()
        if (browserLang.startsWith("en")) {
          setLanguage("en")
        } else if (browserLang.startsWith("pt")) {
          setLanguage("pt")
        } else {
          setLanguage("es")
        }
        // Save the detected language
        localStorage.setItem("portfolio-language", language)
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    } finally {
      setIsInitialized(true)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("portfolio-language", newLanguage)
  }

  return { language, changeLanguage, isInitialized }
}
