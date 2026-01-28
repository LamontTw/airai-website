import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI導入完整指南：企業如何成功導入人工智能 | AIRAI',
  description: 'AI導入是什麼？完整解析企業AI導入流程、成本評估、技術選型、成功案例。專為台灣中小企業設計的AI導入指南，從需求診斷到上線維護一次搞懂。',
  keywords: [
    'AI導入',
    'AI導入是什麼',
    'AI導入流程',
    'AI導入成本',
    '企業AI導入',
    'AI導入案例',
    'AI導入顧問',
    'AI導入評估',
    '人工智能導入',
    'AI實施指南',
    '台灣AI導入',
    '中小企業AI'
  ],
  openGraph: {
    title: 'AI導入完整指南：企業如何成功導入人工智能',
    description: 'AI導入是什麼？完整解析企業AI導入流程、成本評估、技術選型、成功案例。專為台灣中小企業設計的AI導入指南。',
    url: `${siteConfig.url}/resources/ai-introduction-guide`,
    siteName: siteConfig.name,
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/images/ai-guide-og.png`,
        width: 1200,
        height: 630,
        alt: 'AI導入完整指南',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI導入完整指南：企業如何成功導入人工智能',
    description: 'AI導入是什麼？完整解析企業AI導入流程、成本評估、技術選型、成功案例。專為台灣中小企業設計的AI導入指南。',
    images: [`${siteConfig.url}/images/ai-guide-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/ai-introduction-guide`,
  },
};

export default function AIIntroductionGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
