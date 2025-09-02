'use client';

import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  DocumentTextIcon,
  UserGroupIcon,
  LockClosedIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  ServerIcon,
  KeyIcon,
  CloudArrowUpIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ShieldCheckIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Privacy & Data Protection Policy
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Enterprise-grade data protection commitment designed for business clients, ensuring the highest level of security for your business data and AI project information
            </p>
            
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>Last Updated: January 2025</span>
              </div>
              <div className="flex items-center">
                <DocumentTextIcon className="w-4 h-4 mr-1" />
                <span>Version: 2.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              {/* Service Commitment */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 text-blue-600 mr-3" />
                  Service Scope & Confidentiality Commitment
                </h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    AIRAI Technology specializes in providing AI automation solutions for SMEs.
                    We understand the importance of business data and commit to protecting client project data, 
                    trade secrets, and intellectual property with the highest standards.
                  </p>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Core Principles</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Data minimization</li>
                        <li>• Project data isolation</li>
                        <li>• Strict access control</li>
                        <li>• Transparent processing</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Our Commitments</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Follow Taiwan data protection laws</li>
                        <li>• Sign NDA agreements</li>
                        <li>• Regular internal security reviews</li>
                        <li>• Continuous security improvements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Business Data Collection */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-green-600 mr-3" />
                  Business Data Collection & Classification
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Business Collaboration Data</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-green-800 mb-2">Company Information</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Company name & registration</li>
                          <li>• Contact person details</li>
                          <li>• Industry category</li>
                          <li>• Company size</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-green-800 mb-2">Project Requirements</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Business process description</li>
                          <li>• System architecture info</li>
                          <li>• Technical specifications</li>
                          <li>• Expected goals & KPIs</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-green-800 mb-2">Project Execution Data</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• API keys & credentials</li>
                          <li>• Test datasets</li>
                          <li>• System logs</li>
                          <li>• Performance metrics</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-4">Data Classification Management</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <KeyIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-red-800">Confidential</h4>
                        <p className="text-sm text-gray-600">Trade secrets, source code, API keys</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <ShieldCheckIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-yellow-800">Internal</h4>
                        <p className="text-sm text-gray-600">Project docs, test data, meeting notes</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <DocumentTextIcon className="w-6 h-6" />
                        </div>
                        <h4 className="font-medium text-green-800">Public</h4>
                        <p className="text-sm text-gray-600">Company info, product specs, marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* AI Data Processing */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CpuChipIcon className="w-6 h-6 text-purple-600 mr-3" />
                  AI Project Data Processing Principles
                </h2>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-4">Data Processing Commitment</h3>
                    <div className="bg-white p-4 rounded-lg border border-purple-200">
                      <p className="text-purple-800 mb-3">
                        <strong>Important Notice:</strong> Client project data will NEVER be used to train general AI models or for cross-project purposes
                      </p>
                      <ul className="text-purple-700 space-y-2 text-sm">
                        <li>✓ Complete project data isolation in independent environments</li>
                        <li>✓ Client data used exclusively for specific project objectives</li>
                        <li>✓ Data deleted or returned according to contract terms after project completion</li>
                        <li>✓ Client data never used to improve our general services</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">AI Model Processing</h3>
                      <ul className="text-purple-700 space-y-2">
                        <li>• <strong>Fine-tuning:</strong> Uses only authorized client data</li>
                        <li>• <strong>Vector databases:</strong> Project-specific deployment</li>
                        <li>• <strong>Prompt engineering:</strong> No other client information</li>
                        <li>• <strong>Test data:</strong> De-identified processing</li>
                        <li>• <strong>Model outputs:</strong> Client exclusive ownership</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-900 mb-4">Usage Restrictions</h3>
                      <ul className="text-purple-700 space-y-2">
                        <li>• <strong>Purpose:</strong> Limited to contracted project scope</li>
                        <li>• <strong>Time:</strong> Used within project period only</li>
                        <li>• <strong>Personnel:</strong> Authorized team members only</li>
                        <li>• <strong>Location:</strong> Data stays within agreed regions</li>
                        <li>• <strong>Sharing:</strong> No third-party sharing without consent</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Third-party Services */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CloudArrowUpIcon className="w-6 h-6 text-orange-600 mr-3" />
                  Third-party Services & API Usage
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-orange-900 mb-4">AI Service Providers</h3>
                    <p className="text-orange-800 mb-4">
                      We use industry-leading AI services with Data Processing Agreements (DPA) for all third-party services
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-orange-800 mb-2">Primary AI Services</h4>
                        <ul className="text-orange-700 text-sm space-y-2">
                          <li>
                            <strong>OpenAI API</strong>
                            <p className="text-xs text-gray-600">• Enterprise agreement, data not used for training</p>
                          </li>
                          <li>
                            <strong>Claude (Anthropic)</strong>
                            <p className="text-xs text-gray-600">• Privacy-first design, no data retention</p>
                          </li>
                          <li>
                            <strong>Azure AI Services</strong>
                            <p className="text-xs text-gray-600">• Enterprise compliance, regional data centers</p>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-orange-800 mb-2">Infrastructure Services</h4>
                        <ul className="text-orange-700 text-sm space-y-2">
                          <li>
                            <strong>Google Cloud Platform</strong>
                            <p className="text-xs text-gray-600">• Regional data centers, ISO certified</p>
                          </li>
                          <li>
                            <strong>AWS</strong>
                            <p className="text-xs text-gray-600">• Enterprise-grade security, compliance certified</p>
                          </li>
                          <li>
                            <strong>Vercel/Netlify</strong>
                            <p className="text-xs text-gray-600">• Frontend hosting, global CDN</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-yellow-800 text-sm">
                        <strong>Important:</strong> All third-party service usage will be disclosed to clients in advance with explicit consent.
                        Clients may request specific service providers or private deployment solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Security Measures */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-600 mr-3" />
                  Enterprise-grade Security Measures
                </h2>
                
                <div className="space-y-6">
                  {/* Technical Security */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Technical Protection Measures</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
                          <LockClosedIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-blue-800 mb-2">Data Encryption</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• AES-256 encryption at rest</li>
                          <li>• TLS 1.3 in transit</li>
                          <li>• End-to-end encryption</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
                          <ServerIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-blue-800 mb-2">Infrastructure</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Firewall & DDoS protection</li>
                          <li>• Containerized isolation</li>
                          <li>• Automated backup & DR</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-3">
                          <KeyIcon className="w-5 h-5" />
                        </div>
                        <h4 className="font-medium text-blue-800 mb-2">Access Control</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Multi-factor authentication</li>
                          <li>• Role-based access control</li>
                          <li>• API key management</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Management Security */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Administrative Protection Measures</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">Personnel Management</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• All staff sign NDAs</li>
                          <li>• Regular security training</li>
                          <li>• Principle of least privilege</li>
                          <li>• Background checks</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">Audit & Monitoring</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 24/7 system monitoring</li>
                          <li>• Access logging</li>
                          <li>• Regular security audits</li>
                          <li>• Anomaly detection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Data Retention and Deletion */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ClockIcon className="w-6 h-6 text-indigo-600 mr-3" />
                  Data Retention & Deletion Policy
                </h2>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-indigo-900 mb-4">Data Lifecycle Management</h3>
                    <div className="bg-white p-4 rounded-lg border border-indigo-200">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">Project Execution Period</h4>
                            <p className="text-gray-600 text-sm">Data encrypted and stored in project-specific environment with regular backups</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">30 Days Post-Project</h4>
                            <p className="text-gray-600 text-sm">Data export service provided, ensuring client receives all deliverables</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">Retention Period Expiry</h4>
                            <p className="text-gray-600 text-sm">Unless otherwise agreed, project data automatically deleted after 6 months</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">4</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">Complete Deletion</h4>
                            <p className="text-gray-600 text-sm">Secure deletion methods ensuring data is unrecoverable</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-indigo-800 mb-2">Retention Exceptions</h4>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• Legal retention requirements</li>
                        <li>• Litigation hold needs</li>
                        <li>• Client-requested extensions</li>
                        <li>• Service maintenance needs</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-indigo-800 mb-2">Client Rights</h4>
                      <ul className="text-indigo-700 text-sm space-y-1">
                        <li>• Request data copy anytime</li>
                        <li>• Request early deletion</li>
                        <li>• Deletion confirmation certificate</li>
                        <li>• Data portability rights</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Client Rights */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserGroupIcon className="w-6 h-6 text-green-600 mr-3" />
                  Client Rights & Guarantees
                </h2>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Your Data Control Rights</h3>
                    <p className="text-green-800 mb-4">
                      As our enterprise client, you have complete control and ownership of project data
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-3">Data Access Rights</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• Real-time project data viewing</li>
                        <li>• Download complete data copies</li>
                        <li>• Access processing records</li>
                        <li>• View usage reports</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-3">Data Control Rights</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• Correct inaccurate data</li>
                        <li>• Restrict processing scope</li>
                        <li>• Request processing cessation</li>
                        <li>• Revoke usage authorization</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-semibold text-green-800 mb-3">Transparency Guarantees</h4>
                      <ul className="text-green-700 text-sm space-y-2">
                        <li>• Understand data processing methods</li>
                        <li>• Request security explanations</li>
                        <li>• Obtain processing records</li>
                        <li>• Specify data storage locations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
                    <h4 className="font-medium text-blue-800 mb-2">Intellectual Property Declaration</h4>
                    <p className="text-blue-700 text-sm">
                      All data provided by clients and models/results generated belong entirely to the client.
                      We claim no ownership rights and will assist clients in protecting their intellectual property.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Incident Response */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ExclamationTriangleIcon className="w-6 h-6 text-red-600 mr-3" />
                  Security Incident Response Mechanism
                </h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-4">Incident Notification Process</h3>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">0-2 hrs</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">Internal assessment and initial containment</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">2-24 hrs</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">Notify affected clients with preliminary report</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">24-72 hrs</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">Complete investigation report and remediation measures</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 text-red-600 font-semibold">7 days</div>
                          <div className="flex-1 ml-4">
                            <p className="text-gray-700">Improvement measures and prevention plan</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-red-800 mb-2">Client Protection Measures</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Immediate affected service suspension</li>
                        <li>• Alternative solution provision</li>
                        <li>• Damage assessment assistance</li>
                        <li>• Active remediation efforts</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                      <h4 className="font-medium text-red-800 mb-2">Emergency Contact</h4>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• 24/7 emergency hotline</li>
                        <li>• Dedicated incident manager</li>
                        <li>• Real-time status updates</li>
                        <li>• Legal support assistance</li>
                      </ul>
                    </div>
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