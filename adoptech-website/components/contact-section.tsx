"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, MessageSquare, AlertCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Kontakt
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Kontaktiere uns – wenn du dich traust
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Bereit für das Chaos?
              </CardTitle>
              <CardDescription>
                Wir antworten meistens. Manchmal. Wenn wir Lust haben.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-semibold">E-Mail</p>
                  <a
                    href="mailto:adoptiongmbh@web.de"
                    className="text-primary hover:underline"
                  >
                    adoptiongmbh@web.de
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div className="text-sm text-yellow-800 dark:text-yellow-200">
                  <p className="font-semibold mb-1">Wichtiger Hinweis:</p>
                  <p>
                    Da unsere Projekte langsam aus dem Ruder laufen und wir beginnen, 
                    ernst genommen zu werden, kann die Antwortzeit variieren zwischen 
                    5 Minuten und 5 Geschäftstagen. Oder Jahren. Wer weiß das schon.
                  </p>
                </div>
              </div>
              <div className="text-center pt-4">
                <Button size="lg" asChild>
                  <a href="mailto:adoptiongmbh@web.de">
                    <Mail className="mr-2 h-4 w-4" />
                    Nachricht senden
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-muted-foreground">
            AdopTech – &ldquo;Weil wir vielleicht nicht deine erste Wahl sind, aber du auch nicht unsere.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}