"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart, CheckCircle } from "lucide-react"
import { ProductModal } from "@/components/product-modal"

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
  status: string | null;
  category: string | null;
  features: string[] | null;
  price: number | null;
}

interface TonerProductListProps {
  products: Product[];
}

export function TonerProductList({ products }: TonerProductListProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Inga produkter hittades i denna kategori.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <Image
                src={product.image_url || "/placeholder.svg?height=200&width=300"}
                alt={product.name || 'Produktbild'}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#003366] mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              {product.features && product.features.length > 0 && (
                <div className="mb-4">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center mb-1">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-bold text-[#003366] block">
                    {product.price ? `${product.price.toLocaleString('sv-SE')} kr` : 'Pris på begäran'}
                  </span>
                </div>
                <Button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-[#003366] hover:bg-[#002244]"
                >
                  Läs mer <ShoppingCart className="ml-2 h-4 w-4" />
                </Button>
              </div>
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
            image_url: selectedProduct.image_url || '',
            status: (selectedProduct.status as "Ny" | "Begagnad" | "Fynd") || "Ny",
            type: "A4" as "A3" | "A4",
            features: selectedProduct.features || [],
            price: selectedProduct.price ? `${selectedProduct.price.toLocaleString('sv-SE')}` : 'Pris på begäran',
          }}
        />
      )}
    </>
  )
} 