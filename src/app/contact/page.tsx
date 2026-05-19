import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { getTranslations } from '@/lib/i18n';
import { siteConfig } from '@/lib/seo';

const t = getTranslations('zh');
const c = t.contactClosed;

export const metadata: Metadata = {
  title: '聯絡資訊 | AIRAI 智流科技',
  description: 'AIRAI 已結束營運，本站不再提供諮詢、報價與 LINE 聯繫服務。請參閱結束營運說明。',
  openGraph: {
    title: '聯絡資訊 | AIRAI 智流科技',
    description: 'AIRAI 已結束營運，本站不再提供諮詢、報價與聯繫服務。',
    url: `${siteConfig.url}/contact`,
    siteName: t.seo.siteName,
    type: 'website',
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: 'AIRAI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '聯絡資訊 | AIRAI 智流科技',
    description: 'AIRAI 已結束營運，本站不再提供諮詢與聯繫服務。',
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
    languages: {
      'zh-TW': `${siteConfig.url}/contact`,
      'en-US': `${siteConfig.url}/en/contact`,
      'ja-JP': `${siteConfig.url}/ja/contact`,
      'x-default': `${siteConfig.url}/contact`,
    },
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* pt-32 清 nav + 結束營運公告 bar */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-100">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {c.heading}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {c.body}
            </p>
            <Link
              href="/announcement"
              className="btn-primary inline-flex items-center"
            >
              {c.linkText}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
