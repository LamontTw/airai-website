import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  CpuChipIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "サービス | AIRAI テクノロジー - 企業AI導入コンサルティング",
  description: "AIRAIテクノロジーの企業AI導入サービス。AI技術選択、ROI計算、実装ガイダンス、完全サポートを提供します。",
  keywords: [
    "AI導入サービス",
    "企業AI コンサルティング",
    "AI技術選択",
    "ROI計算",
    "実装ガイダンス",
    "AIソリューション",
    "デジタル変革"
  ],
  openGraph: {
    title: "サービス | AIRAI テクノロジー",
    description: "AIRAIテクノロジーの企業AI導入サービス。AI技術選択、ROI計算、実装ガイダンス、完全サポートを提供します。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/services`,
    siteName: "AIRAI テクノロジー",
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/services`,
    languages: {
      'zh-TW': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/services`,
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/services`,
      'ja-JP': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/services`,
    },
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: CpuChipIcon,
      title: "AI技術選択コンサルティング",
      description: "お客様のビジネスニーズに最適なAI技術を科学的に選択します",
      features: [
        "技術成熟度評価",
        "コスト効果分析",
        "実装難易度評価",
        "ROI予測計算"
      ],
      color: "blue"
    },
    {
      icon: ChartBarIcon,
      title: "AI導入戦略策定",
      description: "段階的で実現可能なAI導入ロードマップを作成します",
      features: [
        "現状分析と課題特定",
        "導入優先順位設定",
        "リスク評価と対策",
        "成功指標定義"
      ],
      color: "green"
    },
    {
      icon: UserGroupIcon,
      title: "実装サポートサービス",
      description: "計画から運用まで全工程をサポートします",
      features: [
        "プロジェクト管理",
        "技術実装支援",
        "スタッフトレーニング",
        "運用最適化"
      ],
      color: "purple"
    }
  ];

  const aiApplications = [
    {
      title: "インテリジェントカスタマーサービス",
      description: "24/7自動応答、85%以上の問い合わせを自動処理",
      benefits: ["応答時間短縮", "顧客満足度向上", "人件費削減"],
      icon: "🤖"
    },
    {
      title: "予測分析システム",
      description: "販売予測、在庫最適化、需要予測の精度向上",
      benefits: ["在庫コスト削減", "売上機会増加", "意思決定支援"],
      icon: "📊"
    },
    {
      title: "プロセス自動化（RPA）",
      description: "反復的業務の自動化、人為ミスの削減",
      benefits: ["作業効率向上", "エラー率削減", "コスト削減"],
      icon: "⚙️"
    },
    {
      title: "画像・文書認識",
      description: "OCR、画像分析、品質検査の自動化",
      benefits: ["処理速度向上", "精度向上", "人力節約"],
      icon: "👁️"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "初期評価",
      description: "現状分析とAI導入可能性評価",
      duration: "1-2週間"
    },
    {
      step: "02", 
      title: "戦略策定",
      description: "カスタマイズAI導入戦略とロードマップ",
      duration: "2-3週間"
    },
    {
      step: "03",
      title: "技術選択",
      description: "最適なAI技術とソリューション選択",
      duration: "1-2週間"
    },
    {
      step: "04",
      title: "実装展開",
      description: "段階的実装とテスト検証",
      duration: "4-12週間"
    },
    {
      step: "05",
      title: "運用最適化",
      description: "継続的監視と性能最適化",
      duration: "継続的"
    }
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
              企業AI導入サービス
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              科学的手法と豊富な経験で、お客様のAI変革を成功に導きます
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-600 rounded-full p-4">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              コア<span className="gradient-text">サービス</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              お客様のニーズに合わせた包括的なAI導入サービスを提供します
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <service.icon className={`w-12 h-12 text-${service.color}-600 mb-6`} />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircleIcon className={`w-5 h-5 text-${service.color}-600 mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Applications */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI<span className="gradient-text">応用分野</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              様々な業界でAI技術を活用し、具体的な価値を創造します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiApplications.map((app, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{app.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {app.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {app.description}
                </p>
                <div className="space-y-2">
                  {app.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-green-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              サービス<span className="gradient-text">プロセス</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              体系的で実証済みのプロセスで、AI導入の成功を保証します
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {step.description}
                    </p>
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              なぜ<span className="gradient-text">AIRAI</span>を選ぶのか？
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <LightBulbIcon className="w-12 h-12 text-yellow-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">豊富な経験</h3>
              <p className="text-gray-600">
                100+の成功事例と85%の平均自動化率を誇る実績
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <ShieldCheckIcon className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">確実な成果</h3>
              <p className="text-gray-600">
                科学的手法と測定可能な指標で確実な成果を保証
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <ClockIcon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">迅速な導入</h3>
              <p className="text-gray-600">
                平均6ヶ月でROIを実現する効率的な導入プロセス
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-max">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI導入の第一歩を踏み出しませんか？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              無料相談で、お客様のビジネスに最適なAIソリューションをご提案します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ja/contact"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                無料相談を申し込む
              </a>
              <a
                href="/ja/cases"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                成功事例を見る
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