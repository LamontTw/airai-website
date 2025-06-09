import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/admin/',
        '/private/',
        '*.json',
        '*.woff',
        '*.woff2',
        '*.ttf',
        '*.eot',
        '/favicon.ico',
        '/site.webmanifest',
        '/apple-touch-icon.png',
        '/android-chrome-*.png',
        '/favicon-*.png',
        '*.svg',
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url, // 明確指定首選域名
  }
} 