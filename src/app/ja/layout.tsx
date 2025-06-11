import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import Navigation from '@/components/ui/Navigation'
import Footer from '@/components/ui/Footer'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: {
    default: 'AIRAI - 台湾をリードする企業AI導入エキスパート | AIRAI テクノロジー',
    template: '%s | AIRAI テクノロジー'
  },
  description: 'AIエージェント・インテリジェントカスタマーサービス、ソフトウェア外注を含む専門的な企業AI導入ソリューション。台湾の中小企業のデジタル変革を支援し、運営効率を向上させ、コストを削減。無料相談サービス。',
  keywords: 'AI導入,企業AI,インテリジェントカスタマーサービス,ソフトウェア外注,デジタル変革,台湾AI,中小企業,自動化,機械学習,人工知能',
  authors: [{ name: 'AIRAI テクノロジー' }],
  creator: 'AIRAI テクノロジー',
  publisher: 'AIRAI テクノロジー',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://airai.tw/ja',
    siteName: 'AIRAI テクノロジー',
    title: 'AIRAI - 台湾をリードする企業AI導入エキスパート',
    description: 'AIエージェント・インテリジェントカスタマーサービス、ソフトウェア外注を含む専門的な企業AI導入ソリューション。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIRAI - 台湾をリードする企業AI導入エキスパート',
    description: 'AIエージェント・インテリジェントカスタマーサービス、ソフトウェア外注を含む専門的な企業AI導入ソリューション。',
  },
  alternates: {
    canonical: 'https://airai.tw/ja',
    languages: {
      'zh-TW': 'https://airai.tw',
      'en': 'https://airai.tw/en',
      'ja': 'https://airai.tw/ja',
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
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
} 