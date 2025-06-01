import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kopiator Service AB - Försäljning & Service av Kopiatorer och Skrivare",
  description:
    "Ledande leverantör av kopiatorer, skrivare och multifunktionsmaskiner i Göteborg. Vi erbjuder försäljning, uthyrning, service och finansiering av både nya och begagnade kopiatorer. 30+ års erfarenhet.",
  keywords: [
    "kopiatorer",
    "skrivare", 
    "multifunktionsmaskiner",
    "service",
    "försäljning",
    "uthyrning",
    "toner",
    "underhåll",
    "finansiering",
    "begagnade kopiatorer",
    "nya kopiatorer",
    "A3 skrivare",
    "A4 skrivare",
    "färgskrivare",
    "dokumenthantering",
    "kontorsutrustning",
    "Göteborg",
    "Partille",
    "Västra Götaland"
  ],
  authors: [{ name: "Kopiator Service AB" }],
  creator: "Kopiator Service AB",
  publisher: "Kopiator Service AB",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://kopiatorservice.se",
    siteName: "Kopiator Service AB",
    title: "Kopiator Service AB - Kopiatorer & Skrivare i Göteborg",
    description:
      "Professionella lösningar för kopiatorer och skrivare. Service, försäljning och uthyrning med 30+ års erfarenhet i Göteborg och Västra Götaland.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kopiator Service AB - Kopiatorer och skrivare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kopiator Service AB - Kopiatorer & Skrivare",
    description:
      "Professionella lösningar för kopiatorer och skrivare i Göteborg. Service, försäljning och uthyrning.",
    images: ["/twitter-image.jpg"],
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
  alternates: {
    canonical: "https://kopiatorservice.se",
  },
  other: {
    "geo.region": "SE-O",
    "geo.placename": "Partille, Göteborg",
    "geo.position": "57.739;12.107",
    "ICBM": "57.739, 12.107",
  },
  generator: 'Next.js',
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kopiator Service AB",
  "description": "Ledande leverantör av kopiatorer, skrivare och multifunktionsmaskiner i Göteborg. Vi erbjuder försäljning, uthyrning, service och finansiering av både nya och begagnade kopiatorer.",
  "url": "https://kopiatorservice.se",
  "telephone": "+46-31-19-55-00",
  "email": "info@kopiatorservice.se",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gamla Alingsåsvägen 24",
    "addressLocality": "Partille",
    "postalCode": "433 38",
    "addressCountry": "SE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "57.739",
    "longitude": "12.107"
  },
  "openingHours": [
    "Mo-Fr 08:00-17:00"
  ],
  "foundingDate": "1993",
  "areaServed": [
    "Göteborg",
    "Partille", 
    "Västra Götaland"
  ],
  "serviceType": [
    "Försäljning av kopiatorer",
    "Uthyrning av skrivare",
    "Service och underhåll",
    "Finansiering",
    "Toner och förbrukningsmaterial"
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://kopiatorservice.se"
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="pt-12 sm:pt-14 md:pt-16 lg:pt-18 xl:pt-20 flex-grow">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
