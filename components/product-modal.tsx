import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, CheckCircle } from "lucide-react"
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
    Ny: "bg-green-500 text-white",
    Begagnad: "bg-yellow-500 text-white",
    Fynd: "bg-red-100 text-red-700",
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex gap-2">
              <Badge variant="secondary" className={statusColors[product.status]}>
                {product.status}
              </Badge>
              <Badge variant="outline">{product.type} Kopiator</Badge>
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-[#003366]">{product.name}</DialogTitle>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
        >
          {/* Produkt Bild */}
          <div className="relative h-[300px] rounded-lg overflow-hidden bg-gray-100">
            {product.image_url ? (
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-400">Ingen bild tillgänglig</p>
              </div>
            )}
          </div>

          {/* Produkt Information */}
          <div className="space-y-4">
            <p className="text-gray-600">{product.description}</p>

            <div className="space-y-2">
              {product.features?.length > 0 && product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {product.pageCount && (
              <div className="flex items-center text-amber-600 mt-2">
                <span className="text-sm">Sidräknare: {product.pageCount}</span>
              </div>
            )}

            <div className="flex items-end gap-2 mt-4">
              <span className="text-2xl font-bold text-[#003366]">{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
              )}
            </div>

            <div className="flex gap-4 mt-6">
              <Button asChild className="flex-1 bg-[#003366] hover:bg-[#002244]">
                <Link href="/kontakt">
                  Kontakta oss <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
} 