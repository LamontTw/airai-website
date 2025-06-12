'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  PaperAirplaneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ContactPageClient() {
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

  const consultationTypes = [
    'ソフトウェア外注評価',
    'AIエージェント実装計画',
    'インテリジェントカスタマーサービス構築',
    'RPAプロセス自動化',
    'データ分析ダッシュボード',
    'その他AI応用相談'
  ];

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
      const templateParams = {
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
        current_date: new Date().toLocaleString('ja-JP', {
          year: 'numeric',
          month: '2-digit', 
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      console.log('フォーム送信データ:', templateParams);
      
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
        templateParams, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setIsSubmitted(true);
      
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
      console.error('送信失敗:', error);
      setSubmitError('送信に失敗しました。後でもう一度お試しいただくか、直接お問い合わせください');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: "無料相談",
      description: "AI導入に関する初回相談は無料です",
      action: "相談を申し込む"
    },
    {
      icon: CalendarDaysIcon,
      title: "オンライン会議",
      description: "リモートでの詳細な打ち合わせが可能です",
      action: "会議を予約"
    },
    {
      icon: EnvelopeIcon,
      title: "メール相談",
      description: "詳細な資料やご質問をメールでお送りください",
      action: "メールを送信"
    }
  ];

  const companyInfo = [
    {
      icon: MapPinIcon,
      label: "所在地",
      value: "新北市板橋区倉後街26号",
      link: null
    },
    {
      icon: PhoneIcon,
      label: "電話番号",
      value: "+886 953-202-811",
      link: "tel:+886953202811"
    },
    {
      icon: EnvelopeIcon,
      label: "メールアドレス",
      value: "contact@airai.tw",
      link: "mailto:contact@airai.tw"
    },
    {
      icon: ClockIcon,
      label: "営業時間",
      value: "月曜日 - 金曜日\n9:00 - 18:00 (台湾時間)",
      link: null
    }
  ];

  const faqs = [
    {
      question: "相談は本当に無料ですか？",
      answer: "はい、初回相談は完全に無料です。お客様のニーズを理解し、最適なソリューションをご提案するための時間です。"
    },
    {
      question: "どのような企業が対象ですか？",
      answer: "中小企業から大企業まで、AI導入を検討されているすべての企業が対象です。業界や規模に関係なくサポートいたします。"
    },
    {
      question: "相談後の流れはどうなりますか？",
      answer: "初回相談後、詳細な分析とカスタマイズされた提案書を作成いたします。その後、お客様のご判断で正式なプロジェクトを開始します。"
    },
    {
      question: "リモートでの相談は可能ですか？",
      answer: "はい、オンライン会議システムを使用したリモート相談も承っております。全国どこからでもご相談いただけます。"
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              AI導入に関するご相談はお気軽にお問い合わせください。
              専門チームが最適なソリューションをご提案いたします。
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-600 rounded-full p-4">
                <EnvelopeIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              お問い合わせ<span className="gradient-text">方法</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              お客様のご都合に合わせて、様々な方法でご相談いただけます
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 text-center">
                <method.icon className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {method.description}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                お問い合わせフォーム
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircleIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">送信完了</h3>
                    <p className="text-gray-600">
                      お問い合わせありがとうございます。24時間以内にご返信いたします。
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          お名前 *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="山田太郎"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          会社名
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="株式会社サンプル"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          メールアドレス *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="example@company.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          電話番号
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="03-1234-5678"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
                        相談内容 *
                      </label>
                      <select
                        id="consultationType"
                        name="consultationType"
                        required
                        value={formData.consultationType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">相談内容を選択してください</option>
                        {consultationTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          予算範囲
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">予算を選択してください</option>
                          <option value="100万円未満">100万円未満</option>
                          <option value="100-300万円">100-300万円</option>
                          <option value="300-500万円">300-500万円</option>
                          <option value="500-1000万円">500-1000万円</option>
                          <option value="1000万円以上">1000万円以上</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                          希望開始時期
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">時期を選択してください</option>
                          <option value="すぐに">すぐに</option>
                          <option value="1ヶ月以内">1ヶ月以内</option>
                          <option value="3ヶ月以内">3ヶ月以内</option>
                          <option value="6ヶ月以内">6ヶ月以内</option>
                          <option value="未定">未定</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        詳細・ご質問 *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="プロジェクトの詳細、現在の課題、期待する効果などをお聞かせください..."
                      />
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-600">{submitError}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          送信中...
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                          お問い合わせを送信
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Company Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                会社情報
              </h2>
              <div className="space-y-6">
                {companyInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="flex items-start">
                      <info.icon className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {info.label}
                        </h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">アクセス</h3>
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">地図（実装予定）</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  台北101から徒歩5分、信義区の中心部に位置しています。
                  MRT台北101/世貿駅から徒歩3分です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              よくある<span className="gradient-text">質問</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              お問い合わせ前によくある質問をご確認ください
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-max">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              今すぐAI導入の第一歩を踏み出しませんか？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              無料相談で、お客様のビジネスに最適なAIソリューションをご提案します。
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@airai.tw"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                今すぐメールで相談
              </a>
              <a
                href="tel:+886-2-1234-5678"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                電話で相談
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
} 