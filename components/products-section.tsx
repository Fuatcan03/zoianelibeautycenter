import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

const products = [
  {
    name: "Pharm Foot Luxury Touch – Perfumed Regenerating Illuminating Ointment",
    image: "/product-1.png",
  },
  {
    name: "Pharm Foot Luxury Touch – Perfumed Regenerating & Illuminating Ointment",
    image: "/product-2.png",
  },
  {
    name: "Victoria Vynn Spa Ritual – Milk & Cherry Blossom Butter",
    image: "/product-3.png",
  },
  {
    name: "Victoria Vynn Spa Ritual – Orange & Clove Butter",
    image: "/product-4.png",
  },
]

export function ProductsSection() {
  const whatsappBase = "https://wa.me/905428772277"

  const generateWhatsAppMessage = (product: any) => {
    const text =
      `Merhaba, bu ürünle ilgileniyorum:\n` +
      `Ürün: ${product.name}\n` +
      `Görsel: ${typeof window !== "undefined" ? window.location.origin + product.image : product.image}`
    return `${whatsappBase}?text=${encodeURIComponent(text)}`
  }

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-5">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 rounded-full shadow-sm">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Premium Ürünler</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground">
            Bakım Ürünlerimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Profesyonel bakım ürünlerimizi inceleyebilir ve WhatsApp üzerinden bilgi alabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/60 backdrop-blur-sm"
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-secondary to-primary/20">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transform hover:scale-110 transition-all duration-700"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground min-h-[56px]">
                  {product.name}
                </h3>

                <div className="pt-4 flex justify-between items-center border-t border-border/60">
                  <a
                    href={generateWhatsAppMessage(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Fiyat Sor →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4 text-lg">
            Ürünler hakkında tüm sorularınız için WhatsApp üzerinden bize ulaşabilirsiniz.
          </p>
          <a
            href="https://wa.me/905428772277"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg rounded-xl shadow-md hover:bg-primary/90 transition-colors"
            target="_blank"
          >
            <ShoppingBag className="w-6 h-6" />
            WhatsApp: 0542 877 22 77
          </a>
        </div>
      </div>
    </section>
  )
}
