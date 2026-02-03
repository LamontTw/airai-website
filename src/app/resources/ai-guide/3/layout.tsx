import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: '常見AI導入障礙與解決方案 | AIRAI',
  description: '分析企業AI導入常見的技術、組織、預算障礙，並提供實務解決方案。幫助企業避開AI轉型地雷，提升導入成功率。',
  keywords: [
    'AI導入障礙',
    'AI轉型挑戰',
    'AI導入問題',
    'AI導入解決方案',
    'AI轉型失敗',
    'AI導入風險',
  ],
  openGraph: {
    title: '常見AI導入障礙與解決方案',
    description: '分析企業AI導入常見的技術、組織、預算障礙，並提供實務解決方案。',
    url: `${siteConfig.url}/resources/ai-guide/3`,
    siteName: siteConfig.name,
    type: 'article',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/ai-guide/3`,
  },
};

export default function AIGuide3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleSchema
        headline="常見AI導入障礙與解決方案"
        description="分析企業AI導入常見的技術、組織、預算障礙，並提供實務解決方案。"
        url="https://airai.tw/resources/ai-guide/3"
        datePublished={articleDates['ai-guide-3'].published}
        dateModified={articleDates['ai-guide-3'].modified}
        wordCount={3000}
        articleSection="AI 導入指南"
        keywords={['AI導入障礙', 'AI轉型挑戰', 'AI導入問題', 'AI導入解決方案']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "AI導入指南", url: "https://airai.tw/resources/ai-guide" },
          { name: "AI導入障礙與解決方案", url: "https://airai.tw/resources/ai-guide/3" },
        ]}
      />
    </>
  );
}
