import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'Airi 上線：中小企業 AI 客服助理，5 分鐘完成設定 | AIRAI',
  description: 'Airi 是專為中小企業設計的 AI 客服助理，串接 LINE、5 分鐘設定、24/7 自動回覆客戶問題。免費試用中。',
  keywords: [
    'Airi',
    'AI客服助理',
    'LINE AI客服',
    'AI客服機器人',
    '中小企業客服',
    '自動回覆',
    'AI客服',
  ],
  openGraph: {
    title: 'Airi 上線：中小企業 AI 客服助理，5 分鐘完成設定',
    description: 'Airi 是專為中小企業設計的 AI 客服助理，串接 LINE、5 分鐘設定、24/7 自動回覆客戶問題。免費試用中。',
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
        headline="Airi 上線：中小企業 AI 客服助理，5 分鐘完成設定"
        description="Airi 是專為中小企業設計的 AI 客服助理，串接 LINE、5 分鐘設定、24/7 自動回覆客戶問題。免費試用中。"
        url="https://airai.tw/resources/blog/airi-ai-customer-service-launch"
        datePublished={articleDates['blog-airi-launch'].published}
        dateModified={articleDates['blog-airi-launch'].modified}
        wordCount={2500}
        articleSection="產品發布"
        keywords={['Airi', 'AI客服助理', 'LINE AI客服', 'AI客服機器人', '中小企業客服', '自動回覆', 'AI客服']}
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
