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
  XCircleIcon,
  CheckCircleIcon,
  LockClosedIcon,
  ExclamationTriangleIcon
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
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Contact Information */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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