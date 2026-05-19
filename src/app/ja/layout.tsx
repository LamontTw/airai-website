import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"),
  title: {
    default: 'AIRAI テクノロジー - 営業終了のお知らせ',
    template: '%s | AIRAI テクノロジー'
  },
  description: 'AIRAI テクノロジーは 2026 年 5 月をもって営業を終了し、チームは Aiworks に参加しました。本サイトはこれまでの AI 導入に関するナレッジ記事とリソースを参考用として公開しています。',
  keywords: [
    'AIRAI',
    'AIRAI テクノロジー',
    '営業終了',
    'AI導入',
    '企業AI',
    'AIナレッジ記事',
    'AIリソース',
    '機械学習',
    '人工知能',
    'AIエージェント'
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
    title: 'AIRAI テクノロジー - 営業終了のお知らせ',
    description: 'AIRAI テクノロジーは 2026 年 5 月をもって営業を終了し、チームは Aiworks に参加しました。本サイトはこれまでのナレッジ記事を参考用として公開しています。',
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
    title: 'AIRAI テクノロジー - 営業終了のお知らせ',
    description: 'AIRAI テクノロジーは 2026 年 5 月をもって営業を終了し、チームは Aiworks に参加しました。本サイトはこれまでのナレッジ記事を参考用として公開しています。',
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
    <>
      {children}
    </>
  )
} 