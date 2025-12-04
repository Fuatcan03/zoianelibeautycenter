import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TamBacakAgdaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/hizmetler/agda">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ağda Hizmetleri
            </Button>
          </Link>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/bacak-agda-uygulamasi.jpg" alt="Tam Bacak Ağda" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Tam Bacak Ağda</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Parmak uçlarından üst bacağa kadar komple bacak ağda uygulaması
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">45-60 dakika</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Fiyatlar</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">İpek Sir Ağda</h3>
                    <p className="text-sm text-muted-foreground">En az acılı, hassas ciltlere uygun</p>
                  </div>
                  <span className="font-bold text-primary">450 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">Sıcak Ağda</h3>
                    <p className="text-sm text-muted-foreground">Klasik yöntem, etkili sonuç</p>
                  </div>
                  <span className="font-bold text-primary">300 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hizmet İçeriği</h2>
              <ul className="space-y-3">
                {[
                  "Bacak temizliği ve hazırlık",
                  "Alt bacak ağda uygulaması",
                  "Üst bacak ağda uygulaması",
                  "Parmak ve ayak üstü dahil",
                  "Kalan kılların kontrolü",
                  "Yatıştırıcı losyon",
                  "Nemlendirme",
                  "Bakım önerileri",
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ek Seçenekler</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Yarım Bacak (Diz Altı)</span>
                  <span className="font-bold text-primary">250 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Bacak + Koltuk Altı Kombo</span>
                  <span className="font-bold text-primary">500 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Bakım Önerileri</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Kıllar en az 0.5 cm uzunluğunda olmalı</li>
                <li>• İşlemden 24 saat önce peeling yapın</li>
                <li>• İşlem sonrası 24 saat sıcak su, sauna ve solaryumdan kaçının</li>
                <li>• Haftada 2-3 kez peeling yapın</li>
                <li>• Günlük nemlendirici kullanın</li>
                <li>• Sonuç 3-4 hafta sürer</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
