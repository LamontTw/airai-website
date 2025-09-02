import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'サービス利用規約 | AIRAI Technology サービス契約',
  description: 'AIRAI Technology AI導入サービスの完全な利用規約。サービス内容、ユーザーの責任、支払条件、知的財産権保護、その他重要な条項を含みます。',
  keywords: [
    'サービス利用規約',
    '利用規約',
    'AIサービス規約',
    'AIRAI規約',
    '法的条項',
    'ユーザー契約',
    'サービス契約',
    'AIコンサルティング規約',
    '技術サービス規約',
    'プライバシー保護',
    '台湾AIサービス',
    'AI自動化規約',
    'ビジネス契約'
  ],
  openGraph: {
    title: 'サービス利用規約 | AIRAI Technology',
    description: 'AIRAI Technology AI導入サービスの完全な利用規約。サービス内容、ユーザーの責任、支払条件、知的財産権保護を含みます。',
    url: `${siteConfig.url}/ja/terms`,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'ja_JP',
    images: [
      {
        url: `${siteConfig.url}/images/terms-og.png`,
        width: 1200,
        height: 630,
        alt: 'AIRAI サービス利用規約',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サービス利用規約 | AIRAI Technology',
    description: 'AIRAI Technology AI導入サービスの利用規約。権利と義務を定義。',
    images: [`${siteConfig.url}/images/terms-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/ja/terms`,
    languages: {
      'zh': `${siteConfig.url}/terms`,
      'en': `${siteConfig.url}/en/terms`,
      'ja': `${siteConfig.url}/ja/terms`,
    },
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