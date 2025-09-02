'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  ScaleIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  BriefcaseIcon,
  CreditCardIcon,
  DocumentDuplicateIcon,
  HandRaisedIcon,
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  ExclamationCircleIcon,
  BanknotesIcon,
  ChartBarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function TermsOfService() {
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
              <ScaleIcon className="w-12 h-12 text-green-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                服務條款
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI 自動化解決方案專業服務協議
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>最後更新：2025年1月</span>
              </div>
              <div className="flex items-center">
                <DocumentTextIcon className="w-4 h-4 mr-1" />
                <span>版本：3.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* 1. 服務範圍與定義 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 text-green-600 mr-3" />
                  1. 服務範圍與定義
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">1.1 服務內容</h3>
                    <p className="text-gray-700 mb-4">
                      智流科技有限公司（以下稱「本公司」）提供以下AI自動化專業服務：
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">AI 解決方案開發</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 客製化 AI 模型開發與訓練</li>
                          <li>• 自然語言處理（NLP）系統</li>
                          <li>• 電腦視覺解決方案</li>
                          <li>• 機器學習演算法優化</li>
                          <li>• 深度學習模型部署</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">業務流程自動化</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• RPA 機器人流程自動化</li>
                          <li>• 工作流程優化與整合</li>
                          <li>• 資料處理自動化</li>
                          <li>• 智能文件處理</li>
                          <li>• API 整合與開發</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">系統整合服務</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• ERP/CRM 系統整合</li>
                          <li>• 雲端平台遷移</li>
                          <li>• 資料庫整合與優化</li>
                          <li>• 第三方服務串接</li>
                          <li>• 微服務架構設計</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">諮詢與支援</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• AI 策略規劃諮詢</li>
                          <li>• 技術可行性評估</li>
                          <li>• 系統架構設計</li>
                          <li>• 專案管理服務</li>
                          <li>• 技術培訓與知識轉移</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-amber-900 mb-4">1.2 服務限制</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 本公司不提供任何違反法律或道德規範的服務</li>
                      <li>• 不包含硬體設備採購（除非另有約定）</li>
                      <li>• 不提供24/7全天候即時支援（除非購買額外支援方案）</li>
                      <li>• 不負責第三方軟體的授權費用</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 2. 專案執行與交付 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="w-6 h-6 text-blue-600 mr-3" />
                  2. 專案執行與交付
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">2.1 專案階段</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">第一階段：需求分析與規劃</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• 需求訪談與文件化（1-2週）</li>
                          <li>• 技術可行性評估</li>
                          <li>• 專案計畫書與報價</li>
                          <li>• 簽訂正式合約</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">第二階段：設計與開發</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• 系統架構設計</li>
                          <li>• 原型開發與驗證</li>
                          <li>• 迭代開發（依敏捷開發方法）</li>
                          <li>• 定期進度報告（每週或雙週）</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">第三階段：測試與優化</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• 單元測試與整合測試</li>
                          <li>• 使用者驗收測試（UAT）</li>
                          <li>• 性能優化與調整</li>
                          <li>• 安全性檢測</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">第四階段：部署與交付</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• 生產環境部署</li>
                          <li>• 系統上線支援</li>
                          <li>• 文件交付（技術文件、操作手冊）</li>
                          <li>• 教育訓練</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">2.2 交付標準</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 所有程式碼需通過程式碼審查</li>
                      <li>• 測試覆蓋率需達到80%以上</li>
                      <li>• 提供完整的API文件</li>
                      <li>• 包含部署指南與維護手冊</li>
                      <li>• 原始碼將託管於客戶指定的版本控制系統</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 3. 付款條款 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCardIcon className="w-6 h-6 text-purple-600 mr-3" />
                  3. 付款條款
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-4">3.1 收費模式</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-purple-800 mb-2">固定價格專案</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 簽約時：30% 頭期款</li>
                          <li>• 設計完成：30% </li>
                          <li>• UAT通過：30%</li>
                          <li>• 專案結案：10% 尾款</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-800 mb-2">時間與材料（T&M）</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 按月計費，月底結算</li>
                          <li>• 最低承諾時數：80小時/月</li>
                          <li>• 超時工作需事前核准</li>
                          <li>• 詳細工時報告</li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">3.2 付款規定</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 發票開立後30天內付款</li>
                      <li>• 逾期付款將收取月利率1.5%的遲延利息</li>
                      <li>• 超過60天未付款，本公司有權暫停服務</li>
                      <li>• 不接受支票，僅接受銀行轉帳或信用卡付款</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 4. 智慧財產權 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentDuplicateIcon className="w-6 h-6 text-indigo-600 mr-3" />
                  4. 智慧財產權
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-4">4.1 所有權歸屬</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-indigo-800 mb-2">客戶擁有</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 專為客戶開發的客製化程式碼</li>
                          <li>• 專案相關的文件與報告</li>
                          <li>• 客戶提供的資料與內容</li>
                          <li>• 訓練完成的AI模型（使用客戶資料）</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-indigo-800 mb-2">本公司保留</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 既有的框架、工具與函式庫</li>
                          <li>• 通用的演算法與方法論</li>
                          <li>• 內部開發工具與平台</li>
                          <li>• 專業知識與經驗</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">4.2 授權條款</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 客戶獲得其擁有內容的永久使用權</li>
                      <li>• 本公司保留將通用解決方案用於其他專案的權利</li>
                      <li>• 第三方元件依其原始授權條款</li>
                      <li>• 開源軟體遵循相應的開源授權</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 5. 保密條款 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <LockClosedIcon className="w-6 h-6 text-red-600 mr-3" />
                  5. 保密條款
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">5.1 保密義務</h3>
                    <p className="text-gray-700 mb-4">
                      雙方同意對因履行本合約而知悉之對方營業秘密負保密義務：
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 不得向第三方洩露機密資訊</li>
                      <li>• 僅用於履行本合約之目的</li>
                      <li>• 採取合理保護措施</li>
                      <li>• 保密期限：合約終止後5年</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">5.2 例外情況</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 接收方已知的公開資訊</li>
                      <li>• 非因違約而成為公開資訊</li>
                      <li>• 合法從第三方獲得的資訊</li>
                      <li>• 法律要求披露的資訊</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 6. 責任限制與免責條款 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ExclamationCircleIcon className="w-6 h-6 text-amber-600 mr-3" />
                  6. 責任限制與免責條款
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-amber-900 mb-4">6.1 責任限制</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 本公司的總賠償責任不超過該專案合約總金額</li>
                      <li>• 不對間接、特殊或衍生性損害負責</li>
                      <li>• 不對利潤損失或商業機會損失負責</li>
                      <li>• 不對資料遺失負責（客戶應自行備份）</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">6.2 免責事由</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 不可抗力因素（天災、戰爭、罷工等）</li>
                      <li>• 第三方服務中斷或故障</li>
                      <li>• 客戶提供錯誤資訊或需求變更</li>
                      <li>• 客戶未依約提供必要協助</li>
                      <li>• 網路攻擊或資安事件（已盡合理防護義務）</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 7. 保固與維護 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <WrenchScrewdriverIcon className="w-6 h-6 text-teal-600 mr-3" />
                  7. 保固與維護
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-teal-900 mb-4">7.1 保固範圍</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-teal-800 mb-2">免費保固（30天）</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 程式錯誤修正</li>
                          <li>• 功能不符合規格書</li>
                          <li>• 系統整合問題</li>
                          <li>• 遠端技術支援</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-teal-800 mb-2">付費維護服務</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 功能增強與優化</li>
                          <li>• 新需求開發</li>
                          <li>• 效能調校</li>
                          <li>• 定期健檢報告</li>
                          <li>• 優先技術支援</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">7.2 服務等級協議（SLA）</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">問題等級</th>
                            <th className="text-left py-2">定義</th>
                            <th className="text-left py-2">回應時間</th>
                            <th className="text-left py-2">解決時間</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 text-red-600 font-medium">緊急</td>
                            <td className="py-2">系統完全無法使用</td>
                            <td className="py-2">2小時內</td>
                            <td className="py-2">24小時內</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 text-amber-600 font-medium">高</td>
                            <td className="py-2">主要功能受影響</td>
                            <td className="py-2">4小時內</td>
                            <td className="py-2">48小時內</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 text-blue-600 font-medium">中</td>
                            <td className="py-2">次要功能問題</td>
                            <td className="py-2">8小時內</td>
                            <td className="py-2">5工作天</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-green-600 font-medium">低</td>
                            <td className="py-2">建議或小問題</td>
                            <td className="py-2">24小時內</td>
                            <td className="py-2">下次更新</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 8. 合約終止 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <HandRaisedIcon className="w-6 h-6 text-gray-600 mr-3" />
                  8. 合約終止
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">8.1 終止條件</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 專案完成並通過驗收</li>
                      <li>• 任一方提前30天書面通知</li>
                      <li>• 重大違約且未在15天內改正</li>
                      <li>• 不可抗力持續超過60天</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">8.2 終止後處理</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 結算已完成工作的費用</li>
                      <li>• 移交所有專案資料與文件</li>
                      <li>• 刪除客戶機密資料</li>
                      <li>• 提供30天過渡期支援</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 9. 爭議解決 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ScaleIcon className="w-6 h-6 text-indigo-600 mr-3" />
                  9. 爭議解決
                </h2>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <ul className="text-gray-700 space-y-2">
                    <li>• 本合約以中華民國法律為準據法</li>
                    <li>• 優先透過協商解決爭議</li>
                    <li>• 協商不成時，提交台灣台北地方法院管轄</li>
                    <li>• 或選擇提交中華民國仲裁協會仲裁</li>
                    <li>• 爭議期間，不影響其他條款之履行</li>
                  </ul>
                </div>
              </motion.section>

              {/* 10. 其他條款 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 text-gray-600 mr-3" />
                  10. 其他條款
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">10.1 一般條款</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 本條款構成雙方完整協議</li>
                      <li>• 任何修改需雙方書面同意</li>
                      <li>• 條款部分無效不影響其他條款效力</li>
                      <li>• 不得轉讓合約權利義務予第三方</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">10.2 資料保護</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 遵守個人資料保護法</li>
                      <li>• 實施適當的資安措施</li>
                      <li>• 資料僅用於約定目的</li>
                      <li>• 配合客戶的合規要求</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Contact Information */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BuildingOfficeIcon className="w-6 h-6 text-green-600 mr-3" />
                  聯絡資訊
                </h2>
                
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">需要討論您的專案需求？</h3>
                    <p className="text-green-100">
                      我們的專業團隊隨時準備為您提供最適合的AI自動化解決方案
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <PhoneIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">業務專線</div>
                      <div className="text-green-100 text-sm">+886 953-202-811</div>
                    </div>
                    <div>
                      <EnvelopeIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">商務信箱</div>
                      <div className="text-green-100 text-sm">contact@airai.tw</div>
                    </div>
                    <div>
                      <ClockIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">服務時間</div>
                      <div className="text-green-100 text-sm">週一至週五 09:00-18:00</div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-6 pt-6 border-t border-green-500">
                    <p className="text-green-100 text-sm">
                      <strong>公司全名：</strong>智流科技有限公司 AIRAI Technology Co., Ltd.<br />
                      <strong>統一編號：</strong>93979905<br />
                      <strong>公司地址：</strong>新北市板橋區倉後街26號<br />
                      <strong>LINE官方帳號：</strong>@365cpgih
                    </p>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}