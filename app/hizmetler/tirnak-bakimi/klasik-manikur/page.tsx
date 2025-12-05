import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Check, Clock, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ReviewSection } from "@/components/review-section"

export const metadata: Metadata = {
  title: "Klasik Manikür | Zoia Neli Beauty Center",
  description:
    "Profesyonel manikür hizmetleri. Tırnak şekillendirme, kütikül bakımı, cilalama ve oje uygulaması. Hijyenik ve rahatlatıcı.",
  keywords: "manikür, klasik manikür, tırnak bakımı, el bakımı, nail care, lefkoşa",
}

export default function KlasikManikulPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/hizmetler/tirnak-bakimi"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Tırnak Bakımı Hizmetlerine Dön</span>
          </Link>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                  Klasik Manikür
                </h1>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Ellerinize özel bakım, tırnak temizliği, şekillendirme ve oje uygulaması ile bakımlı ve güzel
                  tırnaklar
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>45-60 dakika</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>Profesyonel uygulama</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/professional-nail-care-manicure-salon.jpg"
                  alt="Klasik Manikür"
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
                  "El ve tırnak temizliği",
                  "Tırnak kütikül bakımı",
                  "Tırnak şekillendirme ve törpüleme",
                  "El masajı ve nemlendirme",
                  "Oje uygulaması (renk seçimi dahil)",
                  "Parlak ve sağlıklı görünüm",
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
                  Klasik manikür, ellerinizin ve tırnaklarınızın sağlıklı ve bakımlı görünmesini sağlar. Düzenli manikür
                  uygulaması ile tırnaklar güçlenir ve daha sağlıklı büyür.
                </p>
                <p className="text-muted-foreground">
                  Profesyonel manikür işlemi sırasında yapılan el masajı kan dolaşımını artırır ve ellerin yumuşak
                  kalmasını sağlar.
                </p>
                <p className="text-muted-foreground">
                  Geniş renk seçenekleri ile tarzınıza uygun oje rengi seçebilir, bakımlı ve şık bir görünüme
                  kavuşabilirsiniz.
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
                { step: "1", title: "Temizlik", desc: "El ve tırnak temizliği" },
                { step: "2", title: "Kütikül Bakımı", desc: "Tırnak eti bakımı ve şekillendirme" },
                { step: "3", title: "Masaj", desc: "Rahatlatıcı el masajı" },
                { step: "4", title: "Oje", desc: "Renk uygulaması ve kurutma" },
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
