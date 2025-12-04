import { Card } from "@/components/ui/card"
import { Sparkles, HandMetal, Droplet, Flower2, Scissors, Smile } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Cilt Bakımı",
    description: "Profesyonel cilt analizleri ve kişiye özel bakım programları ile cildinizi yenileyin.",
  },
  {
    icon: HandMetal,
    title: "Tırnak Bakımı",
    description: "Manikür, pedikür ve kalıcı oje uygulamaları ile bakımlı tırnaklara sahip olun.",
  },
  {
    icon: Droplet,
    title: "Ağda & Epilasyon",
    description: "Ağrısız ağda ve lazer epilasyon ile uzun süre etkili çözümler.",
  },
  {
    icon: Flower2,
    title: "Masaj & Spa",
    description: "Rahatlatıcı masajlar ve spa terapileriyle stresinizi atın.",
  },
  {
    icon: Scissors,
    title: "Saç & Kaş Tasarımı",
    description: "Kaş tasarımı ve kirpik laminasyonu ile doğal güzelliğinizi öne çıkarın.",
  },
  {
    icon: Smile,
    title: "Yüz Bakımı",
    description: "Derin temizlik, peeling ve maske uygulamaları ile canlı bir cilt.",
  },
]

export function ServicesSection() {
  return (
    <section id="hizmetlerimiz" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Güzellik Hizmetlerimiz</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Size özel bakım deneyimleri ile güzelliğinizi keşfedin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border-border bg-card group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-wiggle">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
