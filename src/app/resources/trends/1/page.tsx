'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  CpuChipIcon,
  UsersIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  LightBulbIcon,
  DocumentTextIcon,
  ChevronRightIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  StarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  CameraIcon,
  ShoppingCartIcon,
  TruckIcon,
  HeartIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  PresentationChartLineIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

interface Statistic {
  value: string;
  label: string;
  trend: 'up' | 'down' | 'stable';
  change: string;
  color: string;
}

interface IndustryTrend {
  industry: string;
  icon: any;
  adoptionRate: number;
  growthRate: string;
  keyApplications: string[];
  color: string;
  description: string;
}

interface TechnologyTrend {
  technology: string;
  icon: any;
  popularity: number;
  marketShare: string;
  useCases: string[];
  maturity: 'emerging' | 'growing' | 'mature';
  color: string;
}

interface Challenge {
  title: string;
  percentage: number;
  description: string;
  solutions: string[];
  severity: 'high' | 'medium' | 'low';
}

interface Future {
  title: string;
  timeframe: string;
  probability: number;
  impact: string;
  description: string;
  color: string;
}

export default function AITrendReport2024() {
  const [activeTab, setActiveTab] = useState('overview');

  const keyStatistics: Statistic[] = [
    {
      value: '31%',
      label: '中小企業AI採用率',
      trend: 'up',
      change: '+12%',
      color: 'blue'
    },
    {
      value: 'NT$185億',
      label: '市場規模',
      trend: 'up',
      change: '+28%',
      color: 'green'
    },
    {
      value: '67%',
      label: '計劃投資AI',
      trend: 'up',
      change: '+15%',
      color: 'purple'
    },
    {
      value: '42%',
      label: '生產力提升',
      trend: 'up',
      change: '+8%',
      color: 'orange'
    },
    {
      value: '78%',
      label: '成本降低',
      trend: 'up',
      change: '+11%',
      color: 'red'
    },
    {
      value: '156%',
      label: '平均ROI',
      trend: 'up',
      change: '+23%',
      color: 'indigo'
    }
  ];

  const industryTrends: IndustryTrend[] = [
    {
      industry: '製造業',
      icon: CogIcon,
      adoptionRate: 45,
      growthRate: '+35%',
      keyApplications: ['預測維護', '品質檢測', '生產優化', '供應鏈管理'],
      color: 'blue',
      description: '智能製造成為製造業數位轉型的核心驅動力'
    },
    {
      industry: '零售電商',
      icon: ShoppingCartIcon,
      adoptionRate: 38,
      growthRate: '+42%',
      keyApplications: ['個性化推薦', 'AI客服', '庫存優化', '價格策略'],
      color: 'green',
      description: '消費者體驗提升帶動AI技術快速普及'
    },
    {
      industry: '金融服務',
      icon: BanknotesIcon,
      adoptionRate: 52,
      growthRate: '+29%',
      keyApplications: ['風險評估', '詐欺偵測', '智能投顧', '客戶服務'],
      color: 'purple',
      description: '法規鬆綁促進金融科技創新應用'
    },
    {
      industry: '物流運輸',
      icon: TruckIcon,
      adoptionRate: 33,
      growthRate: '+38%',
      keyApplications: ['路線優化', '需求預測', '倉儲管理', '配送調度'],
      color: 'orange',
      description: 'E商務蓬勃發展推動物流智能化需求'
    },
    {
      industry: '醫療健康',
      icon: HeartIcon,
      adoptionRate: 28,
      growthRate: '+31%',
      keyApplications: ['診斷輔助', '藥物研發', '健康監測', '醫療影像'],
      color: 'red',
      description: '數位醫療政策支持促進AI醫療應用發展'
    },
    {
      industry: '教育培訓',
      icon: AcademicCapIcon,
      adoptionRate: 25,
      growthRate: '+48%',
      keyApplications: ['個性化學習', '智能評測', '內容生成', '學習分析'],
      color: 'indigo',
      description: '遠距教學需求加速教育AI技術採用'
    }
  ];

  const technologyTrends: TechnologyTrend[] = [
    {
      technology: '生成式AI (ChatGPT等)',
      icon: ChatBubbleLeftRightIcon,
      popularity: 89,
      marketShare: '34%',
      useCases: ['內容創作', '客戶服務', '程式開發', '文件處理'],
      maturity: 'growing',
      color: 'blue'
    },
    {
      technology: '機器學習預測',
      icon: ArrowTrendingUpIcon,
      popularity: 76,
      marketShare: '28%',
      useCases: ['需求預測', '風險評估', '市場分析', '客戶行為'],
      maturity: 'mature',
      color: 'green'
    },
    {
      technology: '計算機視覺',
      icon: CameraIcon,
      popularity: 64,
      marketShare: '18%',
      useCases: ['品質檢測', '人臉識別', '影像分析', '自動化檢驗'],
      maturity: 'growing',
      color: 'purple'
    },
    {
      technology: '自然語言處理',
      icon: DocumentTextIcon,
      popularity: 58,
      marketShare: '12%',
      useCases: ['情感分析', '文檔摘要', '翻譯服務', '語音助手'],
      maturity: 'growing',
      color: 'orange'
    },
    {
      technology: '推薦系統',
      icon: StarIcon,
      popularity: 52,
      marketShare: '8%',
      useCases: ['商品推薦', '內容推薦', '個性化服務', '精準行銷'],
      maturity: 'mature',
      color: 'red'
    }
  ];

  const challenges: Challenge[] = [
    {
      title: '資料品質與整合',
      percentage: 73,
      description: '企業資料分散、品質不一，難以支援AI應用',
      solutions: ['建立資料治理制度', '投資資料清理工具', '統一資料標準'],
      severity: 'high'
    },
    {
      title: '技術人才短缺',
      percentage: 68,
      description: 'AI專業人才供不應求，招聘與培訓成本高',
      solutions: ['產學合作培訓', '外包技術服務', '內部員工轉訓'],
      severity: 'high'
    },
    {
      title: '投資成本考量',
      percentage: 62,
      description: 'AI導入初期投資較大，ROI不確定性高',
      solutions: ['從小專案開始', '雲端服務降低成本', '政府補助申請'],
      severity: 'medium'
    },
    {
      title: '安全與隱私',
      percentage: 56,
      description: '資料安全與隱私保護的法規遵循壓力',
      solutions: ['導入資安框架', '隱私設計原則', '合規性評估'],
      severity: 'medium'
    },
    {
      title: '組織變革阻力',
      percentage: 49,
      description: '員工對新技術的接受度與學習意願',
      solutions: ['變革管理計畫', '員工參與設計', '循序漸進導入'],
      severity: 'low'
    }
  ];

  const futureOutlook: Future[] = [
    {
      title: 'AI即服務普及化',
      timeframe: '2024-2025',
      probability: 92,
      impact: '顯著',
      description: '更多雲端AI服務降低中小企業導入門檻',
      color: 'blue'
    },
    {
      title: '產業專用AI工具',
      timeframe: '2025-2026',
      probability: 85,
      impact: '高',
      description: '針對特定產業需求的AI解決方案大量出現',
      color: 'green'
    },
    {
      title: 'AI人才培訓體系成熟',
      timeframe: '2026-2027',
      probability: 78,
      impact: '中高',
      description: '產學合作與政府政策支持下，AI人才供給改善',
      color: 'purple'
    },
    {
      title: 'AI法規框架完善',
      timeframe: '2025-2026',
      probability: 82,
      impact: '中',
      description: '政府制定完整AI應用法規，提供明確合規指引',
      color: 'orange'
    }
  ];

  const tabs = [
    { id: 'overview', label: '總體概況', icon: ChartBarIcon },
    { id: 'industry', label: '產業分析', icon: BuildingOfficeIcon },
    { id: 'technology', label: '技術趨勢', icon: CpuChipIcon },
    { id: 'challenges', label: '挑戰與機會', icon: ExclamationTriangleIcon },
    { id: 'future', label: '未來展望', icon: RocketLaunchIcon }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ChartBarIcon className="w-12 h-12 text-purple-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                2024年中小企業AI應用趨勢報告
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">              深度分析台灣中小企業AI應用現況，預測未來發展趨勢與投資機會            </p>

            {/* TL;DR - GEO 優化 */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6 max-w-3xl mx-auto text-left">
              <p className="sr-only">摘要 TL;DR</p>
              <p className="text-sm text-purple-800 leading-relaxed">
                2024 年台灣中小企業 AI 採用率達 31%（年增 12%），市場規模 NT$185 億。67% 企業計劃投資 AI，平均生產力提升 42%。製造業、零售業、金融業為主要應用產業。預測 2025 年採用率將達 55%，2027 年市場規模突破 NT$320 億。
              </p>
            </div>                        {/* Data Source Notice */}            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-4xl mx-auto">              <div className="flex items-center mb-2">                <DocumentTextIcon className="w-5 h-5 text-blue-600 mr-2" />                <h3 className="text-sm font-semibold text-blue-900">數據來源說明</h3>              </div>              <p className="text-sm text-blue-800 leading-relaxed">                本報告部分數據參考自 PwC Taiwan《中小企業數位化現況調查》、行政院主計總處、                經濟部中小企業處等官方統計資料，以及智流科技自主市場調研數據。                所有數據僅供參考，實際情況可能因不同調查方法而有所差異。              </p>              <div className="mt-2">                <a                   href="https://www.pwc.tw/zh/publications/topic-report/sme-digitalisation-survey.html"                  target="_blank"                  rel="noopener noreferrer"                  className="text-blue-600 hover:text-blue-800 text-sm underline"                >                  參考資料：PwC Taiwan 中小企業數位化調查報告                </a>              </div>            </div>                        {/* Report Stats */}            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">1,250</div>
                <div className="text-sm text-gray-600">調查企業</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">15</div>
                <div className="text-sm text-gray-600">主要產業</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">3個月</div>
                <div className="text-sm text-gray-600">調查期間</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">95%</div>
                <div className="text-sm text-gray-600">準確度</div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Tabs */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <DocumentTextIcon className="w-5 h-5 text-purple-600 mr-2" />
                  報告目錄
                </h3>
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-purple-100 text-purple-700 font-medium'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ChartBarIcon className="w-8 h-8 text-purple-600 mr-3" />
                      總體概況
                    </h2>
                    
                    <div className="prose prose-lg max-w-none mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        2024年台灣中小企業AI應用呈現快速成長趨勢。根據我們對1,250家中小企業的深度調查，
                        AI採用率較去年同期成長12%，達到31%。市場規模突破185億新台幣，年成長率28%。
                      </p>
                    </div>

                    {/* Key Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {keyStatistics.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className={`text-2xl font-bold text-${stat.color}-600`}>
                              {stat.value}
                            </div>
                            <div className="flex items-center">
                              {stat.trend === 'up' && (
                                <ArrowUpIcon className="w-4 h-4 text-green-600 mr-1" />
                              )}
                              <span className="text-sm font-medium text-green-600">
                                {stat.change}
                              </span>
                            </div>
                          </div>
                          <div className="text-gray-600 text-sm">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Market Analysis */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">📊 市場分析重點</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-3">成長驅動因素</h4>
                          <ul className="space-y-2 text-blue-700 text-sm">
                            <li>• 生成式AI技術突破與普及</li>
                            <li>• 雲端AI服務成本下降</li>
                            <li>• 政府數位轉型政策支持</li>
                            <li>• 疫後企業數位化需求增加</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-3">投資熱點領域</h4>
                          <ul className="space-y-2 text-blue-700 text-sm">
                            <li>• 智能客服與聊天機器人</li>
                            <li>• 預測分析與決策支援</li>
                            <li>• 自動化流程優化</li>
                            <li>• 個性化推薦系統</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Geographic Distribution */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-green-900 mb-4">🗺️ 地區分布分析</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
                          <div className="text-green-800 font-medium">北部地區</div>
                          <div className="text-green-600 text-sm mt-1">科技產業聚集</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">32%</div>
                          <div className="text-green-800 font-medium">中部地區</div>
                          <div className="text-green-600 text-sm mt-1">製造業轉型</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 mb-2">23%</div>
                          <div className="text-green-800 font-medium">南部地區</div>
                          <div className="text-green-600 text-sm mt-1">傳統產業升級</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Industry Tab */}
              {activeTab === 'industry' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <BuildingOfficeIcon className="w-8 h-8 text-blue-600 mr-3" />
                      產業分析
                    </h2>
                    
                    <div className="prose prose-lg max-w-none mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        各產業AI應用程度差異顯著，製造業與金融業領先其他產業。
                        傳統產業如零售、物流也加速導入AI技術，尋求數位轉型突破。
                      </p>
                    </div>

                    {/* Industry Trends */}
                    <div className="space-y-6">
                      {industryTrends.map((industry, index) => (
                        <motion.div
                          key={industry.industry}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="border border-gray-200 rounded-xl p-6"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <industry.icon className={`w-8 h-8 text-${industry.color}-600 mr-4`} />
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{industry.industry}</h3>
                                <p className="text-gray-600 text-sm">{industry.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`text-2xl font-bold text-${industry.color}-600`}>
                                {industry.adoptionRate}%
                              </div>
                              <div className="text-sm text-gray-500">採用率</div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">
                                成長率：<span className={`text-${industry.color}-600`}>{industry.growthRate}</span>
                              </h4>
                              <div className={`w-full bg-gray-200 rounded-full h-2 mb-4`}>
                                <div 
                                  className={`bg-${industry.color}-600 h-2 rounded-full`}
                                  style={{ width: `${industry.adoptionRate}%` }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">主要應用領域</h4>
                              <div className="flex flex-wrap gap-2">
                                {industry.keyApplications.map((app) => (
                                  <span
                                    key={app}
                                    className={`px-3 py-1 bg-${industry.color}-100 text-${industry.color}-700 rounded-full text-xs font-medium`}
                                  >
                                    {app}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Technology Tab */}
              {activeTab === 'technology' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CpuChipIcon className="w-8 h-8 text-blue-600 mr-3" />
                      技術趨勢
                    </h2>
                    
                    <div className="prose prose-lg max-w-none mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        生成式AI成為2024年最熱門技術，ChatGPT等工具的普及大幅降低了AI應用門檻。
                        傳統機器學習技術仍穩定成長，計算機視覺應用快速擴展。
                      </p>
                    </div>

                    {/* Technology Trends */}
                    <div className="space-y-6">
                      {technologyTrends.map((tech, index) => (
                        <motion.div
                          key={tech.technology}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="border border-gray-200 rounded-xl p-6"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <tech.icon className={`w-8 h-8 text-${tech.color}-600 mr-4`} />
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{tech.technology}</h3>
                                <div className="flex items-center mt-1">
                                  <span className={`px-2 py-1 bg-${tech.color}-100 text-${tech.color}-700 rounded text-xs font-medium mr-2`}>
                                    {tech.maturity === 'emerging' ? '新興' : tech.maturity === 'growing' ? '成長中' : '成熟'}
                                  </span>
                                  <span className="text-gray-500 text-sm">市場佔有率 {tech.marketShare}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`text-2xl font-bold text-${tech.color}-600`}>
                                {tech.popularity}%
                              </div>
                              <div className="text-sm text-gray-500">受歡迎程度</div>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <div className={`w-full bg-gray-200 rounded-full h-3`}>
                              <div 
                                className={`bg-${tech.color}-600 h-3 rounded-full`}
                                style={{ width: `${tech.popularity}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">主要應用場景</h4>
                            <div className="flex flex-wrap gap-2">
                              {tech.useCases.map((useCase) => (
                                <span
                                  key={useCase}
                                  className={`px-3 py-1 bg-${tech.color}-50 text-${tech.color}-700 border border-${tech.color}-200 rounded-lg text-sm`}
                                >
                                  {useCase}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Challenges Tab */}
              {activeTab === 'challenges' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ExclamationTriangleIcon className="w-8 h-8 text-orange-600 mr-3" />
                      挑戰與機會
                    </h2>
                    
                    <div className="prose prose-lg max-w-none mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        雖然AI應用前景看好，但中小企業仍面臨諸多挑戰。資料品質、人才短缺、成本考量
                        是三大主要障礙，需要政府、產業與企業共同努力克服。
                      </p>
                    </div>

                    {/* Challenges */}
                    <div className="space-y-6">
                      {challenges.map((challenge, index) => (
                        <motion.div
                          key={challenge.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className={`border rounded-xl p-6 ${
                            challenge.severity === 'high' ? 'border-red-200 bg-red-50' :
                            challenge.severity === 'medium' ? 'border-yellow-200 bg-yellow-50' :
                            'border-green-200 bg-green-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{challenge.title}</h3>
                            <div className="flex items-center">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                challenge.severity === 'high' ? 'bg-red-200 text-red-800' :
                                challenge.severity === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                                'bg-green-200 text-green-800'
                              }`}>
                                {challenge.severity === 'high' ? '高影響' : 
                                 challenge.severity === 'medium' ? '中影響' : '低影響'}
                              </span>
                              <div className="text-2xl font-bold text-gray-900 ml-4">
                                {challenge.percentage}%
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-4">{challenge.description}</p>
                          
                          <div className={`w-full bg-gray-200 rounded-full h-2 mb-4`}>
                            <div 
                              className={`h-2 rounded-full ${
                                challenge.severity === 'high' ? 'bg-red-500' :
                                challenge.severity === 'medium' ? 'bg-yellow-500' :
                                'bg-green-500'
                              }`}
                              style={{ width: `${challenge.percentage}%` }}
                            ></div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">建議解決方案</h4>
                            <ul className="space-y-2">
                              {challenge.solutions.map((solution) => (
                                <li key={solution} className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                                  <span className="text-sm text-gray-700">{solution}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Opportunities */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">🚀 發展機會</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-3">政策支持</h4>
                          <ul className="space-y-2 text-blue-700 text-sm">
                            <li>• 數位轉型補助計畫</li>
                            <li>• AI人才培訓方案</li>
                            <li>• 產學合作推動</li>
                            <li>• 法規環境優化</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-800 mb-3">市場契機</h4>
                          <ul className="space-y-2 text-blue-700 text-sm">
                            <li>• AI工具成本下降</li>
                            <li>• 雲端服務普及</li>
                            <li>• 生態系統成熟</li>
                            <li>• 國際市場擴展</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Future Tab */}
              {activeTab === 'future' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <RocketLaunchIcon className="w-8 h-8 text-purple-600 mr-3" />
                      未來展望
                    </h2>
                    
                    <div className="prose prose-lg max-w-none mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        未來3年將是台灣中小企業AI應用的關鍵期。預期AI技術將更加親民化，
                        產業專用解決方案將大量出現，人才培訓體系也將逐步完善。
                      </p>
                    </div>

                    {/* Future Outlook */}
                    <div className="space-y-6">
                      {futureOutlook.map((future, index) => (
                        <motion.div
                          key={future.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className={`border border-${future.color}-200 bg-${future.color}-50 rounded-xl p-6`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{future.title}</h3>
                              <div className="flex items-center mt-2">
                                <ClockIcon className="w-4 h-4 text-gray-500 mr-2" />
                                <span className="text-gray-600 text-sm">{future.timeframe}</span>
                                <span className={`ml-4 px-2 py-1 bg-${future.color}-200 text-${future.color}-800 rounded text-xs font-medium`}>
                                  {future.impact}影響
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`text-2xl font-bold text-${future.color}-600`}>
                                {future.probability}%
                              </div>
                              <div className="text-sm text-gray-500">實現機率</div>
                            </div>
                          </div>
                          
                          <div className={`w-full bg-gray-200 rounded-full h-2 mb-4`}>
                            <div 
                              className={`bg-${future.color}-600 h-2 rounded-full`}
                              style={{ width: `${future.probability}%` }}
                            ></div>
                          </div>
                          
                          <p className="text-gray-700">{future.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Market Predictions */}
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6 mt-8">
                      <h3 className="text-xl font-bold text-purple-900 mb-4">📈 市場預測 (2025-2027)</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-purple-600 mb-2">55%</div>
                          <div className="text-purple-800 font-medium">2025年採用率</div>
                          <div className="text-purple-600 text-sm mt-1">預期成長24%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-indigo-600 mb-2">NT$320億</div>
                          <div className="text-indigo-800 font-medium">2026年市場規模</div>
                          <div className="text-indigo-600 text-sm mt-1">年複合成長率23%</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                          <div className="text-blue-800 font-medium">2027年滲透率</div>
                          <div className="text-blue-600 text-sm mt-1">接近成熟市場</div>
                        </div>
                      </div>
                    </div>

                    {/* Key Recommendations */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-green-900 mb-4">💡 關鍵建議</h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-green-800">及早佈局</h4>
                            <p className="text-green-700 text-sm">掌握先發優勢，從低風險應用開始導入</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-green-800">人才投資</h4>
                            <p className="text-green-700 text-sm">加強員工AI技能培訓，建立內部能力</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-green-800">生態整合</h4>
                            <p className="text-green-700 text-sm">善用外部資源，建立策略夥伴關係</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-green-800">持續創新</h4>
                            <p className="text-green-700 text-sm">保持技術敏感度，關注新興應用趨勢</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Call to Action */}
              <section className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    想了解更多AI應用趨勢？
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    我們提供專業的市場分析與策略諮詢服務，助您掌握AI發展脈動
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                    >
                      預約市場分析
                      <ChevronRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                      href="/resources/ai-guide/1"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                    >
                      查看導入指南
                      <DocumentTextIcon className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </section>

              {/* Disclaimer */}
              <section className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-center">
                    <ExclamationTriangleIcon className="w-6 h-6 text-orange-600 mr-2" />
                    免責聲明與使用條款
                  </h3>
                  <div className="text-left max-w-4xl mx-auto space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">📊 數據聲明</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        本報告所引用的統計數據部分來源於 PwC Taiwan《中小企業數位化現況調查》
                        (https://www.pwc.tw/zh/publications/topic-report/sme-digitalisation-survey.html)、
                        行政院主計總處、經濟部中小企業處等政府機構公開資料，以及智流科技自主調研數據。
                        我們致力於確保數據的準確性，但不對第三方數據的完整性或準確性承擔責任。
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">⚠️ 使用限制</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        本報告僅供參考，不構成投資建議或商業決策依據。任何基於本報告內容的決策後果，
                        使用者需自行承擔。智流科技有限公司保留隨時修改或更新報告內容的權利，
                        恕不另行通知。未經書面授權，禁止複製、分發或商業使用本報告內容。
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">📞 聯絡資訊</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        如對報告內容有疑問或需要進一步說明，歡迎聯繫智流科技有限公司。
                        我們將竭誠為您提供專業的技術諮詢服務。
                      </p>
                    </div>
                    
                    <div className="text-center pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500">
                        © 2024 智流科技有限公司 版權所有 | 報告發布日期：2024年11月
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 