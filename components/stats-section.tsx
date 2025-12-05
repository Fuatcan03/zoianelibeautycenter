"use client"

import { Award, Users, Star, Clock } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  {
    icon: Users,
    value: 5000,
    label: "Mutlu Müşteri",
    suffix: "+",
  },
  {
    icon: Clock,
    value: 10,
    label: "Yıllık Deneyim",
    suffix: "+",
  },
  {
    icon: Star,
    value: 4.9,
    label: "Müşteri Memnuniyeti",
    suffix: "/5",
  },
  {
    icon: Award,
    value: 100,
    label: "Profesyonel Hizmet",
    suffix: "%",
  },
]

function CountUp({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)
            const currentCount = progress * end
            setCount(currentCount)
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          animate()
        }
      },
      { threshold: 0.5 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={countRef}>
      {end < 10 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-2xl border border-border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
