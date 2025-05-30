import { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Integritetspolicy - Kopiator Service AB",
  description: "Läs om hur Kopiator Service AB hanterar dina personuppgifter enligt GDPR och dataskyddsförordningen.",
}

export default function IntegritetspolicyPage() {
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Integritetspolicy</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Denna integritetspolicy beskriver hur Kopiator Service AB samlar in, använder och skyddar dina personuppgifter.
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
                <h2 className="text-2xl font-bold text-[#003366] mb-4">1. Personuppgiftsansvarig</h2>
                <p className="text-gray-700 mb-4">
                  Kopiator Service AB (org.nr: 556XXX-XXXX) är personuppgiftsansvarig för behandlingen av dina personuppgifter.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Postadress:</strong> Gamla Alingsåsvägen 24, 433 38 Partille</p>
                  <p><strong>E-post:</strong> info@kopiatorservice.se</p>
                  <p><strong>Telefon:</strong> 031 – 19 55 00</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">2. Vilka personuppgifter samlar vi in?</h2>
                <p className="text-gray-700 mb-4">Vi samlar in följande kategorier av personuppgifter:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Kontaktuppgifter:</strong> namn, e-postadress, telefonnummer, postadress</li>
                  <li><strong>Företagsinformation:</strong> företagsnamn, organisationsnummer, bransch</li>
                  <li><strong>Teknisk information:</strong> IP-adress, webbläsarinformation, cookies</li>
                  <li><strong>Transaktionsdata:</strong> orderhistorik, faktureringsuppgifter, leveransadresser</li>
                  <li><strong>Kommunikation:</strong> e-postkorrespondens, chatkonversationer, servicesamtal</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">3. Varför behandlar vi dina personuppgifter?</h2>
                <p className="text-gray-700 mb-4">Vi behandlar dina personuppgifter för följande ändamål:</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#003366] pl-4">
                    <h3 className="font-semibold text-gray-800">Avtalsuppfyllelse</h3>
                    <p className="text-gray-700">För att leverera produkter och tjänster enligt våra avtal</p>
                  </div>
                  <div className="border-l-4 border-[#003366] pl-4">
                    <h3 className="font-semibold text-gray-800">Kundservice</h3>
                    <p className="text-gray-700">För att svara på frågor och ge teknisk support</p>
                  </div>
                  <div className="border-l-4 border-[#003366] pl-4">
                    <h3 className="font-semibold text-gray-800">Marknadsföring</h3>
                    <p className="text-gray-700">För att skicka relevanta erbjudanden (med ditt samtycke)</p>
                  </div>
                  <div className="border-l-4 border-[#003366] pl-4">
                    <h3 className="font-semibold text-gray-800">Rättslig förpliktelse</h3>
                    <p className="text-gray-700">För att följa bokföringslagen och andra juridiska krav</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">4. Rättslig grund</h2>
                <p className="text-gray-700 mb-4">Vi behandlar dina personuppgifter baserat på:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Avtal:</strong> För att fullgöra våra åtaganden enligt avtal</li>
                  <li><strong>Rättslig förpliktelse:</strong> För att följa lagkrav</li>
                  <li><strong>Berättigat intresse:</strong> För marknadsföring till befintliga kunder</li>
                  <li><strong>Samtycke:</strong> För nyhetsbrev och frivillig marknadsföring</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">5. Vem delar vi uppgifter med?</h2>
                <p className="text-gray-700 mb-4">Vi kan dela dina personuppgifter med:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Leverantörer:</strong> För leverans av produkter och reservdelar</li>
                  <li><strong>Teknikleverantörer:</strong> För service och underhåll av IT-system</li>
                  <li><strong>Ekonomisystem:</strong> För fakturering och bokföring</li>
                  <li><strong>Myndigheter:</strong> Vid rättslig förpliktelse</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Vi delar aldrig dina uppgifter utanför EU/EES utan adekvat skyddsnivå.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">6. Hur länge sparar vi dina uppgifter?</h2>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <p><strong>Kundregister:</strong> 3 år efter sista kontakt</p>
                  <p><strong>Avtal och fakturor:</strong> 7 år (enligt bokföringslagen)</p>
                  <p><strong>Marknadsföringssamtycke:</strong> Tills du återkallar samtycket</p>
                  <p><strong>Webbloggar:</strong> 12 månader</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">7. Dina rättigheter</h2>
                <p className="text-gray-700 mb-4">Du har rätt att:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Få information</h3>
                    <p className="text-sm text-gray-700">Om hur vi behandlar dina uppgifter</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Få rättelse</h3>
                    <p className="text-sm text-gray-700">Om uppgifter är felaktiga</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Få radering</h3>
                    <p className="text-sm text-gray-700">Under vissa omständigheter</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Begränsa behandling</h3>
                    <p className="text-sm text-gray-700">I vissa situationer</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Dataportabilitet</h3>
                    <p className="text-sm text-gray-700">Få ut dina uppgifter</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Invända</h3>
                    <p className="text-sm text-gray-700">Mot viss behandling</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">8. Säkerhet</h2>
                <p className="text-gray-700 mb-4">
                  Vi vidtar lämpliga tekniska och organisatoriska säkerhetsåtgärder för att skydda dina personuppgifter 
                  mot obehörig åtkomst, förlust eller förstörelse.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Krypterad dataöverföring (SSL/TLS)</li>
                  <li>Regelbundna säkerhetskopior</li>
                  <li>Begränsad åtkomst på "need-to-know"-basis</li>
                  <li>Utbildning av personal</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">9. Kontakta oss</h2>
                <p className="text-gray-700 mb-4">
                  För frågor om denna integritetspolicy eller för att utöva dina rättigheter, kontakta oss:
                </p>
                <div className="bg-[#F5F5F5] p-6 rounded-lg">
                  <p className="mb-2"><strong>E-post:</strong> dataskydd@kopiatorservice.se</p>
                  <p className="mb-2"><strong>Telefon:</strong> 031 – 19 55 00</p>
                  <p className="mb-4"><strong>Post:</strong> Kopiator Service AB, Gamla Alingsåsvägen 24, 433 38 Partille</p>
                  <p className="text-sm text-gray-600">
                    Du har också rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du anser 
                    att vi behandlar dina personuppgifter felaktigt.
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