"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import { Heart, ArrowRight } from "lucide-react"

const concepts = [
  {
    title: "Social Media für Pflanzen",
    description: "Eine Plattform, wo Ihre Zimmerpflanzen ihre Photosynthese-Erfolge teilen können.",
    status: "Sucht liebevolles Zuhause",
    tags: ["Web3", "GreenTech"],
  },
  {
    title: "Blockchain-Wecker",
    description: "Jeder Alarm wird als NFT geminted. Verschlafen war noch nie so wertvoll.",
    status: "Dringend abzugeben",
    tags: ["Blockchain", "Lifestyle"],
  },
  {
    title: "KI-Kaffeemaschine",
    description: "Sagt Ihnen, dass Sie keinen Kaffee brauchen, macht aber trotzdem welchen.",
    status: "Stubenrein",
    tags: ["KI", "IoT"],
  },
]

export function AdoptableConceptsTeaser() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Adoptierbare IT-Konzepte
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Gib deinen gescheiterten Ideen ein neues Zuhause
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
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
                  <div className="flex flex-wrap gap-2">
                    {concept.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href="/adoptierbare-konzepte">
              Alle Konzepte ansehen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}