import { Metadata } from 'next';
import { siteConfig, articleDates } from '@/lib/seo';
import { ArticleSchema, BreadcrumbSchema, HowToSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: '中小企業 AI 客服完整教學：從零開始到上線 | AIRAI',
  description: '不懂技術也能搞定！手把手教你用 Airi 在 5 分鐘內設定網站 AI 客服。含 RAG 原理、工具選擇重點、實戰設定步驟、上線後優化技巧。',
  keywords: [
    'AI客服教學',
    'AI客服設定',
    '網站AI客服',
    'Airi教學',
    '中小企業AI',
    'AI客服機器人',
    'Widget嵌入',
    'RAG知識庫',
  ],
  openGraph: {
    title: '中小企業 AI 客服完整教學：從零開始到上線',
    description: '不懂技術也能搞定！手把手教你用 Airi 在 5 分鐘內設定網站 AI 客服，上傳文件即可自動回覆客戶問題。',
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
        description="不懂技術也能搞定！手把手教你用 Airi 在 5 分鐘內設定網站 AI 客服。含 RAG 原理、工具選擇重點、實戰設定步驟。"
        url="https://airai.tw/resources/blog/how-to-setup-ai-chatbot-for-business"
        datePublished={articleDates['blog-ai-chatbot-setup'].published}
        dateModified={articleDates['blog-ai-chatbot-setup'].modified}
        wordCount={5500}
        articleSection="教學指南"
        keywords={['AI客服教學', 'AI客服設定', '網站AI客服', 'Airi教學', '中小企業AI', 'RAG知識庫']}
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
        description="用 Airi 在 5 分鐘內為你的網站設定 AI 客服自動回覆"
        totalTime="PT5M"
        estimatedCost={{ currency: "TWD", value: "0" }}
        steps={[
          { name: "註冊帳號 + 建立 Chatbot", text: "到 airi.airai.tw 用 Google 或 Email 註冊，登入後建立你的第一個 Chatbot，設定名稱和歡迎訊息。" },
          { name: "上傳知識庫文件", text: "把你的 FAQ、產品手冊、價目表上傳到知識庫。支援 PDF、DOCX、TXT，也可輸入網址自動爬取。" },
          { name: "在後台測試對話", text: "用後台的測試面板試問各種問題，確認 AI 根據知識庫回答的品質。不滿意就補充知識庫內容。" },
          { name: "取得嵌入碼，貼到網站", text: "在 Widget 設定頁面自訂聊天窗外觀，複製嵌入碼貼到你的網站 HTML 裡。" },
          { name: "正式上線", text: "打開網站確認右下角出現 AI 聊天窗，開始為你的客戶提供 24/7 AI 客服。" },
        ]}
      />
    </>
  );
}
