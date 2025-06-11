// 國際化配置文件
export const locales = ['zh', 'en'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'zh'

// 翻譯內容
export const translations = {
  zh: {
    // 導航
    nav: {
      home: '首頁',
      about: '關於我們',
      services: '服務項目',
      cases: '成功案例',
      resources: '資源洞察',
      contact: '聯絡我們',
      consultation: '免費諮詢'
    },
    
    // 首頁
    home: {
      badge: '專為台灣中小企業設計的AI解決方案',
      title: '將 AI 融入日常工作',
      subtitle: '加速中小企業數位轉型',
      description: '透過實用的 AI Agent 導入與程式外包服務，解決人力短缺、提升作業效率，為您的企業打造可衡量的競爭優勢。成本比一台 iPhone 還便宜。',
      cta: {
        primary: '免費諮詢 AI 導入方案',
        secondary: '觀看成功案例'
      },
      stats: {
        autoReply: '客服詢問自動回覆率',
        timeSaved: '每日節省人工作業時間',
        costReduction: '營運成本降低'
      }
    },
    
    // 公司資訊
    company: {
      name: '智流科技有限公司',
      shortName: 'AIRAI',
      tagline: '將AI融入日常工作，加速中小企業數位轉型',
      address: '新北市板橋區倉後街26號',
      phone: '+886 953-202-811',
      email: 'contact@airai.tw'
    },
    
    // 服務項目
    services: {
      title: '我們的服務',
      aiAgent: {
        title: 'AI Agent 導入',
        description: '智能客服、自動化流程'
      },
      development: {
        title: '程式外包',
        description: '客製化軟體開發'
      }
    },
    
    // 頁尾
    footer: {
      description: '專業的企業AI導入解決方案提供商',
      quickLinks: '快速連結',
      services: '服務項目',
      contact: '聯絡資訊',
      legal: '法律條款',
      privacy: '隱私政策',
      terms: '服務條款',
      copyright: '版權所有'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      cases: 'Case Studies',
      resources: 'Resources',
      contact: 'Contact',
      consultation: 'Free Consultation'
    },
    
    // Homepage
    home: {
      badge: 'AI Solutions Designed for Taiwan SMEs',
      title: 'Integrate AI into Daily Operations',
      subtitle: 'Accelerate Digital Transformation for SMEs',
      description: 'Through practical AI Agent implementation and software outsourcing services, we solve staffing shortages, improve operational efficiency, and create measurable competitive advantages for your business. More affordable than an iPhone.',
      cta: {
        primary: 'Free AI Implementation Consultation',
        secondary: 'View Success Stories'
      },
      stats: {
        autoReply: 'Customer Service Auto-Reply Rate',
        timeSaved: 'Daily Manual Work Hours Saved',
        costReduction: 'Operational Cost Reduction'
      }
    },
    
    // Company Information
    company: {
      name: 'AIRAI Technology Co., Ltd.',
      shortName: 'AIRAI',
      tagline: 'Integrate AI into daily work, accelerate SME digital transformation',
      address: 'No. 26, Canghou St., Banqiao Dist., New Taipei City',
      phone: '+886 953-202-811',
      email: 'contact@airai.tw'
    },
    
    // Services
    services: {
      title: 'Our Services',
      aiAgent: {
        title: 'AI Agent Implementation',
        description: 'Intelligent customer service, automated processes'
      },
      development: {
        title: 'Software Outsourcing',
        description: 'Custom software development'
      }
    },
    
    // Footer
    footer: {
      description: 'Professional enterprise AI implementation solution provider',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact Information',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'All rights reserved'
    }
  }
} as const

// 取得翻譯文字的工具函數
export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: any = translations[locale]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}

// 取得當前語言的翻譯物件
export function getTranslations(locale: Locale) {
  return translations[locale]
} 