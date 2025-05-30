import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Settings, ShoppingCart, CreditCard } from "lucide-react"

export default function TjansterPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/SL7.jpg" alt="Våra Tjänster" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#003366]/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Våra Tjänster</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Vi erbjuder omfattande tjänster för att säkerställa att din utrustning fungerar optimalt.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Våra Tjänster</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder ett brett utbud av tjänster för att möta alla dina behov när det gäller kopiatorer och
              skrivare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-[#003366]/10 rounded-full">
                  <Settings className="h-6 w-6 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Service & Underhåll</h3>
              <p className="text-gray-600 mb-3 text-center text-sm">
                Regelbunden service och underhåll av din utrustning för att säkerställa optimal prestanda.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-[#003366] hover:bg-[#002244] text-sm">
                  <Link href="/tjanster/service-underhall">
                    Läs mer <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-[#003366]/10 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Försäljning & Uthyrning</h3>
              <p className="text-gray-600 mb-3 text-center text-sm">
                Flexibla lösningar för både köp och hyra av kopiatorer och skrivare.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-[#003366] hover:bg-[#002244] text-sm">
                  <Link href="/tjanster/forsaljning-uthyrning">
                    Läs mer <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-[#003366]/10 rounded-full">
                  <CreditCard className="h-6 w-6 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Finansieringsalternativ</h3>
              <p className="text-gray-600 mb-3 text-center text-sm">
                Skräddarsydda finansieringslösningar för att passa ditt företags behov och budget.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-[#003366] hover:bg-[#002244] text-sm">
                  <Link href="/tjanster/finansiering">
                    Läs mer <ChevronRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/Tjanst.jpg" alt="Varför välja oss" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Varför välja våra tjänster?</h2>
              <p className="text-gray-600 mb-6">
                Med över 20 års erfarenhet i branschen erbjuder vi professionella tjänster av högsta kvalitet. Vårt team
                av erfarna tekniker och rådgivare är dedikerade till att hjälpa dig hitta den perfekta lösningen för
                ditt företag.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Expertis och erfarenhet</p>
                    <p className="text-gray-600">
                      Vårt team har omfattande kunskap och erfarenhet inom alla aspekter av kopiatorer och skrivare.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Skräddarsydda lösningar</p>
                    <p className="text-gray-600">
                      Vi anpassar våra tjänster efter dina specifika behov och krav för att säkerställa optimal
                      prestanda.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Snabb responstid</p>
                    <p className="text-gray-600">
                      Vi förstår vikten av minimal driftstörning och erbjuder snabb service när du behöver det.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">Kvalitetsprodukter</p>
                    <p className="text-gray-600">
                      Vi erbjuder endast produkter från ledande tillverkare för att säkerställa högsta kvalitet och
                      tillförlitlighet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Vad Våra Kunder Säger</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Läs vad våra kunder tycker om våra tjänster och produkter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
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
              <p className="text-gray-600 mb-4">
                "Vi har använt Kopiator Service AB i över 5 år och är mycket nöjda med deras service och produkter.
                Deras tekniker är alltid snabba och professionella."
              </p>
              <div>
                <p className="font-bold text-[#003366]">Anna Johansson</p>
                <p className="text-gray-500">Johansson Redovisning AB</p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
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
              <p className="text-gray-600 mb-4">
                "Kopiator Service AB levererade exakt vad vi behövde för vårt kontor. Deras rådgivning hjälpte oss att
                hitta den perfekta lösningen för våra behov."
              </p>
              <div>
                <p className="font-bold text-[#003366]">Erik Lindberg</p>
                <p className="text-gray-500">Lindberg Advokatbyrå</p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] p-6 rounded-lg shadow-md">
              <div className="flex text-yellow-400 mb-4">
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
              <p className="text-gray-600 mb-4">
                "Utmärkt service och support. När vår kopiator gick sönder var de på plats inom några timmar och löste
                problemet snabbt och effektivt."
              </p>
              <div>
                <p className="font-bold text-[#003366]">Maria Svensson</p>
                <p className="text-gray-500">Svensson & Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
