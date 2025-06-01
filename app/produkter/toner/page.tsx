import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Search, Filter, ShoppingCart, CheckCircle } from "lucide-react"
import { ProductSidebar } from "@/components/product-sidebar"
import { ProductModal } from "@/components/product-modal"
import { supabase } from "@/lib/supabase"
import type { Metadata } from "next"
import { TonerProductList } from "./toner-product-list"

export const metadata: Metadata = {
  title: "Toner & Bläck - Förbrukningsmaterial för Kopiatorer & Skrivare | Kopiator Service AB",
  description:
    "Högkvalitativt förbrukningsmaterial för alla typer av skrivare och kopiatorer. Originaltoner, kompatibla patroner och bläck till alla märken. Snabb leverans och konkurrerande priser i Göteborg.",
  keywords: [
    "toner skrivare",
    "bläckpatroner",
    "förbrukningsmaterial",
    "originaltoner",
    "kompatibla patroner",
    "toner kopiatorer",
    "bläck skrivare",
    "patroner göteborg",
    "billig toner",
    "toner leverans"
  ],
  openGraph: {
    title: "Toner & Bläck - Förbrukningsmaterial för alla skrivare",
    description:
      "Köp toner och bläckpatroner till din skrivare eller kopiator. Originaltoner och kompatibla alternativ med snabb leverans.",
    url: "https://kopiatorservice.se/produkter/toner",
    type: "website",
  },
  alternates: {
    canonical: "https://kopiatorservice.se/produkter/toner",
  },
}

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

export default async function TonerOchBlackPage() {
  const products = await getProductsByCategory("toner");
  
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/placeholder.svg?height=600&width=1920" alt="Toner & Bläck" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#003366]/70"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Toner & Bläck</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Högkvalitativt förbrukningsmaterial för alla typer av skrivare och kopiatorer.
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

      {/* Main Content with Sidebar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <ProductSidebar />
            </div>

            {/* Product Listing */}
            <div className="md:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#003366] mb-4">Vårt sortiment av Toner & Bläck</h2>
                <p className="text-gray-600">Hitta toner, bläckpatroner och annat förbrukningsmaterial till din skrivare eller kopiator.</p>
              </div>

              <TonerProductList products={products} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Varför välja oss för toner & bläck?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi erbjuder både originaltoner och kompatibla alternativ med samma kvalitet men till bättre priser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Kvalitetsgaranti</h3>
              <p className="text-gray-600">Alla våra produkter kommer med fullständig garanti och stöd.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Snabb leverans</h3>
              <p className="text-gray-600">Beställ före 14:00 så skickar vi samma dag.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] mb-2">Expert rådgivning</h3>
              <p className="text-gray-600">Våra specialister hjälper dig hitta rätt produkter.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
