"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Star } from "lucide-react"

const existingReviews = [
  {
    name: "Ayşe Yılmaz",
    rating: 5,
    comment: "Harika bir deneyimdi! Personel çok profesyonel ve ilgili. Kesinlikle tavsiye ederim.",
    date: "15 Aralık 2024",
  },
  {
    name: "Fatma Demir",
    rating: 5,
    comment: "Cilt bakımı hizmeti mükemmeldi. Cildin çok daha parlak ve sağlıklı görünüyor. Teşekkürler!",
    date: "10 Aralık 2024",
  },
  {
    name: "Zeynep Kaya",
    rating: 5,
    comment: "Ağda işlemi çok rahat geçti, hiç acımadı. Ekip çok deneyimli. Tekrar geleceğim.",
    date: "5 Aralık 2024",
  },
  {
    name: "Merve Arslan",
    rating: 5,
    comment: "Kalıcı makyaj için gittim, sonuç harika oldu! Çok doğal ve güzel görünüyor.",
    date: "1 Aralık 2024",
  },
]

export function ReviewSection() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Send email to naile_81@hotmail.com
    const emailData = {
      to: "naile_81@hotmail.com",
      subject: `Yeni Yorum - ${rating} Yıldız`,
      body: `İsim: ${name}\nPuan: ${rating}/5\nYorum: ${comment}\nTarih: ${new Date().toLocaleDateString("tr-TR")}`,
    }

    // Here you would normally send to an API endpoint
    console.log("[v0] Review submitted:", emailData)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    alert("Yorumunuz için teşekkürler! Değerlendirmeniz alındı ve en kısa sürede yayınlanacaktır.")

    setRating(0)
    setName("")
    setComment("")
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Müşteri Yorumları</h2>
          <p className="text-muted-foreground">Müşterilerimizin deneyimlerini okuyun ve siz de yorumunuzu paylaşın</p>
        </div>

        {/* Existing Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {existingReviews.map((review, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < review.rating ? "fill-accent text-accent" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{review.comment}</p>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-sm text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Review Form */}
        <Card className="p-8 bg-card border-border max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Yorumunuzu Paylaşın</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Puanınız</label>
              <div className="flex gap-2 justify-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-10 h-10 ${
                        star <= (hoverRating || rating) ? "fill-accent text-accent" : "text-muted"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="review-name" className="block text-sm font-medium text-foreground mb-2">
                Adınız
              </label>
              <Input
                id="review-name"
                type="text"
                placeholder="Adınız Soyadınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background"
              />
            </div>

            <div>
              <label htmlFor="review-comment" className="block text-sm font-medium text-foreground mb-2">
                Yorumunuz
              </label>
              <Textarea
                id="review-comment"
                placeholder="Deneyiminizi bizimle paylaşın..."
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                className="bg-background resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={rating === 0 || isSubmitting}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              {isSubmitting ? "Gönderiliyor..." : "Yorum Gönder"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
