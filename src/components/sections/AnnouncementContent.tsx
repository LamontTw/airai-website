import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { getTranslations, type Locale } from '@/lib/i18n';

interface AnnouncementContentProps {
  locale: Locale;
}

/**
 * 結束營運說明頁的共用內容區塊（Server Component）。
 * 三語頁面 (/announcement, /en/announcement, /ja/announcement) 共用。
 */
export default function AnnouncementContent({ locale }: AnnouncementContentProps) {
  const t = getTranslations(locale);
  const a = t.announcement;
  const prefix = locale === 'zh' ? '' : `/${locale}`;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero — pt-32 清 nav (h-16/h-20) + 結束營運公告 bar (~44px) */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-100">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {a.pageTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <article className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-6">
            <p className="text-lg">{a.intro}</p>
            <p>{a.thanksLine}</p>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{a.aiworksHeading}</h2>
              <p>
                {a.aiworksBodyBefore}
                <a
                  href="https://aiworks.tw"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  {a.aiworksLinkLabel}
                </a>
                {a.aiworksBodyAfter}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{a.smeHeading}</h2>
              <p className="mb-3">{a.smeBody}</p>
              <ul className="space-y-2 list-disc pl-5">
                {a.smeResources.map((r) => (
                  <li key={r.name}>
                    {r.url ? (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:text-blue-700 underline"
                      >
                        {r.name}
                      </a>
                    ) : (
                      <span className="font-medium text-gray-900">{r.name}</span>
                    )}
                    <span>
                      {locale === 'zh' ? '：' : locale === 'ja' ? '：' : ' — '}
                      {r.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">{a.smeClosing}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{a.dataHeading}</h2>
              <p>
                {a.dataBodyBefore}
                <Link
                  href={`${prefix}/privacy`}
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  {a.privacyLinkLabel}
                </Link>
                {a.dataBodyAfter}
              </p>
            </div>

            <p>{a.farewell}</p>

            <div className="pt-6 border-t border-gray-200 text-gray-600">
              <p className="font-medium text-gray-900">{a.signature}</p>
              <p className="text-sm mt-1">{a.contactNote}</p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
