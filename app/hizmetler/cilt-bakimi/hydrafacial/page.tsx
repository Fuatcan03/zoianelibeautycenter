import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Check, Clock, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ReviewSection } from "@/components/review-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hydrafacial Cilt Bakımı | Zoia Neli Beauty Center",
  description:
    "Son teknoloji Hydrafacial cilt bakımı ile cildinizi yenileyin. Derin temizlik, serum infüzyonu ve anında sonuç. Lefkoşa'nın en iyi cilt bakımı.",
  keywords: "hydrafacial, cilt bakımı, yüz bakımı, cilt temizliği, lefkoşa cilt bakımı, hydrafacial fiyat",
}

export default function HydrafacialPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/hizmetler/cilt-bakimi"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Cilt Bakımı Hizmetlerine Dön</span>
          </Link>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                  Hydrafacial
                </h1>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Son teknoloji ile cilt yenileme ve aydınlatma, derin temizlik ve serum infüzyonu ile anında sonuç
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>60-75 dakika</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>Medikal teknoloji</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/professional-facial-skin-care-treatment-spa.jpg"
                  alt="Hydrafacial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Hizmet İçeriği</h2>
              <ul className="space-y-4">
                {[
                  "Vakumla derin gözenek temizliği",
                  "Ölü hücre ve siyah nokta temizleme",
                  "Hydra dermabrazyon uygulaması",
                  "Özel serum infüzyonu",
                  "Cilt aydınlatma ve nemlendirme",
                  "Anında görünür sonuçlar",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Faydaları</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Hydrafacial, cildinizi derinlemesine temizlerken aynı anda besler ve nemlendirir. İleri teknoloji
                  sayesinde gözenekler açılır, siyah noktalar temizlenir ve cilt daha parlak bir görünüme kavuşur.
                </p>
                <p className="text-muted-foreground">
                  Tüm cilt tiplerine uygun olan bu tedavi, ağrısız ve rahatlatıcıdır. İşlem sonrası hiçbir iyileşme
                  sürecine gerek kalmadan anında sonuç alırsınız.
                </p>
                <p className="text-muted-foreground">
                  Düzenli Hydrafacial uygulamaları ile cildiniz daha genç, canlı ve sağlıklı görünür. Kırışıklıklar
                  azalır, cilt tonu eşitlenir ve gözenekler küçülür.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">İşlem Süreci</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Temizlik", desc: "Yüzey temizliği ve hazırlık" },
                { step: "2", title: "Peeling", desc: "Ölü hücre temizleme" },
                { step: "3", title: "Ekstraksiyon", desc: "Vakumla gözenek temizliği" },
                { step: "4", title: "Serum", desc: "Besleyici serum infüzyonu" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ReviewSection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
