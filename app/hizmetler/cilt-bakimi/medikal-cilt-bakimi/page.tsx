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
  title: "Medikal Cilt Bakımı | Zoia Neli Beauty Center",
  description:
    "Medikal cilt bakımı ile cilt problemlerinize çözüm. Akne, leke, kırışıklık tedavisi. Dermatolojik ürünler, uzman ekip.",
  keywords: "medikal cilt bakımı, akne tedavisi, leke tedavisi, kırışıklık tedavisi, dermatolojik bakım",
}

export default function MedikalCiltBakimiPage() {
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
              <Image src="/medikal-cilt-bakimi-tedavi.jpg" alt="Medikal Cilt Bakımı" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Medikal Cilt Bakımı</h1>
              <p className="text-lg text-muted-foreground mb-6">
                İleri teknoloji cihazlar ve aktif içeriklerle cilt sorunlarına çözüm
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">75-90 dakika</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold text-primary">950 ₺</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tedavi Alanları</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Akne ve sivilce tedavisi",
                  "Leke tedavisi",
                  "Gözenek problemi",
                  "Kırışıklık azaltma",
                  "Skar ve iz tedavisi",
                  "Cilt tonu eşitsizliği",
                  "Kızarıklık azaltma",
                  "Antiaging bakım",
                ].map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Kullanılan Teknolojiler</h2>
              <ul className="space-y-3">
                {[
                  "Dermapen - mikro iğneleme tedavisi",
                  "LED ışık terapisi",
                  "Ultrason cilt temizliği",
                  "Yüksek frekanslı cihazlar",
                  "Oksijen infüzyonu",
                  "Cryotherapy soğuk tedavi",
                  "Galvanik akım",
                  "Radyofrekans",
                ].map((tech, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{tech}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tedavi Seansları</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">Tek Seans</h3>
                    <p className="text-sm text-muted-foreground">Genel bakım ve değerlendirme</p>
                  </div>
                  <span className="font-bold text-primary">950 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">6 Seans Paket</h3>
                    <p className="text-sm text-muted-foreground">Haftalık tedavi programı</p>
                  </div>
                  <span className="font-bold text-primary">5000 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">12 Seans Paket</h3>
                    <p className="text-sm text-muted-foreground">Komple tedavi programı</p>
                  </div>
                  <span className="font-bold text-primary">9000 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Önemli Bilgiler</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• İlk seansta cilt analizi ve tedavi planı oluşturulur</li>
                <li>• Ciddi problemlerde 6-12 seanslik program önerilir</li>
                <li>• Haftada 1 kez uygulama önerilir</li>
                <li>• Tedavi sonrası güneşten korunma önemlidir</li>
                <li>• Ev bakım ürünleri tedaviyi destekler</li>
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
