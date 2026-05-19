import Link from 'next/link'
import { getTranslations, type Locale } from '@/lib/i18n'

interface AnnouncementBarProps {
  locale?: Locale
}

/**
 * 全站結束營運公告條。
 * 永久顯示、不可關閉、不隨滾動隱藏。整條 bar 是連往 /announcement 的連結。
 * 由 Navigation 元件渲染，置於 nav 下方 (fixed top-16 / lg:top-20)。
 */
export default function AnnouncementBar({ locale = 'zh' }: AnnouncementBarProps) {
  const t = getTranslations(locale)
  const href = locale === 'zh' ? '/announcement' : `/${locale}/announcement`

  return (
    <div className="fixed left-0 right-0 top-16 lg:top-20 z-40">
      <div className="bg-slate-800 hover:bg-slate-700 transition-colors border-b border-slate-900/50">
        <Link
          href={href}
          className="flex items-center justify-center gap-2 h-11 px-4 text-[13px] md:text-sm text-slate-100 tracking-wide"
        >
          {/* Desktop 文案 */}
          <span className="hidden md:inline">{t.announcementBar.text}</span>
          {/* Mobile 文案 */}
          <span className="md:hidden">{t.announcementBar.textMobile}</span>

          <span className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-2 whitespace-nowrap">
            {t.announcementBar.linkText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3.5 h-3.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}
