'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  ArrowRightIcon,
  ChatBubbleLeftIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { detailedCases, industryStats } from '@/lib/data/caseStudies';

export default function CasesPage() {
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [otherRef, otherInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      icon: 'text-emerald-600',
      accent: 'bg-emerald-100 text-emerald-700',
      button: 'bg-emerald-600 hover:bg-emerald-700'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      accent: 'bg-blue-100 text-blue-700',
      button: 'bg-blue-600 hover:bg-blue-700'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      accent: 'bg-purple-100 text-purple-700',
      button: 'bg-purple-600 hover:bg-purple-700'
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      icon: 'text-indigo-600',
      accent: 'bg-indigo-100 text-indigo-700',
      button: 'bg-indigo-600 hover:bg-indigo-700'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'text-orange-600',
      accent: 'bg-orange-100 text-orange-700',
      button: 'bg-orange-600 hover:bg-orange-700'
    },
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: 'text-red-600',
      accent: 'bg-red-100 text-red-700',
      button: 'bg-red-600 hover:bg-red-700'
    }
  };

  const featuredCases = detailedCases.filter(c => c.featured);
  const otherCases = detailedCases.filter(c => !c.featured);

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">AI導入</span>成功案例
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              真實的客戶 AI 導入案例，證實智能化轉型的實際效益與投資回報
            </p>
            <p className="mb-8">
              <Link
                href="/resources/ai-introduction-guide"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
              >
                閱讀《AI導入完整指南》
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </Link>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
                <div className="text-gray-600 text-sm">成功案例</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600 text-sm">平均自動化率</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">420%</div>
                <div className="text-gray-600 text-sm">平均ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600 text-sm">客戶滿意度</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cases */}
      <section ref={featuredRef} className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              精選成功案例
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              深度解析客戶挑戰、解決方案與實際成果
            </p>
          </motion.div>

          <div className="space-y-16">
            {featuredCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`${colorClasses[study.color].bg} ${colorClasses[study.color].border} border rounded-3xl p-8 lg:p-12`}
              >
                {/* Case Header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm mr-4">
                        <study.icon className={`w-8 h-8 ${colorClasses[study.color].icon}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                        <p className={`text-lg font-medium ${colorClasses[study.color].icon}`}>
                          {study.industry}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        {study.location}
                      </div>
                      <div className="flex items-center">
                        <UserGroupIcon className="w-4 h-4 mr-2" />
                        {study.size}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {study.projectDuration}
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 mr-2 text-yellow-500" />
                        精選案例
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colorClasses[study.color].icon}`}>
                        {study.metrics.roi}
                      </div>
                      <div className="text-gray-600 text-sm">投資回報率</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colorClasses[study.color].icon}`}>
                        {study.metrics.timeSaved}
                      </div>
                      <div className="text-gray-600 text-sm">時間節省</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colorClasses[study.color].icon}`}>
                        {study.metrics.costReduction}
                      </div>
                      <div className="text-gray-600 text-sm">成本降低</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colorClasses[study.color].icon}`}>
                        {study.metrics.efficiency}
                      </div>
                      <div className="text-gray-600 text-sm">效率提升</div>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">面臨挑戰</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {study.challenge}
                    </p>
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${colorClasses[study.color].accent}`}>
                      解決方案：{study.solution}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">實施過程</h4>
                    <div className="space-y-2">
                      {study.implementation.slice(0, 4).map((step, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className={`w-6 h-6 rounded-full ${colorClasses[study.color].button} text-white flex items-center justify-center text-xs font-semibold mr-3`}>
                            {idx + 1}
                          </div>
                          {step}
                        </div>
                      ))}
                      {study.implementation.length > 4 && (
                        <div className="text-sm text-gray-500 ml-9">
                          +{study.implementation.length - 4} 更多步驟...
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">實際成果</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircleIcon className={`w-5 h-5 mr-3 ${colorClasses[study.color].icon}`} />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">使用技術</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white p-6 rounded-xl border border-gray-100">
                  <div className="flex items-start">
                    <ChatBubbleLeftIcon className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="text-gray-700 italic mb-3">
                        &ldquo;{study.testimonial}&rdquo;
                      </p>
                      <div className="text-sm">
                        <div className="font-semibold text-gray-900">{study.clientName}</div>
                        <div className="text-gray-600">{study.clientRole}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section ref={statsRef} className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              各行業成果統計
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              跨產業的成功實績，證明AI導入的普遍適用性
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.industry}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stat.industry}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">成功案例</span>
                    <span className="text-2xl font-bold text-blue-600">{stat.cases}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">平均ROI</span>
                    <span className="text-lg font-semibold text-green-600">{stat.avgROI}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">平均時間節省</span>
                    <span className="text-lg font-semibold text-purple-600">{stat.avgTimeSaved}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cases */}
      <section ref={otherRef} className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={otherInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              更多成功案例
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多元化的解決方案，滿足不同產業需求
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherCases.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={otherInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`${colorClasses[study.color].bg} ${colorClasses[study.color].border} border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <study.icon className={`w-6 h-6 ${colorClasses[study.color].icon}`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{study.company}</h3>
                    <p className={`text-sm font-medium ${colorClasses[study.color].icon}`}>
                      {study.industry} • {study.location}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {study.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className={`text-xl font-bold ${colorClasses[study.color].icon}`}>
                      {study.metrics.roi}
                    </div>
                    <div className="text-gray-600 text-xs">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-xl font-bold ${colorClasses[study.color].icon}`}>
                      {study.metrics.efficiency}
                    </div>
                    <div className="text-gray-600 text-xs">效率提升</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-700 text-sm italic">
                    &ldquo;{study.testimonial.slice(0, 80)}...&rdquo;
                  </p>
                  <div className="text-xs text-gray-500 mt-2">
                    - {study.clientName}, {study.clientRole}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section-padding bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              準備成為下一個成功案例？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              讓我們為您量身打造專屬的AI解決方案，
              實現可衡量的商業價值
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center group"
              >
                立即免費諮詢
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/services"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                了解服務項目
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 