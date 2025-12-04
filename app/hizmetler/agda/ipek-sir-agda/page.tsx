import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft, Check, Clock, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IpekSirAgdaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/hizmetler/agda"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Ağda Hizmetlerine Dön</span>
          </Link>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                  İpek Sir Ağda
                </h1>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Hassas ciltler için özel ipek ağda uygulaması ile acısız ve etkili kıl temizliği
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>30-45 dakika</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>Hassas ciltlere özel</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/professional-waxing-hair-removal-beauty-salon.jpg"
                  alt="İpek Sir Ağda"
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
                  "Hassas ciltlere özel formül",
                  "Minimum ağrı ile uygulama",
                  "Doğal içerikli ağda",
                  "Cilt tahrişi yapmaz",
                  "Uzun süreli etki (3-4 hafta)",
                  "Tüm vücut bölgelerine uygun",
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
                  İpek sir ağda, hassas ciltler için özel olarak geliştirilmiş bir ağda türüdür. Doğal içerikleri
                  sayesinde cildi tahriş etmez ve minimum ağrı ile kılları kökünden temizler.
                </p>
                <p className="text-muted-foreground">
                  Geleneksel ağda yöntemlerinden farklı olarak daha yumuşak bir formüle sahiptir. Bu sayede en hassas
                  cilt tiplerine bile rahatlıkla uygulanabilir.
                </p>
                <p className="text-muted-foreground">
                  Düzenli ipek sir ağda uygulaması ile kıllar zamanla incelir ve seyrekleşir. Cilt pürüzsüz ve uzun süre
                  bakımlı kalır.
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
                { step: "1", title: "Hazırlık", desc: "Cilt temizliği ve hazırlama" },
                { step: "2", title: "Uygulama", desc: "İpek sir ağda uygulaması" },
                { step: "3", title: "Temizlik", desc: "Kalıntıların temizlenmesi" },
                { step: "4", title: "Bakım", desc: "Nemlendirme ve rahatlatma" },
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

      <Footer />
    </div>
  )
}
