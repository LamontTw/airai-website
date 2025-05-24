'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const benefits = [
  '免費評估您的AI導入需求',
  '客製化解決方案設計',
  '專業團隊全程服務',
  '可衡量的投資回報',
  '完整的培訓與支援',
  '持續優化與維護'
];

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiPjwvY2lyY2xlPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              準備好開始您的
              <br />
              <span className="text-yellow-300">AI 轉型之旅</span>了嗎？
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              不要讓競爭對手搶得先機。立即與我們聯繫，
              獲得專屬的AI導入諮詢，讓您的企業在數位時代中脫穎而出。
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center text-blue-100"
                >
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 inline-flex items-center justify-center group"
              >
                立即免費諮詢
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/cases"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 inline-flex items-center justify-center"
              >
                查看成功案例
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              為什麼選擇智流科技？
            </h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">100+</div>
                <div className="text-blue-100">成功導入案例</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">85%</div>
                <div className="text-blue-100">平均自動化率</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">6個月</div>
                <div className="text-blue-100">平均投資回收期</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-blue-100">技術支援服務</div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
              <p className="text-center text-blue-100 text-sm italic">
                &ldquo;智流科技不只是技術供應商，更是我們數位轉型路上的最佳夥伴&rdquo;
              </p>
              <p className="text-center text-yellow-300 text-xs mt-2">
                - 客戶真實回饋
              </p>
            </div>
          </motion.div>
        </div>

        {/* Urgency Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center bg-yellow-400/20 border border-yellow-400/30 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-yellow-100 text-sm font-medium">
              限時優惠：本月諮詢免費提供AI導入可行性評估報告
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 