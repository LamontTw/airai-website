'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  BuildingOfficeIcon,
  LightBulbIcon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

export default function OpenAIEnterpriseAIArticle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', title: '前言：企業AI的新時代', icon: LightBulbIcon },
    { id: 'openai-vision', title: 'OpenAI的企業AI願景', icon: BuildingOfficeIcon },
    { id: 'key-insights', title: '關鍵洞察與觀點', icon: ChartBarIcon },
    { id: 'implementation', title: '企業實施策略', icon: CogIcon },
    { id: 'challenges', title: '挑戰與解決方案', icon: ExclamationTriangleIcon },
    { id: 'future-outlook', title: '未來展望', icon: RocketLaunchIcon },
    { id: 'taiwan-perspective', title: '台灣企業的機會', icon: UserGroupIcon }
  ];

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
              <BuildingOfficeIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                OpenAI企業AI觀點深度解析
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              解讀OpenAI對企業AI應用的前瞻觀點，探索AI如何重塑企業競爭力
            </p>

            {/* TL;DR - GEO 優化 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-left">
              <p className="sr-only">摘要 TL;DR</p>
              <p className="text-sm text-blue-800 leading-relaxed">
                OpenAI 認為企業 AI 導入的關鍵在於從小規模試點開始、建立數據治理框架、持續教育訓練員工。預測 2025 年 70% 企業將導入基礎 AI 應用，2030 年 AI 將成為企業標準配備。台灣企業可善用製造業優勢，從智慧製造與客服自動化切入。
              </p>
            </div>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：15分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>企業AI・OpenAI・數位轉型</span>
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-4 h-4 mr-1" />
                <span>作者：AIRAI研究團隊</span>
              </div>
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
                          ? 'bg-blue-100 text-blue-700 font-medium'
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
                      前言：企業AI的新時代
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        2024年，OpenAI發布了其關於企業AI應用的重要觀點文章《AI in the Enterprise》，
                        為全球企業描繪了AI技術在商業環境中的應用藍圖。這篇文章不僅反映了AI技術的最新發展趨勢，
                        更為企業制定AI策略提供了重要的指導原則。
                      </p>
                      
                      <p>
                        作為台灣領先的AI導入專家，AIRAI深入分析了OpenAI的這些觀點，
                        並結合台灣企業的實際情況，為本地中小企業提供更具針對性的AI轉型建議。
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                        <h4 className="font-semibold text-blue-900 mb-3">📊 全球企業AI應用現況</h4>
                        <ul className="space-y-2 text-blue-800">
                          <li>• 85% 的企業認為AI是競爭優勢的關鍵</li>
                          <li>• 74% 的CEO將AI列為未來三年的投資重點</li>
                          <li>• 平均ROI達到337%（成功導入的企業）</li>
                          <li>• 67% 的企業面臨AI人才短缺問題</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* OpenAI Vision */}
                <section id="openai-vision" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <BuildingOfficeIcon className="w-8 h-8 text-blue-600 mr-3" />
                      OpenAI的企業AI願景
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <h3 className="text-xl font-bold text-gray-900">AI作為企業智能放大器</h3>
                      <p>
                        OpenAI認為，AI不應該被視為替代人類的工具，而是放大人類智能的強大助手。
                        在企業環境中，AI可以處理大量重複性工作，讓員工專注於更具創造性和策略性的任務。
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <CheckCircleIcon className="w-8 h-8 text-green-600 mb-4" />
                          <h4 className="font-semibold text-green-900 mb-3">AI的優勢領域</h4>
                          <ul className="space-y-2 text-green-800 text-sm">
                            <li>• 數據處理與分析</li>
                            <li>• 模式識別與預測</li>
                            <li>• 內容生成與編輯</li>
                            <li>• 客戶服務自動化</li>
                            <li>• 重複性任務處理</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <UserGroupIcon className="w-8 h-8 text-blue-600 mb-4" />
                          <h4 className="font-semibold text-blue-900 mb-3">人類的核心價值</h4>
                          <ul className="space-y-2 text-blue-800 text-sm">
                            <li>• 創意思考與創新</li>
                            <li>• 複雜決策制定</li>
                            <li>• 人際關係建立</li>
                            <li>• 策略規劃與願景</li>
                            <li>• 倫理判斷與價值觀</li>
                          </ul>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900">漸進式AI採用策略</h3>
                      <p>
                        OpenAI強調，成功的企業AI導入需要採用漸進式策略。企業應該從低風險、高價值的應用場景開始，
                        逐步建立AI能力和信心，再擴展到更複雜的應用領域。
                      </p>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 my-6">
                        <h4 className="font-semibold text-yellow-900 mb-3">🎯 OpenAI建議的導入順序</h4>
                        <ol className="space-y-3 text-yellow-800">
                          <li><strong>1. 內容與溝通</strong> - 文檔生成、郵件撰寫、翻譯</li>
                          <li><strong>2. 數據分析</strong> - 報表自動化、趨勢分析、預測</li>
                          <li><strong>3. 客戶服務</strong> - 智能客服、FAQ自動化</li>
                          <li><strong>4. 流程優化</strong> - 工作流自動化、決策支援</li>
                          <li><strong>5. 創新應用</strong> - 產品開發、市場策略</li>
                        </ol>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Key Insights */}
                <section id="key-insights" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ChartBarIcon className="w-8 h-8 text-purple-600 mr-3" />
                      關鍵洞察與觀點
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <h3 className="text-xl font-bold text-gray-900">1. 數據就是競爭優勢</h3>
                      <p>
                        OpenAI指出，擁有高品質數據的企業將在AI時代獲得顯著優勢。
                        企業需要建立系統性的數據管理策略，確保數據的完整性、準確性和可用性。
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-2">數據品質</div>
                          <div className="text-sm text-gray-600">準確、完整、及時的數據是AI成功的基礎</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-2">數據治理</div>
                          <div className="text-sm text-gray-600">建立數據標準化和管理流程</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-2">數據安全</div>
                          <div className="text-sm text-gray-600">確保數據隱私和合規要求</div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900">2. 人機協作的新模式</h3>
                      <p>
                        未來的工作場所將以人機協作為主要模式。AI處理例行任務，人類負責監督、創新和決策。
                        這種協作模式需要重新設計工作流程和組織架構。
                      </p>

                      <h3 className="text-xl font-bold text-gray-900">3. 持續學習與適應</h3>
                      <p>
                        AI技術發展迅速，企業需要建立持續學習的文化。這包括員工技能提升、
                        系統定期更新，以及對新AI應用的開放態度。
                      </p>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 my-6">
                        <h4 className="font-semibold text-indigo-900 mb-3">💡 OpenAI的核心建議</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-indigo-800 text-sm">
                          <div>
                            <h5 className="font-medium mb-2">技術層面：</h5>
                            <ul className="space-y-1">
                              <li>• 選擇成熟可靠的AI解決方案</li>
                              <li>• 建立可擴展的技術架構</li>
                              <li>• 重視數據安全和隱私保護</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">組織層面：</h5>
                            <ul className="space-y-1">
                              <li>• 培養AI素養和技能</li>
                              <li>• 建立跨部門協作機制</li>
                              <li>• 制定明確的AI治理政策</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Implementation */}
                <section id="implementation" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CogIcon className="w-8 h-8 text-green-600 mr-3" />
                      企業實施策略
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        基於OpenAI的觀點，結合AIRAI的實務經驗，我們為台灣企業整理了具體的AI實施策略：
                      </p>

                      <div className="space-y-8">
                        <div className="border border-gray-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold mr-4">
                              1
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">戰略規劃階段</h3>
                          </div>
                          <ul className="space-y-2 text-gray-600 ml-14">
                            <li>• <strong>業務目標對齊</strong>：確保AI投資與企業戰略目標一致</li>
                            <li>• <strong>現況評估</strong>：全面分析現有流程、數據和技術基礎</li>
                            <li>• <strong>優先順序排定</strong>：選擇最具影響力的AI應用場景</li>
                            <li>• <strong>投資預算規劃</strong>：制定合理的投資時程和預算分配</li>
                          </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-bold mr-4">
                              2
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">技術準備階段</h3>
                          </div>
                          <ul className="space-y-2 text-gray-600 ml-14">
                            <li>• <strong>基礎建設升級</strong>：確保IT基礎設施能支援AI應用</li>
                            <li>• <strong>數據整理</strong>：清理、標準化和整合企業數據</li>
                            <li>• <strong>安全機制</strong>：建立AI應用的安全和合規框架</li>
                            <li>• <strong>工具選擇</strong>：評估並選擇合適的AI平台和工具</li>
                          </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full font-bold mr-4">
                              3
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">試點實施階段</h3>
                          </div>
                          <ul className="space-y-2 text-gray-600 ml-14">
                            <li>• <strong>小規模測試</strong>：選擇低風險領域進行AI試點</li>
                            <li>• <strong>效果追蹤</strong>：建立量化指標監控AI效果</li>
                            <li>• <strong>用戶反馈</strong>：收集員工和客戶的使用體驗</li>
                            <li>• <strong>流程優化</strong>：根據試點結果調整實施策略</li>
                          </ul>
                        </div>

                        <div className="border border-gray-200 rounded-xl p-6">
                          <div className="flex items-center mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-orange-600 text-white rounded-full font-bold mr-4">
                              4
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">全面推展階段</h3>
                          </div>
                          <ul className="space-y-2 text-gray-600 ml-14">
                            <li>• <strong>範圍擴大</strong>：將成功的AI應用推廣到更多部門</li>
                            <li>• <strong>整合優化</strong>：整合不同AI系統，提升整體效率</li>
                            <li>• <strong>人才培養</strong>：培訓更多員工掌握AI工具使用</li>
                            <li>• <strong>持續創新</strong>：探索新的AI應用機會和技術</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Challenges */}
                <section id="challenges" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ExclamationTriangleIcon className="w-8 h-8 text-red-600 mr-3" />
                      挑戰與解決方案
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        OpenAI也誠實地指出了企業在AI導入過程中面臨的主要挑戰，並提供了相應的解決思路：
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h4 className="font-semibold text-red-900 mb-4 flex items-center">
                            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                            主要挑戰
                          </h4>
                          <ul className="space-y-3 text-red-800 text-sm">
                            <li>
                              <strong>技能差距</strong><br/>
                              員工缺乏AI相關知識和技能
                            </li>
                            <li>
                              <strong>數據品質</strong><br/>
                              企業數據分散、不標準、品質不一
                            </li>
                            <li>
                              <strong>投資回報不確定</strong><br/>
                              難以量化AI投資的具體效益
                            </li>
                            <li>
                              <strong>變革阻力</strong><br/>
                              員工對AI技術的恐懼和抗拒
                            </li>
                            <li>
                              <strong>安全與合規</strong><br/>
                              數據隱私和法規合規要求
                            </li>
                          </ul>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                            <CheckCircleIcon className="w-5 h-5 mr-2" />
                            解決方案
                          </h4>
                          <ul className="space-y-3 text-green-800 text-sm">
                            <li>
                              <strong>持續教育訓練</strong><br/>
                              建立系統性的AI素養培訓計劃
                            </li>
                            <li>
                              <strong>數據治理框架</strong><br/>
                              建立數據標準化和品質管理流程
                            </li>
                            <li>
                              <strong>段階性投資</strong><br/>
                              從小規模試點開始，逐步擴大投資
                            </li>
                            <li>
                              <strong>變革管理</strong><br/>
                              透明溝通，讓員工參與AI導入過程
                            </li>
                            <li>
                              <strong>專業諮詢</strong><br/>
                              與專業AI導入顧問合作
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
                        <h4 className="font-semibold text-blue-900 mb-3">🎯 AIRAI的實務建議</h4>
                        <p className="text-blue-800 mb-4">
                          基於我們在台灣市場的實務經驗，我們建議企業採用以下策略來克服AI導入挑戰：
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800 text-sm">
                          <div>
                            <h5 className="font-medium mb-2">短期策略（1-6個月）：</h5>
                            <ul className="space-y-1">
                              <li>• 選擇成熟的雲端AI服務</li>
                              <li>• 從客服或內容生成開始</li>
                              <li>• 建立基礎的數據收集機制</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">長期策略（6個月以上）：</h5>
                            <ul className="space-y-1">
                              <li>• 投資員工AI技能培訓</li>
                              <li>• 建立完整的數據治理體系</li>
                              <li>• 發展客製化AI解決方案</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Future Outlook */}
                <section id="future-outlook" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <RocketLaunchIcon className="w-8 h-8 text-purple-600 mr-3" />
                      未來展望
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        OpenAI對企業AI的未來發展提出了幾個重要預測，這些趨勢將深刻影響企業的競爭格局：
                      </p>

                      <div className="space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">1. AI將成為企業標準配備</h3>
                        <p>
                          就像今天的企業離不開電腦和網路一樣，AI將在未來5年內成為企業的標準配備。
                          不導入AI的企業將面臨競爭劣勢。
                        </p>

                        <h3 className="text-xl font-bold text-gray-900">2. 多模態AI的普及</h3>
                        <p>
                          未來的AI系統將能夠同時處理文字、圖像、聲音和視頻，
                          為企業提供更全面和智能的解決方案。
                        </p>

                        <h3 className="text-xl font-bold text-gray-900">3. 個人化AI助手</h3>
                        <p>
                          每個員工都將擁有個人化的AI助手，這些助手了解個人工作習慣和偏好，
                          能夠提供客製化的支援和建議。
                        </p>

                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 my-8">
                          <h4 className="font-semibold text-purple-900 mb-4 text-center">🔮 2025-2030年企業AI發展預測</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                              <div className="text-3xl font-bold text-purple-600 mb-2">2025</div>
                              <div className="text-sm text-purple-800">
                                <div className="font-medium mb-1">AI普及年</div>
                                <div>70%企業導入基礎AI應用</div>
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-blue-600 mb-2">2027</div>
                              <div className="text-sm text-blue-800">
                                <div className="font-medium mb-1">AI整合年</div>
                                <div>AI與業務流程深度整合</div>
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-3xl font-bold text-indigo-600 mb-2">2030</div>
                              <div className="text-sm text-indigo-800">
                                <div className="font-medium mb-1">AI原生年</div>
                                <div>AI驅動的商業模式創新</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Taiwan Perspective */}
                <section id="taiwan-perspective" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <UserGroupIcon className="w-8 h-8 text-green-600 mr-3" />
                      台灣企業的機會
                    </h2>
                    
                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        結合OpenAI的全球視野和台灣市場的特殊條件，我們為台灣企業識別出獨特的AI發展機會：
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h4 className="font-semibold text-green-900 mb-4">🌟 台灣優勢</h4>
                          <ul className="space-y-2 text-green-800 text-sm">
                            <li>• <strong>製造業基礎深厚</strong>：適合導入工業AI</li>
                            <li>• <strong>高素質人力</strong>：容易培養AI人才</li>
                            <li>• <strong>靈活經營模式</strong>：快速適應新技術</li>
                            <li>• <strong>政府政策支持</strong>：AI發展政策利多</li>
                            <li>• <strong>國際市場敏感度</strong>：掌握全球AI趨勢</li>
                          </ul>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h4 className="font-semibold text-blue-900 mb-4">🎯 重點機會</h4>
                          <ul className="space-y-2 text-blue-800 text-sm">
                            <li>• <strong>智慧製造</strong>：結合IoT與AI提升效率</li>
                            <li>• <strong>跨境電商</strong>：AI驅動的個人化行銷</li>
                            <li>• <strong>金融科技</strong>：AI風險控制與客服</li>
                            <li>• <strong>醫療健康</strong>：AI輔助診斷與照護</li>
                            <li>• <strong>農業科技</strong>：精準農業與AI監控</li>
                          </ul>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900">AIRAI的使命</h3>
                      <p>
                        作為台灣領先的AI導入專家，AIRAI致力於將OpenAI等全球領先AI技術的精華，
                        轉化為適合台灣中小企業的實用解決方案。我們的目標是讓每一家台灣企業都能享受到AI帶來的競爭優勢。
                      </p>

                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 my-8">
                        <div className="text-center">
                          <h4 className="text-xl font-bold mb-4">準備開始您的AI轉型之旅？</h4>
                          <p className="mb-6">
                            我們提供免費的AI需求評估，幫助您制定最適合的AI導入策略
                          </p>
                          <div className="flex flex-wrap justify-center gap-4">
                            <a 
                              href="/contact" 
                              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                            >
                              立即諮詢
                              <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </a>
                            <a 
                              href="/resources/tools/1" 
                              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
                            >
                              免費評估工具
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