"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { ProductModal } from "@/components/product-modal"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  name: string
  description: string
  image_url: string
  status: string
  type: string
  features: string[]
  price: string
  original_price?: string
  page_count?: string
}

interface ProductListProps {
  initialProducts: Product[]
}

export function ProductList({ initialProducts }: ProductListProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ny":
        return "bg-green-500 text-white";
      case "Begagnad":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialProducts.map((product) => (
          <div key={product.id} className="bg-[#F5F5F5] rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48">
              <Image 
                src={product.image_url || "/placeholder.svg?height=200&width=400"} 
                alt={product.name} 
                fill 
                className="object-cover" 
              />
              <div className="absolute top-4 right-4">
                <Badge className={getStatusColor(product.status)}>
                  {product.status}
                </Badge>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#003366]">{product.type} Kopiator</span>
              </div>
              <h3 className="text-lg font-bold text-[#003366] mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
              <Button
                onClick={() => setSelectedProduct(product)}
                className="w-full bg-[#003366] hover:bg-[#002244]"
              >
                Läs mer <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={{
            name: selectedProduct.name,
            description: selectedProduct.description,
            image_url: selectedProduct.image_url,
            status: selectedProduct.status as "Ny" | "Begagnad" | "Fynd",
            type: selectedProduct.type as "A3" | "A4",
            features: selectedProduct.features,
            price: selectedProduct.price,
            originalPrice: selectedProduct.original_price,
            pageCount: selectedProduct.page_count
          }}
        />
      )}
    </>
  )
} 