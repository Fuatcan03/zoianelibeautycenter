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
  title: "Oksijen Terapisi | Zoia Neli Beauty Center",
  description:
    "Oksijen terapisi ile cildinizi canlandırın. Hücre yenileme, cilt aydınlatma, nemlendirme. Anında sonuç veren tedavi.",
  keywords: "oksijen terapisi, oxygen therapy, cilt canlandırma, cilt aydınlatma, lefkoşa",
}

export default function OksijenTerapisiPage() {
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
              <Image src="/oksijen-terapisi-cilt.jpg" alt="Oksijen Terapisi" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Oksijen Terapisi</h1>
              <p className="text-lg text-muted-foreground mb-6">
                %95 saf oksijenle cildi canlandıran ve yenileyen tedavi
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">60 dakika</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold text-primary">900 ₺</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tedavi Adımları</h2>
              <ul className="space-y-3">
                {[
                  "Cilt temizliği",
                  "Peeling ve ölü hücre temizliği",
                  "Özel serum uygulaması",
                  "%95 saf oksijen infüzyonu",
                  "Vitamin ve mineral takviyesi",
                  "Nem kilitleme",
                  "LED ışık terapisi (isteğe bağlı)",
                  "Yüz masajı",
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Faydaları</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Hücre yenilenmesi",
                  "Kolajen üretimi artışı",
                  "Kırışıklık azaltma",
                  "Cilt sıkılaştırma",
                  "Parlak ve canlı görünüm",
                  "Gözenek küçülmesi",
                  "Kan dolaşımı iyileştirme",
                  "Detoks etkisi",
                  "Cilt tonu eşitleme",
                  "Anında tazelik hissi",
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Kimler İçin Uygundur?</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Yorgun ve mat görünümlü ciltler</li>
                <li>• Sigara ve stres etkisiyle yıpranan ciltler</li>
                <li>• Yaşlanma belirtileri gösteren ciltler</li>
                <li>• Özel gün öncesi canlandırma ihtiyacı</li>
                <li>• Kirli hava ve çevre faktörlerine maruz kalan ciltler</li>
                <li>• Düzenli bakım isteyen tüm cilt tipleri</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Uygulama Sıklığı</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Tek Seans</span>
                  <span className="font-bold text-primary">900 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">4 Seans Paket</span>
                  <span className="font-bold text-primary">3200 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">8 Seans Paket</span>
                  <span className="font-bold text-primary">6000 ₺</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Haftada 1 kez 4-6 seans, sonrasında ayda 1 kez koruma seansları önerilir
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
