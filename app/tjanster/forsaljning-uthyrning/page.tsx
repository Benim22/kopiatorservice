import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle, ShoppingCart, Clock } from "lucide-react"

export default function ForsaljningUthyrning() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/SL3.jpg"
            alt="Försäljning & Uthyrning"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#003366]/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Försäljning & Uthyrning</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Flexibla lösningar för både köp och hyra av kopiatorer och skrivare.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Flexibla lösningar för ditt företag</h2>
              <p className="text-gray-600 mb-4">
                Vi erbjuder både försäljning och uthyrning av kopiatorer och skrivare för att möta ditt företags
                specifika behov och budget. Oavsett om du föredrar att äga din utrustning eller hyra den, har vi
                lösningen för dig.
              </p>
              <p className="text-gray-600 mb-6">
                Våra experter hjälper dig att hitta den perfekta lösningen baserat på din verksamhets behov, budget och
                framtida tillväxtplaner.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Skräddarsydda lösningar</p>
                    <p className="text-gray-600">Anpassade efter dina specifika behov och budget.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Kvalitetsprodukter</p>
                    <p className="text-gray-600">Vi erbjuder endast produkter från ledande tillverkare.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Omfattande support</p>
                    <p className="text-gray-600">Professionell installation, utbildning och support ingår alltid.</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-[#003366] hover:bg-[#002244]">
                <Link href="/kontakt">
                  Kontakta oss för mer information <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Kopiator i kontorsmiljö"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purchase vs Rental */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Köp eller Hyra?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jämför fördelarna med att köpa eller hyra för att hitta den lösning som passar ditt företag bäst.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#003366]/10 rounded-full">
                  <ShoppingCart className="h-10 w-10 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 text-center">Köp</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Ägandeskap</p>
                    <p className="text-gray-600">Du äger utrustningen och kan använda den så länge du vill.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Långsiktig investering</p>
                    <p className="text-gray-600">Mer kostnadseffektivt på lång sikt för stabil verksamhet.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Avskrivningsmöjligheter</p>
                    <p className="text-gray-600">Möjlighet till skattemässiga avskrivningar.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Ingen månadskostnad</p>
                    <p className="text-gray-600">Efter inköp har du inga fasta månadskostnader för utrustningen.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Button asChild className="bg-[#003366] hover:bg-[#002244]">
                  <Link href="/produkter">Se våra produkter</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#003366]/10 rounded-full">
                  <Clock className="h-10 w-10 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-4 text-center">Hyra</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Låg initial kostnad</p>
                    <p className="text-gray-600">Ingen stor investering krävs, bara en månatlig avgift.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Flexibilitet</p>
                    <p className="text-gray-600">Enklare att uppgradera till nyare modeller när behoven förändras.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Service inkluderad</p>
                    <p className="text-gray-600">Serviceavtal ingår ofta i hyresavtalet.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Förutsägbara kostnader</p>
                    <p className="text-gray-600">Fast månadskostnad gör det enklare att budgetera.</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Button asChild className="bg-[#003366] hover:bg-[#002244]">
                  <Link href="/tjanster/finansiering">Läs om hyresvillkor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Våra Hyresalternativ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder flexibla hyresalternativ för att passa olika behov och budgetar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md">
              <div className="p-6 bg-[#003366] text-white text-center">
                <h3 className="text-xl font-bold mb-2">Korttidshyra</h3>
                <p className="opacity-90">3-12 månader</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#003366]">Från 499 kr</span>
                  <span className="text-gray-600">/månad</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Ingen bindningstid efter minimitiden</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Perfekt för projekt eller tillfälliga behov</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Service och support ingår</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Möjlighet att förlänga vid behov</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#003366] hover:bg-[#002244]">
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md border-2 border-[#003366] relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1">
                Populärast
              </div>
              <div className="p-6 bg-[#003366] text-white text-center">
                <h3 className="text-xl font-bold mb-2">Standardhyra</h3>
                <p className="opacity-90">12-36 månader</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#003366]">Från 399 kr</span>
                  <span className="text-gray-600">/månad</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Balanserad lösning för de flesta företag</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Omfattande service och support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Anpassade lösningar efter dina behov</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#003366] hover:bg-[#002244]">
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md">
              <div className="p-6 bg-[#003366] text-white text-center">
                <h3 className="text-xl font-bold mb-2">Långtidshyra</h3>
                <p className="opacity-90">36+ månader</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#003366]">Kontakta oss</span>
                  <span className="text-gray-600">/månad</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Mest kostnadseffektiva alternativet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Perfekt för etablerade företag</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Anpassade serviceavtal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Regelbundna uppgraderingar tillgängliga</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#003366] hover:bg-[#002244]">
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
