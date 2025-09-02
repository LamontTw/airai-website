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
                利用規約
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              以下の利用規約をよくお読みください。これらの規約は、当社のサービスをご利用いただく際の権利と義務を規定しています
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>最終更新：2024年5月15日</span>
              </div>
              <div className="flex items-center">
                <DocumentTextIcon className="w-4 h-4 mr-1" />
                <span>バージョン：2.1</span>
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
                  規約概要
                </h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    智流科技有限公司（以下「当社」「弊社」または「AIRAI Technology」といいます）のサービスをご利用いただき、ありがとうございます。
                    本利用規約（以下「本規約」といいます）は、お客様と当社の間の法的拘束力のある契約を構成します。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    当社のウェブサイト、サービス、または製品にアクセスまたはご利用いただくことで、お客様は本規約に同意したものとみなされます。
                    本規約に同意されない場合は、当社のサービスをご利用にならないでください。
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
                  サービス内容
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">提供するサービス</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">AIコンサルティングサービス</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• AI戦略の計画と評価</li>
                          <li>• 技術ソリューション設計</li>
                          <li>• 実装ロードマップ策定</li>
                          <li>• 効果評価と最適化</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">技術サービス</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• AIシステム開発</li>
                          <li>• システム統合サービス</li>
                          <li>• データ分析と処理</li>
                          <li>• 技術サポートとメンテナンス</li>
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
                  お問い合わせ
                </h2>
                
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">利用規約についてご質問がありますか？</h3>
                    <p className="text-green-100">
                      本利用規約についてご不明な点やサポートが必要な場合は、お気軽にカスタマーサービスチームまでお問い合わせください
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <PhoneIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">カスタマーサービス</div>
                      <div className="text-green-100 text-sm">+886 953-202-811</div>
                    </div>
                    <div>
                      <EnvelopeIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">サービスメール</div>
                      <div className="text-green-100 text-sm">contact@airai.tw</div>
                    </div>
                    <div>
                      <ClockIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">営業時間</div>
                      <div className="text-green-100 text-sm">月曜日〜金曜日 09:00-18:00</div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-6 pt-6 border-t border-green-500">
                    <p className="text-green-100 text-sm">
                      <strong>会社名：</strong>智流科技有限公司<br />
                      <strong>所在地：</strong>新北市板橋区倉後街26号<br />
                      <strong>LINE公式アカウント：</strong>@365cpgih
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