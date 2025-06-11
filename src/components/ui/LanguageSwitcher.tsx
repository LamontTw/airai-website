'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { locales, localeNames, type Locale } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // 取得當前語言
  const getCurrentLocale = (): Locale => {
    if (pathname.startsWith('/en/') || pathname === '/en') {
      return 'en';
    }
    if (pathname.startsWith('/ja/') || pathname === '/ja') {
      return 'ja';
    }
    return 'zh';
  };

  // 切換語言
  const switchLanguage = (newLocale: Locale) => {
    const currentLocale = getCurrentLocale();
    
    if (currentLocale === newLocale) {
      setIsOpen(false);
      return;
    }

    let basePath = pathname;

    // 移除當前語言前綴，取得基礎路徑
    if (currentLocale === 'en') {
      basePath = pathname.startsWith('/en') ? pathname.slice(3) : pathname;
    } else if (currentLocale === 'ja') {
      basePath = pathname.startsWith('/ja') ? pathname.slice(3) : pathname;
    }
    
    // 確保基礎路徑以 / 開頭
    if (basePath === '' || basePath === '/') {
      basePath = '/';
    } else if (!basePath.startsWith('/')) {
      basePath = '/' + basePath;
    }

    // 建立新路徑
    let newPath: string;
    if (newLocale === 'zh') {
      newPath = basePath;
    } else {
      newPath = `/${newLocale}${basePath === '/' ? '' : basePath}`;
    }

    router.push(newPath);
    setIsOpen(false);
  };

  const currentLocale = getCurrentLocale();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
        aria-label="選擇語言"
      >
        <span>{localeNames[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* 下拉選單 */}
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
            <div className="py-1">
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => switchLanguage(locale)}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    currentLocale === locale
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  {localeNames[locale]}
                  {currentLocale === locale && (
                    <span className="ml-2 text-blue-600">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
} 