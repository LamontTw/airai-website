// SEO配置文件
export const siteConfig = {
  name: "AIRAI - 智能AI解決方案專家",
  title: "AIRAI | 企業AI導入專家 - 智能解決方案顧問",
  description: "AIRAI提供專業的企業AI導入諮詢服務，包含AI技術選型、ROI計算、實施指南等完整解決方案。幫助企業成功轉型，提升營運效率。",
  keywords: [
    "AI人工智能",
    "企業AI導入",
    "AI技術選型",
    "機器學習",
    "深度學習",
    "AI解決方案",
    "智能自動化",
    "AI顧問服務",
    "數位轉型",
    "AI投資回報率",
    "人工智慧應用",
    "企業數位化",
    "AI實施指南",
    "智能科技",
    "AI諮詢",
    "大型語言模型",
    "計算機視覺",
    "自然語言處理",
    "推薦系統",
    "語音識別"
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw",
  ogImage: "/images/og-image.jpg",
  twitterHandle: "@airai_tw",
  author: {
    name: "AIRAI Team",
    email: "contact@airai.tw",
    url: "https://airai.tw"
  },
  company: {
    name: "AIRAI智能科技",
    description: "專業的企業AI導入解決方案提供商",
    address: "台灣台北市",
    phone: "+886-2-XXXX-XXXX",
    email: "info@airai.tw"
  },
  social: {
    twitter: "https://twitter.com/airai_tw",
    linkedin: "https://linkedin.com/company/airai",
    facebook: "https://facebook.com/airai.tw",
    youtube: "https://youtube.com/@airai"
  }
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
      'zh-CN': `${siteConfig.url}/cn`,
      'en-US': `${siteConfig.url}/en`,
    },
  },
}; 