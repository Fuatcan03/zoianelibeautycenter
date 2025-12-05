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
  title: "Protez Tırnak | Zoia Neli Beauty Center",
  description:
    "Protez tırnak uygulaması. Jel tırnak, akrilik tırnak. Doğal görünümlü, dayanıklı uzatma. Profesyonel uygulama, uygun dolgu fiyatları.",
  keywords: "protez tırnak, jel tırnak, akrilik tırnak, tırnak uzatma, nail extension, lefkoşa",
}

export default function ProtezTirnakPage() {
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
              <Image src="/protez-tirnak-uzun-tirnak.jpg" alt="Protez Tırnak" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Protez Tırnak</h1>
              <p className="text-lg text-muted-foreground mb-6">Doğal görünümlü ve dayanıklı uzun tırnak uygulaması</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">120-150 dakika</span>
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hizmet İçeriği</h2>
              <ul className="space-y-3">
                {[
                  "Doğal tırnak hazırlığı",
                  "Form yerleştirme",
                  "Jel veya akrilik uygulama",
                  "Şekillendirme ve törpüleme",
                  "Yüzey düzeltme",
                  "Renk veya french uygulaması",
                  "Top coat ve parlatma",
                  "Kütiküla bakımı",
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
                  "Doğal görünüm",
                  "İstenilen uzunlukta uygulama",
                  "Kırılma ve yıpranmaya dayanıklı",
                  "3-4 hafta kalıcı",
                  "Özel tasarım imkanı",
                  "Tırnak ısırma alışkanlığına çözüm",
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
              <h2 className="text-2xl font-semibold text-foreground mb-4">Bakım ve Fiyatlar</h2>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Dolgu işlemi: 400 ₺ (3-4 hafta sonra)</li>
                <li>• Tamir: 150 ₺ (tek tırnak)</li>
                <li>• Sökme işlemi: 200 ₺</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Düzenli bakımla tırnaklarınız 6-8 ay boyunca sağlıklı ve güzel kalabilir
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
