import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Begagnade Kopiatorer - Kvalitetstestade & Garanterade | Kopiator Service AB",
  description:
    "Köp kvalitetstestade begagnade kopiatorer med garanti. Ekonomiskt och miljömedvetet alternativ för ditt kontor. Noggrant kontrollerade och servade maskiner från ledande tillverkare i Göteborg.",
  keywords: [
    "begagnade kopiatorer",
    "begagnade skrivare",
    "begagnade kontorsmaskiner",
    "kvalitetstestade kopiatorer",
    "garanti begagnade",
    "ekonomiska kopiatorer",
    "miljövänliga alternativ",
    "köp begagnad kopiator",
    "second hand kopiatorer",
    "renoverade kopiatorer göteborg"
  ],
  openGraph: {
    title: "Begagnade Kopiatorer - Kvalitet med garanti till bra pris",
    description:
      "Välj våra kvalitetstestade begagnade kopiatorer. Ekonomiskt och miljömedvetet med full garanti och support.",
    url: "https://kopiatorservice.se/produkter/beg-kopiatorer",
    type: "website",
  },
  alternates: {
    canonical: "https://kopiatorservice.se/produkter/beg-kopiatorer",
  },
}

export default function BegagnadeKopiatorerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 