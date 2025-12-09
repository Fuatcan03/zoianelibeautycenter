import { Card } from "@/components/ui/card"
import { Sparkles, Droplet, HandMetal, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    icon: Droplet,
    title: "Ağda Hizmetleri",
    description: "Tüm vücut ağda uygulamaları ile pürüzsüz bir cilde kavuşun. İpek sir ağda ve sıcak ağda seçenekleri.",
    image: "/professional-waxing-service.png",
    link: "/hizmetler/agda",
    price: "250₺'den başlayan fiyatlar",
  },
  {
    icon: Sparkles,
    title: "Cilt Bakımı",
    description:
      "Profesyonel cilt analizleri ve kişiye özel bakım programları ile cildinizi yenileyin. Hydrafacial ve klasik bakım.",
    image: "/luxury-facial-skincare-treatment.jpg",
    link: "/hizmetler/cilt-bakimi",
    price: "Özel fiyatlar için arayın",
  },
  {
    icon: HandMetal,
    title: "Tırnak Bakımı",
    description: "Manikür, pedikür, kalıcı oje ve protez tırnak uygulamaları ile bakımlı tırnaklara sahip olun.",
    image: "/professional-nail-care-manicure.jpg",
    link: "/hizmetler/tirnak-bakimi",
    price: "Detaylar için iletişime geçin",
  },
  {
    icon: Zap,
    title: "Lazer Epilasyon",
    description: "Son teknoloji lazer cihazları ile kalıcı tüy alma. Tüm vücut bölgeleri için güvenli ve etkili çözüm.",
    image: "/laser-hair-removal-treatment.jpg",
    link: "/hizmetler/lazer-epilasyon",
    price: "Profesyonel lazer teknolojisi",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance">
            Estetik İşlemlerimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Zoia Neli Beauty Center Güzellik Hizmetleri'nde en gelişmiş ve ihtiyaçlarınıza uygun etkili tedavi paketleri
            mevcuttur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={service.link} className="group">
                <Card className="overflow-hidden h-full hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 border-2 hover:border-primary bg-card">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-sm font-semibold text-primary">{service.price}</span>
                      <span className="text-sm text-primary font-medium group-hover:underline">Detaylı Bilgi →</span>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
