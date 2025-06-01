import React from 'react'

interface SEOHeadersProps {
  h1: string
  h2?: string[]
  h3?: string[]
  description?: string
}

export function SEOHeaders({ h1, h2 = [], h3 = [], description }: SEOHeadersProps) {
  return (
    <>
      {/* Huvudrubrik - endast en H1 per sida */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{h1}</h1>
      
      {description && (
        <p className="text-xl text-white/90 max-w-2xl mb-6">{description}</p>
      )}
      
      {/* H2 rubriker för huvudsektioner */}
      {h2.map((heading, index) => (
        <h2 key={index} className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003366] mb-4 sr-only">
          {heading}
        </h2>
      ))}
      
      {/* H3 rubriker för undersektioner */}
      {h3.map((heading, index) => (
        <h3 key={index} className="text-xl font-bold text-[#003366] mb-2 sr-only">
          {heading}
        </h3>
      ))}
    </>
  )
} 