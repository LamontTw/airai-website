import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: '小型企業AI導入成本控制策略 | AIRAI',
  description: '針對小型企業的AI導入成本控制策略，包含預算規劃、分階段導入、開源工具運用等實務方法，讓有限預算發揮最大AI效益。',
  keywords: [
    '小企業AI',
    'AI成本控制',
    'AI預算規劃',
    'AI低成本導入',
    '小型企業數位轉型',
    'AI省錢策略',
  ],
  openGraph: {
    title: '小型企業AI導入成本控制策略',
    description: '針對小型企業的AI導入成本控制策略，讓有限預算發揮最大AI效益。',
    url: `${siteConfig.url}/resources/blog/4`,
    siteName: siteConfig.name,
    type: 'article',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/blog/4`,
  },
};

export default function Blog4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleSchema
        headline="小型企業AI導入成本控制策略"
        description="針對小型企業的AI導入成本控制策略，讓有限預算發揮最大AI效益。"
        url="https://airai.tw/resources/blog/4"
        datePublished={articleDates['blog-4'].published}
        dateModified={articleDates['blog-4'].modified}
        wordCount={3000}
        articleSection="部落格"
        keywords={['小企業AI', 'AI成本控制', 'AI預算規劃', 'AI低成本導入']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "部落格", url: "https://airai.tw/resources/blog" },
          { name: "小企業AI成本控制", url: "https://airai.tw/resources/blog/4" },
        ]}
      />
    </>
  );
}
