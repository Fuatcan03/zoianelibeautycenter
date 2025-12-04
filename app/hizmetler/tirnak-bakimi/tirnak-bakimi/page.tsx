import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Clock, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TirnakBakimiDetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/hizmetler/tirnak-bakimi">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tırnak Bakımı Hizmetleri
            </Button>
          </Link>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/tirnak-bakim-tedavisi.jpg" alt="Tırnak Bakımı" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Tırnak Bakımı Tedavisi</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Zayıf ve kırılgan tırnaklar için özel güçlendirme ve onarım tedavisi
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">30-40 dakika</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold text-primary">300 ₺</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tedavi İçeriği</h2>
              <ul className="space-y-3">
                {[
                  "Tırnak analizi ve durum değerlendirmesi",
                  "Derin temizlik",
                  "Keratin ve protein tedavisi",
                  "Güçlendirici serum uygulaması",
                  "Vitamin takviyesi",
                  "Kütiküla onarımı",
                  "Nemlendirici maske",
                  "Koruyucu kat uygulaması",
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hangi Sorunlara İyi Gelir?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Kırılgan tırnaklar",
                  "Yıpranmış tırnak yapısı",
                  "Soyulma problemi",
                  "Yavaş büyüyen tırnaklar",
                  "Renk değişimi",
                  "Kurumuş kütiküla",
                ].map((problem, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{problem}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Tedavi Programları</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">Tek Seans</h3>
                    <p className="text-sm text-muted-foreground">Genel bakım ve güçlendirme</p>
                  </div>
                  <span className="font-bold text-primary">300 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">4 Seans Paket</h3>
                    <p className="text-sm text-muted-foreground">Haftalık tedavi programı</p>
                  </div>
                  <span className="font-bold text-primary">1000 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">8 Seans Paket</h3>
                    <p className="text-sm text-muted-foreground">Komple onarım programı</p>
                  </div>
                  <span className="font-bold text-primary">1800 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Öneriler</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ciddi hasarlarda 4-8 seanslik tedavi programı önerilir</li>
                <li>• Haftada 1-2 kez uygulama ile en iyi sonuç alınır</li>
                <li>• Tedavi sonrası ev bakım ürünleri kullanılması önerilir</li>
                <li>• Düzenli bakımla tırnak sağlığı korunur</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
