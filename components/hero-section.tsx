"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="giris" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Güzelliğiniz Bizim Tutkumuz</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Kendinize <span className="text-primary">Özel Zaman</span> Ayırın
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Profesyonel ekibimiz ve premium ürünlerimizle, güzelliğinize değer katıyoruz. Rahatlatıcı atmosferimizde
              kendinizi yenileyin ve en iyi halinize ulaşın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                onClick={() => scrollToSection("hizmetlerimiz")}
              >
                Hizmetlerimizi Keşfedin
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("iletisim")}>
                İletişim
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary shadow-2xl">
              <img
                src="/luxury-beauty-salon-spa-interior.jpg"
                alt="Lüks güzellik salonu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-lg max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">10+</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Yıllık Deneyim</p>
                  <p className="text-sm text-muted-foreground">Profesyonel Hizmet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
