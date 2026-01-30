import {
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CpuChipIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { getTranslations } from '@/lib/i18n';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface ProblemSolutionSectionProps {
  locale?: 'zh' | 'en' | 'ja';
}

export default function ProblemSolutionSection({ locale = 'zh' }: ProblemSolutionSectionProps) {
  const t = getTranslations(locale);

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
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.problemSolution.title} <span className="gradient-text">{t.problemSolution.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.problemSolution.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Problems Section */}
        <div className="mb-20">
          <ScrollReveal delay={200}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t.problemSolution.problemsTitle}
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <ScrollReveal key={problem.title} delay={300 + index * 100}>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100 hover:shadow-lg transition-shadow duration-300">
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
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Arrow Transition */}
        <ScrollReveal delay={0}>
          <div className="flex justify-center mb-20">
            <div className="bg-blue-600 rounded-full p-4">
              <ArrowRightIcon className="w-8 h-8 text-white rotate-90" />
            </div>
          </div>
        </ScrollReveal>

        {/* Solutions Section */}
        <div>
          <ScrollReveal delay={0}>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {t.problemSolution.solutionsTitle}
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={100 + index * 100}>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
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
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <a
              href="#services"
              className="btn-primary inline-flex items-center group"
            >
              {t.problemSolution.ctaText}
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
