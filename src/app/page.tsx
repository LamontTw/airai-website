import { Metadata } from 'next';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection';
import ServicesSection from '@/components/sections/ServicesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import CTASection from '@/components/sections/CTASection';
import { FAQSchema } from '@/components/seo/StructuredData';
import { siteConfig } from '@/lib/seo';
import { getTranslations } from '@/lib/i18n';

// 取得繁體中文翻譯
const t = getTranslations('zh');

export const metadata: Metadata = {
  title: t.seo.title,
  description: t.seo.description,
  keywords: t.seo.keywords,
  openGraph: {
    title: t.seo.title,
    description: t.seo.description,
    url: siteConfig.url,
    siteName: t.seo.siteName,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: t.seo.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.seo.title,
    description: t.seo.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'zh-TW': siteConfig.url,
      'en': `${siteConfig.url}/en`,
      'ja-JP': `${siteConfig.url}/ja`,
    },
  },
};

// AI搜尋優化的FAQ數據 - 使用翻譯
const faqData = t.faq.map(item => ({
  question: item.question,
  answer: item.answer
}));

export default function Home() {
  return (
    <>
      <FAQSchema questions={faqData} />
      <main className="min-h-screen">
        {/* 語義化標籤結構 */}
        <header>
          <Navigation />
        </header>
        
        <article>
          <section id="hero" aria-label={t.nav.home}>
            <HeroSection />
          </section>
          
          <section id="problem-solution" aria-label="問題與解決方案">
            <ProblemSolutionSection />
          </section>
          
          <section id="services" aria-label={t.nav.services}>
            <ServicesSection />
          </section>
          
          <section id="case-studies" aria-label={t.nav.cases}>
            <CaseStudiesSection />
          </section>
          
          <section id="cta" aria-label="行動呼籲">
            <CTASection />
          </section>
        </article>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                常見問題
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                企業AI導入常見問題解答
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
