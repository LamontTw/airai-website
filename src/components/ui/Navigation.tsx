'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from './LanguageSwitcher';
import { getTranslations } from '@/lib/i18n';

// 導航項目配置
const getNavigationItems = (locale: 'zh' | 'en' | 'ja') => {
  const t = getTranslations(locale);
  const prefix = locale === 'zh' ? '' : `/${locale}`;
  
  const baseItems: Array<{ name: string; href: string }> = [
    { name: t.nav.home, href: locale === 'zh' ? '/' : `/${locale}` },
    { name: t.nav.about, href: `${prefix}/about` },
    { name: t.nav.services, href: `${prefix}/services` },
    { name: t.nav.cases, href: `${prefix}/cases` },
    { name: t.nav.contact, href: `${prefix}/contact` },
  ];

  // 只在中文模式下顯示資源洞察
  if (locale === 'zh') {
    baseItems.splice(4, 0, { name: t.nav.resources, href: `${prefix}/resources` });
  }

  return baseItems;
};

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // 判斷當前語言
  const getCurrentLocale = (): 'zh' | 'en' | 'ja' => {
    if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
    if (pathname.startsWith('/ja/') || pathname === '/ja') return 'ja';
    return 'zh';
  };
  
  const currentLocale = getCurrentLocale();
  const t = getTranslations(currentLocale);
  const navigationItems = getNavigationItems(currentLocale);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={currentLocale === 'zh' ? '/' : `/${currentLocale}`} className="flex items-center">
            <Image
              src="/images/logo-nav.png"
              alt="AIRAI - 智流科技"
              width={200}
              height={71}
              priority
              className="h-8 sm:h-10 lg:h-[3.25rem] w-auto max-w-[150px] sm:max-w-[180px] lg:max-w-[260px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href={currentLocale === 'zh' ? "/contact" : `/${currentLocale}/contact`}
              className="btn-primary shadow-lg shadow-blue-500/25"
            >
              {t.nav.consultation}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? '關閉選單' : '開啟選單'}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Link
                href={currentLocale === 'zh' ? "/contact" : `/${currentLocale}/contact`}
                className="block w-full text-center btn-primary mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.consultation}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 