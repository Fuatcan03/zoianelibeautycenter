import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-secondary/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Zoia Neli <span className="text-primary">Beauty</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Güzelliğinize değer katıyoruz. Profesyonel ekibimiz ve kaliteli hizmetimizle yanınızdayız.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <a href="#giris" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Giriş
                </a>
              </li>
              <li>
                <a href="#hizmetlerimiz" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#yardim" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Nasıl Yardımcı Olabiliriz
                </a>
              </li>
              <li>
                <a href="#iletisim" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Yasal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  KVKK Aydınlatma Metni
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © 2025 Zoia Neli Beauty. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Güzelliğiniz için <Sparkles className="w-4 h-4 text-primary" /> ile yapıldı
          </p>
        </div>
      </div>
    </footer>
  )
}
