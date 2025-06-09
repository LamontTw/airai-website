import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI資源中心 | 企業AI導入指南與工具',
  description: '提供完整的企業AI導入資源，包括實用指南、趨勢分析、專業工具和最新技術文章。幫助企業成功實現AI轉型。',
  keywords: [
    'AI資源',
    'AI導入指南',
    'AI工具',
    'AI趨勢',
    '企業AI',
    'AI技術文章',
    'AI評估工具',
    'ROI計算器',
    'AI最佳實務',
    'AI案例研究'
  ],
  openGraph: {
    title: 'AI資源中心 | 企業AI導入指南與工具',
    description: '提供完整的企業AI導入資源，包括實用指南、趨勢分析、專業工具和最新技術文章。幫助企業成功實現AI轉型。',
    url: `${siteConfig.url}/resources`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/resources-og.png`,
        width: 1200,
        height: 630,
        alt: 'AIRAI AI資源中心',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI資源中心 | 企業AI導入指南與工具',
    description: '提供完整的企業AI導入資源，包括實用指南、趨勢分析、專業工具和最新技術文章。',
    images: [`${siteConfig.url}/images/resources-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/resources`,
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 