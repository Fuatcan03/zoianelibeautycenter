"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "905428772277" // 05428772277
  const message = encodeURIComponent("Merhaba! Randevu almak istiyorum.")

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow group"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
    </a>
  )
}
