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
  LockClosedIcon,
  BriefcaseIcon,
  CreditCardIcon,
  DocumentDuplicateIcon,
  HandRaisedIcon,
  WrenchScrewdriverIcon,
  ExclamationCircleIcon,
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
                サービス利用規約
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI自動化ソリューション専門サービス契約
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>最終更新：2025年1月</span>
              </div>
              <div className="flex items-center">
                <DocumentTextIcon className="w-4 h-4 mr-1" />
                <span>バージョン：3.0</span>
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
              
              {/* 1. サービス範囲と定義 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 text-green-600 mr-3" />
                  1. サービス範囲と定義
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">1.1 サービス内容</h3>
                    <p className="text-gray-700 mb-4">
                      智流科技有限公司（以下「当社」）は以下のAI自動化専門サービスを提供いたします：
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">AI ソリューション開発</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• カスタマイズAIモデル開発・訓練</li>
                          <li>• 自然言語処理（NLP）システム</li>
                          <li>• コンピュータビジョン・ソリューション</li>
                          <li>• 機械学習アルゴリズム最適化</li>
                          <li>• 深層学習モデル展開</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">ビジネスプロセス自動化</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• RPA（ロボティック・プロセス・オートメーション）</li>
                          <li>• ワークフロー最適化・統合</li>
                          <li>• データ処理自動化</li>
                          <li>• インテリジェント文書処理</li>
                          <li>• API統合・開発</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">システム統合サービス</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• ERP/CRMシステム統合</li>
                          <li>• クラウドプラットフォーム移行</li>
                          <li>• データベース統合・最適化</li>
                          <li>• 第三者サービス連携</li>
                          <li>• マイクロサービスアーキテクチャ設計</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">コンサルティング・サポート</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• AI戦略企画コンサルティング</li>
                          <li>• 技術実現可能性評価</li>
                          <li>• システムアーキテクチャ設計</li>
                          <li>• プロジェクト管理サービス</li>
                          <li>• 技術研修・知識移転</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-amber-900 mb-4">1.2 サービス制限</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 当社は法律・倫理規範に違反するサービスは提供いたしません</li>
                      <li>• ハードウェア機器の調達は含まれません（別途合意の場合を除く）</li>
                      <li>• 24時間365日のリアルタイムサポートは含まれません（追加サポートプランは別途）</li>
                      <li>• 第三者ソフトウェアのライセンス費用は含まれません</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 2. プロジェクトの実行と納品 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="w-6 h-6 text-blue-600 mr-3" />
                  2. プロジェクトの実行と納品
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">2.1 プロジェクト段階</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">第一段階：要件分析・企画</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• 要件ヒアリング・ドキュメント化（1-2週間）</li>
                          <li>• 技術実現可能性評価</li>
                          <li>• プロジェクト計画書・見積書作成</li>
                          <li>• 正式契約締結</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">第二段階：設計・開発</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• システムアーキテクチャ設計</li>
                          <li>• プロトタイプ開発・検証</li>
                          <li>• 反復開発（アジャイル開発手法）</li>
                          <li>• 定期進捗報告（週次または隔週）</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">第三段階：テスト・最適化</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• 単体テスト・結合テスト</li>
                          <li>• ユーザー受入テスト（UAT）</li>
                          <li>• パフォーマンス最適化・調整</li>
                          <li>• セキュリティ検査</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">第四段階：デプロイ・納品</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• 本番環境デプロイ</li>
                          <li>• システム稼働サポート</li>
                          <li>• ドキュメント納品（技術文書・操作マニュアル）</li>
                          <li>• 教育訓練</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">2.2 納品基準</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 全てのコードはコードレビューを実施済み</li>
                      <li>• テストカバレッジ80%以上</li>
                      <li>• 完全なAPIドキュメント提供</li>
                      <li>• デプロイガイド・保守マニュアル完備</li>
                      <li>• ソースコードはお客様指定のバージョン管理システムに格納</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 3. 支払条件 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCardIcon className="w-6 h-6 text-purple-600 mr-3" />
                  3. 支払条件
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-4">3.1 料金体系</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-purple-800 mb-2">固定価格プロジェクト</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 契約時：30% 着手金</li>
                          <li>• 設計完了時：30%</li>
                          <li>• UAT合格時：30%</li>
                          <li>• プロジェクト完了時：10% 最終金</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-800 mb-2">時間・材料ベース（T&M）</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 月次請求、月末締切</li>
                          <li>• 最低保証時間：80時間/月</li>
                          <li>• 超過稼働は事前承認制</li>
                          <li>• 詳細作業時間報告書提供</li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">3.2 支払規定</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 請求書発行後30日以内にお支払い</li>
                      <li>• 延滞の場合は月率1.5%の遅延損害金を申し受けます</li>
                      <li>• 60日超過の未払いの場合、サービス停止権を留保します</li>
                      <li>• 小切手は受け付けません。銀行振込またはクレジットカードのみ</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 4. 知的財産権 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentDuplicateIcon className="w-6 h-6 text-indigo-600 mr-3" />
                  4. 知的財産権
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-4">4.1 所有権の帰属</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-indigo-800 mb-2">お客様の所有物</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• お客様専用に開発されたカスタマイズコード</li>
                          <li>• プロジェクト関連文書・報告書</li>
                          <li>• お客様提供のデータ・コンテンツ</li>
                          <li>• 訓練済みAIモデル（お客様データ使用）</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-indigo-800 mb-2">当社が保有するもの</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 既存のフレームワーク・ツール・ライブラリ</li>
                          <li>• 汎用アルゴリズム・方法論</li>
                          <li>• 内部開発ツール・プラットフォーム</li>
                          <li>• 専門知識・経験</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">4.2 ライセンス条項</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• お客様は所有コンテンツの永続的使用権を取得</li>
                      <li>• 当社は汎用ソリューションを他プロジェクトに利用する権利を保有</li>
                      <li>• 第三者コンポーネントは原ライセンス条項に従う</li>
                      <li>• オープンソースソフトウェアは該当するオープンソースライセンスに準拠</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 5. 機密保持 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <LockClosedIcon className="w-6 h-6 text-red-600 mr-3" />
                  5. 機密保持
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">5.1 機密保持義務</h3>
                    <p className="text-gray-700 mb-4">
                      双方は本契約履行により知り得た相手方の営業秘密について機密保持義務を負います：
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 第三者への機密情報開示禁止</li>
                      <li>• 本契約履行目的のみの使用</li>
                      <li>• 合理的な保護措置の実施</li>
                      <li>• 機密保持期間：契約終了後5年間</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">5.2 例外事項</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 受領者が既に知っていた公開情報</li>
                      <li>• 契約違反によらず公開情報となったもの</li>
                      <li>• 第三者から適法に取得した情報</li>
                      <li>• 法律により開示を要求された情報</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 6. 責任制限と免責事項 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ExclamationCircleIcon className="w-6 h-6 text-amber-600 mr-3" />
                  6. 責任制限と免責事項
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-amber-900 mb-4">6.1 責任制限</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 当社の総賠償責任は当該プロジェクト契約総額を超えません</li>
                      <li>• 間接的、特別または派生的損害については責任を負いません</li>
                      <li>• 利益損失または営業機会損失については責任を負いません</li>
                      <li>• データ損失については責任を負いません（お客様にてバックアップを実施）</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">6.2 免責事由</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 不可抗力（天災、戦争、ストライキ等）</li>
                      <li>• 第三者サービス中断または障害</li>
                      <li>• お客様提供の誤った情報または要件変更</li>
                      <li>• お客様による必要な協力の未提供</li>
                      <li>• サイバー攻撃またはセキュリティ事件（合理的な防護義務を履行済み）</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 7. 保証とメンテナンス */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <WrenchScrewdriverIcon className="w-6 h-6 text-teal-600 mr-3" />
                  7. 保証とメンテナンス
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-teal-900 mb-4">7.1 保証範囲</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-teal-800 mb-2">無償保証（30日間）</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• プログラムエラー修正</li>
                          <li>• 機能の仕様書不適合</li>
                          <li>• システム統合問題</li>
                          <li>• リモート技術サポート</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-teal-800 mb-2">有償メンテナンスサービス</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• 機能強化・最適化</li>
                          <li>• 新要件開発</li>
                          <li>• パフォーマンスチューニング</li>
                          <li>• 定期ヘルスチェック報告</li>
                          <li>• 優先技術サポート</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">7.2 サービスレベル合意（SLA）</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">問題レベル</th>
                            <th className="text-left py-2">定義</th>
                            <th className="text-left py-2">応答時間</th>
                            <th className="text-left py-2">解決時間</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 text-red-600 font-medium">緊急</td>
                            <td className="py-2">システム完全停止</td>
                            <td className="py-2">2時間以内</td>
                            <td className="py-2">24時間以内</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 text-amber-600 font-medium">高</td>
                            <td className="py-2">主要機能への影響</td>
                            <td className="py-2">4時間以内</td>
                            <td className="py-2">48時間以内</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 text-blue-600 font-medium">中</td>
                            <td className="py-2">副次機能の問題</td>
                            <td className="py-2">8時間以内</td>
                            <td className="py-2">5営業日</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-green-600 font-medium">低</td>
                            <td className="py-2">提案または軽微な問題</td>
                            <td className="py-2">24時間以内</td>
                            <td className="py-2">次回更新時</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 8. 契約終了 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <HandRaisedIcon className="w-6 h-6 text-gray-600 mr-3" />
                  8. 契約終了
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">8.1 終了条件</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• プロジェクト完了および検収合格</li>
                      <li>• いずれかの当事者による30日前書面通知</li>
                      <li>• 重大な契約違反で15日以内に是正されない場合</li>
                      <li>• 不可抗力が60日以上継続</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">8.2 終了後の処理</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 完了作業分の費用精算</li>
                      <li>• 全プロジェクトデータ・文書の引継ぎ</li>
                      <li>• お客様機密データの削除</li>
                      <li>• 30日間の移行サポート提供</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 9. 紛争解決 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ScaleIcon className="w-6 h-6 text-indigo-600 mr-3" />
                  9. 紛争解決
                </h2>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <ul className="text-gray-700 space-y-2">
                    <li>• 本契約は中華民国法を準拠法とします</li>
                    <li>• 紛争は優先的に協議により解決を図ります</li>
                    <li>• 協議が不調の場合、台湾台北地方法院の管轄とします</li>
                    <li>• または中華民国仲裁協会への仲裁申立てを選択可能です</li>
                    <li>• 紛争期間中も他の契約条項の履行には影響しません</li>
                  </ul>
                </div>
              </motion.section>

              {/* 10. その他の条項 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 text-gray-600 mr-3" />
                  10. その他の条項
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">10.1 一般条項</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 本条項は双方の完全な合意を構成します</li>
                      <li>• いかなる修正も双方の書面合意が必要です</li>
                      <li>• 条項の一部無効は他条項の効力に影響しません</li>
                      <li>• 契約上の権利義務の第三者への譲渡は禁止します</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">10.2 データ保護</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• 個人情報保護法の遵守</li>
                      <li>• 適切なセキュリティ対策の実施</li>
                      <li>• データの合意目的のみの使用</li>
                      <li>• お客様のコンプライアンス要求への協力</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* お問い合わせ情報 */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BuildingOfficeIcon className="w-6 h-6 text-green-600 mr-3" />
                  お問い合わせ
                </h2>
                
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">プロジェクトのご相談をお待ちしています</h3>
                    <p className="text-green-100">
                      専門チームが、お客様に最適なAI自動化ソリューションを提供いたします
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <PhoneIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">営業専用電話</div>
                      <div className="text-green-100 text-sm">+886 953-202-811</div>
                    </div>
                    <div>
                      <EnvelopeIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">ビジネスメール</div>
                      <div className="text-green-100 text-sm">contact@airai.tw</div>
                    </div>
                    <div>
                      <ClockIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">サービス時間</div>
                      <div className="text-green-100 text-sm">月曜日〜金曜日 09:00-18:00</div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-6 pt-6 border-t border-green-500">
                    <p className="text-green-100 text-sm">
                      <strong>会社名：</strong>智流科技有限公司 AIRAI Technology Co., Ltd.<br />
                      <strong>統一編号：</strong>93979905<br />
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