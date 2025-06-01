"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { createClient } from '@/lib/supabaseClient'

interface Testimonial {
  id: string;
  name: string;
  company?: string | null;
  position?: string | null;
  content: string;
  rating: number;
  image_url?: string | null;
  is_active: boolean;
}

export function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching testimonials:', error)
        return
      }

      setTestimonials(data || [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay && testimonials.length > 0) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }, 6000) // Ökat till 6 sekunder för längre läsning
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg animate-pulse">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded mx-auto w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded mx-auto w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded mx-auto w-1/2"></div>
          </div>
          <div className="text-center mt-6">
            <div className="h-4 bg-gray-200 rounded mx-auto w-32 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded mx-auto w-24"></div>
          </div>
        </div>
      </div>
    )
  }

  if (testimonials.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg text-center">
          <Quote className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-sm sm:text-base">
            Inga kundrecensioner är tillgängliga för tillfället.
          </p>
        </div>
      </div>
    )
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
            
            {/* Testimonial content */}
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-center mb-4 sm:mb-6 italic leading-relaxed">
              "{testimonials[current].content}"
            </p>

            {/* Rating stars */}
            <div className="flex justify-center mb-4 sm:mb-6">
              {renderStars(testimonials[current].rating)}
            </div>

            {/* Customer info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-2">
                {testimonials[current].image_url && (
                  <img
                    src={testimonials[current].image_url!}
                    alt={testimonials[current].name}
                    className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none'
                    }}
                  />
                )}
                <div>
                  <p className="font-bold text-[#003366] text-sm sm:text-base">
                    {testimonials[current].name}
                  </p>
                  {testimonials[current].position && (
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {testimonials[current].position}
                    </p>
                  )}
                  {testimonials[current].company && (
                    <p className="text-gray-500 text-xs sm:text-sm font-medium">
                      {testimonials[current].company}
                    </p>
                  )}
                </div>
              </div>
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
        >
          <ChevronRight className="h-5 w-5 text-[#003366]" />
        </button>
      </div>

      {/* Dots indicator */}
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
