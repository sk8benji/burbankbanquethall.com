import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://burbankbanquethall.com';
  const pages = [
    { url: '', changefreq: 'weekly', priority: '1.0' },
    { url: '/weddings', changefreq: 'weekly', priority: '0.9' },
    { url: '/birthday-parties', changefreq: 'weekly', priority: '0.9' },
    { url: '/quinceaneras', changefreq: 'weekly', priority: '0.9' },
    { url: '/sweet-sixteen', changefreq: 'weekly', priority: '0.9' },
    { url: '/pricing-request', changefreq: 'monthly', priority: '0.9' },
    { url: '/gallery', changefreq: 'monthly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
