import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'ROI計算與效益評估方法 | AIRAI',
  description: 'AI導入的ROI計算方法與效益評估框架，幫助企業科學化評估AI投資回報率，包含成本分析、效益量化、風險評估等完整方法論。',
  keywords: [
    'AI ROI計算',
    'AI效益評估',
    'AI投資回報',
    'AI成本分析',
    'AI導入評估',
    'AI投資決策',
  ],
  openGraph: {
    title: 'ROI計算與效益評估方法',
    description: 'AI導入的ROI計算方法與效益評估框架，幫助企業科學化評估AI投資回報率。',
    url: `${siteConfig.url}/resources/ai-guide/2`,
    siteName: siteConfig.name,
    type: 'article',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/ai-guide/2`,
  },
};

export default function AIGuide2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleSchema
        headline="ROI計算與效益評估方法"
        description="AI導入的ROI計算方法與效益評估框架，幫助企業科學化評估AI投資回報率。"
        url="https://airai.tw/resources/ai-guide/2"
        datePublished={articleDates['ai-guide-2'].published}
        dateModified={articleDates['ai-guide-2'].modified}
        wordCount={3500}
        articleSection="AI 導入指南"
        keywords={['AI ROI計算', 'AI效益評估', 'AI投資回報', 'AI成本分析']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "AI導入指南", url: "https://airai.tw/resources/ai-guide" },
          { name: "ROI計算與效益評估", url: "https://airai.tw/resources/ai-guide/2" },
        ]}
      />
    </>
  );
}
