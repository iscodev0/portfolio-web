import { translations, type Language } from "@/lib/data"

export const getMetadata = (language: Language) => {
  const data = translations[language]
  
  return {
    title: `${data.name} - ${data.title}`,
    description: data.about.intro,
    keywords: [
      data.title,
      "Backend Developer",
      "Full Stack Developer", 
      "Node.js",
      "TypeScript",
      "Go",
      "React",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "AWS"
    ].join(", "),
    openGraph: {
      title: `${data.name} - ${data.title}`,
      description: data.about.intro,
      type: "website",
      locale: language === "es" ? "es_ES" : language === "en" ? "en_US" : "pt_PT",
    },
    twitter: {
      title: `${data.name} - ${data.title}`,
      description: data.about.intro,
      card: "summary_large_image",
    },
    alternates: {
      languages: {
        "es": "/",
        "en": "/",
        "pt": "/",
      },
    },
  }
}