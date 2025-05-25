'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  WrenchScrewdriverIcon,
  CalculatorIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowRightIcon,
  StarIcon,
  UsersIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const tools = [
  {
    id: 1,
    title: "AI成熟度評估工具",
    description: "評估企業AI導入準備度，獲得個人化建議與發展路線圖",
    icon: ChartBarIcon,
    color: "blue" as keyof typeof colorMap,
    difficulty: "入門級",
    duration: "5-10分鐘",
    users: "1,200+",
    features: [
      "組織AI成熟度分析",
      "個人化改善建議",
      "詳細評估報告",
      "實施優先順序"
    ]
  },
  {
    id: 2,
    title: "AI投資回報計算器",
    description: "計算AI專案的投資回報率，量化導入效益與成本分析",
    icon: CalculatorIcon,
    color: "green" as keyof typeof colorMap,
    difficulty: "中級",
    duration: "10-15分鐘",
    users: "800+",
    features: [
      "ROI自動計算",
      "成本效益分析",
      "回收期預測",
      "風險評估報告"
    ]
  },
  {
    id: 3,
    title: "AI導入規劃助手",
    description: "協助制定AI導入策略，規劃實施時程與資源配置",
    icon: ClockIcon,
    color: "purple" as keyof typeof colorMap,
    difficulty: "進階",
    duration: "15-20分鐘",
    users: "650+",
    features: [
      "策略規劃指引",
      "時程安排建議",
      "資源需求分析",
      "風險預警系統"
    ]
  },
  {
    id: 4,
    title: "AI技術選型工具",
    description: "根據業務需求推薦最適合的AI技術方案與實施方法",
    icon: CpuChipIcon,
    color: "orange" as keyof typeof colorMap,
    difficulty: "專家級",
    duration: "20-30分鐘",
    users: "450+",
    features: [
      "技術方案比較",
      "客製化推薦",
      "實施難度評估",
      "成本預算建議"
    ]
  }
];

const colorMap = {
  blue: {
    bg: "from-blue-50 to-indigo-100",
    border: "border-blue-200",
    icon: "text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
    badge: "bg-blue-100 text-blue-800"
  },
  green: {
    bg: "from-green-50 to-emerald-100",
    border: "border-green-200",
    icon: "text-green-600",
    button: "bg-green-600 hover:bg-green-700",
    badge: "bg-green-100 text-green-800"
  },
  purple: {
    bg: "from-purple-50 to-violet-100",
    border: "border-purple-200",
    icon: "text-purple-600",
    button: "bg-purple-600 hover:bg-purple-700",
    badge: "bg-purple-100 text-purple-800"
  },
  orange: {
    bg: "from-orange-50 to-red-100",
    border: "border-orange-200",
    icon: "text-orange-600",
    button: "bg-orange-600 hover:bg-orange-700",
    badge: "bg-orange-100 text-orange-800"
  }
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <WrenchScrewdriverIcon className="w-12 h-12 text-indigo-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                免費評估工具
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              使用我們的專業工具，快速評估您的企業AI導入準備度，
              獲得客製化建議和實施路線圖
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <StarIcon className="w-4 h-4 mr-1 text-yellow-500" />
                <span>4.8 平均評分</span>
              </div>
              <div className="flex items-center">
                <UsersIcon className="w-4 h-4 mr-1" />
                <span>3,000+ 企業使用</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>完全免費</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tools.map((tool, index) => {
              const colors = colorMap[tool.color];
              const IconComponent = tool.icon;
              
              return (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-8 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mr-4`}>
                        <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {tool.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                            {tool.difficulty}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {tool.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">主要功能</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <div className={`w-2 h-2 rounded-full ${colors.icon.replace('text-', 'bg-')} mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <UsersIcon className="w-4 h-4 mr-1" />
                      <span>{tool.users} 使用者</span>
                    </div>
                    
                    <Link 
                      href={`/resources/tools/${tool.id}`}
                      className={`inline-flex items-center px-6 py-3 ${colors.button} text-white font-medium rounded-lg transition-colors duration-200`}
                    >
                      開始使用
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              為什麼選擇我們的評估工具？
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">專業可靠</h3>
                <p className="text-gray-600 text-sm">
                  基於數百個AI導入案例開發，
                  結合產業最佳實務經驗
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">快速便利</h3>
                <p className="text-gray-600 text-sm">
                  5-30分鐘完成評估，
                  即時獲得個人化建議報告
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">數據驅動</h3>
                <p className="text-gray-600 text-sm">
                  基於量化指標分析，
                  提供可執行的改善建議
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-blue-700">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">
              準備開始您的AI轉型之路？
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              從AI成熟度評估開始，獲得專業建議和實施指引
            </p>
            
            <Link 
              href="/resources/tools/1"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              立即開始評估
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            
            <p className="mt-4 text-indigo-200 text-sm">
              需要專業諮詢？
              <Link href="/contact" className="text-white hover:underline ml-1">
                聯絡我們的AI專家
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 