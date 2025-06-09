import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: '服務條款 | 智流科技AI服務使用規範',
  description: '智流科技有限公司AI導入服務的完整服務條款，包含服務內容、用戶責任、付款條件、智慧財產權保護等重要條款。',
  keywords: [
    '服務條款',
    '使用條款',
    'AI服務條款',
    '智流科技條款',
    '法律條款',
    '用戶協議',
    '服務協議',
    'AI諮詢條款',
    '技術服務條款',
    '隱私保護'
  ],
  openGraph: {
    title: '服務條款 | 智流科技AI服務使用規範',
    description: '智流科技有限公司AI導入服務的完整服務條款，包含服務內容、用戶責任、付款條件、智慧財產權保護等重要條款。',
    url: `${siteConfig.url}/terms`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/terms-og.png`,
        width: 1200,
        height: 630,
        alt: 'AIRAI 服務條款',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '服務條款 | 智流科技AI服務使用規範',
    description: '智流科技有限公司AI導入服務的完整服務條款，規範服務使用的權利與義務。',
    images: [`${siteConfig.url}/images/terms-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/terms`,
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
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 