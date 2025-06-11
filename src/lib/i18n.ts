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
      title: 'AIRAI - 台灣領先的企業AI導入專家 | 智流科技',
      description: '專業提供企業AI導入解決方案，包括AI Agent智能客服、程式外包服務。協助台灣中小企業數位轉型，提升營運效率，降低成本。免費諮詢服務。',
      keywords: 'AI導入,企業AI,智能客服,程式外包,數位轉型,台灣AI,中小企業,自動化,機器學習,人工智能',
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
      }
    ],
    
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
        title: '程式外包',
        subtitle: '客製化軟體開發',
        description: '為特定業務需求提供客製化軟體開發，建立數位化基礎設施，提升營運效率。',
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

    // CTA 區塊
    cta: {
      title: '準備好開始您的',
      titleHighlight: 'AI 轉型之旅',
      titleSuffix: '了嗎？',
      subtitle: '不要讓競爭對手搶得先機。立即與我們聯繫，獲得專屬的AI導入諮詢，讓您的企業在數位時代中脫穎而出。',
      primaryButton: '立即免費諮詢',
      secondaryButton: '查看成功案例',
      whyChooseTitle: '為什麼選擇智流科技？',
      urgencyNote: '限時優惠：本月諮詢免費提供AI導入可行性評估報告',
      customerQuote: '智流科技不只是技術供應商，更是我們數位轉型路上的最佳夥伴',
      customerQuoteSource: '客戶真實回饋',
      benefits: [
        '免費評估您的AI導入需求',
        '客製化解決方案設計',
        '專業團隊全程服務',
        '可衡量的投資回報',
        '完整的培訓與支援',
        '持續優化與維護'
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
    }
  },
  
  en: {
    // SEO Related
    seo: {
      title: 'AIRAI - Leading Enterprise AI Implementation Expert in Taiwan | AIRAI Technology',
      description: 'Professional enterprise AI implementation solutions including AI Agent intelligent customer service and software outsourcing. Helping Taiwan SMEs with digital transformation, improving operational efficiency, and reducing costs. Free consultation available.',
      keywords: 'AI implementation,enterprise AI,intelligent customer service,software outsourcing,digital transformation,Taiwan AI,SME,automation,machine learning,artificial intelligence',
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
      }
    ],
    
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
    }
  },

  ja: {
    // SEO関連
    seo: {
      title: 'AIRAI - 台湾をリードする企業AI導入エキスパート | AIRAI テクノロジー',
      description: 'AIエージェント・インテリジェントカスタマーサービス、ソフトウェア外注を含む専門的な企業AI導入ソリューション。台湾の中小企業のデジタル変革を支援し、運営効率を向上させ、コストを削減。無料相談サービス。',
      keywords: 'AI導入,企業AI,インテリジェントカスタマーサービス,ソフトウェア外注,デジタル変革,台湾AI,中小企業,自動化,機械学習,人工知能',
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
      }
    ],
    
    // ナビゲーション
    nav: {
      home: 'ホーム',
      about: '私たちについて',
      services: 'サービス',
      cases: 'ケーススタディ',
      resources: 'リソース',
      contact: 'お問い合わせ',
      consultation: '無料相談'
    },
    
    // ホームページ
    home: {
      badge: '台湾の中小企業向けに設計されたAIソリューション',
      title: 'AIを日常業務に統合',
      subtitle: '中小企業のデジタル変革を加速',
      description: '実用的なAIエージェント導入とソフトウェア外注サービスを通じて、人材不足を解決し、運営効率を向上させ、ビジネスに測定可能な競争優位性を創造します。iPhoneよりも手頃な価格。',
      cta: {
        primary: '無料AI導入相談',
        secondary: '成功事例を見る'
      },
      stats: {
        autoReply: 'カスタマーサービス自動返信率',
        timeSaved: '日次手動作業時間削減',
        costReduction: '運営コスト削減'
      }
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