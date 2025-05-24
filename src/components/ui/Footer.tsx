import Link from 'next/link';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const footerLinks = {
  services: [
    { name: '程式外包', href: '/services#programming' },
    { name: 'AI Agent導入', href: '/services#ai-agent' },
    { name: '智能客服', href: '/services#chatbot' },
    { name: '流程自動化', href: '/services#automation' },
  ],
  company: [
    { name: '關於我們', href: '/about' },
    { name: '成功案例', href: '/cases' },
    { name: '資源洞察', href: '/resources' },
    { name: '聯絡我們', href: '/contact' },
  ],
  resources: [
    { name: 'AI轉型指南', href: '/resources/ai-guide' },
    { name: '行業趨勢', href: '/resources/trends' },
    { name: '技術部落格', href: '/resources/blog' },
    { name: '免費工具', href: '/resources/tools' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">智</span>
              </div>
              <span className="text-xl font-bold">智流科技</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              專注於為台灣中小企業提供AI導入與數位轉型解決方案，將AI融入日常工作，提升營運效率。
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPinIcon className="w-4 h-4" />
                <span>台北市信義區信義路五段7號</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <PhoneIcon className="w-4 h-4" />
                <span>+886-2-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <EnvelopeIcon className="w-4 h-4" />
                <span>contact@airai.tw</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">服務項目</h3>
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
            <h3 className="font-semibold mb-4">公司資訊</h3>
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
            <h3 className="font-semibold mb-4">資源中心</h3>
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
              © 2024 智流科技有限公司. 保留所有權利.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                隱私政策
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                服務條款
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-200">
                網站地圖
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 