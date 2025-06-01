import Link from "next/link"
import { ChevronRight, Star, Sparkles, Package, Zap, Droplets, Wrench } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ProductSidebar() {
  return (
    <div className="space-y-3">
      <Accordion type="single" collapsible defaultValue="featured" className="space-y-3">
        <AccordionItem value="featured" className="border-none">
          <Link
            href="/produkter"
            className="group flex items-center py-3 px-4 text-[#003366] hover:bg-gradient-to-r hover:from-[#003366] hover:to-[#004080] hover:text-white rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-lg border-2 border-transparent hover:border-[#003366]/20"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <Star className="h-4 w-4 text-white" fill="currentColor" />
            </div>
            <span className="flex-1">Utvalda Produkter</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </AccordionItem>

        <AccordionItem value="new" className="border-none">
          <AccordionTrigger className="group text-[#003366] hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 rounded-xl py-3 px-4 font-semibold transition-all duration-300 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-green-50 [&[data-state=open]]:to-green-100">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span>Nya Produkter</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-4 pr-2 pb-2">
            <div className="space-y-2 bg-gradient-to-r from-green-50/50 to-white rounded-lg p-3">
              <Link
                href="/produkter/ny-farg-a3"
                className="group flex items-center py-2 px-3 text-gray-700 hover:text-[#003366] hover:bg-white rounded-lg text-sm transition-all duration-200 border border-transparent hover:border-green-200 hover:shadow-sm"
              >
                <div className="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                  <span className="text-xs font-bold text-green-700">A3</span>
                </div>
                <span className="flex-1">Färgkopiatorer A3</span>
                <ChevronRight className="h-3 w-3 text-green-500 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/produkter/ny-farg-a4"
                className="group flex items-center py-2 px-3 text-gray-700 hover:text-[#003366] hover:bg-white rounded-lg text-sm transition-all duration-200 border border-transparent hover:border-green-200 hover:shadow-sm"
              >
                <div className="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                  <span className="text-xs font-bold text-green-700">A4</span>
                </div>
                <span className="flex-1">Färgkopiatorer A4</span>
                <ChevronRight className="h-3 w-3 text-green-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="used" className="border-none">
          <AccordionTrigger className="group text-[#003366] hover:bg-gradient-to-r hover:from-yellow-50 hover:to-yellow-100 rounded-xl py-3 px-4 font-semibold transition-all duration-300 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-yellow-50 [&[data-state=open]]:to-yellow-100">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <Package className="h-4 w-4 text-white" />
              </div>
              <span>Begagnade Produkter</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-4 pr-2 pb-2">
            <div className="space-y-2 bg-gradient-to-r from-yellow-50/50 to-white rounded-lg p-3">
              <Link
                href="/produkter/beg-farg-a3"
                className="group flex items-center py-2 px-3 text-gray-700 hover:text-[#003366] hover:bg-white rounded-lg text-sm transition-all duration-200 border border-transparent hover:border-yellow-200 hover:shadow-sm"
              >
                <div className="w-6 h-6 bg-yellow-100 rounded-md flex items-center justify-center mr-3 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-xs font-bold text-yellow-700">A3</span>
                </div>
                <span className="flex-1">Färgkopiatorer A3</span>
                <ChevronRight className="h-3 w-3 text-yellow-500 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/produkter/beg-farg-a4"
                className="group flex items-center py-2 px-3 text-gray-700 hover:text-[#003366] hover:bg-white rounded-lg text-sm transition-all duration-200 border border-transparent hover:border-yellow-200 hover:shadow-sm"
              >
                <div className="w-6 h-6 bg-yellow-100 rounded-md flex items-center justify-center mr-3 group-hover:bg-yellow-200 transition-colors">
                  <span className="text-xs font-bold text-yellow-700">A4</span>
                </div>
                <span className="flex-1">Färgkopiatorer A4</span>
                <ChevronRight className="h-3 w-3 text-yellow-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="special" className="border-none">
          <Link
            href="/produkter/fynd"
            className="group flex items-center py-3 px-4 text-[#003366] hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-lg border-2 border-transparent hover:border-red-200"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="flex-1">Fyndhörna</span>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-bold group-hover:bg-white group-hover:text-red-600">HOT!</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </AccordionItem>

        <AccordionItem value="supplies" className="border-none">
          <AccordionTrigger className="group text-[#003366] hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 rounded-xl py-3 px-4 font-semibold transition-all duration-300 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-blue-50 [&[data-state=open]]:to-blue-100">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <Droplets className="h-4 w-4 text-white" />
              </div>
              <span>Förbrukning</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-4 pr-2 pb-2">
            <div className="space-y-2 bg-gradient-to-r from-blue-50/50 to-white rounded-lg p-3">
              <Link
                href="/produkter/toner"
                className="group flex items-center py-2 px-3 text-gray-700 hover:text-[#003366] hover:bg-white rounded-lg text-sm transition-all duration-200 border border-transparent hover:border-blue-200 hover:shadow-sm"
              >
                <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                  <Droplets className="h-3 w-3 text-blue-600" />
                </div>
                <span className="flex-1">Toner & Bläck</span>
                <ChevronRight className="h-3 w-3 text-blue-500 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/produkter/forbrukning"
                className="group flex items-center py-2 px-3 text-gray-700 hover:text-[#003366] hover:bg-white rounded-lg text-sm transition-all duration-200 border border-transparent hover:border-blue-200 hover:shadow-sm"
              >
                <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                  <Wrench className="h-3 w-3 text-blue-600" />
                </div>
                <span className="flex-1">Förbrukningsmaterial</span>
                <ChevronRight className="h-3 w-3 text-blue-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
