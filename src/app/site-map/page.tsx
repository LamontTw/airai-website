'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapIcon,
  HomeIcon,
  UserGroupIcon,
  CogIcon,
  BriefcaseIcon,
  PhoneIcon,
  BookOpenIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ScaleIcon,
  ChartBarIcon,
  SparklesIcon,
  CpuChipIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export default function Sitemap() {
  const siteStructure = [
    {
      name: '首頁',
      href: '/',
      icon: HomeIcon,
      description: '企業AI解決方案首頁',
      color: 'blue'
    },
    {
      name: '關於我們',
      href: '/about',
      icon: UserGroupIcon,
      description: '公司介紹、團隊成員、企業文化',
      color: 'green'
    },
    {
      name: '服務項目',
      href: '/services',
      icon: CogIcon,
      description: 'AI諮詢、技術開發、系統整合服務',
      color: 'purple'
    },
    {
      name: '成功案例',
      href: '/cases',
      icon: BriefcaseIcon,
      description: '客戶成功案例分享與實務經驗',
      color: 'orange'
    },
    {
      name: '聯絡我們',
      href: '/contact',
      icon: PhoneIcon,
      description: '聯絡方式、服務諮詢、預約會議',
      color: 'red'
    }
  ];

  const resourceStructure = [
    {
      category: 'AI實用指南',
      icon: BookOpenIcon,
      color: 'indigo',
      items: [
        {
          name: 'AI導入障礙克服指南',
          href: '/resources/ai-guide/1',
          description: '企業AI導入常見障礙與解決方案'
        },
        {
          name: 'ROI計算與效益評估方法',
          href: '/resources/ai-guide/2',
          description: '量化AI投資回報率的實用方法'
        }
      ]
    },
    {
      category: '實用工具',
      icon: WrenchScrewdriverIcon,
      color: 'emerald',
      items: [
        {
          name: 'AI需求評估工具',
          href: '/resources/tools/1',
          description: '評估企業AI導入需求的檢核工具'
        },
        {
          name: 'ROI計算器',
          href: '/resources/tools/2',
          description: '快速計算AI專案投資回報率'
        },
        {
          name: '成本效益分析模板',
          href: '/resources/tools/3',
          description: '完整的成本效益分析Excel模板'
        },
        {
          name: '專案時程規劃表',
          href: '/resources/tools/4',
          description: 'AI專案實施時程規劃工具'
        }
      ]
    },
    {
      category: '產業趨勢',
      icon: ArrowTrendingUpIcon,
      color: 'teal',
      items: [
        {
          name: '2024 AI產業趨勢報告',
          href: '/resources/trends/1',
          description: '最新AI技術發展趨勢與市場分析'
        }
      ]
    },
    {
      category: 'Blog文章',
      icon: DocumentTextIcon,
      color: 'amber',
      items: [
        {
          name: 'OpenAI企業AI觀點深度解析',
          href: '/resources/blog/openai-enterprise-ai',
          description: 'OpenAI最新企業AI策略與技術分析'
        },
        {
          name: 'ChatGPT在企業應用的實務經驗',
          href: '/resources/blog/2',
          description: 'ChatGPT企業導入的實際經驗分享'
        },
        {
          name: 'RPA與AI結合的最佳實務',
          href: '/resources/blog/3',
          description: '流程自動化與AI技術整合策略'
        },
        {
          name: '小型企業AI導入成本控制策略',
          href: '/resources/blog/4',
          description: '小企業AI導入的預算規劃與成本優化'
        }
      ]
    }
  ];

  const legalPages = [
    {
      name: '隱私權政策',
      href: '/privacy',
      icon: ShieldCheckIcon,
      description: '個人資料收集、使用與保護政策',
      color: 'blue'
    },
    {
      name: '服務條款',
      href: '/terms',
      icon: ScaleIcon,
      description: '服務使用條款與用戶權利義務',
      color: 'green'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <MapIcon className="w-12 h-12 text-indigo-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                網站地圖
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              快速瀏覽我們網站的所有內容與服務，輕鬆找到您需要的資訊
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>最後更新：2024年5月15日</span>
              </div>
              <div className="flex items-center">
                <ChartBarIcon className="w-4 h-4 mr-1" />
                <span>總計：{siteStructure.length + resourceStructure.reduce((acc, cat) => acc + cat.items.length, 0) + legalPages.length + 2}個頁面</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Navigation */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">主要頁面</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteStructure.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={page.href}
                    className={`block p-6 bg-${page.color}-50 border border-${page.color}-200 rounded-xl hover:shadow-lg transition-all duration-200 group`}
                  >
                    <div className="flex items-center mb-4">
                      <page.icon className={`w-8 h-8 text-${page.color}-600 mr-3`} />
                      <h3 className={`text-xl font-semibold text-${page.color}-900`}>
                        {page.name}
                      </h3>
                      <ArrowRightIcon className={`w-5 h-5 text-${page.color}-400 ml-auto group-hover:translate-x-1 transition-transform duration-200`} />
                    </div>
                    <p className={`text-${page.color}-700 text-sm leading-relaxed`}>
                      {page.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">資源中心</h2>
              <Link
                href="/resources"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
              >
                <BookOpenIcon className="w-5 h-5 mr-2" />
                查看所有資源
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            {resourceStructure.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                className="mb-10"
              >
                <div className={`bg-${category.color}-50 border border-${category.color}-200 rounded-xl p-6`}>
                  <div className="flex items-center mb-6">
                    <category.icon className={`w-8 h-8 text-${category.color}-600 mr-3`} />
                    <h3 className={`text-2xl font-bold text-${category.color}-900`}>
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                            {item.name}
                          </h4>
                          <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Legal Pages */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">法律條款</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {legalPages.map((page, index) => (
                <motion.div
                  key={page.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    href={page.href}
                    className={`block p-6 bg-${page.color}-50 border border-${page.color}-200 rounded-xl hover:shadow-lg transition-all duration-200 group`}
                  >
                    <div className="flex items-center mb-4">
                      <page.icon className={`w-8 h-8 text-${page.color}-600 mr-3`} />
                      <h3 className={`text-xl font-semibold text-${page.color}-900`}>
                        {page.name}
                      </h3>
                      <ArrowRightIcon className={`w-5 h-5 text-${page.color}-400 ml-auto group-hover:translate-x-1 transition-transform duration-200`} />
                    </div>
                    <p className={`text-${page.color}-700 text-sm leading-relaxed`}>
                      {page.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="section-padding bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">快速導航</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              立即開始您的AI轉型之旅，我們提供完整的解決方案與專業諮詢服務
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                href="/contact"
                className="flex items-center justify-center p-6 bg-white bg-opacity-20 rounded-xl hover:bg-opacity-30 transition-all duration-200 group"
              >
                <PhoneIcon className="w-8 h-8 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">聯絡諮詢</div>
                  <div className="text-indigo-100 text-sm">免費AI評估</div>
                </div>
                <ArrowRightIcon className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/resources"
                className="flex items-center justify-center p-6 bg-white bg-opacity-20 rounded-xl hover:bg-opacity-30 transition-all duration-200 group"
              >
                <AcademicCapIcon className="w-8 h-8 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">學習資源</div>
                  <div className="text-indigo-100 text-sm">AI知識庫</div>
                </div>
                <ArrowRightIcon className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/cases"
                className="flex items-center justify-center p-6 bg-white bg-opacity-20 rounded-xl hover:bg-opacity-30 transition-all duration-200 group"
              >
                <SparklesIcon className="w-8 h-8 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">成功案例</div>
                  <div className="text-indigo-100 text-sm">實務經驗</div>
                </div>
                <ArrowRightIcon className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 