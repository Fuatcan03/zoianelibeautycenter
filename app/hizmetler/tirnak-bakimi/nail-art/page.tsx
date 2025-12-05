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
  title: "Nail Art | Zoia Neli Beauty Center",
  description:
    "Özel nail art tasarımları. French manikür, ombre, taş süsleme, el boyama. Tırnaklarınızı sanata dönüştürün. Lefkoşa'da uzman nail artist.",
  keywords: "nail art, tırnak süsleme, french manikür, ombre tırnak, taş süsleme, tırnak tasarım, lefkoşa",
}

export default function NailArtPage() {
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
              <Image src="/nail-art-tirnak-susleme.jpg" alt="Nail Art" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Nail Art</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Tırnaklarınızı sanata dönüştüren özel tasarımlar ve süslemeler
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">60-90 dakika</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold text-primary">350 ₺ - 700 ₺</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Nail Art Seçenekleri</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">Basit Desenler</h3>
                    <p className="text-sm text-muted-foreground">Çizgiler, puantiyeler, geometrik şekiller</p>
                  </div>
                  <span className="font-bold text-primary">350 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">Ombre Tekniği</h3>
                    <p className="text-sm text-muted-foreground">Renk geçişli modern tasarım</p>
                  </div>
                  <span className="font-bold text-primary">450 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">French Manikür</h3>
                    <p className="text-sm text-muted-foreground">Klasik veya renkli french</p>
                  </div>
                  <span className="font-bold text-primary">400 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <div>
                    <h3 className="font-semibold text-foreground">Taş Süsleme</h3>
                    <p className="text-sm text-muted-foreground">Kristal, taş ve parlak detaylar</p>
                  </div>
                  <span className="font-bold text-primary">500 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-foreground">Premium Tasarımlar</h3>
                    <p className="text-sm text-muted-foreground">El işi detaylı sanat eserleri</p>
                  </div>
                  <span className="font-bold text-primary">700 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Popüler Teknikler</h2>
              <ul className="space-y-3">
                {[
                  "El boyama desenleri",
                  "Sticker ve transfer uygulamaları",
                  "Glitter ve sim detayları",
                  "3D süslemeler",
                  "Çiçek motifleri",
                  "Mermaid efekti",
                  "Cat eye tekniği",
                  "Manyetik ojeler",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Önemli Bilgiler</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Fiyatlar tasarım karmaşıklığına göre değişebilir</li>
                <li>• Özel tasarımlar için ön görüşme yapılabilir</li>
                <li>• Kalıcı oje üzerine uygulama yapılır</li>
                <li>• İlham için örnek fotoğraflar getirilebilir</li>
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
