import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">AdopTech GmbH</h3>
            <p className="text-sm text-muted-foreground">
              Lösungen, die nicht mal unsere Eltern wollten. Seit 2024 verwirren wir die IT-Welt.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#portfolio" className="hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/adoptierbare-konzepte" className="hover:text-foreground transition-colors">
                  Adoptierbare Konzepte
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Impressum (Coming Never)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Datenschutz (Welche Daten?)
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  AGB (Absolut Großartige Bedingungen)
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Kontakt</h4>
            <p className="text-sm text-muted-foreground">
              E-Mail: adoptiongmbh@web.de<br />
              Antwortzeit: Irgendwann™
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 AdopTech GmbH. Alle Rechte vorbehalten. Oder auch nicht. Wer weiß das schon.</p>
        </div>
      </div>
    </footer>
  )
}