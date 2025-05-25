'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  CurrencyDollarIcon,
  CpuChipIcon,
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
  CogIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  SparklesIcon,
  EyeIcon,
  RocketLaunchIcon,
  CalculatorIcon,
  BanknotesIcon,
  TrophyIcon,
  ShieldCheckIcon,
  PlayIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

export default function SmallBusinessAIArticle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', title: '小企業AI挑戰與機會', icon: LightBulbIcon },
    { id: 'cost-analysis', title: '成本結構分析', icon: CurrencyDollarIcon },
    { id: 'budget-planning', title: '預算規劃策略', icon: CalculatorIcon },
    { id: 'phased-approach', title: '分階段導入方法', icon: PlayIcon },
    { id: 'cost-optimization', title: '成本優化技巧', icon: BanknotesIcon },
    { id: 'roi-maximization', title: 'ROI最大化策略', icon: TrophyIcon },
    { id: 'action-plan', title: '實用行動計劃', icon: DocumentTextIcon }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <CurrencyDollarIcon className="w-12 h-12 text-orange-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                小型企業AI導入成本控制策略
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              針對預算有限的小型企業，提供實用的AI導入成本控制方法與循序漸進的實施策略
            </p>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：10分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>成本控制・小型企業・AI策略</span>
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-4 h-4 mr-1" />
                <span>王顧問</span>
              </div>
              <div className="flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                <span>2024-05-15</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200">
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
                      小企業AI挑戰與機會
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        許多小型企業主認為AI是大企業的專利，但實際上，透過適當的策略規劃與成本控制，
                        小企業同樣可以享受AI帶來的效益。關鍵在於選擇合適的技術方案與循序漸進的導入策略。
                      </p>
                      
                      <p>
                        根據我們的統計，台灣小型企業（50人以下）在AI導入上最關心的前三大問題是：
                        成本負擔（78%）、技術門檻（65%）、效益不確定（52%）。
                      </p>

                      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-6">
                        <h4 className="font-semibold text-orange-900 mb-3">💡 小企業AI導入優勢</h4>
                        <ul className="space-y-2 text-orange-800">
                          <li>• <strong>靈活決策：</strong>決策鏈短，能快速調整方向</li>
                          <li>• <strong>聚焦效應：</strong>專注核心業務，AI應用更精準</li>
                          <li>• <strong>成本敏感：</strong>追求最佳投資效益比</li>
                          <li>• <strong>創新動機：</strong>透過AI提升競爭力</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">📊 台灣小企業AI現況</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-gray-800 mb-2">導入意願</h5>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• 計劃導入：45%</li>
                              <li>• 正在評估：32%</li>
                              <li>• 已開始試點：18%</li>
                              <li>• 全面應用：5%</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-2">主要障礙</h5>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• 預算限制：78%</li>
                              <li>• 技術能力：65%</li>
                              <li>• 不確定效益：52%</li>
                              <li>• 資安疑慮：41%</li>
                            </ul>
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
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CurrencyDollarIcon className="w-8 h-8 text-green-600 mr-3" />
                      成本結構分析
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        了解AI專案的完整成本結構，是制定有效預算策略的第一步。
                        小企業AI導入成本可分為一次性投資與持續營運成本。
                      </p>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">成本組成分析</h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">一次性投資（初期）</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-green-700 mb-2">技術建置</h5>
                                <ul className="text-green-600 text-sm space-y-1">
                                  <li>• 軟體授權費用：NT$ 5-20萬</li>
                                  <li>• 硬體設備：NT$ 10-50萬</li>
                                  <li>• 系統整合：NT$ 15-30萬</li>
                                  <li>• 資料準備：NT$ 5-15萬</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-green-700 mb-2">人員培訓</h5>
                                <ul className="text-green-600 text-sm space-y-1">
                                  <li>• 內部培訓：NT$ 3-8萬</li>
                                  <li>• 外部課程：NT$ 5-12萬</li>
                                  <li>• 顧問諮詢：NT$ 8-15萬</li>
                                  <li>• 學習時間成本：NT$ 10-20萬</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">持續營運成本（年度）</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-green-700 mb-2">技術維護</h5>
                                <ul className="text-green-600 text-sm space-y-1">
                                  <li>• 軟體維護費：NT$ 8-15萬/年</li>
                                  <li>• 雲端服務費：NT$ 6-20萬/年</li>
                                  <li>• 系統更新：NT$ 5-10萬/年</li>
                                  <li>• 技術支援：NT$ 10-18萬/年</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-green-700 mb-2">人力成本</h5>
                                <ul className="text-green-600 text-sm space-y-1">
                                  <li>• AI專責人員：NT$ 60-120萬/年</li>
                                  <li>• 持續培訓：NT$ 5-10萬/年</li>
                                  <li>• 外包服務：NT$ 15-30萬/年</li>
                                  <li>• 管理成本：NT$ 8-15萬/年</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                          <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                            隱藏成本提醒
                          </h4>
                          <ul className="text-yellow-800 text-sm space-y-1">
                            <li>• <strong>資料準備：</strong>資料清理與標註通常佔總成本20-30%</li>
                            <li>• <strong>試錯成本：</strong>預留10-15%預算處理實驗失敗</li>
                            <li>• <strong>整合複雜度：</strong>與現有系統整合可能增加50%成本</li>
                            <li>• <strong>變革管理：</strong>員工適應期的生產力下降成本</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Budget Planning */}
                <section id="budget-planning" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CalculatorIcon className="w-8 h-8 text-blue-600 mr-3" />
                      預算規劃策略
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        小企業的預算規劃需要更加謹慎精準。我們建議採用80/20法則，
                        將80%預算用於驗證效果明確的應用，20%用於創新實驗。
                      </p>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">預算分配策略</h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-3">三層預算模型</h4>
                            <div className="space-y-4">
                              <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  1
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-blue-800">基礎預算（50%）</div>
                                  <div className="text-blue-700 text-sm">必要的基礎建設與核心應用</div>
                                </div>
                                <div className="text-blue-600 font-semibold">NT$ 25-50萬</div>
                              </div>
                              <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  2
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-blue-800">擴展預算（30%）</div>
                                  <div className="text-blue-700 text-sm">功能擴展與效能優化</div>
                                </div>
                                <div className="text-blue-600 font-semibold">NT$ 15-30萬</div>
                              </div>
                              <div className="flex items-center p-3 bg-blue-100 rounded-lg">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  3
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-blue-800">創新預算（20%）</div>
                                  <div className="text-blue-700 text-sm">新技術試驗與探索</div>
                                </div>
                                <div className="text-blue-600 font-semibold">NT$ 10-20萬</div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-3">年度預算範例</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-blue-700">小型企業（10-20人）</span>
                                  <span className="font-medium text-blue-800">NT$ 50-100萬</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-blue-700">中小企業（20-50人）</span>
                                  <span className="font-medium text-blue-800">NT$ 100-200萬</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-blue-700">占年營收比例</span>
                                  <span className="font-medium text-blue-800">0.5-2%</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-3">資金來源規劃</h4>
                              <ul className="space-y-2 text-blue-700 text-sm">
                                <li>• 自有資金：60-70%</li>
                                <li>• 政府補助：15-25%</li>
                                <li>• 銀行貸款：10-15%</li>
                                <li>• 合作夥伴：5-10%</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">政府補助資源</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2">中央政府</h4>
                            <ul className="text-green-700 text-sm space-y-1">
                              <li>• 數位轉型補助：最高50萬</li>
                              <li>• 中小企業處CITD：最高200萬</li>
                              <li>• 創新研發補助：最高1000萬</li>
                              <li>• 智慧機械補助：最高500萬</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2">地方政府</h4>
                            <ul className="text-green-700 text-sm space-y-1">
                              <li>• 台北市：數位轉型補助</li>
                              <li>• 新北市：智慧城市計畫</li>
                              <li>• 台中市：產業升級補助</li>
                              <li>• 高雄市：AI應用獎勵</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Phased Approach */}
                <section id="phased-approach" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <PlayIcon className="w-8 h-8 text-purple-600 mr-3" />
                      分階段導入方法
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        分階段導入是小企業控制風險與成本的最佳策略。
                        每個階段都有明確的目標與預算控制，確保投資效益最大化。
                      </p>

                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">三階段導入計劃</h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-800 mb-3">第一階段：探索驗證（3-6個月）</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">主要任務</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• 選擇1-2個簡單應用場景</li>
                                  <li>• 使用現成SaaS解決方案</li>
                                  <li>• 內部團隊基礎培訓</li>
                                  <li>• 建立初步評估指標</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">預算配置</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• 總預算：NT$ 10-25萬</li>
                                  <li>• 軟體訂閱：40%</li>
                                  <li>• 培訓費用：30%</li>
                                  <li>• 顧問支援：30%</li>
                                </ul>
                              </div>
                            </div>
                            <div className="mt-3 p-3 bg-purple-100 rounded-lg">
                              <div className="text-sm text-purple-800">
                                <strong>成功指標：</strong>選定應用場景效率提升15%以上，團隊接受度超過70%
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-800 mb-3">第二階段：擴展應用（6-12個月）</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">主要任務</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• 擴展到3-5個應用場景</li>
                                  <li>• 建立資料管理制度</li>
                                  <li>• 深化團隊技能培養</li>
                                  <li>• 建立績效追蹤機制</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">預算配置</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• 總預算：NT$ 25-50萬</li>
                                  <li>• 技術投資：50%</li>
                                  <li>• 人員培訓：25%</li>
                                  <li>• 系統整合：25%</li>
                                </ul>
                              </div>
                            </div>
                            <div className="mt-3 p-3 bg-purple-100 rounded-lg">
                              <div className="text-sm text-purple-800">
                                <strong>成功指標：</strong>整體營運效率提升25%，ROI達到150%以上
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-800 mb-3">第三階段：深度整合（12-24個月）</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">主要任務</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• 建立企業AI能力中心</li>
                                  <li>• 開發客製化解決方案</li>
                                  <li>• 與上下游夥伴整合</li>
                                  <li>• 建立AI驅動創新機制</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">預算配置</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• 總預算：NT$ 50-100萬</li>
                                  <li>• 技術升級：40%</li>
                                  <li>• 人才招募：35%</li>
                                  <li>• 創新專案：25%</li>
                                </ul>
                              </div>
                            </div>
                            <div className="mt-3 p-3 bg-purple-100 rounded-lg">
                              <div className="text-sm text-purple-800">
                                <strong>成功指標：</strong>建立差異化競爭優勢，累計ROI達到300%以上
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Cost Optimization */}
                <section id="cost-optimization" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <BanknotesIcon className="w-8 h-8 text-emerald-600 mr-3" />
                      成本優化技巧
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        透過聰明的資源配置與技術選擇，小企業可以在有限預算下獲得最大效益。
                        以下是我們總結的成本優化實用技巧：
                      </p>

                      <div className="space-y-6">
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-emerald-900 mb-4">技術選擇優化</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-emerald-200">
                              <h4 className="font-semibold text-emerald-800 mb-3">雲端優先策略</h4>
                              <ul className="space-y-2 text-emerald-700 text-sm">
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>避免大筆硬體投資</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>按需付費模式</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>自動備份與維護</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>快速擴展能力</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-emerald-200">
                              <h4 className="font-semibold text-emerald-800 mb-3">開源技術運用</h4>
                              <ul className="space-y-2 text-emerald-700 text-sm">
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>免授權費用</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>社群支援豐富</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>客製化彈性高</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>技術成熟穩定</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">資源共享模式</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                              <UserGroupIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                              <h4 className="font-semibold text-blue-800 mb-2">產業聯盟</h4>
                              <p className="text-blue-700 text-sm">
                                與同業共同採購與開發，分攤成本
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                              <BuildingOfficeIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                              <h4 className="font-semibold text-blue-800 mb-2">技術夥伴</h4>
                              <p className="text-blue-700 text-sm">
                                與技術服務商建立策略合作關係
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                              <CogIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                              <h4 className="font-semibold text-blue-800 mb-2">外包服務</h4>
                              <p className="text-blue-700 text-sm">
                                將非核心功能外包給專業團隊
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-yellow-900 mb-4">實用節省技巧</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-yellow-800 mb-3">短期優化</h4>
                              <ul className="space-y-2 text-yellow-700 text-sm">
                                <li>• 選擇免費/低成本AI工具開始</li>
                                <li>• 利用現有員工兼職學習</li>
                                <li>• 參與政府免費培訓課程</li>
                                <li>• 使用開源軟體與工具</li>
                                <li>• 與學術機構合作研發</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-yellow-800 mb-3">長期規劃</h4>
                              <ul className="space-y-2 text-yellow-700 text-sm">
                                <li>• 建立內部AI人才培養機制</li>
                                <li>• 發展可重複使用的AI資產</li>
                                <li>• 建立數據資產價值最大化</li>
                                <li>• 與供應鏈夥伴共享AI能力</li>
                                <li>• 開發AI服務對外提供</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* ROI Maximization */}
                <section id="roi-maximization" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <TrophyIcon className="w-8 h-8 text-amber-600 mr-3" />
                      ROI最大化策略
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        小企業必須確保每一分投資都能產生最大效益。透過精準的應用選擇與效益測量，
                        可以達到遠超預期的投資回報率。
                      </p>

                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-amber-900 mb-4">高ROI應用領域</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-800 mb-3">客戶服務自動化</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">投資成本</span>
                                <span className="font-medium text-amber-800">NT$ 8-15萬</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">年度節省</span>
                                <span className="font-medium text-green-600">NT$ 25-40萬</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">預期ROI</span>
                                <span className="font-medium text-green-600">200-300%</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-800 mb-3">行政流程自動化</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">投資成本</span>
                                <span className="font-medium text-amber-800">NT$ 10-20萬</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">年度節省</span>
                                <span className="font-medium text-green-600">NT$ 30-50萬</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">預期ROI</span>
                                <span className="font-medium text-green-600">180-250%</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-800 mb-3">銷售預測分析</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">投資成本</span>
                                <span className="font-medium text-amber-800">NT$ 12-25萬</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">年度收益</span>
                                <span className="font-medium text-green-600">NT$ 40-80萬</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">預期ROI</span>
                                <span className="font-medium text-green-600">220-320%</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-800 mb-3">庫存管理優化</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">投資成本</span>
                                <span className="font-medium text-amber-800">NT$ 15-30萬</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">年度節省</span>
                                <span className="font-medium text-green-600">NT$ 35-70萬</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-amber-700">預期ROI</span>
                                <span className="font-medium text-green-600">150-230%</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-white p-4 rounded-lg border border-amber-200">
                          <h4 className="font-semibold text-amber-800 mb-3">ROI計算公式</h4>
                          <div className="bg-amber-100 p-4 rounded-lg">
                            <div className="text-center">
                              <div className="text-lg font-bold text-amber-900 mb-2">
                                ROI = (收益 - 投資成本) ÷ 投資成本 × 100%
                              </div>
                              <div className="text-sm text-amber-800">
                                收益 = 成本節省 + 收入增加 + 效率提升價值
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">效益評估框架</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2">量化效益</h4>
                            <ul className="text-green-700 text-sm space-y-1">
                              <li>• 人力成本節省</li>
                              <li>• 時間效率提升</li>
                              <li>• 錯誤率降低</li>
                              <li>• 收入增長</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2">定性效益</h4>
                            <ul className="text-green-700 text-sm space-y-1">
                              <li>• 客戶滿意度</li>
                              <li>• 員工滿意度</li>
                              <li>• 品牌形象</li>
                              <li>• 競爭優勢</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2">長期價值</h4>
                            <ul className="text-green-700 text-sm space-y-1">
                              <li>• 數據資產價值</li>
                              <li>• 組織學習能力</li>
                              <li>• 創新機會增加</li>
                              <li>• 市場適應力</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Action Plan */}
                <section id="action-plan" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <DocumentTextIcon className="w-8 h-8 text-indigo-600 mr-3" />
                      實用行動計劃
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        為了幫助小企業立即開始AI導入旅程，我們提供以下可執行的行動計劃：
                      </p>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-indigo-900 mb-4">30-60-90天行動計劃</h3>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-3">第1-30天：評估準備</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-indigo-700 mb-2">內部評估</h5>
                                <ul className="text-indigo-600 text-sm space-y-1">
                                  <li>• 業務流程盤點</li>
                                  <li>• 資料現況調查</li>
                                  <li>• 團隊技能評估</li>
                                  <li>• 預算規劃確認</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-indigo-700 mb-2">外部調研</h5>
                                <ul className="text-indigo-600 text-sm space-y-1">
                                  <li>• 市場解決方案調查</li>
                                  <li>• 競爭對手分析</li>
                                  <li>• 供應商評估</li>
                                  <li>• 補助資源申請</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-3">第31-60天：試點啟動</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-indigo-700 mb-2">技術實施</h5>
                                <ul className="text-indigo-600 text-sm space-y-1">
                                  <li>• 選定第一個應用場景</li>
                                  <li>• 工具採購與配置</li>
                                  <li>• 資料準備與清理</li>
                                  <li>• 基本功能測試</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-indigo-700 mb-2">組織準備</h5>
                                <ul className="text-indigo-600 text-sm space-y-1">
                                  <li>• 團隊培訓執行</li>
                                  <li>• 工作流程調整</li>
                                  <li>• 溝通機制建立</li>
                                  <li>• 評估指標設定</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-3">第61-90天：優化擴展</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-indigo-700 mb-2">效果評估</h5>
                                <ul className="text-indigo-600 text-sm space-y-1">
                                  <li>• 數據收集與分析</li>
                                  <li>• ROI初步計算</li>
                                  <li>• 問題識別與改善</li>
                                  <li>• 用戶回饋整合</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-indigo-700 mb-2">規劃擴展</h5>
                                <ul className="text-indigo-600 text-sm space-y-1">
                                  <li>• 下階段應用規劃</li>
                                  <li>• 預算調整與申請</li>
                                  <li>• 技術升級評估</li>
                                  <li>• 長期策略調整</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">實用工具清單</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">評估工具</h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>• AI需求評估問卷</li>
                              <li>• ROI計算試算表</li>
                              <li>• 風險評估矩陣</li>
                              <li>• 供應商比較表</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">實施工具</h4>
                            <ul className="space-y-2 text-gray-700 text-sm">
                              <li>• 專案管理範本</li>
                              <li>• 培訓計劃模板</li>
                              <li>• 績效追蹤儀表板</li>
                              <li>• 變革管理指南</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl p-8">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold mb-4">準備開始您的AI轉型之旅？</h3>
                          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                            我們提供免費的AI需求評估服務，幫助您制定最適合的成本控制策略
                          </p>
                          <div className="flex flex-wrap justify-center gap-4">
                            <a 
                              href="/contact" 
                              className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                            >
                              <CalculatorIcon className="w-5 h-5 mr-2" />
                              免費評估諮詢
                              <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </a>
                            <a 
                              href="/resources/tools" 
                              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors duration-200"
                            >
                              <DocumentTextIcon className="w-5 h-5 mr-2" />
                              下載工具包
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