import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI需求評估工具 | 免費企業AI導入評估',
  description: '免費的AI需求評估工具，幫助企業快速評估AI導入需求，分析現有流程與改善機會。包含業務流程分析、AI適用性評估等功能。',
  keywords: [
    'AI評估工具',
    'AI需求評估',
    '企業AI評估',
    'AI導入評估',
    '免費AI工具',
    'AI適用性分析',
    '業務流程分析',
    'AI投資評估',
    'AI可行性分析',
    'AI導入規劃'
  ],
  openGraph: {
    title: 'AI需求評估工具 | 免費企業AI導入評估',
    description: '免費的AI需求評估工具，幫助企業快速評估AI導入需求，分析現有流程與改善機會。',
    url: `${siteConfig.url}/resources/tools/1`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/ai-assessment-tool-og.png`,
        width: 1200,
        height: 630,
        alt: 'AI需求評估工具',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI需求評估工具 | 免費企業AI導入評估',
    description: '免費的AI需求評估工具，幫助企業快速評估AI導入需求，分析現有流程與改善機會。',
    images: [`${siteConfig.url}/images/ai-assessment-tool-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/tools/1`,
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 