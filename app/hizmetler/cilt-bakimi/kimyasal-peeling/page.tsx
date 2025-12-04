import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Clock, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KimyasalPeelingPage() {
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
              <Image src="/kimyasal-peeling-cilt-yenileme.jpg" alt="Kimyasal Peeling" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Kimyasal Peeling</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Cilt yenileme ve leke giderme için kimyasal peeling tedavisi
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">45-60 dakika</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold text-primary">800 ₺</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Peeling Çeşitleri</h2>
              <div className="space-y-4">
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">Yüzeysel Peeling</h3>
                    <span className="font-bold text-primary">800 ₺</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Glikolik asit, mandelic asit, salisilik asit</p>
                  <p className="text-sm text-muted-foreground">
                    Hafif cilt sorunları, canlılık kazandırma, gözenek temizliği
                  </p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">Orta Derinlikte Peeling</h3>
                    <span className="font-bold text-primary">1200 ₺</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">TCA (Trikloroasetik asit)</p>
                  <p className="text-sm text-muted-foreground">Leke tedavisi, kırışıklık azaltma, akne izleri</p>
                </div>
                <div className="p-4 bg-secondary rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">Yellow Peel</h3>
                    <span className="font-bold text-primary">1500 ₺</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">Retinol bazlı</p>
                  <p className="text-sm text-muted-foreground">Akne tedavisi, leke azaltma, anti-aging</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tedavi Süreci</h2>
              <ul className="space-y-3">
                {[
                  "Cilt analizi ve uygun peeling seçimi",
                  "Cilt temizliği ve hazırlık",
                  "Peeling solüsyonu uygulaması",
                  "Bekleme süresi (asit tipine göre değişir)",
                  "Nötralizasyon",
                  "Yatıştırıcı maske",
                  "Nemlendirici ve güneş koruyucu",
                  "Bakım talimatları",
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ne Zaman Uygulanır?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Güneş lekeleri",
                  "Akne lekeleri",
                  "Yaşlılık lekeleri",
                  "Cilt tonu eşitsizliği",
                  "İnce çizgiler",
                  "Akne ve sivilce",
                  "Genişlemiş gözenekler",
                  "Mat görünüm",
                ].map((indication, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{indication}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Önemli Uyarılar</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Tedavi sonrası güneşten mutlaka korunmalıdır</li>
                <li>• 3-7 gün arası soyulma ve kabuklanma normaldir</li>
                <li>• Tedavi öncesi güneşe maruziyet olmamalıdır</li>
                <li>• 4-6 seans ile en iyi sonuçlar alınır</li>
                <li>• Seanslar arası 2-4 hafta beklenir</li>
                <li>• Kış aylarında yapılması önerilir</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
