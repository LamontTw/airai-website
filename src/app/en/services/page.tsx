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
    title: 'Custom Website Development',
    description: 'Responsive web design, e-commerce platforms, corporate websites',
    features: ['Responsive Design', 'SEO Optimization', 'Security Protection', 'Admin Management System']
  },
  {
    title: 'Enterprise System Development',
    description: 'ERP, CRM, inventory management and other internal enterprise systems',
    features: ['Custom Requirements', 'System Integration', 'Permission Management', 'Data Export Functions']
  },
  {
    title: 'Mobile Applications',
    description: 'iOS, Android native apps and cross-platform application development',
    features: ['Native Performance', 'Cross-platform Support', 'Push Notifications', 'API Integration']
  },
  {
    title: 'API Integration',
    description: 'Third-party service integration, inter-system data exchange',
    features: ['Multi-platform Integration', 'Real-time Sync', 'Error Handling', 'Data Transformation']
  }
];

const aiServices = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Intelligent Customer Service',
    description: 'AI chatbot implementation providing 24/7 customer service',
    benefits: ['85% Auto-reply Rate', 'Multi-platform Integration', 'Natural Language Processing', 'Customer Satisfaction Tracking'],
    process: ['Requirement Analysis', 'FAQ Organization', 'Model Training', 'System Launch', 'Continuous Optimization']
  },
  {
    icon: DocumentTextIcon,
    title: 'RPA Process Automation',
    description: 'Automate repetitive tasks to improve operational efficiency',
    benefits: ['Reduce Labor Costs', 'Improve Accuracy', '24/7 Operation', 'Near-zero Error Rate'],
    process: ['Process Inventory', 'Automation Design', 'Robot Development', 'Testing & Deployment', 'Monitoring & Maintenance']
  },
  {
    icon: ChartBarIcon,
    title: 'Data Analytics Platform',
    description: 'AI-driven business intelligence dashboard',
    benefits: ['Real-time Data Insights', 'Predictive Analytics', 'Automated Reports', 'Decision Support'],
    process: ['Data Source Integration', 'Analysis Model Design', 'Visualization Development', 'User Training', 'Continuous Optimization']
  },
  {
    icon: CameraIcon,
    title: 'AI Intelligent Recognition',
    description: 'AI recognition and processing of documents, images, and voice',
    benefits: ['Automated Data Extraction', 'High Accuracy Recognition', 'Batch Processing', 'Format Conversion'],
    process: ['Data Preparation', 'Model Selection', 'Training & Tuning', 'System Integration', 'Performance Monitoring']
  }
];

const serviceProcess = [
  {
    step: '01',
    title: 'Requirement Consultation',
    description: 'In-depth understanding of customer needs and existing system status',
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
    description: 'Comprehensive training and technical support services',
    icon: ClockIcon
  }
];

export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
              Professional software development team to build solid digital infrastructure for your business
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
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="text-purple-100">Customer Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services */}
      <section id="ai-services" className="section-padding bg-gray-50">
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
              Intelligent automation solutions to enhance business efficiency and reduce operational costs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <service.icon className="w-10 h-10 text-blue-600 mr-4" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
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
                  <h4 className="font-semibold text-gray-900 mb-3">Implementation Process:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.process.map((step, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional and transparent service process to ensure project success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {serviceProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and let our experts design the best solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contact"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center"
              >
                Free Consultation
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/en/cases"
                className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 inline-flex items-center"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 