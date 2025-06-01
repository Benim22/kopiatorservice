import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Begagnade Färg A3 Skrivare - Kostnadseffektiva Färgmaskiner | Kopiator Service AB",
  description:
    "Begagnade A3 färgskrivare och kopiatorer med garanti. Ekonomiska alternativ för professionell färgutskrift i stora format. Kvalitetstestade maskiner med full funktionalitet i Göteborg.",
  keywords: [
    "begagnade färg A3",
    "begagnade A3 färgskrivare",
    "A3 färgkopiatorer begagnade",
    "ekonomiska A3 maskiner",
    "begagnad färgmaskin",
    "A3 multifunktion begagnad",
    "kvalitetstestade A3",
    "garanti A3 färg",
    "billig A3 färgskrivare",
    "second hand A3 göteborg"
  ],
  openGraph: {
    title: "Begagnade Färg A3 - Ekonomiska färgmaskiner med garanti",
    description:
      "Välj våra begagnade A3 färgmaskiner för kostnadseffektiv professionell färgutskrift. Kvalitetstestade med full garanti.",
    url: "https://kopiatorservice.se/produkter/beg-farg-a3",
    type: "website",
  },
  alternates: {
    canonical: "https://kopiatorservice.se/produkter/beg-farg-a3",
  },
}

export default function BegFargA3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 