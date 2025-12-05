import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ReviewSection } from "@/components/review-section"

export const metadata: Metadata = {
  title: "Sıcak Ağda Hizmetleri | Zoia Neli Beauty Center",
  description:
    "Geleneksel sıcak ağda uygulaması. Ekonomik ve etkili kıl temizliği. Tüm vücut bölgeleri için uygun. Doğal ürünler, hijyenik ortam.",
  keywords: "sıcak ağda, klasik ağda, geleneksel ağda, vücut ağdası, lefkoşa ağda",
}

export default function SicakAgdaPage() {
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
              <Image src="/sicak-agda-kil-alma.jpg" alt="Sıcak Ağda" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Sıcak Ağda</h1>
              <p className="text-lg text-muted-foreground mb-6">Geleneksel yöntemle etkili ve ekonomik kıl temizliği</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Bölgeye göre değişir</span>
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
                  <span className="font-bold text-primary">300 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Yarım Bacak</span>
                  <span className="font-bold text-primary">200 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Tam Kol</span>
                  <span className="font-bold text-primary">180 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Yarım Kol</span>
                  <span className="font-bold text-primary">120 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Koltuk Altı</span>
                  <span className="font-bold text-primary">100 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Bikini Bölgesi</span>
                  <span className="font-bold text-primary">150 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Brezilya</span>
                  <span className="font-bold text-primary">250 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Sırt</span>
                  <span className="font-bold text-primary">200 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Göğüs</span>
                  <span className="font-bold text-primary">180 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Tam Vücut</span>
                  <span className="font-bold text-primary">850 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Avantajları</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Ekonomik fiyat",
                  "Tüm bölgelere uygun",
                  "Etkili kıl temizliği",
                  "Doğal ürünler",
                  "Uzun ömürlü sonuç (3-4 hafta)",
                  "Cildi yumuşatır",
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Önemli Bilgiler</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Kıllar en az 0.5 cm uzunluğunda olmalıdır</li>
                <li>• İşlem sonrası 24 saat sıcak duş, sauna ve solaryumdan kaçının</li>
                <li>• Işlem sonrası nemlendirici kullanın</li>
                <li>• Düzenli peeling cildi yumuşatır</li>
                <li>• Hassas bölgelerde hafif kızarıklık normaldir</li>
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
