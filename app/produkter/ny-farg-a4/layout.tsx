import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nya Färg A4 Skrivare - Kompakta Färgmaskiner för Kontoret | Kopiator Service AB",
  description:
    "Nya A4 färgskrivare och multifunktionsmaskiner. Kompakta och effektiva lösningar för daglig färgutskrift på kontoret. Hög kvalitet och modern teknik för alla företagsbehov i Göteborg.",
  keywords: [
    "nya färg A4",
    "A4 färgskrivare",
    "A4 färgkopiatorer",
    "kompakta färgmaskiner",
    "kontors färgskrivare",
    "A4 multifunktion",
    "nya skrivare A4",
    "färgutskrift A4",
    "moderna A4 maskiner",
    "effektiva kontorsmaskiner göteborg"
  ],
  openGraph: {
    title: "Nya Färg A4 - Kompakta färgmaskiner för effektiv utskrift",
    description:
      "Moderna A4 färgskrivare för daglig kontorsanvändning. Kompakt design med hög prestanda och kvalitet.",
    url: "https://kopiatorservice.se/produkter/ny-farg-a4",
    type: "website",
  },
  alternates: {
    canonical: "https://kopiatorservice.se/produkter/ny-farg-a4",
  },
}

export default function NyFargA4Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 