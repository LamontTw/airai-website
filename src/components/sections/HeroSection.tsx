'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import VideoModal from '@/components/ui/VideoModal';
import { getTranslations } from '@/lib/i18n';

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const pathname = usePathname();
  
  // 判斷當前語言並取得翻譯
  const getCurrentLocale = (): 'zh' | 'en' | 'ja' => {
    if (pathname.startsWith('/en')) return 'en';
    if (pathname.startsWith('/ja')) return 'ja';
    return 'zh';
  };
  
  const currentLocale = getCurrentLocale();
  const t = getTranslations(currentLocale);
  
  // 設定是否使用影片功能（可以改為 true 來啟用影片彈出）
  const useVideoModal = false;
  
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden pt-16 lg:pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzM3MzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSI+PC9jaXJjbGU+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container-max relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              {t.home.badge}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {currentLocale === 'zh' ? (
                <>
                  將 <span className="gradient-text">AI 融入日常工作</span>
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700">
                    加速中小企業數位轉型
                  </span>
                </>
              ) : (
                <>
                  <span className="gradient-text">{t.home.title}</span>
                  <br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700">
                    {t.home.subtitle}
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {t.home.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                href={currentLocale === 'zh' ? "/contact" : `/${currentLocale}/contact`}
                className="btn-primary inline-flex items-center group"
              >
                {t.home.cta.primary}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              {/* 條件式渲染：影片彈出 vs 連結到案例頁面 */}
              {useVideoModal ? (
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="btn-secondary inline-flex items-center group"
                >
                  <PlayIcon className="w-5 h-5 mr-2" />
                  {t.home.cta.secondary}
                </button>
              ) : (
                <Link
                  href={currentLocale === 'zh' ? "/cases" : `/${currentLocale}/cases`}
                  className="btn-secondary inline-flex items-center group"
                >
                  <PlayIcon className="w-5 h-5 mr-2" />
                  {t.home.cta.secondary}
                </Link>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600 text-sm">{t.home.stats.autoReply}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">14{currentLocale === 'zh' ? '小時' : 'hrs'}</div>
                <div className="text-gray-600 text-sm">{t.home.stats.timeSaved}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <div className="text-gray-600 text-sm">{t.home.stats.costReduction}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-10 w-16 h-16 bg-indigo-200 rounded-full opacity-20"
        />
      </section>

      {/* 影片彈出組件 */}
      {useVideoModal && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // 替換為您的影片URL
          title={currentLocale === 'zh' ? "智流科技成功案例展示" : "AIRAI Success Stories"}
          description={currentLocale === 'zh' ? "了解我們如何幫助台灣中小企業實現AI轉型" : "Learn how we help Taiwan SMEs achieve AI transformation"}
        />
      )}
    </>
  );
} 