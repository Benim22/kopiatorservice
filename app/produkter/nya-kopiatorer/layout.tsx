import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nya Kopiatorer - Moderna Kontorsmaskiner | Kopiator Service AB",
  description:
    "Upptäck vårt utbud av nya kopiatorer från ledande tillverkare. Senaste tekniken, energieffektiva lösningar och omfattande garantier. Multifunktionsmaskiner för alla kontorsbehov i Göteborg.",
  keywords: [
    "nya kopiatorer",
    "moderna kopiatorer",
    "multifunktionsmaskiner",
    "kontorsmaskiner",
    "senaste tekniken",
    "energieffektiva kopiatorer",
    "nya skrivare",
    "garanti kopiatorer",
    "köp nya kopiatorer göteborg",
    "avancerade kontorslösningar"
  ],
  openGraph: {
    title: "Nya Kopiatorer - Senaste tekniken för ditt kontor",
    description:
      "Se vårt sortiment av nya kopiatorer med den senaste tekniken. Energieffektiva och tillförlitliga lösningar med omfattande garantier.",
    url: "https://kopiatorservice.se/produkter/nya-kopiatorer",
    type: "website",
  },
  alternates: {
    canonical: "https://kopiatorservice.se/produkter/nya-kopiatorer",
  },
}

export default function NyaKopiatorerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 