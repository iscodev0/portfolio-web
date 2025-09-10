"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguageContext } from "@/hooks/LanguageContext"
import { languageNames, languageFlags, type Language } from "@/lib/data"

export function LanguageSelector() {
  const { language, changeLanguage, isInitialized } = useLanguageContext()
  
  if (!isInitialized) {
    return (
      <Button variant="outline" size="sm" className="border-gray-200 dark:border-gray-800" disabled>
        <Globe className="w-4 h-4 mr-2" />
        Loading...
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-gray-200 dark:border-gray-800"
        >
          <Globe className="w-4 h-4 mr-2" />
          <span className="mr-1">{languageFlags[language]}</span>
          {languageNames[language]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white dark:bg-black border-gray-200 dark:border-gray-800">
        {(Object.keys(languageNames) as Language[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ${
              language === lang ? "bg-gray-100 dark:bg-gray-800" : ""
            }`}
          >
            <span className="mr-2">{languageFlags[lang]}</span>
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
