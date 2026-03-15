'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  ClockIcon,
  TagIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  CogIcon,
  ArrowRightIcon,
  SparklesIcon,
  EyeIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

export default function HowToSetupAiChatbotArticle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeSection, setActiveSection] = useState('why-ai-cs');

  const tableOfContents = [
    { id: 'why-ai-cs', title: '為什麼你需要 AI 客服', icon: LightBulbIcon },
    { id: 'how-it-works', title: 'AI 客服的運作原理', icon: CpuChipIcon },
    { id: 'choose-tool', title: '選擇工具的 5 個重點', icon: CheckCircleIcon },
    { id: 'setup-tutorial', title: '用 Airi 5 分鐘設定', icon: CogIcon },
    { id: 'optimization', title: '上線後怎麼優化', icon: SparklesIcon },
    { id: 'faq', title: '常見問題', icon: QuestionMarkCircleIcon },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-teal-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                中小企業 AI 客服完整教學：從零開始到上線
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              不懂技術也能搞定，手把手帶你設定 AI 客服
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：15 分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>AI客服・教學・LINE・Airi・中小企業</span>
              </div>
              <div className="flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                <span>2026-03-15</span>
              </div>
            </div>

            {/* TL;DR - GEO */}
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-left">
              <p className="sr-only">摘要 TL;DR</p>
              <p className="text-sm text-teal-800 leading-relaxed">
                這篇教學帶你從零開始設定 AI 客服。不需要技術背景，用 Airi 只要 5 分鐘就能讓你的 LINE
                官方帳號擁有 AI 自動回覆。本文涵蓋原理、選工具的重點、實戰步驟、以及上線後的優化技巧。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">文章目錄</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(item.id);
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${activeSection === item.id
                          ? 'bg-teal-100 text-teal-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                    >
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-3">
              {/* Internal link to pillar page */}
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-8 rounded-r-lg">
                <p className="text-teal-800 mb-2">想了解完整的 AI 導入流程嗎？</p>
                <a
                  href="/resources/ai-introduction-guide"
                  className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-800"
                >
                  &rarr; 閱讀《AI導入完整指南》
                </a>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Section 1: 為什麼你需要 AI 客服 */}
                <section id="why-ai-cs" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <LightBulbIcon className="w-8 h-8 text-yellow-600 mr-3" />
                      為什麼你需要 AI 客服？
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        你有沒有這種經驗？白天忙著跑業務、盯進度，晚上回到家打開手機，LINE 官方帳號裡堆了
                        二三十則客戶訊息沒回。有些是問營業時間，有些是問價格，有些是問退換貨 ——
                        其實都是重複的問題，但你還是得一則一則回。
                      </p>

                      <p>
                        更慘的是，有些客戶等太久直接跑了。你不是不想回，是真的忙不過來。
                      </p>

                      <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-red-900 mb-4">老闆身兼客服的三大痛點</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <ExclamationTriangleIcon className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-red-800">白天忙業務，晚上回訊息</h4>
                              <p className="text-red-700 text-sm">你的時間應該花在更重要的事情上，而不是一直回「我們營業到幾點」</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <ExclamationTriangleIcon className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-red-800">請客服人員成本不低</h4>
                              <p className="text-red-700 text-sm">一個客服人員每月 3-4 萬，加上勞健保、管理成本，中小企業不一定扛得住</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <ExclamationTriangleIcon className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-red-800">客戶等不到回覆就跑了</h4>
                              <p className="text-red-700 text-sm">研究顯示，超過 5 分鐘沒回覆，客戶轉向競爭對手的機率增加 80%</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">AI 客服幫你搞定這些事</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-green-700 text-sm">
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>24 小時不休息：</strong>凌晨 3 點客戶問問題，AI 也秒回</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>不會鬧情緒：</strong>不管客戶問幾次一樣的問題，AI 都耐心回答</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-green-700 text-sm">
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>成本超低：</strong>每月不到一千塊，比請工讀生還便宜</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>同時接待多人：</strong>100 個人同時問，AI 全部秒回</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p>
                        簡單說，AI 幫你接客服，你去忙更重要的事。這就是 AI 客服最大的價值。
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Section 2: AI 客服的運作原理（白話版） */}
                <section id="how-it-works" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CpuChipIcon className="w-8 h-8 text-purple-600 mr-3" />
                      AI 客服的運作原理（白話版）
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        你可能聽過 ChatGPT，也可能用過。但你有沒有想過：「如果 ChatGPT 讀過我所有的產品資料，
                        然後幫我回答客戶問題，那不就是 AI 客服了嗎？」
                      </p>

                      <p>
                        沒錯，概念就是這麼簡單。技術上叫做 <strong>RAG（檢索增強生成）</strong>，
                        但你不需要記這個名詞。白話來說就是：
                      </p>

                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">AI 客服怎麼運作的？</h3>

                        <div className="space-y-4">
                          <div className="flex items-start p-4 bg-white rounded-lg border border-purple-200">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              1
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-800 mb-1">你上傳資料</h4>
                              <p className="text-purple-700 text-sm">
                                把你的常見問題、產品資訊、退換貨政策、營業時間等資料丟給 AI。
                                就像新人報到第一天，你給他一本員工手冊一樣。
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 bg-white rounded-lg border border-purple-200">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              2
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-800 mb-1">AI 讀過、記住</h4>
                              <p className="text-purple-700 text-sm">
                                AI 會把你的資料全部讀過一遍，建立索引。之後客戶問任何問題，
                                AI 都會先去翻你的資料找答案。
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 bg-white rounded-lg border border-purple-200">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              3
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-800 mb-1">客戶問，AI 答</h4>
                              <p className="text-purple-700 text-sm">
                                客戶在 LINE 上問「你們週六有開嗎？」，AI 翻到營業時間那頁，
                                用自然的語氣回：「有的，我們週六營業 10:00-18:00 喔！」
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-cyan-900 mb-4">跟 ChatGPT 有什麼不一樣？</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-800 mb-3">ChatGPT</h4>
                            <ul className="text-gray-600 text-sm space-y-2">
                              <li className="flex items-start">
                                <span className="mr-2">&#8226;</span>
                                <span>通用型 AI，什麼都會一點</span>
                              </li>
                              <li className="flex items-start">
                                <span className="mr-2">&#8226;</span>
                                <span>不知道你的產品、價格、政策</span>
                              </li>
                              <li className="flex items-start">
                                <span className="mr-2">&#8226;</span>
                                <span>可能會「掰」出不存在的答案</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-teal-200">
                            <h4 className="font-semibold text-teal-800 mb-3">AI 客服（例如 Airi）</h4>
                            <ul className="text-teal-700 text-sm space-y-2">
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>專門讀你的資料，只回答你的東西</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>回答有依據，不會亂掰</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>找不到答案就說「我幫你轉真人」</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
                        <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                          <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                          不怕 AI 亂回答
                        </h4>
                        <p className="text-yellow-800 text-sm">
                          好的 AI 客服有「安全機制」：當 AI 在你的資料裡找不到答案時，
                          不會硬掰，而是直接說「這個問題我幫你轉給專人處理」。
                          你可以完全掌控 AI 會回答什麼、不會回答什麼。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 3: 選擇 AI 客服工具的 5 個重點 */}
                <section id="choose-tool" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircleIcon className="w-8 h-8 text-teal-600 mr-3" />
                      選擇 AI 客服工具的 5 個重點
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        市面上 AI 客服工具越來越多，怎麼挑？以下 5 個重點幫你快速篩選：
                      </p>

                      <div className="space-y-4">
                        <div className="bg-white border border-teal-200 rounded-xl p-6 shadow-sm">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              1
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">是否支援 LINE？</h3>
                              <p className="text-gray-600 text-sm">
                                台灣超過 2,100 萬人用 LINE，你的客戶八成也是。如果工具不支援 LINE，
                                在台灣基本上沒什麼用。這是第一個也是最重要的條件。
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-teal-200 rounded-xl p-6 shadow-sm">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              2
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">設定難度：你自己能搞定嗎？</h3>
                              <p className="text-gray-600 text-sm">
                                有些工具需要寫程式、串 API，中小企業老闆根本不可能自己來。
                                選一個不需要技術背景、介面直覺的工具，才是正確的選擇。
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-teal-200 rounded-xl p-6 shadow-sm">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              3
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">知識庫更新方不方便？</h3>
                              <p className="text-gray-600 text-sm">
                                你的產品會換季、價格會調整、政策會更新。如果每次改資料都要找工程師，
                                那太麻煩了。好的工具讓你自己上去改，像改 Word 文件一樣簡單。
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-teal-200 rounded-xl p-6 shadow-sm">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              4
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">有沒有轉接真人的機制？</h3>
                              <p className="text-gray-600 text-sm">
                                AI 不可能回答所有問題。客訴、退款、特殊狀況還是需要真人處理。
                                好的工具會在 AI 搞不定的時候，自動通知你來接手。
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-teal-200 rounded-xl p-6 shadow-sm">
                          <div className="flex items-start">
                            <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              5
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-2">費用透不透明？</h3>
                              <p className="text-gray-600 text-sm">
                                有些工具表面便宜，但用量一多費用暴增。選擇費用結構清楚、有免費試用的工具，
                                先試了再決定。不要簽長約，不要被綁住。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-teal-50 border-l-4 border-teal-400 p-4 my-6 rounded-r-lg">
                        <p className="text-teal-800 text-sm">
                          <strong>以 Airi 為例：</strong>支援 LINE 串接、5 分鐘設定不用寫程式、知識庫自己就能改、AI 搞不定會自動通知你、免費試用沒有隱藏費用。下一段會手把手帶你實際設定。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 4: 實戰教學：用 Airi 5 分鐘設定 AI 客服 */}
                <section id="setup-tutorial" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CogIcon className="w-8 h-8 text-teal-600 mr-3" />
                      實戰教學：用 Airi 5 分鐘設定 AI 客服
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        講了這麼多原理，來實際動手吧。以下用 Airi 示範，5 個步驟搞定。
                      </p>

                      <div className="space-y-4">
                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                          <div className="flex items-start">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                              1
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-teal-900 mb-2">註冊帳號</h3>
                              <p className="text-teal-700 text-sm mb-2">
                                到 Airi 官網註冊，填個 Email 就好。免費的，不需要信用卡，沒有什麼試用期到期自動扣款的陷阱。
                              </p>
                              <div className="bg-teal-100 rounded-lg p-3 text-xs text-teal-800">
                                預估時間：1 分鐘
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                          <div className="flex items-start">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                              2
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-teal-900 mb-2">上傳你的 FAQ / 產品資料</h3>
                              <p className="text-teal-700 text-sm mb-2">
                                把你平常最常被客戶問的問題整理一下，丟到 Airi 的知識庫。
                                格式不拘，Word、PDF、甚至直接打字都行。AI 會自己讀懂。
                              </p>
                              <div className="bg-teal-100 rounded-lg p-3 text-xs text-teal-800">
                                預估時間：2 分鐘（如果你已經有 FAQ 整理好的話）
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                          <div className="flex items-start">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                              3
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-teal-900 mb-2">串接 LINE Official Account</h3>
                              <p className="text-teal-700 text-sm mb-2">
                                在 Airi 後台找到 LINE 串接的設定頁面，照著畫面指示把你的
                                LINE Official Account 資訊填進去。不需要寫程式，複製貼上就好。
                              </p>
                              <div className="bg-teal-100 rounded-lg p-3 text-xs text-teal-800">
                                預估時間：1 分鐘
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                          <div className="flex items-start">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                              4
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-teal-900 mb-2">測試對話效果</h3>
                              <p className="text-teal-700 text-sm mb-2">
                                用你自己的 LINE 帳號傳訊息給官方帳號，測試 AI 回答的品質。
                                試著問一些你的客戶常問的問題，看看 AI 回答得好不好。
                                不滿意的話，回去調整知識庫內容就好。
                              </p>
                              <div className="bg-teal-100 rounded-lg p-3 text-xs text-teal-800">
                                預估時間：隨時測試，建議花 5-10 分鐘多測幾個問題
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                          <div className="flex items-start">
                            <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">
                              5
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-teal-900 mb-2">正式上線</h3>
                              <p className="text-teal-700 text-sm mb-2">
                                測試沒問題之後，打開正式模式就完成了。從今天開始，你的客戶在 LINE 上問問題，
                                AI 會自動回覆。你只需要處理 AI 搞不定的特殊狀況就好。
                              </p>
                              <div className="bg-teal-100 rounded-lg p-3 text-xs text-teal-800">
                                預估時間：1 分鐘
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Airi CTA Box */}
                      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-8 my-8">
                        <div className="text-center">
                          <h3 className="text-2xl font-bold mb-3">5 分鐘就搞定，現在就試試看</h3>
                          <p className="text-teal-100 mb-6 max-w-xl mx-auto">
                            Airi 免費試用中，不需要信用卡，不需要技術背景。
                            你只要有 LINE 官方帳號，就能開始用 AI 幫你接客服。
                          </p>
                          <a
                            href="https://airi.airai.tw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors duration-200"
                          >
                            免費試用 Airi
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 5: 上線後怎麼優化 */}
                <section id="optimization" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <SparklesIcon className="w-8 h-8 text-amber-600 mr-3" />
                      上線後怎麼優化
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        AI 客服上線不是結束，而是開始。就像你剛請一個新人，前幾個月需要帶一下，
                        AI 也一樣。以下 4 件事讓你的 AI 客服越來越厲害：
                      </p>

                      <div className="space-y-4">
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                            看對話紀錄，找出 AI 回不好的問題
                          </h3>
                          <p className="text-amber-700 text-sm">
                            Airi 後台可以看到所有的對話紀錄。花個 10 分鐘翻一下，找出 AI 回答不夠好的地方。
                            通常是因為你的知識庫裡沒有相關資料，補上去就好了。
                          </p>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                            補充知識庫內容
                          </h3>
                          <p className="text-amber-700 text-sm">
                            每次有客戶問了 AI 答不出來的問題，就把答案加進知識庫。
                            這樣下次有人問同樣的事，AI 就會了。一個月下來，AI 的回答能力會明顯進步。
                          </p>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                            設定常見問題的標準答案
                          </h3>
                          <p className="text-amber-700 text-sm">
                            有些問題你希望 AI 用特定的方式回答，例如促銷活動的話術、退貨政策的標準說法。
                            在知識庫裡把這些寫清楚，AI 就會照著你的意思回。
                          </p>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                            定期檢查客戶滿意度
                          </h3>
                          <p className="text-amber-700 text-sm">
                            可以在 AI 對話結束後加一個簡單的評分（例如「這次回答有幫助嗎？」），
                            追蹤客戶滿意度的變化。如果滿意度下降，就知道該調整了。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 6: 常見問題 */}
                <section id="faq" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <QuestionMarkCircleIcon className="w-8 h-8 text-sky-600 mr-3" />
                      常見問題
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：AI 客服會不會取代我的客服人員？</h3>
                          <p className="text-gray-600">
                            不會。AI 客服的定位是幫你分擔重複的問題，像是營業時間、價格查詢、退貨流程這些。
                            真正需要判斷力和同理心的問題，還是得靠真人。把 AI 當成你的助手，不是替代品。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：設定很難嗎？需要懂技術嗎？</h3>
                          <p className="text-gray-600">
                            用 Airi 的話，5 分鐘就能搞定，完全不需要寫程式。
                            如果你會用 LINE 傳訊息，你就會用 Airi 設定 AI 客服。就是這麼簡單。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：客戶會不會覺得在跟機器人講話？</h3>
                          <p className="text-gray-600">
                            現在的 AI 回答非常自然，語氣跟真人差不多。根據我們的測試，
                            超過 70% 的客戶在對話結束後不知道自己是在跟 AI 講話。
                            而且你可以自訂 AI 的語氣，讓它用你品牌的口吻來回答。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：客人會不會發現是在跟 AI 聊天？</h3>
                          <p className="text-gray-600">
                            Airi 的回覆風格可以自訂，語氣調整成你品牌的口吻，大部分客人分不出來。
                            但如果客人直接問「你是 AI 嗎？」，Airi 會誠實說明。誠實比假裝更重要，也更能建立信任。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：費用大概多少？</h3>
                          <p className="text-gray-600">
                            Airi 現在免費試用中，定價方案請參考官網。
                            跟請一個客服人員每月 3-4 萬比起來，AI 客服的成本低非常多。
                            而且 AI 不用休假、不用加班費、不會離職。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Bottom CTA */}
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">準備好讓 AI 幫你接客服了嗎？</h3>
                    <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                      不用再一則一則回 LINE 訊息了。讓 AI 處理重複問題，你去忙更重要的事。
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href="https://airi.airai.tw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white text-teal-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                      >
                        <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                        免費試用 Airi
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-teal-600 transition-colors duration-200"
                      >
                        預約諮詢
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
