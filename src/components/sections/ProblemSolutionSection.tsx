'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  UserGroupIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  ChartBarIcon,
  CpuChipIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const problems = [
  {
    icon: UserGroupIcon,
    title: '人力短缺困境',
    description: '少子化與高齡化導致專業人才招募困難，員工身兼數職影響效率',
    stat: '45.5%',
    statDesc: '企業擔心投入資金無預期成效'
  },
  {
    icon: ClockIcon,
    title: '繁瑣手工作業',
    description: '大量重複性工作耗費人力，手動數據輸入容易出錯且效率低下',
    stat: '14小時',
    statDesc: '每日手動作業時間'
  },
  {
    icon: CurrencyDollarIcon,
    title: '高成本低效益',
    description: '缺乏自動化工具，營運成本居高不下，難以提升競爭力',
    stat: '24.5%',
    statDesc: '企業認為解決方案價格難以負擔'
  }
];

const solutions = [
  {
    icon: CpuChipIcon,
    title: 'AI Agent 智能導入',
    description: '客製化 AI 解決方案，自動化重複性工作，24/7 不間斷服務',
    benefits: ['85% 詢問自動回覆', '14小時人工時間節省', '99% 數據準確率']
  },
  {
    icon: ChartBarIcon,
    title: '數據驅動決策',
    description: '即時數據收集與分析，智能儀表板提供營運洞察',
    benefits: ['即時銷售分析', '自動補貨建議', '精準庫存管理']
  },
  {
    icon: UserGroupIcon,
    title: '人力資源優化',
    description: '釋放人力投入高價值工作，提升員工滿意度與生產力',
    benefits: ['50% 營運成本降低', '員工專注核心業務', '提升服務品質']
  }
];

export default function ProblemSolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            中小企業的 <span className="gradient-text">挑戰與機會</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解您的痛點，提供精準的 AI 解決方案
          </p>
        </motion.div>

        {/* Problems Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            常見挑戰
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-red-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-shadow duration-300"
              >
                <problem.icon className="w-12 h-12 text-red-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {problem.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {problem.description}
                </p>
                <div className="bg-red-100 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">
                    {problem.stat}
                  </div>
                  <div className="text-sm text-red-700">
                    {problem.statDesc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrow Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mb-20"
        >
          <div className="bg-blue-600 rounded-full p-4">
            <ArrowRightIcon className="w-8 h-8 text-white rotate-90" />
          </div>
        </motion.div>

        {/* Solutions Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            智流科技解決方案
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 + index * 0.1 }}
                className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow duration-300"
              >
                <solution.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {solution.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-blue-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-12"
        >
          <a
            href="#services"
            className="btn-primary inline-flex items-center group"
          >
            了解更多解決方案
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 