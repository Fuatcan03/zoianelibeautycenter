import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ReviewSection } from "@/components/review-section"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Zap, Shield, Star, TrendingDown } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Lazer Epilasyon | Zoia Neli Beauty Center - Kalıcı Tüy Alma",
  description:
    "Lazer epilasyon ile kalıcı tüy alma çözümü. Ağrısız, güvenli ve etkili lazer epilasyon uygulamaları. Tüm vücut bölgeleri için profesyonel hizmet. Lefkoşa, Kıbrıs.",
  keywords:
    "lazer epilasyon, kalıcı tüy alma, lazer tüy alma, ağrısız epilasyon, alexandrite lazer, diode lazer, lefkoşa lazer epilasyon, kıbrıs lazer epilasyon",
}

export default function LazerEpilasyonPage() {
  const bodyAreas = [
    {
      title: "Bacaklar",
      description: "Tam bacak veya yarım bacak lazer epilasyon",
      areas: ["Tam Bacak", "Yarım Bacak", "Uyluk", "Baldır"],
      duration: "30-60 dakika",
      image: "/laser-hair-removal-legs.jpg",
    },
    {
      title: "Kollar",
      description: "Tam kol veya yarım kol lazer epilasyon",
      areas: ["Tam Kol", "Yarım Kol", "Koltuk Altı", "Parmaklar"],
      duration: "20-40 dakika",
      image: "/laser-hair-removal-arms.jpg",
    },
    {
      title: "Yüz Bölgesi",
      description: "Yüz bölgesi hassas lazer uygulaması",
      areas: ["Bıyık Üstü", "Çene", "Yanak", "Alın"],
      duration: "15-30 dakika",
      image: "/laser-hair-removal-face.jpg",
    },
    {
      title: "Vücut",
      description: "Vücut bölgesi lazer epilasyon",
      areas: ["Göbek", "Sırt", "Göğüs", "Özel Bölge"],
      duration: "20-45 dakika",
      image: "/laser-hair-removal-body.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Yeni Nesil Teknoloji
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Lazer Epilasyon
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              İstenmeyen tüylerden kalıcı olarak kurtulun. Son teknoloji lazer cihazlarımızla güvenli, etkili ve ağrısız
              epilasyon deneyimi.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Lazer Epilasyon Avantajları</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-2 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Kalıcı Sonuç</h3>
                <p className="text-muted-foreground">
                  6-8 seans sonunda tüylerden %90'a varan oranda kalıcı olarak kurtulun.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Güvenli & Onaylı</h3>
                <p className="text-muted-foreground">
                  FDA onaylı cihazlar ve deneyimli uzman kadromuzla güvenli uygulama garantisi.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <TrendingDown className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Ağrısız İşlem</h3>
                <p className="text-muted-foreground">Soğutma sistemi sayesinde minimal rahatsızlık, maksimum konfor.</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Hızlı Uygulama</h3>
                <p className="text-muted-foreground">Geniş atış başlığı ile kısa sürede geniş alanlar işlem görür.</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Tüm Cilt Tipleri</h3>
                <p className="text-muted-foreground">Açık tenden koyu tene kadar tüm cilt tiplerine uygun teknoloji.</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 hover:border-primary transition-colors">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Yan Etki Yok</h3>
                <p className="text-muted-foreground">Doğru uygulama ile ciltte kalıcı hasar veya iz bırakmaz.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Body Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Uygulama Bölgeleri</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vücudun tüm bölgelerine profesyonel lazer epilasyon uyguluyoruz
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {bodyAreas.map((area, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={area.image || `/placeholder.svg?height=300&width=400&query=${area.title} lazer epilasyon`}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-white mb-1">{area.title}</h3>
                    <p className="text-white/80 text-sm">{area.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Süre: {area.duration}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {area.areas.map((subArea, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{subArea}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Uygulama Süreci</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Konsültasyon",
                desc: "Cilt tipi analizi ve bilgilendirme",
              },
              {
                step: "2",
                title: "Tıraş",
                desc: "Uygulama öncesi tüylerin tıraşlanması",
              },
              {
                step: "3",
                title: "Hazırlık",
                desc: "Bölgenin temizlenmesi ve hazırlanması",
              },
              {
                step: "4",
                title: "Lazer Uygulama",
                desc: "Profesyonel lazer epilasyon işlemi",
              },
              {
                step: "5",
                title: "Bakım",
                desc: "İşlem sonrası soğutma ve bakım",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Sık Sorulan Sorular</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Kaç seans gerekir?</h3>
              <p className="text-muted-foreground">
                Ortalama 6-8 seans önerilir. Tüy yapısı, cilt tipi ve uygulama bölgesine göre değişkenlik gösterebilir.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Ağrılı mı?</h3>
              <p className="text-muted-foreground">
                Soğutma sistemi sayesinde minimal rahatsızlık hissedilir. Çoğu kişi hafif bir sıcaklık hissi tarif eder.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Seanslar arası süre ne kadar?</h3>
              <p className="text-muted-foreground">
                Seanslar arasında 4-6 hafta beklenir. Tüy döngüsüne uygun olarak planlanır.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Hangi mevsimde yapılır?</h3>
              <p className="text-muted-foreground">
                Dört mevsim uygulanabilir. Ancak yaz aylarında güneşten korunma daha önemlidir.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Yan etkisi var mı?</h3>
              <p className="text-muted-foreground">
                Geçici kızarıklık ve hafif şişlik normal reaksiyonlardır, birkaç saat içinde geçer.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 items-start bg-accent/10 p-6 rounded-xl">
            <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">İşlem Öncesi Dikkat Edilmesi Gerekenler</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• İşlemden 1 gün önce bölgeyi tıraş edin (ağda veya pinset kullanmayın)</li>
                <li>• İşlemden 2 hafta önce güneşlenmeyin ve solaryuma girmeyin</li>
                <li>• İşlem günü bölgeye krem, deodorant veya parfüm sürmeyin</li>
                <li>• İşlemden sonra 48 saat sıcak duş, sauna ve hamam'dan kaçının</li>
                <li>• İşlem sonrası 2 hafta güneşten koruyucu krem kullanın</li>
                <li>• Hamilelik ve emzirme döneminde uygulanmaz</li>
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
