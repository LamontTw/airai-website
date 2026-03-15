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
  DocumentTextIcon,
  CodeBracketIcon,
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
    { id: 'how-it-works', title: '怎麼運作的', icon: CodeBracketIcon },
    { id: 'vs-traditional', title: '跟傳統客服機器人的差別', icon: SparklesIcon },
    { id: 'who-needs-airi', title: '誰適合用 Airi', icon: UserGroupIcon },
    { id: 'pricing', title: '方案與免費試用', icon: GiftIcon },
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
                Airi 上線：上傳文件，5 分鐘建好你的 AI 客服
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              專為中小企業打造的 AI 客服 SaaS，一行嵌入碼讓你的網站擁有 24/7 智慧客服
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：6 分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>Airi・AI客服・網站Widget・中小企業</span>
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
                Airi 是專為台灣中小企業設計的 AI 客服 SaaS。上傳你的 FAQ、產品手冊等文件，AI 就能根據這些資料自動回答客戶問題。
                在你的網站貼上一行嵌入碼，右下角就會出現 AI 聊天窗，24/7 不間斷服務。免費方案每月 100 則訊息，付費方案最低 NT$490/月起。
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
                            <span>網站上有聯絡表單，但客戶等回信等太久就跑了。他們問的問題十之八九都一樣：「營業時間幾點？」「可以刷卡嗎？」「運費怎麼算？」</span>
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
                        <strong>Airi 就是為了解決這件事而做的。</strong>一句話說完：上傳你的公司資料，AI 幫你在網站上接客服，你去忙更重要的事。
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
                        Airi 不是什麼花俏的新概念，它就是一個很實在的 AI 客服工具。你上傳公司資料，它幫你回答客戶問題。以下是具體功能：
                      </p>

                      <div className="space-y-4">
                        <div className="bg-violet-50 border border-violet-200 rounded-xl p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start">
                              <CheckCircleIcon className="w-6 h-6 text-violet-600 mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-violet-900 mb-1">24/7 自動回覆</h4>
                                <p className="text-violet-700 text-sm">
                                  半夜三點客戶在你網站上問問題？Airi 秒回。假日、颱風天、過年期間，通通不間斷。
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <CheckCircleIcon className="w-6 h-6 text-violet-600 mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-violet-900 mb-1">一行程式碼嵌入網站</h4>
                                <p className="text-violet-700 text-sm">
                                  {`複製一段 <script> 貼到你的網站 HTML 裡，右下角就會出現 AI 聊天窗。不用裝軟體、不用改網站架構。`}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <CheckCircleIcon className="w-6 h-6 text-violet-600 mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-violet-900 mb-1">RAG 知識庫</h4>
                                <p className="text-violet-700 text-sm">
                                  把你的 FAQ、產品手冊、價目表丟上去，Airi 就會根據這些資料精準回答。不是隨便瞎掰，是有根據的回覆，還會附上引用來源。
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start">
                              <CheckCircleIcon className="w-6 h-6 text-violet-600 mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <h4 className="font-semibold text-violet-900 mb-1">知識庫裡沒有就誠實說</h4>
                                <p className="text-violet-700 text-sm">
                                  遇到知識庫裡找不到答案的問題，Airi 不會硬掰，而是誠實告知「建議您聯繫真人客服」。你可以在後台看到這些對話，知道該補什麼資料。
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                          <h4 className="font-semibold text-indigo-900 mb-2">支援多種文件格式</h4>
                          <p className="text-indigo-700 text-sm">
                            PDF、TXT、DOCX 都能上傳。Airi 會自動讀取內容、切成段落、建立向量索引。
                            你也可以直接把網站 URL 丟進去，Airi 會自動爬取網頁內容建立知識庫。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 3: 怎麼運作的 */}
                <section id="how-it-works" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.25 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CodeBracketIcon className="w-8 h-8 text-indigo-600 mr-3" />
                      怎麼運作的？
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        Airi 用的是 RAG（檢索增強生成）技術 + Claude AI。白話來說就是三步：
                      </p>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                        <div className="space-y-4">
                          <div className="flex items-start p-4 bg-white rounded-lg border border-indigo-200">
                            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              1
                            </div>
                            <div>
                              <h4 className="font-semibold text-indigo-800 mb-1">你上傳資料</h4>
                              <p className="text-indigo-700 text-sm">
                                在 Airi 後台上傳你的 FAQ、產品手冊、價目表。系統自動把文件拆成段落，轉成 AI 能搜索的向量資料。
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 bg-white rounded-lg border border-indigo-200">
                            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              2
                            </div>
                            <div>
                              <h4 className="font-semibold text-indigo-800 mb-1">客戶在你的網站上問問題</h4>
                              <p className="text-indigo-700 text-sm">
                                訪客點擊右下角的聊天窗，輸入問題。系統先在知識庫裡搜索最相關的段落，再把這些段落交給 Claude AI 生成自然語言回覆。
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 bg-white rounded-lg border border-indigo-200">
                            <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              3
                            </div>
                            <div>
                              <h4 className="font-semibold text-indigo-800 mb-1">AI 即時串流回覆</h4>
                              <p className="text-indigo-700 text-sm">
                                回覆以打字機效果即時出現，附帶引用來源（例如「來自：FAQ.pdf 第 3 頁」），讓客戶知道答案有依據。整個過程通常在 2 秒內完成。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p>
                        你可以在後台查看所有對話紀錄，了解客戶都在問什麼、AI 回答得好不好。不滿意的回答，補充知識庫內容就能改善。
                      </p>
                    </div>
                  </motion.div>
                </section>

                {/* Mid-article CTA */}
                <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 mb-12 text-center">
                  <p className="text-violet-800 text-sm">
                    想直接試試看？免費方案每月 100 則訊息 →{' '}
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

                {/* Section 4: 跟傳統客服機器人有什麼不同 */}
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
                        Airi 用的是大型語言模型（Claude AI）加上 RAG 技術，白話一點就是：<strong>客戶用任何方式問，它都聽得懂</strong>。不管是「你們幾點開門」還是「明天早上可以去嗎」，Airi 都能理解這是在問營業時間，然後從你的知識庫裡找到答案回覆。
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
                            <h4 className="font-semibold text-green-800 mb-3">Airi（AI 客服 SaaS）</h4>
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
                                <span>上傳文件即可，不用一條一條加規則</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>回覆附帶引用來源，有根據</span>
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

                {/* Section 5: 誰適合用 Airi */}
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
                              <h4 className="font-semibold text-indigo-900 mb-1">有自己的網站</h4>
                              <p className="text-gray-600 text-sm">
                                不管是 WordPress、Shopify、自架網站，只要能加一行 HTML，就能嵌入 Airi 的聊天窗。
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-indigo-200 rounded-xl p-6">
                          <div className="flex items-start">
                            <CheckCircleIcon className="w-6 h-6 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-indigo-900 mb-1">客戶常問重複問題</h4>
                              <p className="text-gray-600 text-sm">
                                每天都有客戶在問差不多的問題，你或你的員工每天花超過一小時在回訊息。讓 AI 處理這些，人去做更有價值的事。
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
                                請一個客服一個月三萬多，但大部分時間都在回答重複的問題。Airi 最低免費，付費也只要 NT$490/月起。
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
                                週末、假日、半夜的客戶詢問，以前只能等上班再回。現在 Airi 在你的網站上隨時待命。
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                        <p className="text-yellow-800 text-sm">
                          <strong>不適合的情況：</strong>如果你的客服問題非常複雜（例如需要查系統、修改訂單、處理退款），Airi 目前還做不到。
                          但那些佔 60-80% 的常見問題，Airi 處理起來綽綽有餘。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 6: 方案與免費試用 */}
                <section id="pricing" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <GiftIcon className="w-8 h-8 text-green-600 mr-3" />
                      方案與免費試用
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        Airi 採用 SaaS 訂閱制，不用簽長約、不用一次付大筆建置費。有免費方案讓你先試用，覺得好用再升級。
                      </p>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">定價方案</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                            <h4 className="font-semibold text-green-800 mb-1">免費</h4>
                            <p className="text-2xl font-bold text-green-900 mb-2">NT$0</p>
                            <p className="text-green-700 text-xs">100 則/月・1 個 Chatbot</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                            <h4 className="font-semibold text-green-800 mb-1">入門</h4>
                            <p className="text-2xl font-bold text-green-900 mb-2">NT$490</p>
                            <p className="text-green-700 text-xs">2,000 則/月・2 個 Chatbot</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                            <h4 className="font-semibold text-green-800 mb-1">專業</h4>
                            <p className="text-2xl font-bold text-green-900 mb-2">NT$1,490</p>
                            <p className="text-green-700 text-xs">10,000 則/月・5 個 Chatbot</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                            <h4 className="font-semibold text-green-800 mb-1">商務</h4>
                            <p className="text-2xl font-bold text-green-900 mb-2">NT$3,990</p>
                            <p className="text-green-700 text-xs">50,000 則/月・不限 Chatbot</p>
                          </div>
                        </div>
                      </div>

                      <p>
                        免費方案不需要信用卡，也沒有試用期到期自動扣款的陷阱。每月 100 則訊息足夠你測試 AI 客服的效果。覺得有幫助再升級，覺得不適合隨時可以停。
                      </p>

                      <div className="bg-violet-50 border-l-4 border-violet-400 p-4 rounded-r-lg">
                        <p className="text-violet-800 text-sm">
                          <strong>想了解更多 AI 客服的設定方式？</strong>
                          <a href="/resources/blog/how-to-setup-ai-chatbot-for-business" className="text-violet-600 underline hover:text-violet-800 ml-1">
                            閱讀《中小企業 AI 客服完整教學》
                          </a>
                          ，手把手帶你從註冊到上線。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">上傳文件，5 分鐘建好你的 AI 客服</h3>
                    <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
                      Airi 免費方案每月 100 則訊息，不需要信用卡。今天就讓 AI 開始在你的網站上幫你回答客戶問題。
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
