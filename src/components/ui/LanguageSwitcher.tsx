'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  // 判斷當前語言
  const isEnglish = pathname.startsWith('/en');
  const currentLang = isEnglish ? 'en' : 'zh';
  
  // 生成切換後的路徑
  const getAlternatePath = () => {
    if (isEnglish) {
      // 從英文切換到中文，移除 /en 前綴
      return pathname.replace('/en', '') || '/';
    } else {
      // 從中文切換到英文，添加 /en 前綴
      return `/en${pathname}`;
    }
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200">
        <GlobeAltIcon className="w-5 h-5" />
        <span className="text-sm font-medium">
          {currentLang === 'zh' ? '中文' : 'EN'}
        </span>
      </button>
      
      {/* 下拉選單 */}
      <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {currentLang === 'zh' ? (
            <Link
              href={getAlternatePath()}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
            >
              English
            </Link>
          ) : (
            <Link
              href={getAlternatePath()}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
            >
              繁體中文
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 