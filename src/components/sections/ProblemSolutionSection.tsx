'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { usePathname } from 'next/navigation';
import { 
  UserGroupIcon, 
  ClockIcon, 
  CurrencyDollarIcon,
  ChartBarIcon,
  CpuChipIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { getTranslations, getCurrentLocale } from '@/lib/i18n';

export default function ProblemSolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const t = getTranslations(currentLocale);

  const problems = [
    {
      icon: UserGroupIcon,
      title: t.problemSolution.problems.staffShortage.title,
      description: t.problemSolution.problems.staffShortage.description,
      stat: t.problemSolution.problems.staffShortage.stat,
      statDesc: t.problemSolution.problems.staffShortage.statDesc
    },
    {
      icon: ClockIcon,
      title: t.problemSolution.problems.manualWork.title,
      description: t.problemSolution.problems.manualWork.description,
      stat: t.problemSolution.problems.manualWork.stat,
      statDesc: t.problemSolution.problems.manualWork.statDesc
    },
    {
      icon: CurrencyDollarIcon,
      title: t.problemSolution.problems.highCost.title,
      description: t.problemSolution.problems.highCost.description,
      stat: t.problemSolution.problems.highCost.stat,
      statDesc: t.problemSolution.problems.highCost.statDesc
    }
  ];

  const solutions = [
    {
      icon: CpuChipIcon,
      title: t.problemSolution.solutions.aiAgent.title,
      description: t.problemSolution.solutions.aiAgent.description,
      benefits: t.problemSolution.solutions.aiAgent.benefits
    },
    {
      icon: ChartBarIcon,
      title: t.problemSolution.solutions.dataAnalytics.title,
      description: t.problemSolution.solutions.dataAnalytics.description,
      benefits: t.problemSolution.solutions.dataAnalytics.benefits
    },
    {
      icon: UserGroupIcon,
      title: t.problemSolution.solutions.hrOptimization.title,
      description: t.problemSolution.solutions.hrOptimization.description,
      benefits: t.problemSolution.solutions.hrOptimization.benefits
    }
  ];

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
            {t.problemSolution.title} <span className="gradient-text">{t.problemSolution.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.problemSolution.subtitle}
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
            {t.problemSolution.problemsTitle}
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
            {t.problemSolution.solutionsTitle}
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
            {t.problemSolution.ctaText}
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
} 