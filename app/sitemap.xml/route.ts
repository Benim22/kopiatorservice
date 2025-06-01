import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://kopiatorservice.se'
  
  const staticPages = [
    '',
    '/om-oss',
    '/tjanster', 
    '/kontakt',
    '/produkter',
    '/produkter/nya-kopiatorer',
    '/produkter/beg-kopiatorer',
    '/produkter/ny-farg-a3',
    '/produkter/beg-farg-a3',
    '/produkter/ny-farg-a4',
    '/produkter/beg-farg-a4',
    '/produkter/fynd',
    '/produkter/toner',
    '/produkter/forbrukning'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : page.includes('/produkter/') ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.includes('/produkter/') ? '0.8' : '0.7'}</priority>
  </url>`
    )
    .join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 