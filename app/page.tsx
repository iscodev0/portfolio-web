import { headers } from "next/headers"
import { translations, type Language } from "@/lib/data"
import { getMetadata } from "@/lib/metadata"
import ClientPortfolio from "@/components/ClientPortfolio"
import type { Metadata } from "next"

// Function to detect language from headers
async function getLanguageFromHeaders(): Promise<Language> {
  const headersList = await headers()
  const acceptLanguage = headersList.get("accept-language") || ""
  
  if (acceptLanguage.includes("en")) return "en"
  if (acceptLanguage.includes("pt")) return "pt"
  return "es" // default
}

// Generate metadata dynamically based on language
export async function generateMetadata(): Promise<Metadata> {
  const language = await getLanguageFromHeaders()
  return getMetadata(language)
}

// This is now a Server Component that provides SSR
export default async function Portfolio() {
  // Detect language on server-side
  const initialLanguage = await getLanguageFromHeaders()
  const initialData = translations[initialLanguage]

  return (
    <ClientPortfolio 
      initialData={initialData} 
      initialLanguage={initialLanguage} 
    />
  )
}
