// 國際化配置文件
export const locales = ['zh', 'en', 'ja'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'zh'

// 語言顯示名稱
export const localeNames = {
  zh: '繁體中文',
  en: 'English',
  ja: '日本語'
} as const

// 翻譯內容
export const translations = {
  zh: {
    // SEO 相關
    seo: {
      title: 'AIRAI 智流科技 - 結束營運說明',
      description: 'AIRAI（智流科技）已於 2026 年 5 月結束營運，團隊加入 Aiworks。本站保留過往的 AI 導入知識文章與資源，供企業參考。',
      keywords: 'AIRAI,智流科技,結束營運,AI導入,企業AI,AI Agent,知識文章,資源',
      siteName: 'AIRAI 智流科技'
    },
    
    // FAQ 資料
    faq: [
      {
        question: "什麼是企業AI導入？",
        answer: "企業AI導入是指將人工智能技術整合到企業的業務流程、決策系統和日常營運中，以提升效率、降低成本、改善客戶體驗並創造新的商業價值。包括但不限於智能客服、預測分析、自動化流程、個性化推薦等應用。"
      },
      {
        question: "AI導入需要多少投資？",
        answer: "AI導入的投資範圍很廣，從幾萬元的小型自動化專案到數百萬的大型AI系統都有。關鍵是要先評估業務需求和預期回報，我們提供ROI計算工具幫助企業做出明智的投資決策。一般而言，中小企業可以從50-200萬的預算開始。"
      },
      {
        question: "如何選擇適合的AI技術？",
        answer: "選擇AI技術需要考慮多個因素：業務需求匹配度、技術成熟度、實施成本、團隊能力、擴展性需求等。我們提供專業的技術選型指南和評估工具，幫助企業科學化地選擇最適合的AI解決方案。"
      },
      {
        question: "AI導入的成功率如何？",
        answer: "根據我們的經驗和產業報告，有明確目標和專業指導的AI專案成功率可達70-80%。關鍵成功因素包括：明確的業務目標、高質量的數據、合適的技術選擇、充分的員工培訓、以及循序漸進的實施策略。"
      },
      {
        question: "AI會取代人類工作嗎？",
        answer: "AI更多是增強人類能力而非完全取代。它能自動化重複性任務，讓員工專注於更有創意和策略性的工作。適當的AI導入通常會創造新的工作機會，並提升現有員工的工作價值和技能水平。"
      },
      {
        question: "什麼是AI Agent？和傳統自動化有什麼不同？",
        answer: "AI Agent是具備自主判斷能力的智能代理，能理解自然語言、存取知識庫（RAG）、自動執行任務。與傳統RPA不同，AI Agent能處理非結構化問題，例如理解客戶意圖並給出個人化回應，而非僅依照固定腳本執行。"
      },
      {
        question: "導入AI Agent需要準備什麼？",
        answer: "主要需準備：(1) 業務知識文件（FAQ、產品手冊、SOP等），用於建立RAG知識庫；(2) 確認服務入口（LINE官方帳號、網站等）；(3) 內部一位負責人配合需求訪談。技術面由我們全程處理，企業不需要有AI技術背景。"
      }
    ],

    // 導航
    nav: {
      home: '首頁',
      about: '關於我們',
      services: '服務項目',
      cases: '成功案例',
      resources: '資源洞察',
      contact: '聯絡我們'
    },
    
    // 首頁
    home: {
      badge: '專為台灣中小企業設計的AI解決方案',
      title: '將 AI 融入日常工作',
      subtitle: '加速中小企業AI轉型',
      description: '解決人力短缺、提升作業效率，從需求診斷到上線維護，完整陪跑服務。',
      cta: {
        primary: '查看結束營運說明',
        secondary: '免費 AI 導入指南'
      },
      stats: {
        autoReply: '客服詢問自動回覆率',
        autoReplySub: '自動化處理',
        timeSaved: '每日節省人工作業時間',
        timeSavedSub: '效率提升',
        costReduction: '營運成本降低',
        costReductionSub: '成本優化'
      },
      trustBar: '50+ 台灣企業信賴的 AI 導入夥伴'
    },
    
    // 公司資訊
    company: {
      name: '智流科技有限公司',
      shortName: 'AIRAI',
      tagline: '台灣領先的企業AI導入專家',
      description: '專業提供人工智能解決方案，包括AI技術選型、投資回報率計算、實施指導等完整服務。',
      address: '新北市板橋區倉後街26號',
      phone: '+886 953-202-811',
      email: 'contact@airai.tw'
    },
    
    // 服務項目
    services: {
      title: '服務項目',
      subtitle: '全方位的數位轉型解決方案，從基礎建設到智能化升級',
      programming: {
        title: '客製化 AI 解決方案',
        subtitle: 'AI 系統整合開發',
        description: '為特定業務需求提供客製化 AI 解決方案，整合現有系統與 AI 技術，建立智能化基礎設施，提升營運效率。',
        benefits: [
          '量身定制解決方案',
          '降低運營成本',
          '改善數據管理',
          '彌補內部技術差距'
        ],
        process: [
          '需求諮詢',
          '系統設計',
          '開發測試',
          '部署維護'
        ]
      },
      aiAgent: {
        title: 'AI Agent 導入',
        subtitle: '智能自動化解決方案',
        description: '實施智慧自動化工具，簡化工作流程，增強決策能力，24/7不間斷運作。',
        benefits: [
          '自動化重複性任務',
          '即時數據洞察',
          '提高準確性',
          '可擴展的智慧'
        ],
        process: [
          '需求識別',
          'Agent選擇',
          '系統整合',
          '優化培訓'
        ]
      },
      applications: {
        title: 'AI Agent 應用場景',
        smartCustomerService: {
          title: '智能客服',
          description: 'AI聊天機器人提供24/7客戶支援，85%詢問自動回覆',
          example: 'LINE機器人自動回應客戶問題'
        },
        rpa: {
          title: '流程自動化 (RPA)',
          description: '自動化數據輸入、文件處理、財務對帳等重複性工作',
          example: '自動登入財政部網站下載文件並分類'
        },
        dataAnalytics: {
          title: '數據洞察分析',
          description: 'AI驅動的儀表板提供銷售、庫存和客戶行為分析',
          example: '整合多平台銷售數據，自動補貨建議'
        },
        intelligentRecognition: {
          title: '智能辨識系統',
          description: 'AI辨識發票、進貨單等文件，自動提取關鍵資訊',
          example: '手機拍照自動讀取進貨單更新資料庫'
        }
      },
      coreEffects: '核心效益',
      serviceProcess: '服務流程',
      learnMore: '了解更多'
    },

    // 問題解決方案區塊
    problemSolution: {
      title: '中小企業的',
      titleHighlight: '挑戰與機會',
      subtitle: '了解您的痛點，提供精準的 AI 解決方案',
      problemsTitle: '常見挑戰',
      solutionsTitle: '智流科技解決方案',
      ctaText: '了解更多解決方案',
      problems: {
        staffShortage: {
          title: '人力短缺困境',
          description: '少子化與高齡化導致專業人才招募困難，員工身兼數職影響效率',
          stat: '45.5%',
          statDesc: '企業擔心投入資金無預期成效'
        },
        manualWork: {
          title: '繁瑣手工作業',
          description: '大量重複性工作耗費人力，手動數據輸入容易出錯且效率低下',
          stat: '14小時',
          statDesc: '每日手動作業時間'
        },
        highCost: {
          title: '高成本低效益',
          description: '缺乏自動化工具，營運成本居高不下，難以提升競爭力',
          stat: '24.5%',
          statDesc: '企業認為解決方案價格難以負擔'
        }
      },
      solutions: {
        aiAgent: {
          title: 'AI Agent 智能導入',
          description: '客製化 AI 解決方案，自動化重複性工作，24/7 不間斷服務',
          benefits: ['85% 詢問自動回覆', '14小時人工時間節省', '99% 數據準確率']
        },
        dataAnalytics: {
          title: '數據驅動決策',
          description: '即時數據收集與分析，智能儀表板提供營運洞察',
          benefits: ['即時銷售分析', '自動補貨建議', '精準庫存管理']
        },
        hrOptimization: {
          title: '人力資源優化',
          description: '釋放人力投入高價值工作，提升員工滿意度與生產力',
          benefits: ['50% 營運成本降低', '員工專注核心業務', '提升服務品質']
        }
      }
    },

    // 成功案例區塊
    caseStudies: {
      title: '成功案例',
      subtitle: '真實客戶案例，證實AI導入的實際效益',
      viewMore: '查看更多案例',
      challenge: '挑戰',
      solution: '解決方案',
      results: '成果',
      testimonial: '客戶回饋',
      overallStats: '整體成效統計',
      stats: {
        automation: '平均自動化率',
        costReduction: '營運成本降低',
        timeSaved: '每日節省時間',
        satisfaction: '客戶滿意度'
      },
      statsValues: {
        automation: '85%',
        costReduction: '50%',
        timeSaved: '14小時',
        satisfaction: '99%'
      },
      ctaButtons: {
        viewMore: '查看更多案例',
        startJourney: '開始您的AI轉型之旅'
      },
      cases: {
        wholesale: {
          industry: '批發零售業',
          company: '中型批發商',
          challenge: '每天手動錄入十幾到數十張進貨單，常常加班到很晚，人為疏失頻繁',
          solution: 'AI辨識系統',
          description: '開發AI辨識系統，只要用手機拍下進貨單，系統就能自動讀取關鍵資訊，直接更新到資料庫',
          results: [
            '14小時人工作業時間大幅縮減',
            '99%數據準確率，杜絕人為疏失',
            '精準掌握庫存狀況',
            '成本比iPhone還便宜'
          ],
          testimonial: '早知道AI這麼好用，我就不會拖這麼久才開始！'
        },
        ecommerce: {
          industry: '電商平台',
          company: '多平台電商',
          challenge: '無法即時掌握各平台銷售狀況，庫存管理困難，缺乏數據洞察',
          solution: '智慧儀表板',
          description: '建立智慧儀表板，自動整合MOMO、PChome等大平台的銷售數據，AI分析銷售趨勢並提供補貨建議',
          results: [
            '即時掌握多平台銷售狀況',
            'AI自動補貨建議',
            '銷售趨勢分析',
            '庫存週轉率提升30%'
          ],
          testimonial: '現在每天只要看一個畫面，就能掌握昨天的銷售狀況，還能即時發現熱賣商品。'
        },
        accounting: {
          industry: '會計服務業',
          company: '中小型會計事務所',
          challenge: '報稅季加班到半夜，大量重複性文件處理工作耗費人力',
          solution: 'RPA自動化系統',
          description: '設計RPA系統，自動登入財政部網站，下載相關文件憑證，並做好分類歸檔',
          results: [
            '原本14小時工作，現在半夜自動完成',
            '100%文件分類準確性',
            '員工可專注高價值工作',
            '客戶滿意度大幅提升'
          ],
          testimonial: '系統在半夜默默完成所有繁瑣工作，隔天上班就能看到整理好的文件。'
        },
        customerService: {
          industry: '客服中心',
          company: '線上服務平台',
          challenge: '客戶詢問量大，客服人員不足，回覆速度慢影響客戶滿意度',
          solution: 'AI聊天機器人',
          description: '打造AI聊天機器人，將過去累積的數百筆Q&A訓練模型，透過LINE即時回應客戶問題',
          results: [
            '85%詢問自動回覆',
            '24/7不間斷服務',
            '客服人員專注複雜問題',
            '客戶滿意度提升40%'
          ],
          testimonial: '超過85%的詢問都可以自動回覆，客服人員現在能專注處理更有價值的工作。'
        }
      }
    },

    // CTA 區塊（結束營運：告別／說明導向）
    cta: {
      title: '感謝這段',
      titleHighlight: 'AI 轉型旅程',
      titleSuffix: '的同行',
      subtitle: 'AIRAI 已於 2026 年 5 月結束營運，本站不再承接諮詢與合作。團隊已加入 Aiworks，這些年累積的內容仍會保留供您參考。',
      primaryButton: '查看結束營運說明',
      secondaryButton: '瀏覽成功案例',
      whyChooseTitle: '這些年我們一起完成的',
      urgencyNote: '本站內容保留供參考，不再受理新的諮詢與報價',
      customerQuote: '智流科技不只是技術供應商，更是我們數位轉型路上的最佳夥伴',
      customerQuoteSource: '客戶真實回饋',
      benefits: [
        '陪伴台灣中小企業導入 AI',
        '客製化解決方案設計經驗',
        '智能客服與流程自動化實作',
        '數據分析與決策支援',
        '從需求診斷到上線維護',
        '完整的知識文章持續開放'
      ],
      stats: {
        cases: {
          number: '100+',
          label: '成功導入案例'
        },
        automation: {
          number: '85%',
          label: '平均自動化率'
        },
        roi: {
          number: '6個月',
          label: '平均投資回收期'
        },
        support: {
          number: '24/7',
          label: '技術支援服務'
        }
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
    },

    // 全站結束營運公告條
    announcementBar: {
      text: 'AIRAI 已結束營運，團隊加入 Aiworks ｜ 本站不再承接諮詢',
      textMobile: 'AIRAI 已結束營運，本站不再承接諮詢',
      linkText: '查看說明'
    },

    // 結束營運說明頁
    announcement: {
      metaTitle: 'AIRAI 結束營運說明',
      metaDescription: 'AIRAI 已於 2026 年 5 月結束獨立營運，停止承接新的諮詢與合作。團隊已加入 Aiworks。本頁說明後續安排與中小企業可用的免費 AI 資源。',
      pageTitle: 'AIRAI 結束營運說明',
      intro: 'AIRAI 已於 2026 年 5 月結束獨立營運，並停止承接新的諮詢、報價與合作洽詢。',
      thanksLine: '感謝您一路以來對 AIRAI 的信任與支持。AIRAI 團隊已加入 Aiworks —— AppWorks School 旗下的 AI 自動化導入與培訓服務，將在新的崗位上繼續推動企業的 AI 與自動化導入。',
      aiworksHeading: '關於 Aiworks',
      aiworksBodyBefore: 'Aiworks 提供企業端的 AI 導入顧問，也有對外開放的 AI 課程。無論您的團隊規模大小，想推動 AI 與自動化，都歡迎前往 ',
      aiworksBodyAfter: ' 看看適合的方案。',
      aiworksLinkLabel: 'aiworks.tw',
      smeHeading: '若您想先自行嘗試',
      smeBody: '如果您是剛起步、資源有限的小團隊，可以先從免費工具熟悉 AI 的基本用法。以下幾個資源是很好的起點：',
      smeResources: [
        { name: 'ChatGPT 免費版', desc: '可用來練習文案、回信、發想等日常工作情境', url: '' },
        { name: 'NotebookLM', desc: '上傳您的文件，自動整理重點與摘要', url: '' },
        { name: 'Perplexity', desc: '會標註資料來源的 AI 搜尋，方便追溯與交叉查證', url: '' },
        { name: '中小企業網路大學校', desc: '政府免費線上學習資源，提供 AI、數位轉型等中小企業相關課程', url: 'https://www.smelearning.org.tw/ai_zone.php' }
      ],
      smeClosing: '邊用邊找出「您想用 AI 解決什麼」，再決定下一步。',
      dataHeading: '資料處理',
      dataBodyBefore: '本網站已停止收集新的諮詢資料；過往透過網站提供的資料，將依原',
      dataBodyAfter: '與法定保存期限處理。',
      privacyLinkLabel: '隱私權政策',
      farewell: '謝謝這段旅程中的每一位。AIRAI 的服務到這裡告一段落，願您接下來也能找到適合自己團隊的 AI 起點。',
      signature: 'AIRAI 團隊 敬上 ｜ 2026 年 5 月',
      contactNote: '公告與既有合作事宜：contact@airai.tw（不受理新諮詢）'
    },

    // 結束營運感謝訊息（取代聯絡表單）
    contactClosed: {
      heading: '感謝您的支持',
      body: 'AIRAI 已結束營運，本站不再提供諮詢、報價與 LINE 聯繫服務。想了解結束營運說明、Aiworks 服務範圍，或中小企業可用的替代資源，請見「結束營運說明」。',
      linkText: '查看結束營運說明'
    }
  },
  
  en: {
    // SEO Related
    seo: {
      title: 'AIRAI Technology - Closure Notice',
      description: 'AIRAI Technology ceased operations in May 2026 and the team has joined Aiworks. This site keeps its AI implementation knowledge articles and resources available for reference.',
      keywords: 'AIRAI,AIRAI Technology,closure notice,AI implementation,enterprise AI,AI knowledge articles,AI resources',
      siteName: 'AIRAI Technology'
    },
    
    // FAQ Data
    faq: [
      {
        question: "What is enterprise AI implementation?",
        answer: "Enterprise AI implementation refers to integrating artificial intelligence technologies into business processes, decision systems, and daily operations to improve efficiency, reduce costs, enhance customer experience, and create new business value. This includes but is not limited to intelligent customer service, predictive analytics, process automation, and personalized recommendations."
      },
      {
        question: "How much investment is needed for AI implementation?",
        answer: "AI implementation investment ranges widely, from tens of thousands for small automation projects to millions for large AI systems. The key is to first assess business needs and expected returns. We provide ROI calculation tools to help enterprises make informed investment decisions. Generally, SMEs can start with a budget of 500K-2M TWD."
      },
      {
        question: "How to choose the right AI technology?",
        answer: "Choosing AI technology requires considering multiple factors: business requirement alignment, technology maturity, implementation costs, team capabilities, and scalability needs. We provide professional technology selection guides and assessment tools to help enterprises scientifically choose the most suitable AI solutions."
      },
      {
        question: "What is the success rate of AI implementation?",
        answer: "Based on our experience and industry reports, AI projects with clear objectives and professional guidance can achieve a 70-80% success rate. Key success factors include: clear business objectives, high-quality data, appropriate technology selection, adequate staff training, and progressive implementation strategies."
      },
      {
        question: "Will AI replace human jobs?",
        answer: "AI is more about augmenting human capabilities rather than complete replacement. It can automate repetitive tasks, allowing employees to focus on more creative and strategic work. Proper AI implementation typically creates new job opportunities and enhances the value and skills of existing employees."
      },
      {
        question: "What is an AI Agent? How is it different from traditional automation?",
        answer: "An AI Agent is an intelligent system capable of autonomous judgment — it understands natural language, accesses knowledge bases (RAG), and executes tasks automatically. Unlike traditional RPA that follows fixed scripts, AI Agents handle unstructured problems, such as understanding customer intent and providing personalized responses."
      },
      {
        question: "What do we need to prepare for AI Agent implementation?",
        answer: "You'll mainly need: (1) business knowledge documents (FAQs, product manuals, SOPs) for building the RAG knowledge base; (2) service entry points (LINE Official Account, website, etc.); (3) one internal point of contact for requirements interviews. We handle all technical aspects — no AI expertise required on your end."
      }
    ],

    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      cases: 'Case Studies',
      resources: 'Resources',
      contact: 'Contact'
    },
    
    // Homepage
    home: {
      badge: 'AI Solutions Designed for Taiwan SMEs',
      title: 'Integrate AI into Daily Operations',
      subtitle: 'Accelerate Digital Transformation for SMEs',
      description: 'Solve staffing shortages, boost efficiency — full support from diagnosis to deployment.',
      cta: {
        primary: 'View the Closure Notice',
        secondary: 'AI Implementation Guide'
      },
      stats: {
        autoReply: 'Customer Service Auto-Reply Rate',
        autoReplySub: 'Automation',
        timeSaved: 'Daily Manual Work Hours Saved',
        timeSavedSub: 'Efficiency',
        costReduction: 'Operational Cost Reduction',
        costReductionSub: 'Cost Optimization'
      },
      trustBar: '50+ Taiwan enterprises trust our AI solutions'
    },
    
    // Company Information
    company: {
      name: 'AIRAI Technology Co., Ltd.',
      shortName: 'AIRAI',
      tagline: 'Leading Enterprise AI Implementation Expert in Taiwan',
      description: 'Professional artificial intelligence solutions provider, including AI technology selection, ROI calculation, implementation guidance, and comprehensive services.',
      address: 'No. 26, Canghou St., Banqiao Dist., New Taipei City',
      phone: '+886 953-202-811',
      email: 'contact@airai.tw'
    },
    
    // Services
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive digital transformation solutions, from infrastructure to intelligent upgrades',
      programming: {
        title: 'Software Outsourcing',
        subtitle: 'Custom Software Development',
        description: 'Provide customized software development for specific business needs, build digital infrastructure, and improve operational efficiency.',
        benefits: [
          'Tailored Solutions',
          'Reduce Operating Costs',
          'Improve Data Management',
          'Bridge Internal Technology Gaps'
        ],
        process: [
          'Requirement Consultation',
          'System Design',
          'Development & Testing',
          'Deployment & Maintenance'
        ]
      },
      aiAgent: {
        title: 'AI Agent Implementation',
        subtitle: 'Intelligent Automation Solutions',
        description: 'Implement intelligent automation tools to simplify workflows, enhance decision-making capabilities, and operate 24/7 without interruption.',
        benefits: [
          'Automate Repetitive Tasks',
          'Real-time Data Insights',
          'Improve Accuracy',
          'Scalable Intelligence'
        ],
        process: [
          'Requirement Identification',
          'Agent Selection',
          'System Integration',
          'Optimization & Training'
        ]
      },
      applications: {
        title: 'AI Agent Application Scenarios',
        smartCustomerService: {
          title: 'Intelligent Customer Service',
          description: 'AI chatbot provides 24/7 customer support with 85% auto-reply rate',
          example: 'LINE bot automatically responds to customer inquiries'
        },
        rpa: {
          title: 'Process Automation (RPA)',
          description: 'Automate data entry, document processing, financial reconciliation and other repetitive tasks',
          example: 'Automatically log into Ministry of Finance website to download and categorize documents'
        },
        dataAnalytics: {
          title: 'Data Insights Analytics',
          description: 'AI-driven dashboard provides sales, inventory and customer behavior analysis',
          example: 'Integrate multi-platform sales data with automated replenishment recommendations'
        },
        intelligentRecognition: {
          title: 'Intelligent Recognition System',
          description: 'AI recognizes invoices, purchase orders and other documents, automatically extracting key information',
          example: 'Mobile photo capture automatically reads purchase orders and updates database'
        }
      },
      coreEffects: 'Core Benefits',
      serviceProcess: 'Service Process',
      learnMore: 'Learn More'
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
    },

    // Site-wide Closure Announcement Bar
    announcementBar: {
      text: 'AIRAI has ceased operations; our team has joined Aiworks — this site no longer takes inquiries',
      textMobile: 'AIRAI has ceased operations',
      linkText: 'Learn more'
    },

    // Closure Announcement Page
    announcement: {
      metaTitle: 'Notice of AIRAI Closure',
      metaDescription: 'AIRAI ceased independent operations in May 2026 and no longer accepts new inquiries or engagements. The team has joined Aiworks. This page explains the transition and free AI resources available to small businesses.',
      pageTitle: 'Notice of AIRAI Closure',
      intro: 'AIRAI ceased independent operations in May 2026 and has stopped accepting new inquiries, quotes, and partnership requests.',
      thanksLine: 'Thank you for the trust and support you have shown AIRAI throughout this journey. The AIRAI team has joined Aiworks — the AI automation and training service under AppWorks School — and will continue to advance enterprise AI and automation adoption in this new role.',
      aiworksHeading: 'About Aiworks',
      aiworksBodyBefore: 'Aiworks provides AI adoption consulting for enterprises and also offers AI courses open to the public. Whatever the size of your team, if you are looking to advance AI and automation, you are welcome to visit ',
      aiworksBodyAfter: ' to explore the options that suit you.',
      aiworksLinkLabel: 'aiworks.tw',
      smeHeading: 'If You’d Like to Start on Your Own',
      smeBody: 'We know that many who supported AIRAI were small teams just getting started with limited resources. You can begin by getting familiar with the basics of AI using free tools. The following are good starting points:',
      smeResources: [
        { name: 'ChatGPT (free tier)', desc: 'Practice everyday work tasks such as writing copy, replying to emails, and brainstorming', url: '' },
        { name: 'NotebookLM', desc: 'Upload your documents and have key points and summaries organized automatically', url: '' },
        { name: 'Perplexity', desc: 'AI search that cites its sources, making it easier to trace and cross-check information', url: '' },
        { name: 'SME Online University (Taiwan)', desc: 'Free government online learning resources offering courses on AI, digital transformation, and other topics relevant to small businesses', url: 'https://www.smelearning.org.tw/ai_zone.php' }
      ],
      smeClosing: 'Discover "what you want AI to solve" as you use these tools, then decide on your next step.',
      dataHeading: 'Data Handling',
      dataBodyBefore: 'This website has stopped collecting new inquiry data; information previously submitted through the site will be handled in accordance with the original ',
      dataBodyAfter: ' and statutory retention periods.',
      privacyLinkLabel: 'Privacy Policy',
      farewell: 'Thank you to everyone who was part of this journey. AIRAI’s services conclude here, and we hope you find the right starting point for AI that suits your own team.',
      signature: 'The AIRAI Team | May 2026',
      contactNote: 'For announcements and existing engagements: contact@airai.tw (new inquiries not accepted)'
    },

    // Closure thank-you message (replaces the contact form)
    contactClosed: {
      heading: 'Thank You for Your Support',
      body: 'AIRAI has ceased operations and this site no longer provides consultation, quotes, or LINE contact services. To learn about the closure, the scope of Aiworks services, or alternative resources available to small businesses, please see the closure notice.',
      linkText: 'View the closure notice'
    },

    // Problem Solution Section
    problemSolution: {
      title: 'Challenges and Opportunities for',
      titleHighlight: 'SMEs',
      subtitle: 'Understanding your pain points, providing precise AI solutions',
      problemsTitle: 'Common Challenges',
      solutionsTitle: 'AIRAI Technology Solutions',
      ctaText: 'Learn More Solutions',
      problems: {
        staffShortage: {
          title: 'Staffing Shortage Crisis',
          description: 'Declining birth rates and aging population make professional talent recruitment difficult, employees juggling multiple roles affecting efficiency',
          stat: '45.5%',
          statDesc: 'Companies worry about investing funds without expected results'
        },
        manualWork: {
          title: 'Tedious Manual Operations',
          description: 'Large amounts of repetitive work consume manpower, manual data entry is error-prone and inefficient',
          stat: '14 hours',
          statDesc: 'Daily manual operation time'
        },
        highCost: {
          title: 'High Cost Low Efficiency',
          description: 'Lack of automation tools, high operating costs, difficult to improve competitiveness',
          stat: '24.5%',
          statDesc: 'Companies find solution prices unaffordable'
        }
      },
      solutions: {
        aiAgent: {
          title: 'AI Agent Smart Implementation',
          description: 'Customized AI solutions, automate repetitive work, 24/7 uninterrupted service',
          benefits: ['85% inquiry auto-reply', '14 hours manual time saved', '99% data accuracy']
        },
        dataAnalytics: {
          title: 'Data-Driven Decision Making',
          description: 'Real-time data collection and analysis, intelligent dashboard provides operational insights',
          benefits: ['Real-time sales analysis', 'Automated replenishment recommendations', 'Precise inventory management']
        },
        hrOptimization: {
          title: 'Human Resource Optimization',
          description: 'Free up manpower for high-value work, improve employee satisfaction and productivity',
          benefits: ['50% operational cost reduction', 'Employees focus on core business', 'Improve service quality']
        }
      }
    },

    // Case Studies Section
    caseStudies: {
      title: 'Success Stories',
      subtitle: 'Real client cases proving the actual benefits of AI implementation',
      viewMore: 'View More Cases',
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results',
      testimonial: 'Client Feedback',
      overallStats: 'Overall Impact Statistics',
      stats: {
        automation: 'Average Automation Rate',
        costReduction: 'Operational Cost Reduction',
        timeSaved: 'Daily Time Savings',
        satisfaction: 'Customer Satisfaction'
      },
      statsValues: {
        automation: '85%',
        costReduction: '50%',
        timeSaved: '14 hours',
        satisfaction: '99%'
      },
      ctaButtons: {
        viewMore: 'View More Cases',
        startJourney: 'Start Your AI Transformation Journey'
      },
      cases: {
        wholesale: {
          industry: 'Wholesale & Retail',
          company: 'Mid-size Wholesale Distributor',
          challenge: 'Daily manual entry of dozens of purchase invoices, working overtime until midnight, frequent human errors',
          solution: 'AI Recognition System',
          description: 'Developed AI recognition system that automatically reads key information from purchase invoices by simply taking photos with smartphones, directly updating the database',
          results: [
            'Significantly reduced 14 hours of manual work',
            '99% data accuracy, eliminated human errors',
            'Precise inventory status tracking',
            'Cost lower than an iPhone'
          ],
          testimonial: 'If I had known AI was this convenient, I wouldn\'t have delayed it for so long!'
        },
        ecommerce: {
          industry: 'E-commerce Platform',
          company: 'Multi-platform E-commerce',
          challenge: 'Unable to track sales performance across platforms in real-time, difficult inventory management, lack of data insights',
          solution: 'Smart Dashboard',
          description: 'Built smart dashboard integrating sales data from major platforms like MOMO and PChome, providing AI analysis for sales trends and replenishment recommendations',
          results: [
            'Real-time multi-platform sales tracking',
            'AI-powered automatic replenishment recommendations',
            'Sales trend analysis',
            '30% improvement in inventory turnover'
          ],
          testimonial: 'Now I can see yesterday\'s sales performance on one screen every day and instantly discover popular products.'
        },
        accounting: {
          industry: 'Accounting Services',
          company: 'Small-Medium Accounting Firm',
          challenge: 'Working overtime until midnight during tax season, massive repetitive document processing consuming manpower',
          solution: 'RPA Automation System',
          description: 'Designed RPA system that automatically logs into Ministry of Finance website, downloads relevant documents and vouchers, and properly categorizes them',
          results: [
            'Originally 14-hour tasks now completed automatically overnight',
            '100% document classification accuracy',
            'Staff can focus on high-value work',
            'Significantly improved customer satisfaction'
          ],
          testimonial: 'The system silently completes tedious work overnight, and I can see organized documents when I arrive at work in the morning.'
        },
        customerService: {
          industry: 'Customer Service Center',
          company: 'Online Service Platform',
          challenge: 'High volume of customer inquiries, insufficient customer service staff, slow response times affecting customer satisfaction',
          solution: 'AI Chatbot',
          description: 'Built AI chatbot trained on hundreds of accumulated Q&As, providing instant responses to customer questions through LINE',
          results: [
            '85% of inquiries automatically answered',
            '24/7 uninterrupted service',
            'Customer service staff focus on complex issues',
            '40% improvement in customer satisfaction'
          ],
          testimonial: 'Over 85% of inquiries can be automatically answered, allowing customer service staff to focus on more valuable work.'
        }
      }
    },

    // CTA Section (closure: farewell / informational)
    cta: {
      title: 'Thank You for Sharing This',
      titleHighlight: 'AI Transformation Journey',
      titleSuffix: '',
      subtitle: 'AIRAI ceased operations in May 2026 and no longer accepts inquiries or engagements. The team has joined Aiworks, and the content built over these years remains available for your reference.',
      primaryButton: 'View the Closure Notice',
      secondaryButton: 'Browse Success Stories',
      whyChooseTitle: 'What We Accomplished Together',
      urgencyNote: 'This site\'s content is kept for reference; new inquiries and quotes are no longer accepted',
      customerQuote: 'AIRAI Technology is not just a technology supplier, but our best partner on the digital transformation journey',
      customerQuoteSource: 'Actual Client Feedback',
      benefits: [
        'Supported Taiwan SMEs in adopting AI',
        'Experience in custom solution design',
        'Intelligent customer service & process automation',
        'Data analytics and decision support',
        'From needs diagnosis to deployment',
        'A full library of knowledge articles kept open'
      ],
      stats: {
        cases: {
          number: '100+',
          label: 'Successful Implementation Cases'
        },
        automation: {
          number: '85%',
          label: 'Average Automation Rate'
        },
        roi: {
          number: '6 months',
          label: 'Average ROI Period'
        },
        support: {
          number: '24/7',
          label: 'Technical Support Service'
        }
      }
    }
  },

  ja: {
    // SEO関連
    seo: {
      title: 'AIRAI テクノロジー - 営業終了のお知らせ',
      description: 'AIRAI テクノロジーは 2026 年 5 月をもって営業を終了し、チームは Aiworks に参加しました。本サイトはこれまでの AI 導入に関するナレッジ記事とリソースを参考用として公開しています。',
      keywords: 'AIRAI,AIRAI テクノロジー,営業終了,AI導入,企業AI,AIナレッジ記事,AIリソース',
      siteName: 'AIRAI テクノロジー'
    },
    
    // FAQ データ
    faq: [
      {
        question: "企業AI導入とは何ですか？",
        answer: "企業AI導入とは、人工知能技術をビジネスプロセス、意思決定システム、日常業務に統合し、効率性の向上、コスト削減、顧客体験の改善、新しいビジネス価値の創造を図ることです。インテリジェントカスタマーサービス、予測分析、プロセス自動化、パーソナライズされた推奨などの応用が含まれます。"
      },
      {
        question: "AI導入にはどのくらいの投資が必要ですか？",
        answer: "AI導入の投資範囲は広く、小規模な自動化プロジェクトの数万元から大規模AIシステムの数百万元まであります。重要なのは、まずビジネスニーズと期待される収益を評価することです。企業が賢明な投資決定を行うためのROI計算ツールを提供しています。一般的に、中小企業は50-200万元の予算から始めることができます。"
      },
      {
        question: "適切なAI技術をどのように選択しますか？",
        answer: "AI技術の選択には複数の要因を考慮する必要があります：ビジネス要件の適合性、技術の成熟度、実装コスト、チームの能力、拡張性のニーズなど。企業が最適なAIソリューションを科学的に選択できるよう、専門的な技術選定ガイドと評価ツールを提供しています。"
      },
      {
        question: "AI導入の成功率はどのくらいですか？",
        answer: "私たちの経験と業界レポートに基づくと、明確な目標と専門的な指導があるAIプロジェクトの成功率は70-80%に達することができます。主要な成功要因には、明確なビジネス目標、高品質なデータ、適切な技術選択、十分なスタッフトレーニング、段階的な実装戦略が含まれます。"
      },
      {
        question: "AIは人間の仕事を置き換えますか？",
        answer: "AIは完全な置き換えよりも人間の能力を強化することが多いです。反復的なタスクを自動化し、従業員がより創造的で戦略的な仕事に集中できるようにします。適切なAI導入は通常、新しい雇用機会を創出し、既存従業員の仕事の価値とスキルレベルを向上させます。"
      },
      {
        question: "AIエージェントとは？従来の自動化との違いは？",
        answer: "AIエージェントは自律的な判断能力を持つ知的システムです。自然言語を理解し、ナレッジベース（RAG）にアクセスし、タスクを自動実行します。固定スクリプトに従う従来のRPAとは異なり、AIエージェントは顧客の意図を理解し、パーソナライズされた対応を提供するなど、非構造化な問題に対応できます。"
      },
      {
        question: "AIエージェント導入に必要な準備は？",
        answer: "主に必要なのは：(1) 業務知識文書（FAQ、製品マニュアル、SOPなど）でRAGナレッジベースを構築；(2) サービス入口の確認（LINE公式アカウント、ウェブサイトなど）；(3) 要件ヒアリング用の社内担当者1名。技術面はすべて弊社が対応しますので、AI技術の専門知識は不要です。"
      }
    ],

    // ナビゲーション
    nav: {
      home: 'ホーム',
      about: '私たちについて',
      services: 'サービス',
      cases: 'ケーススタディ',
      resources: 'リソース',
      contact: 'お問い合わせ'
    },
    
    // ホームページ
    home: {
      badge: '台湾の中小企業向けに設計されたAIソリューション',
      title: 'AIを日常業務に統合',
      subtitle: '中小企業のデジタル変革を加速',
      description: '人材不足を解決し、効率を向上。診断から導入まで、フルサポート。',
      cta: {
        primary: '営業終了のお知らせを見る',
        secondary: 'AI導入ガイド'
      },
      stats: {
        autoReply: 'カスタマーサービス自動返信率',
        autoReplySub: '自動化',
        timeSaved: '日次手動作業時間削減',
        timeSavedSub: '効率化',
        costReduction: '運営コスト削減',
        costReductionSub: 'コスト最適化'
      },
      trustBar: '50社以上の台湾企業が信頼するAIパートナー'
    },
    
    // 会社情報
    company: {
      name: 'AIRAI テクノロジー株式会社',
      shortName: 'AIRAI',
      tagline: '台湾をリードする企業AI導入エキスパート',
      description: 'AI技術選定、ROI計算、実装指導などの包括的なサービスを含む専門的な人工知能ソリューションプロバイダー。',
      address: '新北市板橋区倉後街26号',
      phone: '+886 953-202-811',
      email: 'contact@airai.tw'
    },
    
    // サービス
    services: {
      title: '私たちのサービス',
      subtitle: '基盤構築からインテリジェント化まで、包括的なデジタル変革ソリューション',
      programming: {
        title: 'ソフトウェア外注',
        subtitle: 'カスタムソフトウェア開発',
        description: '特定のビジネスニーズに対応したカスタムソフトウェア開発を提供し、デジタル基盤を構築し、運営効率を向上させます。',
        benefits: [
          'オーダーメイドソリューション',
          '運営コスト削減',
          'データ管理改善',
          '内部技術ギャップの補完'
        ],
        process: [
          '要件相談',
          'システム設計',
          '開発・テスト',
          '展開・保守'
        ]
      },
      aiAgent: {
        title: 'AIエージェント導入',
        subtitle: 'インテリジェント自動化ソリューション',
        description: 'インテリジェント自動化ツールを実装し、ワークフローを簡素化し、意思決定能力を強化し、24/7中断なく動作します。',
        benefits: [
          '反復タスクの自動化',
          'リアルタイムデータ洞察',
          '精度向上',
          'スケーラブルなインテリジェンス'
        ],
        process: [
          '要件識別',
          'エージェント選択',
          'システム統合',
          '最適化・トレーニング'
        ]
      },
      applications: {
        title: 'AIエージェント応用シナリオ',
        smartCustomerService: {
          title: 'インテリジェントカスタマーサービス',
          description: 'AIチャットボットが24/7カスタマーサポートを提供、85%の問い合わせを自動返信',
          example: 'LINEボットが顧客の問い合わせに自動応答'
        },
        rpa: {
          title: 'プロセス自動化 (RPA)',
          description: 'データ入力、文書処理、財務照合などの反復作業を自動化',
          example: '財政部ウェブサイトに自動ログインして文書をダウンロード・分類'
        },
        dataAnalytics: {
          title: 'データ洞察分析',
          description: 'AI駆動のダッシュボードが販売、在庫、顧客行動分析を提供',
          example: 'マルチプラットフォーム販売データを統合し、自動補充推奨'
        },
        intelligentRecognition: {
          title: 'インテリジェント認識システム',
          description: 'AI が請求書、発注書などの文書を認識し、重要情報を自動抽出',
          example: 'モバイル写真撮影で発注書を自動読み取り、データベース更新'
        }
      },
      coreEffects: 'コア効果',
      serviceProcess: 'サービスプロセス',
      learnMore: '詳細を見る'
    },
    
    // フッター
    footer: {
      description: '専門的な企業AI導入ソリューションプロバイダー',
      quickLinks: 'クイックリンク',
      services: 'サービス',
      contact: '連絡先情報',
      legal: '法的事項',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      copyright: '全著作権所有'
    },

    // サイト全体の営業終了アナウンスメントバー
    announcementBar: {
      text: 'AIRAI は営業を終了し、チームは Aiworks に参加しました｜本サイトでの相談受付は終了しました',
      textMobile: 'AIRAI は営業を終了しました',
      linkText: '詳細を見る'
    },

    // 営業終了のお知らせページ
    announcement: {
      metaTitle: 'AIRAI 営業終了のお知らせ',
      metaDescription: 'AIRAI は 2026 年 5 月をもって独立した事業運営を終了し、新規のご相談・お見積り・協業のお問い合わせの受付を停止いたしました。チームは Aiworks に参加しています。本ページでは今後の対応と、中小企業がご利用いただける無料の AI リソースをご案内します。',
      pageTitle: 'AIRAI 営業終了のお知らせ',
      intro: 'AIRAI は 2026 年 5 月をもって独立した事業運営を終了し、新規のご相談・お見積り・協業のお問い合わせの受付を停止いたしました。',
      thanksLine: 'これまで AIRAI をご信頼・ご支援くださり、誠にありがとうございました。AIRAI チームは、AppWorks School が運営する AI 自動化導入・研修サービス「Aiworks」に参加し、新たな立場で企業の AI・自動化導入を引き続き推進してまいります。',
      aiworksHeading: 'Aiworks について',
      aiworksBodyBefore: 'Aiworks は、企業向けの AI 導入コンサルティングに加え、一般の方も受講できる AI 講座も提供しています。チームの規模を問わず、AI・自動化の推進をお考えの方は、',
      aiworksBodyAfter: ' で最適なプランをご覧ください。',
      aiworksLinkLabel: 'aiworks.tw',
      smeHeading: 'まずはご自身で試してみたい方へ',
      smeBody: 'AIRAI を支えてくださった方の多くが、立ち上げて間もない、リソースの限られた小さなチームであることを私たちは理解しています。まずは無料のツールで AI の基本的な使い方に慣れるところから始められます。以下のリソースが良い出発点になります：',
      smeResources: [
        { name: 'ChatGPT 無料版', desc: '文章作成、メール返信、アイデア出しなど、日常業務の場面で活用できます', url: '' },
        { name: 'NotebookLM', desc: '資料をアップロードすると、要点と要約を自動で整理します', url: '' },
        { name: 'Perplexity', desc: '情報源を明示する AI 検索で、出典の確認や照合がしやすくなります', url: '' },
        { name: '中小企業ネット大学校（台湾）', desc: 'AI やデジタル変革など、中小企業向けの講座を提供する、政府の無料オンライン学習リソース', url: 'https://www.smelearning.org.tw/ai_zone.php' }
      ],
      smeClosing: '使いながら「AI で何を解決したいのか」を見つけ、次のステップを検討してみてください。',
      dataHeading: 'データの取り扱い',
      dataBodyBefore: '本サイトは新規のご相談データの収集を停止しています。これまでにサイトを通じてご提供いただいた情報は、従来の',
      dataBodyAfter: 'および法定の保存期間に従って取り扱います。',
      privacyLinkLabel: 'プライバシーポリシー',
      farewell: 'この道のりをともにしてくださったすべての皆さまに感謝申し上げます。AIRAI のサービスはここで一区切りとなりますが、皆さまがご自身のチームに合った AI の出発点を見つけられますよう願っております。',
      signature: 'AIRAI チーム一同 ｜ 2026 年 5 月',
      contactNote: 'お知らせおよび既存の協業に関するお問い合わせ：contact@airai.tw（新規のご相談は受け付けておりません）'
    },

    // 営業終了の感謝メッセージ（お問い合わせフォームの代替）
    contactClosed: {
      heading: 'ご支援に感謝いたします',
      body: 'AIRAI は営業を終了し、本サイトでのご相談・お見積り・LINE でのご連絡の受付は行っておりません。営業終了の詳細、Aiworks のサービス範囲、中小企業がご利用いただける代替リソースについては、「営業終了のお知らせ」をご覧ください。',
      linkText: '営業終了のお知らせを見る'
    },

    // Problem Solution Section
    problemSolution: {
      title: '中小企業の',
      titleHighlight: '課題と機会',
      subtitle: 'お客様の痛みを理解し、精密なAIソリューションを提供',
      problemsTitle: '共通の課題',
      solutionsTitle: 'AIRAIテクノロジーソリューション',
      ctaText: 'さらなるソリューションを見る',
      problems: {
        staffShortage: {
          title: '人材不足の危機',
          description: '少子高齢化により専門人材の採用が困難、従業員が複数の役割を兼任し効率に影響',
          stat: '45.5%',
          statDesc: '企業が投資資金に対する期待結果を心配'
        },
        manualWork: {
          title: '面倒な手動作業',
          description: '大量の反復作業が人手を消費、手動データ入力はミスが多く非効率',
          stat: '14時間',
          statDesc: '日次手動作業時間'
        },
        highCost: {
          title: '高コスト低効率',
          description: '自動化ツールの不足、運営コストが高く、競争力向上が困難',
          stat: '24.5%',
          statDesc: '企業がソリューション価格を手頃でないと感じる'
        }
      },
      solutions: {
        aiAgent: {
          title: 'AIエージェントスマート導入',
          description: 'カスタマイズされたAIソリューション、反復作業を自動化、24/7中断なしサービス',
          benefits: ['85%問い合わせ自動返信', '14時間手動時間節約', '99%データ精度']
        },
        dataAnalytics: {
          title: 'データ駆動意思決定',
          description: 'リアルタイムデータ収集・分析、インテリジェントダッシュボードが運営洞察を提供',
          benefits: ['リアルタイム販売分析', '自動補充推奨', '精密在庫管理']
        },
        hrOptimization: {
          title: '人的資源最適化',
          description: '人材を高付加価値業務に解放し、従業員満足度と生産性を向上',
          benefits: ['50%運営コスト削減', '従業員がコア業務に集中', 'サービス品質向上']
        }
      }
    },

    // Case Studies Section
    caseStudies: {
      title: '成功事例',
      subtitle: 'AI導入の実際の効果を証明する実際のクライアント事例',
      viewMore: 'さらに事例を見る',
      challenge: '課題',
      solution: '解決策',
      results: '成果',
      testimonial: 'クライアントの声',
      overallStats: '全体的なパフォーマンス統計',
      stats: {
        automation: '平均自動化率',
        costReduction: '運営コスト削減',
        timeSaved: '日次時間節約',
        satisfaction: '顧客満足度'
      },
      statsValues: {
        automation: '85%',
        costReduction: '50%',
        timeSaved: '14時間',
        satisfaction: '99%'
      },
      ctaButtons: {
        viewMore: 'さらに事例を見る',
        startJourney: 'AI変革の旅を始める'
      },
      cases: {
        wholesale: {
          industry: '卸売・小売業',
          company: '中規模卸売業者',
          challenge: '毎日数十件の発注書を手動入力、深夜まで残業することが多く、人的ミスが頻発',
          solution: 'AI認識システム',
          description: 'モバイル写真から発注書の重要情報を自動読み取り、データベースに直接更新するAI認識システムを開発',
          results: [
            '14時間の手動作業を大幅削減',
            '99%のデータ精度、人的ミスを排除',
            '正確な在庫管理',
            'iPhoneより安いコスト'
          ],
          testimonial: 'AIがこんなに便利だと知っていたら、こんなに導入を遅らせることはありませんでした！'
        },
        ecommerce: {
          industry: 'Eコマースプラットフォーム',
          company: 'マルチプラットフォームEコマース',
          challenge: '各プラットフォームのリアルタイム販売状況を把握できず、在庫管理が困難、データ洞察が不足',
          solution: 'スマートダッシュボード',
          description: 'MOMO、PChomeなど主要プラットフォームの販売データを自動統合し、AIが販売トレンドを分析して補充推奨を提供するスマートダッシュボードを構築',
          results: [
            'マルチプラットフォーム販売状況をリアルタイムで把握',
            'AI自動補充推奨',
            '販売トレンド分析',
            '在庫回転率30%向上'
          ],
          testimonial: '今は毎日一つの画面を見るだけで昨日の販売状況を理解し、人気商品を即座に発見できます。'
        },
        accounting: {
          industry: '会計サービス',
          company: '中小会計事務所',
          challenge: '税務シーズンに深夜まで残業、大量の反復的な書類処理が人手を消費',
          solution: 'RPA自動化システム',
          description: '財政部ウェブサイトに自動ログインし、関連書類証明書をダウンロードして適切に分類するRPAシステムを設計',
          results: [
            '元の14時間の作業が深夜に自動完了',
            '100%の書類分類精度',
            '従業員が高付加価値業務に集中可能',
            '顧客満足度大幅向上'
          ],
          testimonial: 'システムが深夜に静かにすべての面倒な作業を完了し、翌朝出勤すると整理された書類を見ることができます。'
        },
        customerService: {
          industry: 'カスタマーサービスセンター',
          company: 'オンラインサービスプラットフォーム',
          challenge: '大量の顧客問い合わせ、カスタマーサービススタッフ不足、応答が遅く顧客満足度に影響',
          solution: 'AIチャットボット',
          description: '蓄積された数百のQ&Aでモデルを訓練し、LINEを通じて顧客の質問に即座に応答するAIチャットボットを構築',
          results: [
            '85%の問い合わせを自動返信',
            '24/7中断なしサービス',
            'カスタマーサービススタッフが複雑な問題に集中',
            '顧客満足度40%向上'
          ],
          testimonial: '85%以上の問い合わせが自動返信でき、カスタマーサービススタッフはより価値のある業務に集中できるようになりました。'
        }
      }
    },

    // CTA Section（営業終了：お別れ・ご案内）
    cta: {
      title: 'この',
      titleHighlight: 'AI変革の道のり',
      titleSuffix: 'をともにできたことに感謝します',
      subtitle: 'AIRAI は 2026 年 5 月をもって営業を終了し、ご相談や協業の受付を停止いたしました。チームは Aiworks に参加し、これまで積み重ねた内容は引き続き参考としてご覧いただけます。',
      primaryButton: '営業終了のお知らせを見る',
      secondaryButton: '成功事例を見る',
      whyChooseTitle: 'これまで一緒に実現してきたこと',
      urgencyNote: '本サイトの内容は参考用として保持しており、新規のご相談・お見積りは受け付けておりません',
      customerQuote: 'AIRAIテクノロジーは単なる技術サプライヤーではなく、私たちのデジタル変革路上の最良のパートナーです',
      customerQuoteSource: '実際のクライアントフィードバック',
      benefits: [
        '台湾の中小企業の AI 導入を支援',
        'カスタムソリューション設計の経験',
        'インテリジェント接客と業務自動化の実装',
        'データ分析と意思決定支援',
        'ニーズ診断から運用保守まで',
        '充実したナレッジ記事を引き続き公開'
      ],
      stats: {
        cases: {
          number: '100+',
          label: '成功導入事例'
        },
        automation: {
          number: '85%',
          label: '平均自動化率'
        },
        roi: {
          number: '6ヶ月',
          label: '平均投資回収期間'
        },
        support: {
          number: '24/7',
          label: '技術サポートサービス'
        }
      }
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

// 從路徑中取得當前語言
export function getCurrentLocale(pathname: string): Locale {
  if (pathname.startsWith('/en')) return 'en'
  if (pathname.startsWith('/ja')) return 'ja'
  return 'zh'
} 