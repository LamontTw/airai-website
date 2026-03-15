import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'AI 客服 Agent 完整解析：RAG 知識庫技術與實戰指南 | AIRAI',
  description: '深入了解 AI 客服 Agent 如何用 RAG 知識庫技術有根據地回答客戶問題。含技術原理、Widget 嵌入方式、SaaS 定價比較與 ROI 分析。',
  keywords: [
    'AI客服Agent',
    'AI客服機器人',
    'RAG知識庫',
    '網站AI客服',
    'AI Agent',
    'AI客服',
    'AI客服成本',
    'Widget嵌入',
  ],
  openGraph: {
    title: 'AI 客服 Agent 完整解析：RAG 知識庫技術與實戰指南',
    description: '深入了解 AI 客服 Agent 如何用 RAG 知識庫技術回答客戶問題。含技術原理、導入流程與成本分析。',
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
        headline="AI 客服 Agent 完整解析：RAG 知識庫技術與實戰指南"
        description="深入了解 AI 客服 Agent 如何用 RAG 知識庫技術有根據地回答客戶問題。含技術原理、Widget 嵌入方式、SaaS 定價比較與 ROI 分析。"
        url="https://airai.tw/resources/blog/ai-customer-service-agent"
        datePublished={articleDates['blog-ai-cs-agent'].published}
        dateModified={articleDates['blog-ai-cs-agent'].modified}
        wordCount={5000}
        articleSection="部落格"
        keywords={['AI客服Agent', 'RAG知識庫', '網站AI客服', 'AI Agent', 'AI客服', 'Widget嵌入']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "部落格", url: "https://airai.tw/resources/blog" },
          { name: "AI 客服 Agent 完整解析", url: "https://airai.tw/resources/blog/ai-customer-service-agent" },
        ]}
      />
    </>
  );
}
