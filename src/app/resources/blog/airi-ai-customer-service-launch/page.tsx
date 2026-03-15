'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  TagIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ArrowRightIcon,
  SparklesIcon,
  EyeIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  BoltIcon,
  GiftIcon,
} from '@heroicons/react/24/outline';

export default function AiriLaunchArticle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeSection, setActiveSection] = useState('why-airi');

  const tableOfContents = [
    { id: 'why-airi', title: '為什麼做 Airi', icon: LightBulbIcon },
    { id: 'what-airi-can-do', title: 'Airi 能做什麼', icon: BoltIcon },
    { id: 'vs-traditional', title: '跟傳統客服機器人的差別', icon: SparklesIcon },
    { id: 'who-needs-airi', title: '誰適合用 Airi', icon: UserGroupIcon },
    { id: 'free-trial', title: '免費試用', icon: GiftIcon },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <RocketLaunchIcon className="w-12 h-12 text-violet-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Airi 上線：中小企業 AI 客服助理，5 分鐘完成設定
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              串接 LINE、免費試用 — 中小企業不用再自己當客服了
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：6 分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>Airi・AI客服・LINE・中小企業</span>
              </div>
              <div className="flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                <span>2026-03-13</span>
              </div>
              <div className="flex items-center">
                <span className="px-2 py-0.5 bg-violet-100 text-violet-700 rounded text-xs font-medium">產品發布</span>
              </div>
            </div>

            {/* TL;DR */}
            <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-left">
              <p className="sr-only">摘要 TL;DR</p>
              <p className="text-sm text-violet-800 leading-relaxed">
                Airi 是專為中小企業設計的 AI 客服助理，串接 LINE、5 分鐘設定、24/7 自動回覆。
                不是傳統的關鍵字機器人，而是真正能理解客戶問題的 AI。現在免費試用中。
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
                          ? 'bg-violet-100 text-violet-700 font-medium'
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
              <div className="prose prose-lg max-w-none">

                {/* Section 1: 為什麼做 Airi */}
                <section id="why-airi" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <LightBulbIcon className="w-8 h-8 text-yellow-600 mr-3" />
                      為什麼做 Airi？
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        如果你是中小企業老闆，這些場景你一定不陌生：
                      </p>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-6">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <span className="text-xl mr-3">1.</span>
                            <span>早上忙業務、下午跑客戶，晚上回到家還要回 LINE 訊息。客戶問的問題十之八九都一樣：「營業時間幾點？」「可以刷卡嗎？」「有沒有停車位？」</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-3">2.</span>
                            <span>請了一個人專門接客服電話，但薪水一個月三萬多，大部分時間都在回答重複的問題。</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-xl mr-3">3.</span>
                            <span>週末和假日沒人回訊息，客戶等不到就跑了。你知道流失了生意，但也沒辦法 24 小時在線。</span>
                          </li>
                        </ul>
                      </div>

                      <p>
                        這些問題聽起來很小，但加在一起就是一筆巨大的隱性成本。你的時間被綁在回訊息上，沒辦法去做真正能讓公司成長的事。
                      </p>

                      <p>
                        <strong>Airi 就是為了解決這件事而做的。</strong>一句話說完：AI 幫你接客服，你去忙更重要的事。
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Section 2: Airi 能做什麼 */}
                <section id="what-airi-can-do" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <BoltIcon className="w-8 h-8 text-violet-600 mr-3" />
                      Airi 能做什麼？
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        Airi 不是什麼花俏的新概念，它就是一個很實在的 AI 客服助理。以下是它能幫你做的事：
                      </p>

                      <div className="space-y-4">
                        <div className="bg-violet-50 border border-violet-200 rounded-xl p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start">
                              <CheckCircleIcon className="w-6 h-6 text-violet-600 mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-violet-900 mb-1">24/7 自動回覆</h4>
                                <p className="text-violet-700 text-sm">
                                  半夜三點客戶問問題？Airi 秒回。假日、颱風天、過年期間，通通不間斷。
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <CheckCircleIcon className="w-6 h-6 text-violet-600 mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-violet-900 mb-1">串接 LINE 官方帳號</h4>
                                <p className="text-violet-700 text-sm">
                                  客戶在 LINE 上直接對話，不用下載新 App、不用記新網址。用他們最熟悉的方式聯繫你。
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <CheckCircleIcon className="w-6 h-6 text-violet-600 mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-violet-900 mb-1">RAG 知識庫</h4>
                                <p className="text-violet-700 text-sm">
                                  把你的 FAQ、產品資訊、服務說明丟進去，Airi 就會根據這些資料精準回答。不是隨便瞎掰，是有根據的回覆。
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <CheckCircleIcon className="w-6 h-6 text-violet-600 mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-violet-900 mb-1">回答不了就轉真人</h4>
                                <p className="text-violet-700 text-sm">
                                  遇到 Airi 不確定的問題，會自動通知你來接手。不會硬回一個錯的答案。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                          <h4 className="font-semibold text-indigo-900 mb-2">5 分鐘就能設定上線</h4>
                          <p className="text-indigo-700 text-sm">
                            不需要寫程式、不需要找工程師。登入後台、連結 LINE 帳號、上傳你的資料，就完成了。
                            真的就這麼簡單。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Mid-article CTA */}
                <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 mb-12 text-center">
                  <p className="text-violet-800 text-sm">
                    想直接試試看？免費設定只要 5 分鐘 →{' '}
                    <a
                      href="https://airi.airai.tw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-violet-600 underline hover:text-violet-800"
                    >
                      airi.airai.tw
                    </a>
                  </p>
                </div>

                {/* Section 3: 跟傳統客服機器人有什麼不同 */}
                <section id="vs-traditional" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <SparklesIcon className="w-8 h-8 text-purple-600 mr-3" />
                      跟傳統客服機器人有什麼不同？
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        你可能用過那種「請輸入 1 查詢訂單、輸入 2 聯繫客服」的機器人。老實說，那種東西客戶用了只會更煩。
                      </p>

                      <p>
                        Airi 用的是大型語言模型加上 RAG 技術，白話一點就是：<strong>客戶用任何方式問，它都聽得懂</strong>。不管是「你們幾點開門」還是「明天早上可以去嗎」，Airi 都能理解這是在問營業時間。
                      </p>

                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">一眼看出差別</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-800 mb-3">傳統關鍵字機器人</h4>
                            <ul className="text-red-700 text-sm space-y-2">
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2 mt-0.5 flex-shrink-0">&#10007;</span>
                                <span>只認關鍵字，換個問法就答不出來</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2 mt-0.5 flex-shrink-0">&#10007;</span>
                                <span>回答像罐頭訊息，冷冰冰的</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2 mt-0.5 flex-shrink-0">&#10007;</span>
                                <span>每新增一個問題就要手動設定規則</span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-red-500 mr-2 mt-0.5 flex-shrink-0">&#10007;</span>
                                <span>客戶覺得在跟機器講話，體驗差</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">Airi（AI 客服助理）</h4>
                            <ul className="text-green-700 text-sm space-y-2">
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>理解語意，怎麼問都能回答</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>回答自然、像真人在聊天</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>更新知識庫就好，不用一條一條加規則</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>客戶體驗好，回覆率高</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <p>
                        簡單來說，傳統機器人是你給它答案、它照念；Airi 是你給它知識、它自己想怎麼回答最好。
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Section 4: 誰適合用 Airi */}
                <section id="who-needs-airi" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <UserGroupIcon className="w-8 h-8 text-indigo-600 mr-3" />
                      誰適合用 Airi？
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        Airi 不是為大企業設計的，它就是給中小企業用的。如果你符合以下任一條件，Airi 很可能適合你：
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-indigo-200 rounded-xl p-6">
                          <div className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-indigo-900 mb-1">每月客服詢問量 100+</h4>
                              <p className="text-gray-600 text-sm">
                                每天都有客戶在問差不多的問題，你或你的員工每天花超過一小時在回訊息。
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-indigo-200 rounded-xl p-6">
                          <div className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-indigo-900 mb-1">有 LINE 官方帳號</h4>
                              <p className="text-gray-600 text-sm">
                                客戶習慣用 LINE 聯繫你。Airi 直接串在你的 LINE 官方帳號上，無縫接軌。
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-indigo-200 rounded-xl p-6">
                          <div className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-indigo-900 mb-1">想降低客服人力成本</h4>
                              <p className="text-gray-600 text-sm">
                                請一個客服一個月三萬多，但大部分時間都在回答重複的問題。讓 AI 處理這些，人去做更有價值的事。
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-indigo-200 rounded-xl p-6">
                          <div className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-indigo-900 mb-1">下班後也想服務客戶</h4>
                              <p className="text-gray-600 text-sm">
                                週末、假日、半夜的客戶詢問，以前只能等上班再回。現在 Airi 隨時在線。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                        <p className="text-yellow-800 text-sm">
                          <strong>不適合的情況：</strong>如果你的客服問題非常複雜（例如需要查系統、修改訂單），Airi 目前還做不到。
                          但那些佔 60-80% 的常見問題，Airi 處理起來綽綽有餘。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 5: 免費試用 */}
                <section id="free-trial" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <GiftIcon className="w-8 h-8 text-green-600 mr-3" />
                      免費試用
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        我們知道你可能還在觀望。所以 Airi 上線後的第一個月，完全免費使用。
                      </p>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">免費試用包含什麼？</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-green-700 text-sm">
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>完整的 AI 客服功能，沒有功能閹割</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>LINE 官方帳號串接</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-green-700 text-sm">
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>知識庫設定協助</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span>不需要信用卡，不需要技術背景</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p>
                        試用一個月之後，你覺得有幫助再繼續用。覺得不適合，隨時可以停掉，不會有任何費用。
                        我們對 Airi 有信心，所以不怕你試。
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">AI 幫你接客服，你去忙更重要的事</h3>
                    <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
                      Airi 現在免費試用中。5 分鐘設定，今天就讓 AI 開始幫你回訊息。
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href="https://airi.airai.tw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white text-violet-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                      >
                        <RocketLaunchIcon className="w-5 h-5 mr-2" />
                        免費試用 Airi
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-violet-600 transition-colors duration-200"
                      >
                        <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
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
