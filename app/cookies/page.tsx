import { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CookieSettingsButton } from "../components/CookieSettingsButton"

export const metadata: Metadata = {
  title: "Cookie-policy - Kopiator Service AB",
  description: "Läs om hur Kopiator Service AB använder cookies och liknande tekniker på vår webbplats.",
}

export default function CookiesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="text-white hover:bg-white/10 mr-4">
              <Link href="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Tillbaka till startsidan
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Cookie-policy</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Här förklarar vi hur Kopiator Service AB använder cookies och liknande tekniker på vår webbplats.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Senast uppdaterad:</strong> {new Date().toLocaleDateString('sv-SE')}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Gäller från:</strong> {new Date().toLocaleDateString('sv-SE')}
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Vad är cookies?</h2>
                <p className="text-gray-700 mb-4">
                  Cookies är små textfiler som lagras på din enhet (dator, mobiltelefon eller surfplatta) när du 
                  besöker vår webbplats. De hjälper oss att förbättra din upplevelse genom att komma ihåg dina 
                  preferenser och förstå hur du använder vår webbplats.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">Cookies innehåller vanligtvis:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Namnet på webbplatsen som skapade cookien</li>
                    <li>Livslängden för cookien</li>
                    <li>Ett unikt nummer eller värde</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Varför använder vi cookies?</h2>
                <p className="text-gray-700 mb-4">Vi använder cookies för att:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Förbättra funktionalitet</h3>
                    <p className="text-sm text-gray-700">Komma ihåg dina val och preferenser</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Analysera trafik</h3>
                    <p className="text-sm text-gray-700">Förstå hur besökare använder vår webbplats</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Säkerhet</h3>
                    <p className="text-sm text-gray-700">Skydda mot säkerhetshot och bedrägerier</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Marknadsföring</h3>
                    <p className="text-sm text-gray-700">Visa relevanta annonser och erbjudanden</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Typer av cookies vi använder</h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Nödvändiga cookies</h3>
                    <p className="text-gray-700 mb-3">
                      Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. De kan inte stängas av.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700"><strong>Exempel:</strong> Sessionshantering, säkerhetsinställningar, språkval</p>
                      <p className="text-sm text-gray-700"><strong>Lagringstid:</strong> Session eller upp till 1 år</p>
                      <p className="text-sm text-gray-700"><strong>Rättslig grund:</strong> Nödvändiga för tjänstens leverans</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Funktionella cookies</h3>
                    <p className="text-gray-700 mb-3">
                      Dessa cookies gör det möjligt för webbplatsen att komma ihåg val du gör för en förbättrad upplevelse.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700"><strong>Exempel:</strong> Användarpreferenser, formulärdata, regionala inställningar</p>
                      <p className="text-sm text-gray-700"><strong>Lagringstid:</strong> Upp till 2 år</p>
                      <p className="text-sm text-gray-700"><strong>Rättslig grund:</strong> Berättigat intresse eller samtycke</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Analyscookies</h3>
                    <p className="text-gray-700 mb-3">
                      Dessa cookies hjälper oss förstå hur besökare interagerar med webbplatsen genom att samla in information anonymt.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700"><strong>Exempel:</strong> Google Analytics, besöksstatistik, populära sidor</p>
                      <p className="text-sm text-gray-700"><strong>Lagringstid:</strong> Upp till 26 månader</p>
                      <p className="text-sm text-gray-700"><strong>Rättslig grund:</strong> Samtycke</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Marknadsföringscookies</h3>
                    <p className="text-gray-700 mb-3">
                      Dessa cookies används för att visa relevant reklam och mäta effektiviteten av reklamkampanjer.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700"><strong>Exempel:</strong> Facebook Pixel, Google Ads, LinkedIn Insight</p>
                      <p className="text-sm text-gray-700"><strong>Lagringstid:</strong> Upp till 2 år</p>
                      <p className="text-sm text-gray-700"><strong>Rättslig grund:</strong> Samtycke</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Tredjepartscookies</h2>
                <p className="text-gray-700 mb-4">
                  Vi använder även cookies från tredje parter för att förbättra vår service:
                </p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left">Leverantör</th>
                        <th className="border border-gray-300 p-3 text-left">Syfte</th>
                        <th className="border border-gray-300 p-3 text-left">Lagringstid</th>
                        <th className="border border-gray-300 p-3 text-left">Mer information</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Google Analytics</td>
                        <td className="border border-gray-300 p-3">Webbanalys och besöksstatistik</td>
                        <td className="border border-gray-300 p-3">26 månader</td>
                        <td className="border border-gray-300 p-3">
                          <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                            Googles sekretesspolicy
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Facebook Pixel</td>
                        <td className="border border-gray-300 p-3">Annonsspårning och konvertering</td>
                        <td className="border border-gray-300 p-3">2 år</td>
                        <td className="border border-gray-300 p-3">
                          <a href="https://www.facebook.com/privacy/explanation" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                            Facebooks datapolicy
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">LinkedIn Insight</td>
                        <td className="border border-gray-300 p-3">B2B-marknadsföring och analys</td>
                        <td className="border border-gray-300 p-3">2 år</td>
                        <td className="border border-gray-300 p-3">
                          <a href="https://www.linkedin.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                            LinkedIns sekretesspolicy
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Hantera dina cookie-inställningar</h2>
                <p className="text-gray-700 mb-4">
                  Du har kontroll över vilka cookies du accepterar. Här är dina alternativ:
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-3">🍪 Cookie-banner</h3>
                    <p className="text-gray-700 mb-3">
                      När du besöker vår webbplats för första gången kan du välja vilka kategorier av cookies du vill acceptera.
                    </p>
                    <CookieSettingsButton />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-3">🌐 Webbläsarinställningar</h3>
                    <p className="text-gray-700 mb-3">
                      Du kan också hantera cookies direkt i din webbläsare:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                      <li><a href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                      <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
                      <li><a href="https://support.microsoft.com/sv-se/help/17442/windows-internet-explorer-delete-manage-cookies" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Internet Explorer</a></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg mt-6">
                  <p className="text-gray-700">
                    <strong>Observera:</strong> Om du väljer att blockera alla cookies kan vissa funktioner på vår webbplats 
                    sluta fungera korrekt, som att komma ihåg dina inloggningsuppgifter eller språkinställningar.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Dina rättigheter</h2>
                <p className="text-gray-700 mb-4">Enligt GDPR och svensk lagstiftning har du rätt att:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">✋ Neka samtycke</h3>
                    <p className="text-sm text-gray-700">Du kan alltid säga nej till icke-nödvändiga cookies</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">🔄 Återkalla samtycke</h3>
                    <p className="text-sm text-gray-700">Du kan när som helst ändra dina cookie-inställningar</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">📋 Få information</h3>
                    <p className="text-sm text-gray-700">Du har rätt att få veta vilka cookies vi använder</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">🗑️ Radera data</h3>
                    <p className="text-sm text-gray-700">Du kan begära att vi raderar dina cookie-data</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Ändringar av denna policy</h2>
                <p className="text-gray-700 mb-4">
                  Vi kan komma att uppdatera denna cookie-policy för att återspegla förändringar i vår användning 
                  av cookies eller av juridiska skäl. Vi kommer att informera dig om väsentliga ändringar genom 
                  att publicera den nya policyn på vår webbplats.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Tips:</strong> Bokmärk denna sida för att enkelt hitta tillbaka till vår senaste cookie-policy.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">Kontakta oss</h2>
                <p className="text-gray-700 mb-4">
                  Om du har frågor om vår användning av cookies eller vill utöva dina rättigheter, tveka inte att kontakta oss:
                </p>
                <div className="bg-[#F5F5F5] p-6 rounded-lg">
                  <p className="mb-2"><strong>E-post:</strong> cookies@kopiatorservice.se</p>
                  <p className="mb-2"><strong>Telefon:</strong> 031 – 19 55 00</p>
                  <p className="mb-4"><strong>Postadress:</strong> Kopiator Service AB, Gamla Alingsåsvägen 24, 433 38 Partille</p>
                  <p className="text-sm text-gray-600">
                    Du kan också lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du anser att 
                    vi hanterar cookies på ett felaktigt sätt.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 