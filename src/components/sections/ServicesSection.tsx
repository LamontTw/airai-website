'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  CodeBracketIcon,
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CameraIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 'programming',
    icon: CodeBracketIcon,
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
    ],
    color: 'purple'
  },
  {
    id: 'ai-agent',
    icon: CpuChipIcon,
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
    ],
    color: 'blue'
  }
];

const aiApplications = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: '智能客服',
    description: 'AI聊天機器人提供24/7客戶支援，85%詢問自動回覆',
    example: 'LINE機器人自動回應客戶問題'
  },
  {
    icon: DocumentTextIcon,
    title: '流程自動化 (RPA)',
    description: '自動化數據輸入、文件處理、財務對帳等重複性工作',
    example: '自動登入財政部網站下載文件並分類'
  },
  {
    icon: ChartBarIcon,
    title: '數據洞察分析',
    description: 'AI驅動的儀表板提供銷售、庫存和客戶行為分析',
    example: '整合多平台銷售數據，自動補貨建議'
  },
  {
    icon: CameraIcon,
    title: '智能辨識系統',
    description: 'AI辨識發票、進貨單等文件，自動提取關鍵資訊',
    example: '手機拍照自動讀取進貨單更新資料庫'
  }
];

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" ref={ref} className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">服務項目</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            全方位的數位轉型解決方案，從基礎建設到智能化升級
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 ${
                service.color === 'blue' ? 'border-blue-600' : 'border-purple-600'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                  service.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'
                }`}>
                  <service.icon className={`w-8 h-8 ${
                    service.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                  }`} />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className={`text-sm font-medium ${
                    service.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                  }`}>
                    {service.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">核心效益</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        service.color === 'blue' ? 'bg-blue-600' : 'bg-purple-600'
                      }`}></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">服務流程</h4>
                <div className="flex flex-wrap gap-2">
                  {service.process.map((step, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        service.color === 'blue' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {idx + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/services#${service.id}`}
                className={`inline-flex items-center font-medium ${
                  service.color === 'blue' ? 'text-blue-600 hover:text-blue-700' : 'text-purple-600 hover:text-purple-700'
                } transition-colors duration-200 group`}
              >
                了解更多
                <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* AI Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            AI Agent 應用場景
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiApplications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <app.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {app.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {app.description}
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-xs text-blue-700 font-medium">
                    實際案例
                  </p>
                  <p className="text-xs text-blue-600">
                    {app.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center group"
          >
            立即諮詢適合的解決方案
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 