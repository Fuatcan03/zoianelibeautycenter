import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CiltBakimiPage() {
  const services = [
    {
      title: "Klasik Cilt Bakımı",
      description: "Cilt tipinize özel derin temizlik ve bakım",
      features: ["Derin temizlik", "Peeling", "Maske uygulaması", "Nemlendirme"],
      slug: "klasik-cilt-bakimi",
    },
    {
      title: "Medikal Cilt Bakımı",
      description: "İleri teknoloji cihazlarla profesyonel bakım",
      features: ["Akne tedavisi", "Leke tedavisi", "Kırışıklık azaltma", "Gözenek sıkılaştırma"],
      slug: "medikal-cilt-bakimi",
    },
    {
      title: "Hydrafacial",
      description: "Son teknoloji ile cilt yenileme ve aydınlatma",
      features: ["Derin temizlik", "Ölü hücre temizleme", "Serum infüzyonu", "Anında sonuç"],
      slug: "hydrafacial",
    },
    {
      title: "Kimyasal Peeling",
      description: "Cilt yenileme ve leke giderme tedavisi",
      features: ["Leke azaltma", "Cilt tonu eşitleme", "Gözenek küçültme", "Yüz aydınlatma"],
      slug: "kimyasal-peeling",
    },
    {
      title: "Mesotherapy",
      description: "Cilde vitamin ve mineral desteği",
      features: ["Cilt yenileme", "Nem desteği", "Antiaging etki", "Parlaklık"],
      slug: "mesotherapy",
    },
    {
      title: "Oksijen Terapisi",
      description: "Cildi canlandıran oksijen tedavisi",
      features: ["Hücre yenileme", "Cilt canlanması", "Kırışıklık azaltma", "Sıkılaştırma"],
      slug: "oksijen-terapisi",
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
                Cilt Bakımı
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Cildinizin ihtiyacına özel profesyonel bakım hizmetleri ile doğal güzelliğinizi ortaya çıkarın
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={`/hizmetler/cilt-bakimi/${service.slug}`}>
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/professional-facial-skin-care-treatment-spa.jpg"
                alt="Cilt Bakımı"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Cildinize Özel Bakım</h2>
              <p className="text-muted-foreground mb-4">
                Her cilt tipi farklıdır ve özel bakım gerektirir. Uzman ekibimiz, cildinizin ihtiyaçlarını analiz ederek
                size en uygun bakım programını belirler.
              </p>
              <p className="text-muted-foreground">
                Premium ürünler ve son teknoloji cihazlarla sunduğumuz cilt bakımı hizmetlerimiz ile cildiniz sağlıklı,
                pürüzsüz ve parlak görünüme kavuşur.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
