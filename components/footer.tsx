import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 bg-white p-2 rounded-md inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BdeEWT5RNf6zgfyHgR2z0EXzBAMUiU.png"
                alt="Kopiator Service AB"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-white/80 mb-4 text-sm sm:text-base leading-relaxed">
              Vi erbjuder försäljning, uthyrning och service av kopiatorer och skrivare för företag i alla storlekar.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-white/80 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-white/80 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/produkter" className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200">
                  Produkter
                </Link>
              </li>
              <li>
                <Link href="/tjanster" className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200">
                  Tjänster
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200">
                  Om Oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Produkter</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produkter/nya-kopiatorer" className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200">
                  Nya Kopiatorer
                </Link>
              </li>
              <li>
                <Link href="/produkter/begagnade-kopiatorer" className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200">
                  Begagnade Kopiatorer
                </Link>
              </li>
              <li>
                <Link href="/produkter/toner-black" className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200">
                  Toner & Bläck
                </Link>
              </li>
              <li>
                <Link href="/tjanster/service-underhall" className="text-white/80 hover:text-white text-sm sm:text-base transition-colors duration-200">
                  Service & Underhåll
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Kontakt</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base">031 – 19 55 00</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 shrink-0" />
                <span className="text-sm sm:text-base break-all">info@kopiator.eu</span>
              </li>
              <li className="text-sm sm:text-base">
                <p>Gamla Alingsåsvägen 24</p>
                <p>433 38 Partille</p>
              </li>
              <li className="text-sm sm:text-base">
                <p className="font-medium mb-1">Öppettider:</p>
                <p>Måndag-Fredag: 08:00-17:00</p>
                <p>Lördag-Söndag: Stängt</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Utvecklad av Skaply */}
        <div className="mt-6 sm:mt-8 text-left">
          <Link 
            href="https://skaply.se" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors duration-200"
          >
            Utvecklad av Skaply
          </Link>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Kopiator Service AB. Alla rättigheter förbehållna.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-4">
            <Link href="/integritetspolicy" className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors duration-200">
              Integritetspolicy
            </Link>
            <Link href="/villkor" className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors duration-200">
              Villkor
            </Link>
            <Link href="/cookies" className="text-white/60 text-xs sm:text-sm hover:text-white transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
