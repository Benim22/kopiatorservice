import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star, Shield, Award, Truck } from "lucide-react"
import { ProductSidebar } from "@/components/product-sidebar"
import { ProductModal } from "@/components/product-modal"
import { supabase } from "@/lib/supabase"
import { ProductList } from "./product-list"
import { ProductTabs } from "@/components/product-tabs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Produkter - Kopiatorer & Skrivare | Nya & Begagnade | Kopiator Service AB",
  description:
    "Upptäck vårt breda sortiment av kopiatorer och skrivare: nya och begagnade A3/A4 färgmaskiner, multifunktionsmaskiner, toner och förbrukningsmaterial. Högkvalitativa produkter från ledande tillverkare.",
  keywords: [
    "kopiatorer produkter",
    "skrivare sortiment",
    "begagnade kopiatorer",
    "nya kopiatorer", 
    "A3 färgkopiatorer",
    "A4 skrivare",
    "multifunktionsmaskiner",
    "toner och bläck",
    "förbrukningsmaterial",
    "fynd kopiatorer",
    "kontorsmaskiner göteborg"
  ],
  openGraph: {
    title: "Produkter - Stort utbud av kopiatorer och skrivare",
    description:
      "Se vårt kompletta sortiment av nya och begagnade kopiatorer, skrivare och multifunktionsmaskiner från ledande tillverkare.",
    url: "https://kopiatorservice.se/produkter",
    type: "website",
  },
  alternates: {
    canonical: "https://kopiatorservice.se/produkter",
  },
}

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "Kopiator Service AB Produkter",
  "description": "Stor butik för kopiatorer, skrivare och kontorsmaskiner",
  "url": "https://kopiatorservice.se/produkter",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Kopiatorer och Skrivare",
    "itemListElement": [
      {
        "@type": "Product",
        "category": "Kopiatorer",
        "name": "Nya Kopiatorer",
        "description": "Moderna kopiatorer med senaste tekniken"
      },
      {
        "@type": "Product", 
        "category": "Kopiatorer",
        "name": "Begagnade Kopiatorer", 
        "description": "Kvalitetstestade begagnade kopiatorer med garanti"
      }
    ]
  }
}

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      
      {/* Premium Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/SL1.jpg" alt="Våra Produkter" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 via-[#003366]/70 to-[#004080]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 py-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
              <span className="text-white text-sm font-medium">Premiumkvalitet sedan 1993</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Våra <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Produkter</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed mb-8">
              Utforska vårt breda sortiment av kopiatorer, skrivare och förbrukningsmaterial från världens ledande tillverkare.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Shield, text: "Kvalitetsgaranti" },
                { icon: Award, text: "Expertcertifierad" },
                { icon: Truck, text: "Snabb leverans" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <feature.icon className="h-6 w-6 text-yellow-400" />
                  <span className="text-white font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg"
            >
              <Link href="#produkter" className="flex items-center gap-2">
                Upptäck vårt sortiment
                <ChevronRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-16 sm:h-20">
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#f8fafc', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#wave-gradient)"
              d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,90.7C960,75,1056,53,1152,48C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="produkter" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-6">
                    <h3 className="text-xl font-bold text-white">Produktkategorier</h3>
                  </div>
                  <div className="p-1">
                    <ProductSidebar />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#003366] to-[#004080] rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366]">
                      Utvalda Produkter
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2"></div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                  Här är några av våra mest populära produkter och aktuella erbjudanden. Klicka på produkterna för att se detaljerad information och priser.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <ProductTabs products={products} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Brands Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-gray-900 via-[#003366] to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="h-5 w-5 text-yellow-400" />
              <span className="text-white text-sm font-medium">Auktoriserade återförsäljare</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Våra <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Varumärken</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Vi samarbetar med världens ledande tillverkare för att erbjuda dig de bästa och mest pålitliga produkterna på marknaden.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-24 sm:h-28 lg:h-32 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="text-center text-white/60 group-hover:text-white font-bold text-sm sm:text-base transition-colors">
                    Varumärke {i}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg"
            >
              <Link href="/kontakt" className="flex items-center gap-2">
                Kontakta oss för rådgivning
                <ChevronRight className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
