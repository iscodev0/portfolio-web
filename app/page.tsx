"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LanguageSelector } from "@/components/LanguageSelector"
import { useLanguageContext } from "@/hooks/LanguageContext"
import { translations, staticData } from "@/lib/data"
import {
  Terminal,
  Server,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  Building,
  Code2,
  Database,
  Cloud,
  ExternalLink,
} from "lucide-react"

export default function TerminalPortfolio() {
  const [showCursor, setShowCursor] = useState(true)
  const [activeSection, setActiveSection] = useState("about")
  const { language, isInitialized } = useLanguageContext()
  const data = translations[language]

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gray-900 text-green-400 font-mono flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-400 mx-auto mb-4"></div>
          <p className="text-xl">Cargando portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 font-mono">
      {/* Terminal Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-2 py-2 sm:px-4 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 w-full">
        <div className="flex items-center space-x-3 w-full sm:w-auto justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <Terminal className="w-5 h-5 ml-2 sm:ml-4" />
          <span className="text-gray-300 text-xs sm:text-base">francisco@portfolio:~</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <LanguageSelector />
          <div className="text-gray-400 text-xs sm:text-sm">{data.title}</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-800 border-b border-gray-700 px-2 py-2 sm:px-4 sm:py-3 overflow-x-auto">
        <div className="flex flex-nowrap gap-2 w-full">
          {[
            { id: "about", label: "About", icon: "👨‍💻" },
            { id: "experience", label: data.experience.title, icon: "💼" },
            { id: "skills", label: data.skills.title, icon: "🛠️" },
            { id: "projects", label: data.projects.title, icon: "🚀" },
            { id: "contact", label: data.contact.title, icon: "📬" },
          ].map((item) => (
            <Button
              key={item.id}
              variant="outline"
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`bg-gray-700 border-gray-600 hover:bg-gray-600 text-xs transition-colors ${
                activeSection === item.id ? "text-green-300 border-green-500" : "text-green-400 hover:text-green-300"
              }`}
            >
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-2 sm:p-6">
        {/* Hero Section */}
        <div className="bg-black rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-700">
          <div className="flex items-center mb-4">
            <span className="text-blue-400 mr-2">francisco@portfolio</span>
            <span className="text-gray-400 mr-2">:</span>
            <span className="text-purple-400 mr-2">~</span>
            <span className="text-gray-400 mr-2">$</span>
            <span className="text-green-400">whoami</span>
            <span className={`text-green-400 ml-2 ${showCursor ? "opacity-100" : "opacity-0"}`}>█</span>
          </div>

          <div className="space-y-2 text-gray-300">
            <div className="text-cyan-400 text-2xl font-bold">{data.name}</div>
            <div className="text-yellow-400">{data.title}</div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400">{data.status}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{data.location}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Server className="w-4 h-4 mr-1" />
                <span>{data.remoteWork}</span>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
            <span className="mr-2">👨‍💻</span> About Me
          </h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                {data.about.intro.split(" ").map((word, index) => {
                  if (word.includes("escalables") || word.includes("scalable") || word.includes("escaláveis")) {
                    return (
                      <span key={index} className="text-green-400">
                        {word}{" "}
                      </span>
                    )
                  }
                  if (word.includes("automatización") || word.includes("automation") || word.includes("automação")) {
                    return (
                      <span key={index} className="text-blue-400">
                        {word}{" "}
                      </span>
                    )
                  }
                  return word + " "
                })}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {data.about.description.split(" ").map((word, index) => {
                  if (word.includes("Go")) {
                    return (
                      <span key={index} className="text-yellow-400">
                        {word}{" "}
                      </span>
                    )
                  }
                  if (word.includes("Node.js")) {
                    return (
                      <span key={index} className="text-purple-400">
                        {word}{" "}
                      </span>
                    )
                  }
                  if (
                    word.includes("containerização") ||
                    word.includes("containerization") ||
                    word.includes("containerização")
                  ) {
                    return (
                      <span key={index} className="text-cyan-400">
                        {word}{" "}
                      </span>
                    )
                  }
                  return word + " "
                })}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {data.about.currentFocus.split(" ").map((word, index) => {
                  if (word.includes("scraping")) {
                    return (
                      <span key={index} className="text-green-400">
                        {word}{" "}
                      </span>
                    )
                  }
                  if (
                    word.includes("microserviços") ||
                    word.includes("microservices") ||
                    word.includes("microserviços")
                  ) {
                    return (
                      <span key={index} className="text-blue-400">
                        {word}{" "}
                      </span>
                    )
                  }
                  if (word.includes("DevOps")) {
                    return (
                      <span key={index} className="text-yellow-400">
                        {word}{" "}
                      </span>
                    )
                  }
                  return word + " "
                })}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge className="bg-green-900 text-green-300">Go Developer</Badge>
                <Badge className="bg-blue-900 text-blue-300">DevOps</Badge>
                <Badge className="bg-purple-900 text-purple-300">Microservices</Badge>
                <Badge className="bg-yellow-900 text-yellow-300">Web Scraping</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
            <span className="mr-2">💼</span> {data.experience.title}
          </h2>
          <div className="space-y-6">
            {data.experience.jobs.map((job, index) => (
              <Card
                key={job.id}
                className={`bg-gray-800 border-gray-700 border-l-4 ${
                  index === 0
                    ? "border-l-green-500"
                    : index === 1
                      ? "border-l-blue-500"
                      : index === 2
                        ? "border-l-purple-500"
                        : "border-l-yellow-500"
                }`}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle
                        className={`flex items-center gap-2 ${
                          index === 0
                            ? "text-green-400"
                            : index === 1
                              ? "text-blue-400"
                              : index === 2
                                ? "text-purple-400"
                                : "text-yellow-400"
                        }`}
                      >
                        <Building className="w-5 h-5" />
                        {job.position} - {job.company}
                      </CardTitle>
                      <CardDescription className="text-gray-400 flex items-center gap-2 mt-2">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </CardDescription>
                    </div>
                    <Badge
                      className={`mt-2 md:mt-0 ${
                        job.current
                          ? "bg-green-900 text-green-300"
                          : job.badge === "Leadership" || job.badge === "Liderazgo" || job.badge === "Liderança"
                            ? "bg-blue-900 text-blue-300"
                            : "bg-purple-900 text-purple-300"
                      }`}
                    >
                      {job.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    {job.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start gap-2">
                        <span
                          className={`mt-1 ${
                            index === 0
                              ? "text-green-400"
                              : index === 1
                                ? "text-blue-400"
                                : index === 2
                                  ? "text-purple-400"
                                  : "text-yellow-400"
                          }`}
                        >
                          ▸
                        </span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`${
                          tech.includes("Go") || tech.includes("HonoJS")
                            ? "text-blue-300 border-blue-500"
                            : tech.includes("React") || tech.includes("Next")
                              ? "text-cyan-300 border-cyan-500"
                              : tech.includes("TypeScript") || tech.includes("JavaScript")
                                ? "text-yellow-300 border-yellow-500"
                                : tech.includes("Docker") || tech.includes("Kubernetes")
                                  ? "text-purple-300 border-purple-500"
                                  : tech.includes("AWS") || tech.includes("Cloudflare")
                                    ? "text-orange-300 border-orange-500"
                                    : tech.includes("PostgreSQL") || tech.includes("MongoDB")
                                      ? "text-blue-300 border-blue-500"
                                      : "text-green-300 border-green-500"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center">
            <span className="mr-2">🛠️</span> {data.skills.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  {data.skills.categories.frontend.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {staticData.skills.frontend.map((skill) => (
                    <Badge key={skill} className="bg-blue-900 text-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  {data.skills.categories.backend.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {staticData.skills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      className={`${
                        skill === "Go"
                          ? "bg-blue-900 text-blue-300"
                          : skill === "HonoJS"
                            ? "bg-red-900 text-red-300"
                            : skill === "Python"
                              ? "bg-yellow-900 text-yellow-300"
                              : skill === "GraphQL"
                                ? "bg-pink-900 text-pink-300"
                                : "bg-green-900 text-green-300"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  {data.skills.categories.databases.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {staticData.skills.databases.map((skill) => (
                    <Badge
                      key={skill}
                      className={`${
                        skill.includes("PostgreSQL") || skill.includes("MySQL") || skill.includes("Prisma")
                          ? "bg-blue-900 text-blue-300"
                          : skill.includes("MongoDB") || skill.includes("Supabase") || skill.includes("Drizzle")
                            ? "bg-green-900 text-green-300"
                            : skill.includes("Redis")
                              ? "bg-red-900 text-red-300"
                              : "bg-orange-900 text-orange-300"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-orange-400 flex items-center gap-2">
                  <Cloud className="w-5 h-5" />
                  {data.skills.categories.devops.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {staticData.skills.devops.map((skill) => (
                    <Badge
                      key={skill}
                      className={`${
                        skill.includes("Docker") || skill.includes("Kubernetes")
                          ? "bg-blue-900 text-blue-300"
                          : skill.includes("AWS") || skill.includes("Cloudflare")
                            ? "bg-orange-900 text-orange-300"
                            : skill.includes("Linux")
                              ? "bg-yellow-900 text-yellow-300"
                              : skill.includes("Nginx")
                                ? "bg-green-900 text-green-300"
                                : skill.includes("CI/CD")
                                  ? "bg-purple-900 text-purple-300"
                                  : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specialized Skills */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-gray-800 border-gray-700 border-2 border-green-500">
              <CardHeader>
                <CardTitle className="text-green-400">🕷️ {data.skills.specialized.scraping.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-3">{data.skills.specialized.scraping.description}</p>
                <div className="flex flex-wrap gap-2">
                  {staticData.skills.specialized.scraping.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-green-300 border-green-500">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 border-2 border-blue-500">
              <CardHeader>
                <CardTitle className="text-blue-400">⛓️ {data.skills.specialized.blockchain.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-3">{data.skills.specialized.blockchain.description}</p>
                <div className="flex flex-wrap gap-2">
                  {staticData.skills.specialized.blockchain.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-blue-300 border-blue-500">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 border-2 border-purple-500">
              <CardHeader>
                <CardTitle className="text-purple-400">🏗️ {data.skills.specialized.architecture.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-3">{data.skills.specialized.architecture.description}</p>
                <div className="flex flex-wrap gap-2">
                  {staticData.skills.specialized.architecture.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-purple-300 border-purple-500">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center">
            <span className="mr-2">🚀</span> {data.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {data.projects.items.map((project, index) => (
              <Card
                key={project.id}
                className={`bg-gray-800 border-gray-700 hover:border-${
                  index % 6 === 0
                    ? "green"
                    : index % 6 === 1
                      ? "blue"
                      : index % 6 === 2
                        ? "purple"
                        : index % 6 === 3
                          ? "green"
                          : index % 6 === 4
                            ? "yellow"
                            : "red"
                }-500 transition-colors group`}
              >
                <CardHeader>
                  <CardTitle
                    className={`flex items-center justify-between ${
                      index % 6 === 0
                        ? "text-green-400"
                        : index % 6 === 1
                          ? "text-blue-400"
                          : index % 6 === 2
                            ? "text-purple-400"
                            : index % 6 === 3
                              ? "text-green-400"
                              : index % 6 === 4
                                ? "text-yellow-400"
                                : "text-red-400"
                    }`}
                  >
                    {project.emoji} {project.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription className="text-gray-400">{project.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className={`${
                          tech.includes("Next") || tech.includes("React")
                            ? "bg-cyan-900 text-cyan-300"
                            : tech.includes("Go")
                              ? "bg-blue-900 text-blue-300"
                              : tech.includes("TypeScript")
                                ? "bg-yellow-900 text-yellow-300"
                                : tech.includes("Blockchain") || tech.includes("Solidity")
                                  ? "bg-purple-900 text-purple-300"
                                  : tech.includes("Docker")
                                    ? "bg-purple-900 text-purple-300"
                                    : tech.includes("HonoJS")
                                      ? "bg-red-900 text-red-300"
                                      : "bg-green-900 text-green-300"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 flex items-center">
            <span className="mr-2">📬</span> {data.contact.title}
          </h2>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <p className="text-xl text-gray-300 mb-4">
                  {data.contact.subtitle.split("!")[0]} <span className="text-green-400">!</span>
                </p>
                <p className="text-gray-400">{data.contact.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <Card className="bg-gray-700 border-gray-600 hover:border-green-500 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4 text-green-400" />
                    <p className="font-semibold text-gray-300 mb-2">Email</p>
                    <p className="text-gray-400 text-sm">{staticData.contact.email}</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600 hover:border-blue-500 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <Github className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                    <p className="font-semibold text-gray-300 mb-2">GitHub</p>
                    <p className="text-gray-400 text-sm">{staticData.contact.github}</p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-700 border-gray-600 hover:border-purple-500 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <Linkedin className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                    <p className="font-semibold text-gray-300 mb-2">LinkedIn</p>
                    <p className="text-gray-400 text-sm">{staticData.contact.linkedin}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    {data.contact.cta.email}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {data.contact.cta.github}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-4 sm:py-6">
        <div className="max-w-6xl mx-auto px-2 sm:px-6 text-center">
          <div className="flex flex-row flex-wrap items-center justify-center mb-2 gap-1 sm:gap-2">
            <span className="text-blue-400 mr-2">francisco@portfolio</span>
            <span className="text-gray-400 mr-2">:</span>
            <span className="text-purple-400 mr-2">~</span>
            <span className="text-gray-400 mr-2">$</span>
            <span className="text-green-400">echo "{data.footer.thanks}"</span>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm">© 2025 Francisco Banquez. {data.footer.builtWith}</p>
        </div>
      </footer>
    </div>
  )
}
