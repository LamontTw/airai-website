'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  CodeBracketIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

const programmingServices = [
  {
    title: '客製化網站開發',
    description: '響應式網站設計、電商平台、企業官網',
    features: ['RWD響應式設計', 'SEO優化', '安全性防護', '後台管理系統']
  },
  {
    title: '企業系統開發',
    description: 'ERP、CRM、庫存管理等企業內部系統',
    features: ['客製化需求', '系統整合', '權限管理', '數據匯出功能']
  },
  {
    title: '行動應用程式',
    description: 'iOS、Android原生應用及跨平台應用開發',
    features: ['原生效能', '跨平台支援', '推播通知', 'API整合']
  },
  {
    title: 'API串接整合',
    description: '第三方服務整合、系統間資料交換',
    features: ['多平台整合', '即時同步', '錯誤處理', '資料轉換']
  }
];

const aiServices = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: '智能客服系統',
    description: 'AI聊天機器人建置，提供24/7客戶服務',
    benefits: ['85%自動回覆率', '多平台整合', '自然語言處理', '客戶滿意度追蹤'],
    process: ['需求分析', 'FAQ整理', '模型訓練', '系統上線', '持續優化']
  },
  {
    icon: DocumentTextIcon,
    title: 'RPA流程自動化',
    description: '自動化重複性工作，提升營運效率',
    benefits: ['減少人力成本', '提高準確性', '24小時運作', '錯誤率近零'],
    process: ['流程盤點', '自動化設計', '機器人開發', '測試部署', '監控維護']
  },
  {
    icon: ChartBarIcon,
    title: '數據分析平台',
    description: 'AI驅動的商業智能儀表板',
    benefits: ['即時數據洞察', '預測分析', '自動化報表', '決策支援'],
    process: ['數據源整合', '分析模型設計', '視覺化開發', '使用者培訓', '持續優化']
  },
  {
    icon: CameraIcon,
    title: 'AI智能辨識',
    description: '文件、圖片、語音的AI辨識與處理',
    benefits: ['自動化資料擷取', '高準確率辨識', '批量處理', '格式轉換'],
    process: ['資料準備', '模型選擇', '訓練調優', '系統整合', '效能監控']
  }
];

const serviceProcess = [
  {
    step: '01',
    title: '需求諮詢',
    description: '深度了解客戶需求與現有系統狀況',
    icon: LightBulbIcon
  },
  {
    step: '02',
    title: '方案設計',
    description: '量身定制最適合的技術解決方案',
    icon: WrenchScrewdriverIcon
  },
  {
    step: '03',
    title: '開發實作',
    description: '敏捷開發流程，定期回報進度',
    icon: CodeBracketIcon
  },
  {
    step: '04',
    title: '測試部署',
    description: '嚴格測試確保品質，協助系統上線',
    icon: ShieldCheckIcon
  },
  {
    step: '05',
    title: '培訓支援',
    description: '完整的教育訓練與技術支援服務',
    icon: ClockIcon
  }
];

export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
              我們的 <span className="gradient-text">服務項目</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              從基礎程式開發到AI智能化升級，提供全方位的數位轉型解決方案
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programming Services */}
      <section id="programming" ref={ref} className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <CodeBracketIcon className="w-12 h-12 text-purple-600 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                客製化 AI 解決方案
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              專業的 AI 系統整合團隊，為您的企業建立智能化數位基礎設施
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {programmingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-purple-50 border border-purple-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-purple-700">
                      <CheckCircleIcon className="w-4 h-4 mr-2 text-purple-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-purple-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">為什麼選擇我們的客製化 AI 解決方案？</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-purple-100">年開發經驗</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-purple-100">成功案例</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="text-purple-100">客戶滿意度</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services */}
      <section id="ai-agent" className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <CpuChipIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                AI Agent 導入服務
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              將AI技術融入您的日常營運，自動化工作流程，提升競爭優勢
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">核心效益</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-blue-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">導入流程</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.process.map((step, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {idx + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              服務流程
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              標準化的服務流程，確保專案品質與進度掌控
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            {serviceProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${
                  index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center ${
                        index % 2 === 0 ? 'md:order-2 md:ml-4' : 'md:order-1 md:mr-4'
                      }`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                <div className="flex-1 hidden md:block"></div>
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
              準備開始您的專案了嗎？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              讓我們的專業團隊為您提供最適合的解決方案，
              立即聯繫我們獲得免費諮詢
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
                href="/cases"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                查看成功案例
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 