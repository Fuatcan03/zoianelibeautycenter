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
  title: "Kalıcı Oje | Zoia Neli Beauty Center",
  description:
    "Kalıcı oje uygulaması ile 2-3 hafta bozulmayan tırnaklar. Zengin renk seçenekleri, hijyenik uygulama. Jel oje, gel polish.",
  keywords: "kalıcı oje, jel oje, gel polish, shellac, kalıcı tırnak boyası, lefkoşa",
}

export default function KaliciOjePage() {
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
              <Image src="/kalici-oje-manikur.jpg" alt="Kalıcı Oje" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Kalıcı Oje</h1>
              <p className="text-lg text-muted-foreground mb-6">
                3 hafta boyunca bozulmadan kalan, parlak ve dayanıklı kalıcı oje uygulaması
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">45-60 dakika</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold text-primary">450 ₺</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hizmet İçeriği</h2>
              <ul className="space-y-3">
                {[
                  "Tırnak temizliği ve şekillendirme",
                  "Tırnak yüzeyinin hazırlanması",
                  "Base coat uygulaması",
                  "Renk seçimi ve uygulama (2 kat)",
                  "Top coat uygulaması",
                  "UV lambada kurutma",
                  "Kütiküla bakımı",
                  "El nemlendirme",
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Avantajları</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "3 hafta bozulmadan kalır",
                  "Parlak ve canlı renk",
                  "Hızlı kuruma süresi",
                  "Günlük aktivitelere dayanıklı",
                  "Geniş renk paleti seçeneği",
                  "Tırnağa zarar vermez",
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Önemli Notlar</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Kalıcı oje çıkarma işlemi ayrıca ücretlendirilir (100 ₺)</li>
                <li>• İlk 24 saat içinde sıcak su temasından kaçınılmalıdır</li>
                <li>• Profesyonel çıkarma işlemi önerilir</li>
                <li>• Alerjik reaksiyon durumunda kullanım kesilmelidir</li>
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
