"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Anna Johansson",
    company: "Johansson Redovisning AB",
    quote:
      "Vi har använt Kopiator Service AB i över 5 år och är mycket nöjda med deras service och produkter. Deras tekniker är alltid snabba och professionella.",
  },
  {
    id: 2,
    name: "Erik Lindberg",
    company: "Lindberg Advokatbyrå",
    quote:
      "Kopiator Service AB levererade exakt vad vi behövde för vårt kontor. Deras rådgivning hjälpte oss att hitta den perfekta lösningen för våra behov.",
  },
  {
    id: 3,
    name: "Maria Svensson",
    company: "Svensson & Partners",
    quote:
      "Utmärkt service och support. När vår kopiator gick sönder var de på plats inom några timmar och löste problemet snabbt och effektivt.",
  },
]

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -left-2 sm:-left-4 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
        <button
          onClick={prev}
          className="p-1 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-[#003366]" />
        </button>
      </div>

      <div className="overflow-hidden py-6 sm:py-10 px-2 sm:px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg"
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <Quote className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#003366]/20" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-center mb-4 sm:mb-6 italic leading-relaxed">
              "{testimonials[current].quote}"
            </p>
            <div className="text-center">
              <p className="font-bold text-[#003366] text-sm sm:text-base">{testimonials[current].name}</p>
              <p className="text-gray-500 text-xs sm:text-sm">{testimonials[current].company}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute -right-2 sm:-right-4 top-1/2 transform -translate-y-1/2 z-10 hidden sm:block">
        <button
          onClick={next}
          className="p-1 sm:p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-[#003366]" />
        </button>
      </div>

      {/* Mobile navigation buttons */}
      <div className="flex justify-center space-x-4 mb-4 sm:hidden">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-[#003366]" />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none transition-colors duration-200"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-[#003366]" />
        </button>
      </div>

      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
              index === current ? "bg-[#003366]" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
