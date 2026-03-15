import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Airi 上線：上傳文件，5 分鐘建好你的 AI 客服 | AIRAI',
  description: 'Airi 是專為台灣中小企業設計的 AI 客服 SaaS。上傳文件建立知識庫，一行嵌入碼讓你的網站擁有 24/7 AI 客服。免費方案每月 100 則訊息。',
  keywords: [
    'Airi',
    'AI客服',
    'AI客服SaaS',
    '網站AI客服',
    '中小企業客服',
    'RAG知識庫',
    'AI聊天窗',
    '自動回覆',
  ],
  openGraph: {
    title: 'Airi 上線：上傳文件，5 分鐘建好你的 AI 客服',
    description: 'Airi 是專為台灣中小企業設計的 AI 客服 SaaS。上傳文件建立知識庫，一行嵌入碼讓你的網站擁有 24/7 AI 客服。',
    url: `${siteConfig.url}/resources/blog/airi-ai-customer-service-launch`,
    siteName: siteConfig.name,
    type: 'article',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/blog/airi-ai-customer-service-launch`,
  },
};

export default function AiriLaunchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleSchema
        headline="Airi 上線：上傳文件，5 分鐘建好你的 AI 客服"
        description="Airi 是專為台灣中小企業設計的 AI 客服 SaaS。上傳文件建立知識庫，一行嵌入碼讓你的網站擁有 24/7 AI 客服。免費方案每月 100 則訊息。"
        url="https://airai.tw/resources/blog/airi-ai-customer-service-launch"
        datePublished={articleDates['blog-airi-launch'].published}
        dateModified={articleDates['blog-airi-launch'].modified}
        wordCount={2800}
        articleSection="產品發布"
        keywords={['Airi', 'AI客服SaaS', '網站AI客服', 'RAG知識庫', '中小企業客服', '自動回覆']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "部落格", url: "https://airai.tw/resources/blog" },
          { name: "Airi 正式上線", url: "https://airai.tw/resources/blog/airi-ai-customer-service-launch" },
        ]}
      />
    </>
  );
}
