'use client'

import { useState, useEffect, useCallback } from 'react'
import { getTranslations, type Locale } from '@/lib/i18n'
import AiriLogo from './AiriLogo'

const STORAGE_KEY = 'airai-announcement'
const SESSION_KEY = 'airai-announcement-dismissed'
const MAX_DISMISS_COUNT = 3
// 設定過期日期：上線後 4 週（請在上線時更新此日期）
const EXPIRY_DATE = new Date('2026-04-10T00:00:00Z')
const SCROLL_THRESHOLD = 50

interface AnnouncementBarProps {
  locale?: Locale
}

export default function AnnouncementBar({ locale = 'zh' }: AnnouncementBarProps) {
  const [visible, setVisible] = useState(false)
  const [scrolledAway, setScrolledAway] = useState(false)
  const t = getTranslations(locale)

  useEffect(() => {
    if (new Date() > EXPIRY_DATE) return
    if (sessionStorage.getItem(SESSION_KEY)) return

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        if (data.dismissCount >= MAX_DISMISS_COUNT) return
      }
    } catch {
      // localStorage 不可用或資料損壞，顯示 bar
    }

    setVisible(true)
  }, [])

  useEffect(() => {
    if (!visible) return

    const handleScroll = () => {
      setScrolledAway(window.scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [visible])

  const handleDismiss = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setVisible(false)

    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      // sessionStorage 不可用
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      const data = stored ? JSON.parse(stored) : { dismissCount: 0 }
      data.dismissCount = (data.dismissCount || 0) + 1
      data.lastDismissed = new Date().toISOString()
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch {
      // localStorage 不可用
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed left-0 right-0 top-16 lg:top-20 z-40 transition-all duration-300 ${
        scrolledAway
          ? '-translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100'
      }`}
    >
      <div className="relative bg-gradient-to-r from-blue-600/95 to-indigo-600/95 backdrop-blur-sm hover:from-blue-500/95 hover:to-indigo-500/95 transition-all shadow-lg">
        <a
          href="https://agent.airai.tw"
          target="_blank"
          rel="noopener noreferrer"
          title={t.announcementBar.linkTitle}
          aria-label={t.announcementBar.linkTitle}
          className="flex items-center justify-center gap-3 h-11 px-12 text-[13px] md:text-sm text-white/90 tracking-wide"
        >
          {/* Desktop 文案 */}
          <span className="hidden md:inline-flex items-center gap-2.5">
            {/* Pulse dot + Badge */}
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white/90" />
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/15 text-white text-xs font-semibold">
                {t.announcementBar.badge}
              </span>
            </span>

            <span className="inline-flex items-center gap-2 text-white/90">
              <AiriLogo size={20} className="rounded-full bg-white p-0.5" />
              <span className="font-semibold text-white">{t.announcementBar.brandName}</span>
              {' '}{t.announcementBar.desktopSuffix}
            </span>

            {/* CTA 按鈕 */}
            <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-white text-blue-600 text-xs font-semibold hover:scale-105 transition-transform shadow-sm">
              {t.announcementBar.ctaButton}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </span>

          {/* Mobile 文案 */}
          <span className="md:hidden inline-flex items-center gap-2">
            {/* Pulse dot + Badge */}
            <span className="inline-flex items-center gap-1 max-[320px]:hidden">
              <span className="relative flex h-1.5 w-1.5">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white/90" />
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/15 text-white text-[10px] font-semibold">
                {t.announcementBar.badge}
              </span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-white/90">
              <AiriLogo size={16} className="rounded-full bg-white p-0.5" />
              <span className="font-semibold text-white">{t.announcementBar.brandName}</span>
              {' '}{t.announcementBar.mobileSuffix}
            </span>

            {/* Mobile: 箭頭 icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-white/70 flex-shrink-0">
              <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
          </span>
        </a>

        {/* 關閉按鈕 */}
        <button
          onClick={handleDismiss}
          aria-label={t.announcementBar.closeLabel}
          className="absolute right-0 top-0 h-full flex items-center px-3 text-white/60 hover:text-white transition-colors"
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
