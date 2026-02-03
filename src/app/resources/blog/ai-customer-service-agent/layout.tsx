import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'AI客服Agent完整解析：RAG知識庫 + LINE整合實戰指南 | AIRAI',
  description: '深入了解AI客服Agent如何結合RAG知識庫與LINE整合，為中小企業打造24/7智能客服。含成本分析、導入流程與實戰案例。',
  keywords: [
    'AI客服Agent',
    'AI客服機器人',
    'RAG知識庫',
    'LINE AI客服',
    'AI Agent導入',
    '智能客服',
    'AI客服成本',
    '企業AI客服',
  ],
  openGraph: {
    title: 'AI客服Agent完整解析：RAG知識庫 + LINE整合實戰指南',
    description: '深入了解AI客服Agent如何結合RAG知識庫與LINE整合，為中小企業打造24/7智能客服。',
    url: `${siteConfig.url}/resources/blog/ai-customer-service-agent`,
    siteName: siteConfig.name,
    type: 'article',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/blog/ai-customer-service-agent`,
  },
};

export default function AiCustomerServiceAgentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleSchema
        headline="AI客服Agent完整解析：RAG知識庫 + LINE整合實戰指南"
        description="深入了解AI客服Agent如何結合RAG知識庫與LINE整合，為中小企業打造24/7智能客服。含成本分析、導入流程與實戰案例。"
        url="https://airai.tw/resources/blog/ai-customer-service-agent"
        datePublished={articleDates['blog-ai-cs-agent'].published}
        dateModified={articleDates['blog-ai-cs-agent'].modified}
        wordCount={5000}
        articleSection="部落格"
        keywords={['AI客服Agent', 'RAG知識庫', 'LINE AI客服', 'AI Agent導入', '智能客服']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "部落格", url: "https://airai.tw/resources/blog" },
          { name: "AI客服Agent完整解析", url: "https://airai.tw/resources/blog/ai-customer-service-agent" },
        ]}
      />
    </>
  );
}
