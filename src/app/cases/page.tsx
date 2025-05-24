'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  BuildingOfficeIcon,
  ShoppingBagIcon,
  TruckIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ChatBubbleLeftIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

interface DetailedCaseStudy {
  id: number;
  industry: string;
  icon: React.ComponentType<{ className?: string }>;
  company: string;
  location: string;
  size: string;
  projectDuration: string;
  challenge: string;
  solution: string;
  description: string;
  implementation: string[];
  results: string[];
  testimonial: string;
  clientName: string;
  clientRole: string;
  metrics: {
    roi: string;
    timeSaved: string;
    costReduction: string;
    efficiency: string;
  };
  technologies: string[];
  color: 'emerald' | 'blue' | 'purple' | 'indigo' | 'orange' | 'red';
  featured: boolean;
}

const detailedCases: DetailedCaseStudy[] = [
  {
    id: 1,
    industry: '批發零售業',
    icon: ShoppingBagIcon,
    company: '永豐批發商行',
    location: '台中市',
    size: '中型企業 (50-100人)',
    projectDuration: '3個月',
    challenge: '每天需要手動錄入十幾到數十張進貨單，員工經常加班到深夜，人為疏失導致庫存管理混亂，客戶抱怨增加。',
    solution: 'AI智能辨識系統',
    description: '開發基於深度學習的OCR辨識系統，結合自然語言處理技術，自動提取進貨單關鍵資訊並整合到ERP系統。',
    implementation: [
      '收集並標註2000+張進貨單樣本',
      '訓練專屬的OCR模型',
      '開發手機APP拍照上傳介面',
      '建立資料驗證與錯誤修正機制',
      '整合現有ERP系統API',
      '員工培訓與系統上線'
    ],
    results: [
      '每日節省14小時人工作業時間',
      '資料準確率提升至99.2%',
      '庫存週轉率提升35%',
      '客戶滿意度從72%提升至94%',
      '員工加班時間減少80%',
      '月營運成本降低NT$120,000'
    ],
    testimonial: '早知道AI這麼好用，我就不會拖這麼久才開始！現在員工下班後還有時間陪家人，工作效率也大幅提升。',
    clientName: '王老闆',
    clientRole: '負責人',
    metrics: {
      roi: '480%',
      timeSaved: '14小時/日',
      costReduction: '50%',
      efficiency: '99.2%'
    },
    technologies: ['深度學習OCR', 'React Native', 'Python Flask', 'PostgreSQL', 'AWS'],
    color: 'emerald',
    featured: true
  },
  {
    id: 2,
    industry: '電商平台',
    icon: ShoppingBagIcon,
    company: '快購電商',
    location: '台北市',
    size: '中型企業 (30-50人)',
    projectDuration: '4個月',
    challenge: '經營MOMO、PChome、蝦皮等多個平台，無法即時掌握各平台銷售狀況，庫存管理困難，經常缺貨或積壓。',
    solution: 'AI智慧分析儀表板',
    description: '建立統一的數據中台，整合多平台API，運用機器學習預測銷售趨勢，自動化補貨建議系統。',
    implementation: [
      '串接8個電商平台API',
      '建立即時數據同步機制',
      '開發銷售預測ML模型',
      '設計直觀的儀表板介面',
      '建立自動化補貨警示系統',
      '整合庫存管理流程'
    ],
    results: [
      '庫存週轉率提升30%',
      '缺貨率降低85%',
      '銷售預測準確率達92%',
      '庫存成本降低25%',
      '客戶滿意度提升40%',
      '營業額成長18%'
    ],
    testimonial: '現在每天只要看一個畫面，就能掌握昨天的銷售狀況，還能即時發現熱賣商品，真的太方便了！',
    clientName: '陳經理',
    clientRole: '營運經理',
    metrics: {
      roi: '320%',
      timeSaved: '8小時/日',
      costReduction: '25%',
      efficiency: '92%'
    },
    technologies: ['Python Django', 'Vue.js', 'TensorFlow', 'Redis', 'MongoDB'],
    color: 'blue',
    featured: true
  },
  {
    id: 3,
    industry: '會計服務業',
    icon: DocumentTextIcon,
    company: '承信會計事務所',
    location: '高雄市',
    size: '小型企業 (10-30人)',
    projectDuration: '2個月',
    challenge: '報稅季期間員工需要加班到半夜，大量重複性文件處理工作，人工下載分類政府網站文件耗時又容易出錯。',
    solution: 'RPA流程自動化系統',
    description: '設計智能機器人流程，自動登入財政部網站，批量下載文件並進行智能分類歸檔，24小時不間斷運作。',
    implementation: [
      '分析現有作業流程',
      '開發RPA自動化腳本',
      '建立文件分類AI模型',
      '設置排程與監控系統',
      '建立異常處理機制',
      '員工操作培訓'
    ],
    results: [
      '原本14小時工作現在半夜自動完成',
      '文件分類準確率100%',
      '處理速度提升500%',
      '員工可專注高價值諮詢工作',
      '客戶案件處理量增加60%',
      '加班費用節省NT$200,000/年'
    ],
    testimonial: '系統在半夜默默完成所有繁瑣工作，隔天上班就能看到整理好的文件，員工終於不用熬夜了。',
    clientName: '林會計師',
    clientRole: '所長',
    metrics: {
      roi: '650%',
      timeSaved: '14小時/日',
      costReduction: '60%',
      efficiency: '100%'
    },
    technologies: ['UiPath RPA', 'Python Selenium', 'NLP分類', 'MySQL', 'Windows Server'],
    color: 'purple',
    featured: true
  },
  {
    id: 4,
    industry: '客服中心',
    icon: BuildingOfficeIcon,
    company: '優質服務中心',
    location: '台北市',
    size: '中型企業 (80-120人)',
    projectDuration: '5個月',
    challenge: '客戶詢問量大，客服人員不足，回覆速度慢，客戶滿意度低，人力成本持續上升。',
    solution: 'AI智能客服機器人',
    description: '打造LINE官方帳號AI聊天機器人，整合知識庫管理系統，提供多輪對話與人工轉接功能。',
    implementation: [
      '收集歷史客服對話記錄',
      '建立知識庫與FAQ系統',
      '訓練對話AI模型',
      '開發LINE Bot介面',
      '建立人工轉接機制',
      '持續學習優化系統'
    ],
    results: [
      '85%詢問自動回覆',
      '平均回應時間從30分鐘縮短至3秒',
      '24/7不間斷服務',
      '客戶滿意度從65%提升至91%',
      '客服人力需求減少40%',
      '年度人力成本節省NT$800,000'
    ],
    testimonial: '超過85%的詢問都可以自動回覆，客服人員現在能專注處理更複雜的問題，客戶滿意度大幅提升。',
    clientName: '張主管',
    clientRole: '客服部主管',
    metrics: {
      roi: '420%',
      timeSaved: '24/7',
      costReduction: '40%',
      efficiency: '85%'
    },
    technologies: ['自然語言處理', 'LINE Bot SDK', 'Node.js', 'MongoDB', 'Docker'],
    color: 'indigo',
    featured: false
  },
  {
    id: 5,
    industry: '製造業',
    icon: TruckIcon,
    company: '精密機械有限公司',
    location: '桃園市',
    size: '中型企業 (100-200人)',
    projectDuration: '6個月',
    challenge: '生產線品質檢測依賴人工目視，效率低且容易疲勞出錯，產品良率不穩定，客戶退貨率偏高。',
    solution: 'AI視覺檢測系統',
    description: '導入機器視覺AI檢測系統，自動識別產品瑕疵，即時品質監控與預警，提升產品良率。',
    implementation: [
      '收集產品圖像資料集',
      '訓練瑕疵檢測CNN模型',
      '安裝工業相機設備',
      '開發即時檢測軟體',
      '建立品質管理儀表板',
      '產線人員操作培訓'
    ],
    results: [
      '檢測準確率達99.5%',
      '檢測速度提升10倍',
      '產品良率從92%提升至98.5%',
      '客戶退貨率降低75%',
      '品質檢測人力減少50%',
      '年度品質成本節省NT$500,000'
    ],
    testimonial: 'AI檢測系統比人眼更精準，24小時不會疲勞，產品品質穩定多了，客戶對我們更有信心。',
    clientName: '李廠長',
    clientRole: '生產部廠長',
    metrics: {
      roi: '380%',
      timeSaved: '24/7',
      costReduction: '30%',
      efficiency: '99.5%'
    },
    technologies: ['Computer Vision', 'TensorFlow', 'OpenCV', 'C++', '工業相機'],
    color: 'orange',
    featured: false
  },
  {
    id: 6,
    industry: '物流運輸',
    icon: TruckIcon,
    company: '快速物流',
    location: '新北市',
    size: '大型企業 (200+人)',
    projectDuration: '4個月',
    challenge: '配送路線規劃全靠經驗，油耗成本高，客戶等待時間長，司機工作負荷不均，客訴增加。',
    solution: 'AI智能調度系統',
    description: '開發智能路線規劃系統，整合GPS定位、交通資訊，自動最佳化配送路線與車輛調度。',
    implementation: [
      '收集歷史配送數據',
      '整合Google Maps API',
      '開發路線優化演算法',
      '建立即時調度系統',
      '開發司機手機APP',
      '建立KPI監控儀表板'
    ],
    results: [
      '配送效率提升25%',
      '油耗成本降低20%',
      '客戶等待時間減少30%',
      '司機滿意度提升40%',
      '客訴案件減少60%',
      '年度營運成本節省NT$1,200,000'
    ],
    testimonial: '現在系統會自動安排最佳路線，司機不用再煩惱怎麼走，客戶也能準時收到貨物，大家都很滿意。',
    clientName: '劉經理',
    clientRole: '營運經理',
    metrics: {
      roi: '285%',
      timeSaved: '6小時/日',
      costReduction: '20%',
      efficiency: '25%'
    },
    technologies: ['優化演算法', 'React Native', 'Google Maps API', 'PostgreSQL', 'Redis'],
    color: 'red',
    featured: false
  }
];

