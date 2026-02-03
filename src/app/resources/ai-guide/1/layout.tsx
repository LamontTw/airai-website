import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'AI轉型完整指南：從評估到導入 | AIRAI',
  description: '完整的中小企業AI導入指南，涵蓋需求評估、技術選擇、實施規劃到效果追蹤的全流程。15分鐘閱讀，95%成功率。',
  keywords: [
    'AI轉型指南',
    'AI導入流程',
    '企業AI評估',
    'AI技術選擇',
    'AI實施規劃',
    'AI效果追蹤',
    '中小企業AI',
    'AI轉型策略',
    'AI導入成功',
    'AI專案管理'
  ],
  openGraph: {
    title: 'AI轉型完整指南：從評估到導入',
    description: '完整的中小企業AI導入指南，涵蓋需求評估、技術選擇、實施規劃到效果追蹤的全流程。15分鐘閱讀，95%成功率。',
    url: `${siteConfig.url}/resources/ai-guide/1`,
    siteName: siteConfig.name,
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/images/ai-guide-og.png`,
        width: 1200,
        height: 630,
        alt: 'AI轉型完整指南',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI轉型完整指南：從評估到導入',
    description: '完整的中小企業AI導入指南，涵蓋需求評估、技術選擇、實施規劃到效果追蹤的全流程。',
    images: [`${siteConfig.url}/images/ai-guide-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/ai-guide/1`,
  },
};

export default function AIGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      {/* JSON-LD 放在 Server Component 確保 SSR 輸出 */}
      <ArticleSchema
        headline="AI轉型完整指南：從評估到導入"
        description="完整的中小企業AI導入指南，涵蓋需求評估、技術選擇、實施規劃到效果追蹤的全流程。"
        url="https://airai.tw/resources/ai-guide/1"
        datePublished="2025-12-01"
        dateModified="2026-02-03"
        wordCount={4000}
        articleSection="AI 導入指南"
        keywords={['AI轉型指南', 'AI導入流程', '企業AI評估', 'AI技術選擇', '中小企業AI', 'AI實施規劃']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "AI導入指南", url: "https://airai.tw/resources/ai-guide" },
          { name: "AI轉型完整指南", url: "https://airai.tw/resources/ai-guide/1" },
        ]}
      />
    </>
  );
} 