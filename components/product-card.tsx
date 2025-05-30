"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ProductModal } from "@/components/product-modal"

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
      return "bg-green-500 text-white hover:bg-green-600";
    }
    return "bg-yellow-500 text-white hover:bg-yellow-600";
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
            <Badge className={getSkickBadge(status)}>
              {status === "new" ? "Ny" : status}
            </Badge>
          </div>
        </div>
        <div className="p-3 sm:p-4 lg:p-6 flex-grow flex flex-col">
          {type && (
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-medium text-[#003366]">{type} Kopiator</span>
            </div>
          )}
          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#003366] mb-2 line-clamp-2">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3 leading-relaxed flex-grow">{description}</p>
          {features && features.length > 0 && (
            <div className="mb-3 sm:mb-4">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="flex items-center mb-1">
                  <span className="text-xs text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          )}
          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[#003366] hover:bg-[#002244] text-xs sm:text-sm py-2 sm:py-3 mt-auto"
          >
            Läs mer
          </Button>
        </div>
      </motion.div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{
          name: title,
          description,
          image_url: image,
          status: status,
          type: type as "A3" | "A4",
          features,
          price,
          originalPrice,
          pageCount
        }}
      />
    </>
  )
}
