"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, CheckCircle } from "lucide-react"
import { ProductSidebar } from "@/components/product-sidebar"
import { ProductModal } from "@/components/product-modal"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

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

export default function NyFargkopiatorerA3Page() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const fetchedProducts = await getProductsByCategory("ny-farg-a3");
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nya Färgkopiatorer A3</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Toppmoderna A3-färgkopiatorer med den senaste tekniken för professionella kontorsmiljöer och höga volymer.
          </p>
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
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Nya Färgkopiatorer A3</h2>
              <p className="text-gray-600 mb-8">
                Våra A3-färgkopiatorer erbjuder högsta kvalitet och prestanda för krävande kontorsmiljöer. Perfekta för
                företag med behov av professionella utskrifter i större format.
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
                          src={product.image_url || "/placeholder.svg?height=300&width=400"}
                          alt={product.name || 'Produktbild'}
                          fill
                          className="object-contain p-4"
                        />
                        {product.status === "Populär" && (
                          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                            Populär
                          </div>
                        )}
                        {product.status === "Nyhet" && (
                          <div className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                            Nyhet
                          </div>
                        )}
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
                            Läs mer
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="bg-[#F5F5F5] rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-[#003366] mb-4">Fördelar med våra A3-färgkopiatorer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-800">Högsta utskriftskvalitet</p>
                      <p className="text-gray-600">Kristallklara utskrifter med levande färger och skarpa detaljer.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-800">Snabb utskriftshastighet</p>
                      <p className="text-gray-600">Upp till 65 sidor per minut för maximal produktivitet.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-800">Avancerade efterbehandlingsalternativ</p>
                      <p className="text-gray-600">Häftning, hålslagning och broschyrframställning.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-800">Låg driftskostnad</p>
                      <p className="text-gray-600">Energieffektiva med låg förbrukning av toner och energi.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Hittar du inte den modell du söker? Vi har fler modeller tillgängliga och kan även specialbeställa
                  efter dina specifika behov.
                </p>
                <Button asChild size="lg" className="bg-[#003366] hover:bg-[#002244]">
                  <Link href="/kontakt">
                    Kontakta oss för mer information <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
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
