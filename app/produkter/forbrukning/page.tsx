"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Search, Filter, ShoppingCart, CheckCircle } from "lucide-react"
import { ProductSidebar } from "@/components/product-sidebar"
import { ProductModal } from "@/components/product-modal"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

// Definiera Product interface
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

// Funktion för att hämta produkter per kategori
async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('id, name, description, image_url, status, category, features, price')
    .eq('category', categorySlug)
    .order('created_at', { ascending: false });

  if (error) {
    console.error(`Error fetching products for category ${categorySlug}:`, error);
    return [];
  }
  return (data || []) as Product[];
}

export default function ForbrukningPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const fetchedProducts = await getProductsByCategory("forbrukning");
      setProducts(fetchedProducts);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-gradient-to-br from-[#003366] via-[#004080] to-[#0066cc]">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Förbrukning</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Högkvalitativa trummor, reservdelar och förbrukningsvaror för att hålla dina maskiner igång optimalt.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Sök efter modellnummer eller produktnamn..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
              />
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <select className="appearance-none pl-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366] bg-white">
                  <option value="">Välj märke</option>
                  <option value="brand1">Märke 1</option>
                  <option value="brand2">Märke 2</option>
                  <option value="brand3">Märke 3</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronRight className="rotate-90 h-4 w-4 text-gray-400" />
                </div>
              </div>
              <Button className="flex items-center bg-[#003366] hover:bg-[#002244]">
                <Filter className="mr-2 h-4 w-4" /> Filtrera
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-1">
              <ProductSidebar />
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Vårt Sortiment av Förbrukningsmaterial</h2>
              <p className="text-gray-600 mb-8">
                Här hittar du vårt breda urval av förbrukningsmaterial som trummor, fixeringsenheter, och annat för att hålla dina maskiner i toppskick.
              </p>

              {isLoading ? (
                <p>Laddar produkter...</p>
              ) : products.length === 0 ? (
                <p>Inga produkter hittades i denna kategori.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
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
                            {product.features.slice(0, 3).map((feature, index) => (
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </main>
  )
}
