import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://kopiatorservice.se'
  const currentDate = new Date().toISOString()
  
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily', lastmod: currentDate },
    { url: '/om-oss', priority: '0.8', changefreq: 'monthly', lastmod: currentDate },
    { url: '/tjanster', priority: '0.9', changefreq: 'weekly', lastmod: currentDate },
    { url: '/kontakt', priority: '0.7', changefreq: 'monthly', lastmod: currentDate },
    { url: '/produkter', priority: '0.9', changefreq: 'daily', lastmod: currentDate },
    { url: '/produkter/nya-kopiatorer', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/produkter/beg-kopiatorer', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/produkter/ny-farg-a3', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/produkter/beg-farg-a3', priority: '0.7', changefreq: 'weekly', lastmod: currentDate },
    { url: '/produkter/ny-farg-a4', priority: '0.8', changefreq: 'weekly', lastmod: currentDate },
    { url: '/produkter/beg-farg-a4', priority: '0.7', changefreq: 'weekly', lastmod: currentDate },
    { url: '/produkter/fynd', priority: '0.8', changefreq: 'daily', lastmod: currentDate },
    { url: '/produkter/toner', priority: '0.7', changefreq: 'weekly', lastmod: currentDate },
    { url: '/produkter/forbrukning', priority: '0.6', changefreq: 'monthly', lastmod: currentDate }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 