import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Home, Package } from "lucide-react"
import Link from "next/link"

const allConcepts = [
  {
    title: "Social Media für Pflanzen",
    description: "Eine Plattform, wo Ihre Zimmerpflanzen ihre Photosynthese-Erfolge teilen können. Features: Blatt-Filter, Root-Sharing, Dünger-Influencer.",
    status: "Sucht liebevolles Zuhause",
    tags: ["Web3", "GreenTech", "Social"],
    adoptionFee: "Kostenlos + eine Gießkanne",
    age: "3 Monate",
    personality: "Sehr pflegeleicht, manchmal etwas trocken"
  },
  {
    title: "Blockchain-Wecker",
    description: "Jeder Alarm wird als NFT geminted. Verschlafen war noch nie so wertvoll. Inklusive Snooze-Smart-Contract.",
    status: "Dringend abzugeben",
    tags: ["Blockchain", "Lifestyle", "NFT"],
    adoptionFee: "Nur Übernahme der Gas-Fees",
    age: "6 Monate",
    personality: "Laut, persistent, unaufhaltsam"
  },
  {
    title: "KI-Kaffeemaschine",
    description: "Sagt Ihnen, dass Sie keinen Kaffee brauchen, macht aber trotzdem welchen. Lernt Ihre Schlafmuster und urteilt darüber.",
    status: "Stubenrein",
    tags: ["KI", "IoT", "Judgmental"],
    adoptionFee: "Eine Packung Kaffeebohnen",
    age: "1 Jahr",
    personality: "Kritisch, aber fürsorglich"
  },
  {
    title: "Metaverse-Staubsauger",
    description: "Saugt im virtuellen Raum. Ihre echte Wohnung bleibt dreckig, aber Ihr Avatar lebt sauber.",
    status: "Kastriert",
    tags: ["VR", "Metaverse", "Sinnlos"],
    adoptionFee: "VR-Brille erforderlich",
    age: "2 Jahre",
    personality: "Existiert nur teilweise"
  },
  {
    title: "Dating-App für Code",
    description: "Hilft einsamen Functions dabei, ihre perfekte Klasse zu finden. Premium-Feature: Polymorphie-Matching.",
    status: "Geimpft",
    tags: ["Dating", "OOP", "Cringe"],
    adoptionFee: "Ein GitHub-Star",
    age: "8 Monate",
    personality: "Romantisch, objektorientiert"
  },
  {
    title: "Quantencomputer-Taschenrechner",
    description: "Berechnet 2+2 in Superposition. Ergebnis ist gleichzeitig 4 und nicht 4.",
    status: "Schrödinger-approved",
    tags: ["Quantum", "Mathe", "Verwirrend"],
    adoptionFee: "Ihre Gewissheit",
    age: "Unbestimmt",
    personality: "Unvorhersehbar"
  },
  {
    title: "Blockchain-Tagebuch",
    description: "Ihre peinlichsten Geheimnisse, für immer unveränderbar gespeichert. Was könnte schief gehen?",
    status: "Therapie empfohlen",
    tags: ["Blockchain", "Privacy", "Dumm"],
    adoptionFee: "Ihre Würde",
    age: "4 Monate",
    personality: "Zu ehrlich"
  },
  {
    title: "AI-Motivationscoach",
    description: "Motiviert Sie mit generischen Sprüchen. 'Du schaffst das!' - Spoiler: Tut es nicht.",
    status: "Enttäuschend",
    tags: ["AI", "Wellness", "Nutzlos"],
    adoptionFee: "Niedrige Erwartungen",
    age: "1,5 Jahre",
    personality: "Toxisch positiv"
  }
]

export default function AdoptierbareKonzeptePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Adoptierbare IT-Konzepte
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Willkommen im Tierheim für gescheiterte Digitalprojekte. Alle unsere Konzepte 
                sind entwurmt, geimpft und bereit für ein neues Zuhause. Adoptionsgebühr: 
                Ihre Vernunft.
              </p>
            </div>

            <div className="mb-8 flex justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Zurück zur Startseite
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allConcepts.map((concept) => (
                <Card key={concept.title} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Heart className="h-8 w-8 text-primary" />
                      <Badge variant="secondary">{concept.status}</Badge>
                    </div>
                    <CardTitle>{concept.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {concept.description}
                    </CardDescription>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Alter:</span>
                        <span>{concept.age}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Charakter:</span>
                        <span>{concept.personality}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Adoptionsgebühr:</span>
                        <span className="font-semibold">{concept.adoptionFee}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {concept.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      <Package className="mr-2 h-4 w-4" />
                      Adoptieren
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Sie haben ein Konzept zur Adoption?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Wir nehmen gerne Ihre gescheiterten IT-Projekte auf. Egal ob Blockchain-Zahnbürste 
                    oder KI-gestützter Türstopper - bei uns findet jede schlechte Idee ein Zuhause.
                  </p>
                  <Button asChild>
                    <a href="mailto:adoptiongmbh@web.de">
                      Konzept zur Adoption freigeben
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}