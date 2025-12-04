import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AgdaPage() {
  const services = [
    {
      title: "İpek Sir Ağda",
      description: "Hassas ciltler için özel ipek ağda uygulaması",
      features: ["Acısız uygulama", "Hassas ciltlere uygun", "Uzun süreli etki", "Cilt tahrişi yapmaz"],
      slug: "ipek-sir-agda",
    },
    {
      title: "Sıcak Ağda",
      description: "Geleneksel yöntemle etkili kıl temizliği",
      features: ["Tüm bölgelere uygun", "Etkili temizlik", "Ekonomik seçenek", "Doğal ürünler"],
      slug: "sicak-agda",
    },
    {
      title: "Tüy Dökücü Krem",
      description: "Ağrısız kıl temizliği alternatifi",
      features: ["Acısız", "Hızlı uygulama", "Pratik çözüm", "Hassas ciltlere uygun"],
      slug: "tuy-dokucu-krem",
    },
    {
      title: "Tam Bacak Ağda",
      description: "Tam bacak bölgesi kıl temizliği",
      features: ["Uzman uygulama", "Hijyenik ortam", "Pürüzsüz sonuç", "Uzun ömürlü"],
      slug: "tam-bacak-agda",
    },
    {
      title: "Kol Ağda",
      description: "Kol bölgesi kıl temizliği",
      features: ["Hızlı işlem", "Etkili sonuç", "Cildi tahriş etmez", "Bakımlı görünüm"],
      slug: "kol-agda",
    },
    {
      title: "Yüz Ağda",
      description: "Yüz bölgesi hassas kıl temizliği",
      features: ["Özel teknik", "Hassas uygulama", "Cilt dostu", "Profesyonel sonuç"],
      slug: "yuz-agda",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-secondary to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Ağda ve Epilasyon
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Profesyonel ağda ve epilasyon hizmetlerimizle pürüzsüz ve bakımlı bir cilde kavuşun
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={`/hizmetler/agda/${service.slug}`}>
                <Card className="border-border hover:shadow-lg transition-all h-full hover:scale-105 cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Image Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Pürüzsüz Cilt İçin</h2>
              <p className="text-muted-foreground mb-4">
                Uzman kadromuz ve kaliteli ürünlerimizle ağda ve epilasyon hizmetlerimizi hijyenik ortamda sunuyoruz.
                Minimum ağrı ile maksimum sonuç hedefliyoruz.
              </p>
              <p className="text-muted-foreground">
                İpek sir ağda, sıcak ağda ve diğer tüm kıl temizliği yöntemlerinde deneyimli ekibimizle hizmet
                veriyoruz. Tek kullanımlık malzemeler ve hijyen kurallarına azami dikkat ediyoruz.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/professional-waxing-hair-removal-beauty-salon.jpg"
                alt="Ağda ve Epilasyon"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
