import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ProductCard } from "@/components/product-card"
import { ServiceCard } from "@/components/service-card"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { ContactCard } from "@/components/contact-card"
import { supabase } from "@/lib/supabase"
import type { Product } from "@/types/supabase"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kopiatorer & Skrivare Göteborg | Kopiator Service AB",
  description:
    "Pålitlig partner för kopiatorer och skrivare i Göteborg sedan 1993. Försäljning, uthyrning och service av nya och begagnade kontorsmaskiner.",
  keywords: [
    "kopiator service göteborg",
    "kopiatorer partille",
    "skrivare göteborg", 
    "kontorsmaskiner",
    "begagnade kopiatorer",
    "uthyrning kopiatorer",
    "service kopiatorer",
    "multifunktionsmaskiner",
    "A3 kopiatorer",
    "A4 skrivare",
    "färgkopiatorer",
    "dokumenthantering"
  ],
  openGraph: {
    title: "Kopiator Service AB - Ledande inom kopiatorer i Göteborg",
    description:
      "30+ års erfarenhet av kopiatorer och skrivare. Professionell service, försäljning och uthyrning i Göteborg och Västra Götaland.",
    url: "https://kopiatorservice.se",
    type: "website",
  },
  alternates: {
    canonical: "https://kopiatorservice.se/",
  },
  other: {
    "robots": "index, follow",
  },
}

// Hämta en produkt från varje kategori för startsidan
async function getProductsFromEachCategory() {
  const categories = ['Toppmodell', 'Mellanmodell', 'Instegsmodell']
  const products = []

  for (const category of categories) {
    const { data: categoryProducts, error } = await supabase
      .from('products')
      .select('*')
      .eq('model_category', category)
      .order('created_at', { ascending: false })
      .limit(1)

    if (!error && categoryProducts && categoryProducts.length > 0) {
      products.push(categoryProducts[0])
    }
  }

  return products as Product[]
}

export default async function Home() {
  const latestProducts = await getProductsFromEachCategory()

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      {/* Products Section */}
      <section id="products" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003366] mb-3 sm:mb-4">Våra Produkter</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Upptäck ett urval av våra högkvalitativa kopiatorer och skrivare, designade för att möta dina behov.
            </p>
          </div>

          {latestProducts && latestProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
              {latestProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.name ?? 'Produktnamn saknas'}
                  description={product.description ?? 'Beskrivning saknas'}
                  image={product.image_url ?? "/placeholder.svg?height=300&width=400"}
                  status={product.status ?? 'Ny'}
                  type={product.model_category ?? undefined}
                  features={product.features ?? []}
                  price={product.price?.toString() ?? 'Pris saknas'} 
                  originalPrice={product.original_price?.toString()}
                  pageCount={product.page_count?.toString()}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-10">
              <p>Kunde inte ladda produktlistan för tillfället. Försök igen senare.</p>
            </div>
          )}

          <div className="text-center">
            <Button asChild className="bg-[#003366] hover:bg-[#002244] text-sm sm:text-base px-6 sm:px-8">
              <Link href="/produkter">
                Se alla produkter <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003366] mb-3 sm:mb-4 tracking-tight">
              Våra Tjänster
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto px-4 leading-relaxed">
              Vi erbjuder omfattande tjänster för att säkerställa att din utrustning alltid fungerar optimalt och effektivt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-14">
            <ServiceCard
              title="Service & Underhåll"
              description="Regelbunden service och proaktivt underhåll för att maximera din utrustnings livslängd och prestanda."
              icon="settings"
            />
            <ServiceCard
              title="Försäljning & Uthyrning"
              description="Flexibla alternativ för både köp och hyra av moderna kopiatorer och skrivare, anpassade efter dina behov."
              icon="shopping-cart"
            />
            <ServiceCard
              title="Finansieringsalternativ"
              description="Skräddarsydda finansieringslösningar som passar ditt företags budget och investeringsplaner."
              icon="credit-card"
            />
          </div>

          <div className="text-center">
            <Button asChild className="bg-[#003366] hover:bg-[#002244] text-sm sm:text-base px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
              <Link href="/tjanster">
                Utforska våra tjänster för kopiatorer <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003366] mb-4 sm:mb-6 tracking-tight">
                Er Partner Inom Dokumenthantering
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Med över 20 års erfarenhet är Kopiator Service AB er pålitliga partner för allt inom kopiatorer och skrivare. 
                Vi är passionerade om att leverera högkvalitativa produkter och skräddarsydda tjänster till konkurrenskraftiga priser.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Vårt team av certifierade tekniker garanterar att er utrustning presterar optimalt, medan vår engagerade kundtjänst 
                alltid står redo att assistera er med expertis och snabba lösningar.
              </p>
              <Button asChild className="bg-[#003366] hover:bg-[#002244] text-sm sm:text-base px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                <Link href="/om-oss">
                  Läs om vår 30-åriga historia <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative h-72 sm:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-2xl group">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Vårt team på Kopiator Service AB"
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003366] mb-3 sm:mb-4 tracking-tight">
              Vad Våra Kunder Säger
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto px-4 leading-relaxed">
              Vi är stolta över förtroendet från våra kunder och deras positiva upplevelser med oss.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#003366] mb-3 sm:mb-4 tracking-tight">
              Kontakta Oss
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto px-4 leading-relaxed">
              Har du frågor, funderingar eller vill diskutera en lösning? Tveka inte att höra av dig – vi ser fram emot att hjälpa dig!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#003366] mb-6 text-center sm:text-left">
                Skicka ett meddelande direkt
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 block">
                      Namn <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366] text-sm sm:text-base transition-colors duration-200"
                      placeholder="Förnamn Efternamn"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                      E-post <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366] text-sm sm:text-base transition-colors duration-200"
                      placeholder="din.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 block">
                    Ämne
                  </label>
                  <select
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366] text-sm sm:text-base transition-colors duration-200 bg-white"
                  >
                    <option value="">Välj ett ämne...</option>
                    <option value="sales">Försäljning & Offert</option>
                    <option value="service">Service & Support</option>
                    <option value="rental">Uthyrning</option>
                    <option value="other">Övrigt</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 block">
                    Meddelande <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-[#003366] text-sm sm:text-base resize-vertical transition-colors duration-200"
                    placeholder="Hur kan vi hjälpa dig?"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-[#003366] hover:bg-[#002244] text-white text-sm sm:text-base py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
                  Skicka meddelande
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#003366] mb-5 text-center sm:text-left">
                  Våra kontaktuppgifter
                </h3>
                <ContactCard />
              </div>
              <div>
                 <h3 className="text-xl sm:text-2xl font-semibold text-[#003366] mb-5 text-center sm:text-left">
                  Hitta till oss
                </h3>
                <div className="h-72 sm:h-80 lg:h-[350px] rounded-xl overflow-hidden shadow-lg">
                  {/* Placeholder for Google Maps - Byt ut mot riktig karta */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.234567890123!2d12.10671234567890!3d57.73912345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff43a0b123456%3A0x123456789abcdef0!2sGamla%20Alingsåsvägen%2024%2C%20433%2038%20Partille%2C%20Sweden!5e0!3m2!1ssv!2sse!4v1703097600000!5m2!1ssv!2sse"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kopiator Service AB - Gamla Alingsåsvägen 24, 433 38 Partille"
                ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
