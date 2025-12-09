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
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Zoia Neli Beauty Center"
              width={50}
              height={50}
              className="w-12 h-12 rounded-xl shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:block">
              <div className="text-xl font-serif font-bold text-foreground tracking-wide group-hover:text-primary transition-colors">
                ZOIA NELI
              </div>
              <div className="text-[11px] text-primary tracking-widest">
                BEAUTY CENTER
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Ana Sayfa
            </Link>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                Hizmetlerimiz
                <ChevronDown className="h-4 w-4" />
              </button>

              <div
                className={`absolute top-full left-0 mt-3 w-64 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-xl transition-all duration-200 overflow-hidden ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {[ 
                  {label: "Ağda Hizmetleri", url: "/hizmetler/agda"},
                  {label: "Cilt Bakımı", url: "/hizmetler/cilt-bakimi"},
                  {label: "Tırnak Bakımı", url: "/hizmetler/tirnak-bakimi"},
                  {label: "Kalıcı Makyaj", url: "/hizmetler/kalici-makyaj"},
                ].map((item) => (
                  <Link
                    key={item.url}
                    href={item.url}
                    className="block px-5 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/hakkimizda"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Hakkımızda
            </Link>

            <Link
              href="/iletisim"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              İletişim
            </Link>

            {/* Call Button */}
            <a
              href="tel:+905428772277"
              className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-xl shadow-md hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0542 877 22 77</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 pt-3 pb-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-3 text-base font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </Link>

            {/* Mobile Dropdown */}
            <div className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-left px-3 py-3 text-base font-medium text-foreground"
              >
                Hizmetlerimiz
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="bg-secondary/40 px-2 py-2 space-y-1">
                  {[ 
                    {label: "Ağda Hizmetleri", url: "/hizmetler/agda"},
                    {label: "Cilt Bakımı", url: "/hizmetler/cilt-bakimi"},
                    {label: "Tırnak Bakımı", url: "/hizmetler/tirnak-bakimi"},
                    {label: "Kalıcı Makyaj", url: "/hizmetler/kalici-makyaj"},
                  ].map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      className="block px-3 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/hakkimizda"
              className="block px-3 py-3 text-base font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </Link>

            <Link
              href="/iletisim"
              className="block px-3 py-3 text-base font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>

            <a
              href="tel:+905428772277"
              className="flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:bg-primary/90 transition"
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