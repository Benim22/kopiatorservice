import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/SL5.jpg"
            alt="Kontakta Kopiator Service AB"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#003366]/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kontakta Oss</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Vi finns här för att hjälpa dig med alla dina frågor om kopiatorer, skrivare och relaterade tjänster.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-6">Skicka ett meddelande</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      Förnamn
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
                      placeholder="Ditt förnamn"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Efternamn
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
                      placeholder="Ditt efternamn"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-post
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
                      placeholder="Din e-post"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
                      placeholder="Ditt telefonnummer"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Ämne
                  </label>
                  <select
                    id="subject"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
                  >
                    <option value="">Välj ämne</option>
                    <option value="sales">Försäljning</option>
                    <option value="service">Service</option>
                    <option value="rental">Uthyrning</option>
                    <option value="support">Support</option>
                    <option value="other">Övrigt</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Meddelande
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
                    placeholder="Ditt meddelande"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 text-[#003366] focus:ring-[#003366] border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    Jag godkänner att mina uppgifter lagras enligt{" "}
                    <a href="/integritetspolicy" className="text-[#003366] underline">
                      integritetspolicyn
                    </a>
                  </label>
                </div>

                <Button type="submit" className="w-full bg-[#003366] hover:bg-[#002244]">
                  Skicka meddelande
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#003366] mb-6">Kontaktinformation</h2>

              <div className="bg-[#F5F5F5] rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[#003366] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-gray-600">031 – 19 55 00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[#003366] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">E-post</p>
                      <p className="text-gray-600">info@kopiatorservice.se</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[#003366] mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Huvudkontor</p>
                      <p className="text-gray-600">Gamla Alingsåsvägen 24</p>
                      <p className="text-gray-600">433 38 Partille</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="font-medium">Öppettider</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <div>
                      <p className="text-gray-600">Måndag-Fredag:</p>
                      <p className="text-gray-600">08:00-17:00</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Lördag-Söndag:</p>
                      <p className="text-gray-600">Stängt</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-[400px] rounded-lg overflow-hidden border">
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
      </section>

      
      
    </main>
  )
}
