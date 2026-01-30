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

const t = getTranslations('en');

export const metadata: Metadata = {
  title: "AIRAI | Enterprise AI Implementation Expert - AIRAI Technology",
  description: "AIRAI provides professional enterprise AI implementation consulting services, including AI technology selection, ROI calculation, implementation guidance and complete solutions. Help enterprises successfully transform and improve operational efficiency.",
  keywords: [
    "AI Artificial Intelligence",
    "Enterprise AI Implementation", 
    "AI Technology Selection",
    "Machine Learning",
    "Deep Learning",
    "AI Solutions",
    "Intelligent Automation",
    "AI Consulting Services",
    "Digital Transformation",
    "AI ROI"
  ],
  openGraph: {
    title: "AIRAI | Enterprise AI Implementation Expert - AIRAI Technology",
    description: "AIRAI provides professional enterprise AI implementation consulting services, including AI technology selection, ROI calculation, implementation guidance and complete solutions.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en`,
    siteName: "AIRAI Technology",
    type: 'website',
    images: [
      {
        url: "/images/logo-full.png",
        width: 1200,
        height: 630,
        alt: "AIRAI Technology",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AIRAI | Enterprise AI Implementation Expert - AIRAI Technology",
    description: "AIRAI provides professional enterprise AI implementation consulting services, including AI technology selection, ROI calculation, implementation guidance and complete solutions.",
    images: ["/images/logo-full.png"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en`,
    languages: {
      'zh-TW': process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw",
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en`,
    },
  },
};

// AI Search Optimized FAQ Data - 使用翻譯
const faqData = t.faq.map(item => ({
  question: item.question,
  answer: item.answer
}));

export default function EnglishHomePage() {
  return (
    <>
      <FAQSchema questions={faqData} />
      <main className="min-h-screen">
        {/* Semantic tag structure */}
        <header>
          <Navigation />
        </header>
        
        <article>
          <section id="hero" aria-label="Main Introduction">
            <HeroSection />
          </section>
          
          <section id="problem-solution" aria-label="Problems and Solutions">
            <ProblemSolutionSection locale="en" />
          </section>
          
          <section id="services" aria-label="Services">
            <ServicesSection locale="en" />
          </section>
          
          <section id="case-studies" aria-label="Success Stories">
            <CaseStudiesSection locale="en" />
          </section>

          <section id="cta" aria-label="Call to Action">
            <CTASection locale="en" />
          </section>
        </article>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Common questions about enterprise AI implementation
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