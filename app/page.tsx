import type { Metadata } from "next"
import { HeroSlider } from "@/components/hero-slider"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ReviewSection } from "@/components/review-section"
import { StatsSection } from "@/components/stats-section"
import { PromotionBanner } from "@/components/promotion-banner"

export const metadata: Metadata = {
  title: "Zoia Neli Beauty Center | Lefkoşa Güzellik Merkezi",
  description:
    "Zoia Neli Beauty Center'da ağda, cilt bakımı, tırnak bakımı ve kalıcı makyaj hizmetleri. Lefkoşa'nın en iyi güzellik salonu. Profesyonel ekip, hijyenik ortam, uygun fiyatlar.",
  keywords:
    "güzellik merkezi lefkoşa, ağda lefkoşa, cilt bakımı kıbrıs, tırnak bakımı, kalıcı makyaj, zoia neli, beauty center nicosia",
  openGraph: {
    title: "Zoia Neli Beauty Center | Lefkoşa Güzellik Merkezi",
    description: "Profesyonel güzellik hizmetleri ile yanınızdayız. %15 indirim fırsatı!",
    type: "website",
    locale: "tr_TR",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PromotionBanner />

      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <HeroSlider />
        </div>
      </section>

      <ServicesSection />

      <ProductsSection />

      <StatsSection />
      <ReviewSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
