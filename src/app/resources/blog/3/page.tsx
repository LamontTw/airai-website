'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  CogIcon,
  CpuChipIcon,
  BoltIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClockIcon,
  TagIcon,
  BookmarkIcon,
  ShareIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  SparklesIcon,
  EyeIcon,
  RocketLaunchIcon,
  BeakerIcon,
  PlayIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function RPAIntegrationArticle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', title: 'RPA與AI融合概述', icon: LightBulbIcon },
    { id: 'technology-foundation', title: '技術基礎與架構', icon: CpuChipIcon },
    { id: 'integration-strategies', title: '整合策略與方法', icon: CogIcon },
    { id: 'practical-cases', title: '實際應用案例', icon: BeakerIcon },
    { id: 'implementation-roadmap', title: '實施路線圖', icon: RocketLaunchIcon },
    { id: 'success-metrics', title: '成功指標與評估', icon: TrophyIcon },
    { id: 'best-practices', title: '最佳實務建議', icon: CheckCircleIcon }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <CogIcon className="w-12 h-12 text-green-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                RPA與AI結合的最佳實務
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              探討如何將傳統RPA與現代AI技術結合，創造更大的自動化價值與智能化流程
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：12分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>RPA・AI整合・流程自動化</span>
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-4 h-4 mr-1" />
                <span>陳專案經理</span>
              </div>
              <div className="flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                <span>2024-05-20</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                <BookmarkIcon className="w-5 h-5 mr-2" />
                收藏文章
              </button>
              <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <ShareIcon className="w-5 h-5 mr-2" />
                分享文章
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">文章目錄</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(item.id);
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'bg-green-100 text-green-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <LightBulbIcon className="w-8 h-8 text-yellow-600 mr-3" />
                      RPA與AI融合概述
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        隨著數位轉型的深入發展，企業發現傳統的RPA（機器人流程自動化）雖然能夠處理重複性工作，
                        但在面對需要判斷、理解和決策的複雜場景時仍有限制。將AI技術與RPA結合，
                        可以創造出更智能、更靈活的自動化解決方案。
                      </p>
                      
                      <p>
                        本文將基於我們團隊在多個專案中的實際經驗，分享RPA與AI整合的最佳實務，
                        包括技術架構、實施策略、成功案例以及關鍵注意事項。
                      </p>

                      <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
                        <h4 className="font-semibold text-green-900 mb-3">🤖 融合價值</h4>
                        <ul className="space-y-2 text-green-800">
                          <li>• <strong>智能判斷：</strong>AI為RPA增加認知能力</li>
                          <li>• <strong>異常處理：</strong>自動識別並處理例外情況</li>
                          <li>• <strong>學習優化：</strong>持續改善流程效率</li>
                          <li>• <strong>適應變化：</strong>動態調整處理邏輯</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h4 className="font-semibold text-blue-900 mb-3">📊 市場趨勢</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-blue-800 mb-2">成長數據</h5>
                            <ul className="text-blue-700 text-sm space-y-1">
                              <li>• 智能自動化市場年增率 25%</li>
                              <li>• 78% 企業計劃導入AI-RPA</li>
                              <li>• 平均ROI提升 45%</li>
                              <li>• 處理複雜度增加 300%</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-800 mb-2">應用領域</h5>
                            <ul className="text-blue-700 text-sm space-y-1">
                              <li>• 金融服務：風險評估自動化</li>
                              <li>• 醫療健康：病歷智能處理</li>
                              <li>• 製造業：品質檢測優化</li>
                              <li>• 客戶服務：智能回應系統</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Technology Foundation */}
                <section id="technology-foundation" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CpuChipIcon className="w-8 h-8 text-purple-600 mr-3" />
                      技術基礎與架構
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        成功的RPA+AI整合需要建立在穩固的技術架構之上。
                        我們設計了分層式架構，確保各組件的無縫協作。
                      </p>

                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">架構設計原則</h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-800 mb-3">分層架構</h4>
                            <div className="space-y-4">
                              <div className="flex items-center p-3 bg-purple-100 rounded-lg">
                                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  1
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-purple-800">智能決策層</div>
                                  <div className="text-purple-700 text-sm">AI模型進行判斷、分析與決策</div>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-purple-100 rounded-lg">
                                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  2
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-purple-800">流程編排層</div>
                                  <div className="text-purple-700 text-sm">RPA引擎執行自動化任務</div>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-purple-100 rounded-lg">
                                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  3
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-purple-800">數據整合層</div>
                                  <div className="text-purple-700 text-sm">統一的數據格式與接口</div>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-purple-100 rounded-lg">
                                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  4
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-purple-800">系統接口層</div>
                                  <div className="text-purple-700 text-sm">與各種業務系統的連接</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-purple-200">
                              <h4 className="font-semibold text-purple-800 mb-3">RPA核心技術</h4>
                              <ul className="space-y-2 text-purple-700 text-sm">
                                <li>• 流程設計器：視覺化流程建模</li>
                                <li>• 執行引擎：高併發任務處理</li>
                                <li>• 監控中心：即時狀態追蹤</li>
                                <li>• 異常處理：自動錯誤恢復</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-purple-200">
                              <h4 className="font-semibold text-purple-800 mb-3">AI核心技術</h4>
                              <ul className="space-y-2 text-purple-700 text-sm">
                                <li>• 自然語言處理：文件理解</li>
                                <li>• 計算機視覺：圖像識別</li>
                                <li>• 機器學習：模式識別</li>
                                <li>• 決策樹：邏輯推理</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-yellow-900 mb-4">技術選型考量</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-800 mb-2">RPA平台</h4>
                            <ul className="text-yellow-700 text-sm space-y-1">
                              <li>• UiPath：企業級功能完整</li>
                              <li>• Automation Anywhere：雲端優勢</li>
                              <li>• Blue Prism：安全性高</li>
                              <li>• Power Automate：Microsoft生態</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-800 mb-2">AI服務</h4>
                            <ul className="text-yellow-700 text-sm space-y-1">
                              <li>• Azure Cognitive Services</li>
                              <li>• AWS Machine Learning</li>
                              <li>• Google Cloud AI</li>
                              <li>• 自建模型部署</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-800 mb-2">整合考量</h4>
                            <ul className="text-yellow-700 text-sm space-y-1">
                              <li>• API相容性</li>
                              <li>• 延遲容忍度</li>
                              <li>• 成本效益分析</li>
                              <li>• 維護複雜度</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Integration Strategies */}
                <section id="integration-strategies" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CogIcon className="w-8 h-8 text-blue-600 mr-3" />
                      整合策略與方法
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        RPA與AI的整合有多種模式，選擇合適的整合策略對專案成功至關重要。
                        我們總結出四種主要的整合模式：
                      </p>

                      <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">整合模式</h3>
                          
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-3">1. 序列式整合</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="text-sm font-medium text-blue-700 mb-2">適用場景</h5>
                                  <ul className="text-blue-600 text-sm space-y-1">
                                    <li>• 文件處理流程</li>
                                    <li>• 數據驗證工作</li>
                                    <li>• 審核批准流程</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-medium text-blue-700 mb-2">執行模式</h5>
                                  <p className="text-blue-600 text-sm">
                                    RPA收集數據 → AI分析判斷 → RPA執行後續動作
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-3">2. 並行式整合</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="text-sm font-medium text-blue-700 mb-2">適用場景</h5>
                                  <ul className="text-blue-600 text-sm space-y-1">
                                    <li>• 多管道數據處理</li>
                                    <li>• 即時監控系統</li>
                                    <li>• 風險評估流程</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-medium text-blue-700 mb-2">執行模式</h5>
                                  <p className="text-blue-600 text-sm">
                                    RPA和AI同時處理不同數據源，結果統一整合
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-3">3. 嵌入式整合</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="text-sm font-medium text-blue-700 mb-2">適用場景</h5>
                                  <ul className="text-blue-600 text-sm space-y-1">
                                    <li>• 客戶服務自動化</li>
                                    <li>• 智能表單處理</li>
                                    <li>• 動態決策流程</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-medium text-blue-700 mb-2">執行模式</h5>
                                  <p className="text-blue-600 text-sm">
                                    AI模型直接嵌入RPA流程，即時提供智能決策
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-3">4. 回饋式整合</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="text-sm font-medium text-blue-700 mb-2">適用場景</h5>
                                  <ul className="text-blue-600 text-sm space-y-1">
                                    <li>• 持續優化流程</li>
                                    <li>• 品質改善系統</li>
                                    <li>• 預測維護流程</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-medium text-blue-700 mb-2">執行模式</h5>
                                  <p className="text-blue-600 text-sm">
                                    AI持續學習RPA執行結果，優化流程效率
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-4">實施步驟</h3>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="text-center p-4 bg-white rounded-lg">
                              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                1
                              </div>
                              <h4 className="font-semibold text-green-800 mb-2">流程分析</h4>
                              <p className="text-green-700 text-sm">
                                識別適合整合的業務流程
                              </p>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg">
                              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                2
                              </div>
                              <h4 className="font-semibold text-green-800 mb-2">技術評估</h4>
                              <p className="text-green-700 text-sm">
                                評估技術可行性與成本效益
                              </p>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg">
                              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                3
                              </div>
                              <h4 className="font-semibold text-green-800 mb-2">原型開發</h4>
                              <p className="text-green-700 text-sm">
                                建立概念驗證原型
                              </p>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg">
                              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                                4
                              </div>
                              <h4 className="font-semibold text-green-800 mb-2">全面部署</h4>
                              <p className="text-green-700 text-sm">
                                擴展至生產環境運行
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Practical Cases */}
                <section id="practical-cases" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <BeakerIcon className="w-8 h-8 text-orange-600 mr-3" />
                      實際應用案例
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        以下分享我們在不同行業的成功實施案例，展示RPA+AI整合的實際效益：
                      </p>

                      <div className="space-y-6">
                        {/* Case 1 */}
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-orange-900 mb-4">案例一：HR招聘流程智能化</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-orange-800 mb-3">挑戰背景</h4>
                              <ul className="space-y-2 text-orange-700 text-sm">
                                <li>• 履歷篩選耗時：每份需15-20分鐘</li>
                                <li>• 格式多樣化：Word、PDF、線上表單</li>
                                <li>• 評估標準不一：依賴HR個人經驗</li>
                                <li>• 面試安排複雜：多輪協調耗時</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-orange-800 mb-3">解決方案</h4>
                              <ul className="space-y-2 text-orange-700 text-sm">
                                <li>• NLP分析：自動解析履歷內容</li>
                                <li>• 技能匹配：AI評分與排序</li>
                                <li>• 標準化評估：統一評分標準</li>
                                <li>• RPA排程：自動化面試安排</li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 bg-white p-4 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-orange-800 mb-3">實施效果</h4>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <div className="text-center p-3 bg-orange-50 rounded-lg">
                                <div className="text-2xl font-bold text-orange-700 mb-1">75%</div>
                                <div className="text-sm text-orange-600">篩選時間縮短</div>
                              </div>
                              <div className="text-center p-3 bg-orange-50 rounded-lg">
                                <div className="text-2xl font-bold text-orange-700 mb-1">88%</div>
                                <div className="text-sm text-orange-600">技能匹配準確率</div>
                              </div>
                              <div className="text-center p-3 bg-orange-50 rounded-lg">
                                <div className="text-2xl font-bold text-orange-700 mb-1">50%</div>
                                <div className="text-sm text-orange-600">HR工作量減少</div>
                              </div>
                              <div className="text-center p-3 bg-orange-50 rounded-lg">
                                <div className="text-2xl font-bold text-orange-700 mb-1">3x</div>
                                <div className="text-sm text-orange-600">面試效率提升</div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 bg-white p-4 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-orange-800 mb-3">技術細節</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-medium text-orange-700 mb-2">智能履歷解析</h5>
                                <ul className="space-y-1 text-orange-600 text-sm">
                                  <li>• 自動提取個人資訊</li>
                                  <li>• 教育背景結構化</li>
                                  <li>• 工作經驗時間軸</li>
                                  <li>• 技能關鍵字識別</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium text-orange-700 mb-2">自動化流程</h5>
                                <ul className="space-y-1 text-orange-600 text-sm">
                                  <li>• 評分標準執行</li>
                                  <li>• 候選人排序</li>
                                  <li>• 通知信件發送</li>
                                  <li>• 面試時間安排</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Case 2 */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">案例二：外燴餐飲訂單管理智能化</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-blue-800 mb-3">傳統挑戰</h4>
                              <ul className="space-y-2 text-blue-700 text-sm">
                                <li>• 訂單處理繁瑣：電話、Line、郵件多管道</li>
                                <li>• 食材採購混亂：憑經驗估算需求量</li>
                                <li>• 成本控制困難：缺乏即時數據分析</li>
                                <li>• 客戶偏好難掌握：缺乏系統化記錄</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-blue-800 mb-3">智能化解決</h4>
                              <ul className="space-y-2 text-blue-700 text-sm">
                                <li>• 統一訂單平台：自動彙整多管道訂單</li>
                                <li>• AI需求預測：分析歷史數據預估食材</li>
                                <li>• 自動化採購：RPA執行供應商下單</li>
                                <li>• 個性化推薦：AI分析客戶喜好</li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 bg-white p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-3">系統流程</h4>
                            <div className="space-y-3">
                              <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                                <PlayIcon className="w-6 h-6 text-blue-600 mr-3" />
                                <div className="flex-1">
                                  <div className="font-medium text-blue-800">訂單收集 → NLP解析需求 → 標準化處理</div>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                                <CogIcon className="w-6 h-6 text-blue-600 mr-3" />
                                <div className="flex-1">
                                  <div className="font-medium text-blue-800">AI預測需求 → RPA生成採購單 → 自動下單</div>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                                <ChartBarIcon className="w-6 h-6 text-blue-600 mr-3" />
                                <div className="flex-1">
                                  <div className="font-medium text-blue-800">成本分析 → 利潤計算 → 營運報表生成</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 bg-white p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-3">實施效果</h4>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <div className="text-center p-3 bg-blue-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-700 mb-1">65%</div>
                                <div className="text-sm text-blue-600">訂單處理時間減少</div>
                              </div>
                              <div className="text-center p-3 bg-blue-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-700 mb-1">30%</div>
                                <div className="text-sm text-blue-600">食材浪費降低</div>
                              </div>
                              <div className="text-center p-3 bg-blue-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-700 mb-1">25%</div>
                                <div className="text-sm text-blue-600">營運成本節省</div>
                              </div>
                              <div className="text-center p-3 bg-blue-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-700 mb-1">40%</div>
                                <div className="text-sm text-blue-600">客戶滿意度提升</div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 bg-white p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-3">關鍵功能</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-medium text-blue-700 mb-2">智能訂單管理</h5>
                                <ul className="space-y-1 text-blue-600 text-sm">
                                  <li>• 多管道訂單統一收集</li>
                                  <li>• 自動化訂單確認通知</li>
                                  <li>• 衝突時段智能排程</li>
                                  <li>• 客戶偏好記錄分析</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium text-blue-700 mb-2">採購優化系統</h5>
                                <ul className="space-y-1 text-blue-600 text-sm">
                                  <li>• 食材需求量預測</li>
                                  <li>• 供應商比價自動化</li>
                                  <li>• 庫存水位監控警示</li>
                                  <li>• 成本效益實時分析</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Case 3 */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-4">案例三：電商客服中心智能化升級</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-green-800 mb-3">原有挑戰</h4>
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li>• 客服壓力大：高峰期排隊時間長</li>
                                <li>• 重複問題多：80%為常見基礎問題</li>
                                <li>• 服務品質不一：依賴客服個人經驗</li>
                                <li>• 成本居高不下：24小時人力需求大</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-green-800 mb-3">智能化轉型</h4>
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li>• AI機器人：自動處理常見諮詢</li>
                                <li>• 智能分流：問題自動分類轉接</li>
                                <li>• 知識庫：RPA即時提供解決方案</li>
                                <li>• 情感分析：AI識別客戶情緒狀態</li>
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">多層次處理流程</h4>
                            <div className="space-y-3">
                              <div className="flex items-center p-3 bg-green-100 rounded-lg">
                                <BoltIcon className="w-6 h-6 text-green-600 mr-3" />
                                <div className="flex-1">
                                  <div className="font-medium text-green-800">AI機器人 → 意圖識別 → 自動回應（75%問題）</div>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-green-100 rounded-lg">
                                <SparklesIcon className="w-6 h-6 text-green-600 mr-3" />
                                <div className="flex-1">
                                  <div className="font-medium text-green-800">智能輔助 → RPA檢索知識庫 → 建議解決方案（20%問題）</div>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-green-100 rounded-lg">
                                <UserGroupIcon className="w-6 h-6 text-green-600 mr-3" />
                                <div className="flex-1">
                                  <div className="font-medium text-green-800">人工專家 → 複雜問題處理 → 經驗回饋系統（5%問題）</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">實施效果</h4>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-2xl font-bold text-green-700 mb-1">85%</div>
                                <div className="text-sm text-green-600">回應時間縮短</div>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-2xl font-bold text-green-700 mb-1">95%</div>
                                <div className="text-sm text-green-600">問題解決準確率</div>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-2xl font-bold text-green-700 mb-1">60%</div>
                                <div className="text-sm text-green-600">客服成本降低</div>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-2xl font-bold text-green-700 mb-1">24/7</div>
                                <div className="text-sm text-green-600">全天候服務</div>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">核心技術模組</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-medium text-green-700 mb-2">AI對話引擎</h5>
                                <ul className="space-y-1 text-green-600 text-sm">
                                  <li>• 自然語言理解（NLU）</li>
                                  <li>• 意圖識別與實體提取</li>
                                  <li>• 上下文對話管理</li>
                                  <li>• 多輪對話狀態追蹤</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium text-green-700 mb-2">智能化輔助</h5>
                                <ul className="space-y-1 text-green-600 text-sm">
                                  <li>• RPA知識庫自動檢索</li>
                                  <li>• 客戶歷史記錄整合</li>
                                  <li>• 情感分析與風險預警</li>
                                  <li>• 個性化服務推薦</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">業務價值</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-lg font-bold text-green-700 mb-1">客戶體驗</div>
                                <ul className="text-green-600 text-xs space-y-1">
                                  <li>• 零等待即時回應</li>
                                  <li>• 一致性服務品質</li>
                                  <li>• 個性化解決方案</li>
                                </ul>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-lg font-bold text-green-700 mb-1">營運效率</div>
                                <ul className="text-green-600 text-xs space-y-1">
                                  <li>• 人力資源優化配置</li>
                                  <li>• 專家聚焦複雜問題</li>
                                  <li>• 知識管理系統化</li>
                                </ul>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-lg font-bold text-green-700 mb-1">商業洞察</div>
                                <ul className="text-green-600 text-xs space-y-1">
                                  <li>• 客戶需求趨勢分析</li>
                                  <li>• 產品問題提前發現</li>
                                  <li>• 服務流程持續優化</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Implementation Roadmap */}
                <section id="implementation-roadmap" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <RocketLaunchIcon className="w-8 h-8 text-red-600 mr-3" />
                      實施路線圖
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        成功的RPA+AI專案需要系統性的規劃與執行。我們建議採用分階段的實施策略：
                      </p>

                      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-red-900 mb-4">分階段實施計劃</h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-800 mb-3">階段一：基礎建設（1-2月）</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-red-700 text-sm">
                                <li>• 技術平台選型與採購</li>
                                <li>• 開發環境建置</li>
                                <li>• 團隊培訓與技能建設</li>
                                <li>• 安全性與合規設定</li>
                              </ul>
                              <ul className="space-y-2 text-red-700 text-sm">
                                <li>• 數據治理框架建立</li>
                                <li>• 監控與日誌系統</li>
                                <li>• 災難恢復計劃</li>
                                <li>• 變更管理流程</li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-800 mb-3">階段二：試點開發（2-3月）</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-red-700 text-sm">
                                <li>• 選擇低風險試點流程</li>
                                <li>• 開發AI模型與訓練</li>
                                <li>• RPA流程設計與測試</li>
                                <li>• 整合接口開發</li>
                              </ul>
                              <ul className="space-y-2 text-red-700 text-sm">
                                <li>• 用戶驗收測試</li>
                                <li>• 效能調校與優化</li>
                                <li>• 文件撰寫與培訓</li>
                                <li>• 上線準備與檢查</li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-800 mb-3">階段三：規模擴展（3-6月）</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-red-700 text-sm">
                                <li>• 擴展至更多業務流程</li>
                                <li>• 增加併發處理能力</li>
                                <li>• 建立卓越中心（COE）</li>
                                <li>• 制定治理政策</li>
                              </ul>
                              <ul className="space-y-2 text-red-700 text-sm">
                                <li>• 持續監控與優化</li>
                                <li>• 效益追蹤與評估</li>
                                <li>• 知識分享與傳承</li>
                                <li>• 未來規劃與路線圖</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                          <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                            關鍵成功因素
                          </h4>
                          <ul className="text-yellow-800 text-sm space-y-1">
                            <li>• <strong>高層支持：</strong>確保充足的資源投入與組織支持</li>
                            <li>• <strong>跨部門協作：</strong>業務、IT、數據團隊緊密合作</li>
                            <li>• <strong>敏捷開發：</strong>快速迭代，持續改進</li>
                            <li>• <strong>變革管理：</strong>做好員工溝通與培訓</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Success Metrics */}
                <section id="success-metrics" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <TrophyIcon className="w-8 h-8 text-yellow-600 mr-3" />
                      成功指標與評估
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        建立完善的評估指標體系，確保專案價值的持續實現與改進：
                      </p>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-yellow-900 mb-4">關鍵績效指標（KPI）</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-800 mb-3">效率指標</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-700">處理時間縮短</span>
                                <span className="text-lg font-bold text-green-600">60-85%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-700">錯誤率降低</span>
                                <span className="text-lg font-bold text-green-600">70-90%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-700">自動化率提升</span>
                                <span className="text-lg font-bold text-green-600">80-95%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-700">併發處理能力</span>
                                <span className="text-lg font-bold text-green-600">5-10倍</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-800 mb-3">品質指標</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-700">AI模型準確率</span>
                                <span className="text-lg font-bold text-blue-600">&gt;90%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-700">流程穩定性</span>
                                <span className="text-lg font-bold text-blue-600">&gt;99%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-700">異常恢復率</span>
                                <span className="text-lg font-bold text-blue-600">&gt;95%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-700">用戶滿意度</span>
                                <span className="text-lg font-bold text-blue-600">&gt;85%</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-white p-4 rounded-lg border border-yellow-200">
                          <h4 className="font-semibold text-yellow-800 mb-3">財務效益</h4>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                              <div className="text-2xl font-bold text-yellow-700 mb-1">ROI</div>
                              <div className="text-lg font-medium text-yellow-600">250-400%</div>
                              <div className="text-xs text-yellow-500">3年期</div>
                            </div>
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                              <div className="text-2xl font-bold text-yellow-700 mb-1">回收期</div>
                              <div className="text-lg font-medium text-yellow-600">8-18月</div>
                              <div className="text-xs text-yellow-500">平均12月</div>
                            </div>
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                              <div className="text-2xl font-bold text-yellow-700 mb-1">成本節省</div>
                              <div className="text-lg font-medium text-yellow-600">40-70%</div>
                              <div className="text-xs text-yellow-500">年度營運</div>
                            </div>
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                              <div className="text-2xl font-bold text-yellow-700 mb-1">收益增長</div>
                              <div className="text-lg font-medium text-yellow-600">15-30%</div>
                              <div className="text-xs text-yellow-500">業務流程</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-indigo-900 mb-4">監控與治理</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-2">即時監控</h4>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>• 流程執行狀態</li>
                              <li>• 系統效能指標</li>
                              <li>• 異常警報機制</li>
                              <li>• 資源使用情況</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-2">定期報告</h4>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>• 週度營運報告</li>
                              <li>• 月度效益分析</li>
                              <li>• 季度策略檢討</li>
                              <li>• 年度總結規劃</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-2">持續改善</h4>
                            <ul className="text-indigo-700 text-sm space-y-1">
                              <li>• 模型重新訓練</li>
                              <li>• 流程優化調整</li>
                              <li>• 技術升級遷移</li>
                              <li>• 最佳實務分享</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Best Practices */}
                <section id="best-practices" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircleIcon className="w-8 h-8 text-green-600 mr-3" />
                      最佳實務建議
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        基於多個專案的實施經驗，我們總結出以下最佳實務建議：
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-4">技術面建議</h3>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-green-200">
                              <h4 className="font-semibold text-green-800 mb-2">架構設計</h4>
                              <ul className="text-green-700 text-sm space-y-1">
                                <li>• 採用微服務架構提升靈活性</li>
                                <li>• 建立統一的API管理平台</li>
                                <li>• 實施容器化部署策略</li>
                                <li>• 設計完整的錯誤處理機制</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-green-200">
                              <h4 className="font-semibold text-green-800 mb-2">數據管理</h4>
                              <ul className="text-green-700 text-sm space-y-1">
                                <li>• 建立數據品質檢核機制</li>
                                <li>• 實施數據版本控制</li>
                                <li>• 設置數據備份與恢復</li>
                                <li>• 制定數據保留政策</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">管理面建議</h3>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-2">組織建設</h4>
                              <ul className="text-blue-700 text-sm space-y-1">
                                <li>• 建立跨功能團隊合作模式</li>
                                <li>• 設立自動化卓越中心</li>
                                <li>• 制定明確的角色責任</li>
                                <li>• 建立持續學習機制</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-2">流程治理</h4>
                              <ul className="text-blue-700 text-sm space-y-1">
                                <li>• 建立標準化開發流程</li>
                                <li>• 實施嚴格的版本控制</li>
                                <li>• 制定審查與核准機制</li>
                                <li>• 建立知識管理系統</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">常見陷阱與避免方法</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-purple-800 mb-3">技術陷阱</h4>
                            <div className="space-y-3">
                              <div className="bg-red-100 border border-red-200 rounded-lg p-3">
                                <div className="font-medium text-red-800 mb-1">過度複雜化設計</div>
                                <div className="text-red-700 text-sm">避免：從簡單場景開始，逐步增加複雜性</div>
                              </div>
                              <div className="bg-red-100 border border-red-200 rounded-lg p-3">
                                <div className="font-medium text-red-800 mb-1">忽視數據品質</div>
                                <div className="text-red-700 text-sm">避免：建立完整的數據治理框架</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-purple-800 mb-3">管理陷阱</h4>
                            <div className="space-y-3">
                              <div className="bg-red-100 border border-red-200 rounded-lg p-3">
                                <div className="font-medium text-red-800 mb-1">缺乏變革管理</div>
                                <div className="text-red-700 text-sm">避免：做好員工溝通與培訓計劃</div>
                              </div>
                              <div className="bg-red-100 border border-red-200 rounded-lg p-3">
                                <div className="font-medium text-red-800 mb-1">期望過高過快</div>
                                <div className="text-red-700 text-sm">避免：設定合理的里程碑與目標</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold mb-4">準備開始您的RPA+AI整合專案？</h3>
                          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                            聯絡我們的專家團隊，獲得量身定制的RPA與AI整合解決方案
                          </p>
                          <div className="flex flex-wrap justify-center gap-4">
                            <a 
                              href="/contact" 
                              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                            >
                              <CogIcon className="w-5 h-5 mr-2" />
                              免費諮詢
                              <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </a>
                            <a 
                              href="/resources/tools" 
                              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors duration-200"
                            >
                              <DocumentTextIcon className="w-5 h-5 mr-2" />
                              評估工具
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 