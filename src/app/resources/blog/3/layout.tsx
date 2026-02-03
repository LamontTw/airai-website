import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'RPA與AI結合的最佳實務 | AIRAI',
  description: 'RPA與AI技術融合的最佳實務指南，探討如何結合流程自動化與人工智能，實現智慧自動化的完整攻略。',
  keywords: [
    'RPA AI結合',
    'RPA自動化',
    '智慧自動化',
    'AI流程自動化',
    'RPA最佳實務',
    'AI RPA整合',
  ],
  openGraph: {
    title: 'RPA與AI結合的最佳實務',
    description: 'RPA與AI技術融合的最佳實務指南，探討如何結合流程自動化與人工智能。',
    url: `${siteConfig.url}/resources/blog/3`,
    siteName: siteConfig.name,
    type: 'article',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/blog/3`,
  },
};

export default function Blog3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleSchema
        headline="RPA與AI結合的最佳實務"
        description="RPA與AI技術融合的最佳實務指南，探討如何結合流程自動化與人工智能。"
        url="https://airai.tw/resources/blog/3"
        datePublished={articleDates['blog-3'].published}
        dateModified={articleDates['blog-3'].modified}
        wordCount={3000}
        articleSection="部落格"
        keywords={['RPA AI結合', '智慧自動化', 'AI流程自動化', 'RPA最佳實務']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "部落格", url: "https://airai.tw/resources/blog" },
          { name: "RPA與AI結合最佳實務", url: "https://airai.tw/resources/blog/3" },
        ]}
      />
    </>
  );
}
