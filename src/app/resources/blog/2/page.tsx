'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  ShieldCheckIcon,
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
} from '@heroicons/react/24/outline';

export default function ChatGPTEnterpriseArticle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeSection, setActiveSection] = useState('introduction');

  const tableOfContents = [
    { id: 'introduction', title: '導入背景與動機', icon: LightBulbIcon },
    { id: 'technical-integration', title: '技術整合策略', icon: CpuChipIcon },
    { id: 'security-compliance', title: '安全性與合規考量', icon: ShieldCheckIcon },
    { id: 'workflow-optimization', title: '工作流程優化', icon: CogIcon },
    { id: 'performance-metrics', title: '效益評估與指標', icon: ChartBarIcon },
    { id: 'challenges-solutions', title: '挑戰與解決方案', icon: ExclamationTriangleIcon },
    { id: 'future-roadmap', title: '未來發展規劃', icon: RocketLaunchIcon }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                ChatGPT在企業應用的實務經驗分享
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              深入分享我們團隊在導入ChatGPT過程中的實際經驗，包括技術整合、安全考量與效益評估
            </p>

            {/* Article  Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：8分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>ChatGPT・企業應用・實務分享</span>
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-4 h-4 mr-1" />
                <span>李技術長</span>
              </div>
              <div className="flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                <span>2024-05-25</span>
              </div>
            </div>

            {/* Action Bu ttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
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
                      className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${activeSection === item.id
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
                      導入背景與動機
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        作為一家中型科技公司的技術長，我一直在尋找能夠提升團隊生產力的解決方案。
                        當ChatGPT在2022年底問世時，我們立即意識到這可能是一個改變遊戲規則的工具。
                      </p>

                      <p>
                        經過6個月的深度評估和3個月的逐步導入，我們成功將ChatGPT整合到日常工作流程中，
                        取得了顯著的效益。本文將詳細分享我們的實際經驗，希望能為其他企業提供參考。
                      </p>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                        <h4 className="font-semibold text-blue-900 mb-3">💡 導入動機</h4>
                        <ul className="space-y-2 text-blue-800">
                          <li>• <strong>提升開發效率：</strong>加速程式碼編寫與除錯</li>
                          <li>• <strong>改善文件品質：</strong>自動生成技術文件</li>
                          <li>• <strong>強化客戶服務：</strong>快速回應技術問題</li>
                          <li>• <strong>創新產品功能：</strong>為產品增加AI能力</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h4 className="font-semibold text-gray-900 mb-3">📊 團隊現況</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-gray-800 mb-2">團隊組成</h5>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• 軟體工程師：12人</li>
                              <li>• 產品經理：3人</li>
                              <li>• 技術文件編輯：2人</li>
                              <li>• 客戶支援：5人</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-800 mb-2">主要挑戰</h5>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• 開發週期較長</li>
                              <li>• 文件維護困難</li>
                              <li>• 客服回應時間偏長</li>
                              <li>• 創新速度不足</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Technical Integration */}
                <section id="technical-integration" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CpuChipIcon className="w-8 h-8 text-purple-600 mr-3" />
                      技術整合策略
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        技術整合是ChatGPT企業導入的核心環節。我們採用分階段的導入策略，
                        從簡單的應用場景開始，逐步擴展到複雜的業務流程。
                      </p>

                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">整合架構設計</h3>

                        <div className="space-y-6">
                          <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-800 mb-3">API整合層</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">接口管理</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• OpenAI API封裝</li>
                                  <li>• 請求頻率控制</li>
                                  <li>• 錯誤處理機制</li>
                                  <li>• 回應快取機制</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">資料處理</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• 輸入資料清理</li>
                                  <li>• 輸出格式化</li>
                                  <li>• 敏感資訊過濾</li>
                                  <li>• 日誌記錄</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-purple-200">
                            <h4 className="font-semibold text-purple-800 mb-3">應用整合</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">開發工具</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• VS Code擴展</li>
                                  <li>• Git整合</li>
                                  <li>• CI/CD管線</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">協作平台</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• Slack機器人</li>
                                  <li>• Notion整合</li>
                                  <li>• Jira連結</li>
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-purple-700 mb-2">客戶服務</h5>
                                <ul className="text-purple-600 text-sm space-y-1">
                                  <li>• 客服系統嵌入</li>
                                  <li>• 知識庫整合</li>
                                  <li>• 自動回應</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                          <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                            技術要點
                          </h4>
                          <p className="text-yellow-800 text-sm">
                            建議使用異步處理架構，避免長時間等待API回應。同時設計降級機制，
                            當API不可用時能夠優雅地回退到傳統方案。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Security & Compliance */}
                <section id="security-compliance" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ShieldCheckIcon className="w-8 h-8 text-green-600 mr-3" />
                      安全性與合規考量
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        企業級ChatGPT應用最重要的考量之一就是資料安全與合規性。
                        我們建立了完整的安全框架，確保敏感資訊得到妥善保護。
                      </p>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">安全控制措施</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">資料保護</h4>
                            <ul className="space-y-2 text-green-700 text-sm">
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>敏感資料自動識別與過濾</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>資料傳輸全程加密（TLS 1.3）</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>本地資料預處理與去識別化</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>定期資料清理與刪除</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">存取控制</h4>
                            <ul className="space-y-2 text-green-700 text-sm">
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>基於角色的權限管理（RBAC）</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>多因子身份驗證（MFA）</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>API金鑰定期輪換</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>使用行為監控與異常檢測</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="mt-6 bg-blue-100 border border-blue-300 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-3">合規性檢查清單</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-sm font-medium text-blue-800 mb-2">法規遵循</h5>
                              <ul className="text-blue-700 text-sm space-y-1">
                                <li>✅ GDPR資料處理同意</li>
                                <li>✅ 個資法合規檢核</li>
                                <li>✅ 資安稽核通過</li>
                                <li>✅ ISO 27001認證</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-blue-800 mb-2">內控制度</h5>
                              <ul className="text-blue-700 text-sm space-y-1">
                                <li>✅ 資料使用政策</li>
                                <li>✅ 員工教育訓練</li>
                                <li>✅ 事故應變計劃</li>
                                <li>✅ 定期安全評估</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Workflow Optimization */}
                <section id="workflow-optimization" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CogIcon className="w-8 h-8 text-orange-600 mr-3" />
                      工作流程優化
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        成功的ChatGPT導入不僅是技術實現，更重要的是工作流程的重新設計。
                        我們識別出關鍵流程並進行優化，最大化AI的價值。
                      </p>

                      <div className="space-y-6">
                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-orange-900 mb-4">軟體開發流程</h3>

                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg border border-orange-200">
                              <h4 className="font-semibold text-orange-800 mb-3">程式碼開發</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="text-sm font-medium text-orange-700 mb-2">原有流程</h5>
                                  <ul className="text-orange-600 text-sm space-y-1">
                                    <li>• 需求分析 → 設計 → 編碼</li>
                                    <li>• 手動編寫測試案例</li>
                                    <li>• 人工程式碼審查</li>
                                    <li>• 平均開發時間：5天</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-medium text-orange-700 mb-2">優化後流程</h5>
                                  <ul className="text-orange-600 text-sm space-y-1">
                                    <li>• AI輔助需求澄清與設計</li>
                                    <li>• ChatGPT生成基礎程式碼</li>
                                    <li>• AI協助測試案例生成</li>
                                    <li>• 平均開發時間：3天</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg border border-orange-200">
                              <h4 className="font-semibold text-orange-800 mb-3">程式碼審查</h4>
                              <div className="text-orange-700 text-sm">
                                <p className="mb-2">
                                  <strong>Before：</strong>資深工程師手動審查所有程式碼，平均需要2小時/PR
                                </p>
                                <p>
                                  <strong>After：</strong>ChatGPT預先檢查常見問題，人工專注於邏輯與架構審查，時間縮短至45分鐘/PR
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">文件管理流程</h3>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-3">技術文件</h4>
                              <ul className="space-y-2 text-blue-700 text-sm">
                                <li>• API文件自動生成</li>
                                <li>• 程式碼註解智能補全</li>
                                <li>• 使用者手冊快速產出</li>
                                <li>• 多語言版本同步更新</li>
                              </ul>
                              <div className="mt-3 text-xs text-blue-600 font-medium">
                                效率提升：70%
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-3">會議記錄</h4>
                              <ul className="space-y-2 text-blue-700 text-sm">
                                <li>• 語音轉文字整理</li>
                                <li>• 重點摘要自動提取</li>
                                <li>• 行動項目追蹤</li>
                                <li>• 決議事項歸檔</li>
                              </ul>
                              <div className="mt-3 text-xs text-blue-600 font-medium">
                                時間節省：60%
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-4">客戶服務流程</h3>

                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">多層次回應機制</h4>
                            <div className="space-y-3">
                              <div className="flex items-center p-3 bg-green-100 rounded-lg">
                                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  L1
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-green-800">ChatGPT自動回應</div>
                                  <div className="text-green-700 text-sm">處理80%常見問題，平均回應時間：30秒</div>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-green-100 rounded-lg">
                                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  L2
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-green-800">ChatGPT輔助人工</div>
                                  <div className="text-green-700 text-sm">處理15%複雜問題，平均回應時間：5分鐘</div>
                                </div>
                              </div>
                              <div className="flex items-center p-3 bg-green-100 rounded-lg">
                                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  L3
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-green-800">專家人工處理</div>
                                  <div className="text-green-700 text-sm">處理5%特殊問題，平均回應時間：30分鐘</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Performance Metrics */}
                <section id="performance-metrics" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ChartBarIcon className="w-8 h-8 text-indigo-600 mr-3" />
                      效益評估與指標
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        經過9個月的實際運行，我們收集了豐富的數據來評估ChatGPT導入的實際效益。
                        以下是關鍵指標的詳細分析：
                      </p>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-indigo-900 mb-4">量化效益分析</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-3">開發效率提升</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">程式碼編寫速度</span>
                                <span className="text-lg font-bold text-green-600">+40%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">Bug修復時間</span>
                                <span className="text-lg font-bold text-green-600">-35%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">文件產出效率</span>
                                <span className="text-lg font-bold text-green-600">+70%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">總體開發週期</span>
                                <span className="text-lg font-bold text-green-600">-25%</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-3">客戶服務改善</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">首次回應時間</span>
                                <span className="text-lg font-bold text-green-600">-80%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">問題解決率</span>
                                <span className="text-lg font-bold text-green-600">+45%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">客戶滿意度</span>
                                <span className="text-lg font-bold text-green-600">+30%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">服務成本</span>
                                <span className="text-lg font-bold text-green-600">-20%</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-white p-4 rounded-lg border border-indigo-200">
                          <h4 className="font-semibold text-indigo-800 mb-3">財務效益評估</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                              <div className="text-2xl font-bold text-green-700 mb-1">NT$ 180萬</div>
                              <div className="text-sm text-green-600">年度成本節省</div>
                            </div>
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                              <div className="text-2xl font-bold text-blue-700 mb-1">6個月</div>
                              <div className="text-sm text-blue-600">投資回收期</div>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-lg">
                              <div className="text-2xl font-bold text-purple-700 mb-1">320%</div>
                              <div className="text-sm text-purple-600">3年期ROI</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-yellow-900 mb-4">定性效益觀察</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-yellow-800 mb-3">團隊影響</h4>
                            <ul className="space-y-2 text-yellow-700 text-sm">
                              <li>• 工程師可專注於高價值創新工作</li>
                              <li>• 新人學習曲線顯著縮短</li>
                              <li>• 跨部門協作效率提升</li>
                              <li>• 工作滿意度普遍提高</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-yellow-800 mb-3">產品創新</h4>
                            <ul className="space-y-2 text-yellow-700 text-sm">
                              <li>• 快速原型開發能力增強</li>
                              <li>• 產品功能快速迭代</li>
                              <li>• 客戶需求回應更及時</li>
                              <li>• 競爭優勢明顯提升</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Challenges & Solutions */}
                <section id="challenges-solutions" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ExclamationTriangleIcon className="w-8 h-8 text-red-600 mr-3" />
                      挑戰與解決方案
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        ChatGPT導入過程並非一帆風順。我們遇到了技術、人員、流程等多方面的挑戰，
                        以下分享我們的解決經驗：
                      </p>

                      <div className="space-y-6">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-red-900 mb-4">技術挑戰</h3>

                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                                <h4 className="font-semibold text-red-800 mb-2">挑戰：API穩定性問題</h4>
                                <p className="text-red-700 text-sm mb-3">
                                  初期經常遇到API限流、超時等問題，影響用戶體驗
                                </p>
                                <div className="text-xs text-red-600">
                                  影響程度：高 | 發生頻率：經常
                                </div>
                              </div>
                              <div className="bg-white border border-red-200 rounded-lg p-4">
                                <h4 className="font-semibold text-green-800 mb-2">解決方案</h4>
                                <ul className="text-green-700 text-sm space-y-1">
                                  <li>• 實施請求池與重試機制</li>
                                  <li>• 建立多層快取策略</li>
                                  <li>• 設計降級處理流程</li>
                                  <li>• 監控API健康狀態</li>
                                </ul>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                                <h4 className="font-semibold text-red-800 mb-2">挑戰：回應品質不穩定</h4>
                                <p className="text-red-700 text-sm mb-3">
                                  相同問題有時得到不同品質的回答，影響工作效率
                                </p>
                                <div className="text-xs text-red-600">
                                  影響程度：中 | 發生頻率：偶爾
                                </div>
                              </div>
                              <div className="bg-white border border-red-200 rounded-lg p-4">
                                <h4 className="font-semibold text-green-800 mb-2">解決方案</h4>
                                <ul className="text-green-700 text-sm space-y-1">
                                  <li>• 建立提示詞範本庫</li>
                                  <li>• 實施上下文管理</li>
                                  <li>• 設定輸出格式標準</li>
                                  <li>• 人工驗證重要回應</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-yellow-900 mb-4">組織挑戰</h3>

                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                                <h4 className="font-semibold text-yellow-800 mb-2">挑戰：員工接受度不一</h4>
                                <p className="text-yellow-700 text-sm mb-3">
                                  資深員工擔心工作被取代，新員工過度依賴AI
                                </p>
                                <div className="text-xs text-yellow-600">
                                  影響程度：高 | 持續時間：3個月
                                </div>
                              </div>
                              <div className="bg-white border border-yellow-200 rounded-lg p-4">
                                <h4 className="font-semibold text-green-800 mb-2">解決方案</h4>
                                <ul className="text-green-700 text-sm space-y-1">
                                  <li>• 強調AI為輔助工具定位</li>
                                  <li>• 設計漸進式訓練計劃</li>
                                  <li>• 建立最佳實務分享機制</li>
                                  <li>• 設定合理使用規範</li>
                                </ul>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                                <h4 className="font-semibold text-yellow-800 mb-2">挑戰：工作流程重組阻力</h4>
                                <p className="text-yellow-700 text-sm mb-3">
                                  現有流程根深蒂固，改變需要時間和耐心
                                </p>
                                <div className="text-xs text-yellow-600">
                                  影響程度：中 | 持續時間：6個月
                                </div>
                              </div>
                              <div className="bg-white border border-yellow-200 rounded-lg p-4">
                                <h4 className="font-semibold text-green-800 mb-2">解決方案</h4>
                                <ul className="text-green-700 text-sm space-y-1">
                                  <li>• 選擇影響小的流程先試點</li>
                                  <li>• 建立成功案例示範</li>
                                  <li>• 提供充分的培訓支援</li>
                                  <li>• 建立回饋改善機制</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-purple-900 mb-4">經驗教訓</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg border border-purple-200">
                              <h4 className="font-semibold text-purple-800 mb-2">技術層面</h4>
                              <ul className="text-purple-700 text-sm space-y-1">
                                <li>• 永遠準備備案方案</li>
                                <li>• 監控比優化更重要</li>
                                <li>• 安全永遠是第一優先</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-purple-200">
                              <h4 className="font-semibold text-purple-800 mb-2">管理層面</h4>
                              <ul className="text-purple-700 text-sm space-y-1">
                                <li>• 變革需要循序漸進</li>
                                <li>• 溝通比技術更重要</li>
                                <li>• 持續學習是關鍵</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border border-purple-200">
                              <h4 className="font-semibold text-purple-800 mb-2">策略層面</h4>
                              <ul className="text-purple-700 text-sm space-y-1">
                                <li>• 明確定義成功標準</li>
                                <li>• 建立長期發展規劃</li>
                                <li>• 培養內部AI文化</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Future Roadmap */}
                <section id="future-roadmap" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <RocketLaunchIcon className="w-8 h-8 text-blue-600 mr-3" />
                      未來發展規劃
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        基於目前的成功經驗，我們制定了未來12個月的ChatGPT深化應用計劃，
                        目標是將AI能力進一步整合到企業核心業務中。
                      </p>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">短期目標（3個月）</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-3">技術增強</h4>
                            <ul className="space-y-2 text-blue-700 text-sm">
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>整合GPT-4V視覺能力到產品設計流程</span>
                              </li>
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>建立企業知識庫問答系統</span>
                              </li>
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>開發程式碼自動重構工具</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-3">流程優化</h4>
                            <ul className="space-y-2 text-blue-700 text-sm">
                              <li className="flex items-start">
                                <CogIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>自動化測試案例生成與執行</span>
                              </li>
                              <li className="flex items-start">
                                <CogIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>智能化需求分析與估算</span>
                              </li>
                              <li className="flex items-start">
                                <CogIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>客戶回饋自動分類與洞察</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">中期目標（6個月）</h3>
                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">產品創新</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li>• 為客戶產品嵌入AI對話功能</li>
                                <li>• 開發智能數據分析報告工具</li>
                                <li>• 建立個人化推薦系統</li>
                              </ul>
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li>• 智能化工作流程設計器</li>
                                <li>• 自動化內容創作平台</li>
                                <li>• AI驅動的決策支援系統</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">長期願景（12個月）</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg border border-purple-200 text-center">
                            <BuildingOfficeIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                            <h4 className="font-semibold text-purple-800 mb-2">AI-First企業</h4>
                            <p className="text-purple-700 text-sm">
                              將AI思維融入所有業務決策與產品設計中
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-purple-200 text-center">
                            <UserGroupIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                            <h4 className="font-semibold text-purple-800 mb-2">團隊轉型</h4>
                            <p className="text-purple-700 text-sm">
                              培養每位員工的AI協作能力與創新思維
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-purple-200 text-center">
                            <SparklesIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                            <h4 className="font-semibold text-purple-800 mb-2">產品差異化</h4>
                            <p className="text-purple-700 text-sm">
                              建立獨特的AI驅動產品競爭優勢
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold mb-4">想要了解更多企業AI應用經驗？</h3>
                          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            歡迎與我們交流ChatGPT企業導入的實務經驗，或討論您的AI應用規劃
                          </p>
                          <div className="flex flex-wrap justify-center gap-4">
                            <a
                              href="/contact"
                              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                            >
                              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                              預約諮詢
                              <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </a>
                            <a
                              href="/resources/tools"
                              className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
                            >
                              <DocumentTextIcon className="w-5 h-5 mr-2" />
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