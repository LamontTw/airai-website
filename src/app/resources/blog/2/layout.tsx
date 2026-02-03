import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'ChatGPT在企業應用的實務經驗分享 | AIRAI',
  description: 'ChatGPT企業導入實務經驗分享，包含應用場景、導入流程、成效分析與注意事項。幫助企業有效運用ChatGPT提升營運效率。',
  keywords: [
    'ChatGPT企業應用',
    'ChatGPT導入',
    'ChatGPT實務',
    'AI企業應用',
    'ChatGPT經驗分享',
    'GPT商業應用',
  ],
  openGraph: {
    title: 'ChatGPT在企業應用的實務經驗分享',
    description: 'ChatGPT企業導入實務經驗分享，包含應用場景、導入流程、成效分析與注意事項。',
    url: `${siteConfig.url}/resources/blog/2`,
    siteName: siteConfig.name,
    type: 'article',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/blog/2`,
  },
};

export default function Blog2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleSchema
        headline="ChatGPT在企業應用的實務經驗分享"
        description="ChatGPT企業導入實務經驗分享，包含應用場景、導入流程、成效分析與注意事項。"
        url="https://airai.tw/resources/blog/2"
        datePublished={articleDates['blog-2'].published}
        dateModified={articleDates['blog-2'].modified}
        wordCount={3500}
        articleSection="部落格"
        keywords={['ChatGPT企業應用', 'ChatGPT導入', 'AI企業應用', 'GPT商業應用']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "部落格", url: "https://airai.tw/resources/blog" },
          { name: "ChatGPT企業應用實務", url: "https://airai.tw/resources/blog/2" },
        ]}
      />
    </>
  );
}
