import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Clock, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function YuzAgdaPage() {
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
              <Image src="/yuz-agda-hassas-cilt.jpg" alt="Yüz Ağda" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Yüz Ağda</h1>
              <p className="text-lg text-muted-foreground mb-6">Yüz bölgesi için hassas ve profesyonel kıl temizliği</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">20-30 dakika</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Bölgesel Fiyatlar</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">Tam Yüz</h3>
                    <p className="text-sm text-muted-foreground">Alın, yanaklar, çene, üst dudak</p>
                  </div>
                  <span className="font-bold text-primary">200 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Üst Dudak</span>
                  <span className="font-bold text-primary">60 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Çene</span>
                  <span className="font-bold text-primary">80 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Yanaklar</span>
                  <span className="font-bold text-primary">70 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Alın</span>
                  <span className="font-bold text-primary">60 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Boyun</span>
                  <span className="font-bold text-primary">70 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Özel Uygulama</h2>
              <ul className="space-y-3">
                {[
                  "Hassas ciltlere özel ağda kullanımı",
                  "Yüz temizliği ve hazırlık",
                  "Test uygulaması",
                  "Dikkatli ve hassas uygulama",
                  "İnce kıl kontrolü",
                  "Yatıştırıcı tonik",
                  "Anti-inflamatuar losyon",
                  "Soğutma jeli",
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
                  "Pürüzsüz yüz görünümü",
                  "Makyaj daha düzgün durur",
                  "Cilt daha parlak görünür",
                  "Peeling etkisi yapar",
                  "Ölü hücreleri temizler",
                  "3-4 hafta etkili",
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Dikkat Edilmesi Gerekenler</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• İşlemden önce cilt temiz olmalı, makyaj yapılmış olmamalı</li>
                <li>• Sivilce veya tahriş varsa işlem ertelenmelidir</li>
                <li>• İşlem sonrası 24 saat makyaj yapılmamalı</li>
                <li>• İşlem sonrası 24 saat güneşe çıkılmamalı</li>
                <li>• Hafif kızarıklık 2-3 saat içinde geçer</li>
                <li>• Retinol veya asit kullananlar önceden bilgilendirmelidir</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
