import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: '2024年中小企業AI應用趨勢報告 | AIRAI',
  description: '深度分析台灣中小企業AI應用現況，預測未來發展趨勢與投資機會。涵蓋市場數據、技術趨勢、應用案例等完整分析。',
  keywords: [
    'AI趨勢報告',
    '2024 AI趨勢',
    '中小企業AI',
    'AI市場分析',
    'AI投資機會',
    'AI技術趨勢',
    'AI應用現況',
    '台灣AI市場',
    'AI發展預測',
    'AI產業洞察'
  ],
  openGraph: {
    title: '2024年中小企業AI應用趨勢報告',
    description: '深度分析台灣中小企業AI應用現況，預測未來發展趨勢與投資機會。涵蓋市場數據、技術趨勢、應用案例等完整分析。',
    url: `${siteConfig.url}/resources/trends/1`,
    siteName: siteConfig.name,
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/images/trends-report-og.png`,
        width: 1200,
        height: 630,
        alt: '2024年中小企業AI應用趨勢報告',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2024年中小企業AI應用趨勢報告',
    description: '深度分析台灣中小企業AI應用現況，預測未來發展趨勢與投資機會。',
    images: [`${siteConfig.url}/images/trends-report-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/trends/1`,
  },
};

export default function TrendsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 