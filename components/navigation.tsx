"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Zoia Neli Beauty Center" width={50} height={50} className="w-12 h-12" />
            <div className="hidden sm:block">
              <div className="text-xl font-serif font-bold text-foreground">ZOIA NELI</div>
              <div className="text-xs text-primary tracking-wider">BEAUTY CENTER</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Ana Sayfa
            </Link>

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
                <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-xl py-2 z-50">
                  <Link
                    href="/hizmetler/agda"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    Ağda Hizmetleri
                  </Link>
                  <Link
                    href="/hizmetler/cilt-bakimi"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    Cilt Bakımı
                  </Link>
                  <Link
                    href="/hizmetler/tirnak-bakimi"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    Tırnak Bakımı
                  </Link>
                  <Link
                    href="/hizmetler/kalici-makyaj"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    Kalıcı Makyaj
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/hakkimizda"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Hakkımızda
            </Link>

            <Link href="/iletisim" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              İletişim
            </Link>

            <a
              href="tel:+905428772277"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0542 877 22 77</span>
            </a>
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
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </Link>

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
                    href="/hizmetler/agda"
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ağda Hizmetleri
                  </Link>
                  <Link
                    href="/hizmetler/cilt-bakimi"
                    className="block px-3 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Cilt Bakımı
                  </Link>
                  <Link
                    href="/hizmetler/tirnak-bakimi"
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Tırnak Bakımı
                  </Link>
                  <Link
                    href="/hizmetler/kalici-makyaj"
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Kalıcı Makyaj
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/hakkimizda"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>

            <Link
              href="/iletisim"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>

            <a
              href="tel:+905428772277"
              className="flex items-center gap-2 px-3 py-2 mt-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0542 877 22 77</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
