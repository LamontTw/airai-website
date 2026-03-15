import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema, HowToSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: '中小企業 AI 客服完整教學：從零開始到上線 | AIRAI',
  description: '不懂技術也能搞定！手把手教你用 Airi 在 5 分鐘內設定 AI 客服，串接 LINE 自動回覆客戶問題。含原理說明、工具選擇、實戰步驟。',
  keywords: [
    'AI客服教學',
    'AI客服設定',
    'LINE AI客服',
    'Airi教學',
    '中小企業AI',
    'AI客服機器人',
    '自動回覆設定',
  ],
  openGraph: {
    title: '中小企業 AI 客服完整教學：從零開始到上線',
    description: '不懂技術也能搞定！手把手教你用 Airi 在 5 分鐘內設定 AI 客服，串接 LINE 自動回覆客戶問題。',
    url: `${siteConfig.url}/resources/blog/how-to-setup-ai-chatbot-for-business`,
    siteName: siteConfig.name,
    type: 'article',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/blog/how-to-setup-ai-chatbot-for-business`,
  },
};

export default function HowToSetupAiChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ArticleSchema
        headline="中小企業 AI 客服完整教學：從零開始到上線"
        description="不懂技術也能搞定！手把手教你用 Airi 在 5 分鐘內設定 AI 客服，串接 LINE 自動回覆客戶問題。含原理說明、工具選擇、實戰步驟。"
        url="https://airai.tw/resources/blog/how-to-setup-ai-chatbot-for-business"
        datePublished={articleDates['blog-ai-chatbot-setup'].published}
        dateModified={articleDates['blog-ai-chatbot-setup'].modified}
        wordCount={6000}
        articleSection="教學指南"
        keywords={['AI客服教學', 'AI客服設定', 'LINE AI客服', 'Airi教學', '中小企業AI']}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "部落格", url: "https://airai.tw/resources/blog" },
          { name: "中小企業 AI 客服完整教學", url: "https://airai.tw/resources/blog/how-to-setup-ai-chatbot-for-business" },
        ]}
      />
      <HowToSchema
        name="如何設定 AI 客服：從零開始到上線"
        description="用 Airi 在 5 分鐘內為你的 LINE 官方帳號設定 AI 自動回覆客服"
        totalTime="PT5M"
        estimatedCost={{ currency: "TWD", value: "0" }}
        steps={[
          { name: "註冊 Airi 帳號", text: "前往 airi.airai.tw 免費註冊帳號，不需要信用卡。" },
          { name: "上傳 FAQ 與產品資料", text: "把你的常見問題、產品資訊上傳到 Airi 知識庫，AI 會自動學習這些內容。" },
          { name: "串接 LINE Official Account", text: "在 Airi 後台輸入你的 LINE Official Account 資訊，一鍵完成串接。" },
          { name: "測試對話效果", text: "用你的 LINE 帳號傳訊息測試，確認 AI 回答的品質和準確度。" },
          { name: "正式上線", text: "確認測試沒問題後，開啟正式模式讓所有客戶都能使用 AI 客服。" },
        ]}
      />
    </>
  );
}
