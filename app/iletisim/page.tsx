import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactPageContent } from "@/components/contact-page-content"
import { ReviewSection } from "@/components/review-section"

export const metadata: Metadata = {
  title: "İletişim | Zoia Neli Beauty Center",
  description:
    "Zoia Neli Beauty Center ile iletişime geçin. Randevu almak için bizi arayın: 0542 877 22 77. Aydemet Mahallesi, Lefkoşa, Kıbrıs",
  keywords: "iletişim, randevu, zoia neli, lefkoşa güzellik salonu, beauty center iletişim",
}

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactPageContent />
      <ReviewSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
