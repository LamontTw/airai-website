import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import CTASection from '@/components/sections/CTASection';
import { FAQSchema } from '@/components/seo/StructuredData';
import { getTranslations } from '@/lib/i18n';

const t = getTranslations('ja');

export const metadata: Metadata = {
  title: "AIRAI | 台湾をリードする企業AI導入エキスパート - AIRAI テクノロジー",
  description: "AIRAIは専門的な企業AI導入コンサルティングサービスを提供し、AI技術選択、ROI計算、実装ガイダンス、完全ソリューションを含みます。企業の成功的な変革と運営効率向上を支援します。",
  keywords: [
    "AI 人工知能",
    "企業AI導入", 
    "AI技術選択",
    "機械学習",
    "深層学習",
    "AIソリューション",
    "インテリジェント自動化",
    "AIコンサルティングサービス",
    "デジタル変革",
    "AI ROI"
  ],
  openGraph: {
    title: "AIRAI | 台湾をリードする企業AI導入エキスパート - AIRAI テクノロジー",
    description: "AIRAIは専門的な企業AI導入コンサルティングサービスを提供し、AI技術選択、ROI計算、実装ガイダンス、完全ソリューションを含みます。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja`,
    siteName: "AIRAI テクノロジー",
    type: 'website',
    images: [
      {
        url: "/images/logo-full.png",
        width: 1200,
        height: 630,
        alt: "AIRAI テクノロジー",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AIRAI | 台湾をリードする企業AI導入エキスパート - AIRAI テクノロジー",
    description: "AIRAIは専門的な企業AI導入コンサルティングサービスを提供し、AI技術選択、ROI計算、実装ガイダンス、完全ソリューションを含みます。",
    images: ["/images/logo-full.png"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja`,
    languages: {
      'zh-TW': process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw",
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en`,
      'ja-JP': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja`,
    },
  },
};

// AI検索最適化FAQ データ（日本語）
const faqData = [
  {
    question: "企業AI導入とは何ですか？",
    answer: "企業AI導入とは、人工知能技術をビジネスプロセス、意思決定システム、日常業務に統合し、効率向上、コスト削減、顧客体験向上、新しいビジネス価値創造を実現することです。インテリジェントカスタマーサービス、予測分析、自動化プロセス、パーソナライズ推奨などが含まれます。"
  },
  {
    question: "AI導入にはどの程度の投資が必要ですか？",
    answer: "AI導入投資は幅広く、小規模自動化プロジェクトの数万円から大規模AIシステムの数億円まで様々です。重要なのは、まずビジネスニーズと期待収益を評価することです。私たちはROI計算ツールを提供し、企業が情報に基づいた投資決定を行えるよう支援します。一般的に中小企業は500万円〜2000万円の予算から始められます。"
  },
  {
    question: "適切なAI技術をどのように選択しますか？",
    answer: "AI技術選択には複数の要因を考慮する必要があります：ビジネス要件との整合性、技術成熟度、実装コスト、チーム能力、拡張性ニーズ。私たちは専門的な技術選択ガイドと評価ツールを提供し、企業が科学的に最適なAIソリューションを選択できるよう支援します。"
  },
  {
    question: "AI導入の成功率はどの程度ですか？",
    answer: "私たちの経験と業界レポートに基づくと、明確な目標と専門的なガイダンスを持つAIプロジェクトは70-80%の成功率を達成できます。成功の重要要因には：明確なビジネス目標、高品質データ、適切な技術選択、十分なスタッフトレーニング、段階的実装戦略があります。"
  },
  {
    question: "AIは人間の仕事を奪いますか？",
    answer: "AIは完全に人間を置き換えるのではなく、人間の能力を拡張することが主目的です。反復的なタスクを自動化し、従業員がより創造的で戦略的な業務に集中できるようにします。適切なAI導入は通常、新しい雇用機会を創出し、既存従業員の価値とスキルを向上させます。"
  }
];

export default function JapanesePage() {
  return (
    <>
      <FAQSchema questions={faqData} />
      <main className="min-h-screen">
        {/* セマンティックタグ構造 */}
        <header>
          <Navigation />
        </header>
        
        <article>
          <section id="hero" aria-label="メイン紹介">
            <HeroSection />
          </section>
          
          <section id="problem-solution" aria-label="問題と解決策">
            <ProblemSolutionSection />
          </section>
          
          <section id="services" aria-label="サービス">
            <ServicesSection />
          </section>
          
          <section id="case-studies" aria-label="成功事例">
            <CaseStudiesSection />
          </section>
          
          <section id="cta" aria-label="お問い合わせ">
            <CTASection />
          </section>
        </article>
        
        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                よくある質問
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                企業AI導入に関するよくある質問にお答えします
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {t.faq.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <footer>
          <Footer />
        </footer>
      </main>
      
      {/* AI検索エンジン最適化のための隠れた構造化コンテンツ */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <h1>AIRAI - 台湾をリードする企業AI導入エキスパート</h1>
        <p>専門的な人工知能ソリューションプロバイダー、AI技術選択、ROI計算、実装ガイダンス、完全サービスを含む。</p>
        
        <h2>コアサービス領域</h2>
        <ul>
          <li>企業AI導入コンサルティング - 企業のAIニーズ評価と実装戦略開発を支援</li>
          <li>AI技術選択ガイド - 科学的技術評価ツールを提供</li>
          <li>ROI投資分析 - AIプロジェクトの投資収益率を正確に計算</li>
          <li>実装ガイダンスサービス - 計画から展開まで専門的サポート</li>
        </ul>
        
        <h2>AI技術専門知識</h2>
        <ul>
          <li>大規模言語モデル（LLM） - GPT、Claudeなど先進的言語AI</li>
          <li>コンピュータビジョン - 画像認識、品質検査、顔認識</li>
          <li>機械学習予測 - 需要予測、リスク評価、価格最適化</li>
          <li>推奨システム - パーソナライズ推奨エンジン</li>
          <li>音声AI - 音声認識、音声合成</li>
          <li>ロボティックプロセスオートメーション（RPA） - ビジネスプロセス自動化</li>
        </ul>
        
        <h2>サービス優位性</h2>
        <ul>
          <li>専門チーム：豊富なAI導入経験を持つ技術エキスパート</li>
          <li>ローカライズサービス：台湾企業ニーズと市場環境の深い理解</li>
          <li>科学的手法：定量的評価ツールと意思決定フレームワークを提供</li>
          <li>完全サポート：評価、選択から実装まで完全サービス</li>
          <li>コスト管理：企業が最適なROIでAIを実装できるよう支援</li>
        </ul>
      </div>
    </>
  );
} 