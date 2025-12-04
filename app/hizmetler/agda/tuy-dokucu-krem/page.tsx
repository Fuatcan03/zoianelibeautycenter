import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Clock, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TuyDokucuKremPage() {
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
              <Image src="/tuy-dokucu-krem-uygulamasi.jpg" alt="Tüy Dökücü Krem" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Tüy Dökücü Krem</h1>
              <p className="text-lg text-muted-foreground mb-6">Ağrısız ve pratik kıl temizliği alternatifi</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">15-20 dakika</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Bölgesel Fiyatlar</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Tam Bacak</span>
                  <span className="font-bold text-primary">250 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Yarım Bacak</span>
                  <span className="font-bold text-primary">150 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Tam Kol</span>
                  <span className="font-bold text-primary">150 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Yarım Kol</span>
                  <span className="font-bold text-primary">100 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Koltuk Altı</span>
                  <span className="font-bold text-primary">80 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Bikini Bölgesi</span>
                  <span className="font-bold text-primary">120 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Uygulama Süreci</h2>
              <ul className="space-y-3">
                {[
                  "Cilt temizliği",
                  "Test uygulaması (alerjik reaksiyon kontrolü)",
                  "Krem uygulaması",
                  "Bekleme süresi (8-10 dakika)",
                  "Spatül ile temizleme",
                  "Ilık suyla yıkama",
                  "Yatıştırıcı losyon",
                  "Nemlendirme",
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Avantajları</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Tamamen ağrısız",
                  "Hızlı uygulama",
                  "Pratik çözüm",
                  "Hassas ciltlere uygun",
                  "Cildi tahriş etmez",
                  "Kıl kalınlaşması yapmaz",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Önemli Uyarılar</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>İlk kez kullananlara test uygulaması yapılır</li>
                <li>Tahriş olmuş cilde uygulanmaz</li>
                <li>İşlem sonrası 24 saat güneşe çıkılmamalı</li>
                <li>Parfümlü ürünler 24 saat kullanılmamalı</li>
                <li>Etki süresi 5-7 gündür</li>
                <li>Ağdaya göre daha kısa ömürlüdür</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
