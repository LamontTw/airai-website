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
                プライバシー・データ保護ポリシー
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              法人のお客様向けに設計されたエンタープライズグレードのデータ保護コミットメント。
              お客様のビジネスデータとAIプロジェクト情報に最高レベルのセキュリティを確保します
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>最終更新：2025年1月</span>
              </div>
              <div className="flex items-center">
                <DocumentTextIcon className="w-4 h-4 mr-1" />
                <span>バージョン：2.0</span>
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
                  サービス範囲と機密保持の約束
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    AIRAI Technologyは、中小企業向けのAI自動化ソリューションの提供に特化しています。
                    私たちはビジネスデータの重要性を理解し、お客様のプロジェクトデータ、
                    営業秘密、知的財産を最高水準で保護することをお約束します。
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">コア原則</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• データの最小化</li>
                        <li>• プロジェクトデータの分離</li>
                        <li>• 厳格なアクセス制御</li>
                        <li>• 透明性のある処理</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">私たちの約束</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 台湾のデータ保護法を遵守</li>
                        <li>• NDA契約の締結</li>
                        <li>• 定期的な内部セキュリティチェック</li>
                        <li>• 継続的なセキュリティ改善</li>
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
                  ビジネスデータの収集と分類
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">ビジネスコラボレーションデータ</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-green-800 mb-2">企業情報</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 会社名・登記番号</li>
                          <li>• 担当者情報</li>
                          <li>• 業界カテゴリー</li>
                          <li>• 企業規模</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-green-800 mb-2">プロジェクト要件</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• ビジネスプロセスの説明</li>
                          <li>• システムアーキテクチャ情報</li>
                          <li>• 技術仕様</li>
                          <li>• 期待目標とKPI</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-green-800 mb-2">プロジェクト実行データ</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• APIキーと認証情報</li>
                          <li>• テストデータセット</li>
                          <li>• システムログ</li>
                          <li>• パフォーマンス指標</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-4">データ分類管理</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <KeyIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-red-800">機密</h4>
                        <p className="text-sm text-gray-600">営業秘密、ソースコード、APIキー</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <ShieldCheckIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-yellow-800">内部</h4>
                        <p className="text-sm text-gray-600">プロジェクト文書、テストデータ、会議メモ</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <DocumentTextIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-green-800">公開</h4>
                        <p className="text-sm text-gray-600">企業情報、製品仕様、マーケティング</p>
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
                  AIプロジェクトデータ処理原則
                </h2>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-4">データ処理のコミットメント</h3>
                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                      <p className="text-purple-800 mb-3">
                        <strong>重要な通知：</strong>お客様のプロジェクトデータは、汎用AIモデルのトレーニングやプロジェクト間での使用には決して使用されません
                      </p>
                      <ul className="text-purple-700 space-y-2 text-sm">
                        <li>✓ 独立した環境でのプロジェクトデータの完全な分離</li>
                        <li>✓ 特定のプロジェクト目標専用のクライアントデータ使用</li>
                        <li>✓ プロジェクト完了後、契約条件に従ってデータを削除または返却</li>
                        <li>✓ 一般的なサービス改善のためにクライアントデータを使用しない</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">AIモデル処理</h3>
                      <ul className="text-purple-700 space-y-2">
                        <li>• <strong>ファインチューニング：</strong>承認されたクライアントデータのみ使用</li>
                        <li>• <strong>ベクターデータベース：</strong>プロジェクト固有の展開</li>
                        <li>• <strong>プロンプトエンジニアリング：</strong>他のクライアント情報なし</li>
                        <li>• <strong>テストデータ：</strong>非識別化処理</li>
                        <li>• <strong>モデル出力：</strong>クライアント独占所有権</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">使用制限</h3>
                      <ul className="text-purple-700 space-y-2">
                        <li>• <strong>目的：</strong>契約プロジェクト範囲に限定</li>
                        <li>• <strong>時間：</strong>プロジェクト期間内のみ使用</li>
                        <li>• <strong>人員：</strong>承認されたチームメンバーのみ</li>
                        <li>• <strong>場所：</strong>合意された地域内でデータ保管</li>
                        <li>• <strong>共有：</strong>同意なしに第三者と共有しない</li>
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
                  サードパーティサービスとAPI使用
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-orange-900 mb-4">AIサービスプロバイダー</h3>
                    <p className="text-orange-800 mb-4">
                      業界をリードするAIサービスを使用し、すべてのサードパーティサービスにデータ処理契約（DPA）を締結
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-orange-800 mb-2">主要AIサービス</h4>
                        <ul className="text-orange-700 text-sm space-y-2">
                          <li>
                            <strong>OpenAI API</strong>
                            <p className="text-xs text-gray-600">• エンタープライズ契約、トレーニングに使用されないデータ</p>
                          </li>
                          <li>
                            <strong>Claude (Anthropic)</strong>
                            <p className="text-xs text-gray-600">• プライバシーファースト設計、データ保持なし</p>
                          </li>
                          <li>
                            <strong>Azure AI Services</strong>
                            <p className="text-xs text-gray-600">• エンタープライズコンプライアンス、地域データセンター</p>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-orange-800 mb-2">インフラサービス</h4>
                        <ul className="text-orange-700 text-sm space-y-2">
                          <li>
                            <strong>Google Cloud Platform</strong>
                            <p className="text-xs text-gray-600">• 地域データセンター、ISO認証</p>
                          </li>
                          <li>
                            <strong>AWS</strong>
                            <p className="text-xs text-gray-600">• エンタープライズグレードセキュリティ、コンプライアンス認証</p>
                          </li>
                          <li>
                            <strong>Vercel/Netlify</strong>
                            <p className="text-xs text-gray-600">• フロントエンドホスティング、グローバルCDN</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-yellow-800 text-sm">
                        <strong>重要：</strong>すべてのサードパーティサービスの使用は、事前にクライアントに開示され、明示的な同意を得ます。
                        クライアントは特定のサービスプロバイダーまたはプライベートデプロイメントソリューションを要求できます。
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
                  エンタープライズグレードのセキュリティ対策
                </h2>
                
                <div className="space-y-6">
                  {/* Technical Security */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">技術的保護措置</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
                          <LockClosedIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-blue-800 mb-2">データ暗号化</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• AES-256 保管時暗号化</li>
                          <li>• TLS 1.3 転送時暗号化</li>
                          <li>• エンドツーエンド暗号化</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
                          <ServerIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-blue-800 mb-2">インフラストラクチャ</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• ファイアウォール＆DDoS保護</li>
                          <li>• コンテナ化された分離</li>
                          <li>• 自動バックアップ＆DR</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
                          <KeyIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-blue-800 mb-2">アクセス制御</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• 多要素認証</li>
                          <li>• ロールベースアクセス制御</li>
                          <li>• APIキー管理</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Management Security */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">管理的保護措置</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">人員管理</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 全スタッフNDA署名</li>
                          <li>• 定期的なセキュリティ研修</li>
                          <li>• 最小権限の原則</li>
                          <li>• バックグラウンドチェック</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">監査と監視</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 24時間365日システム監視</li>
                          <li>• アクセスログ記録</li>
                          <li>• 定期的なセキュリティ監査</li>
                          <li>• 異常検知</li>
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
                  データ保持と削除ポリシー
                </h2>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-4">データライフサイクル管理</h3>
                    <div className="bg-white p-4 rounded-lg border border-indigo-200">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">プロジェクト実行期間</h4>
                            <p className="text-gray-600 text-sm">プロジェクト専用環境でデータを暗号化して保存し、定期的にバックアップ</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">プロジェクト終了後30日</h4>
                            <p className="text-gray-600 text-sm">データエクスポートサービスを提供し、クライアントがすべての成果物を受け取ることを確認</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">保持期間満了</h4>
                            <p className="text-gray-600 text-sm">別途合意がない限り、プロジェクトデータは6か月後に自動的に削除</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">4</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">完全削除</h4>
                            <p className="text-gray-600 text-sm">データが回復不可能であることを保証する安全な削除方法</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-indigo-800 mb-2">保持例外</h4>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• 法的保持要件</li>
                        <li>• 訴訟ホールドのニーズ</li>
                        <li>• クライアント要求の延長</li>
                        <li>• サービスメンテナンスのニーズ</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-indigo-800 mb-2">クライアントの権利</h4>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• いつでもデータコピーを要求</li>
                        <li>• 早期削除を要求</li>
                        <li>• 削除確認証明書</li>
                        <li>• データポータビリティの権利</li>
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
                  クライアントの権利と保証
                </h2>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">お客様のデータ管理権</h3>
                    <p className="text-green-800 mb-4">
                      当社のエンタープライズクライアントとして、プロジェクトデータの完全な管理と所有権を持ちます
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-3">データアクセス権</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• リアルタイムプロジェクトデータ閲覧</li>
                        <li>• 完全なデータコピーのダウンロード</li>
                        <li>• 処理記録へのアクセス</li>
                        <li>• 使用レポートの表示</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-3">データコントロール権</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• 不正確なデータの修正</li>
                        <li>• 処理範囲の制限</li>
                        <li>• 処理停止の要求</li>
                        <li>• 使用許可の取り消し</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-3">透明性の保証</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• データ処理方法の理解</li>
                        <li>• セキュリティ説明の要求</li>
                        <li>• 処理記録の取得</li>
                        <li>• データ保存場所の指定</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">知的財産宣言</h4>
                    <p className="text-blue-700 text-sm">
                      クライアントが提供したすべてのデータおよび生成されたモデル/結果は、完全にクライアントに帰属します。
                      当社は所有権を主張せず、クライアントの知的財産保護を支援します。
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
                  セキュリティインシデント対応メカニズム
                </h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">インシデント通知プロセス</h3>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">0-2時間</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">内部評価と初期封じ込め</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">2-24時間</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">影響を受けたクライアントに予備報告書を通知</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">24-72時間</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">完全な調査報告書と修復措置</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">7日間</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">改善措置と予防計画</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-red-800 mb-2">クライアント保護措置</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• 影響を受けたサービスの即時停止</li>
                        <li>• 代替ソリューションの提供</li>
                        <li>• 損害評価支援</li>
                        <li>• 積極的な修復対応</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-red-800 mb-2">緊急連絡先</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• 24時間365日緊急ホットライン</li>
                        <li>• 専任インシデントマネージャー</li>
                        <li>• リアルタイムステータス更新</li>
                        <li>• 法的支援サポート</li>
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