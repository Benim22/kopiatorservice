import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nya Färg A3 Skrivare - Professionella Färgmaskiner | Kopiator Service AB",
  description:
    "Nya A3 färgskrivare och multifunktionsmaskiner för professionella miljöer. Hög kvalitet på utskrifter, snabb prestanda och avancerade funktioner för alla kontorsbehov i Göteborg.",
  keywords: [
    "nya färg A3",
    "A3 färgskrivare",
    "A3 färgkopiatorer",
    "professionella färgmaskiner",
    "stora format skrivare",
    "A3 multifunktion",
    "färgutskrift A3",
    "högkvalitativ färgskrivning",
    "kantorsmaskin A3",
    "nya A3 maskiner göteborg"
  ],
  openGraph: {
    title: "Nya Färg A3 - Professionella färgmaskiner för stora format",
    description:
      "Investera i nya A3 färgskrivare med hög prestanda och professionell kvalitet. Perfekt för företag som behöver stora format.",
    url: "https://kopiatorservice.se/produkter/ny-farg-a3",
    type: "website",
  },
  alternates: {
    canonical: "https://kopiatorservice.se/produkter/ny-farg-a3",
  },
}

export default function NyFargA3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 