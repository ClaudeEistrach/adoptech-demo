"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Brain, FileText, Globe, Paperclip } from "lucide-react"

const projects = [
  {
    title: "KI-gesteuerte Briefbeschwerer",
    description: "Ein revolutionärer Briefbeschwerer, der mittels künstlicher Intelligenz vorhersagt, wann Papier wegfliegen könnte - und dann nichts dagegen tut.",
    icon: Brain,
    tags: ["KI", "IoT", "Nutzlos"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065"
  },
  {
    title: "Blockchain-basierte Post-its",
    description: "Jede Notiz wird unveränderbar in der Blockchain gespeichert. Perfekt für Einkaufslisten, die man nie wieder ändern möchte.",
    icon: FileText,
    tags: ["Blockchain", "DeFi", "Warum?"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032"
  },
  {
    title: "Websites, die Nutzer ignorieren",
    description: "Unsere Spezialität: Websites mit eingebautem User-Repellent. Garantiert 0% Engagement und 100% Verwirrung.",
    icon: Globe,
    tags: ["UX", "Anti-Pattern", "Premium"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
  },
  {
    title: "Quantum-Büroklammern",
    description: "Büroklammern, die gleichzeitig da und nicht da sind. Schrödinger wäre stolz, Ihr Büro verwirrt.",
    icon: Paperclip,
    tags: ["Quantum", "Office", "Existenzkrise"],
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&w=2070"
  }
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unser Portfolio
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Innovationen, die die Welt nicht braucht, aber trotzdem bekommt
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <div 
                      className="h-full w-full bg-cover bg-center opacity-20"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Icon className="h-8 w-8 text-primary" />
                      <CardTitle>{project.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}