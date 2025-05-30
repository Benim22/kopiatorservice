"use client"

import { Settings, ShoppingCart, CreditCard, Printer, PenToolIcon as Tool, Headphones } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "settings":
        return <Settings className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#003366]" />
      case "shopping-cart":
        return <ShoppingCart className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#003366]" />
      case "credit-card":
        return <CreditCard className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#003366]" />
      case "printer":
        return <Printer className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#003366]" />
      case "tool":
        return <Tool className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#003366]" />
      case "headphones":
        return <Headphones className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#003366]" />
      default:
        return <Settings className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-[#003366]" />
    }
  }

  return (
    <motion.div
      className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 text-center h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-center mb-4 sm:mb-6">{getIcon()}</div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#003366] mb-3 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  )
}
