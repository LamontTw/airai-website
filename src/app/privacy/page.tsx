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
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function PrivacyPolicy() {
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
              <ShieldCheckIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                隱私權政策
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              我們重視您的隱私權，本政策說明我們如何收集、使用和保護您的個人資料
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>最後更新：2024年5月15日</span>
              </div>
              <div className="flex items-center">
                <DocumentTextIcon className="w-4 h-4 mr-1" />
                <span>版本：1.2</span>
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
              
              {/* Introduction */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 text-blue-600 mr-3" />
                  政策概述
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    智流科技有限公司（以下稱「本公司」或「我們」）承諾保護您的隱私權。
                    本隱私權政策適用於我們的網站、服務及相關應用程式，
                    說明我們如何收集、使用、揭露、傳輸及儲存您的個人資料。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    在您使用我們的服務之前，請仔細閱讀本政策。
                    繼續使用我們的服務即表示您同意本政策的條款。
                  </p>
                </div>
              </motion.section>

              {/* Information Collection */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-green-600 mr-3" />
                  資料收集範圍
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">我們收集的資料類型</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">個人識別資料</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 姓名、職稱</li>
                          <li>• 電子郵件地址</li>
                          <li>• 電話號碼</li>
                          <li>• 公司名稱及地址</li>
                          <li>• IP地址</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">技術資料</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 瀏覽器類型及版本</li>
                          <li>• 作業系統</li>
                          <li>• Cookie及追蹤技術</li>
                          <li>• 網站使用行為</li>
                          <li>• 裝置資訊</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-4">資料收集方式</h3>
                    <ul className="text-yellow-800 space-y-2">
                      <li>• <strong>直接收集：</strong>當您填寫聯絡表單、註冊服務或與我們通訊時</li>
                      <li>• <strong>自動收集：</strong>透過Cookie、網站分析工具等技術</li>
                      <li>• <strong>第三方來源：</strong>社群媒體平台、商業夥伴提供</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Information Usage */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <LockClosedIcon className="w-6 h-6 text-purple-600 mr-3" />
                  資料使用目的
                </h2>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">主要用途</h3>
                      <ul className="text-purple-700 space-y-2">
                        <li>• 提供AI諮詢及技術服務</li>
                        <li>• 回應您的詢問及需求</li>
                        <li>• 處理服務申請及合約</li>
                        <li>• 客戶關係管理</li>
                        <li>• 服務品質改善</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">次要用途</h3>
                      <ul className="text-purple-700 space-y-2">
                        <li>• 發送服務相關通知</li>
                        <li>• 提供產業資訊及教育內容</li>
                        <li>• 網站功能優化</li>
                        <li>• 安全防護及詐欺預防</li>
                        <li>• 法律合規要求</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Information Sharing */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ExclamationTriangleIcon className="w-6 h-6 text-orange-600 mr-3" />
                  資料分享及揭露
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-orange-900 mb-4">我們不會販售您的個人資料</h3>
                    <p className="text-orange-800 mb-4">
                      我們承諾不會為商業目的販售、租賃或交換您的個人資料。
                      只有在以下情況下，我們才會分享您的資料：
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-orange-800 mb-2">合法分享情況</h4>
                        <ul className="text-orange-700 text-sm space-y-1">
                          <li>• 獲得您的明確同意</li>
                          <li>• 履行法律義務</li>
                          <li>• 保護合法權益</li>
                          <li>• 服務提供必要</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-800 mb-2">第三方服務商</h4>
                        <ul className="text-orange-700 text-sm space-y-1">
                          <li>• 雲端服務提供商</li>
                          <li>• 分析工具供應商</li>
                          <li>• 電子郵件服務商</li>
                          <li>• 技術支援合作夥伴</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Data Security */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 mr-3" />
                  資料安全保護
                </h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <LockClosedIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-blue-900 mb-2">加密傳輸</h3>
                      <p className="text-blue-700 text-sm">
                        使用SSL/TLS加密技術保護資料傳輸安全
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <ShieldCheckIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-blue-900 mb-2">存取控制</h3>
                      <p className="text-blue-700 text-sm">
                        實施嚴格的存取權限控制和身份驗證
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <ClockIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-blue-900 mb-2">定期檢查</h3>
                      <p className="text-blue-700 text-sm">
                        定期進行安全漏洞檢測和系統更新
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* User Rights */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-green-600 mr-3" />
                  您的權利
                </h2>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-green-800 mb-6">
                    根據個人資料保護法，您對於自己的個人資料享有以下權利：
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-green-900 mb-3">基本權利</h3>
                      <ul className="text-green-700 space-y-2">
                        <li>• <strong>查詢權：</strong>要求查詢您的個人資料</li>
                        <li>• <strong>更正權：</strong>要求更正錯誤資料</li>
                        <li>• <strong>刪除權：</strong>要求刪除個人資料</li>
                        <li>• <strong>停止處理權：</strong>要求停止特定處理</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-900 mb-3">行使方式</h3>
                      <ul className="text-green-700 space-y-2">
                        <li>• 透過客服電話聯絡</li>
                        <li>• 發送電子郵件申請</li>
                        <li>• 填寫線上表單</li>
                        <li>• 郵寄書面申請</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Cookies */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 text-purple-600 mr-3" />
                  Cookie政策
                </h2>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <p className="text-purple-800 mb-4">
                    我們使用Cookie及類似技術來改善您的瀏覽體驗：
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                      <h4 className="font-medium text-purple-800 mb-2">必要Cookie</h4>
                      <p className="text-purple-700 text-sm">
                        維持網站基本功能運作，無法被停用
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                      <h4 className="font-medium text-purple-800 mb-2">分析Cookie</h4>
                      <p className="text-purple-700 text-sm">
                        幫助我們了解網站使用情況，改善服務品質
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                      <h4 className="font-medium text-purple-800 mb-2">行銷Cookie</h4>
                      <p className="text-purple-700 text-sm">
                        提供個人化內容，需要您的同意才會啟用
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Contact Information */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <PhoneIcon className="w-6 h-6 text-blue-600 mr-3" />
                  聯絡我們
                </h2>
                
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">對隱私權政策有疑問？</h3>
                    <p className="text-blue-100">
                      如您對本隱私權政策或個人資料處理有任何疑問，歡迎隨時聯絡我們
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <PhoneIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">客服電話</div>
                      <div className="text-blue-100 text-sm">+886 953-202-811</div>
                    </div>
                    <div>
                      <EnvelopeIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">電子郵件</div>
                      <div className="text-blue-100 text-sm">contact@airai.tw</div>
                    </div>
                    <div>
                      <DocumentTextIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">營業時間</div>
                      <div className="text-blue-100 text-sm">週一至週五 09:00-18:00</div>
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