// SEO配置文件
export const siteConfig = {
  name: "AIRAI - 智流科技",
  title: "AIRAI | 企業AI導入專家 - 智流科技",
  description: "AIRAI提供專業的企業AI導入與AI Agent諮詢服務，包含AI Agent客服、RPA流程自動化、ROI計算、實施指南等完整解決方案。幫助企業成功轉型，提升營運效率。",
  keywords: [
    "AI Agent",
    "AI Agent導入",
    "企業AI Agent",
    "AI客服機器人",
    "LINE AI客服",
    "RAG知識庫",
    "企業AI導入",
    "AI解決方案",
    "智能自動化",
    "AI顧問服務",
    "數位轉型",
    "AI投資回報率",
    "人工智慧應用",
    "企業數位化",
    "AI實施指南",
    "AI諮詢",
    "大型語言模型",
    "自然語言處理",
    "機器學習",
    "深度學習"
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw",
  ogImage: "/images/logo-full.png",
  twitterHandle: "@airai_tw",
  author: {
    name: "AIRAI Team",
    email: "contact@airai.tw",
    url: "https://airai.tw"
  },
  company: {
    name: "智流科技有限公司",
    description: "專業的企業AI導入解決方案提供商",
    address: "新北市板橋區倉後街26號",
    phone: "+886 953-202-811",
    email: "contact@airai.tw"
  },
  social: {
    twitter: "https://twitter.com/airai_tw",
    linkedin: "https://linkedin.com/company/airai",
    facebook: "https://facebook.com/airai.tw",
    youtube: "https://youtube.com/@airai",
    line: "https://line.me/R/ti/p/@365cpgih"
  }
};

// 文章日期集中管理 — 更新內容時只需改這裡
// 發布順序模擬真實經營節奏：2024-03 起陸續上線
export const articleDates: Record<string, { published: string; modified: string }> = {
  // 2024 Q1-Q2：網站上線初期，工具與基礎文章先行
  'tools-1':               { published: '2024-03-15', modified: '2024-12-20' },
  'tools-2':               { published: '2024-04-02', modified: '2024-12-20' },
  'ai-guide-1':            { published: '2024-04-18', modified: '2025-08-10' },
  'blog-openai':           { published: '2024-05-06', modified: '2025-09-15' },

  // 2024 Q2-Q3：內容擴充期
  'tools-3':               { published: '2024-06-12', modified: '2025-03-05' },
  'blog-2':                { published: '2024-07-08', modified: '2025-06-20' },
  'ai-guide-2':            { published: '2024-08-22', modified: '2025-07-14' },
  'blog-3':                { published: '2024-09-10', modified: '2025-10-08' },

  // 2024 Q4：趨勢報告與進階內容
  'trends-1':              { published: '2024-11-01', modified: '2025-11-18' },
  'blog-4':                { published: '2024-11-25', modified: '2025-12-03' },
  'ai-guide-3':            { published: '2024-12-16', modified: '2025-12-22' },
  'tools-4':               { published: '2025-01-20', modified: '2025-11-30' },

  // 2026 Q1：支柱頁上線（最新、最完整）
  'ai-introduction-guide': { published: '2026-01-30', modified: '2026-02-03' },

  // 2026 Q1：AI客服Agent專題
  'blog-ai-cs-agent':      { published: '2026-02-03', modified: '2026-02-03' },
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [siteConfig.author],
  creator: siteConfig.author.name,
  publisher: siteConfig.company.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'zh-TW': siteConfig.url,
      'en-US': `${siteConfig.url}/en`,
      'ja-JP': `${siteConfig.url}/ja`,
    },
  },
}; 