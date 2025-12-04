import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Clock, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KolAgdaPage() {
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
              <Image src="/kol-agda-uygulamasi.jpg" alt="Kol Ağda" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Kol Ağda</h1>
              <p className="text-lg text-muted-foreground mb-6">
                El parmaklarından omuza kadar tam kol ağda uygulaması
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">30-40 dakika</span>
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
                    <h3 className="font-semibold text-foreground">Tam Kol - İpek Sir Ağda</h3>
                    <p className="text-sm text-muted-foreground">Parmaklar dahil, acısız uygulama</p>
                  </div>
                  <span className="font-bold text-primary">250 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">Tam Kol - Sıcak Ağda</h3>
                    <p className="text-sm text-muted-foreground">Klasik yöntem</p>
                  </div>
                  <span className="font-bold text-primary">180 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">Yarım Kol (Dirsek Altı)</h3>
                    <p className="text-sm text-muted-foreground">El ve ön kol</p>
                  </div>
                  <span className="font-bold text-primary">120 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">Sadece Parmaklar</h3>
                    <p className="text-sm text-muted-foreground">El ve parmak üstü</p>
                  </div>
                  <span className="font-bold text-primary">60 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Uygulama Detayları</h2>
              <ul className="space-y-3">
                {[
                  "Cilt temizliği ve hazırlık",
                  "Alt kol ağda uygulaması",
                  "Üst kol ağda uygulaması",
                  "El ve parmaklar dahil",
                  "Ince kılların kontrolü",
                  "Yatıştırıcı ürün uygulaması",
                  "Nemlendirme",
                ].map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Avantajlar & Öneriler</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Avantajlar</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {["Hızlı işlem", "Etkili temizlik", "3-4 hafta sonuç", "Cildi yumuşatır"].map(
                      (advantage, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground text-sm">{advantage}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Öneriler</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Kıllar en az 0.5 cm olmalı</li>
                    <li>• İşlem sonrası güneşten korunun</li>
                    <li>• Düzenli nemlendirici kullanın</li>
                    <li>• Haftalık peeling önerilir</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
