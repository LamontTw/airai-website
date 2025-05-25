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
    title: '電話諮詢',
    content: '+886 953-202-811',
    description: '週一至週五 09:00-18:00',
    action: 'tel:+886953202811'
  },
  {
    icon: EnvelopeIcon,
    title: '電子郵件',
    content: 'contact@airai.tw',
    description: '24小時內回覆',
    action: 'mailto:contact@airai.tw'
  },
  {
    icon: MapPinIcon,
    title: '公司地址',
    content: '新北市板橋區倉後街26號',
    description: '智流科技',
    action: 'https://maps.google.com'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'LINE 官方帳號',
    content: '@365cpgih',
    description: '即時線上諮詢',
    action: 'https://line.me/R/ti/p/@365cpgih'
  }
];

const consultationTypes = [
  '程式外包需求評估',
  'AI Agent 導入規劃',
  '智能客服系統建置',
  'RPA 流程自動化',
  '數據分析儀表板',
  '其他AI應用諮詢'
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
      // 準備發送的數據
      const templateParams: EmailTemplateParams = {
        from_name: formData.name,
        from_company: formData.company,
        from_email: formData.email,
        from_phone: formData.phone,
        consultation_type: formData.consultationType,
        budget_range: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: formData.email,
        current_date: new Date().toLocaleString('zh-TW', {
          year: 'numeric',
          month: '2-digit', 
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // 暫時先記錄到 console，等 EmailJS 設定完成後再啟用
      console.log('表單提交資料:', templateParams);
      
      // TODO: 等 EmailJS 設定完成後啟用以下代碼
      // await emailjs.send(
      //   EMAILJS_CONFIG.SERVICE_ID, 
      //   EMAILJS_CONFIG.TEMPLATE_ID, 
      //   templateParams, 
      //   EMAILJS_CONFIG.PUBLIC_KEY
      // );
      
      setIsSubmitted(true);
      
      // 5秒後重置狀態
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
      console.error('發送失敗:', error);
      setSubmitError('發送失敗，請稍後再試或直接聯絡我們');
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
              聯絡 <span className="gradient-text">智流科技</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              準備開始您的AI轉型之旅？我們的專家團隊隨時為您提供免費諮詢服務
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">多元聯絡方式</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              選擇最適合您的聯絡方式，我們承諾快速回應您的需求
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
                {info.title === '電子郵件' ? (
                  <div className="mb-1">
                    <p className="text-blue-600 font-medium select-text cursor-text">
                      {info.content}
                    </p>
                    <a 
                      href={info.action}
                      className="inline-block mt-2 text-sm text-blue-500 hover:text-blue-700 underline"
                    >
                      點擊發送郵件
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">免費AI導入諮詢</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    感謝您的諮詢！
                  </h4>
                  <p className="text-gray-600">
                    我們已收到您的需求，將在24小時內與您聯繫
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="請輸入您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        公司名稱 *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="請輸入公司名稱"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        電子郵件 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="請輸入電子郵件"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        聯絡電話
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                        placeholder="請輸入聯絡電話"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      諮詢類型 *
                    </label>
                    <select
                      name="consultationType"
                      value={formData.consultationType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">請選擇諮詢類型</option>
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
                        預算範圍
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">請選擇預算範圍</option>
                        <option value="10萬以下">10萬以下</option>
                        <option value="10-30萬">10-30萬</option>
                        <option value="30-50萬">30-50萬</option>
                        <option value="50-100萬">50-100萬</option>
                        <option value="100萬以上">100萬以上</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        預計時程
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">請選擇預計時程</option>
                        <option value="立即開始">立即開始</option>
                        <option value="1個月內">1個月內</option>
                        <option value="3個月內">3個月內</option>
                        <option value="6個月內">6個月內</option>
                        <option value="尚未確定">尚未確定</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      詳細需求說明 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="請詳細說明您的需求、現有系統狀況、期望改善的問題等..."
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
                        發送中...
                      </>
                    ) : (
                      <>
                        提交諮詢需求
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
                  為什麼選擇我們？
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    免費需求評估與可行性分析
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    專業團隊一對一諮詢服務
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    客製化AI解決方案設計
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    完整培訓與持續技術支援
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    透明化的專案流程管理
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
                <h4 className="text-xl font-semibold mb-4">
                  服務時間
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 mr-3" />
                    <span>週一至週五 09:00-18:00</span>
                  </div>
                  <div className="flex items-center">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 mr-3" />
                    <span>LINE官方帳號 24小時接收訊息</span>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-5 h-5 mr-3" />
                    <span>Email 24小時內回覆</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">
                  🎉 限時優惠
                </h4>
                <p className="text-yellow-700 text-sm">
                  本月諮詢客戶可免費獲得「AI導入可行性評估報告」，
                  價值NT$50,000，僅限前20名！
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