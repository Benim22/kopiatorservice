import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fynd & Erbjudanden - Kopiatorer & Skrivare till Låga Priser | Kopiator Service AB",
  description:
    "Upptäck våra fynd och specialerbjudanden på kopiatorer och skrivare. Begränsade lager av kvalitetsmaskiner till exceptionellt bra priser. Passa på att göra en bra affär i Göteborg!",
  keywords: [
    "fynd kopiatorer",
    "erbjudanden skrivare",
    "billiga kopiatorer",
    "rea kontorsmaskiner",
    "specialpriser",
    "kampanj kopiatorer",
    "låga priser skrivare",
    "fynd multifunktion",
    "bra affärer kopiatorer",
    "outlet kontorsmaskiner göteborg"
  ],
  openGraph: {
    title: "Fynd & Erbjudanden - Kvalitetskopiatorer till fantastiska priser",
    description:
      "Begränsade fynd av kopiatorer och skrivare. Passa på att göra en riktigt bra affär med kvalitetsmaskiner till låga priser.",
    url: "https://kopiatorservice.se/produkter/fynd",
    type: "website",
  },
  alternates: {
    canonical: "https://kopiatorservice.se/produkter/fynd",
  },
}

export default function FyndLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 