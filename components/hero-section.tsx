"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/50 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent rounded-full animate-bounce">
              <Sparkles className="w-5 h-5 text-accent animate-spin" />
              <span className="text-sm font-bold text-accent">%15 İNDİRİM FIRSATI!</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
              Sağlığınız Bizim{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bakımımız
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Zoia Neli Beauty Center'da <span className="font-semibold text-foreground">Tecrübeli Ekipten</span> Tedavi
              Görün. Sizin Sağlığınız ve Rahatlığınız Bizim İçin Herşeyden Önemli!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="tel:+905428772277">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Randevu Al
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/hizmetler/agda">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 hover:bg-secondary hover:border-primary transition-all bg-transparent"
                >
                  Hizmetlerimizi İncele
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <a
                href="https://www.instagram.com/zoianelibeauty/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=905428772277"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl relative">
              <Image
                src="/logo.png"
                alt="Zoia Neli Beauty Center"
                width={600}
                height={600}
                className="w-full h-full object-contain p-12 animate-in zoom-in duration-1000"
              />
              <div className="absolute top-8 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-in slide-in-from-left duration-500 delay-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">%15 İndirim</p>
                    <p className="text-xs text-muted-foreground">Tüm Hizmetlerde</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-in slide-in-from-right duration-500 delay-1000">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">Hemen Ara</p>
                    <p className="text-xs text-primary font-semibold">0542 877 22 77</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
