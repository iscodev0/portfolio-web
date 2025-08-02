"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import type { Language } from "@/lib/data"

interface LanguageContextProps {
  language: Language
  changeLanguage: (lang: Language) => void
  isInitialized: boolean
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language") as Language
    if (savedLanguage && ["es", "en", "pt"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith("en")) setLanguage("en")
      else if (browserLang.startsWith("pt")) setLanguage("pt")
      else setLanguage("es")
    }
    setIsInitialized(true)
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("portfolio-language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, isInitialized }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguageContext() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguageContext must be used within a LanguageProvider")
  return ctx
}
