"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Search, Cog, Sparkles, Package } from "lucide-react"

const services = [
  {
    title: "Problemfindung",
    description: "Wir finden Probleme, wo keine sind. Unser Team spezialisiert sich darauf, perfekt funktionierende Systeme zu identifizieren und sie komplizierter zu machen.",
    icon: Search,
  },
  {
    title: "Überkomplizierung",
    description: "Einfache Lösungen sind langweilig. Wir verwandeln jeden 2-Schritte-Prozess in eine 47-seitige Dokumentation mit mindestens 12 Abhängigkeiten.",
    icon: Cog,
  },
  {
    title: "Buzzword-Integration",
    description: "KI, Blockchain, Quantum, NFT, Web3 - wenn es trendy klingt, bauen wir es ein. Ob es Sinn macht? Das ist eine andere Frage.",
    icon: Sparkles,
  },
  {
    title: "Konzept-Adoption",
    description: "Wir adoptieren Ihre ausrangierten IT-Ideen und geben ihnen ein neues Zuhause. Wie ein Tierheim, nur für gescheiterte Digitalprojekte.",
    icon: Package,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unsere Services
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Dienstleistungen, die Sie nie angefragt haben
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <Icon className="h-12 w-12 mb-4 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
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