import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI趨勢分析 | 掌握最新AI發展動態',
  description: '掌握最新AI發展趨勢，洞察產業變化，把握投資機會。提供深度的AI市場分析、技術趨勢報告和產業洞察。',
  keywords: [
    'AI趨勢',
    'AI發展趨勢',
    'AI市場分析',
    'AI產業報告',
    'AI技術趨勢',
    'AI投資機會',
    'AI產業洞察',
    'AI未來發展',
    'AI市場預測',
    'AI行業分析'
  ],
  openGraph: {
    title: 'AI趨勢分析 | 掌握最新AI發展動態',
    description: '掌握最新AI發展趨勢，洞察產業變化，把握投資機會。提供深度的AI市場分析、技術趨勢報告和產業洞察。',
    url: `${siteConfig.url}/resources/trends`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/trends-og.png`,
        width: 1200,
        height: 630,
        alt: 'AIRAI AI趨勢分析',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI趨勢分析 | 掌握最新AI發展動態',
    description: '掌握最新AI發展趨勢，洞察產業變化，把握投資機會。',
    images: [`${siteConfig.url}/images/trends-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/trends`,
  },
};

export default function TrendsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 