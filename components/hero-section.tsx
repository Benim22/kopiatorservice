"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] xl:min-h-[85vh] 2xl:h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute w-full h-full object-cover"
          poster="/video-poster.jpg"
        >
          <source src="https://cdn.pixabay.com/video/2020/03/30/34594-402634196_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/80 via-[#003366]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[#003366]/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 py-12 sm:py-16 md:py-20">
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto sm:mx-0 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight text-center sm:text-left">
              Professionella lösningar för kopiatorer och skrivare
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-md xs:text-lg sm:text-xl md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
              Vi erbjuder försäljning, uthyrning och service av kopiatorer och skrivare för företag i alla storlekar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center sm:justify-start items-center"
          >
            <Button asChild size="lg" className="bg-white text-[#003366] hover:bg-gray-100 shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3 font-semibold rounded-lg w-full xs:w-auto">
              <Link href="#contact">Kontakta oss</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white border-2 hover:bg-white hover:text-[#003366] shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3 font-semibold rounded-lg w-full xs:w-auto"
            >
              <Link href="#products">Utforska produkter</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated wave at bottom - Responsive height */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-8 sm:h-12 md:h-16 lg:h-20 xl:h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
