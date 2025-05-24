'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  BookOpenIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LightBulbIcon,
  CogIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  StarIcon,
  PrinterIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PlayIcon,
  AcademicCapIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function AITransformationGuide() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpenIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI轉型完整指南
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              從評估到導入的全流程指導，專為台灣中小企業量身打造
            </p>
            
            {/* Guide Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">4</div>
                <div className="text-sm text-gray-600">主要階段</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">15分鐘</div>
                <div className="text-sm text-gray-600">閱讀時間</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">12週</div>
                <div className="text-sm text-gray-600">平均執行期</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">95%</div>
                <div className="text-sm text-gray-600">成功率</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('introduction')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                開始閱讀
              </button>
              <button
                onClick={() => window.print()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                <PrinterIcon className="w-5 h-5 mr-2" />
                列印指南
              </button>
              <Link
                href="/resources/tools/1"
                className="bg-green-100 hover:bg-green-200 text-green-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                使用評估工具
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-max section-padding">
        <div className="bg-white rounded-2xl p-8 shadow-lg space-y-12">
          
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <LightBulbIcon className="w-8 h-8 text-yellow-600 mr-3" />
                前言：為什麼中小企業需要AI轉型
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  在數位化浪潮下，人工智慧（AI）已從遙不可及的高科技概念，轉變為企業競爭的核心優勢。
                  對於台灣的中小企業而言，AI轉型不再是選擇題，而是生存必需。
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">📊 台灣中小企業AI應用現況</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li>• 僅有 23% 的中小企業已開始AI相關投資</li>
                    <li>• 67% 的企業認為AI是未來 3 年的重要策略</li>
                    <li>• 平均投資回報率達到 158%</li>
                    <li>• 導入AI的企業生產力提升 35%</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">中小企業面臨的挑戰</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-600 mb-2">🚨 人力短缺</h4>
                    <p className="text-gray-600 text-sm">少子化與人才外流，導致關鍵職位難以填補</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-orange-600 mb-2">📈 成本上升</h4>
                    <p className="text-gray-600 text-sm">人力成本逐年攀升，壓縮企業利潤空間</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-600 mb-2">⚡ 效率要求</h4>
                    <p className="text-gray-600 text-sm">客戶對服務速度與品質要求不斷提高</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-600 mb-2">🌐 數位競爭</h4>
                    <p className="text-gray-600 text-sm">數位原生企業帶來前所未有的競爭壓力</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">AI轉型的核心價值</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">自動化重複性工作</h4>
                      <p className="text-gray-600 text-sm">釋放員工時間，專注於高價值創造活動</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">提升決策品質</h4>
                      <p className="text-gray-600 text-sm">基於數據的智能分析，減少主觀判斷錯誤</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">個性化客戶服務</h4>
                      <p className="text-gray-600 text-sm">24/7 智能客服，提供一致且個性化的服務體驗</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">成本結構優化</h4>
                      <p className="text-gray-600 text-sm">長期來看，AI投資能顯著降低營運成本</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Transformation Steps */}
          <section id="transformation-process" className="scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CogIcon className="w-8 h-8 text-blue-600 mr-3" />
                AI轉型四階段流程
              </h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">現況評估與需求分析</h3>
                      <p className="text-gray-600 mt-1">全面了解企業現況，識別AI應用機會點</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-14">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">🎯 關鍵要點</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 業務流程盤點與分析</li>
                        <li>• 痛點識別與優先排序</li>
                        <li>• 資源能力現況評估</li>
                        <li>• AI準備度量表評估</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">🛠️ 推薦工具</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• AI需求評估工具</li>
                        <li>• 流程分析模板</li>
                        <li>• 準備度評估表</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">📋 交付成果</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 現況分析報告</li>
                        <li>• AI需求清單</li>
                        <li>• 優先級排序表</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-bold mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">策略規劃與技術選型</h3>
                      <p className="text-gray-600 mt-1">制定AI轉型策略，選擇合適的技術方案</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-14">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">🎯 關鍵要點</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 轉型願景與目標設定</li>
                        <li>• 技術架構規劃設計</li>
                        <li>• 供應商評估與選擇</li>
                        <li>• 預算與時程規劃</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">🛠️ 推薦工具</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 技術選型矩陣</li>
                        <li>• 供應商評估表</li>
                        <li>• 專案規劃範本</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">📋 交付成果</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• AI轉型策略書</li>
                        <li>• 技術架構設計</li>
                        <li>• 實施計畫書</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full font-bold mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">導入實施與整合</h3>
                      <p className="text-gray-600 mt-1">執行AI系統導入，整合現有業務流程</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-14">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">🎯 關鍵要點</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 試驗專案執行</li>
                        <li>• 系統開發與整合</li>
                        <li>• 資料清理與訓練</li>
                        <li>• 使用者培訓</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">🛠️ 推薦工具</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 專案管理工具</li>
                        <li>• 測試驗證框架</li>
                        <li>• 培訓課程模組</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">📋 交付成果</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 可運行AI系統</li>
                        <li>• 整合測試報告</li>
                        <li>• 使用者手冊</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-600 text-white rounded-full font-bold mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">持續優化與擴展</h3>
                      <p className="text-gray-600 mt-1">監控效果並持續改善，擴展應用範圍</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pl-14">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">🎯 關鍵要點</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 效果指標監控</li>
                        <li>• 模型性能優化</li>
                        <li>• 使用者回饋收集</li>
                        <li>• 應用範圍擴展</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">🛠️ 推薦工具</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 監控儀表板</li>
                        <li>• 效果評估工具</li>
                        <li>• 回饋收集系統</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">📋 交付成果</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 月度效果報告</li>
                        <li>• 優化建議書</li>
                        <li>• 擴展計畫</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Success Factors */}
          <section id="success-factors" className="scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <StarIcon className="w-8 h-8 text-yellow-600 mr-3" />
                成功關鍵因素
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <UserGroupIcon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">領導層承諾</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">高階主管的強力支持與資源投入是成功的關鍵基礎</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <AcademicCapIcon className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">員工培訓</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">提供充足的AI技能培訓，建立組織學習文化</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <CogIcon className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">循序漸進</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">從小規模試驗開始，逐步擴展到全面應用</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <ChartBarIcon className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">數據品質</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">確保數據的完整性、準確性與及時性</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <ShieldCheckIcon className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">風險管控</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">建立完善的風險識別與控制機制</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <TrophyIcon className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">成效追蹤</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">建立明確的KPI指標，持續追蹤投資效益</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Common Pitfalls */}
          <section id="common-pitfalls" className="scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <ExclamationTriangleIcon className="w-8 h-8 text-red-600 mr-3" />
                常見陷阱與解決方案
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-red-900">過度期待AI萬能</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-200 text-red-800">
                      高風險
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">❌ 問題描述</h4>
                      <p className="text-red-700 text-sm">認為AI能解決所有問題，期望過高</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">✅ 解決方案</h4>
                      <p className="text-green-700 text-sm">務實評估AI適用範圍，設定合理期望</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-red-900">忽視數據品質</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-200 text-red-800">
                      高風險
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">❌ 問題描述</h4>
                      <p className="text-red-700 text-sm">使用品質不佳的數據進行模型訓練</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">✅ 解決方案</h4>
                      <p className="text-green-700 text-sm">投資數據清理與治理，建立數據品質標準</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-yellow-900">缺乏變革管理</h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-200 text-yellow-800">
                      中風險
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">❌ 問題描述</h4>
                      <p className="text-yellow-700 text-sm">未考慮組織文化與員工接受度</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">✅ 解決方案</h4>
                      <p className="text-green-700 text-sm">制定完善的變革管理計畫，加強溝通</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ROI Calculation */}
          <section id="roi-calculation" className="scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <BanknotesIcon className="w-8 h-8 text-green-600 mr-3" />
                ROI計算與效益評估
              </h2>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">💰 投資回報率計算公式</h3>
                <div className="bg-white rounded-lg p-4 font-mono text-center mb-4">
                  <div className="text-lg">ROI = (總效益 - 總成本) ÷ 總成本 × 100%</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">📊 成本項目</h4>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• 軟體授權費用</li>
                      <li>• 系統開發整合</li>
                      <li>• 硬體設備投資</li>
                      <li>• 員工培訓成本</li>
                      <li>• 維護營運費用</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800 mb-3">📈 效益項目</h4>
                    <ul className="space-y-2 text-green-700 text-sm">
                      <li>• 人力成本節省</li>
                      <li>• 工作效率提升</li>
                      <li>• 錯誤成本降低</li>
                      <li>• 新增營收機會</li>
                      <li>• 客戶滿意度提升</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/resources/tools/2"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center"
                >
                  <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                  使用ROI計算器
                </Link>
              </div>
            </motion.div>
          </section>

          {/* Resources */}
          <section id="resources" className="scroll-mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <DocumentTextIcon className="w-8 h-8 text-purple-600 mr-3" />
                延伸資源與工具
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">🛠️ 實用工具</h3>
                  <div className="space-y-3">
                    <Link href="/resources/tools/1" className="block text-blue-700 hover:text-blue-800 text-sm hover:underline">
                      • AI需求評估工具
                    </Link>
                    <Link href="/resources/tools/2" className="block text-blue-700 hover:text-blue-800 text-sm hover:underline">
                      • ROI投資回報計算器
                    </Link>
                    <Link href="/resources/tools/3" className="block text-blue-700 hover:text-blue-800 text-sm hover:underline">
                      • AI專案規劃範本
                    </Link>
                    <Link href="/resources/tools/4" className="block text-blue-700 hover:text-blue-800 text-sm hover:underline">
                      • 技術選型比較表
                    </Link>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-900 mb-4">📚 延伸閱讀</h3>
                  <div className="space-y-3">
                    <Link href="/cases" className="block text-purple-700 hover:text-purple-800 text-sm hover:underline">
                      • 成功案例分析
                    </Link>
                    <Link href="/resources" className="block text-purple-700 hover:text-purple-800 text-sm hover:underline">
                      • 行業趨勢報告
                    </Link>
                    <Link href="/services" className="block text-purple-700 hover:text-purple-800 text-sm hover:underline">
                      • 專業諮詢服務
                    </Link>
                    <Link href="/contact" className="block text-purple-700 hover:text-purple-800 text-sm hover:underline">
                      • 專家諮詢預約
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Call to Action */}
          <section className="scroll-mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                準備開始您的AI轉型之旅了嗎？
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                我們的專業團隊將為您提供個人化的AI轉型規劃與實施支援
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                >
                  預約免費諮詢
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/resources/tools/1"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                >
                  立即評估需求
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
} 