import Link from 'next/link';
import {
  ShoppingBagIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline';
import { getTranslations } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';
import ScrollReveal from '@/components/ui/ScrollReveal';

type ColorType = 'emerald' | 'blue' | 'purple' | 'indigo';

interface CaseStudy {
  id: number;
  industry: string;
  icon: React.ComponentType<{ className?: string }>;
  company: string;
  challenge: string;
  solution: string;
  description: string;
  results: readonly string[];
  testimonial: string;
  color: ColorType;
}

export default function CaseStudiesSection({ locale = 'zh' }: { locale?: Locale }) {
  const t = getTranslations(locale);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      industry: t.caseStudies.cases.wholesale.industry,
      icon: ShoppingBagIcon,
      company: t.caseStudies.cases.wholesale.company,
      challenge: t.caseStudies.cases.wholesale.challenge,
      solution: t.caseStudies.cases.wholesale.solution,
      description: t.caseStudies.cases.wholesale.description,
      results: t.caseStudies.cases.wholesale.results,
      testimonial: t.caseStudies.cases.wholesale.testimonial,
      color: 'emerald'
    },
    {
      id: 2,
      industry: t.caseStudies.cases.ecommerce.industry,
      icon: ShoppingBagIcon,
      company: t.caseStudies.cases.ecommerce.company,
      challenge: t.caseStudies.cases.ecommerce.challenge,
      solution: t.caseStudies.cases.ecommerce.solution,
      description: t.caseStudies.cases.ecommerce.description,
      results: t.caseStudies.cases.ecommerce.results,
      testimonial: t.caseStudies.cases.ecommerce.testimonial,
      color: 'blue'
    },
    {
      id: 3,
      industry: t.caseStudies.cases.accounting.industry,
      icon: DocumentTextIcon,
      company: t.caseStudies.cases.accounting.company,
      challenge: t.caseStudies.cases.accounting.challenge,
      solution: t.caseStudies.cases.accounting.solution,
      description: t.caseStudies.cases.accounting.description,
      results: t.caseStudies.cases.accounting.results,
      testimonial: t.caseStudies.cases.accounting.testimonial,
      color: 'purple'
    },
    {
      id: 4,
      industry: t.caseStudies.cases.customerService.industry,
      icon: BuildingOfficeIcon,
      company: t.caseStudies.cases.customerService.company,
      challenge: t.caseStudies.cases.customerService.challenge,
      solution: t.caseStudies.cases.customerService.solution,
      description: t.caseStudies.cases.customerService.description,
      results: t.caseStudies.cases.customerService.results,
      testimonial: t.caseStudies.cases.customerService.testimonial,
      color: 'indigo'
    }
  ];

  const colorClasses: Record<ColorType, { bg: string; border: string; icon: string; accent: string; }> = {
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      icon: 'text-emerald-600',
      accent: 'bg-emerald-100 text-emerald-700'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      accent: 'bg-blue-100 text-blue-700'
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      accent: 'bg-purple-100 text-purple-700'
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
      icon: 'text-indigo-600',
      accent: 'bg-indigo-100 text-indigo-700'
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">{t.caseStudies.title}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.caseStudies.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <ScrollReveal key={study.id} delay={200 + index * 100}>
              <div
                className={`${colorClasses[study.color].bg} ${colorClasses[study.color].border} border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <study.icon className={`w-6 h-6 ${colorClasses[study.color].icon}`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{study.company}</h3>
                    <p className={`text-sm font-medium ${colorClasses[study.color].icon}`}>
                      {study.industry}
                    </p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{t.caseStudies.challenge}</h4>
                  <p className="text-gray-600 text-sm">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">{t.caseStudies.solution}</h4>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colorClasses[study.color].accent} mb-2`}>
                    {study.solution}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {study.description}
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{t.caseStudies.results}</h4>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full mr-2 ${colorClasses[study.color].icon.replace('text-', 'bg-')}`}></div>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="flex items-start">
                    <ChatBubbleLeftIcon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm italic ml-2">
                      &ldquo;{study.testimonial}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats Summary */}
        <ScrollReveal delay={800}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center mb-12">
            <h3 className="text-2xl font-bold mb-8">{t.caseStudies.overallStats}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">{t.caseStudies.statsValues.automation}</div>
                <div className="text-blue-100">{t.caseStudies.stats.automation}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{t.caseStudies.statsValues.costReduction}</div>
                <div className="text-blue-100">{t.caseStudies.stats.costReduction}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{t.caseStudies.statsValues.timeSaved}</div>
                <div className="text-blue-100">{t.caseStudies.stats.timeSaved}</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{t.caseStudies.statsValues.satisfaction}</div>
                <div className="text-blue-100">{t.caseStudies.stats.satisfaction}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={1000}>
          <div className="text-center">
            <Link
              href={locale === 'zh' ? "/cases" : `/${locale}/cases`}
              className="btn-primary inline-flex items-center group mr-4 mb-4"
            >
              {t.caseStudies.ctaButtons.viewMore}
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href={locale === 'zh' ? "/contact" : `/${locale}/contact`}
              className="btn-secondary inline-flex items-center group mb-4"
            >
              {t.caseStudies.ctaButtons.startJourney}
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
