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
  DocumentTextIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import AiriLogo from '@/components/ui/AiriLogo';

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
      <section className="pt-32 pb-12 bg-gradient-to-br from-teal-50 via-cyan-50 to-sky-50">
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
              不懂技術也能搞定，手把手帶你用 Airi 在網站上建立 AI 客服
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：12 分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>AI客服・教學・網站Widget・Airi・中小企業</span>
              </div>
              <div className="flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                <span>2026-03-15</span>
              </div>
            </div>

            {/* TL;DR */}
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-left">
              <p className="sr-only">摘要 TL;DR</p>
              <p className="text-sm text-teal-800 leading-relaxed">
                這篇教學帶你從零開始在網站上設定 AI 客服。不需要技術背景，用 Airi 只要 5 分鐘：
                註冊帳號、建立 Chatbot、上傳知識庫文件、測試對話、把嵌入碼貼到網站。
                本文涵蓋原理、選工具重點、實戰步驟、以及上線後的優化技巧。
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
                        你有沒有這種經驗？白天忙著跑業務、盯進度，晚上回到家打開手機，客戶在網站上留了好幾則詢問沒回。有些是問營業時間，有些是問價格，有些是問退換貨 —— 其實都是重複的問題，但你還是得一則一則回。
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
                              <span><strong>24 小時不休息：</strong>凌晨 3 點客戶在你網站上問問題，AI 也秒回</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>不會鬧情緒：</strong>不管客戶問幾次一樣的問題，AI 都耐心回答</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-green-700 text-sm">
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>成本超低：</strong>免費方案每月 100 則訊息，付費最低 NT$490/月</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span><strong>同時接待多人：</strong>100 個人同時問，AI 全部秒回</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p>
                        簡單說，AI 幫你在網站上接客服，你去忙更重要的事。這就是 AI 客服最大的價值。
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
                        你可能聽過 ChatGPT，也可能用過。但你有沒有想過：「如果 AI 讀過我所有的產品資料，然後幫我回答客戶問題，那不就是 AI 客服了嗎？」
                      </p>

                      <p>
                        沒錯，概念就是這麼簡單。技術上叫做 <strong>RAG（檢索增強生成）</strong>，但你不需要記這個名詞。白話來說就是：
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
                                支援 PDF、Word（DOCX）、純文字檔案，也可以直接輸入網址讓 AI 爬取內容。
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 bg-white rounded-lg border border-purple-200">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              2
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-800 mb-1">AI 讀過、建立索引</h4>
                              <p className="text-purple-700 text-sm">
                                系統自動把你的文件拆成段落，轉成向量資料存到資料庫。
                                之後客戶問任何問題，AI 都會先去搜索最相關的段落，找到答案。
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
                                客戶在你網站上的聊天窗問「你們週六有開嗎？」，AI 從知識庫找到營業時間，
                                用自然的語氣回：「有的，我們週六營業 10:00-18:00！」回覆還會附上引用來源。
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
                                <span>回答有依據，附帶引用來源</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>找不到答案就誠實說「建議聯繫真人」</span>
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
                          Airi 使用 RAG 技術：AI 只根據你上傳的知識庫內容回答。
                          當知識庫裡找不到答案時，不會硬掰，而是直接說「這個問題建議您聯繫真人客服」。
                          你還可以在後台自訂 AI 的角色設定和語氣風格。
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
                              <h3 className="text-lg font-bold text-gray-900 mb-2">嵌入方式簡不簡單？</h3>
                              <p className="text-gray-600 text-sm">
                                最好是一行程式碼就能搞定。像 Airi 只要貼一段 script 到你的網站 HTML，
                                右下角就會出現聊天窗。不用安裝外掛、不用改網站架構。
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
                                那太麻煩了。好的工具讓你自己上傳文件就好，像丟檔案到雲端硬碟一樣簡單。
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
                              <h3 className="text-lg font-bold text-gray-900 mb-2">AI 回答不了時怎麼辦？</h3>
                              <p className="text-gray-600 text-sm">
                                AI 不可能回答所有問題。好的工具在知識庫裡找不到答案時，會誠實告知客戶，
                                並建議聯繫真人。你可以在後台查看這些對話，知道該補什麼資料進知識庫。
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
                                有些工具表面便宜，但用量一多費用暴增。選擇定價結構清楚、有免費方案的工具，
                                先試了再決定。不要簽長約，不要被綁住。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-teal-50 border-l-4 border-teal-400 p-4 my-6 rounded-r-lg">
                        <p className="text-teal-800 text-sm">
                          <strong>以 Airi 為例：</strong>一行嵌入碼、5 分鐘設定不用寫程式、知識庫拖曳上傳檔案即可、AI 找不到答案會誠實說、免費方案沒有隱藏費用。下一段會手把手帶你實際設定。
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
                              <h3 className="text-xl font-bold text-teal-900 mb-2">註冊帳號 + 建立 Chatbot</h3>
                              <p className="text-teal-700 text-sm mb-2">
                                到 Airi 官網用 Google 帳號或 Email 註冊。登入後進入 Dashboard，點「新建 Chatbot」。
                                幫你的 AI 客服取個名字，設定歡迎訊息（例如「你好！我是 XX 公司的 AI 客服，有什麼可以幫你的？」）。
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
                              <h3 className="text-xl font-bold text-teal-900 mb-2">上傳知識庫文件</h3>
                              <p className="text-teal-700 text-sm mb-2">
                                進入 Chatbot 的「知識庫」頁面，把你的 FAQ、產品手冊、價目表拖曳上傳。
                                支援 PDF、DOCX、TXT 格式，單檔最大 10MB。也可以輸入網址讓 AI 自動爬取。
                                上傳後系統會自動處理（狀態會從「處理中」變為「就緒」）。
                              </p>
                              <div className="bg-teal-100 rounded-lg p-3 text-xs text-teal-800">
                                預估時間：2 分鐘（取決於你有多少資料要上傳）
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
                              <h3 className="text-xl font-bold text-teal-900 mb-2">在後台測試對話</h3>
                              <p className="text-teal-700 text-sm mb-2">
                                回到 Chatbot 管理頁面，右側有測試對話面板。
                                試著問一些你的客戶常問的問題，看看 AI 根據知識庫回答得好不好。
                                不滿意的話，回去調整知識庫內容或修改系統提示詞。
                              </p>
                              <div className="bg-teal-100 rounded-lg p-3 text-xs text-teal-800">
                                預估時間：建議花 5-10 分鐘多測幾個問題
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
                              <h3 className="text-xl font-bold text-teal-900 mb-2">取得嵌入碼，貼到網站</h3>
                              <p className="text-teal-700 text-sm mb-2">
                                {`進入「Widget 設定」頁面，可以自訂聊天窗的顏色、位置。
                                設定好後複製嵌入碼（一段 <script> 標籤），貼到你的網站 HTML 裡。
                                不管是 WordPress、Shopify、Wix 還是自架網站，都能用。`}
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
                              5
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-teal-900 mb-2">正式上線</h3>
                              <p className="text-teal-700 text-sm mb-2">
                                打開你的網站，右下角就會出現 AI 聊天窗。從今天開始，你的網站訪客可以直接向 AI 提問，AI 會根據你的知識庫即時回覆。
                                你可以在後台隨時查看對話紀錄和用量統計。
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
                          <AiriLogo size={40} className="mx-auto mb-3 rounded-full bg-white p-1" />
                          <h3 className="text-2xl font-bold mb-3">5 分鐘就搞定，現在就試試看</h3>
                          <p className="text-teal-100 mb-6 max-w-xl mx-auto">
                            Airi 免費方案每月 100 則訊息，不需要信用卡。
                            你只要有網站，就能開始用 AI 幫你接客服。
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
                            Airi 後台有完整的對話紀錄。花個 10 分鐘翻一下，找出 AI 回答不夠好的地方。
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
                            可以上傳新的文件，也可以刪除過時的內容重新上傳。一個月下來，AI 的回答能力會明顯進步。
                          </p>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                            調整系統提示詞
                          </h3>
                          <p className="text-amber-700 text-sm">
                            在 Chatbot 設定裡可以修改系統提示詞，控制 AI 的角色和語氣。
                            例如你可以讓 AI 用比較輕鬆的語氣回答，或是加上特定的回答規則
                           （「遇到退貨問題，引導客戶撥打客服專線」）。
                          </p>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</span>
                            關注用量統計
                          </h3>
                          <p className="text-amber-700 text-sm">
                            在 Dashboard 可以看到每月的訊息用量。如果接近方案上限，考慮升級。
                            同時觀察對話量的變化趨勢，判斷 AI 客服是否真的有在幫你分擔工作。
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
                            {`你只要會上傳檔案、會複製貼上一段 <script>，就能在你的網站上建立 AI 客服。`}
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：客戶會不會發現是在跟 AI 聊天？</h3>
                          <p className="text-gray-600">
                            Airi 使用的 Claude AI 回覆非常自然。你可以在系統提示詞裡設定 AI 的語氣和角色，
                            讓它用你品牌的口吻來回答。如果客戶直接問「你是 AI 嗎？」，建議讓 AI 誠實說明。
                            誠實比假裝更重要，也更能建立信任。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：支援哪些網站平台？</h3>
                          <p className="text-gray-600">
                            {`任何可以加入 HTML 的網站都支援。WordPress、Shopify、Wix、Squarespace、自架網站都行。
                            只要能貼一段 <script> 標籤，就能用。`}
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：費用大概多少？</h3>
                          <p className="text-gray-600">
                            免費方案每月 100 則訊息，適合先試用。入門方案 NT$490/月（2,000 則），
                            專業方案 NT$1,490/月（10,000 則），商務方案 NT$3,990/月（50,000 則）。
                            跟請一個客服人員每月 3-4 萬比起來，成本低非常多。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Related Articles */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">相關文章</h3>
                  <div className="space-y-3">
                    <a href="/resources/blog/airi-ai-customer-service-launch" className="flex items-center text-teal-600 hover:text-teal-800 text-sm">
                      <DocumentTextIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                      Airi 上線：上傳文件，5 分鐘建好你的 AI 客服
                    </a>
                    <a href="/resources/blog/ai-customer-service-agent" className="flex items-center text-teal-600 hover:text-teal-800 text-sm">
                      <DocumentTextIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                      AI 客服 Agent 完整解析：RAG 知識庫技術與實戰指南
                    </a>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-8">
                  <div className="text-center">
                    <AiriLogo size={40} className="mx-auto mb-3 rounded-full bg-white p-1" />
                    <h3 className="text-2xl font-bold mb-4">準備好讓 AI 幫你接客服了嗎？</h3>
                    <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
                      不用再一則一則回客戶訊息了。讓 AI 處理重複問題，你去忙更重要的事。
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
