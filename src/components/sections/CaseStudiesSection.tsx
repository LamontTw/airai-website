'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  BuildingOfficeIcon,
  ShoppingBagIcon,
  TruckIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';

type ColorType = 'emerald' | 'blue' | 'purple' | 'indigo';

interface CaseStudy {
  id: number;
  industry: string;
  icon: React.ComponentType<{ className?: string }>;
  company: string;
  challenge: string;
  solution: string;
  description: string;
  results: string[];
  testimonial: string;
  color: ColorType;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    industry: '批發零售業',
    icon: ShoppingBagIcon,
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
    testimonial: '早知道AI這麼好用，我就不會拖這麼久才開始！',
    color: 'emerald'
  },
  {
    id: 2,
    industry: '電商平台',
    icon: ShoppingBagIcon,
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
    testimonial: '現在每天只要看一個畫面，就能掌握昨天的銷售狀況，還能即時發現熱賣商品。',
    color: 'blue'
  },
  {
    id: 3,
    industry: '會計服務業',
    icon: DocumentTextIcon,
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
    testimonial: '系統在半夜默默完成所有繁瑣工作，隔天上班就能看到整理好的文件。',
    color: 'purple'
  },
  {
    id: 4,
    industry: '客服中心',
    icon: BuildingOfficeIcon,
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
    testimonial: '超過85%的詢問都可以自動回覆，客服人員現在能專注處理更有價值的工作。',
    color: 'indigo'
  }
];

export default function CaseStudiesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const colorClasses: Record<ColorType, { bg: string; border: string; icon: string; accent: string; }> = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      icon: 'text-emerald-600',
      accent: 'bg-emerald-100 text-emerald-700'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      accent: 'bg-blue-100 text-blue-700'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      accent: 'bg-purple-100 text-purple-700'
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      icon: 'text-indigo-600',
      accent: 'bg-indigo-100 text-indigo-700'
    }
  };

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">成功案例</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            真實客戶案例，證實AI導入的實際效益
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`${colorClasses[study.color].bg} ${colorClasses[study.color].border} border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <study.icon className={`w-6 h-6 ${colorClasses[study.color].icon}`} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">{study.company}</h3>
                  <p className={`text-sm font-medium ${colorClasses[study.color].icon}`}>
                    {study.industry}
                  </p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">挑戰</h4>
                <p className="text-gray-600 text-sm">
                  {study.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">解決方案</h4>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colorClasses[study.color].accent} mb-2`}>
                  {study.solution}
                </div>
                <p className="text-gray-600 text-sm">
                  {study.description}
                </p>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">成果</h4>
                <div className="space-y-2">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full mr-2 ${colorClasses[study.color].icon.replace('text-', 'bg-')}`}></div>
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <ChatBubbleLeftIcon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm italic ml-2">
                    &ldquo;{study.testimonial}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-8">整體成效統計</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-blue-100">平均自動化率</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50%</div>
              <div className="text-blue-100">營運成本降低</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">14小時</div>
              <div className="text-blue-100">每日節省時間</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-100">客戶滿意度</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Link
            href="/cases"
            className="btn-primary inline-flex items-center group mr-4 mb-4"
          >
            查看更多案例
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/contact"
            className="btn-secondary inline-flex items-center group mb-4"
          >
            開始您的AI轉型之旅
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 