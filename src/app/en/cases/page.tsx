'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  BuildingOfficeIcon,
  ShoppingBagIcon,
  TruckIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ChatBubbleLeftIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

interface DetailedCaseStudy {
  id: number;
  industry: string;
  icon: React.ComponentType<{ className?: string }>;
  company: string;
  location: string;
  size: string;
  projectDuration: string;
  challenge: string;
  solution: string;
  description: string;
  implementation: string[];
  results: string[];
  testimonial: string;
  clientName: string;
  clientRole: string;
  metrics: {
    roi: string;
    timeSaved: string;
    costReduction: string;
    efficiency: string;
  };
  technologies: string[];
  color: 'emerald' | 'blue' | 'purple' | 'indigo' | 'orange' | 'red';
  featured: boolean;
}

const detailedCases: DetailedCaseStudy[] = [
  {
    id: 1,
    industry: 'Wholesale & Retail',
    icon: ShoppingBagIcon,
    company: 'Wholesale Trading Company',
    location: 'Taichung City',
    size: 'Medium Enterprise (50-100 employees)',
    projectDuration: '3 months',
    challenge: 'Daily manual entry of dozens of purchase orders, employees often working overtime until midnight, human errors causing inventory management chaos, increasing customer complaints.',
    solution: 'AI Intelligent Recognition System',
    description: 'Developed a deep learning-based OCR recognition system combined with natural language processing technology to automatically extract key information from purchase orders and integrate with ERP systems.',
    implementation: [
      'Collected and annotated 2000+ purchase order samples',
      'Trained proprietary OCR model',
      'Developed mobile app photo upload interface',
      'Built data validation and error correction mechanism',
      'Integrated existing ERP system API',
      'Employee training and system launch'
    ],
    results: [
      'Save 14 hours of manual work daily',
      'Data accuracy improved to 99.2%',
      'Inventory turnover increased by 35%',
      'Customer satisfaction improved from 72% to 94%',
      'Employee overtime reduced by 80%',
      'Monthly operational cost reduced by NT$120,000'
    ],
    testimonial: 'If I had known AI was this useful, I wouldn&apos;t have delayed starting for so long! Now employees have time to spend with family after work, and work efficiency has greatly improved.',
    clientName: 'Mr. Wang',
    clientRole: 'Owner',
    metrics: {
      roi: '480%',
      timeSaved: '14 hrs/day',
      costReduction: '50%',
      efficiency: '99.2%'
    },
    technologies: ['Deep Learning OCR', 'React Native', 'Python Flask', 'PostgreSQL', 'AWS'],
    color: 'emerald',
    featured: true
  },
  {
    id: 2,
    industry: 'E-commerce Platform',
    icon: ShoppingBagIcon,
    company: 'QuickBuy E-commerce',
    location: 'Taipei City',
    size: 'Medium Enterprise (30-50 employees)',
    projectDuration: '4 months',
    challenge: 'Operating on multiple platforms like MOMO, PChome, Shopee, unable to grasp real-time sales status across platforms, difficult inventory management, frequent stockouts or overstocking.',
    solution: 'AI Smart Analytics Dashboard',
    description: 'Built a unified data platform, integrated multi-platform APIs, used machine learning to predict sales trends, automated replenishment recommendation system.',
    implementation: [
      'Integrated 8 e-commerce platform APIs',
      'Built real-time data synchronization mechanism',
      'Developed sales prediction ML model',
      'Designed intuitive dashboard interface',
      'Built automated replenishment alert system',
      'Integrated inventory management processes'
    ],
    results: [
      'Inventory turnover increased by 30%',
      'Stockout rate reduced by 85%',
      'Sales prediction accuracy reached 92%',
      'Inventory cost reduced by 25%',
      'Customer satisfaction improved by 40%',
      'Revenue growth of 18%'
    ],
    testimonial: 'Now I only need to look at one screen daily to grasp yesterday&apos;s sales status and instantly discover hot-selling products. It&apos;s really convenient!',
    clientName: 'Manager Chen',
    clientRole: 'Operations Manager',
    metrics: {
      roi: '320%',
      timeSaved: '8 hrs/day',
      costReduction: '25%',
      efficiency: '92%'
    },
    technologies: ['Python Django', 'Vue.js', 'TensorFlow', 'Redis', 'MongoDB'],
    color: 'blue',
    featured: true
  },
  {
    id: 3,
    industry: 'Accounting Services',
    icon: DocumentTextIcon,
    company: 'Accounting Firm',
    location: 'Kaohsiung City',
    size: 'Small Enterprise (10-30 employees)',
    projectDuration: '2 months',
    challenge: 'During tax season, employees need to work overtime until midnight, massive repetitive document processing work, manual downloading and categorizing government website documents is time-consuming and error-prone.',
    solution: 'RPA Process Automation System',
    description: 'Designed intelligent robot processes to automatically log into Ministry of Finance website, batch download documents and perform intelligent classification and filing, operating 24/7 without interruption.',
    implementation: [
      'Analyzed existing workflow processes',
      'Developed RPA automation scripts',
      'Built document classification AI model',
      'Set up scheduling and monitoring system',
      'Built exception handling mechanism',
      'Employee operation training'
    ],
    results: [
      'Original 14-hour work now completed automatically overnight',
      '100% document classification accuracy',
      '500% processing speed improvement',
      'Employees can focus on high-value consulting work',
      '60% increase in client case processing volume',
      'Overtime cost savings of NT$200,000/year'
    ],
    testimonial: 'The system silently completes all tedious work at night, and we can see organized documents when we arrive at work the next day. Employees finally don&apos;t have to stay up late.',
    clientName: 'CPA Lin',
    clientRole: 'Director',
    metrics: {
      roi: '650%',
      timeSaved: '14 hrs/day',
      costReduction: '60%',
      efficiency: '100%'
    },
    technologies: ['UiPath RPA', 'Python Selenium', 'NLP Classification', 'MySQL', 'Windows Server'],
    color: 'purple',
    featured: true
  },
  {
    id: 4,
    industry: 'Customer Service Center',
    icon: BuildingOfficeIcon,
    company: 'Premium Service Center',
    location: 'Taipei City',
    size: 'Medium Enterprise (80-120 employees)',
    projectDuration: '5 months',
    challenge: 'High volume of customer inquiries, insufficient customer service staff, slow response times, low customer satisfaction, continuously rising labor costs.',
    solution: 'AI Intelligent Customer Service Bot',
    description: 'Built LINE official account AI chatbot, integrated knowledge base management system, providing multi-turn conversations and human handover functionality.',
    implementation: [
      'Collected historical customer service conversation records',
      'Built knowledge base and FAQ system',
      'Trained conversational AI model',
      'Developed LINE Bot interface',
      'Built human handover mechanism',
      'Continuous learning optimization system'
    ],
    results: [
      '85% inquiries automatically replied',
      'Average response time reduced from 30 minutes to 3 seconds',
      '24/7 uninterrupted service',
      'Customer satisfaction improved from 65% to 91%',
      '40% reduction in customer service staffing needs',
      'Annual labor cost savings of NT$800,000'
    ],
    testimonial: 'Over 85% of inquiries can be automatically replied to. Customer service staff can now focus on handling more complex issues, and customer satisfaction has greatly improved.',
    clientName: 'Manager Liu',
    clientRole: 'Customer Service Manager',
    metrics: {
      roi: '420%',
      timeSaved: '12 hrs/day',
      costReduction: '40%',
      efficiency: '85%'
    },
    technologies: ['LINE Messaging API', 'Python FastAPI', 'BERT NLP', 'Elasticsearch', 'Docker'],
    color: 'indigo',
    featured: true
  }
];

