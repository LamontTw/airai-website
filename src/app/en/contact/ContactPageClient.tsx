'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { OrganizationSchema } from '@/components/seo/StructuredData';
import { type EmailTemplateParams } from '@/lib/emailjs-config';
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
    title: 'Company Address',
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

export default function ContactPageClient() {
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
      // Prepare data for sending
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

      // Log to console for now, enable EmailJS after configuration
      console.log('Form submission data:', templateParams);
      
      // Send email via EmailJS
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
              Ready to start your AI transformation journey? Our expert team is here to provide you with free consultation services
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Multiple Contact Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient contact method for you. We promise to respond quickly to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.title === 'Email' ? (
                  <div className="mb-1">
                    <p className="text-blue-600 font-medium select-text cursor-text">
                      {info.content}
                    </p>
                    <a 
                      href={info.action}
                      className="inline-block mt-2 text-sm text-blue-500 hover:text-blue-700 underline"
                    >
                      Click to send email
                    </a>
                  </div>
                ) : (
                  <a 
                    href={info.action}
                    className="text-blue-600 font-medium mb-1 block hover:text-blue-700 transition-colors duration-200"
                  >
                    {info.content}
                  </a>
                )}
                <p className="text-gray-500 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Free AI Implementation Consultation</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Thank you for your consultation!
                  </h4>
                  <p className="text-gray-600">
                    We have received your request and will contact you within 24 hours
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Consultation Type *
                    </label>
                    <select
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select consultation type</option>
                      {consultationTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $30K USD">Under $30K USD</option>
                        <option value="$30K-$90K USD">$30K-$90K USD</option>
                        <option value="$90K-$150K USD">$90K-$150K USD</option>
                        <option value="$150K-$300K USD">$150K-$300K USD</option>
                        <option value="Above $300K USD">Above $300K USD</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select expected timeline</option>
                        <option value="Start immediately">Start immediately</option>
                        <option value="Within 1 month">Within 1 month</option>
                        <option value="Within 3 months">Within 3 months</option>
                        <option value="Within 6 months">Within 6 months</option>
                        <option value="Not yet determined">Not yet determined</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detailed Requirements *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Please describe your requirements, current system status, problems you hope to solve, etc..."
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      ❌ {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Consultation Request
                        <PaperAirplaneIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose Us?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    Free needs assessment and feasibility analysis
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    One-on-one consultation with professional team
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    Custom AI solution design
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    Complete training and ongoing technical support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    Transparent project process management
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
                <h4 className="text-xl font-semibold mb-4">
                  Service Hours
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 mr-3" />
                    <span>Mon-Fri 09:00-18:00</span>
                  </div>
                  <div className="flex items-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 mr-3" />
                    <span>LINE Official Account 24/7 message reception</span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-5 h-5 mr-3" />
                    <span>Email reply within 24 hours</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">
                  🎉 Limited Time Offer
                </h4>
                <p className="text-yellow-700 text-sm">
                  Consultation clients this month receive a free &quot;AI Implementation Feasibility Assessment Report&quot; 
                  valued at $15,000 USD, limited to the first 20 clients!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 