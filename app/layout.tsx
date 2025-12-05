import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Zoia Neli Beauty Center | Lefkoşa Güzellik Merkezi | Ağda, Cilt Bakımı, Kalıcı Makyaj",
  description:
    "Zoia Neli Beauty Center - Lefkoşa'nın en profesyonel güzellik merkezi. Ağda, cilt bakımı, tırnak bakımı, kalıcı makyaj hizmetleri. %15 indirim fırsatı! Mehmet Ahmet Cad, Aydemet Mahallesi, Lefkoşa. ☎️ 0542 877 22 77",
  keywords:
    "güzellik merkezi lefkoşa, zoia neli beauty center, kıbrıs güzellik salonu, ağda lefkoşa, cilt bakımı lefkoşa, tırnak bakımı lefkoşa, kalıcı makyaj kıbrıs, ipek sir ağda, hydrafacial lefkoşa, epilasyon, manikür pedikür, beauty center nicosia, waxing cyprus",
  authors: [{ name: "Zoia Neli Beauty Center" }],
  creator: "Zoia Neli Beauty Center",
  publisher: "Zoia Neli Beauty Center",
  metadataBase: new URL("https://zoianelibeauty.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zoia Neli Beauty Center | Lefkoşa'nın En İyi Güzellik Merkezi",
    description:
      "Profesyonel güzellik hizmetleri ile yanınızdayız. Ağda, cilt bakımı, tırnak bakımı ve kalıcı makyaj. %15 indirim fırsatı!",
    url: "https://zoianelibeauty.com",
    siteName: "Zoia Neli Beauty Center",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Zoia Neli Beauty Center - Lefkoşa Güzellik Merkezi",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoia Neli Beauty Center - Lefkoşa",
    description: "Profesyonel güzellik hizmetleri. %15 indirim fırsatı!",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#84a98c",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Zoia Neli Beauty Center",
              image: "/logo.png",
              description: "Lefkoşa'nın en profesyonel güzellik merkezi",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mehmet Ahmet Cad, Blok 5, Dükkan C, Aydemet Mahallesi",
                addressLocality: "Lefkoşa",
                addressRegion: "Nicosia",
                addressCountry: "Cyprus",
              },
              telephone: "+905428772277",
              url: "https://zoianelibeauty.com",
              priceRange: "$$",
              openingHours: "Mo-Sa 09:00-20:00",
              sameAs: ["https://www.instagram.com/zoianelibeauty/"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
