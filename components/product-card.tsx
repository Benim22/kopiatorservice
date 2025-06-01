"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ProductModal } from "@/components/product-modal"
import { ChevronRight, Star, Info, Eye } from "lucide-react"

interface ProductCardProps {
  id?: string
  title: string
  description: string
  image: string
  status: string
  type?: string
  features?: string[]
  price?: string
  originalPrice?: string
  pageCount?: string
}

export function ProductCard({ 
  id = '', 
  title, 
  description, 
  image, 
  status,
  type = 'A4',
  features = [],
  price = '',
  originalPrice,
  pageCount
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getSkickBadge = (status: string) => {
    if (status === "Ny" || status === "new") {
      return "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg";
    } else if (status === "Fynd") {
      return "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg";
    }
    return "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg";
  };

  const getStatusIcon = (status: string) => {
    if (status === "Ny" || status === "new") return "✨";
    if (status === "Fynd") return "🔥";
    return "✅";
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-[#003366]/20 h-full flex flex-col transition-all duration-500 cursor-pointer group relative"
        whileHover={{ 
          y: -12, 
          scale: 1.02,
          transition: { duration: 0.4, ease: "easeOut" } 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366] via-[#004080] to-[#003366] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
          <div className="bg-white rounded-2xl h-full w-full"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-contain p-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            {/* Status Badge - Förbättrad */}
            <div className="absolute top-4 right-4">
              <Badge className={`${getSkickBadge(status)} text-sm font-bold px-3 py-2 rounded-full flex items-center gap-1`}>
                <span>{getStatusIcon(status)}</span>
                {status === "new" ? "Ny" : status}
              </Badge>
            </div>

            {/* Type Badge - Förbättrad */}
            {type && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/95 backdrop-blur-sm text-[#003366] text-sm font-bold px-3 py-2 border-2 border-[#003366]/20 rounded-full shadow-lg">
                  {type} Format
                </Badge>
              </div>
            )}

            {/* Page Count - Flyttad till bilden */}
            {pageCount && (
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-amber-500/90 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full shadow-lg">
                  📄 {pageCount} sidor
                </Badge>
              </div>
            )}

            {/* Premium Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Quick View Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-xl border-2 border-[#003366]/20"
              >
                <Eye className="h-6 w-6 text-[#003366]" />
              </motion.div>
            </div>
          </div>

          <div className="p-6 flex-grow flex flex-col relative">
            {/* Title Section */}
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#003366] mb-2 line-clamp-2 group-hover:text-[#002244] transition-colors leading-tight">
                {title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 line-clamp-3 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Features Preview - Förbättrad */}
            {features && features.length > 0 && (
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="h-4 w-4 text-[#003366]" />
                  <span className="text-sm font-semibold text-[#003366]">Viktiga funktioner:</span>
                </div>
                {features.slice(0, 3).map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start text-sm text-gray-700 bg-gray-50 rounded-lg p-2 border border-gray-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Star className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" />
                    <span className="line-clamp-2 font-medium">{feature}</span>
                  </motion.div>
                ))}
                {features.length > 3 && (
                  <div className="text-sm text-[#003366] font-semibold bg-[#003366]/5 rounded-lg p-2 text-center">
                    +{features.length - 3} fler avancerade funktioner
                  </div>
                )}
              </div>
            )}

            {/* CTA Button - Förbättrad */}
            <div className="mt-auto">
              <Button
                onClick={(e) => {
                  e.stopPropagation()
                  setIsModalOpen(true)
                }}
                className="w-full bg-gradient-to-r from-[#003366] to-[#004080] hover:from-[#002244] hover:to-[#003366] text-white text-base font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 touch-target group-hover:scale-105"
              >
                <Eye className="mr-2 h-5 w-5" />
                Visa detaljer & pris
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#003366]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </motion.div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          name: title,
          description,
          image_url: image,
          status: status as "Ny" | "Begagnad" | "Fynd",
          type: type as "A3" | "A4",
          features,
          price: price || 'Pris på begäran',
          originalPrice,
          pageCount
        }}
      />
    </>
  )
}
