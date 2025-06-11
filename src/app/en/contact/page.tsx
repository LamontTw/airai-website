'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { OrganizationSchema } from '@/components/seo/StructuredData';
import { EMAILJS_CONFIG, type EmailTemplateParams } from '@/lib/emailjs-config';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone Consultation',
    content: '+886 953-202-811',
    description: 'Mon-Fri 09:00-18:00',
    action: 'tel:+886953202811'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: 'contact@airai.tw',
    description: 'Reply within 24 hours',
    action: 'mailto:contact@airai.tw'
  },
  {
    icon: MapPinIcon,
    title: 'Office Address',
    content: 'No. 26, Canghou St., Banqiao Dist., New Taipei City',
    description: 'AIRAI Technology',
    action: 'https://maps.google.com'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'LINE Official Account',
    content: '@365cpgih',
    description: 'Real-time online consultation',
    action: 'https://line.me/R/ti/p/@365cpgih'
  }
];

const consultationTypes = [
  'Software Outsourcing Assessment',
  'AI Agent Implementation Planning',
  'Intelligent Customer Service Setup',
  'RPA Process Automation',
  'Data Analytics Dashboard',
  'Other AI Application Consultation'
];

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    consultationType: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Prepare data to send
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_company: formData.company,
        from_email: formData.email,
        from_phone: formData.phone,
        consultation_type: formData.consultationType,
        budget_range: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        to_email: 'contact@airai.tw',
        reply_to: formData.email,
        current_date: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: '2-digit', 
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Log to console temporarily, enable after EmailJS setup
      console.log('Form submission data:', templateParams);
      
      // EmailJS send email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
        templateParams, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
    setIsSubmitted(true);
    
      // Reset state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        consultationType: '',
        message: '',
        budget: '',
        timeline: ''
      });
      }, 5000);

    } catch (error) {
      console.error('Send failed:', error);
      setSubmitError('Send failed, please try again later or contact us directly');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <OrganizationSchema customData={{
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+886 953-202-811",
          "email": "contact@airai.tw",
          "contactType": "customer service",
          "availableLanguage": ["Chinese", "English"],
          "areaServed": "TW",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        }
      }} />
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
              Contact <span className="gradient-text">AIRAI Technology</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Ready to start your AI transformation journey? Our expert team is ready to provide you with free consultation services
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-600 rounded-full p-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose the most convenient method for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.action}
                target={info.action.startsWith('http') ? '_blank' : '_self'}
                rel={info.action.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <info.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {info.content}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Free Consultation Application
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and our experts will contact you within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircleIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest. Our experts will contact you within 24 hours to discuss your AI implementation needs.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 text-left max-w-md mx-auto">
                    <h4 className="font-semibold text-blue-900 mb-2">What happens next:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Expert will review your requirements</li>
                      <li>• Schedule a consultation call</li>
                      <li>• Provide customized solution recommendations</li>
                      <li>• Discuss implementation timeline and budget</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Please enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Please enter your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="example@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="0912-345-678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
                      Consultation Type *
                    </label>
                    <select
                      id="consultationType"
                      name="consultationType"
                      required
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Please select consultation type</option>
                      {consultationTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Please select budget range</option>
                        <option value="Under NT$500K">Under NT$500K</option>
                        <option value="NT$500K - NT$1M">NT$500K - NT$1M</option>
                        <option value="NT$1M - NT$3M">NT$1M - NT$3M</option>
                        <option value="NT$3M - NT$5M">NT$3M - NT$5M</option>
                        <option value="Over NT$5M">Over NT$5M</option>
                        <option value="To be discussed">To be discussed</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Please select timeline</option>
                        <option value="Immediate (within 1 month)">Immediate (within 1 month)</option>
                        <option value="Short-term (1-3 months)">Short-term (1-3 months)</option>
                        <option value="Medium-term (3-6 months)">Medium-term (3-6 months)</option>
                        <option value="Long-term (6+ months)">Long-term (6+ months)</option>
                        <option value="Just exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Please describe your current business challenges, expected goals, and any specific requirements..."
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm">{submitError}</p>
                    </div>
                  )}

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <PaperAirplaneIcon className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center text-sm text-gray-600">
                    <p>
                      By submitting this form, you agree to our{' '}
                      <a href="/en/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
                      {' '}and{' '}
                      <a href="/en/terms" className="text-blue-600 hover:underline">Terms of Service</a>
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our consultation and implementation process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Is the consultation really free?",
                answer: "Yes, our initial consultation is completely free. We'll assess your needs, provide preliminary recommendations, and only charge when you decide to proceed with implementation."
              },
              {
                question: "How long does the consultation process take?",
                answer: "The initial consultation typically takes 1-2 hours. We'll then provide a detailed proposal within 3-5 business days, including timeline and cost estimates."
              },
              {
                question: "What information should I prepare for the consultation?",
                answer: "Please prepare information about your current business processes, pain points, expected goals, and any existing systems. This helps us provide more accurate recommendations."
              },
              {
                question: "Do you provide ongoing support after implementation?",
                answer: "Yes, we provide comprehensive post-implementation support including training, maintenance, optimization, and technical support to ensure your AI systems operate smoothly."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely. We specialize in integrating AI solutions with existing business systems. We'll assess your current infrastructure and design solutions that work seamlessly with your setup."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 