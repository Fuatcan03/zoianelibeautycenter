import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TirnakBakimiPage() {
  const services = [
    {
      title: "Klasik Manikür",
      description: "Tırnak bakımı, şekillendirme ve oje uygulaması",
      features: ["Tırnak temizliği", "Şekillendirme", "Oje uygulaması", "El masajı"],
      slug: "klasik-manikur",
    },
    {
      title: "Kalıcı Oje",
      description: "3 hafta bozulmadan kalan kalıcı oje uygulaması",
      features: ["Uzun ömürlü", "Parlak görünüm", "Geniş renk seçeneği", "Profesyonel uygulama"],
      slug: "kalici-oje",
    },
    {
      title: "Protez Tırnak",
      description: "Doğal görünümlü uzun tırnak uygulaması",
      features: ["Doğal görünüm", "Dayanıklı yapı", "İstenilen uzunluk", "Özel tasarımlar"],
      slug: "protez-tirnak",
    },
    {
      title: "Nail Art",
      description: "Tırnak süsleme ve özel tasarımlar",
      features: ["Özel desenler", "Taş süsleme", "Ombre tekniği", "French manikür"],
      slug: "nail-art",
    },
    {
      title: "Pedikür",
      description: "Ayak bakımı ve tırnak bakımı hizmeti",
      features: ["Ayak banyosu", "Tırnak bakımı", "Cilt bakımı", "Ayak masajı"],
      slug: "pedikur",
    },
    {
      title: "Tırnak Bakımı",
      description: "Tırnak sağlığı ve güçlendirme tedavileri",
      features: ["Kırık önleme", "Güçlendirme", "Nem bakımı", "Onarım tedavisi"],
      slug: "tirnak-bakimi",
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
                Tırnak Bakımı
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Profesyonel tırnak bakımı hizmetlerimizle elleriniz ve ayaklarınız her zaman bakımlı görünsün
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={`/hizmetler/tirnak-bakimi/${service.slug}`}>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Profesyonel Tırnak Bakımı</h2>
              <p className="text-muted-foreground mb-4">
                En son teknikler ve kaliteli ürünler kullanarak tırnaklarınıza özel bakım sunuyoruz. Hijyen ve müşteri
                memnuniyeti bizim önceliğimizdir.
              </p>
              <p className="text-muted-foreground">
                Deneyimli uzman kadromuz, her müşterimize özel yaklaşım ile tırnak sağlığınızı koruyarak estetik ve şık
                bir görünüm sağlar.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/professional-nail-care-manicure-salon.jpg"
                alt="Tırnak Bakımı"
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
