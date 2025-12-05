import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Clock, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ReviewSection } from "@/components/review-section"

export const metadata: Metadata = {
  title: "Klasik Cilt Bakımı | Zoia Neli Beauty Center",
  description:
    "Klasik cilt bakımı ile cildinizi temizleyin ve yenileyin. Derin temizlik, buhar, maske ve masaj. Her cilt tipine uygun bakım programları.",
  keywords: "klasik cilt bakımı, yüz bakımı, derin temizlik, cilt temizliği, facial, lefkoşa",
}

export default function KlasikCiltBakimiPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/hizmetler/cilt-bakimi">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Cilt Bakımı Hizmetleri
            </Button>
          </Link>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/klasik-cilt-bakimi-spa.jpg" alt="Klasik Cilt Bakımı" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Klasik Cilt Bakımı</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Cilt tipinize özel hazırlanan derin temizlik ve bakım programı
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">60-75 dakika</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold text-primary">650 ₺</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Bakım Adımları</h2>
              <ul className="space-y-3">
                {[
                  "Cilt analizi ve tip belirleme",
                  "Makyaj ve yüzey temizliği",
                  "Derin gözenek temizliği",
                  "Buharlama ve yumuşatma",
                  "Siyah nokta temizliği",
                  "Cilt tipine özel peeling",
                  "Tonlama ve nemlendirme",
                  "Serum uygulaması",
                  "Özel maske tedavisi",
                  "Yüz masajı",
                  "Güneş koruyucu uygulama",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cilt Tiplerine Göre Uygulama</h2>
              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Yağlı Cilt</h3>
                  <p className="text-sm text-muted-foreground">Gözenek sıkılaştırıcı ve yağ dengeleyici ürünler</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Kuru Cilt</h3>
                  <p className="text-sm text-muted-foreground">Yoğun nemlendirici ve besleyici ürünler</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Karma Cilt</h3>
                  <p className="text-sm text-muted-foreground">Dengeleyici ve bölgesel özel bakım</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Hassas Cilt</h3>
                  <p className="text-sm text-muted-foreground">Yatıştırıcı ve hassas ciltlere özel ürünler</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Faydaları</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Derinlemesine temizlik",
                  "Gözenek küçülmesi",
                  "Cilt tonu eşitliği",
                  "Nem dengesi",
                  "Parlak ve canlı görünüm",
                  "Rahatlatıcı etki",
                  "Stres azaltma",
                  "Cildi dinlendirme",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Ayda 1-2 kez düzenli bakım ile en iyi sonuçlar alınır
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <ReviewSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
