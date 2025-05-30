import Link from "next/link"
import { ChevronRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ProductSidebar() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Accordion type="single" collapsible defaultValue="featured" className="space-y-2">
        <AccordionItem value="featured" className="border-none">
          <Link
            href="/produkter"
            className="flex items-center py-2 px-3 text-[#003366] hover:bg-gray-50 rounded-md font-medium"
          >
            <ChevronRight className="h-4 w-4 mr-2" />
            <span>Utvalda Produkter</span>
          </Link>
        </AccordionItem>

        <AccordionItem value="new" className="border-none">
          <AccordionTrigger className="text-[#003366] hover:bg-gray-50 rounded-md py-2 px-3">
            Nya Produkter
          </AccordionTrigger>
          <AccordionContent className="pl-4">
            <div className="flex flex-col space-y-1">
              <Link
                href="/produkter/ny-farg-a3"
                className="flex items-center py-1.5 px-3 text-gray-700 hover:text-[#003366] hover:bg-gray-50 rounded-md text-sm"
              >
                <ChevronRight className="h-3 w-3 mr-2 text-[#003366]" />
                <span>Färgkopiatorer A3</span>
              </Link>
              <Link
                href="/produkter/ny-farg-a4"
                className="flex items-center py-1.5 px-3 text-gray-700 hover:text-[#003366] hover:bg-gray-50 rounded-md text-sm"
              >
                <ChevronRight className="h-3 w-3 mr-2 text-[#003366]" />
                <span>Färgkopiatorer A4</span>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="used" className="border-none">
          <AccordionTrigger className="text-[#003366] hover:bg-gray-50 rounded-md py-2 px-3">
            Begagnade Produkter
          </AccordionTrigger>
          <AccordionContent className="pl-4">
            <div className="flex flex-col space-y-1">
              <Link
                href="/produkter/beg-farg-a3"
                className="flex items-center py-1.5 px-3 text-gray-700 hover:text-[#003366] hover:bg-gray-50 rounded-md text-sm"
              >
                <ChevronRight className="h-3 w-3 mr-2 text-[#003366]" />
                <span>Färgkopiatorer A3</span>
              </Link>
              <Link
                href="/produkter/beg-farg-a4"
                className="flex items-center py-1.5 px-3 text-gray-700 hover:text-[#003366] hover:bg-gray-50 rounded-md text-sm"
              >
                <ChevronRight className="h-3 w-3 mr-2 text-[#003366]" />
                <span>Färgkopiatorer A4</span>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="special" className="border-none">
          <Link
            href="/produkter/fynd"
            className="flex items-center py-2 px-3 text-[#003366] hover:bg-gray-50 rounded-md font-medium"
          >
            <ChevronRight className="h-4 w-4 mr-2" />
            <span>Fyndhörna</span>
          </Link>
        </AccordionItem>

        <AccordionItem value="supplies" className="border-none">
          <AccordionTrigger className="text-[#003366] hover:bg-gray-50 rounded-md py-2 px-3">
            Förbrukning
          </AccordionTrigger>
          <AccordionContent className="pl-4">
            <div className="flex flex-col space-y-1">
              <Link
                href="/produkter/toner"
                className="flex items-center py-1.5 px-3 text-gray-700 hover:text-[#003366] hover:bg-gray-50 rounded-md text-sm"
              >
                <ChevronRight className="h-3 w-3 mr-2 text-[#003366]" />
                <span>Toner & Bläck</span>
              </Link>
              <Link
                href="/produkter/forbrukning"
                className="flex items-center py-1.5 px-3 text-gray-700 hover:text-[#003366] hover:bg-gray-50 rounded-md text-sm"
              >
                <ChevronRight className="h-3 w-3 mr-2 text-[#003366]" />
                <span>Förbrukningsmaterial</span>
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
