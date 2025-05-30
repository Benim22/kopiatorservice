"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Home,
  Printer,
  Wrench,
  Building2,
  Mail
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-1 md:py-2" : "bg-white/90 py-2 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 shrink-0">
            <div className="h-8 w-32 sm:h-10 sm:w-40 md:h-12 md:w-48 relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-BdeEWT5RNf6zgfyHgR2z0EXzBAMUiU.png"
                alt="Kopiator Service AB"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on medium and smaller screens */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            <Link href="/" className="text-[#003366] hover:text-opacity-80 flex items-center transition-colors duration-200 text-sm 2xl:text-base">
              <Home className="mr-1 h-4 w-4" /> Hem
            </Link>
            <Link href="/produkter" className="text-[#003366] hover:text-opacity-80 flex items-center transition-colors duration-200 text-sm 2xl:text-base">
              <Printer className="mr-1 h-4 w-4" /> Produkter
            </Link>

            <div className="relative group">
              <button
                onClick={() => toggleDropdown("services")}
                className={`flex items-center text-[#003366] hover:text-opacity-80 focus:outline-none transition-colors duration-200 text-sm 2xl:text-base`}
              >
                <Wrench className="mr-1 h-4 w-4" /> Tjänster <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 border border-gray-100"
                    onMouseLeave={closeDropdown}
                  >
                    <Link
                      href="/tjanster/service-underhall"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Service & Underhåll
                    </Link>
                    <Link
                      href="/tjanster/forsaljning-uthyrning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Försäljning & Uthyrning
                    </Link>
                    <Link
                      href="/tjanster/finansiering"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Finansieringsalternativ
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/om-oss" className="text-[#003366] hover:text-opacity-80 flex items-center transition-colors duration-200 text-sm 2xl:text-base">
              <Building2 className="mr-1 h-4 w-4" /> Om Oss
            </Link>

            <Link href="/kontakt" className="text-[#003366] hover:text-opacity-80 flex items-center transition-colors duration-200 text-sm 2xl:text-base">
              <Mail className="mr-1 h-4 w-4" /> Kontakt
            </Link>
          </nav>

          {/* Contact Info and Button - Hidden on medium and smaller screens */}
          <div className="hidden xl:flex items-center">
            <div className="mr-3 2xl:mr-4 text-right">
              <p className="text-[#003366] text-xs 2xl:text-sm">Ring oss</p>
              <p className="text-[#003366] font-bold text-sm 2xl:text-base">031 – 19 55 00</p>
            </div>
            <Button asChild className="bg-[#003366] hover:bg-[#002244] text-sm 2xl:text-base px-3 2xl:px-4">
              <Link href="/kontakt">
                <Phone className="mr-2 h-4 w-4" /> Kontakta oss
              </Link>
            </Button>
          </div>

          {/* Tablet Navigation - Visible on lg and md screens */}
          <div className="hidden lg:flex xl:hidden items-center space-x-4">
            <Link href="/" className="text-[#003366] hover:text-opacity-80 transition-colors duration-200">
              <Home className="h-5 w-5" />
            </Link>
            <Link href="/produkter" className="text-[#003366] hover:text-opacity-80 transition-colors duration-200">
              <Printer className="h-5 w-5" />
            </Link>
            <Link href="/om-oss" className="text-[#003366] hover:text-opacity-80 transition-colors duration-200">
              <Building2 className="h-5 w-5" />
            </Link>
            <Link href="/kontakt" className="text-[#003366] hover:text-opacity-80 transition-colors duration-200">
              <Mail className="h-5 w-5" />
            </Link>
            <Button asChild size="sm" className="bg-[#003366] hover:bg-[#002244]">
              <Link href="/kontakt">
                <Phone className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button - Visible on medium and smaller screens */}
          <button
            className="lg:hidden relative z-10 focus:outline-none p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-[#003366]" /> : <Menu className="h-6 w-6 text-[#003366]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced for better mobile experience */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="flex items-center py-3 px-2 text-[#003366] font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Home className="mr-3 h-5 w-5" /> Hem
                </Link>
                <Link
                  href="/produkter"
                  className="flex items-center py-3 px-2 text-[#003366] font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Printer className="mr-3 h-5 w-5" /> Produkter
                </Link>

                <div>
                  <button
                    onClick={() => toggleDropdown("mobileServices")}
                    className="flex items-center justify-between w-full py-3 px-2 text-[#003366] font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <Wrench className="mr-3 h-5 w-5" /> Tjänster
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === "mobileServices" ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "mobileServices" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100"
                      >
                        <Link
                          href="/tjanster/service-underhall"
                          className="block py-2 px-4 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Service & Underhåll
                        </Link>
                        <Link
                          href="/tjanster/forsaljning-uthyrning"
                          className="block py-2 px-4 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Försäljning & Uthyrning
                        </Link>
                        <Link
                          href="/tjanster/finansiering"
                          className="block py-2 px-4 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          Finansieringsalternativ
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/om-oss" 
                  className="flex items-center py-3 px-2 text-[#003366] font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200" 
                  onClick={() => setIsOpen(false)}
                >
                  <Building2 className="mr-3 h-5 w-5" /> Om Oss
                </Link>
                <Link 
                  href="/kontakt" 
                  className="flex items-center py-3 px-2 text-[#003366] font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200" 
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="mr-3 h-5 w-5" /> Kontakt
                </Link>

                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <div className="text-center sm:text-left">
                    <p className="text-[#003366] text-sm">Ring oss</p>
                    <p className="text-[#003366] font-bold text-lg">031 – 19 55 00</p>
                  </div>
                  <Button asChild className="w-full bg-[#003366] hover:bg-[#002244] py-3">
                    <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                      <Phone className="mr-2 h-4 w-4" /> Kontakta oss
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
