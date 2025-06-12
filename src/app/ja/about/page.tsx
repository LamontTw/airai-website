import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: "会社概要 | AIRAI テクノロジー - 台湾をリードする企業AI導入エキスパート",
  description: "AIRAIテクノロジーは台湾をリードする企業AI導入専門会社です。私たちの使命、ビジョン、コアバリューと専門チームについてご紹介します。",
  keywords: [
    "AIRAI テクノロジー",
    "会社概要",
    "企業AI導入",
    "台湾AI会社",
    "人工知能コンサルティング",
    "デジタル変革",
    "AI専門チーム"
  ],
  openGraph: {
    title: "会社概要 | AIRAI テクノロジー",
    description: "AIRAIテクノロジーは台湾をリードする企業AI導入専門会社です。私たちの使命、ビジョン、コアバリューについてご紹介します。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/about`,
    siteName: "AIRAI テクノロジー",
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/about`,
    languages: {
      'zh-TW': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/about`,
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/about`,
      'ja-JP': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/about`,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AIRAIテクノロジーについて
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              私たちは台湾をリードする企業AI導入専門会社として、
              企業のデジタル変革を成功に導く使命を担っています。
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-600 rounded-full p-4">
                <BuildingOfficeIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                私たちの<span className="gradient-text">使命</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  AIRAIテクノロジーの使命は、人工知能技術を通じて台湾の中小企業の
                  デジタル変革を推進し、企業の競争力向上と持続可能な成長を実現することです。
                </p>
                <p>
                  私たちは複雑なAI技術を理解しやすいソリューションに変換し、
                  企業が最小限のリスクで最大限の効果を得られるよう支援します。
                </p>
                <p>
                  すべての企業がAI技術の恩恵を受けられる未来を創造し、
                  台湾のデジタル経済発展に貢献することが私たちの目標です。
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">私たちのビジョン</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">台湾で最も信頼されるAI導入パートナーになる</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">AI技術の民主化を推進し、すべての企業がアクセス可能にする</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">アジア太平洋地域のAI導入リーダーとして認知される</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              私たちの<span className="gradient-text">コアバリュー</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              これらの価値観が私たちの行動指針であり、お客様への約束です
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <LightBulbIcon className="w-12 h-12 text-yellow-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">革新性</h3>
              <p className="text-gray-600">
                最新のAI技術を追求し、創造的なソリューションで
                お客様の課題を解決します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <ShieldCheckIcon className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">信頼性</h3>
              <p className="text-gray-600">
                透明性のあるプロセスと確実な成果で、
                お客様との長期的な信頼関係を築きます。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <UserGroupIcon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">協働</h3>
              <p className="text-gray-600">
                お客様と密接に協力し、共に成長し、
                共に成功を収めることを重視します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <ChartBarIcon className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">成果重視</h3>
              <p className="text-gray-600">
                測定可能な結果と具体的な価値創造に
                焦点を当てたサービスを提供します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <BuildingOfficeIcon className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">専門性</h3>
              <p className="text-gray-600">
                深い技術知識と豊富な実装経験で、
                最高品質のサービスを提供します。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <GlobeAltIcon className="w-12 h-12 text-teal-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">持続可能性</h3>
              <p className="text-gray-600">
                長期的な視点で企業の成長を支援し、
                持続可能なAIソリューションを提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                会社情報
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">基本情報</h3>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-700">会社名：</span>
                    <span className="text-gray-600">AIRAI テクノロジー株式会社</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">設立：</span>
                    <span className="text-gray-600">2023年</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">所在地：</span>
                    <span className="text-gray-600">台湾 台北市</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">事業内容：</span>
                    <span className="text-gray-600">企業AI導入コンサルティング</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">実績</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">導入実績：</span>
                    <span className="text-2xl font-bold text-green-600">100+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">平均自動化率：</span>
                    <span className="text-2xl font-bold text-green-600">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">顧客満足度：</span>
                    <span className="text-2xl font-bold text-green-600">99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">平均ROI期間：</span>
                    <span className="text-2xl font-bold text-green-600">6ヶ月</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-max">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              私たちと一緒にAIの未来を創造しませんか？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              AIRAIテクノロジーは、お客様のビジネス成功のために
              最高のAIソリューションを提供する準備ができています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ja/contact"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                お問い合わせ
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