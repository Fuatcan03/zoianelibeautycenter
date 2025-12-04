import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowLeft, Clock, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PedikurPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/hizmetler/tirnak-bakimi">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tırnak Bakımı Hizmetleri
            </Button>
          </Link>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/pedikur-ayak-bakimi.jpg" alt="Pedikür" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Pedikür</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Kapsamlı ayak bakımı ve tırnak bakımı hizmeti ile rahat ve bakımlı ayaklar
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">60-75 dakika</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-xl font-bold text-primary">400 ₺</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hizmet İçeriği</h2>
              <ul className="space-y-3">
                {[
                  "Ayak banyosu ve ıslatma",
                  "Nasır ve ölü deri temizliği",
                  "Tırnak kesimi ve şekillendirme",
                  "Kütiküla bakımı",
                  "Törpüleme ve düzeltme",
                  "Peeling ve scrub",
                  "Ayak masajı",
                  "Nemlendirme ve oje uygulaması",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ek Hizmetler</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Kalıcı Oje ile Pedikür</span>
                  <span className="font-bold text-primary">550 ₺</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-foreground">Parafin Maskesi</span>
                  <span className="font-bold text-primary">+100 ₺</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">SPA Pedikür (Özel Maskeler)</span>
                  <span className="font-bold text-primary">600 ₺</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Faydaları</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Ayak sağlığını korur",
                  "Nasır ve batık tırnak önler",
                  "Cildi yumuşatır",
                  "Kan dolaşımını artırır",
                  "Rahatlatıcı etki",
                  "Hijyenik ve temiz ayaklar",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
