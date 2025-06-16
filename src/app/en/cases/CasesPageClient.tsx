'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  BuildingOfficeIcon,
  ShoppingBagIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon,
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
    technologies: ['Dialogflow', 'LINE Messaging API', 'Node.js', 'MongoDB', 'GCP'],
    color: 'indigo',
    featured: true
  },
  {
    id: 5,
    industry: 'Manufacturing',
    icon: BuildingOfficeIcon,
    company: 'Precision Manufacturing Co.',
    location: 'Taoyuan City',
    size: 'Large Enterprise (200+ employees)',
    projectDuration: '6 months',
    challenge: 'Quality control relies on manual inspection, high defect rates, production line efficiency bottlenecks, difficulty tracking production progress in real-time.',
    solution: 'AI Vision Quality Inspection System',
    description: 'Deployed computer vision AI system on production lines to automatically detect product defects and build real-time production monitoring dashboard.',
    implementation: [
      'Installed high-resolution cameras on production lines',
      'Collected defect samples and trained AI models',
      'Built real-time image processing pipeline',
      'Developed production monitoring dashboard',
      'Integrated ERP and MES systems',
      'Staff training and system optimization'
    ],
    results: [
      'Defect detection accuracy improved to 99.8%',
      'Production efficiency increased by 28%',
      'Quality control labor costs reduced by 70%',
      'Customer return rate decreased by 90%',
      'Real-time production visibility achieved',
      'Annual cost savings of NT$2,500,000'
    ],
    testimonial: 'AI vision inspection is much more accurate than human eyes. Now we can discover problems immediately and adjust quickly. Product quality has reached a new level.',
    clientName: 'Director Zhang',
    clientRole: 'Production Director',
    metrics: {
      roi: '580%',
      timeSaved: '20 hrs/day',
      costReduction: '70%',
      efficiency: '99.8%'
    },
    technologies: ['TensorFlow', 'OpenCV', 'React Dashboard', 'PostgreSQL', 'Docker'],
    color: 'orange',
    featured: false
  },
  {
    id: 6,
    industry: 'Logistics & Warehousing',
    icon: BuildingOfficeIcon,
    company: 'Smart Logistics Co.',
    location: 'New Taipei City',
    size: 'Medium Enterprise (60-80 employees)',
    projectDuration: '4 months',
    challenge: 'Warehouse inventory management chaos, frequent picking errors, inability to predict delivery times accurately, high customer complaint rates.',
    solution: 'AI Smart Warehouse Management System',
    description: 'Built intelligent warehouse management system with predictive analytics, automated route optimization, and real-time inventory tracking.',
    implementation: [
      'Deployed IoT sensors throughout warehouse',
      'Built machine learning prediction models',
      'Developed mobile picking applications',
      'Integrated GPS tracking system',
      'Built customer notification system',
      'Staff training and process optimization'
    ],
    results: [
      'Picking accuracy improved to 99.5%',
      'Inventory management efficiency increased by 45%',
      'Delivery time prediction accuracy 95%',
      'Customer complaints reduced by 80%',
      'Warehouse space utilization improved by 30%',
      'Operating costs reduced by NT$300,000/month'
    ],
    testimonial: 'Now we can tell customers exactly when packages will arrive, and our credibility has greatly improved. Warehouse operations are much more organized.',
    clientName: 'Manager Huang',
    clientRole: 'Operations Manager',
    metrics: {
      roi: '380%',
      timeSaved: '10 hrs/day',
      costReduction: '35%',
      efficiency: '99.5%'
    },
    technologies: ['IoT Sensors', 'Python ML', 'React Native', 'MySQL', 'AWS IoT'],
    color: 'red',
    featured: false
  }
];

export default function CasesPageClient() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [casesRef, casesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const featuredCases = detailedCases.filter(c => c.featured);

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        icon: 'text-emerald-600',
        accent: 'text-emerald-600',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        badge: 'bg-emerald-100 text-emerald-800'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        accent: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        badge: 'bg-blue-100 text-blue-800'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        accent: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        badge: 'bg-purple-100 text-purple-800'
      },
      indigo: {
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        icon: 'text-indigo-600',
        accent: 'text-indigo-600',
        button: 'bg-indigo-600 hover:bg-indigo-700',
        badge: 'bg-indigo-100 text-indigo-800'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        accent: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        badge: 'bg-orange-100 text-orange-800'
      },
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: 'text-red-600',
        accent: 'text-red-600',
        button: 'bg-red-600 hover:bg-red-700',
        badge: 'bg-red-100 text-red-800'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  const CaseCard = ({ caseStudy, index }: { caseStudy: DetailedCaseStudy; index: number }) => {
    const colors = getColorClasses(caseStudy.color);
    const [cardRef, cardInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`${colors.icon} p-3 bg-white rounded-xl shadow-sm`}>
              <caseStudy.icon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{caseStudy.company}</h3>
              <p className="text-gray-600">{caseStudy.industry}</p>
            </div>
          </div>
          {caseStudy.featured && (
            <span className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium`}>
              Featured
            </span>
          )}
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <MapPinIcon className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">{caseStudy.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <UserGroupIcon className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">{caseStudy.size}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-600">{caseStudy.projectDuration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <ChartBarIcon className="h-5 w-5 text-gray-400" />
            <span className={`text-sm font-semibold ${colors.accent}`}>ROI: {caseStudy.metrics.roi}</span>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
          <p className="text-gray-600 text-sm mb-4">{caseStudy.challenge}</p>
          
          <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
          <p className="text-gray-600 text-sm">{caseStudy.description}</p>
        </div>

        {/* Key Results */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
          <div className="grid grid-cols-1 gap-3">
            {caseStudy.results.slice(0, 3).map((result, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <CheckCircleIcon className={`h-4 w-4 ${colors.accent} mt-0.5 flex-shrink-0`} />
                <span className="text-sm text-gray-600">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-white/60 rounded-lg">
          <div className="text-center">
            <div className={`text-lg font-bold ${colors.accent}`}>{caseStudy.metrics.roi}</div>
            <div className="text-xs text-gray-500">ROI</div>
          </div>
          <div className="text-center">
            <div className={`text-lg font-bold ${colors.accent}`}>{caseStudy.metrics.timeSaved}</div>
            <div className="text-xs text-gray-500">Time Saved</div>
          </div>
          <div className="text-center">
            <div className={`text-lg font-bold ${colors.accent}`}>{caseStudy.metrics.costReduction}</div>
            <div className="text-xs text-gray-500">Cost Cut</div>
          </div>
          <div className="text-center">
            <div className={`text-lg font-bold ${colors.accent}`}>{caseStudy.metrics.efficiency}</div>
            <div className="text-xs text-gray-500">Accuracy</div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white/60 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 italic mb-2">&quot;{caseStudy.testimonial}&quot;</p>
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-900">{caseStudy.clientName}</p>
            <p className="text-xs text-gray-500">{caseStudy.clientRole}</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className={`w-full ${colors.button} text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2`}>
          <span>Learn More About This Case</span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-6">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Real Success Stories
              <span className="block text-blue-600 mt-2">Proven AI Results</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore how AIRAI Technology has helped businesses across Taiwan achieve remarkable transformations 
              through strategic AI implementation. Real cases, real results, measurable ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span>95% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span>Average 420% ROI</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span>4+ Industries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            ref={casesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={casesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Success Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful AI implementations that delivered exceptional results
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredCases.map((caseStudy, index) => (
              <CaseCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how AI can transform your business with proven strategies and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/en/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Your AI Journey</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="/en/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 