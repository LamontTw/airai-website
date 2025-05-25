'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  XCircleIcon,
  CheckCircleIcon,
  LockClosedIcon
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
              請仔細閱讀以下服務條款，這些條款規範您使用本公司服務的權利與義務
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>最後更新：2024年5月15日</span>
              </div>
              <div className="flex items-center">
                <DocumentTextIcon className="w-4 h-4 mr-1" />
                <span>版本：2.1</span>
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
              
              {/* Introduction */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 text-green-600 mr-3" />
                  條款概述
                </h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    歡迎使用智流科技有限公司（以下稱「本公司」、「我們」或「智流科技」）提供的服務。
                    本服務條款（以下稱「本條款」）構成您與本公司之間具有法律約束力的協議。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    透過存取或使用我們的網站、服務或產品，您同意受本條款約束。
                    如果您不同意本條款，請勿使用我們的服務。
                  </p>
                </div>
              </motion.section>

              {/* Service Description */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-blue-600 mr-3" />
                  服務內容
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">我們提供的服務包括</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">AI諮詢服務</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• AI策略規劃與評估</li>
                          <li>• 技術方案設計</li>
                          <li>• 實施路線圖制定</li>
                          <li>• 效益評估與優化</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">技術服務</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• AI系統開發</li>
                          <li>• 系統整合服務</li>
                          <li>• 資料分析與處理</li>
                          <li>• 技術支援與維護</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">教育訓練</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• AI技術培訓課程</li>
                          <li>• 企業內訓服務</li>
                          <li>• 線上學習平台</li>
                          <li>• 認證輔導</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">數位內容</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• 產業報告與分析</li>
                          <li>• 技術白皮書</li>
                          <li>• 實用工具與模板</li>
                          <li>• 網站資源內容</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* User Responsibilities */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-600 mr-3" />
                  用戶責任與義務
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-emerald-900 mb-4">使用規範</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-emerald-800 mb-2 flex items-center">
                          <CheckCircleIcon className="w-4 h-4 mr-2" />
                          允許的使用
                        </h4>
                        <ul className="text-emerald-700 text-sm space-y-1">
                          <li>• 合法商業用途</li>
                          <li>• 教育學習目的</li>
                          <li>• 個人研究使用</li>
                          <li>• 遵循授權範圍</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-800 mb-2 flex items-center">
                          <XCircleIcon className="w-4 h-4 mr-2" />
                          禁止的行為
                        </h4>
                        <ul className="text-red-700 text-sm space-y-1">
                          <li>• 非法或詐欺用途</li>
                          <li>• 侵犯智慧財產權</li>
                          <li>• 散布惡意軟體</li>
                          <li>• 未經授權的轉售</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-4">帳戶與安全</h3>
                    <ul className="text-yellow-800 space-y-2">
                      <li>• <strong>帳戶責任：</strong>您需對您的帳戶活動負責</li>
                      <li>• <strong>密碼安全：</strong>妥善保管登入憑證，定期更新密碼</li>
                      <li>• <strong>資料正確性：</strong>提供真實、準確的個人或公司資料</li>
                      <li>• <strong>及時通報：</strong>發現帳戶異常時立即通知我們</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Payment Terms */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CurrencyDollarIcon className="w-6 h-6 text-purple-600 mr-3" />
                  付款條款
                </h2>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">付款方式</h3>
                      <ul className="text-purple-700 space-y-2">
                        <li>• 銀行轉帳</li>
                        <li>• 信用卡付款</li>
                        <li>• 公司支票</li>
                        <li>• 線上支付平台</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">計費政策</h3>
                      <ul className="text-purple-700 space-y-2">
                        <li>• 服務開始前預付款</li>
                        <li>• 月結30天付款條件</li>
                        <li>• 逾期加收利息費用</li>
                        <li>• 價格不含稅金</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">退款政策</h4>
                    <p className="text-purple-700 text-sm">
                      服務開始前7天內可申請全額退款。服務進行中的退款將依據完成進度計算，
                      客製化服務一旦開始開發即不接受退款申請。
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Intellectual Property */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <LockClosedIcon className="w-6 h-6 text-indigo-600 mr-3" />
                  智慧財產權
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-4">權利歸屬</h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <h4 className="font-medium text-indigo-800 mb-2">本公司保留權利</h4>
                        <ul className="text-indigo-700 text-sm space-y-1">
                          <li>• 網站內容、設計與功能</li>
                          <li>• 軟體程式碼與演算法</li>
                          <li>• 商標、標誌與品牌識別</li>
                          <li>• 專有技術與方法論</li>
                          <li>• 培訓教材與文件</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <h4 className="font-medium text-indigo-800 mb-2">客戶資料權利</h4>
                        <ul className="text-indigo-700 text-sm space-y-1">
                          <li>• 客戶保有原始資料所有權</li>
                          <li>• 可要求刪除或轉移資料</li>
                          <li>• 衍生分析結果共同擁有</li>
                          <li>• 客製化解決方案依約定分配</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Liability */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ExclamationTriangleIcon className="w-6 h-6 text-orange-600 mr-3" />
                  責任限制
                </h2>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-orange-900 mb-4">服務免責聲明</h3>
                      <p className="text-orange-800 mb-4">
                        我們的服務基於「現況」提供，不提供任何明示或暗示的保證。
                        我們不保證服務永遠可用、無錯誤或完全符合您的需求。
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border border-orange-200">
                        <h4 className="font-medium text-orange-800 mb-2">責任範圍</h4>
                        <ul className="text-orange-700 text-sm space-y-1">
                          <li>• 直接損失賠償</li>
                          <li>• 合約金額為賠償上限</li>
                          <li>• 30天內提出申請</li>
                          <li>• 需提供損失證明</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-orange-200">
                        <h4 className="font-medium text-orange-800 mb-2">免責事項</h4>
                        <ul className="text-orange-700 text-sm space-y-1">
                          <li>• 間接或後果性損失</li>
                          <li>• 第三方服務中斷</li>
                          <li>• 不可抗力事件</li>
                          <li>• 用戶操作錯誤</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Termination */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <XCircleIcon className="w-6 h-6 text-red-600 mr-3" />
                  服務終止
                </h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-red-900 mb-4">終止條件</h3>
                      <ul className="text-red-700 space-y-2">
                        <li>• <strong>雙方合意：</strong>協商終止服務</li>
                        <li>• <strong>違約終止：</strong>重大違約可立即終止</li>
                        <li>• <strong>通知終止：</strong>30天前書面通知</li>
                        <li>• <strong>自動終止：</strong>合約到期自然終止</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-900 mb-4">終止後處理</h3>
                      <ul className="text-red-700 space-y-2">
                        <li>• <strong>資料處理：</strong>依約定刪除或返還</li>
                        <li>• <strong>款項結算：</strong>已提供服務照常收費</li>
                        <li>• <strong>保密義務：</strong>持續有效不受影響</li>
                        <li>• <strong>爭議解決：</strong>依本條款約定處理</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Dispute Resolution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ScaleIcon className="w-6 h-6 text-teal-600 mr-3" />
                  爭議解決
                </h2>
                
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-teal-900 mb-4">解決程序</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-teal-200 text-center">
                          <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                            1
                          </div>
                          <h4 className="font-medium text-teal-800 mb-1">協商</h4>
                          <p className="text-teal-700 text-sm">雙方友善協商解決</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-teal-200 text-center">
                          <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                            2
                          </div>
                          <h4 className="font-medium text-teal-800 mb-1">調解</h4>
                          <p className="text-teal-700 text-sm">第三方機構調解</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-teal-200 text-center">
                          <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                            3
                          </div>
                          <h4 className="font-medium text-teal-800 mb-1">仲裁</h4>
                          <p className="text-teal-700 text-sm">仲裁機構裁決</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-teal-800 mb-2">管轄法院</h4>
                      <p className="text-teal-700 text-sm">
                        本條款適用中華民國法律。如需進入訴訟程序，
                        雙方同意以台灣台北地方法院為第一審管轄法院。
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Modifications */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ClockIcon className="w-6 h-6 text-gray-600 mr-3" />
                  條款修訂
                </h2>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    我們保留隨時修訂本服務條款的權利。重大修訂將於生效前30天通知用戶，
                    輕微修訂將在網站上公告。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">通知方式</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 電子郵件通知</li>
                        <li>• 網站公告</li>
                        <li>• 系統推播</li>
                        <li>• 客戶經理通知</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">生效時間</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 重大修訂：30天後生效</li>
                        <li>• 一般修訂：7天後生效</li>
                        <li>• 緊急修訂：立即生效</li>
                        <li>• 法規要求：配合調整</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Contact Information */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <PhoneIcon className="w-6 h-6 text-blue-600 mr-3" />
                  聯絡資訊
                </h2>
                
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">對服務條款有疑問？</h3>
                    <p className="text-green-100">
                      如您對本服務條款有任何疑問或需要協助，歡迎聯絡我們的客服團隊
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <PhoneIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">客服專線</div>
                      <div className="text-green-100 text-sm">+886 953-202-811</div>
                    </div>
                    <div>
                      <EnvelopeIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">服務信箱</div>
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
                      <strong>公司全名：</strong>智流科技有限公司<br />
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