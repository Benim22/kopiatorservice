import { Metadata } from "next"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Allmänna Villkor - Kopiator Service AB",
  description: "Läs våra allmänna villkor för försäljning, uthyrning och service av kopiatorer och skrivare.",
}

export default function VillkorPage() {
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Allmänna Villkor</h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Dessa allmänna villkor gäller för alla affärer mellan Kopiator Service AB och våra kunder.
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
                <h2 className="text-2xl font-bold text-[#003366] mb-4">1. Allmänt</h2>
                <p className="text-gray-700 mb-4">
                  Dessa allmänna villkor gäller för alla avtal mellan Kopiator Service AB (org.nr: 556XXX-XXXX), 
                  nedan kallat "Företaget", och kund avseende försäljning, uthyrning och service av kopiatorer, 
                  skrivare och relaterade produkter.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Företaget:</strong> Kopiator Service AB</p>
                  <p><strong>Adress:</strong> Gamla Alingsåsvägen 24, 433 38 Partille</p>
                  <p><strong>Organisationsnummer:</strong> 556XXX-XXXX</p>
                  <p><strong>E-post:</strong> info@kopiatorservice.se</p>
                  <p><strong>Telefon:</strong> 031 – 19 55 00</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">2. Avtalsingående</h2>
                <p className="text-gray-700 mb-4">
                  Ett köpeavtal eller serviceavtal kommer till stånd när Företaget bekräftat kundens beställning 
                  skriftligen eller påbörjat leverans/utförande av tjänsten.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Offerter är giltiga i 30 dagar om inget annat anges</li>
                  <li>Priser kan ändras utan föregående meddelande</li>
                  <li>Alla priser anges exklusive moms om inget annat anges</li>
                  <li>Kunden ansvarar för att lämnade uppgifter är korrekta</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">3. Försäljning</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Leverans</h3>
                <p className="text-gray-700 mb-4">
                  Leverans sker till angiven adress. Leveranstiden är cirka 1-2 veckor om inget annat anges. 
                  Vid försenad leverans ska kunden kontakta Företaget för ny leveranstid.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Installation</h3>
                <p className="text-gray-700 mb-4">
                  Installation och driftsättning ingår normalt i priset för nya maskiner. Kunden ansvarar för 
                  att lämplig placering och elnätsanslutning finns tillgänglig.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.3 Garanti</h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Nya produkter:</strong> 12 månaders garanti</p>
                  <p className="text-gray-700 mb-2"><strong>Begagnade produkter:</strong> 6 månaders garanti</p>
                  <p className="text-gray-700"><strong>Förbrukningsmaterial:</strong> Ingen garanti vid felaktigt bruk</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">4. Uthyrning</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Hyresperiod</h3>
                <p className="text-gray-700 mb-4">
                  Uthyrning sker för minst 12 månader om inget annat avtalats. Avtalet förlängs automatiskt 
                  med 12 månader om det inte sägs upp med 3 månaders varsel.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Hyresgästs ansvar</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Behandla utrustningen varsamt och enligt instruktioner</li>
                  <li>Endast använda originalförbrukningsmaterial</li>
                  <li>Meddela skador eller fel omedelbart</li>
                  <li>Betala hyra i förskott enligt faktura</li>
                  <li>Återlämna utrustningen i samma skick som vid mottagandet</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Service och underhåll</h3>
                <p className="text-gray-700 mb-4">
                  Service och underhåll ingår normalt i hyresavtalet. Kunden ska tillåta Företaget att 
                  utföra nödvändigt underhåll under ordinarie arbetstid.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">5. Service och reparationer</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Serviceavtal</h3>
                <p className="text-gray-700 mb-4">
                  Serviceavtal kan tecknas för både sålda och hyrda maskiner. Servicen omfattar förebyggande 
                  underhåll, reparationer och reservdelar.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Responstid</h3>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Akut service:</strong> Inom 4 timmar (tilläggsavgift)</p>
                  <p className="text-gray-700 mb-2"><strong>Prioriterad service:</strong> Inom 24 timmar</p>
                  <p className="text-gray-700"><strong>Standard service:</strong> Inom 48 timmar</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Serviceområde</h3>
                <p className="text-gray-700 mb-4">
                  Service utförs normalt inom Stockholms län. För service utanför detta område kan 
                  tilläggsavgift för resa tillkomma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">6. Betalning</h2>
                <p className="text-gray-700 mb-4">Betalningsvillkor:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Faktura:</strong> 30 dagar netto om inget annat avtalats</li>
                  <li><strong>Dröjsmålsränta:</strong> Enligt räntelagen</li>
                  <li><strong>Påminnelseavgift:</strong> 60 kr per påminnelse</li>
                  <li><strong>Inkassoavgift:</strong> Enligt lag om skydd mot orimliga inkassoåtgärder</li>
                </ul>
                
                <div className="bg-red-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 font-semibold">
                    Vid utebliven betalning förbehåller sig Företaget rätten att återta levererad vara 
                    och häva avtalet på kundens bekostnad.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">7. Äganderätt och ansvar</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Äganderättsförbehåll</h3>
                <p className="text-gray-700 mb-4">
                  Företaget förbehåller sig äganderätten till levererade varor till dess full betalning 
                  erhållits. Vid uteblivna betalningar har Företaget rätt att återta varorna.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Ansvarsbegränsning</h3>
                <p className="text-gray-700 mb-4">
                  Företagets ansvar begränsas till direkt skada och får aldrig överstiga fakturerat belopp 
                  för den aktuella leveransen eller tjänsten. Ansvar för indirekt skada såsom produktionsbortfall, 
                  förlorad vinst eller liknande åtar sig Företaget inte.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">8. Force Majeure</h2>
                <p className="text-gray-700 mb-4">
                  Företaget ansvarar inte för förseningar eller andra följder av omständigheter som ligger 
                  utanför Företagets kontroll, såsom naturkatastrofer, krig, embargo, myndighetsåtgärder, 
                  strejk, brand eller liknande.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">9. Ångerrätt</h2>
                <p className="text-gray-700 mb-4">
                  För företagskunder gäller inte konsumentköplagen. Ångerrätt medges därför endast i 
                  särskilt överenskomna fall.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Observera:</strong> För privatpersoner gäller konsumentköplagen och 14 dagars 
                    ångerrätt vid distansförsäljning.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">10. Tvister</h2>
                <p className="text-gray-700 mb-4">
                  Tvister ska i första hand lösas genom förhandling mellan parterna. Om ingen överenskommelse 
                  kan nås ska tvisten avgöras vid svensk domstol med tillämpning av svensk rätt.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Tingsrätt:</strong> Stockholms tingsrätt ska vara första instans för eventuella tvister.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003366] mb-4">11. Kontakt</h2>
                <p className="text-gray-700 mb-4">
                  För frågor om dessa villkor eller andra affärsförhållanden, kontakta oss:
                </p>
                <div className="bg-[#F5F5F5] p-6 rounded-lg">
                  <p className="mb-2"><strong>E-post:</strong> info@kopiatorservice.se</p>
                  <p className="mb-2"><strong>Telefon:</strong> 031 – 19 55 00</p>
                  <p className="mb-2"><strong>Adress:</strong> Kopiator Service AB, Gamla Alingsåsvägen 24, 433 38 Partille</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Företaget förbehåller sig rätten att ändra dessa villkor. Ändringar träder i kraft 
                    30 dagar efter att de publicerats på vår webbplats.
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