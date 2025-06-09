'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  ExclamationTriangleIcon,
  HomeIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <section className="pt-20 pb-16">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* 404 Icon */}
            <div className="mb-8">
              <ExclamationTriangleIcon className="w-24 h-24 text-orange-500 mx-auto mb-6" />
              <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                找不到頁面
              </h2>
              <p className="text-gray-600 leading-relaxed">
                抱歉，您要尋找的頁面不存在或已被移動。<br />
                請檢查網址是否正確，或返回首頁繼續瀏覽。
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <HomeIcon className="w-5 h-5 mr-2" />
                返回首頁
              </Link>
              
              <Link
                href="/resources"
                className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200"
              >
                <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                瀏覽資源
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                您可能在尋找：
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                <Link
                  href="/services"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  AI導入服務
                </Link>
                <Link
                  href="/cases"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  成功案例
                </Link>
                <Link
                  href="/resources/ai-guide/1"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  AI導入指南
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  聯絡我們
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 