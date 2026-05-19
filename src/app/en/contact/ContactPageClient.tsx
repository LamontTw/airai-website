import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { getTranslations } from '@/lib/i18n';

const t = getTranslations('en');
const c = t.contactClosed;

export default function ContactPageClient() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* pt-32 清 nav + closure announcement bar */}
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
              href="/en/announcement"
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
