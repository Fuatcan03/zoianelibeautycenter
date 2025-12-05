"use client"

import { Sparkles, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function PromotionBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground py-3 px-4 shadow-lg animate-in slide-in-from-top duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 justify-center">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <p className="text-sm sm:text-base font-semibold text-center">
            Tüm Hizmetlerimizde <span className="font-bold underline">%15 İNDİRİM</span> Fırsatı! Hemen Randevu Alın
          </p>
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <Link
          href="tel:+905428772277"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-full font-semibold hover:bg-primary-foreground/90 transition-all hover:scale-105"
        >
          0542 877 22 77
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
