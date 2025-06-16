'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  CodeBracketIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

const programmingServices = [
  {
    title: 'Custom Web Development',
    description: 'Responsive web design, e-commerce platforms, corporate websites',
    features: ['Responsive Design', 'SEO Optimization', 'Security Protection', 'Admin Management System']
  },
  {
    title: 'Enterprise System Development',
    description: 'ERP, CRM, inventory management and other enterprise internal systems',
    features: ['Custom Requirements', 'System Integration', 'Access Control', 'Data Export Features']
  },
  {
    title: 'Mobile Applications',
    description: 'iOS, Android native applications and cross-platform app development',
    features: ['Native Performance', 'Cross-platform Support', 'Push Notifications', 'API Integration']
  },
  {
    title: 'API Integration',
    description: 'Third-party service integration, data exchange between systems',
    features: ['Multi-platform Integration', 'Real-time Sync', 'Error Handling', 'Data Transformation']
  }
];

const aiServices = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Intelligent Customer Service',
    description: 'AI chatbot implementation providing 24/7 customer service',
    benefits: ['85% auto-reply rate', 'Multi-platform integration', 'Natural language processing', 'Customer satisfaction tracking'],
    process: ['Requirements analysis', 'FAQ compilation', 'Model training', 'System deployment', 'Continuous optimization']
  },
  {
    icon: DocumentTextIcon,
    title: 'RPA Process Automation',
    description: 'Automate repetitive tasks to improve operational efficiency',
    benefits: ['Reduced labor costs', 'Improved accuracy', '24/7 operation', 'Near-zero error rate'],
    process: ['Process inventory', 'Automation design', 'Robot development', 'Testing deployment', 'Monitoring maintenance']
  },
  {
    icon: ChartBarIcon,
    title: 'Data Analytics Platform',
    description: 'AI-driven business intelligence dashboard',
    benefits: ['Real-time data insights', 'Predictive analytics', 'Automated reports', 'Decision support'],
    process: ['Data source integration', 'Analytics model design', 'Visualization development', 'User training', 'Continuous optimization']
  },
  {
    icon: CameraIcon,
    title: 'AI Intelligent Recognition',
    description: 'AI recognition and processing of documents, images, and voice',
    benefits: ['Automated data extraction', 'High accuracy recognition', 'Batch processing', 'Format conversion'],
    process: ['Data preparation', 'Model selection', 'Training optimization', 'System integration', 'Performance monitoring']
  }
];

const serviceProcess = [
  {
    step: '01',
    title: 'Requirements Consultation',
    description: 'Deep understanding of client needs and existing system status',
    icon: LightBulbIcon
  },
  {
    step: '02',
    title: 'Solution Design',
    description: 'Tailor the most suitable technical solution',
    icon: WrenchScrewdriverIcon
  },
  {
    step: '03',
    title: 'Development Implementation',
    description: 'Agile development process with regular progress reports',
    icon: CodeBracketIcon
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    description: 'Rigorous testing to ensure quality, assist with system launch',
    icon: ShieldCheckIcon
  },
  {
    step: '05',
    title: 'Training & Support',
    description: 'Complete education training and technical support services',
    icon: ClockIcon
  }
];

export default function ServicesPageClient() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
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
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                From basic programming development to AI intelligent upgrades, providing comprehensive digital transformation solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programming Services */}
        <section id="programming" ref={ref} className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <CodeBracketIcon className="w-12 h-12 text-purple-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Software Outsourcing Services
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional software development team to build solid digital infrastructure for your enterprise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {programmingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-purple-50 border border-purple-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-purple-700">
                        <CheckCircleIcon className="w-4 h-4 mr-2 text-purple-600" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-purple-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Software Outsourcing Services?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-purple-100">Years of Development Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-purple-100">Successful Cases</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-purple-100">Technical Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Services */}
        <section id="ai-agent" className="section-padding bg-gray-50">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-6">
                <CpuChipIcon className="w-12 h-12 text-blue-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  AI Agent Implementation
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Intelligent automation tools to simplify workflows and enhance decision-making capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Core Benefits</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-blue-700">
                          <CheckCircleIcon className="w-4 h-4 mr-2 text-blue-600" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Service Process</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Business with AI?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let us help you implement AI solutions that drive real results and competitive advantage
              </p>
              <Link href="/en/contact" className="btn-secondary inline-flex items-center">
                Start Your AI Journey
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Service Process */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Service Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven methodology ensures successful project delivery from consultation to support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {serviceProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <process.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                      {process.step}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let&apos;s discuss how we can help transform your business with our software development and AI solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/en/contact" className="btn-primary inline-flex items-center">
                  Get Free Consultation
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/en/cases" className="btn-secondary inline-flex items-center">
                  View Case Studies
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}