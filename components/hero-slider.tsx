"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const slides = [
  {
    image: "/professional-waxing-service.png",
    title: "Ağda Hizmetleri",
    description: "Pürüzsüz ve bakımlı cilt için profesyonel ağda hizmetleri",
    link: "/hizmetler/agda",
    discount: "%15 İndirim",
  },
  {
    image: "/luxury-facial-skincare-treatment.jpg",
    title: "Cilt Bakımı",
    description: "Cildinizi yenileyen profesyonel bakım programları",
    link: "/hizmetler/cilt-bakimi",
    discount: "Özel Fiyatlar",
  },
  {
    image: "/professional-nail-care-manicure.jpg",
    title: "Tırnak Bakımı",
    description: "Manikür, pedikür ve kalıcı oje uygulamaları",
    link: "/hizmetler/tirnak-bakimi",
    discount: "Randevu Alın",
  },
  {
    image: "/permanent-makeup-eyebrow-microblading.jpg",
    title: "Kalıcı Makyaj",
    description: "Doğal güzelliğinizi ön plana çıkaran kalıcı makyaj",
    link: "/hizmetler/kalici-makyaj",
    discount: "Uzman Kadro",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 lg:px-24 max-w-3xl">
            <div className="inline-flex w-fit items-center gap-2 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full mb-4 animate-in fade-in slide-in-from-left duration-700">
              <span className="text-sm font-bold text-white">{slide.discount}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 animate-in fade-in slide-in-from-left duration-700 delay-100">
              {slide.title}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 animate-in fade-in slide-in-from-left duration-700 delay-200">
              {slide.description}
            </p>
            <Link href={slide.link} className="w-fit">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-in fade-in slide-in-from-left duration-700 delay-300"
              >
                Detaylı Bilgi
              </Button>
            </Link>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
