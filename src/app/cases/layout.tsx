import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: '成功案例 | 企業AI導入實戰經驗分享',
  description: '真實的企業AI導入成功案例，涵蓋製造業、零售業、服務業等多個行業。了解AI如何幫助企業提升效率、降低成本。',
  keywords: [
    'AI成功案例',
    '企業AI實例',
    'AI導入經驗',
    'AI應用案例',
    '製造業AI',
    '零售業AI',
    '服務業AI',
    'AI效益',
    'AI投資回報',
    'AI轉型案例'
  ],
  openGraph: {
    title: '成功案例 | 企業AI導入實戰經驗分享',
    description: '真實的企業AI導入成功案例，涵蓋製造業、零售業、服務業等多個行業。了解AI如何幫助企業提升效率、降低成本。',
    url: `${siteConfig.url}/cases`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/cases-og.png`,
        width: 1200,
        height: 630,
        alt: 'AIRAI 成功案例',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '成功案例 | 企業AI導入實戰經驗分享',
    description: '真實的企業AI導入成功案例，涵蓋製造業、零售業、服務業等多個行業。',
    images: [`${siteConfig.url}/images/cases-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/cases`,
  },
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 