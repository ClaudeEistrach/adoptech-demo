"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { User } from "lucide-react"

const team = [
  {
    name: "Maximilian Adoptech",
    role: "CEO & Chaos-Architekt",
    description: "Max ist überzeugt, dass 'disruptiv' nur ein anderes Wort für 'verwirrt' ist. Seine größte Innovation? Ein Meeting-Scheduler, der automatisch alle Termine auf 4 Uhr morgens legt.",
    badges: ["Visionär", "Koffein-Abhängig", "Möglicherweise adoptiert"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070"
  },
  {
    name: "Felix Adoptech",
    role: "CTO & Bug-Enthusiast",
    description: "Felix glaubt fest daran, dass jeder Code mindestens 3 versteckte Features haben sollte, die niemand bestellt hat. Sein Motto: 'Es ist kein Bug, es ist ein Easter Egg!'",
    badges: ["Code-Poet", "Feature-Creep", "Definitiv nicht adoptiert"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070"
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Das Team
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Die Köpfe hinter dem kreativen Chaos
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <User className="absolute bottom-4 left-4 h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.badges.map((badge) => (
                      <Badge key={badge} variant="outline">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}