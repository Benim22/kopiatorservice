import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { ProductSidebar } from "@/components/product-sidebar"
import { ProductModal } from "@/components/product-modal"
import { supabase } from "@/lib/supabase"
import { ProductList } from "./product-list"
import { ProductTabs } from "@/components/product-tabs"

// Denna funktion körs på servern vid varje sidladdning
async function getProducts() {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
    return []
  }

  return products
}

export default async function ProdukterPage() {
  const products = await getProducts()

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] min-h-[250px] sm:min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/SL1.jpg" alt="Våra Produkter" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#003366]/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Våra Produkter
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed">
            Utforska vårt breda sortiment av kopiatorer, skrivare och förbrukningsmaterial.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <ProductSidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#003366] mb-4 sm:mb-6">
                Utvalda Produkter
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Här är några av våra mest populära produkter och aktuella erbjudanden.
              </p>

              <ProductTabs products={products} />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#003366] mb-3 sm:mb-4">
              Våra Varumärken
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
              Vi samarbetar med världens ledande tillverkare för att erbjuda dig de bästa produkterna.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg h-16 sm:h-20 lg:h-24 shadow-sm">
                <div className="text-center text-gray-400 font-medium text-xs sm:text-sm">
                  Varumärke {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
