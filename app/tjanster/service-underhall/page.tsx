import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle, Clock, PenToolIcon as Tool, Shield } from "lucide-react"

export default function ServiceUnderhall() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/SL2.jpg" alt="Service & Underhåll" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#003366]/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Service & Underhåll</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Professionell service och underhåll för att säkerställa optimal prestanda för din utrustning.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Professionell service när du behöver det</h2>
              <p className="text-gray-600 mb-4">
                Vi erbjuder snabb och professionell service för alla typer av kopiatorer och skrivare. Våra erfarna
                tekniker säkerställer att din utrustning fungerar optimalt och minimerar driftstopp.
              </p>
              <p className="text-gray-600 mb-6">
                Med våra serviceavtal får du regelbunden service och underhåll, prioriterad support vid driftstopp och
                förmånliga priser på reservdelar och förbrukningsmaterial.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Snabb responstid</p>
                    <p className="text-gray-600">Vi garanterar service inom 4-8 timmar vid driftstopp.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Certifierade tekniker</p>
                    <p className="text-gray-600">Våra tekniker är certifierade och har lång erfarenhet.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Förebyggande underhåll</p>
                    <p className="text-gray-600">Regelbunden service förlänger livslängden på din utrustning.</p>
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
                alt="Tekniker som servar en kopiator"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Våra Serviceavtal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder olika typer av serviceavtal anpassade efter dina behov och budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6 bg-[#003366] text-white text-center">
                <h3 className="text-xl font-bold mb-2">Baspaket</h3>
                <p className="opacity-90">För mindre kontor med låg volym</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#003366]">Från 199 kr</span>
                  <span className="text-gray-600">/månad</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Årlig service och underhåll</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Support via telefon och e-post</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Responstid inom 8 timmar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">10% rabatt på reservdelar</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#003366] hover:bg-[#002244]">
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-[#003366] relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1">
                Populärast
              </div>
              <div className="p-6 bg-[#003366] text-white text-center">
                <h3 className="text-xl font-bold mb-2">Standardpaket</h3>
                <p className="opacity-90">För medelstora kontor med normal volym</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#003366]">Från 399 kr</span>
                  <span className="text-gray-600">/månad</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Halvårsvis service och underhåll</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Prioriterad support via telefon och e-post</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Responstid inom 6 timmar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">15% rabatt på reservdelar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Gratis utbytesmaskin vid längre reparationer</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#003366] hover:bg-[#002244]">
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6 bg-[#003366] text-white text-center">
                <h3 className="text-xl font-bold mb-2">Premiumpaket</h3>
                <p className="opacity-90">För större kontor med hög volym</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl font-bold text-[#003366]">Från 799 kr</span>
                  <span className="text-gray-600">/månad</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Kvartalsvis service och underhåll</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">VIP-support dygnet runt</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Responstid inom 4 timmar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">25% rabatt på reservdelar</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Gratis utbytesmaskin vid längre reparationer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Förtur vid uppgraderingar</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-[#003366] hover:bg-[#002244]">
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Alla serviceavtal kan anpassas efter dina specifika behov. Kontakta oss för en skräddarsydd lösning.
            </p>
            <Button asChild variant="outline" className="text-[#003366] border-[#003366]">
              <Link href="/kontakt">
                Begär offert <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Vår Serviceprocess</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Så här fungerar vår serviceprocess för att säkerställa snabb och effektiv hjälp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#003366]/10 rounded-full">
                  <Clock className="h-10 w-10 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">1. Kontakt</h3>
              <p className="text-gray-600">
                Kontakta oss via telefon, e-post eller vårt kontaktformulär för att anmäla ett servicebehov.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#003366]/10 rounded-full">
                  <CheckCircle className="h-10 w-10 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">2. Diagnos</h3>
              <p className="text-gray-600">
                Vår tekniker diagnostiserar problemet, antingen på distans eller genom ett besök på plats.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#003366]/10 rounded-full">
                  <Tool className="h-10 w-10 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">3. Åtgärd</h3>
              <p className="text-gray-600">
                Vi åtgärdar problemet snabbt och effektivt, med originaldelar och professionella verktyg.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#003366]/10 rounded-full">
                  <Shield className="h-10 w-10 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#003366] mb-2">4. Uppföljning</h3>
              <p className="text-gray-600">
                Vi följer upp för att säkerställa att allt fungerar som det ska och att du är nöjd med servicen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Vad Våra Kunder Säger</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Läs vad våra kunder tycker om vår service och underhåll.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Snabb och professionell service. Teknikern var på plats inom 4 timmar och löste problemet effektivt.
                Rekommenderas varmt!"
              </p>
              <div>
                <p className="font-bold text-[#003366]">Anna Johansson</p>
                <p className="text-gray-500">Ekonomichef, Johansson AB</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Vi har haft serviceavtal i över 5 år och är mycket nöjda. Regelbunden service har förlängt livslängden
                på våra maskiner och minimerat driftstopp."
              </p>
              <div>
                <p className="font-bold text-[#003366]">Erik Lindberg</p>
                <p className="text-gray-500">IT-chef, Lindberg & Partners</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professionell och kunnig personal som alltid är tillmötesgående. Premiumavtalet har varit en utmärkt
                investering för vårt företag."
              </p>
              <div>
                <p className="font-bold text-[#003366]">Maria Svensson</p>
                <p className="text-gray-500">Kontorschef, Svensson Redovisning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Vanliga Frågor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Svar på vanliga frågor om våra service- och underhållstjänster.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#003366] mb-2">Hur snabbt kan ni vara på plats vid ett fel?</h3>
              <p className="text-gray-600">
                Beroende på ditt serviceavtal garanterar vi en responstid på 4-8 timmar under kontorstid. Med vårt
                premiumavtal erbjuder vi service dygnet runt.
              </p>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#003366] mb-2">Vad ingår i den regelbundna servicen?</h3>
              <p className="text-gray-600">
                Den regelbundna servicen inkluderar rengöring, justering, smörjning av rörliga delar, kontroll av
                slitdelar, uppdatering av programvara och funktionstest.
              </p>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#003366] mb-2">Kan ni serva alla märken och modeller?</h3>
              <p className="text-gray-600">
                Ja, våra tekniker är utbildade för att serva alla ledande märken och modeller av kopiatorer och
                skrivare. Vi har tillgång till originaldelar för de flesta tillverkare.
              </p>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#003366] mb-2">Hur fungerar faktureringen för serviceavtal?</h3>
              <p className="text-gray-600">
                Serviceavtal faktureras kvartalsvis eller årsvis i förskott, beroende på vad som passar dig bäst.
                Enstaka servicebesök faktureras efter utfört arbete.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
