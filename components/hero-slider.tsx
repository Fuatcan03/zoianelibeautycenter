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
    badge: "%15 İndirim",
  },
  {
    image: "/luxury-facial-skincare-treatment.jpg",
    title: "Cilt Bakımı",
    description: "Cildinizi yenileyen profesyonel bakım programları",
    link: "/hizmetler/cilt-bakimi",
    badge: "Özel Fiyatlar",
  },
  {
    image: "/professional-nail-care-manicure.jpg",
    title: "Tırnak Bakımı",
    description: "Manikür, pedikür ve kalıcı oje uygulamaları",
    link: "/hizmetler/tirnak-bakimi",
    badge: "Randevu Alın",
  },
  {
    image: "/laser-hair-removal-body.jpg",
    title: "Lazer Epilasyon",
    description:
      "İstenmeyen tüylerden kalıcı olarak kurtulun. Son teknoloji lazer cihazlarıyla etkili uygulama.",
    link: "/hizmetler/lazer-epilasyon",
    badge: "Uzman Kadro",
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

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-[420px] sm:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover scale-105 group-hover:scale-110 transition-all duration-[2s]"
            priority={index === 0}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/20"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-16 lg:px-24 max-w-3xl">
            <span className="inline-flex w-fit items-center px-4 py-2 mb-4 text-sm font-bold text-white bg-primary/90 backdrop-blur-md rounded-full shadow-lg animate-in fade-in slide-in-from-left duration-700">
              {slide.badge}
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white drop-shadow-xl mb-4 animate-in fade-in slide-in-from-left duration-700 delay-100">
              {slide.title}
            </h2>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl animate-in fade-in slide-in-from-left duration-700 delay-200">
              {slide.description}
            </p>

            <Link href={slide.link}>
              <Button className="px-6 py-3 text-lg bg-primary hover:bg-primary/90 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-in fade-in slide-in-from-left duration-700 delay-300">
                Detaylı Bilgi
              </Button>
            </Link>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bottom-8 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/15 hover:bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center transition-all shadow-lg"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 bottom-8 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/15 hover:bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center transition-all shadow-lg"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 w-3"
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}