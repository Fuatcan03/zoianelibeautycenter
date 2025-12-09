"use client"

import { X, Sparkles, Phone, MessageCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function PromotionBanner() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Blur Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Popup Card */}
      <div className="relative z-50 w-[90%] max-w-md bg-white rounded-3xl shadow-2xl p-6 text-center animate-in fade-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-3">
          <Image
            src="/logo.png"
            width={70}
            height={70}
            alt="Zoia Neli"
            className="rounded-full"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-primary flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
          %15 İndirim Fırsatı!
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-600">
          Tüm hizmetlerde geçerli özel indirim fırsatımız başladı.  
          Hemen randevu alarak avantajı yakalayın ♡
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-3">
          <Link
            href="https://wa.me/905428772277"
            className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-full font-medium hover:bg-green-600 transition"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp’tan Randevu Al
          </Link>

          <Link
            href="tel:+905428772277"
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-medium hover:bg-primary/90 transition"
          >
            <Phone className="w-5 h-5" />
            Telefonla Randevu Al
          </Link>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-4">
          Kampanya sınırlı süre için geçerlidir.
        </p>
      </div>
    </div>
  )
}
