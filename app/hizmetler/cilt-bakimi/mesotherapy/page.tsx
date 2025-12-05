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
  title: "Mesoterapi Cilt Bakımı | Zoia Neli Beauty Center",
  description:
    "Mesoterapi ile cilt gençleştirme. Vitamin ve mineral infüzyonu, kolajen üretimi, cilt sıkılaştırma. Antiaging tedavi.",
  keywords: "mesoterapi, mezoterapy, cilt gençleştirme, antiaging, vitamin tedavisi, lefkoşa",
}

export default function MesotherapyPage() {
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
              <Image src="/mesotherapy-cilt-genclestime.jpg" alt="Mesotherapy" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Mesotherapy</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Cilde vitamin, mineral ve hiyalüronik asit enjeksiyonu ile cilt yenileme
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">30-45 dakika</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold text-primary">1200 ₺</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Mesotherapy Çeşitleri</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">Vitamin Kokteyli</h3>
                    <p className="text-sm text-muted-foreground">Vitamin C, E, B kompleks</p>
                  </div>
                  <span className="font-bold text-primary">1000 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">Hyalüronik Asit</h3>
                    <p className="text-sm text-muted-foreground">Derin nem desteği</p>
                  </div>
                  <span className="font-bold text-primary">1200 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">DNA Salmon</h3>
                    <p className="text-sm text-muted-foreground">Hücre yenileme ve onarım</p>
                  </div>
                  <span className="font-bold text-primary">1500 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">PRP (Platelet Rich Plasma)</h3>
                    <p className="text-sm text-muted-foreground">Kendi kanınızdan hazırlanan serum</p>
                  </div>
                  <span className="font-bold text-primary">1800 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Faydaları</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Cilt gençleştirme",
                  "İnce çizgi azaltma",
                  "Cilt elastikiyeti artışı",
                  "Derin nemlendirme",
                  "Cilt tonu eşitleme",
                  "Parlak görünüm",
                  "Gözenek küçültme",
                  "Kolajen üretimi artışı",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tedavi Programı</h2>
              <ul className="space-y-3">
                {[
                  "İlk 4 seans: Haftada 1 kez",
                  "Sonraki 2 seans: 2 haftada 1",
                  "Koruma: Ayda 1 kez",
                  "Toplam 6-8 seans önerilir",
                  "Sonuçlar 2-3 hafta sonra belirginleşir",
                  "Etki 6-12 ay sürer",
                ].map((program, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{program}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tedavi Sonrası</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hafif kızarıklık ve şişlik 1-2 gün sürebilir</li>
                <li>• İlk 24 saat makyaj yapılmamalı</li>
                <li>• İlk 48 saat yoğun spor ve sauna yapılmamalı</li>
                <li>• Güneş koruyucu kullanımı önemlidir</li>
                <li>• Bol su tüketimi önerilir</li>
              </ul>
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
