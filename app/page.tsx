import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HelpSection } from "@/components/help-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="absolute top-16 left-0 right-0 h-32 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent rounded-b-[100%]" />
      </div>

      <div className="relative z-10 pt-16">
        <HeroSection />
        <ServicesSection />
        <HelpSection />
        <ContactSection />
      </div>

      <div className="relative">
        <Footer />
        {/* Footer gradient renkini açık yeşil yeşiline çevirdim ve yönünü düzelttim */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-0">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="footerWaveGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgb(132, 169, 140)" stopOpacity="0.5" />
                <stop offset="50%" stopColor="rgb(132, 169, 140)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(132, 169, 140)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              fill="url(#footerWaveGradient)"
              d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,96C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            />
          </svg>
        </div>
      </div>
    </main>
  )
}
