'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  CurrencyDollarIcon,
  ChartBarIcon,
  CalculatorIcon,
  PresentationChartLineIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  TagIcon,
  BookmarkIcon,
  ShareIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  DocumentTextIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  BanknotesIcon,
  SparklesIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';

export default function ROIGuide() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', title: '導言：ROI評估的重要性', icon: LightBulbIcon },
    { id: 'roi-basics', title: 'ROI基礎概念', icon: CalculatorIcon },
    { id: 'cost-analysis', title: '成本分析框架', icon: BanknotesIcon },
    { id: 'benefit-calculation', title: '效益計算方法', icon: ArrowTrendingUpIcon },
    { id: 'measurement-metrics', title: '關鍵衡量指標', icon: ChartBarIcon },
    { id: 'case-studies', title: '實際案例分析', icon: DocumentTextIcon },
    { id: 'tools-templates', title: '計算工具與範本', icon: SparklesIcon },
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
              <CurrencyDollarIcon className="w-12 h-12 text-green-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                ROI計算與效益評估方法
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              學習如何正確計算AI專案的投資回報率，建立可衡量的效益指標體系
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：12分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>ROI・效益評估・財務分析</span>
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-4 h-4 mr-1" />
                <span>AIRAI專家團隊</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                <BookmarkIcon className="w-5 h-5 mr-2" />
                收藏指南
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
                      導言：ROI評估的重要性
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        投資回報率（ROI）是衡量AI專案成功與否的關鍵指標。然而，許多企業在進行AI投資時，
                        往往因為缺乏系統性的評估方法，導致決策失誤或投資效益不如預期。
                      </p>
                      
                      <p>
                        本指南將教您如何建立科學的ROI計算框架，從成本分析到效益量化，
                        幫助您做出明智的AI投資決策。
                      </p>

                      <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
                        <h4 className="font-semibold text-green-900 mb-3">📊 AI投資ROI現況</h4>
                        <ul className="space-y-2 text-green-800">
                          <li>• 成功的AI專案平均ROI達到 <strong>237%</strong></li>
                          <li>• 投資回收期通常在 <strong>12-24個月</strong></li>
                          <li>• 67% 的企業在第一年就看到正面效益</li>
                          <li>• 效益評估準確度影響專案成功率達 <strong>85%</strong></li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-6">
                        <h4 className="font-semibold text-yellow-900 mb-3">⚠️ 常見評估錯誤</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-800">
                          <ul className="space-y-2">
                            <li>• 僅計算直接成本，忽視隱藏費用</li>
                            <li>• 高估短期效益，低估長期投資</li>
                            <li>• 缺乏量化指標，僅憑主觀判斷</li>
                          </ul>
                          <ul className="space-y-2">
                            <li>• 忽視風險成本與機會成本</li>
                            <li>• 沒有考慮組織變革成本</li>
                            <li>• 缺乏持續追蹤與調整機制</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* ROI Basics */}
                <section id="roi-basics" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CalculatorIcon className="w-8 h-8 text-blue-600 mr-3" />
                      ROI基礎概念
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        ROI（Return on Investment）的基本公式看似簡單，但在AI專案中的應用需要更精細的考量：
                      </p>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">基礎ROI公式</h3>
                        <div className="text-center p-6 bg-white rounded-lg mb-6">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            ROI = (收益 - 投資成本) ÷ 投資成本 × 100%
                          </div>
                          <div className="text-sm text-blue-700">
                            或表示為：(淨利潤 ÷ 總投資) × 100%
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-blue-800 mb-3">AI專案收益組成</h4>
                            <ul className="space-y-2 text-blue-700 text-sm">
                              <li>• 營收增加：新商機、客戶增長</li>
                              <li>• 成本節省：人力、時間、資源</li>
                              <li>• 效率提升：流程優化、錯誤減少</li>
                              <li>• 風險降低：合規性、安全性改善</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-800 mb-3">投資成本類別</h4>
                            <ul className="space-y-2 text-blue-700 text-sm">
                              <li>• 技術成本：軟硬體、授權費</li>
                              <li>• 人力成本：團隊、培訓、顧問</li>
                              <li>• 整合成本：系統導入、測試</li>
                              <li>• 維運成本：持續營運、升級</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">進階ROI指標</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-white rounded-lg">
                            <ChartPieIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <div className="font-bold text-green-900">NPV</div>
                            <div className="text-sm text-green-700">淨現值</div>
                            <div className="text-xs text-gray-600 mt-1">考慮時間價值</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg">
                            <ArrowTrendingUpIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <div className="font-bold text-green-900">IRR</div>
                            <div className="text-sm text-green-700">內部報酬率</div>
                            <div className="text-xs text-gray-600 mt-1">投資效率指標</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg">
                            <ClockIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <div className="font-bold text-green-900">Payback</div>
                            <div className="text-sm text-green-700">回收期間</div>
                            <div className="text-xs text-gray-600 mt-1">現金流平衡點</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Cost Analysis */}
                <section id="cost-analysis" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <BanknotesIcon className="w-8 h-8 text-red-600 mr-3" />
                      成本分析框架
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        準確的成本分析是ROI計算的基礎。AI專案的成本結構複雜，需要系統性的分類與計算：
                      </p>

                      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-red-900 mb-4">成本分類架構</h3>
                        
                        <div className="space-y-6">
                          {/* Initial Costs */}
                          <div className="border-l-4 border-red-500 pl-6">
                            <h4 className="text-lg font-bold text-red-900 mb-3">一次性投資成本</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-white p-4 rounded-lg">
                                <h5 className="font-semibold text-red-800 mb-2">技術基礎設施</h5>
                                <ul className="text-red-700 text-sm space-y-1">
                                  <li>• 硬體設備採購：伺服器、GPU</li>
                                  <li>• 軟體授權費用：AI平台、工具</li>
                                  <li>• 雲端服務費用：運算、儲存</li>
                                  <li>• 網路與安全設備</li>
                                </ul>
                                <div className="mt-2 text-xs text-red-600 font-medium">
                                  典型範圍：總預算的25-40%
                                </div>
                              </div>
                              <div className="bg-white p-4 rounded-lg">
                                <h5 className="font-semibold text-red-800 mb-2">系統整合與開發</h5>
                                <ul className="text-red-700 text-sm space-y-1">
                                  <li>• 系統整合費用</li>
                                  <li>• 客製化開發成本</li>
                                  <li>• 資料遷移與清理</li>
                                  <li>• 測試與驗證費用</li>
                                </ul>
                                <div className="mt-2 text-xs text-red-600 font-medium">
                                  典型範圍：總預算的20-35%
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Recurring Costs */}
                          <div className="border-l-4 border-orange-500 pl-6">
                            <h4 className="text-lg font-bold text-orange-900 mb-3">持續營運成本</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-white p-4 rounded-lg">
                                <h5 className="font-semibold text-orange-800 mb-2">人力資源</h5>
                                <ul className="text-orange-700 text-sm space-y-1">
                                  <li>• AI團隊薪資成本</li>
                                  <li>• 培訓教育費用</li>
                                  <li>• 外部顧問服務</li>
                                  <li>• 專案管理人力</li>
                                </ul>
                                <div className="mt-2 text-xs text-orange-600 font-medium">
                                  年度成本：初始投資的30-50%
                                </div>
                              </div>
                              <div className="bg-white p-4 rounded-lg">
                                <h5 className="font-semibold text-orange-800 mb-2">維護與升級</h5>
                                <ul className="text-orange-700 text-sm space-y-1">
                                  <li>• 系統維護費用</li>
                                  <li>• 軟體更新授權</li>
                                  <li>• 效能監控工具</li>
                                  <li>• 資料備份與安全</li>
                                </ul>
                                <div className="mt-2 text-xs text-orange-600 font-medium">
                                  年度成本：初始投資的15-25%
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Hidden Costs */}
                          <div className="border-l-4 border-purple-500 pl-6">
                            <h4 className="text-lg font-bold text-purple-900 mb-3">隱藏成本</h4>
                            <div className="bg-white p-4 rounded-lg">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <h5 className="font-semibold text-purple-800 mb-2">組織變革</h5>
                                  <ul className="text-purple-700 text-sm space-y-1">
                                    <li>• 流程重新設計</li>
                                    <li>• 員工適應期</li>
                                    <li>• 變革管理成本</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-purple-800 mb-2">機會成本</h5>
                                  <ul className="text-purple-700 text-sm space-y-1">
                                    <li>• 其他投資機會</li>
                                    <li>• 資源配置調整</li>
                                    <li>• 時間延遲損失</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-purple-800 mb-2">風險成本</h5>
                                  <ul className="text-purple-700 text-sm space-y-1">
                                    <li>• 專案失敗風險</li>
                                    <li>• 技術過時風險</li>
                                    <li>• 合規性風險</li>
                                  </ul>
                                </div>
                              </div>
                              <div className="mt-3 text-xs text-purple-600 font-medium">
                                通常被低估：可達總成本的10-20%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Benefit Calculation */}
                <section id="benefit-calculation" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ArrowTrendingUpIcon className="w-8 h-8 text-green-600 mr-3" />
                      效益計算方法
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        效益計算是ROI評估的另一個關鍵環節。AI專案的效益往往具有多樣性和延遲性，
                        需要建立系統性的量化方法：
                      </p>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">效益分類與計算</h3>
                        
                        <div className="space-y-6">
                          {/* Direct Benefits */}
                          <div className="border-l-4 border-green-500 pl-6">
                            <h4 className="text-lg font-bold text-green-900 mb-3">直接財務效益</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-white p-4 rounded-lg">
                                <h5 className="font-semibold text-green-800 mb-3">營收增長</h5>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm text-green-700">新客戶獲取</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                      客戶數 × 平均價值
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm text-green-700">客戶留存改善</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                      留存率提升 × 客戶LTV
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm text-green-700">交叉銷售增加</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                      銷售機會 × 轉換率
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white p-4 rounded-lg">
                                <h5 className="font-semibold text-green-800 mb-3">成本節省</h5>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm text-green-700">人力成本節省</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                      時間節省 × 時薪
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm text-green-700">錯誤減少</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                      錯誤次數 × 單次成本
                                    </span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm text-green-700">資源使用優化</span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                      效率提升% × 原成本
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Indirect Benefits */}
                          <div className="border-l-4 border-blue-500 pl-6">
                            <h4 className="text-lg font-bold text-blue-900 mb-3">間接效益</h4>
                            <div className="bg-white p-4 rounded-lg">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                  <h5 className="font-semibold text-blue-800 mb-2">效率提升</h5>
                                  <ul className="text-blue-700 text-sm space-y-1">
                                    <li>• 流程自動化率</li>
                                    <li>• 決策速度提升</li>
                                    <li>• 工作品質改善</li>
                                    <li>• 回應時間縮短</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-blue-800 mb-2">品質改善</h5>
                                  <ul className="text-blue-700 text-sm space-y-1">
                                    <li>• 客戶滿意度提升</li>
                                    <li>• 產品品質改善</li>
                                    <li>• 服務一致性</li>
                                    <li>• 合規性提升</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-blue-800 mb-2">競爭優勢</h5>
                                  <ul className="text-blue-700 text-sm space-y-1">
                                    <li>• 市場差異化</li>
                                    <li>• 創新能力提升</li>
                                    <li>• 品牌價值增加</li>
                                    <li>• 員工滿意度</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                          <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                            量化建議
                          </h4>
                          <p className="text-yellow-800 text-sm">
                            建議採用保守估計原則，間接效益以直接效益的30-50%計算，
                            並建立季度追蹤機制，根據實際數據調整預測。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Measurement Metrics */}
                <section id="measurement-metrics" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ChartBarIcon className="w-8 h-8 text-purple-600 mr-3" />
                      關鍵衡量指標
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        建立完整的指標體系，確保ROI評估的準確性和可追蹤性：
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-purple-900 mb-4">財務指標</h3>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg">
                              <h4 className="font-semibold text-purple-800 mb-2">基礎財務指標</h4>
                              <ul className="space-y-2 text-purple-700 text-sm">
                                <li className="flex justify-between">
                                  <span>投資回報率 (ROI)</span>
                                  <span className="font-medium">237% (3年平均)</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>淨現值 (NPV)</span>
                                  <span className="font-medium">正值表示獲利</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>投資回收期</span>
                                  <span className="font-medium">12-24個月</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>內部報酬率 (IRR)</span>
                                  <span className="font-medium">&gt;15% 為佳</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <h4 className="font-semibold text-purple-800 mb-2">現金流指標</h4>
                              <ul className="space-y-2 text-purple-700 text-sm">
                                <li>• 月度現金流變化</li>
                                <li>• 累積現金流</li>
                                <li>• 現金流缺口分析</li>
                                <li>• 流動性風險評估</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">營運指標</h3>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg">
                              <h4 className="font-semibold text-blue-800 mb-2">效率指標</h4>
                              <ul className="space-y-2 text-blue-700 text-sm">
                                <li className="flex justify-between">
                                  <span>處理時間縮短</span>
                                  <span className="font-medium">平均45%</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>錯誤率降低</span>
                                  <span className="font-medium">平均67%</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>自動化率</span>
                                  <span className="font-medium">目標80%</span>
                                </li>
                                <li className="flex justify-between">
                                  <span>生產力提升</span>
                                  <span className="font-medium">平均32%</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <h4 className="font-semibold text-blue-800 mb-2">品質指標</h4>
                              <ul className="space-y-2 text-blue-700 text-sm">
                                <li>• 客戶滿意度分數</li>
                                <li>• 服務品質等級</li>
                                <li>• 合規性達成率</li>
                                <li>• 系統可用性</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">指標追蹤時程</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="text-center p-4 bg-white rounded-lg">
                            <div className="text-lg font-bold text-gray-900 mb-2">每週</div>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• 系統使用率</li>
                              <li>• 處理量統計</li>
                              <li>• 錯誤報告</li>
                            </ul>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg">
                            <div className="text-lg font-bold text-gray-900 mb-2">每月</div>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• 財務指標</li>
                              <li>• 效率改善</li>
                              <li>• 用戶滿意度</li>
                            </ul>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg">
                            <div className="text-lg font-bold text-gray-900 mb-2">每季</div>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• ROI重新計算</li>
                              <li>• 目標達成檢討</li>
                              <li>• 策略調整</li>
                            </ul>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg">
                            <div className="text-lg font-bold text-gray-900 mb-2">每年</div>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• 全面效益評估</li>
                              <li>• 投資決策檢討</li>
                              <li>• 未來規劃</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Case Studies */}
                <section id="case-studies" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <DocumentTextIcon className="w-8 h-8 text-indigo-600 mr-3" />
                      實際案例分析
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        以下是三個不同規模企業的實際ROI案例，展示不同應用場景的效益計算：
                      </p>

                      <div className="space-y-6">
                        {/* Case Study 1 */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">案例一：製造業智能檢測系統</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-blue-800 mb-3">專案概況</h4>
                              <ul className="space-y-2 text-blue-700 text-sm">
                                <li>• 公司規模：中型製造商 (200人)</li>
                                <li>• 專案範圍：生產線品質檢測</li>
                                <li>• 投資金額：新台幣 800萬元</li>
                                <li>• 實施期間：8個月</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-blue-800 mb-3">ROI計算結果</h4>
                              <div className="space-y-2 text-blue-700 text-sm">
                                <div className="flex justify-between">
                                  <span>年度節省成本</span>
                                  <span className="font-medium">1,200萬元</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>3年累積效益</span>
                                  <span className="font-medium">3,600萬元</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>投資回收期</span>
                                  <span className="font-medium">8個月</span>
                                </div>
                                <div className="flex justify-between font-bold">
                                  <span>3年期ROI</span>
                                  <span className="text-green-700">350%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">主要效益來源</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-blue-700">缺陷檢出率提升：</span>
                                <span className="text-blue-600">從92% → 99.5%</span>
                              </div>
                              <div>
                                <span className="font-medium text-blue-700">檢測速度提升：</span>
                                <span className="text-blue-600">提升320%</span>
                              </div>
                              <div>
                                <span className="font-medium text-blue-700">人力成本節省：</span>
                                <span className="text-blue-600">年省480萬</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Case Study 2 */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-4">案例二：零售業智能客服系統</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-green-800 mb-3">專案概況</h4>
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li>• 公司規模：連鎖零售 (50店)</li>
                                <li>• 專案範圍：客服中心AI化</li>
                                <li>• 投資金額：新台幣 300萬元</li>
                                <li>• 實施期間：4個月</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-green-800 mb-3">ROI計算結果</h4>
                              <div className="space-y-2 text-green-700 text-sm">
                                <div className="flex justify-between">
                                  <span>年度節省成本</span>
                                  <span className="font-medium">420萬元</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>3年累積效益</span>
                                  <span className="font-medium">1,260萬元</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>投資回收期</span>
                                  <span className="font-medium">9個月</span>
                                </div>
                                <div className="flex justify-between font-bold">
                                  <span>3年期ROI</span>
                                  <span className="text-green-700">320%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2">主要效益來源</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-green-700">客服效率提升：</span>
                                <span className="text-green-600">處理量增加200%</span>
                              </div>
                              <div>
                                <span className="font-medium text-green-700">客戶滿意度：</span>
                                <span className="text-green-600">從78% → 91%</span>
                              </div>
                              <div>
                                <span className="font-medium text-green-700">24小時服務：</span>
                                <span className="text-green-600">營收增加15%</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Case Study 3 */}
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-orange-900 mb-4">案例三：物流業智能排程系統</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-orange-800 mb-3">專案概況</h4>
                              <ul className="space-y-2 text-orange-700 text-sm">
                                <li>• 公司規模：區域物流商 (100人)</li>
                                <li>• 專案範圍：配送路線優化</li>
                                <li>• 投資金額：新台幣 500萬元</li>
                                <li>• 實施期間：6個月</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-orange-800 mb-3">ROI計算結果</h4>
                              <div className="space-y-2 text-orange-700 text-sm">
                                <div className="flex justify-between">
                                  <span>年度節省成本</span>
                                  <span className="font-medium">680萬元</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>3年累積效益</span>
                                  <span className="font-medium">2,040萬元</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>投資回收期</span>
                                  <span className="font-medium">9個月</span>
                                </div>
                                <div className="flex justify-between font-bold">
                                  <span>3年期ROI</span>
                                  <span className="text-green-700">308%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-orange-800 mb-2">主要效益來源</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-orange-700">配送效率：</span>
                                <span className="text-orange-600">路程縮短25%</span>
                              </div>
                              <div>
                                <span className="font-medium text-orange-700">燃料成本：</span>
                                <span className="text-orange-600">年省180萬</span>
                              </div>
                              <div>
                                <span className="font-medium text-orange-700">準時交付率：</span>
                                <span className="text-orange-600">從85% → 96%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Tools & Templates */}
                <section id="tools-templates" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <SparklesIcon className="w-8 h-8 text-yellow-600 mr-3" />
                      計算工具與範本
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        提供實用的ROI計算工具和評估範本，幫助您快速進行專案評估：
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-yellow-900 mb-4">免費計算工具</h3>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-yellow-200">
                              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                <CalculatorIcon className="w-5 h-5 mr-2" />
                                AI專案ROI計算器
                              </h4>
                              <p className="text-yellow-700 text-sm mb-3">
                                互動式計算工具，支援多種成本與效益參數
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-yellow-600">Excel + Web版</span>
                                <a 
                                  href="/resources/tools/2" 
                                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                                >
                                  立即使用
                                </a>
                              </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border border-yellow-200">
                              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                <PresentationChartLineIcon className="w-5 h-5 mr-2" />
                                效益追蹤儀表板
                              </h4>
                              <p className="text-yellow-700 text-sm mb-3">
                                即時監控專案進度與效益實現狀況
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-yellow-600">Power BI範本</span>
                                <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded text-sm font-medium cursor-not-allowed">
                                  即將推出
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">評估範本</h3>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                <DocumentTextIcon className="w-5 h-5 mr-2" />
                                成本分析清單
                              </h4>
                              <p className="text-blue-700 text-sm mb-3">
                                完整的成本項目檢查清單，避免遺漏重要費用
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-blue-600">PDF + Word</span>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200">
                                  下載範本
                                </button>
                              </div>
                            </div>
                            
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                <ChartBarIcon className="w-5 h-5 mr-2" />
                                效益評估框架
                              </h4>
                              <p className="text-blue-700 text-sm mb-3">
                                標準化的效益識別與量化方法論
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-blue-600">PowerPoint</span>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200">
                                  下載範本
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">使用步驟指引</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="text-center p-4 bg-white rounded-lg">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                              1
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">收集基礎數據</h4>
                            <p className="text-gray-600 text-sm">
                              使用成本分析清單收集所有相關費用資訊
                            </p>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg">
                            <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                              2
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">識別效益項目</h4>
                            <p className="text-gray-600 text-sm">
                              運用效益評估框架找出所有可能的效益來源
                            </p>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg">
                            <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                              3
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">計算ROI</h4>
                            <p className="text-gray-600 text-sm">
                              使用ROI計算器進行詳細的財務分析
                            </p>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                              4
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">持續追蹤</h4>
                            <p className="text-gray-600 text-sm">
                              建立定期檢討機制，調整預測與實際差異
                            </p>
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
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircleIcon className="w-8 h-8 text-green-600 mr-3" />
                      最佳實務建議
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        基於實際專案經驗，以下是ROI評估的最佳實務原則：
                      </p>

                      <div className="space-y-6">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-4">評估原則</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-green-800 mb-3">保守估計</h4>
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>成本預估增加20-30%緩衝</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>效益預估採用70-80%保守值</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>實施時程延長15-25%</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>考慮學習曲線影響</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-green-800 mb-3">分期評估</h4>
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>將專案分為多個階段</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>每階段設立里程碑檢查點</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>根據實際結果調整後續預測</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>建立止損機制</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">常見陷阱與避免方法</h3>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                  <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                                  常見陷阱
                                </h4>
                                <ul className="space-y-1 text-red-700 text-sm">
                                  <li>• 過度樂觀的效益預估</li>
                                  <li>• 忽視間接成本與隱藏費用</li>
                                  <li>• 缺乏風險評估與應變計劃</li>
                                  <li>• 未考慮組織變革阻力</li>
                                </ul>
                              </div>
                              <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                                  避免方法
                                </h4>
                                <ul className="space-y-1 text-green-700 text-sm">
                                  <li>• 參考同業實際案例數據</li>
                                  <li>• 建立完整的成本清單</li>
                                  <li>• 進行敏感度分析</li>
                                  <li>• 制定變革管理計劃</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-yellow-900 mb-4">ROI優化策略</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg">
                              <h4 className="font-semibold text-yellow-800 mb-2">短期策略</h4>
                              <ul className="space-y-1 text-yellow-700 text-sm">
                                <li>• 選擇快贏專案</li>
                                <li>• 優先自動化重複性工作</li>
                                <li>• 專注核心業務流程</li>
                                <li>• 建立成功案例</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <h4 className="font-semibold text-yellow-800 mb-2">中期策略</h4>
                              <ul className="space-y-1 text-yellow-700 text-sm">
                                <li>• 擴大應用範圍</li>
                                <li>• 整合多個系統</li>
                                <li>• 優化使用者體驗</li>
                                <li>• 建立資料分析能力</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <h4 className="font-semibold text-yellow-800 mb-2">長期策略</h4>
                              <ul className="space-y-1 text-yellow-700 text-sm">
                                <li>• 發展AI核心能力</li>
                                <li>• 創新商業模式</li>
                                <li>• 建立競爭優勢</li>
                                <li>• 持續改進與創新</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold mb-4">準備開始您的ROI評估？</h3>
                          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                            使用我們的免費ROI計算工具，或諮詢專家團隊，為您的AI專案建立準確的投資評估
                          </p>
                          <div className="flex flex-wrap justify-center gap-4">
                            <a 
                              href="/resources/tools/2" 
                              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                            >
                              <CalculatorIcon className="w-5 h-5 mr-2" />
                              使用ROI計算器
                              <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </a>
                            <a 
                              href="/contact" 
                              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors duration-200"
                            >
                              <BuildingOfficeIcon className="w-5 h-5 mr-2" />
                              專家諮詢服務
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