'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  ExclamationTriangleIcon,
  LightBulbIcon,
  CheckCircleIcon,
  XCircleIcon,
  UserGroupIcon,
  CogIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ArrowRightIcon,
  TagIcon,
  SparklesIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

export default function AIObstaclesGuide() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', title: '導言：企業AI轉型的現實挑戰', icon: LightBulbIcon },
    { id: 'top-obstacles', title: '五大核心障礙分析', icon: ExclamationTriangleIcon },
    { id: 'technical-challenges', title: '技術層面挑戰', icon: CogIcon },
    { id: 'organizational-challenges', title: '組織層面挑戰', icon: UserGroupIcon },
    { id: 'financial-challenges', title: '財務投資挑戰', icon: CurrencyDollarIcon },
    { id: 'solution-framework', title: '系統性解決框架', icon: CheckCircleIcon },
    { id: 'implementation-roadmap', title: '實施路線圖', icon: ArrowRightIcon },
    { id: 'success-factors', title: '成功關鍵因素', icon: SparklesIcon }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ExclamationTriangleIcon className="w-12 h-12 text-orange-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                常見AI導入障礙與解決方案
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              深入分析中小企業在AI導入過程中的常見問題，提供實用的解決策略和最佳實務
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：10分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>問題解決・最佳實務・經驗分享</span>
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-4 h-4 mr-1" />
                <span>AIRAI專家團隊</span>
              </div>
            </div>

            {/* TL;DR - GEO 優化 */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-left">
              <p className="sr-only">摘要 TL;DR</p>
              <p className="text-sm text-orange-800 leading-relaxed">
                中小企業導入 AI 最常見的五大障礙：資料品質不足、人才缺乏、預算限制、組織抗拒變革、技術整合困難。本文針對每項障礙提供具體解決方案，包括漸進式資料治理、外部顧問搭配內部培訓、MVP 驗證降低風險等實務策略，幫助企業順利跨越 AI 導入門檻。
              </p>
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
                          ? 'bg-orange-100 text-orange-700 font-medium'
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
                      導言：企業AI轉型的現實挑戰
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        根據AIRAI在台灣市場的實地調研，超過78%的中小企業在AI導入過程中遭遇重大障礙，
                        其中42%的企業甚至因此中止或延遲AI專案。這些障礙並非不可克服，
                        關鍵在於事前識別、系統性分析和採用正確的解決策略。
                      </p>
                      
                      <p>
                        本指南基於我們協助200+家企業成功導入AI的實戰經驗，
                        整理出最常見的AI導入障礙及其對應的解決方案，
                        幫助您避開常見陷阱，順利完成AI轉型。
                      </p>

                      <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
                        <h4 className="font-semibold text-red-900 mb-3">⚠️ AI導入失敗統計</h4>
                        <ul className="space-y-2 text-red-800">
                          <li>• 67% 的企業低估了資料準備的複雜度</li>
                          <li>• 54% 遭遇員工抗拒或技能不足問題</li>
                          <li>• 48% 在投資回報評估上出現偏差</li>
                          <li>• 31% 因為缺乏明確策略而半途而廢</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                        <h4 className="font-semibold text-green-900 mb-3">💡 本指南將幫助您</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-800">
                          <ul className="space-y-2">
                            <li>• 識別潛在的AI導入風險</li>
                            <li>• 建立系統性解決框架</li>
                            <li>• 學習成功企業的經驗</li>
                          </ul>
                          <ul className="space-y-2">
                            <li>• 制定風險控管策略</li>
                            <li>• 提升專案成功機率</li>
                            <li>• 獲得可行的實施路徑</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Top Obstacles */}
                <section id="top-obstacles" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ExclamationTriangleIcon className="w-8 h-8 text-red-600 mr-3" />
                      五大核心障礙分析
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-8">
                      <p>
                        經過深度分析，我們將AI導入障礙歸納為五大核心類別，
                        每個類別都有其特定的成因和解決思路：
                      </p>

                      <div className="space-y-6">
                        {/* Obstacle 1 */}
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full font-bold mr-4">
                              1
                            </div>
                            <h3 className="text-xl font-bold text-red-900">資料品質與準備不足</h3>
                          </div>
                          <div className="ml-14 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                  <XCircleIcon className="w-5 h-5 mr-2" />
                                  常見問題
                                </h4>
                                <ul className="text-red-700 text-sm space-y-1">
                                  <li>• 資料分散在不同系統中</li>
                                  <li>• 資料格式不統一</li>
                                  <li>• 歷史資料缺失或錯誤</li>
                                  <li>• 缺乏資料治理政策</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                                  影響程度
                                </h4>
                                <div className="text-green-700 text-sm space-y-1">
                                  <div>專案延遲：平均3-6個月</div>
                                  <div>成本增加：25-40%</div>
                                  <div>成功率：降低50%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Obstacle 2 */}
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-orange-600 text-white rounded-full font-bold mr-4">
                              2
                            </div>
                            <h3 className="text-xl font-bold text-orange-900">技能差距與人才短缺</h3>
                          </div>
                          <div className="ml-14 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                                  <XCircleIcon className="w-5 h-5 mr-2" />
                                  技能缺口
                                </h4>
                                <ul className="text-orange-700 text-sm space-y-1">
                                  <li>• AI基礎知識不足</li>
                                  <li>• 缺乏資料科學人才</li>
                                  <li>• 技術整合能力欠缺</li>
                                  <li>• 變革管理經驗不足</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                                  市場現況
                                </h4>
                                <div className="text-green-700 text-sm space-y-1">
                                  <div>AI人才缺口：70%企業</div>
                                  <div>培訓需求：平均6個月</div>
                                  <div>外包比例：60%選擇</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Obstacle 3 */}
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-yellow-600 text-white rounded-full font-bold mr-4">
                              3
                            </div>
                            <h3 className="text-xl font-bold text-yellow-900">投資回報不明確</h3>
                          </div>
                          <div className="ml-14 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                  <XCircleIcon className="w-5 h-5 mr-2" />
                                  評估困難
                                </h4>
                                <ul className="text-yellow-700 text-sm space-y-1">
                                  <li>• 效益難以量化</li>
                                  <li>• 投資成本模糊</li>
                                  <li>• ROI計算複雜</li>
                                  <li>• 風險評估不足</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                                  決策影響
                                </h4>
                                <div className="text-green-700 text-sm space-y-1">
                                  <div>專案擱置：35%機率</div>
                                  <div>預算不足：45%企業</div>
                                  <div>期望差距：60%專案</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Obstacle 4 */}
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold mr-4">
                              4
                            </div>
                            <h3 className="text-xl font-bold text-blue-900">組織變革阻力</h3>
                          </div>
                          <div className="ml-14 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                  <XCircleIcon className="w-5 h-5 mr-2" />
                                  阻力來源
                                </h4>
                                <ul className="text-blue-700 text-sm space-y-1">
                                  <li>• 員工恐懼失業</li>
                                  <li>• 既有流程依賴</li>
                                  <li>• 學習意願不高</li>
                                  <li>• 管理層支持不足</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                                  變革挑戰
                                </h4>
                                <div className="text-green-700 text-sm space-y-1">
                                  <div>員工接受度：40%初期</div>
                                  <div>適應時間：3-9個月</div>
                                  <div>流程重整：80%需要</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Obstacle 5 */}
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full font-bold mr-4">
                              5
                            </div>
                            <h3 className="text-xl font-bold text-purple-900">技術整合複雜度</h3>
                          </div>
                          <div className="ml-14 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-purple-800 mb-2 flex items-center">
                                  <XCircleIcon className="w-5 h-5 mr-2" />
                                  技術挑戰
                                </h4>
                                <ul className="text-purple-700 text-sm space-y-1">
                                  <li>• 舊系統相容性</li>
                                  <li>• 架構設計不當</li>
                                  <li>• 安全性考量</li>
                                  <li>• 維護成本高昂</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                  <CheckCircleIcon className="w-5 h-5 mr-2" />
                                  整合現況
                                </h4>
                                <div className="text-green-700 text-sm space-y-1">
                                  <div>系統升級：85%需要</div>
                                  <div>整合時間：2-8個月</div>
                                  <div>額外成本：30-50%</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Technical Challenges */}
                <section id="technical-challenges" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CogIcon className="w-8 h-8 text-blue-600 mr-3" />
                      技術層面挑戰
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        技術挑戰往往是最直接也最容易被低估的障礙。
                        以下深入分析主要的技術層面問題及其解決策略：
                      </p>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">資料基礎設施挑戰</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">常見問題</h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li className="flex items-start">
                                <XCircleIcon className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>資料孤島現象嚴重，各部門資料無法有效整合</span>
                              </li>
                              <li className="flex items-start">
                                <XCircleIcon className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>資料格式不統一，ETL處理複雜度高</span>
                              </li>
                              <li className="flex items-start">
                                <XCircleIcon className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>即時資料處理能力不足</span>
                              </li>
                              <li className="flex items-start">
                                <XCircleIcon className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>資料品質監控機制缺失</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-800 mb-3">解決策略</h4>
                            <ul className="space-y-2 text-green-700 text-sm">
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>建立統一的資料湖或資料倉庫</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>制定資料標準化規範和治理政策</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>導入資料管道自動化工具</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>建立資料品質監控和預警系統</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">系統整合與相容性</h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
                              <div className="text-sm text-blue-700">企業需要系統升級</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-orange-600 mb-2">6個月</div>
                              <div className="text-sm text-orange-700">平均整合時間</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg">
                              <div className="text-2xl font-bold text-green-600 mb-2">40%</div>
                              <div className="text-sm text-green-700">額外技術投資</div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-3">最佳實務建議</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <h5 className="font-medium mb-2">技術架構：</h5>
                                <ul className="space-y-1 text-blue-700">
                                  <li>• 採用微服務架構設計</li>
                                  <li>• 建立API優先的整合策略</li>
                                  <li>• 使用容器化部署</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium mb-2">風險控管：</h5>
                                <ul className="space-y-1 text-blue-700">
                                  <li>• 階段性測試和驗證</li>
                                  <li>• 建立回滾機制</li>
                                  <li>• 持續監控系統效能</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Organizational Challenges */}
                <section id="organizational-challenges" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <UserGroupIcon className="w-8 h-8 text-green-600 mr-3" />
                      組織層面挑戰
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        組織挑戰往往比技術問題更加複雜，涉及人員、文化、流程等多個層面。
                        成功的AI導入需要全方位的組織變革策略。
                      </p>

                      <div className="space-y-6">
                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                            <AcademicCapIcon className="w-6 h-6 mr-2" />
                            人才與技能挑戰
                          </h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-yellow-800 mb-3">技能缺口分析</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-yellow-700">AI基礎知識</span>
                                  <div className="w-24 bg-yellow-200 rounded-full h-2">
                                    <div className="bg-yellow-600 h-2 rounded-full w-20"></div>
                                  </div>
                                  <span className="text-sm font-medium text-yellow-800">83%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-yellow-700">資料分析能力</span>
                                  <div className="w-24 bg-yellow-200 rounded-full h-2">
                                    <div className="bg-yellow-600 h-2 rounded-full w-18"></div>
                                  </div>
                                  <span className="text-sm font-medium text-yellow-800">75%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-yellow-700">變革管理</span>
                                  <div className="w-24 bg-yellow-200 rounded-full h-2">
                                    <div className="bg-yellow-600 h-2 rounded-full w-16"></div>
                                  </div>
                                  <span className="text-sm font-medium text-yellow-800">67%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-yellow-700">技術整合</span>
                                  <div className="w-24 bg-yellow-200 rounded-full h-2">
                                    <div className="bg-yellow-600 h-2 rounded-full w-14"></div>
                                  </div>
                                  <span className="text-sm font-medium text-yellow-800">58%</span>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-green-800 mb-3">人才培養策略</h4>
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span><strong>分層培訓</strong>：管理層、技術人員、一般員工</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span><strong>外部合作</strong>：與AI專業公司建立夥伴關係</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span><strong>實作學習</strong>：透過實際專案累積經驗</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span><strong>持續教育</strong>：建立長期學習機制</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                            <ShieldCheckIcon className="w-6 h-6 mr-2" />
                            變革阻力管理
                          </h3>
                          
                          <div className="space-y-4">
                            <p className="text-red-800">
                              員工對AI的恐懼和抗拒是最大的組織挑戰之一。有效的變革管理策略包括：
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="bg-white p-4 rounded-lg">
                                <h4 className="font-semibold text-red-800 mb-2">溝通策略</h4>
                                <ul className="text-red-700 text-sm space-y-1">
                                  <li>• 透明的資訊分享</li>
                                  <li>• 定期進度更新</li>
                                  <li>• 雙向溝通管道</li>
                                  <li>• 成功案例宣傳</li>
                                </ul>
                              </div>
                              <div className="bg-white p-4 rounded-lg">
                                <h4 className="font-semibold text-red-800 mb-2">參與機制</h4>
                                <ul className="text-red-700 text-sm space-y-1">
                                  <li>• 員工意見徵詢</li>
                                  <li>• 跨部門工作小組</li>
                                  <li>• 試點專案參與</li>
                                  <li>• 回饋機制建立</li>
                                </ul>
                              </div>
                              <div className="bg-white p-4 rounded-lg">
                                <h4 className="font-semibold text-red-800 mb-2">激勵措施</h4>
                                <ul className="text-red-700 text-sm space-y-1">
                                  <li>• 技能提升獎勵</li>
                                  <li>• 職涯發展機會</li>
                                  <li>• 創新提案獎勵</li>
                                  <li>• 團隊成就認可</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Financial Challenges */}
                <section id="financial-challenges" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CurrencyDollarIcon className="w-8 h-8 text-yellow-600 mr-3" />
                      財務投資挑戰
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        財務方面的挑戰不僅在於投資金額，更在於如何正確評估投資回報和控制風險。
                        以下提供完整的財務規劃指引：
                      </p>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">投資成本結構分析</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-green-800 mb-3">一次性投資</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-sm text-green-700">軟體授權費用</span>
                                <span className="font-medium text-green-800">25-35%</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-sm text-green-700">硬體設備升級</span>
                                <span className="font-medium text-green-800">20-30%</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-sm text-green-700">系統整合費用</span>
                                <span className="font-medium text-green-800">15-25%</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-sm text-green-700">初期培訓成本</span>
                                <span className="font-medium text-green-800">10-15%</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-green-800 mb-3">持續性成本</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-sm text-green-700">年度維護費用</span>
                                <span className="font-medium text-green-800">15-20%</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-sm text-green-700">雲端服務費用</span>
                                <span className="font-medium text-green-800">10-25%</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-sm text-green-700">人員薪資成本</span>
                                <span className="font-medium text-green-800">25-40%</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-sm text-green-700">持續改進費用</span>
                                <span className="font-medium text-green-800">5-10%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">ROI評估框架</h3>
                        
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-white rounded-lg">
                              <ChartBarIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-blue-600 mb-1">18個月</div>
                              <div className="text-sm text-blue-700">平均回收期</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg">
                              <BoltIcon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-green-600 mb-1">237%</div>
                              <div className="text-sm text-green-700">3年期ROI</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-lg">
                              <SparklesIcon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-purple-600 mb-1">45%</div>
                              <div className="text-sm text-purple-700">效率提升</div>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-3">效益計算方法</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <h5 className="font-medium mb-2 text-blue-700">量化效益：</h5>
                                <ul className="space-y-1 text-blue-600">
                                  <li>• 人力成本節省</li>
                                  <li>• 作業時間縮短</li>
                                  <li>• 錯誤率降低</li>
                                  <li>• 處理量增加</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-medium mb-2 text-blue-700">質化效益：</h5>
                                <ul className="space-y-1 text-blue-600">
                                  <li>• 客戶滿意度提升</li>
                                  <li>• 員工工作品質改善</li>
                                  <li>• 企業形象提升</li>
                                  <li>• 競爭優勢建立</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Solution Framework */}
                <section id="solution-framework" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircleIcon className="w-8 h-8 text-green-600 mr-3" />
                      系統性解決框架
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        基於對常見障礙的深入分析，我們開發了一套系統性的解決框架，
                        幫助企業有效克服AI導入過程中的各種挑戰：
                      </p>

                      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">AIRAI解決框架 (SMART)</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                              S
                            </div>
                            <h4 className="font-semibold text-blue-900 mb-2">Strategy</h4>
                            <p className="text-sm text-blue-700">策略制定</p>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                              M
                            </div>
                            <h4 className="font-semibold text-green-900 mb-2">Management</h4>
                            <p className="text-sm text-green-700">變革管理</p>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                              A
                            </div>
                            <h4 className="font-semibold text-yellow-900 mb-2">Architecture</h4>
                            <p className="text-sm text-yellow-700">技術架構</p>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                              R
                            </div>
                            <h4 className="font-semibold text-purple-900 mb-2">Resources</h4>
                            <p className="text-sm text-purple-700">資源配置</p>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                              T
                            </div>
                            <h4 className="font-semibold text-red-900 mb-2">Training</h4>
                            <p className="text-sm text-red-700">培訓發展</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="border border-gray-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 font-bold">1</div>
                            策略制定階段 (Strategy)
                          </h3>
                          <div className="ml-11 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">核心任務</h4>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                  <li>• 現況評估與差距分析</li>
                                  <li>• AI應用場景識別</li>
                                  <li>• 投資回報率預估</li>
                                  <li>• 風險評估與控管</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">關鍵產出</h4>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                  <li>• AI策略藍圖</li>
                                  <li>• 專案優先順序</li>
                                  <li>• 投資預算規劃</li>
                                  <li>• 成功衡量指標</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-bold">2</div>
                            變革管理階段 (Management)
                          </h3>
                          <div className="ml-11 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">組織準備</h4>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                  <li>• 領導層承諾與支持</li>
                                  <li>• 專案團隊組建</li>
                                  <li>• 溝通計劃制定</li>
                                  <li>• 變革阻力管理</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">文化建設</h4>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                  <li>• 創新文化培養</li>
                                  <li>• 學習型組織建立</li>
                                  <li>• 績效評估調整</li>
                                  <li>• 激勵機制設計</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-yellow-900 mb-4 flex items-center">
                            <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center mr-3 font-bold">3</div>
                            技術架構階段 (Architecture)
                          </h3>
                          <div className="ml-11 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">基礎建設</h4>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                  <li>• 資料基礎設施規劃</li>
                                  <li>• 雲端架構設計</li>
                                  <li>• 安全機制建立</li>
                                  <li>• 整合介面開發</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-2">技術選型</h4>
                                <ul className="space-y-1 text-gray-700 text-sm">
                                  <li>• AI平台評估</li>
                                  <li>• 工具選擇</li>
                                  <li>• 供應商篩選</li>
                                  <li>• 技術驗證</li>
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
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ArrowRightIcon className="w-8 h-8 text-blue-600 mr-3" />
                      實施路線圖
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        成功的AI導入需要清晰的實施路線圖。以下提供一個經過驗證的12個月導入計劃：
                      </p>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">12個月AI導入時程表</h3>
                        
                        <div className="space-y-6">
                          {/* Phase 1 */}
                          <div className="border-l-4 border-blue-500 pl-6">
                            <h4 className="text-lg font-bold text-blue-900 mb-2">第1-3個月：基礎準備期</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-blue-800 mb-2">第1個月</h5>
                                <ul className="text-blue-700 text-sm space-y-1">
                                  <li>• 現況評估</li>
                                  <li>• 策略規劃</li>
                                  <li>• 團隊組建</li>
                                  <li>• 預算確認</li>
                                </ul>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-blue-800 mb-2">第2個月</h5>
                                <ul className="text-blue-700 text-sm space-y-1">
                                  <li>• 技術選型</li>
                                  <li>• 供應商評估</li>
                                  <li>• 架構設計</li>
                                  <li>• 風險評估</li>
                                </ul>
                              </div>
                              <div className="bg-blue-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-blue-800 mb-2">第3個月</h5>
                                <ul className="text-blue-700 text-sm space-y-1">
                                  <li>• 資料準備</li>
                                  <li>• 基礎建設</li>
                                  <li>• 培訓規劃</li>
                                  <li>• 試點設計</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Phase 2 */}
                          <div className="border-l-4 border-green-500 pl-6">
                            <h4 className="text-lg font-bold text-green-900 mb-2">第4-8個月：試點實施期</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-green-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-green-800 mb-2">第4-5個月</h5>
                                <ul className="text-green-700 text-sm space-y-1">
                                  <li>• 系統部署</li>
                                  <li>• 資料整合</li>
                                  <li>• 初步測試</li>
                                  <li>• 團隊培訓</li>
                                </ul>
                              </div>
                              <div className="bg-green-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-green-800 mb-2">第6-8個月</h5>
                                <ul className="text-green-700 text-sm space-y-1">
                                  <li>• 試點運行</li>
                                  <li>• 效果監控</li>
                                  <li>• 問題修正</li>
                                  <li>• 經驗總結</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Phase 3 */}
                          <div className="border-l-4 border-purple-500 pl-6">
                            <h4 className="text-lg font-bold text-purple-900 mb-2">第9-12個月：全面推展期</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-purple-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-purple-800 mb-2">第9-10個月</h5>
                                <ul className="text-purple-700 text-sm space-y-1">
                                  <li>• 規模化部署</li>
                                  <li>• 流程整合</li>
                                  <li>• 全員培訓</li>
                                  <li>• 制度建立</li>
                                </ul>
                              </div>
                              <div className="bg-purple-50 p-4 rounded-lg">
                                <h5 className="font-semibold text-purple-800 mb-2">第11-12個月</h5>
                                <ul className="text-purple-700 text-sm space-y-1">
                                  <li>• 效益評估</li>
                                  <li>• 持續改進</li>
                                  <li>• 下期規劃</li>
                                  <li>• 經驗傳承</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-yellow-900 mb-4">關鍵里程碑檢查點</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-yellow-600 mb-1">月末</div>
                            <div className="text-sm text-yellow-700">策略確認</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-yellow-600 mb-1">3月末</div>
                            <div className="text-sm text-yellow-700">準備完成</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-yellow-600 mb-1">8月末</div>
                            <div className="text-sm text-yellow-700">試點驗證</div>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-yellow-600 mb-1">12月末</div>
                            <div className="text-sm text-yellow-700">全面上線</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Success Factors */}
                <section id="success-factors" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <SparklesIcon className="w-8 h-8 text-purple-600 mr-3" />
                      成功關鍵因素
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        基於200+家企業的成功經驗，我們總結出AI導入成功的關鍵因素。
                        掌握這些要素將大幅提升您的專案成功率：
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                            <CheckCircleIcon className="w-6 h-6 mr-2" />
                            成功企業的共同特徵
                          </h3>
                          <ul className="space-y-3 text-green-800">
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>明確的策略目標</strong><br/>
                                <span className="text-sm text-green-700">有清晰的AI應用願景和可衡量的成功指標</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>高層全力支持</strong><br/>
                                <span className="text-sm text-green-700">CEO或高階主管親自參與和推動</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>段階性實施</strong><br/>
                                <span className="text-sm text-green-700">從小規模試點開始，逐步擴大應用範圍</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>重視資料品質</strong><br/>
                                <span className="text-sm text-green-700">投入足夠資源確保資料的完整性和準確性</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>持續學習文化</strong><br/>
                                <span className="text-sm text-green-700">建立學習型組織，鼓勵創新和試錯</span>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                            <XCircleIcon className="w-6 h-6 mr-2" />
                            失敗企業的常見錯誤
                          </h3>
                          <ul className="space-y-3 text-red-800">
                            <li className="flex items-start">
                              <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>缺乏明確目標</strong><br/>
                                <span className="text-sm text-red-700">盲目跟風，沒有結合自身業務需求</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>低估複雜度</strong><br/>
                                <span className="text-sm text-red-700">過分樂觀，低估技術整合的難度</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>忽視變革管理</strong><br/>
                                <span className="text-sm text-red-700">只關注技術，忽視組織和人員的適應</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>資料準備不足</strong><br/>
                                <span className="text-sm text-red-700">急於求成，忽視資料基礎建設</span>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <XCircleIcon className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <strong>缺乏持續投入</strong><br/>
                                <span className="text-sm text-red-700">期望立即見效，缺乏長期承諾</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold mb-4">準備開始您的AI轉型之旅？</h3>
                          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            避開常見陷阱，運用成功經驗，讓AIRAI專家團隊協助您順利完成AI導入
                          </p>
                          <div className="flex flex-wrap justify-center gap-4">
                            <a 
                              href="/contact" 
                              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                            >
                              <BuildingOfficeIcon className="w-5 h-5 mr-2" />
                              免費專家諮詢
                              <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </a>
                            <a 
                              href="/resources/tools/1" 
                              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
                            >
                              立即評估需求
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