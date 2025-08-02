"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguageContext } from "@/hooks/LanguageContext"
import { languageNames, languageFlags, type Language } from "@/lib/data"

export function LanguageSelector() {
  const { language, changeLanguage, isInitialized } = useLanguageContext()
  // console.log(`Current Language: ${language}`) // Debugging line to check current language
  if (!isInitialized) {
    return (
      <Button variant="outline" size="sm" className="bg-gray-700 border-gray-600 text-green-400" disabled>
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
          className="bg-gray-700 border-gray-600 text-green-400 hover:bg-gray-600 hover:text-green-300"
        >
          <Globe className="w-4 h-4 mr-2" />
          <span className="mr-1">{languageFlags[language]}</span>
          {languageNames[language]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-800 border-gray-700">
        {(Object.keys(languageNames) as Language[]).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`text-gray-300 hover:bg-gray-700 hover:text-green-400 cursor-pointer ${
              language === lang ? "bg-gray-700 text-green-400" : ""
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
