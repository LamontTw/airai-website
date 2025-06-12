import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  ChartBarIcon, 
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "成功事例 | AIRAI テクノロジー - 企業AI導入実績",
  description: "AIRAIテクノロジーの企業AI導入成功事例。製造業、小売業、金融業、物流業での具体的な成果と効果をご紹介します。",
  keywords: [
    "AI導入成功事例",
    "企業AI実績",
    "製造業AI",
    "小売業AI",
    "金融業AI",
    "物流業AI",
    "ROI実績",
    "自動化事例"
  ],
  openGraph: {
    title: "成功事例 | AIRAI テクノロジー",
    description: "AIRAIテクノロジーの企業AI導入成功事例。製造業、小売業、金融業、物流業での具体的な成果と効果をご紹介します。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/cases`,
    siteName: "AIRAI テクノロジー",
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/cases`,
    languages: {
      'zh-TW': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/cases`,
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/cases`,
      'ja-JP': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/cases`,
    },
  },
};

export default function CasesPage() {
  const caseStudies = [
    {
      industry: "製造業",
      company: "台湾精密機械株式会社",
      challenge: "品質検査の人為ミスと検査時間の長さが生産効率を制限",
      solution: "コンピュータビジョンによる自動品質検査システムを導入",
      results: [
        { metric: "検査精度", value: "99.8%", improvement: "+15%" },
        { metric: "検査時間", value: "30秒/個", improvement: "-80%" },
        { metric: "人件費削減", value: "年間500万円", improvement: "40%" },
        { metric: "不良品率", value: "0.1%", improvement: "-90%" }
      ],
      testimonial: "AIRAIのソリューションにより、品質管理が革命的に改善されました。検査精度の向上と同時に大幅なコスト削減を実現できました。",
      author: "品質管理部長 陳先生",
      icon: "🏭",
      color: "blue"
    },
    {
      industry: "小売業",
      company: "台湾チェーンストア株式会社",
      challenge: "在庫管理の非効率と需要予測の不正確さによる機会損失",
      solution: "機械学習による需要予測と在庫最適化システムを構築",
      results: [
        { metric: "予測精度", value: "92%", improvement: "+25%" },
        { metric: "在庫回転率", value: "12回/年", improvement: "+50%" },
        { metric: "売上増加", value: "年間2000万円", improvement: "18%" },
        { metric: "在庫コスト", value: "30%削減", improvement: "-30%" }
      ],
      testimonial: "需要予測の精度向上により、適切な在庫レベルを維持しながら売上を大幅に増加させることができました。",
      author: "運営部長 林先生",
      icon: "🛒",
      color: "green"
    },
    {
      industry: "会計サービス業",
      company: "中小会計事務所",
      challenge: "税務シーズンに深夜まで残業、大量の反復的な書類処理が人手を消費",
      solution: "RPA自動化システムを設計し、財政部ウェブサイトに自動ログインして関連書類証明書をダウンロード・分類",
      results: [
        { metric: "作業時間", value: "深夜自動完了", improvement: "元の14時間" },
        { metric: "書類分類精度", value: "100%", improvement: "人的ミス排除" },
        { metric: "処理速度", value: "500%向上", improvement: "+500%" },
        { metric: "年間加班費削減", value: "20万円", improvement: "-60%" }
      ],
      testimonial: "システムが深夜に静かにすべての面倒な作業を完了し、翌朝出勤すると整理された書類を見ることができます。",
      author: "林会計師 所長",
      icon: "📊",
      color: "purple"
    },
    {
      industry: "物流業",
      company: "台湾物流グループ",
      challenge: "配送ルート最適化の困難と配送時間の予測不正確",
      solution: "AIルート最適化と配送時間予測システムを実装",
      results: [
        { metric: "配送効率", value: "35%向上", improvement: "+35%" },
        { metric: "燃料コスト", value: "年間1200万円削減", improvement: "-25%" },
        { metric: "配送時間精度", value: "95%", improvement: "+40%" },
        { metric: "顧客満足度", value: "98%", improvement: "+15%" }
      ],
      testimonial: "ルート最適化により配送効率が大幅に向上し、顧客満足度とコスト削減の両方を実現できました。",
      author: "物流部長 張先生",
      icon: "🚛",
      color: "orange"
    }
  ];

  const overallStats = [
    { label: "平均ROI期間", value: "6ヶ月", icon: ClockIcon },
    { label: "平均自動化率", value: "85%", icon: ChartBarIcon },
    { label: "顧客満足度", value: "99%", icon: UserGroupIcon },
    { label: "平均コスト削減", value: "35%", icon: CurrencyDollarIcon }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI導入成功事例
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              様々な業界での具体的な成果と効果をご紹介します
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-600 rounded-full p-4">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {overallStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              詳細<span className="gradient-text">事例研究</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              実際のプロジェクトから学ぶ、AI導入の具体的な成果と効果
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Case Info */}
                    <div>
                      <div className="flex items-center mb-6">
                        <span className="text-4xl mr-4">{caseStudy.icon}</span>
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 mb-2">
                            {caseStudy.industry}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {caseStudy.company}
                          </h3>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">課題</h4>
                          <p className="text-gray-600">{caseStudy.challenge}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">ソリューション</h4>
                          <p className="text-gray-600">{caseStudy.solution}</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                          <blockquote className="text-gray-700 italic mb-4">
                            &ldquo;{caseStudy.testimonial}&rdquo;
                          </blockquote>
                          <cite className="text-gray-600 font-medium">
                            — {caseStudy.author}
                          </cite>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-6">成果</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-blue-600 mb-2">
                                {result.value}
                              </div>
                              <div className="text-gray-700 font-medium mb-1">
                                {result.metric}
                              </div>
                              <div className="text-sm text-blue-600 font-medium">
                                {result.improvement}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              業界別<span className="gradient-text">AI効果</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              各業界でのAI導入による具体的な効果と改善点
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">製造業</h3>
              <ul className="space-y-2 text-gray-600">
                <li>品質検査自動化</li>
                <li>予防保全</li>
                <li>生産最適化</li>
                <li>不良品率削減</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">小売業</h3>
              <ul className="space-y-2 text-gray-600">
                <li>需要予測</li>
                <li>在庫最適化</li>
                <li>価格最適化</li>
                <li>顧客分析</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">会計サービス業</h3>
              <ul className="space-y-2 text-gray-600">
                <li>書類処理自動化</li>
                <li>税務計算</li>
                <li>データ分類</li>
                <li>プロセス最適化</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">物流業</h3>
              <ul className="space-y-2 text-gray-600">
                <li>ルート最適化</li>
                <li>配送予測</li>
                <li>倉庫管理</li>
                <li>需要予測</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              成功<span className="gradient-text">指標</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              数字で見るAI導入の具体的な効果
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">成功プロジェクト</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">平均自動化率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">6ヶ月</div>
              <div className="text-gray-600">平均ROI期間</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">35%</div>
              <div className="text-gray-600">平均コスト削減</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-max">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              あなたの会社も成功事例の一つになりませんか？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              無料相談で、お客様のビジネスに最適なAIソリューションをご提案します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ja/contact"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 inline-flex items-center justify-center"
              >
                無料相談を申し込む
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/ja/services"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                サービス詳細
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
} 