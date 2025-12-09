"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Mesajınız alındı! En kısa sürede size dönüş yapacağız.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-3">
            İletişime Geçin
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Randevu almak veya sorularınız için bize ulaşabilirsiniz.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="p-10 bg-card border-border/50 shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-8">Mesaj Gönderin</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                placeholder="Adınız ve Soyadınız"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  type="tel"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />

                <Input
                  type="email"
                  placeholder="E-posta"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <Textarea
                placeholder="Mesajınız..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />

              <Button type="submit" size="lg" className="w-full text-lg font-semibold">
                Mesaj Gönder
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            
            {/* TELEFON */}
            <Card className="p-6 bg-card shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Telefon</h3>
                  <a href="tel:+905428772277" className="text-primary font-medium text-lg">
                    0542 877 22 77
                  </a>
                  <p className="text-sm text-muted-foreground">Hemen arayın</p>
                </div>
              </div>
            </Card>

            {/* INSTAGRAM */}
            <Card className="p-6 bg-card shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/zoianelibeauty/"
                    target="_blank"
                    className="text-primary font-medium text-lg"
                  >
                    @zoianelibeauty
                  </a>
                </div>
              </div>
            </Card>

            {/* EMAIL */}
            <Card className="p-6 bg-card shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">E-posta</h3>
                  <a href="mailto:naile_81@hotmail.com" className="text-primary font-medium">
                    naile_81@hotmail.com
                  </a>
                </div>
              </div>
            </Card>

            {/* ADDRESS */}
            <Card className="p-6 bg-card shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Adres</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Mehmet Ahmet cad, Blok 5 Dükkan C  
                    <br />Aydemet Mahallesi  
                    <br />Lefkoşa, Cyprus
                  </p>

                  <a
                    href="https://maps.app.goo.gl/su4W3ELMDWzu56xR7"
                    target="_blank"
                    className="text-primary font-medium text-sm mt-2 inline-flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" /> Yol Tarifi Al
                  </a>
                </div>
              </div>
            </Card>

            {/* HOURS */}
            <Card className="p-6 bg-card shadow-md">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Çalışma Saatleri</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">09:00 – 20:00</strong>
                    <br />Pazartesi – Cumartesi
                    <br />Pazar: Kapalı
                  </p>
                </div>
              </div>
            </Card>

          </div>

        </div>

        {/* MAP */}
        <Card className="p-6 mt-16 shadow-xl bg-card">
          <h2 className="text-2xl font-bold mb-6">Konumumuz</h2>
          
       <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3099.3601539049955!2d33.323147275568616!3d35.189111072750045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de11005f2f5b3f%3A0x6ec0de6bcb976c3b!2sZoia%20Neli!5e0!3m2!1str!2s!4v1765273645134!5m2!1str!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>


        </Card>

      </div>
    </section>
  )
}
