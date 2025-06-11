import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import '@/app/globals.css'
import { OrganizationSchema, WebsiteSchema } from '@/components/seo/StructuredData'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"),
  title: {
    default: 'AIRAI - 台湾をリードする企業AI導入エキスパート | AIRAI テクノロジー',
    template: '%s | AIRAI テクノロジー'
  },
  description: 'AIエージェント・インテリジェントカスタマーサービス、ソフトウェア外注を含む専門的な企業AI導入ソリューション。台湾の中小企業のデジタル変革を支援し、運営効率を向上させ、コストを削減。無料相談サービス。',
  keywords: [
    'AI導入',
    '企業AI',
    'インテリジェントカスタマーサービス',
    'ソフトウェア外注',
    'デジタル変革',
    '台湾AI',
    '中小企業',
    '自動化',
    '機械学習',
    '人工知能',
    'AIエージェント',
    'AIコンサルティング',
    'AIソリューション',
    'スマートテクノロジー',
    'AI実装ガイド'
  ],
  authors: [{ name: 'AIRAI テクノロジー', url: 'https://airai.tw' }],
  creator: 'AIRAI テクノロジー',
  publisher: 'AIRAI テクノロジー株式会社',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja`,
    siteName: 'AIRAI テクノロジー',
    title: 'AIRAI - 台湾をリードする企業AI導入エキスパート',
    description: 'AIエージェント・インテリジェントカスタマーサービス、ソフトウェア外注を含む専門的な企業AI導入ソリューション。',
    images: [
      {
        url: "/images/logo-full.png",
        width: 1200,
        height: 630,
        alt: "AIRAI テクノロジー",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIRAI - 台湾をリードする企業AI導入エキスパート',
    description: 'AIエージェント・インテリジェントカスタマーサービス、ソフトウェア外注を含む専門的な企業AI導入ソリューション。',
    images: ["/images/logo-full.png"],
    creator: "@airai_tw",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja`,
    languages: {
      'zh-TW': process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw",
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en`,
      'ja-JP': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja`,
    },
  },
}

export default function JapaneseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.className} ${notoSansJP.variable}`}>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* 語言切換連結 */}
        <link rel="alternate" hrefLang="zh-TW" href={process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"} />
        <link rel="alternate" hrefLang="en-US" href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en`} />
        <link rel="alternate" hrefLang="ja-JP" href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja`} />
        <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"} />
      </head>
      <body className={`${inter.className} ${notoSansJP.variable} font-sans antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <noscript>
          <div style={{ display: 'none' }}>
            このウェブサイトは最高のユーザーエクスペリエンスを提供するためにJavaScriptが必要です。JavaScriptを有効にするか、JavaScript対応ブラウザをご使用ください。
          </div>
        </noscript>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  )
} 