const industryStats = [
  { industry: '零售業', cases: 25, avgROI: '380%', avgTimeSaved: '12小時/日' },
  { industry: '製造業', cases: 18, avgROI: '320%', avgTimeSaved: '8小時/日' },
  { industry: '服務業', cases: 32, avgROI: '450%', avgTimeSaved: '16小時/日' },
  { industry: '物流業', cases: 15, avgROI: '290%', avgTimeSaved: '6小時/日' },
  { industry: '金融業', cases: 12, avgROI: '520%', avgTimeSaved: '20小時/日' },
  { industry: '醫療業', cases: 8, avgROI: '400%', avgTimeSaved: '10小時/日' }
];

export default function CasesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      icon: 'text-emerald-600',
      accent: 'bg-emerald-100 text-emerald-700',
      button: 'bg-emerald-600 hover:bg-emerald-700'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      accent: 'bg-blue-100 text-blue-700',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      accent: 'bg-purple-100 text-purple-700',
      button: 'bg-purple-600 hover:bg-purple-700'
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      icon: 'text-indigo-600',
      accent: 'bg-indigo-100 text-indigo-700',
      button: 'bg-indigo-600 hover:bg-indigo-700'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'text-orange-600',
      accent: 'bg-orange-100 text-orange-700',
      button: 'bg-orange-600 hover:bg-orange-700'
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-600',
      accent: 'bg-red-100 text-red-700',
      button: 'bg-red-600 hover:bg-red-700'
    }
  };

  const featuredCases = detailedCases.filter(c => c.featured);
  const otherCases = detailedCases.filter(c => !c.featured);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              客戶 <span className="gradient-text">成功案例</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              真實的客戶案例，證實AI導入的實際效益與投資回報
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
                <div className="text-gray-600 text-sm">成功案例</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600 text-sm">平均自動化率</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">420%</div>
                <div className="text-gray-600 text-sm">平均ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600 text-sm">客戶滿意度</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cases */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              精選成功案例
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              深度解析客戶挑戰、解決方案與實際成果
            </p>
          </motion.div>

          <div className="space-y-16">
            {featuredCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`${colorClasses[study.color].bg} ${colorClasses[study.color].border} border rounded-3xl p-8 lg:p-12`}
              >
                {/* Case Header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm mr-4">
                        <study.icon className={`w-8 h-8 ${colorClasses[study.color].icon}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                        <p className={`text-lg font-medium ${colorClasses[study.color].icon}`}>
                          {study.industry}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        {study.location}
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="w-4 h-4 mr-2" />
                        {study.size}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {study.projectDuration}
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 mr-2 text-yellow-500" />
                        精選案例
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colorClasses[study.color].icon}`}>
                        {study.metrics.roi}
                      </div>
                      <div className="text-gray-600 text-sm">投資回報率</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colorClasses[study.color].icon}`}>
                        {study.metrics.timeSaved}
                      </div>
                      <div className="text-gray-600 text-sm">時間節省</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colorClasses[study.color].icon}`}>
                        {study.metrics.costReduction}
                      </div>
                      <div className="text-gray-600 text-sm">成本降低</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colorClasses[study.color].icon}`}>
                        {study.metrics.efficiency}
                      </div>
                      <div className="text-gray-600 text-sm">效率提升</div>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">面臨挑戰</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {study.challenge}
                    </p>
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${colorClasses[study.color].accent}`}>
                      解決方案：{study.solution}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">實施過程</h4>
                    <div className="space-y-2">
                      {study.implementation.slice(0, 4).map((step, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className={`w-6 h-6 rounded-full ${colorClasses[study.color].button} text-white flex items-center justify-center text-xs font-semibold mr-3`}>
                            {idx + 1}
                          </div>
                          {step}
                        </div>
                      ))}
                      {study.implementation.length > 4 && (
                        <div className="text-sm text-gray-500 ml-9">
                          +{study.implementation.length - 4} 更多步驟...
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">實際成果</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className={`w-5 h-5 mr-3 ${colorClasses[study.color].icon}`} />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">使用技術</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white p-6 rounded-xl border border-gray-100">
                  <div className="flex items-start">
                    <ChatBubbleLeftIcon className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="text-gray-700 italic mb-3">
                        &ldquo;{study.testimonial}&rdquo;
                      </p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{study.clientName}</div>
                        <div className="text-gray-600">{study.clientRole}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              各行業成果統計
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              跨產業的成功實績，證明AI導入的普遍適用性
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.industry}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stat.industry}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">成功案例</span>
                    <span className="text-2xl font-bold text-blue-600">{stat.cases}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">平均ROI</span>
                    <span className="text-lg font-semibold text-green-600">{stat.avgROI}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">平均時間節省</span>
                    <span className="text-lg font-semibold text-purple-600">{stat.avgTimeSaved}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cases */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              更多成功案例
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多元化的解決方案，滿足不同產業需求
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`${colorClasses[study.color].bg} ${colorClasses[study.color].border} border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <study.icon className={`w-6 h-6 ${colorClasses[study.color].icon}`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{study.company}</h3>
                    <p className={`text-sm font-medium ${colorClasses[study.color].icon}`}>
                      {study.industry} • {study.location}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {study.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className={`text-xl font-bold ${colorClasses[study.color].icon}`}>
                      {study.metrics.roi}
                    </div>
                    <div className="text-gray-600 text-xs">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-xl font-bold ${colorClasses[study.color].icon}`}>
                      {study.metrics.efficiency}
                    </div>
                    <div className="text-gray-600 text-xs">效率提升</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-700 text-sm italic">
                    &ldquo;{study.testimonial.slice(0, 80)}...&rdquo;
                  </p>
                  <div className="text-xs text-gray-500 mt-2">
                    - {study.clientName}, {study.clientRole}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              準備成為下一個成功案例？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              讓我們為您量身打造專屬的AI解決方案，
              實現可衡量的商業價值
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center group"
              >
                立即免費諮詢
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/services"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                了解服務項目
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 