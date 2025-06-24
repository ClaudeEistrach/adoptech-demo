import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { AdoptableConceptsTeaser } from "@/components/adoptable-concepts-teaser"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <AdoptableConceptsTeaser />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
