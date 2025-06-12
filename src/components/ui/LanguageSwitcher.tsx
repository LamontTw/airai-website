'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { locales, localeNames, type Locale } from '@/lib/i18n';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  // 取得當前語言
  const getCurrentLocale = useCallback((): Locale => {
    if (pathname.startsWith('/en/') || pathname === '/en') {
      return 'en';
    }
    if (pathname.startsWith('/ja/') || pathname === '/ja') {
      return 'ja';
    }
    return 'zh';
  }, [pathname]);

  // 關閉下拉選單
  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  // 切換語言
  const switchLanguage = useCallback(async (newLocale: Locale) => {
    const currentLocale = getCurrentLocale();
    
    if (currentLocale === newLocale || isNavigating) {
      closeDropdown();
      return;
    }

    try {
      setIsNavigating(true);
      closeDropdown();

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

      // 檢查是否為資源洞察頁面，如果切換到英文或日文，則導向首頁
      if (basePath.startsWith('/resources') && (newLocale === 'en' || newLocale === 'ja')) {
        basePath = '/';
      }

      // 建立新路徑
      let newPath: string;
      if (newLocale === 'zh') {
        newPath = basePath;
      } else {
        newPath = `/${newLocale}${basePath === '/' ? '' : basePath}`;
      }

      // 使用 window.location 進行導航，避免 React 狀態問題
      window.location.href = newPath;
    } catch (error) {
      console.error('Language switch error:', error);
      setIsNavigating(false);
    }
  }, [pathname, getCurrentLocale, closeDropdown, isNavigating]);

  // 處理點擊外部關閉下拉選單
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-language-switcher]')) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, closeDropdown]);

  // 路徑變化時關閉下拉選單
  useEffect(() => {
    closeDropdown();
    setIsNavigating(false);
  }, [pathname, closeDropdown]);

  // ESC 鍵關閉下拉選單
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, closeDropdown]);

  const currentLocale = getCurrentLocale();

  // 多語言標籤
  const getLanguageLabel = (locale: Locale) => {
    switch (locale) {
      case 'zh':
        return '語言';
      case 'en':
        return 'Language';
      case 'ja':
        return '言語';
      default:
        return 'Language';
    }
  };

  return (
    <div className="relative" data-language-switcher>
      <button
        onClick={() => !isNavigating && setIsOpen(!isOpen)}
        disabled={isNavigating}
        className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-colors duration-200 border border-gray-200 rounded-lg ${
          isNavigating 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-700 hover:text-blue-600 hover:border-blue-300'
        }`}
        aria-label={getLanguageLabel(currentLocale)}
        title={getLanguageLabel(currentLocale)}
      >
        <GlobeAltIcon className="w-4 h-4" />
        <span className="hidden sm:inline text-xs text-gray-500">
          {getLanguageLabel(currentLocale)}
        </span>
        <span className="font-medium">{localeNames[currentLocale]}</span>
        {isNavigating ? (
          <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        ) : (
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {isOpen && !isNavigating && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-20">
          <div className="py-1">
            {/* 選單標題 */}
            <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <GlobeAltIcon className="w-3 h-3" />
                <span>{getLanguageLabel(currentLocale)}</span>
              </div>
            </div>
            
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale)}
                disabled={isNavigating}
                className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  currentLocale === locale
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{localeNames[locale]}</span>
                  {currentLocale === locale && (
                    <span className="text-blue-600 font-bold">✓</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 