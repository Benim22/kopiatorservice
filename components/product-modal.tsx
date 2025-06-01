import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, CheckCircle, Star, Package, Calendar, Zap } from "lucide-react"
import Link from "next/link"

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    description: string
    image_url: string
    status: "Ny" | "Begagnad" | "Fynd"
    type: "A3" | "A4"
    features: string[]
    price: string
    originalPrice?: string
    pageCount?: string
  }
}

export function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const statusColors = {
    Ny: "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg",
    Begagnad: "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg",
    Fynd: "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg",
  }

  const statusIcons = {
    Ny: <Star className="h-4 w-4" />,
    Begagnad: <Package className="h-4 w-4" />,
    Fynd: <Zap className="h-4 w-4" />,
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[98vw] max-h-[98vh] overflow-y-auto p-0 gap-0 rounded-xl shadow-2xl border-0">
        <div className="relative bg-gradient-to-br from-white to-gray-50">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#003366] to-[#004080] text-white p-6 sm:p-8 rounded-t-xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={`${statusColors[product.status]} text-sm px-4 py-2 rounded-full flex items-center gap-2 font-medium`}>
                {statusIcons[product.status]}
                {product.status}
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2 rounded-full bg-white/10 border-white/20 text-white font-medium">
                {product.type} Kopiator
              </Badge>
            </div>
            <DialogTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              {product.name}
            </DialogTitle>
          </div>

          <div className="p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8"
            >
              {/* Produkt Bild - Större sektion */}
              <div className="lg:col-span-2">
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-white border-2 border-gray-100 shadow-lg">
                  {product.image_url ? (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-contain p-6 hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 98vw, (max-width: 1024px) 45vw, 40vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-400 text-lg">Ingen bild tillgänglig</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pricing Section - Under bilden */}
                <div className="mt-6 bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border-2 border-gray-100 shadow-lg">
                  <h3 className="text-lg font-semibold text-[#003366] mb-3">Pris</h3>
                  <div className="flex items-end gap-4">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003366]">
                      {product.price}<span className="text-xl text-gray-600">:-</span>
                    </div>
                    {product.originalPrice && (
                      <div className="text-xl sm:text-2xl text-gray-500 line-through mb-2">
                        {product.originalPrice}<span className="text-sm">:-</span>
                      </div>
                    )}
                  </div>
                  {product.originalPrice && (
                    <div className="flex items-center gap-2 mt-3">
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        Du sparar!
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Produkt Information - Större sektion */}
              <div className="lg:col-span-3 space-y-6">
                {/* Beskrivning */}
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-lg">
                  <h3 className="text-xl font-semibold text-[#003366] mb-4 flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Beskrivning
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{product.description}</p>
                </div>

                {/* Page Count */}
                {product.pageCount && (
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 text-amber-800">
                      <div className="bg-amber-200 p-2 rounded-lg">
                        📄
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Sidräknare</p>
                        <p className="text-xl font-bold">{product.pageCount}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features */}
                {product.features?.length > 0 && (
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-100 shadow-lg">
                    <h3 className="text-xl font-semibold text-[#003366] mb-6 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Funktioner & Egenskaper
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-800 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-[#003366] to-[#004080] rounded-xl p-6 shadow-xl">
                  <h3 className="text-white text-lg font-semibold mb-4">Intresserad? Kontakta oss!</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="flex-1 bg-white text-[#003366] hover:bg-gray-100 shadow-lg touch-target font-semibold text-base py-3">
                      <Link href="/kontakt" className="flex items-center justify-center">
                        Kontakta oss för mer info <ChevronRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      asChild 
                      className="flex-1 border-2 border-white text-white hover:bg-white hover:text-[#003366] touch-target font-semibold text-base py-3"
                    >
                      <Link href="/produkter" className="flex items-center justify-center">
                        Se fler produkter
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 