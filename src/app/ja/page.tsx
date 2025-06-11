import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import { getTranslations } from '@/lib/i18n'

const t = getTranslations('ja')

export const metadata: Metadata = {
  title: t.seo.title,
  description: t.seo.description,
  keywords: t.seo.keywords,
  openGraph: {
    title: t.seo.title,
    description: t.seo.description,
    siteName: t.seo.siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  alternates: {
    canonical: '/ja',
    languages: {
      'zh-TW': '/',
      'en': '/en',
      'ja': '/ja',
    },
  },
}

export default function JapanesePage() {
  return (
    <main>
      <HeroSection />
      
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
    </main>
  )
} 