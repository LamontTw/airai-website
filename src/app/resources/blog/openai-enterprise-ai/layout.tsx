import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'OpenAI企業AI觀點深度解析 | AIRAI',
  description: '解讀OpenAI對企業AI應用的前瞻觀點，探索AI如何重塑企業競爭力，以及台灣企業的機會。',
  keywords: [
    'OpenAI',
    '企業AI',
    '數位轉型',
    'AI導入策略',
    '台灣企業AI',
    'AI趨勢',
    'AI應用',
    '企業競爭力',
  ],
  openGraph: {
    title: 'OpenAI企業AI觀點深度解析',
    description: '解讀OpenAI對企業AI應用的前瞻觀點，探索AI如何重塑企業競爭力，以及台灣企業的機會。',
    url: `${siteConfig.url}/resources/blog/openai-enterprise-ai`,
    siteName: siteConfig.name,
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'OpenAI企業AI觀點深度解析',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAI企業AI觀點深度解析',
    description: '解讀OpenAI對企業AI應用的前瞻觀點，探索AI如何重塑企業競爭力。',
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/blog/openai-enterprise-ai`,
  },
};

export default function OpenAIEnterpriseAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleSchema
        headline="OpenAI企業AI觀點深度解析"
        description="解讀OpenAI對企業AI應用的前瞻觀點，探索AI如何重塑企業競爭力，以及台灣企業的機會。"
        url="https://airai.tw/resources/blog/openai-enterprise-ai"
        datePublished="2025-11-15"
        dateModified="2026-02-03"
        wordCount={3500}
        articleSection="部落格"
        keywords={['OpenAI', '企業AI', '數位轉型', 'AI導入策略', '台灣企業AI', 'AI趨勢']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "部落格", url: "https://airai.tw/resources/blog" },
          { name: "OpenAI企業AI觀點", url: "https://airai.tw/resources/blog/openai-enterprise-ai" },
        ]}
      />
    </>
  );
}
