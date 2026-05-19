'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  DocumentTextIcon,
  UserGroupIcon,
  LockClosedIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  ServerIcon,
  KeyIcon,
  CloudArrowUpIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ShieldCheckIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                隱私權與資料保護政策
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              專為企業客戶設計的資料保護承諾，確保您的商業資料與AI專案資訊獲得最高等級保護
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>最後更新：2025年1月</span>
              </div>
              <div className="flex items-center">
                <DocumentTextIcon className="w-4 h-4 mr-1" />
                <span>版本：2.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Service Commitment */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 text-blue-600 mr-3" />
                  服務範圍與保密承諾
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    智流科技有限公司（AIRAI Technology）專注於為中小企業提供AI自動化解決方案。
                    我們深知商業資料的重要性，承諾以最高標準保護客戶的專案資料、商業機密與智慧財產權。
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">核心原則</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 資料最小化收集</li>
                        <li>• 專案資料隔離</li>
                        <li>• 嚴格存取控制</li>
                        <li>• 透明化處理流程</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">我們的承諾</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 遵守台灣個資法規範</li>
                        <li>• 簽署NDA保密協議</li>
                        <li>• 定期內部安全檢查</li>
                        <li>• 持續改善資安措施</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Business Data Collection */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-green-600 mr-3" />
                  企業資料收集與分類
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">商務合作資料</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-green-800 mb-2">企業基本資料</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 公司名稱與統編</li>
                          <li>• 聯絡人資訊</li>
                          <li>• 產業類別</li>
                          <li>• 公司規模</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-green-800 mb-2">專案需求資料</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 業務流程描述</li>
                          <li>• 系統架構資訊</li>
                          <li>• 技術需求規格</li>
                          <li>• 預期目標與KPI</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-green-800 mb-2">專案執行資料</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• API金鑰與憑證</li>
                          <li>• 測試資料集</li>
                          <li>• 系統日誌</li>
                          <li>• 效能指標</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-4">資料分級管理</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <KeyIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-red-800">機密級</h4>
                        <p className="text-sm text-gray-600">商業機密、源代碼、API金鑰</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <ShieldCheckIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-yellow-800">內部級</h4>
                        <p className="text-sm text-gray-600">專案文件、測試資料、會議記錄</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <DocumentTextIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-green-800">公開級</h4>
                        <p className="text-sm text-gray-600">公司資訊、產品規格、行銷資料</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* AI Data Processing */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CpuChipIcon className="w-6 h-6 text-purple-600 mr-3" />
                  AI專案資料處理原則
                </h2>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-4">資料處理承諾</h3>
                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                      <p className="text-purple-800 mb-3">
                        <strong>重要聲明：</strong>客戶專案資料絕不會用於訓練通用AI模型或跨專案使用
                      </p>
                      <ul className="text-purple-700 space-y-2 text-sm">
                        <li>✓ 每個專案資料完全隔離，獨立環境處理</li>
                        <li>✓ 客戶資料僅用於該客戶的特定專案目標</li>
                        <li>✓ 專案結束後依約定期限刪除或返還資料</li>
                        <li>✓ 不會將客戶資料用於改進我們的通用服務</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">AI模型處理方式</h3>
                      <ul className="text-purple-700 space-y-2">
                        <li>• <strong>微調模型：</strong>僅使用客戶授權資料</li>
                        <li>• <strong>向量資料庫：</strong>專案獨立部署</li>
                        <li>• <strong>提示工程：</strong>不包含其他客戶資訊</li>
                        <li>• <strong>測試資料：</strong>去識別化處理</li>
                        <li>• <strong>模型輸出：</strong>客戶專屬所有權</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">資料使用限制</h3>
                      <ul className="text-purple-700 space-y-2">
                        <li>• <strong>目的限制：</strong>僅用於約定專案範圍</li>
                        <li>• <strong>時間限制：</strong>專案期間內使用</li>
                        <li>• <strong>人員限制：</strong>僅授權團隊成員</li>
                        <li>• <strong>地域限制：</strong>資料不離開約定區域</li>
                        <li>• <strong>分享限制：</strong>未經同意不分享第三方</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Third-party Services */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CloudArrowUpIcon className="w-6 h-6 text-orange-600 mr-3" />
                  第三方服務與API使用
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-orange-900 mb-4">AI服務提供商</h3>
                    <p className="text-orange-800 mb-4">
                      我們使用業界領先的AI服務，所有第三方服務皆簽署資料處理協議(DPA)
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-orange-800 mb-2">主要AI服務</h4>
                        <ul className="text-orange-700 text-sm space-y-2">
                          <li>
                            <strong>OpenAI API</strong>
                            <p className="text-xs text-gray-600">• 企業級協議、資料不用於訓練</p>
                          </li>
                          <li>
                            <strong>Claude (Anthropic)</strong>
                            <p className="text-xs text-gray-600">• 隱私優先設計、無資料保留</p>
                          </li>
                          <li>
                            <strong>Azure AI Services</strong>
                            <p className="text-xs text-gray-600">• 企業合規、區域資料中心</p>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-orange-800 mb-2">基礎設施服務</h4>
                        <ul className="text-orange-700 text-sm space-y-2">
                          <li>
                            <strong>Google Cloud Platform</strong>
                            <p className="text-xs text-gray-600">• 台灣資料中心、ISO認證</p>
                          </li>
                          <li>
                            <strong>AWS</strong>
                            <p className="text-xs text-gray-600">• 企業級安全、合規認證</p>
                          </li>
                          <li>
                            <strong>Vercel/Netlify</strong>
                            <p className="text-xs text-gray-600">• 前端託管、全球CDN</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-yellow-800 text-sm">
                        <strong>重要說明：</strong>所有第三方服務使用皆會事先告知客戶，並取得明確同意。
                        客戶可要求使用特定服務商或私有部署方案。
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Security Measures */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 mr-3" />
                  企業級安全措施
                </h2>
                
                <div className="space-y-6">
                  {/* Technical Security */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">技術性保護措施</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
                          <LockClosedIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-blue-800 mb-2">資料加密</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• AES-256 靜態加密</li>
                          <li>• TLS 1.3 傳輸加密</li>
                          <li>• 端對端加密通訊</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
                          <ServerIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-blue-800 mb-2">基礎設施</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• 防火牆與DDoS防護</li>
                          <li>• 容器化隔離環境</li>
                          <li>• 自動備份與災難復原</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
                          <KeyIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-blue-800 mb-2">存取控制</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• 多因素身份驗證</li>
                          <li>• 角色基礎存取控制</li>
                          <li>• API金鑰管理系統</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Management Security */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">管理性保護措施</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">人員管理</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 全員簽署保密協議(NDA)</li>
                          <li>• 定期安全意識培訓</li>
                          <li>• 最小權限原則</li>
                          <li>• 背景調查與審核</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">稽核與監控</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 24/7 系統監控</li>
                          <li>• 存取日誌記錄</li>
                          <li>• 定期安全稽核</li>
                          <li>• 異常行為偵測</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Data Retention and Deletion */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ClockIcon className="w-6 h-6 text-indigo-600 mr-3" />
                  資料保存與銷毀政策
                </h2>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-4">資料生命週期管理</h3>
                    <div className="bg-white p-4 rounded-lg border border-indigo-200">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">專案執行期間</h4>
                            <p className="text-gray-600 text-sm">資料加密存儲於專案專屬環境，定期備份</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">專案結束後30天</h4>
                            <p className="text-gray-600 text-sm">提供資料匯出服務，確認客戶已取得所有交付項目</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">保存期限屆滿</h4>
                            <p className="text-gray-600 text-sm">除合約另有約定，專案資料保存6個月後自動銷毀</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">4</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">完全銷毀</h4>
                            <p className="text-gray-600 text-sm">使用安全刪除方法，確保資料無法復原</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-indigo-800 mb-2">保存例外情況</h4>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• 法律要求保存</li>
                        <li>• 訴訟舉證需要</li>
                        <li>• 客戶要求延長保存</li>
                        <li>• 維護服務所需</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-indigo-800 mb-2">客戶權利</h4>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• 隨時要求資料副本</li>
                        <li>• 要求提前刪除</li>
                        <li>• 確認銷毀證明</li>
                        <li>• 資料可攜權</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Client Rights */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-green-600 mr-3" />
                  客戶權利與保障
                </h2>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">您的資料控制權</h3>
                    <p className="text-green-800 mb-4">
                      作為我們的企業客戶，您對專案資料擁有完整的控制權與所有權
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-3">資料存取權</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• 即時查看專案資料</li>
                        <li>• 下載完整資料副本</li>
                        <li>• 存取處理記錄</li>
                        <li>• 查看使用報告</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-3">資料控制權</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• 更正不準確資料</li>
                        <li>• 限制處理範圍</li>
                        <li>• 要求停止處理</li>
                        <li>• 撤回使用授權</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-3">透明度保證</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• 了解資料處理方式</li>
                        <li>• 要求安全說明</li>
                        <li>• 取得處理紀錄</li>
                        <li>• 指定資料存放地點</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">智慧財產權聲明</h4>
                    <p className="text-blue-700 text-sm">
                      客戶提供的所有資料、產生的模型與成果，智慧財產權均歸屬客戶所有。
                      我們不會主張任何所有權，並會協助客戶保護其智慧財產。
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Incident Response */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ExclamationTriangleIcon className="w-6 h-6 text-red-600 mr-3" />
                  資安事件應變機制
                </h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">事件通報流程</h3>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">0-2小時</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">內部評估與初步控制</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">2-24小時</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">通知受影響客戶，提供初步報告</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">24-72小時</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">完整調查報告與補救措施</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">7天內</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">改善措施實施與預防計畫</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-red-800 mb-2">客戶保障措施</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• 立即停止受影響服務</li>
                        <li>• 提供替代解決方案</li>
                        <li>• 協助損害評估</li>
                        <li>• 積極處理與補救</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-red-800 mb-2">緊急聯絡</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• 24/7 緊急熱線</li>
                        <li>• 專屬事件經理</li>
                        <li>• 即時狀態更新</li>
                        <li>• 法律支援協助</li>
                      </ul>
                    </div>
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