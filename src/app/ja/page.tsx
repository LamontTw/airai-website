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

// AI検索最適化FAQ データ - 翻訳を使用
const faqData = t.faq.map(item => ({
  question: item.question,
  answer: item.answer
}));

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
    </>
  );
} 