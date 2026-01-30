import Link from 'next/link';
import {
  CodeBracketIcon,
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CameraIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { getTranslations } from '@/lib/i18n';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface ServicesSectionProps {
  locale?: 'zh' | 'en' | 'ja';
}

export default function ServicesSection({ locale = 'zh' }: ServicesSectionProps) {
  const currentLocale = locale;
  const t = getTranslations(currentLocale);

  // 服務項目配置
  const services = [
    {
      id: 'programming',
      icon: CodeBracketIcon,
      title: t.services.programming.title,
      subtitle: t.services.programming.subtitle,
      description: t.services.programming.description,
      benefits: t.services.programming.benefits,
      process: t.services.programming.process,
      color: 'purple'
    },
    {
      id: 'ai-agent',
      icon: CpuChipIcon,
      title: t.services.aiAgent.title,
      subtitle: t.services.aiAgent.subtitle,
      description: t.services.aiAgent.description,
      benefits: t.services.aiAgent.benefits,
      process: t.services.aiAgent.process,
      color: 'blue'
    }
  ];

  // AI 應用場景配置
  const aiApplications = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: t.services.applications.smartCustomerService.title,
      description: t.services.applications.smartCustomerService.description,
      example: t.services.applications.smartCustomerService.example
    },
    {
      icon: DocumentTextIcon,
      title: t.services.applications.rpa.title,
      description: t.services.applications.rpa.description,
      example: t.services.applications.rpa.example
    },
    {
      icon: ChartBarIcon,
      title: t.services.applications.dataAnalytics.title,
      description: t.services.applications.dataAnalytics.description,
      example: t.services.applications.dataAnalytics.example
    },
    {
      icon: CameraIcon,
      title: t.services.applications.intelligentRecognition.title,
      description: t.services.applications.intelligentRecognition.description,
      example: t.services.applications.intelligentRecognition.example
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">{t.services.title}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={200 + index * 200}>
              <div
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 ${
                  service.color === 'blue' ? 'border-blue-600' : 'border-purple-600'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    service.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      service.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                    }`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className={`text-sm font-medium ${
                      service.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                    }`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">{t.services.coreEffects}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          service.color === 'blue' ? 'bg-blue-600' : 'bg-purple-600'
                        }`}></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">{t.services.serviceProcess}</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.process.map((step, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          service.color === 'blue'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {idx + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={currentLocale === 'zh' ? `/services#${service.id}` : `/${currentLocale}/services#${service.id}`}
                  className={`inline-flex items-center font-medium ${
                    service.color === 'blue' ? 'text-blue-600 hover:text-blue-700' : 'text-purple-600 hover:text-purple-700'
                  } transition-colors duration-200 group`}
                >
                  {t.services.learnMore}
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* AI Applications */}
        <ScrollReveal delay={600}>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {t.services.applications.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiApplications.map((app, index) => (
              <ScrollReveal key={app.title} delay={800 + index * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <app.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {app.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-700 text-xs font-medium">
                      {currentLocale === 'zh' ? '實際案例：' : currentLocale === 'en' ? 'Example: ' : '実例：'}{app.example}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
