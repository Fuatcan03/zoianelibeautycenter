import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ReviewSection } from "@/components/review-section"
import { Card } from "@/components/ui/card"
import { Award, Heart, Shield, Users } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Hakkımızda | Zoia Neli Beauty Center",
  description:
    "Zoia Neli Beauty Center olarak 10+ yıllık deneyimimizle Lefkoşa'da profesyonel güzellik hizmetleri sunuyoruz. Uzman kadromuz ve premium hizmetlerimizle yanınızdayız.",
  keywords: "hakkımızda, zoia neli, güzellik merkezi, lefkoşa, profesyonel ekip, deneyim",
}

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
              Hakkımızda
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Güzelliğinize değer katan, profesyonel hizmet anlayışıyla yanınızdayız
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/elegant-beauty-salon-interior-with-sage-green-acce.jpg"
                alt="Zoia Neli Beauty Center"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Zoia Neli Beauty Center</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lefkoşa'nın kalbinde, modern ve hijyenik tesisimizde sizlere en kaliteli güzellik hizmetlerini sunmak
                için çalışıyoruz. 10 yılı aşkın deneyimimizle, her gün yüzlerce müşterimizin güzelliğine değer katıyor,
                onların kendilerini daha iyi hissetmelerini sağlıyoruz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Uzman kadromuz, sürekli kendini geliştiren ve sektördeki en son teknikleri takip eden profesyonellerden
                oluşmaktadır. Müşteri memnuniyeti bizim için en önemli önceliktir ve her müşterimize özel,
                kişiselleştirilmiş hizmet sunmayı ilke edindik.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ağda, cilt bakımı, tırnak bakımı ve kalıcı makyaj gibi geniş hizmet yelpazemizle, güzelliğinizin her
                alanında yanınızdayız. Premium ürünler ve hijyenik ortamımızla, size en iyi deneyimi yaşatmak için
                buradayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Değerlerimiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Güvenilirlik</h3>
              <p className="text-muted-foreground text-sm">
                Hijyen standartlarımız ve kaliteli hizmetimizle güvenilir bir ortam sunuyoruz
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Müşteri Odaklı</h3>
              <p className="text-muted-foreground text-sm">
                Her müşterimize özel yaklaşım ve kişiselleştirilmiş hizmet anlayışı
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Profesyonellik</h3>
              <p className="text-muted-foreground text-sm">
                Alanında uzman, deneyimli ve sürekli gelişen kadromuzla hizmet veriyoruz
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Topluluk</h3>
              <p className="text-muted-foreground text-sm">
                5000+ mutlu müşterimizle büyüyen bir güzellik topluluğuyuz
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Neden Bizi Seçmelisiniz?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">10+ Yıllık Deneyim</h3>
              <p className="text-muted-foreground">
                Sektördeki uzun yıllarımızla edindiğimiz tecrübe ve bilgi birikimimizi sizinle paylaşıyoruz.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">Premium Ürünler</h3>
              <p className="text-muted-foreground">
                Sadece en kaliteli, güvenilir ve dermatolog onaylı ürünlerle çalışıyoruz.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">Hijyenik Ortam</h3>
              <p className="text-muted-foreground">
                Tek kullanımlık malzemeler ve sterilizasyon protokollerimizle %100 hijyenik hizmet sunuyoruz.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">Uzman Kadro</h3>
              <p className="text-muted-foreground">
                Alanında uzman, sertifikalı ve sürekli eğitim alan profesyonel ekibimiz hizmetinizde.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">Modern Teknoloji</h3>
              <p className="text-muted-foreground">
                En son teknoloji cihazlar ve yöntemlerle size en iyi sonuçları sunuyoruz.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">Uygun Fiyatlar</h3>
              <p className="text-muted-foreground">
                Kaliteden ödün vermeden, uygun fiyatlarla hizmet sunuyor ve özel kampanyalar düzenliyoruz.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ReviewSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
