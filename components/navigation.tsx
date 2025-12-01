"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-semibold text-primary">
              Zoia Neli <span className="text-foreground">Beauty</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("giris")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Giriş
            </button>

            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Hizmetlerimiz
                <ChevronDown className="h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg py-2 z-50">
                  <Link
                    href="/hizmetler/tirnak-bakimi"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    Tırnak Bakımı
                  </Link>
                  <Link
                    href="/hizmetler/cilt-bakimi"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    Cilt Bakımı
                  </Link>
                  <Link
                    href="/hizmetler/agda"
                    className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    Ağda
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("yardim")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Nasıl Yardımcı Olabiliriz
            </button>
            <Button
              onClick={() => scrollToSection("iletisim")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              İletişim
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background relative z-10">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("giris")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
            >
              Giriş
            </button>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              >
                Hizmetlerimiz
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  <Link
                    href="/hizmetler/tirnak-bakimi"
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Tırnak Bakımı
                  </Link>
                  <Link
                    href="/hizmetler/cilt-bakimi"
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Cilt Bakımı
                  </Link>
                  <Link
                    href="/hizmetler/agda"
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ağda
                  </Link>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("yardim")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
            >
              Nasıl Yardımcı Olabiliriz
            </button>
            <button
              onClick={() => scrollToSection("iletisim")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-primary hover:bg-secondary rounded-md transition-colors"
            >
              İletişim
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
