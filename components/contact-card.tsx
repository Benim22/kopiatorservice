import { Phone, Mail, Clock, MapPin } from "lucide-react"

export function ContactCard() {
  return (
    <div className="bg-[#F5F5F5] rounded-lg p-4 sm:p-6 space-y-4 sm:space-y-6">
      <div className="flex items-start">
        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#003366] mt-1 mr-2 sm:mr-3 shrink-0" />
        <div>
          <p className="font-medium text-sm sm:text-base">Telefon</p>
          <p className="text-gray-600 text-sm sm:text-base">031 – 19 55 00</p>
        </div>
      </div>

      <div className="flex items-start">
        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#003366] mt-1 mr-2 sm:mr-3 shrink-0" />
        <div>
          <p className="font-medium text-sm sm:text-base">E-post</p>
          <p className="text-gray-600 text-sm sm:text-base break-all">info@kopiatorservice.se</p>
        </div>
      </div>

      <div className="flex items-start">
        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#003366] mt-1 mr-2 sm:mr-3 shrink-0" />
        <div>
          <p className="font-medium text-sm sm:text-base">Öppettider</p>
          <p className="text-gray-600 text-xs sm:text-sm">Måndag-Fredag: 08:00-17:00</p>
          <p className="text-gray-600 text-xs sm:text-sm">Lördag-Söndag: Stängt</p>
        </div>
      </div>

      <div className="flex items-start">
        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#003366] mt-1 mr-2 sm:mr-3 shrink-0" />
        <div>
          <p className="font-medium text-sm sm:text-base">Adress</p>
          <p className="text-gray-600 text-sm sm:text-base">Gamla Alingsåsvägen 24</p>
          <p className="text-gray-600 text-sm sm:text-base">433 38 Partille</p>
        </div>
      </div>
    </div>
  )
}
