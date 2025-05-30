"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface Product {
  id: string
  name: string
  description: string
  image_url: string
  status: string
  type: string
  features: string[]
  price: string
  product_category: string
  model_category: "Toppmodell" | "Mellanmodell" | "Instegsmodell"
  originalPrice?: string
  pageCount?: string
}

interface ProductTabsProps {
  products: Product[]
}

export function ProductTabs({ products }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("toppmodeller")
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
    type: "all"
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [filteredProducts, setFilteredProducts] = useState({
    toppmodeller: products.filter(p => p.model_category === "Toppmodell"),
    mellanmodeller: products.filter(p => p.model_category === "Mellanmodell"),
    instegsmodeller: products.filter(p => p.model_category === "Instegsmodell")
  })

  // Uppdatera filtrerade produkter när filters ändras
  useEffect(() => {
    const filterProducts = (products: Product[]) => {
      return products.filter(product => {
        const matchesSearch = filters.search === "" || 
          product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          product.description.toLowerCase().includes(filters.search.toLowerCase());
        
        const matchesStatus = filters.status === "all" || product.status === filters.status;
        const matchesType = filters.type === "all" || product.type === filters.type;

        return matchesSearch && matchesStatus && matchesType;
      });
    };

    setFilteredProducts({
      toppmodeller: filterProducts(products.filter(p => p.model_category === "Toppmodell")),
      mellanmodeller: filterProducts(products.filter(p => p.model_category === "Mellanmodell")),
      instegsmodeller: filterProducts(products.filter(p => p.model_category === "Instegsmodell"))
    });
  }, [filters, products]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      status: "all",
      type: "all"
    });
  };

  const hasActiveFilters = filters.status !== "all" || filters.type !== "all" || filters.search !== "";

  return (
    <div className="space-y-6">
      {/* Sökfält och filterknapp */}
      <div className="flex gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Sök produkt..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="pl-10"
          />
        </div>
        <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
              {hasActiveFilters && (
                <span className="ml-1 h-2 w-2 rounded-full bg-[#003366]" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filtrera Produkter</SheetTitle>
              <SheetDescription>
                Välj filter för att hitta exakt vad du letar efter
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="status">Skick</Label>
                <Select
                  value={filters.status}
                  onValueChange={(value) => handleFilterChange('status', value)}
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Alla" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alla</SelectItem>
                    <SelectItem value="Ny">Ny</SelectItem>
                    <SelectItem value="Begagnad">Begagnad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Typ</Label>
                <Select
                  value={filters.type}
                  onValueChange={(value) => handleFilterChange('type', value)}
                >
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Alla" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alla</SelectItem>
                    <SelectItem value="A3">A3</SelectItem>
                    <SelectItem value="A4">A4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {hasActiveFilters && (
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => {
                    clearFilters();
                    setIsFilterOpen(false);
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Rensa filter
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Aktiva filter-taggar */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {filters.status !== "all" && (
            <div className="bg-gray-100 text-sm rounded-full px-3 py-1 flex items-center gap-2">
              <span>Skick: {filters.status}</span>
              <button
                onClick={() => handleFilterChange('status', 'all')}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          {filters.type !== "all" && (
            <div className="bg-gray-100 text-sm rounded-full px-3 py-1 flex items-center gap-2">
              <span>Typ: {filters.type}</span>
              <button
                onClick={() => handleFilterChange('type', 'all')}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          {filters.search && (
            <div className="bg-gray-100 text-sm rounded-full px-3 py-1 flex items-center gap-2">
              <span>Sök: {filters.search}</span>
              <button
                onClick={() => handleFilterChange('search', '')}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      )}

      <Tabs defaultValue="toppmodeller" className="w-full">
        <TabsList className="w-full h-auto flex flex-col sm:grid sm:grid-cols-3 gap-1 sm:gap-2 rounded-lg bg-gray-100/80 p-1">
          <TabsTrigger 
            value="toppmodeller"
            className="w-full rounded-md py-3 px-4 text-sm sm:text-base font-medium ring-offset-white transition-all data-[state=active]:bg-[#003366] data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-gray-200 data-[state=active]:hover:bg-[#002244]"
          >
            Toppmodeller
          </TabsTrigger>
          <TabsTrigger 
            value="mellanmodeller"
            className="w-full rounded-md py-3 px-4 text-sm sm:text-base font-medium ring-offset-white transition-all data-[state=active]:bg-[#003366] data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-gray-200 data-[state=active]:hover:bg-[#002244]"
          >
            Mellanmodeller
          </TabsTrigger>
          <TabsTrigger 
            value="instegsmodeller"
            className="w-full rounded-md py-3 px-4 text-sm sm:text-base font-medium ring-offset-white transition-all data-[state=active]:bg-[#003366] data-[state=active]:text-white data-[state=active]:shadow-sm hover:bg-gray-200 data-[state=active]:hover:bg-[#002244]"
          >
            Instegsmodeller
          </TabsTrigger>
        </TabsList>

        <div className="mt-8">
          <TabsContent value="toppmodeller">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.toppmodeller.length > 0 ? (
                filteredProducts.toppmodeller.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    description={product.description}
                    image={product.image_url}
                    status={product.status}
                    type={product.type}
                    features={product.features || []}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    pageCount={product.pageCount}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">Inga toppmodeller matchar dina filter.</p>
                  {hasActiveFilters && (
                    <Button 
                      variant="link" 
                      onClick={clearFilters}
                      className="mt-2 text-[#003366]"
                    >
                      Rensa filter
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="mellanmodeller">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.mellanmodeller.length > 0 ? (
                filteredProducts.mellanmodeller.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    description={product.description}
                    image={product.image_url}
                    status={product.status}
                    type={product.type}
                    features={product.features || []}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    pageCount={product.pageCount}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">Inga mellanmodeller matchar dina filter.</p>
                  {hasActiveFilters && (
                    <Button 
                      variant="link" 
                      onClick={clearFilters}
                      className="mt-2 text-[#003366]"
                    >
                      Rensa filter
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          </TabsContent>

          <TabsContent value="instegsmodeller">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.instegsmodeller.length > 0 ? (
                filteredProducts.instegsmodeller.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    description={product.description}
                    image={product.image_url}
                    status={product.status}
                    type={product.type}
                    features={product.features || []}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    pageCount={product.pageCount}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500">Inga instegsmodeller matchar dina filter.</p>
                  {hasActiveFilters && (
                    <Button 
                      variant="link" 
                      onClick={clearFilters}
                      className="mt-2 text-[#003366]"
                    >
                      Rensa filter
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
} 