'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { 
  DocumentTextIcon,
  ScaleIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  BriefcaseIcon,
  CreditCardIcon,
  DocumentDuplicateIcon,
  HandRaisedIcon,
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  ExclamationCircleIcon,
  BanknotesIcon,
  ChartBarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ScaleIcon className="w-12 h-12 text-green-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              AI Automation Solutions Professional Service Agreement
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>Last Updated: January 2025</span>
              </div>
              <div className="flex items-center">
                <DocumentTextIcon className="w-4 h-4 mr-1" />
                <span>Version: 3.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* 1. Service Scope and Definition */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BriefcaseIcon className="w-6 h-6 text-green-600 mr-3" />
                  1. Service Scope and Definition
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">1.1 Service Content</h3>
                    <p className="text-gray-700 mb-4">
                      AIRAI Technology Co., Ltd. (hereinafter referred to as &quot;the Company&quot;) provides the following AI automation professional services:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">AI Solution Development</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Custom AI model development and training</li>
                          <li>• Natural Language Processing (NLP) systems</li>
                          <li>• Computer vision solutions</li>
                          <li>• Machine learning algorithm optimization</li>
                          <li>• Deep learning model deployment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">Business Process Automation</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• RPA robotic process automation</li>
                          <li>• Workflow optimization and integration</li>
                          <li>• Data processing automation</li>
                          <li>• Intelligent document processing</li>
                          <li>• API integration and development</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">System Integration Services</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• ERP/CRM system integration</li>
                          <li>• Cloud platform migration</li>
                          <li>• Database integration and optimization</li>
                          <li>• Third-party service integration</li>
                          <li>• Microservice architecture design</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">Consulting and Support</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• AI strategy planning consultation</li>
                          <li>• Technical feasibility assessment</li>
                          <li>• System architecture design</li>
                          <li>• Project management services</li>
                          <li>• Technical training and knowledge transfer</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-amber-900 mb-4">1.2 Service Limitations</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• The Company does not provide any services that violate laws or ethical norms</li>
                      <li>• Hardware procurement not included (unless otherwise agreed)</li>
                      <li>• 24/7 real-time support not provided (unless additional support plan purchased)</li>
                      <li>• Not responsible for third-party software licensing fees</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 2. Project Execution and Delivery */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="w-6 h-6 text-blue-600 mr-3" />
                  2. Project Execution and Delivery
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">2.1 Project Phases</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">Phase 1: Requirements Analysis and Planning</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• Requirements interview and documentation (1-2 weeks)</li>
                          <li>• Technical feasibility assessment</li>
                          <li>• Project plan and quotation</li>
                          <li>• Formal contract signing</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">Phase 2: Design and Development</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• System architecture design</li>
                          <li>• Prototype development and validation</li>
                          <li>• Iterative development (following agile methodology)</li>
                          <li>• Regular progress reports (weekly or bi-weekly)</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">Phase 3: Testing and Optimization</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• Unit testing and integration testing</li>
                          <li>• User Acceptance Testing (UAT)</li>
                          <li>• Performance optimization and tuning</li>
                          <li>• Security testing</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-blue-400 pl-4">
                        <h4 className="font-medium text-blue-800">Phase 4: Deployment and Delivery</h4>
                        <ul className="text-gray-600 text-sm mt-2 space-y-1">
                          <li>• Production environment deployment</li>
                          <li>• Go-live support</li>
                          <li>• Documentation delivery (technical docs, user manuals)</li>
                          <li>• Training sessions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">2.2 Delivery Standards</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• All code must pass code review</li>
                      <li>• Test coverage must reach 80% or above</li>
                      <li>• Complete API documentation provided</li>
                      <li>• Deployment guide and maintenance manual included</li>
                      <li>• Source code hosted on client-specified version control system</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 3. Payment Terms */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCardIcon className="w-6 h-6 text-purple-600 mr-3" />
                  3. Payment Terms
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-4">3.1 Pricing Models</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-purple-800 mb-2">Fixed Price Projects</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Upon signing: 30% deposit</li>
                          <li>• Design completion: 30%</li>
                          <li>• UAT passed: 30%</li>
                          <li>• Project closure: 10% final payment</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-800 mb-2">Time & Materials (T&M)</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Monthly billing, end-of-month settlement</li>
                          <li>• Minimum commitment: 80 hours/month</li>
                          <li>• Overtime requires prior approval</li>
                          <li>• Detailed timesheet reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">3.2 Payment Rules</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Payment within 30 days of invoice</li>
                      <li>• Late payment incurs 1.5% monthly interest</li>
                      <li>• Service may be suspended for payments over 60 days overdue</li>
                      <li>• Only bank transfer or credit card accepted, no checks</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 4. Intellectual Property Rights */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentDuplicateIcon className="w-6 h-6 text-indigo-600 mr-3" />
                  4. Intellectual Property Rights
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-4">4.1 Ownership</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-indigo-800 mb-2">Client Owns</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Custom code developed specifically for client</li>
                          <li>• Project-related documents and reports</li>
                          <li>• Data and content provided by client</li>
                          <li>• Trained AI models (using client data)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-indigo-800 mb-2">Company Retains</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Pre-existing frameworks, tools, and libraries</li>
                          <li>• General algorithms and methodologies</li>
                          <li>• Internal development tools and platforms</li>
                          <li>• Professional knowledge and experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">4.2 Licensing Terms</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Client receives perpetual license for owned content</li>
                      <li>• Company retains right to use general solutions for other projects</li>
                      <li>• Third-party components follow their original licenses</li>
                      <li>• Open source software follows corresponding open source licenses</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 5. Confidentiality */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <LockClosedIcon className="w-6 h-6 text-red-600 mr-3" />
                  5. Confidentiality
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">5.1 Confidentiality Obligations</h3>
                    <p className="text-gray-700 mb-4">
                      Both parties agree to maintain confidentiality of business secrets learned during contract performance:
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• No disclosure of confidential information to third parties</li>
                      <li>• Use only for contract performance purposes</li>
                      <li>• Implement reasonable protective measures</li>
                      <li>• Confidentiality period: 5 years after contract termination</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">5.2 Exceptions</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Information already known to receiving party</li>
                      <li>• Information becoming public through no breach</li>
                      <li>• Information legally obtained from third parties</li>
                      <li>• Information required to be disclosed by law</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 6. Limitation of Liability */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ExclamationCircleIcon className="w-6 h-6 text-amber-600 mr-3" />
                  6. Limitation of Liability and Disclaimer
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-amber-900 mb-4">6.1 Liability Limits</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Total liability shall not exceed the total contract amount</li>
                      <li>• No liability for indirect, special, or consequential damages</li>
                      <li>• No liability for loss of profits or business opportunities</li>
                      <li>• No liability for data loss (client should maintain backups)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">6.2 Force Majeure</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Force majeure events (natural disasters, war, strikes, etc.)</li>
                      <li>• Third-party service interruptions or failures</li>
                      <li>• Client providing incorrect information or requirement changes</li>
                      <li>• Client failure to provide necessary assistance</li>
                      <li>• Cyber attacks or security incidents (despite reasonable protection)</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 7. Warranty and Maintenance */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <WrenchScrewdriverIcon className="w-6 h-6 text-teal-600 mr-3" />
                  7. Warranty and Maintenance
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-teal-900 mb-4">7.1 Warranty Coverage</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-teal-800 mb-2">Free Warranty (30 days)</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Bug fixes</li>
                          <li>• Functions not meeting specifications</li>
                          <li>• System integration issues</li>
                          <li>• Remote technical support</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-teal-800 mb-2">Paid Maintenance Services</h4>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li>• Feature enhancements and optimization</li>
                          <li>• New requirement development</li>
                          <li>• Performance tuning</li>
                          <li>• Regular health check reports</li>
                          <li>• Priority technical support</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">7.2 Service Level Agreement (SLA)</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Priority</th>
                            <th className="text-left py-2">Definition</th>
                            <th className="text-left py-2">Response Time</th>
                            <th className="text-left py-2">Resolution Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 text-red-600 font-medium">Critical</td>
                            <td className="py-2">System completely unusable</td>
                            <td className="py-2">Within 2 hours</td>
                            <td className="py-2">Within 24 hours</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 text-amber-600 font-medium">High</td>
                            <td className="py-2">Major functions affected</td>
                            <td className="py-2">Within 4 hours</td>
                            <td className="py-2">Within 48 hours</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 text-blue-600 font-medium">Medium</td>
                            <td className="py-2">Minor function issues</td>
                            <td className="py-2">Within 8 hours</td>
                            <td className="py-2">5 business days</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-green-600 font-medium">Low</td>
                            <td className="py-2">Suggestions or minor issues</td>
                            <td className="py-2">Within 24 hours</td>
                            <td className="py-2">Next update</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* 8. Contract Termination */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <HandRaisedIcon className="w-6 h-6 text-gray-600 mr-3" />
                  8. Contract Termination
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">8.1 Termination Conditions</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Project completion and acceptance</li>
                      <li>• 30 days written notice by either party</li>
                      <li>• Material breach not remedied within 15 days</li>
                      <li>• Force majeure lasting over 60 days</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">8.2 Post-Termination</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Settlement of completed work fees</li>
                      <li>• Handover of all project data and documents</li>
                      <li>• Deletion of client confidential data</li>
                      <li>• 30-day transition support period</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* 9. Dispute Resolution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ScaleIcon className="w-6 h-6 text-indigo-600 mr-3" />
                  9. Dispute Resolution
                </h2>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <ul className="text-gray-700 space-y-2">
                    <li>• This contract is governed by the laws of the Republic of China (Taiwan)</li>
                    <li>• Disputes shall be resolved through negotiation first</li>
                    <li>• If negotiation fails, submit to Taipei District Court jurisdiction</li>
                    <li>• Or submit to arbitration by the Chinese Arbitration Association</li>
                    <li>• During disputes, other terms remain in effect</li>
                  </ul>
                </div>
              </motion.section>

              {/* 10. General Provisions */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 text-gray-600 mr-3" />
                  10. General Provisions
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">10.1 General Terms</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• These terms constitute the entire agreement</li>
                      <li>• Any modifications require written consent from both parties</li>
                      <li>• Invalid provisions do not affect other terms</li>
                      <li>• Contract rights and obligations may not be assigned to third parties</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">10.2 Data Protection</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Compliance with Personal Data Protection Act</li>
                      <li>• Implementation of appropriate security measures</li>
                      <li>• Data used only for agreed purposes</li>
                      <li>• Cooperation with client compliance requirements</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Contact Information */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BuildingOfficeIcon className="w-6 h-6 text-green-600 mr-3" />
                  Contact Information
                </h2>
                
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">Need to discuss your project requirements?</h3>
                    <p className="text-green-100">
                      Our professional team is ready to provide the most suitable AI automation solutions for you
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <PhoneIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">Business Line</div>
                      <div className="text-green-100 text-sm">+886 953-202-811</div>
                    </div>
                    <div>
                      <EnvelopeIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">Business Email</div>
                      <div className="text-green-100 text-sm">contact@airai.tw</div>
                    </div>
                    <div>
                      <ClockIcon className="w-8 h-8 mx-auto mb-2" />
                      <div className="font-medium">Service Hours</div>
                      <div className="text-green-100 text-sm">Mon-Fri 09:00-18:00</div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-6 pt-6 border-t border-green-500">
                    <p className="text-green-100 text-sm">
                      <strong>Company Name:</strong> AIRAI Technology Co., Ltd.<br />
                      <strong>Registration No.:</strong> 93979905<br />
                      <strong>Address:</strong> No. 26, Canghou Street, Banqiao District, New Taipei City<br />
                      <strong>LINE Official:</strong> @365cpgih
                    </p>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}