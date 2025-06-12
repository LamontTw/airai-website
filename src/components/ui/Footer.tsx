'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { getTranslations } from '@/lib/i18n';

export default function Footer() {
  const pathname = usePathname();
  
  // 判斷當前語言
  const getCurrentLocale = (): 'zh' | 'en' | 'ja' => {
    if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
    if (pathname.startsWith('/ja/') || pathname === '/ja') return 'ja';
    return 'zh';
  };
  
  const currentLocale = getCurrentLocale();
  const t = getTranslations(currentLocale);
  const prefix = currentLocale === 'zh' ? '' : `/${currentLocale}`;

  const footerLinks = {
    services: [
      { 
        name: currentLocale === 'zh' ? '程式外包' : 
              currentLocale === 'en' ? 'Software Outsourcing' : 
              'ソフトウェア外注', 
        href: `${prefix}/services#programming` 
      },
      { 
        name: currentLocale === 'zh' ? 'AI Agent導入' : 
              currentLocale === 'en' ? 'AI Agent Implementation' : 
              'AIエージェント導入', 
        href: `${prefix}/services#ai-agent` 
      },
      { 
        name: currentLocale === 'zh' ? '智能客服' : 
              currentLocale === 'en' ? 'Intelligent Customer Service' : 
              'インテリジェントカスタマーサービス', 
        href: `${prefix}/services#chatbot` 
      },
      { 
        name: currentLocale === 'zh' ? '流程自動化' : 
              currentLocale === 'en' ? 'Process Automation' : 
              'プロセス自動化', 
        href: `${prefix}/services#automation` 
      },
    ],
    company: [
      { name: t.nav.about, href: `${prefix}/about` },
      { name: t.nav.cases, href: `${prefix}/cases` },
      { name: t.nav.contact, href: `${prefix}/contact` },
    ] as Array<{ name: string; href: string }>,
    resources: currentLocale === 'zh' ? [
      { name: 'AI轉型指南', href: `${prefix}/resources/ai-guide` },
      { name: '行業趨勢', href: `${prefix}/resources/trends` },
      { name: '技術部落格', href: `${prefix}/resources/blog` },
      { name: '免費工具', href: `${prefix}/resources/tools` },
    ] : [],
  };

  // 只在中文模式下添加資源洞察到公司連結
  if (currentLocale === 'zh') {
    footerLinks.company.splice(2, 0, { name: t.nav.resources, href: `${prefix}/resources` });
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img 
                src="/images/logo-nav.png" 
                alt="AIRAI - 智流科技" 
                className="h-10 w-auto max-w-[200px] object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPinIcon className="w-4 h-4" />
                <span>{t.company.address}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <PhoneIcon className="w-4 h-4" />
                <span>{t.company.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <EnvelopeIcon className="w-4 h-4" />
                <span>{t.company.email}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.services}</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">{currentLocale === 'zh' ? '資源中心' : currentLocale === 'en' ? 'Resources' : 'リソースセンター'}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 {t.company.name}. {t.footer.copyright}.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href={`${prefix}/privacy`} className="text-gray-400 hover:text-white transition-colors duration-200">
                {t.footer.privacy}
              </Link>
              <Link href={`${prefix}/terms`} className="text-gray-400 hover:text-white transition-colors duration-200">
                {t.footer.terms}
              </Link>
              <Link href={`${prefix}/site-map`} className="text-gray-400 hover:text-white transition-colors duration-200">
                {currentLocale === 'zh' ? '網站地圖' : currentLocale === 'en' ? 'Site Map' : 'サイトマップ'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 