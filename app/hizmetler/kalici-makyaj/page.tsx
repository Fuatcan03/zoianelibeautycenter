import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ReviewSection } from "@/components/review-section"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Shield } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Kalıcı Makyaj | Zoia Neli Beauty Center",
  description:
    "Kalıcı makyaj hizmetleri ile doğal güzelliğinizi ön plana çıkarın. Kaş, eyeliner ve dudak kontur uygulamaları. Profesyonel ekip, güvenli ürünler.",
  keywords: "kalıcı makyaj, microblading, kaş konturu, eyeliner, dudak konturu, lefkoşa kalıcı makyaj",
}

export default function KaliciMakyajPage() {
  const services = [
    {
      title: "Kaş Konturu",
      description: "Doğal ve estetik kaş şekillendirme",
      features: [
        "Yüz analizine göre şekil belirleme",
        "Kıl tekniği veya pudra kaş",
        "Doğal pigmentler",
        "1-2 yıl kalıcılık",
      ],
      duration: "2-3 saat",
      image: "/permanent-makeup-eyebrow-microblading.jpg",
    },
    {
      title: "Eyeliner",
      description: "Göz çizgisi kalıcı makyaj uygulaması",
      features: [
        "İnce veya kalın çizgi seçenekleri",
        "Göz şekline uygun tasarım",
        "Uzun ömürlü pigmentler",
        "Doğal görünüm",
      ],
      duration: "1.5-2 saat",
      image: "/permanent-eyeliner-makeup-application.jpg",
    },
    {
      title: "Dudak Konturu",
      description: "Dudak şekillendirme ve renklendirme",
      features: ["Dudak şekli düzeltme", "Renk tonu belirleme", "Dolgun görünüm", "Uzun süreli etki"],
      duration: "2-2.5 saat",
      image: "/permanent-lip-contour-makeup.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Kalıcı Makyaj
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Doğal güzelliğinizi ön plana çıkaran, her gün makyaj yapma zahmetinden kurtulan kalıcı makyaj çözümleri
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div
                className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Süre: {service.duration}</span>
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Kalıcı Makyaj Avantajları</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-3">Zaman Tasarrufu</h3>
                <p className="text-muted-foreground">
                  Her sabah makyaj yapma zahmetinden kurtulun. Kalıcı makyaj ile her zaman hazır görünün.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-3">Doğal Görünüm</h3>
                <p className="text-muted-foreground">Yüz hatlarınıza uygun, doğal ve estetik bir görünüm elde edin.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-3">Uzun Ömürlü</h3>
                <p className="text-muted-foreground">1-2 yıl boyunca bozulmadan kalıcı sonuçlar elde edin.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-3">Profesyonel Uygulama</h3>
                <p className="text-muted-foreground">Deneyimli uzmanlarımız tarafından hijyenik ortamda uygulama.</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-3">Güvenli Pigmentler</h3>
                <p className="text-muted-foreground">
                  Onaylı, güvenli ve alerjik reaksiyon göstermeyen pigmentler kullanıyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-3">Kişisel Tasarım</h3>
                <p className="text-muted-foreground">Yüz şeklinize ve tercihlerinize özel tasarım yapıyoruz.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">İşlem Süreci</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Konsültasyon",
                desc: "Yüz analizi ve şekil belirleme",
              },
              {
                step: "2",
                title: "Tasarım",
                desc: "Size özel çizim ve onay",
              },
              {
                step: "3",
                title: "Uygulama",
                desc: "Profesyonel kalıcı makyaj",
              },
              {
                step: "4",
                title: "Bakım",
                desc: "İyileşme ve bakım rehberi",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 items-start">
            <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Önemli Bilgiler</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• İşlem öncesi 24 saat alkol ve aspirin kullanmayın</li>
                <li>• Hamilelik ve emzirme döneminde uygulanmaz</li>
                <li>• İlk 7 gün boyunca bakım talimatlarına uyulmalıdır</li>
                <li>• Renk 4-6 hafta sonra tam oturur</li>
                <li>• 6-8 hafta sonra rötuş seansı gerekebilir</li>
                <li>• Güneşten korunma önerilir</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ReviewSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
