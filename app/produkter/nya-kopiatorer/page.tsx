"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle } from "lucide-react"
import { ProductSidebar } from "@/components/product-sidebar"
import { ProductModal } from "@/components/product-modal"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Badge } from "@/components/ui/badge"

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

async function getFeaturedProducts(categorySlug: string, limit: number = 3): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('id, name, description, image_url, status, category, features, price')
    .eq('category', categorySlug)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error(`Error fetching featured products for ${categorySlug}:`, error);
    return [];
  }
  return (data || []) as Product[];
}

export default function NyaKopiatorerOversiktPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

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

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const fetchedProducts = await getFeaturedProducts("nya-kopiatorer", 3); 
      setFeaturedProducts(fetchedProducts);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Nya Kopiatorer" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#003366]/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nya Kopiatorer</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Upptäck vårt breda sortiment av moderna och högpresterande kopiatorer för alla behov.
          </p>
        </div>
      </section>

      {/* Main Content Grid with Sidebar */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <ProductSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="prose max-w-none mb-12">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">Nya Kopiatorer</h2>
              <p className="text-gray-600">
                Vi erbjuder ett brett utbud av nya kopiatorer från ledande tillverkare. Våra maskiner är utrustade med den senaste tekniken och är anpassade för olika behov och budgetar.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Senaste tekniken för optimal prestanda</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Energieffektiva och miljövänliga lösningar</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Omfattande garantier och support</span>
                </div>
              </div>
            </div>

            {/* Featured Products - Nu datadriven */}
            <div className="py-16 bg-[#F5F5F5]">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-[#003366] mb-4">Utvalda Produkter</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Upptäck våra mest populära modeller med de senaste funktionerna och teknologierna.
                  </p>
                </div>

                {isLoading ? (
                  <p>Laddar utvalda produkter...</p>
                ) : featuredProducts.length === 0 ? (
                  <p>Inga utvalda produkter hittades.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                      <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                        <div className="relative h-64">
                          <Image
                            src={product.image_url || "/placeholder.svg?height=300&width=400"}
                            alt={product.name || 'Produktbild'}
                            fill
                            className="object-contain p-4"
                          />
                          {product.status && (
                            <div className="absolute top-4 right-4">
                              <Badge className={getStatusColor(product.status)}>
                                {product.status}
                              </Badge>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-[#003366] mb-2">{product.name}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                          {product.price && (
                            <p className="text-lg font-bold text-[#003366] mb-4">{product.price} kr</p>
                          )}
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
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={{
            name: selectedProduct.name,
            description: selectedProduct.description || '',
            image_url: selectedProduct.image_url || '',
            status: selectedProduct.status as "Ny" | "Begagnad" | "Fynd",
            type: "A3",
            features: selectedProduct.features || [],
            price: selectedProduct.price ? `${selectedProduct.price} kr` : '',
          }}
        />
      )}
    </main>
  )
}
