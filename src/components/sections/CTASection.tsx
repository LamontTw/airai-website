'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { getTranslations, getCurrentLocale } from '@/lib/i18n';

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const t = getTranslations(currentLocale);

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
              {t.cta.title}
              <br />
              <span className="text-yellow-300">{t.cta.titleHighlight}</span>{t.cta.titleSuffix}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t.cta.subtitle}
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {t.cta.benefits.map((benefit, index) => (
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
                href={currentLocale === 'zh' ? "/contact" : `/${currentLocale}/contact`}
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 inline-flex items-center justify-center group"
              >
                {t.cta.primaryButton}
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href={currentLocale === 'zh' ? "/cases" : `/${currentLocale}/cases`}
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 inline-flex items-center justify-center"
              >
                {t.cta.secondaryButton}
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
              {t.cta.whyChooseTitle}
            </h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">{t.cta.stats.cases.number}</div>
                <div className="text-blue-100">{t.cta.stats.cases.label}</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">{t.cta.stats.automation.number}</div>
                <div className="text-blue-100">{t.cta.stats.automation.label}</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">{t.cta.stats.roi.number}</div>
                <div className="text-blue-100">{t.cta.stats.roi.label}</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">{t.cta.stats.support.number}</div>
                <div className="text-blue-100">{t.cta.stats.support.label}</div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
              <p className="text-center text-blue-100 text-sm italic">
                &ldquo;{t.cta.customerQuote}&rdquo;
              </p>
              <p className="text-center text-yellow-300 text-xs mt-2">
                - {t.cta.customerQuoteSource}
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
              {t.cta.urgencyNote}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 