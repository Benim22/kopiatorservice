import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  CheckCircle,
  CreditCard,
  Banknote,
  Shield,
  BarChart,
  Percent,
  Calendar,
  Building2,
} from "lucide-react"

export default function FinansieringPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/SL4.jpg"
            alt="Finansieringsalternativ"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#003366]/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Finansieringsalternativ</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Skräddarsydda finansieringslösningar för att passa ditt företags behov och budget.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Smarta finansieringslösningar</h2>
              <p className="text-gray-600 mb-4">
                Finansiering via leasing/hyra ger dig en valfrihet att använda det egna kapitalet på ett effektivare
                sätt.
              </p>
              <p className="text-gray-600 mb-4">
                Varför skall man som kund binda upp sitt fria egna kapital, i utrustningen, om det finns möjligheter att
                avkasta kapitalet bättre i den egna verksamheten?
              </p>
              <p className="text-gray-600 mb-6">
                Leasing/hyra är en form av långtidshyra där ni kan fördela kostnaden över tiden. Alla privata
                näringsidkare såväl som den offentliga sektorn kan leasa utrustningen. En förutsättning för de företag
                som vill leasa är att de är momsredovisningsskyldiga.
              </p>

              <Button asChild className="bg-[#003366] hover:bg-[#002244]">
                <Link href="/kontakt">
                  Kontakta oss för mer information <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Finansiering av kontorsutrustning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Fördelar med Leasing/Hyra/Funktionshyra</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upptäck de många fördelarna med att välja leasing eller hyra för din kontorsutrustning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <Shield className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Säker finansiering</h3>
              <p className="text-gray-600 text-center">
                Med utrustningen som säkerhet får du en trygg finansieringslösning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <Percent className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Finansiera upp till 100%</h3>
              <p className="text-gray-600 text-center">
                Finansiera hela utrustningen med full nyttjanderätt från dag ett.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <Calendar className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Enkel budgetering</h3>
              <p className="text-gray-600 text-center">
                Kostnaden är lätt att budgetera och kan enkelt anpassas till intäkterna.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <Banknote className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Behåll likviditeten</h3>
              <p className="text-gray-600 text-center">
                Binder inte kapital i utrustningen och kan använda kapitalet till annat i verksamheten.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <CreditCard className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Avdragsgill avgift</h3>
              <p className="text-gray-600 text-center">Hela leasing-/hyresavgiften är avdragsgill i din verksamhet.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <BarChart className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Snabbare kostnadsredovisning</h3>
              <p className="text-gray-600 text-center">
                Få en snabbare kostnadsredovisning av investeringen i din verksamhet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <Building2 className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Ingen förskottsmoms</h3>
              <p className="text-gray-600 text-center">
                Du behöver inte förskottera moms vid anskaffning av utrustningen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#003366]/10 rounded-full">
                  <Shield className="h-8 w-8 text-[#003366]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2 text-center">Anpassad försäkring</h3>
              <p className="text-gray-600 text-center">Få en försäkring som är optimerad för just din utrustning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Våra finansieringsalternativ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder olika typer av finansieringslösningar för att passa dina specifika behov.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md">
              <div className="p-6 bg-[#003366] text-white">
                <h3 className="text-xl font-bold mb-2">Hyra</h3>
                <p className="opacity-90">Flexibel lösning för snabb teknisk utveckling</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Hyra är anpassad för utrustningen där den tekniska utvecklingen går snabbt eller som ska bytas med
                  jämna mellanrum. Under avtalstiden kan ni uppgradera utrustningen eller byta ut den. Efter avtalstiden
                  kan ni återlämna utrustningen, köpa utrustningen alternativ förlänga avtalet.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Flexibel uppgradering under avtalstiden</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Perfekt för utrustning med snabb teknisk utveckling</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Flera alternativ efter avtalstiden</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md">
              <div className="p-6 bg-[#003366] text-white">
                <h3 className="text-xl font-bold mb-2">Leasing</h3>
                <p className="opacity-90">Optimal för utrustning med lång livslängd</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Leasing är anpassat för utrustningstyper som har lång livslängd och som ni med sannolikhet kommer att
                  vilja behålla efter avtalstidens slut. Under avtalstiden kan ni uppgradera under vissa
                  förutsättningar. Efter avtalstiden kan ni köpa utrustningen till det förutbestämda restvärdet eller
                  förlänga det.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Idealisk för utrustning med lång livslängd</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Möjlighet till uppgradering under vissa förutsättningar</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Förutbestämt restvärde för köp efter avtalstiden</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md">
              <div className="p-6 bg-[#003366] text-white">
                <h3 className="text-xl font-bold mb-2">Funktionshyra</h3>
                <p className="opacity-90">Komplett lösning med service inkluderad</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  Funktionshyra är en finansieringsform speciellt lämpad för utrustning som är relaterade till hög eller
                  relativ hög produktion av enheter och där det finns behov för kontinuerlig service, tjänst och/eller
                  förbrukning. Service inkluderas och blir en bilaga till Funktiosnhyraavtalet, vilket innebär att flera
                  tjänster och produkter hamnar på en enda faktura istället för flera.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Service och support inkluderat</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Allt på en faktura - enkel administration</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3" />
                    <span className="text-gray-600">Möjlighet till uppgradering av mjuk- och hårdvara</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Försäkring för kontorsutrustning"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Försäkring anpassad för din utrustning</h2>
              <p className="text-gray-600 mb-4">
                Många upptäcker att företagsförsäkring täcker väldigt liten del av skadan och ibland inte täcker
                någonting alls då långt ifrån alla företagsförsäkring täcker hyrd och leasad utrustning över huvud
                taget. Om den gör det, är självrisken onödigt hög och handläggningstiden kan ta veckor eller månader.
              </p>
              <p className="text-gray-600 mb-6">
                Via leasing/hyra har du möjlighet att teckna en försäkring optimerad för din utrustning där du har en
                låg självrisk. Du får en hög ersättningsnivå, motsvarande lika bra utrustningen eller bättre än den som
                skadats eller förlorats. Handläggningstiden är alltid garanterat kortare än leveranstid av
                ersättningsobjekt. Detta då vi vet att utrustningen är viktig för din verksamhet.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Låg självrisk</p>
                    <p className="text-gray-600">Minimera dina kostnader vid eventuell skada.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Hög ersättningsnivå</p>
                    <p className="text-gray-600">Få likvärdig eller bättre utrustning vid skada eller förlust.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-800">Snabb handläggning</p>
                    <p className="text-gray-600">Minimera driftstopp med garanterat kort handläggningstid.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Våra samarbetspartners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi samarbetar med ledande finansiella partners för att erbjuda dig de bästa finansieringslösningarna.
            </p>
          </div>

          <div className="mb-8">
            <p className="text-gray-600 text-center mb-8">
              Våra sammarbetspartner när det gäller hyra – leasing och betallösningar är Swea Ekonomi samt Wasa Kredit
              vi har även kortbetalning via Visa Mastercard samt även vanlig banköverföring och Swish.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-6 bg-[#F5F5F5] rounded-lg h-24">
              <div className="text-center text-gray-600 font-medium">Swea Ekonomi</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-[#F5F5F5] rounded-lg h-24">
              <div className="text-center text-gray-600 font-medium">Wasa Kredit</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-[#F5F5F5] rounded-lg h-24">
              <div className="text-center text-gray-600 font-medium">Visa/Mastercard</div>
            </div>
            <div className="flex items-center justify-center p-6 bg-[#F5F5F5] rounded-lg h-24">
              <div className="text-center text-gray-600 font-medium">Swish</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
