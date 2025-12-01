"use client"

import { Card } from "@/components/ui/card"
import { Clock, Users, Award, Sparkles } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Esnek Çalışma Saatleri",
    description: "Hafta içi ve hafta sonu size uygun saatlerde hizmetinizdeyiz.",
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description: "Sertifikalı ve deneyimli güzellik uzmanlarımızla hizmetinizdeyiz.",
  },
  {
    icon: Award,
    title: "Premium Ürünler",
    description: "Dünya markası kozmetik ürünler ve en son teknoloji cihazlar.",
  },
  {
    icon: Sparkles,
    title: "Kişiye Özel Bakım",
    description: "Cilt tipinize ve ihtiyaçlarınıza özel bakım programları.",
  },
]

export function HelpSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="yardim" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Size Nasıl Yardımcı Olabiliriz?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Güzelliğiniz ve rahatlığınız için buradayız. Kişiye özel bakım programları oluşturuyor, doğal ve kalıcı
              sonuçlar için en iyi ürün ve teknikleri kullanıyoruz. Kendinizi şımartmak için ihtiyacınız olan her şey
              bir arada.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative">
            <Card className="p-8 bg-card border-border shadow-xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">Kaliteli Hizmet</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    En iyi ürünler ve uzman ellerde profesyonel bakım hizmetleri
                  </p>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden bg-secondary">
                  <img
                    src="/woman-receiving-facial-treatment-spa.jpg"
                    alt="Yüz bakımı"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">3000+</div>
                    <div className="text-sm text-muted-foreground">Mutlu Müşteri</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Uzman Ekip</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">99%</div>
                    <div className="text-sm text-muted-foreground">Memnuniyet</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
