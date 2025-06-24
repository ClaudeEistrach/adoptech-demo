"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Lightbulb, Rocket, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Über Uns
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Die Geschichte zweier Brüder und ihrer Mission
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Lightbulb className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Gegründet 2024</h3>
                <p className="text-muted-foreground">
                  Als Herzensprojekt zweier Brüder, von denen einer noch immer vermutet, 
                  adoptiert zu sein, starteten wir unsere Reise ins Ungewisse.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Rocket className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Unsere Mission</h3>
                <p className="text-muted-foreground">
                  Wir haben uns der Lösung von Problemen verschrieben, die keine Probleme 
                  waren – bis wir sie gelöst haben. Innovation durch Konfusion.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Unser Versprechen</h3>
                <p className="text-muted-foreground">
                  Wenn du nicht weißt, was du willst – wir wissen es auch nicht. 
                  Aber wir liefern es trotzdem. Garantiert verwirrend, immer innovativ.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}