export default function CasesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [detailRef, detailInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const featuredCases = detailedCases.filter(c => c.featured);

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
              Success <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Real transformation stories from Taiwan SMEs - see how AI implementation creates measurable business value
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                <span>Average ROI: 400%+</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                <span>Implementation: 2-5 months</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                <span>Cost reduction: 25-60%</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cases Overview */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manual processes to intelligent automation - see how our clients achieved remarkable transformations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`bg-gradient-to-br from-${caseStudy.color}-50 to-${caseStudy.color}-100 border border-${caseStudy.color}-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 bg-${caseStudy.color}-600 rounded-xl flex items-center justify-center mr-4`}>
                      <caseStudy.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {caseStudy.company}
                      </h3>
                      <p className={`text-${caseStudy.color}-700 text-sm font-medium`}>
                        {caseStudy.industry}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div className="flex items-center mb-1">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {caseStudy.location}
                    </div>
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {caseStudy.projectDuration}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {caseStudy.challenge}
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {caseStudy.description}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className={`bg-${caseStudy.color}-600 rounded-lg p-4 text-white text-center`}>
                    <div className="text-2xl font-bold mb-1">{caseStudy.metrics.roi}</div>
                    <div className="text-xs opacity-90">ROI</div>
                  </div>
                  <div className={`bg-${caseStudy.color}-600 rounded-lg p-4 text-white text-center`}>
                    <div className="text-2xl font-bold mb-1">{caseStudy.metrics.timeSaved}</div>
                    <div className="text-xs opacity-90">Time Saved</div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className={`bg-white/70 rounded-lg p-4 border border-${caseStudy.color}-200`}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <UserGroupIcon className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm italic mb-2">
                        &ldquo;{caseStudy.testimonial}&rdquo;
                      </p>
                      <div className="text-xs text-gray-600">
                        <span className="font-medium">{caseStudy.clientName}</span>
                        <span className="mx-1">•</span>
                        <span>{caseStudy.clientRole}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section ref={detailRef} className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={detailInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Detailed Implementation Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth look at implementation processes, technologies used, and measurable results achieved
            </p>
          </motion.div>

          <div className="space-y-12">
            {detailedCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={detailInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`bg-gradient-to-r from-${caseStudy.color}-600 to-${caseStudy.color}-700 p-8 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <caseStudy.icon className="w-12 h-12 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{caseStudy.company}</h3>
                        <p className="text-lg opacity-90">{caseStudy.industry} • {caseStudy.size}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold mb-1">{caseStudy.metrics.roi}</div>
                      <div className="text-sm opacity-90">Return on Investment</div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <DocumentTextIcon className="w-5 h-5 mr-2 text-red-600" />
                          Business Challenge
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <CheckCircleIcon className="w-5 h-5 mr-2 text-green-600" />
                          Our Solution
                        </h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {caseStudy.description}
                        </p>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-3">Implementation Steps:</h5>
                          <ul className="space-y-2">
                            {caseStudy.implementation.map((step, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-700">
                                <span className={`inline-block w-6 h-6 bg-${caseStudy.color}-100 text-${caseStudy.color}-700 rounded-full text-xs font-bold flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                                  {idx + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <ChartBarIcon className="w-5 h-5 mr-2 text-blue-600" />
                          Key Results
                        </h4>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-1">{caseStudy.metrics.timeSaved}</div>
                            <div className="text-xs text-blue-700">Time Saved</div>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">{caseStudy.metrics.costReduction}</div>
                            <div className="text-xs text-green-700">Cost Reduction</div>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">{caseStudy.metrics.efficiency}</div>
                            <div className="text-xs text-purple-700">Accuracy Rate</div>
                          </div>
                          <div className="bg-orange-50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-orange-600 mb-1">{caseStudy.metrics.roi}</div>
                            <div className="text-xs text-orange-700">ROI</div>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {caseStudy.results.map((result, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech, idx) => (
                            <span key={idx} className={`px-3 py-1 bg-${caseStudy.color}-100 text-${caseStudy.color}-800 text-xs rounded-full font-medium`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className={`bg-${caseStudy.color}-50 border border-${caseStudy.color}-200 rounded-lg p-6`}>
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <div className={`w-12 h-12 bg-${caseStudy.color}-600 rounded-full flex items-center justify-center`}>
                              <UserGroupIcon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div>
                                                  <p className="text-gray-700 italic mb-3">
                        &ldquo;{caseStudy.testimonial}&rdquo;
                      </p>
                            <div className="text-sm">
                              <span className="font-bold text-gray-900">{caseStudy.clientName}</span>
                              <span className="text-gray-600 mx-2">•</span>
                              <span className="text-gray-600">{caseStudy.clientRole}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
            animate={detailInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join these successful companies and start your AI transformation journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contact"
                className="btn-primary bg-white text-blue-600 hover:bg-gray-100 inline-flex items-center"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/en/services"
                className="btn-secondary border-white text-white hover:bg-white hover:text-blue-600 inline-flex items-center"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 