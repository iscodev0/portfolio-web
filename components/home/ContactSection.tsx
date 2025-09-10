import { Button } from "@/components/ui/button"
import { Mail, Github, Globe } from "lucide-react"

interface ContactProps {
  data: any
  handleContactLink: (type: "email" | "github") => void
}

export const ContactSection = ({ data, handleContactLink }: ContactProps) => {
  return (
    <section id="contact" className="py-16 px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-card border border-border rounded-2xl p-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {data.contact.title}
          </h2>
          <p className="text-2xl text-card-foreground mb-4">
            {data.contact.subtitle}
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {data.contact.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => handleContactLink("email")}
              className="px-8 py-4 text-lg font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              {data.contact.cta.email}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleContactLink("github")}
              className="px-8 py-4 text-lg font-medium"
            >
              <Github className="w-5 h-5 mr-2" />
              {data.contact.cta.github}
            </Button>
          </div>

          <div className="flex items-center justify-center text-muted-foreground">
            <Globe className="w-4 h-4 mr-2" />
            <span className="text-sm">Available for freelance & full-time opportunities</span>
          </div>
        </div>
      </div>
    </section>
  )
}