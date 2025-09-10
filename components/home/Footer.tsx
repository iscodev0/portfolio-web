import { PersonalData } from "@/lib/data"

interface FooterProps {
  data: PersonalData
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center mr-3">
            <span className="text-background font-bold">F</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Francisco Banquez</span>
        </div>
        <p className="text-muted-foreground mb-2">{data.footer.thanks}</p>
        <p className="text-sm text-muted-foreground">
          © 2025 Francisco Banquez. {data.footer.builtWith}
        </p>
      </div>
    </footer>
  )
}