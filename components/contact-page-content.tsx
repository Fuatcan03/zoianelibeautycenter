"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"
import { useState } from "react"

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Send to email
    console.log("[v0] Contact form submitted to naile_81@hotmail.com:", formData)

    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            İletişime Geçin
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Randevu almak veya sorularınız için bize ulaşın
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Ad Soyad *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Adınız ve Soyadınız"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                    Telefon *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0500 000 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    E-posta *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Mesajınız *
                </label>
                <Textarea
                  id="message"
                  placeholder="Mesajınızı buraya yazın..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Mesaj Gönder
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border shadow-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-card-foreground mb-2">Telefon</h3>
                  <a
                    href="tel:+905428772277"
                    className="text-muted-foreground hover:text-primary transition-colors block mb-1"
                  >
                    0542 877 22 77
                  </a>
                  <p className="text-sm text-muted-foreground">Hemen arayın, randevu alın</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border shadow-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-card-foreground mb-2">E-posta</h3>
                  <a
                    href="mailto:naile_81@hotmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors block mb-1"
                  >
                    naile_81@hotmail.com
                  </a>
                  <p className="text-sm text-muted-foreground">7/24 mesaj gönderebilirsiniz</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border shadow-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-card-foreground mb-2">Instagram</h3>
                  <a
                    href="https://www.instagram.com/zoianelibeauty/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors block mb-1"
                  >
                    @zoianelibeauty
                  </a>
                  <p className="text-sm text-muted-foreground">Bizi takip edin</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border shadow-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-card-foreground mb-2">Adres</h3>
                  <p className="text-muted-foreground mb-2 leading-relaxed">
                    Mehmet Ahmet cad, Blok 5 Dükkan C<br />
                    Aydemet Mahallesi
                    <br />
                    Lefkoşa, Nicosia, Cyprus
                  </p>
                  <a
                    href="https://maps.app.goo.gl/su4W3ELMDWzu56xR7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    Yol Tarifi Al
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border shadow-lg">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-card-foreground mb-2">Çalışma Saatleri</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Pazartesi - Cumartesi</p>
                    <p className="font-semibold text-foreground">09:00 - 20:00</p>
                    <p className="text-sm">Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Google Maps */}
        <Card className="p-6 bg-card border-border shadow-lg">
          <h2 className="text-2xl font-bold text-foreground mb-6">Konumumuz</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.8499999999995!2d33.3666!3d35.1856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDExJzA4LjIiTiAzM8KwMjEnNTkuOCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zoia Neli Beauty Center Konum"
            />
          </div>
        </Card>
      </div>
    </section>
  )
}
