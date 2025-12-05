import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-secondary/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-2">ZOIA NELI</h3>
            <p className="text-sm text-primary font-medium mb-4">BEAUTY CENTER</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Güzelliğinize değer katıyoruz. Profesyonel ekibimiz ve kaliteli hizmetimizle yanınızdayız.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/agda"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Ağda Hizmetleri
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/cilt-bakimi"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cilt Bakımı
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+905428772277" className="hover:text-primary transition-colors">
                  0542 877 22 77
                </a>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:naile_81@hotmail.com" className="hover:text-primary transition-colors">
                  naile_81@hotmail.com
                </a>
              </li>
              <li className="flex gap-2 text-sm text-muted-foreground">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/zoianelibeauty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @zoianelibeauty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Adres & Çalışma Saatleri</h4>
            <div className="space-y-3">
              <div className="flex gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Mehmet Ahmet cad, Blok 5 Dükkan C<br />
                  Aydemet Mahallesi
                  <br />
                  Lefkoşa, Nicosia, Cyprus
                </p>
              </div>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Pazartesi - Cumartesi</p>
                  <p>09:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2025 Zoia Neli Beauty Center. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              KVKK
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
