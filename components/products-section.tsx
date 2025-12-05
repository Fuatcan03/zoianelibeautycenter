import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

const products = [
  {
    name: "Tüy Dökücü Krem",
    description: "Hassas ciltler için özel formül tüy dökücü krem",
    price: "150₺",
    image: "/hair-removal-cream-product.jpg",
  },
  {
    name: "Ağda Sonrası Bakım Losyonu",
    description: "Ağda sonrası cildi yatıştıran ve nemlendiren losyon",
    price: "120₺",
    image: "/after-wax-care-lotion.jpg",
  },
  {
    name: "Cilt Bakım Serumu",
    description: "Yoğun nemlendirici ve yaşlanma karşıtı serum",
    price: "200₺",
    image: "/luxury-skincare-serum.jpg",
  },
  {
    name: "Tırnak Güçlendirici",
    description: "Kırılgan tırnaklar için özel güçlendirici formül",
    price: "100₺",
    image: "/nail-strengthener-product.jpg",
  },
]

export function ProductsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Premium Ürünler</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance">
            Bakım Ürünlerimiz
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ev bakımınızı tamamlayacak, dermatoloji onaylı premium ürünlerimizi keşfedin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 duration-300">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-secondary to-primary/10">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <a href="tel:+905428772277" className="text-sm text-primary font-medium hover:underline">
                    Bilgi Al →
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ürünlerimiz hakkında detaylı bilgi almak ve sipariş vermek için bizi arayın
          </p>
          <a
            href="tel:+905428772277"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            0542 877 22 77
          </a>
        </div>
      </div>
    </section>
  )
}
