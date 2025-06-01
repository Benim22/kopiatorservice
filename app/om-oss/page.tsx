import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Users, Award, Clock, Briefcase } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Om Oss - 30+ År av Kopiatorer i Göteborg | Kopiator Service AB",
  description:
    "Lär känna Kopiator Service AB - din pålitliga partner för kopiatorer och skrivare sedan 1993. Med över 30 års erfarenhet, 1000+ nöjda kunder och expertis inom multifunktionsmaskiner i Göteborg och Västra Götaland.",
  keywords: [
    "kopiator service historia",
    "företag kopiatorer göteborg",
    "experter kontorsmaskiner",
    "30 års erfarenhet",
    "pålitlig partner",
    "kopiator service ab partille",
    "multifunktionssystem",
    "nätverksklara maskiner",
    "dokumenthantering expertis",
    "service och reparation"
  ],
  openGraph: {
    title: "Om Kopiator Service AB - 30+ års expertis inom kopiatorer",
    description:
      "Sedan 1993 har vi levererat högkvalitativa kopiatorer och skrivare till företag. Med 1000+ nöjda kunder och djup expertis är vi din pålitliga partner.",
    url: "https://kopiatorservice.se/om-oss",
    type: "website",
  },
  alternates: {
    canonical: "https://kopiatorservice.se/om-oss",
  },
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/SL6.jpg"
            alt="Om Kopiator Service AB"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#003366]/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Om Oss</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Lär känna Kopiator Service AB - din pålitliga partner för kopiatorer och skrivare sedan 1993.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Vår Historia</h2>
              <h3 className="text-xl font-bold text-[#003366] mb-4">Om Kopiator Service AB</h3>
              <p className="text-gray-600 mb-4">
                Med över 30 års erfarenhet i branschen är vi experter på kopiatorer, skrivare och multifunktionella 
                maskiner för både färg och svartvitt. Vi erbjuder ett brett utbud av högkvalitativa begagnade produkter 
                för försäljning eller uthyrning – redo för omgående leverans.
              </p>
              <p className="text-gray-600 mb-4">
                Vårt sortiment omfattar allt från A3/A4-maskiner till avancerade multifunktionssystem med funktioner 
                som utskrift, kopiering, skanning, dokumentmatning, multimagasin, häftning och fax. Samtliga produkter 
                är noggrant testade och nätverksklara.
              </p>
              <p className="text-gray-600 mb-6">
                Vi hjälper dig gärna med rådgivning kring funktioner, finansiering, service och reparation. Kontakta 
                oss på info@kopiatorservice.se – vi ser till att du får rätt lösning för dina behov.
              </p>
              <div className="bg-[#F5F5F5] p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-[#003366] mb-4">Varför välja oss?</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="text-green-500 font-bold mr-2">✔</span>
                    <span className="text-gray-700">Hög kvalitet till rätt pris</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 font-bold mr-2">✔</span>
                    <span className="text-gray-700">Personlig och kunnig support</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 font-bold mr-2">✔</span>
                    <span className="text-gray-700">30 dagars pengarna tillbaka-garanti</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Kopiator Service AB historia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Våra Värderingar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Våra värderingar vägleder allt vi gör och hjälper oss att leverera den bästa möjliga servicen till våra
              kunder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <Users className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2 text-center">Kundnöjdhet</h3>
              <p className="text-gray-600 text-center">
                Vi sätter alltid kunden i centrum och strävar efter att överträffa förväntningar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <Award className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2 text-center">Kvalitet</h3>
              <p className="text-gray-600 text-center">
                Vi kompromissar aldrig med kvaliteten på våra produkter och tjänster.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <Clock className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2 text-center">Pålitlighet</h3>
              <p className="text-gray-600 text-center">
                Vi håller våra löften och levererar alltid i tid med högsta kvalitet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <Briefcase className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2 text-center">Expertis</h3>
              <p className="text-gray-600 text-center">
                Vårt team består av erfarna experter med djup kunskap om branschen.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Company Facts */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Företagsfakta</h2>
            <p className="max-w-2xl mx-auto opacity-80">
              Några snabba fakta om Kopiator Service AB och vår verksamhet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <p className="opacity-80">År i branschen</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="opacity-80">Nöjda kunder</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20</div>
              <p className="opacity-80">Anställda</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <p className="opacity-80">Servicekontor i Sverige</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Redo att samarbeta med oss?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Kontakta oss idag för att diskutera hur vi kan hjälpa ditt företag med kopiatorer, skrivare och relaterade
            tjänster.
          </p>
          <Button asChild size="lg" className="bg-[#003366] hover:bg-[#002244]">
            <Link href="/kontakt">
              Kontakta oss <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
