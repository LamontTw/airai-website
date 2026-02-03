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
  DocumentTextIcon,
  CogIcon,
  ArrowRightIcon,
  SparklesIcon,
  EyeIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

export default function AiCustomerServiceAgentArticle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeSection, setActiveSection] = useState('what-is-ai-agent');

  const tableOfContents = [
    { id: 'what-is-ai-agent', title: '什麼是 AI 客服 Agent', icon: LightBulbIcon },
    { id: 'rag-knowledge-base', title: 'RAG 知識庫運作原理', icon: CpuChipIcon },
    { id: 'line-integration', title: 'LINE 整合實戰', icon: ChatBubbleLeftRightIcon },
    { id: 'implementation-process', title: '導入流程與時程', icon: CogIcon },
    { id: 'cost-analysis', title: '成本分析與 ROI', icon: CurrencyDollarIcon },
    { id: 'faq-myths', title: '常見問題與迷思', icon: QuestionMarkCircleIcon },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-orange-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI客服Agent完整解析：RAG知識庫 + LINE整合實戰指南
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              RAG知識庫 + LINE整合實戰指南：為中小企業打造24/7智能客服
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：12分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>AI Agent・AI客服・RAG・LINE</span>
              </div>
              <div className="flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                <span>2026-02-03</span>
              </div>
            </div>

            {/* TL;DR - GEO 優化 */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-left">
              <p className="sr-only">摘要 TL;DR</p>
              <p className="text-sm text-orange-800 leading-relaxed">
                AI 客服 Agent 結合 RAG 知識庫，能自動處理 60-80% 的常見客戶問題，回應時間從 15 分鐘縮短至 30 秒內。
                透過 LINE 整合覆蓋台灣 2,100 萬用戶，建置費約 NT$8-30 萬、月營運費 NT$5,000-30,000。
                本文完整解析技術架構、導入流程（4-7 週）、成本 ROI 與常見迷思。
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
                          ? 'bg-orange-100 text-orange-700 font-medium'
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
              {/* 內鏈到支柱頁 */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8 rounded-r-lg">
                <p className="text-orange-800 mb-2">想了解完整的 AI 導入流程嗎？</p>
                <a
                  href="/resources/ai-introduction-guide"
                  className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800"
                >
                  &rarr; 閱讀《AI導入完整指南》
                </a>
              </div>

              <div className="prose prose-lg max-w-none">

                {/* Section 1: 什麼是 AI 客服 Agent */}
                <section id="what-is-ai-agent" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <LightBulbIcon className="w-8 h-8 text-yellow-600 mr-3" />
                      什麼是 AI 客服 Agent？
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-4">
                      <p>
                        AI 客服 Agent 是一種結合大型語言模型（LLM）與企業知識庫的智能客服系統。
                        它不只是傳統的「關鍵字比對」聊天機器人，而是能夠真正理解客戶問題語意、
                        從企業專屬知識庫中檢索正確資訊，並以自然語言回覆的 AI 助理。
                      </p>

                      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 my-6">
                        <h3 className="text-xl font-bold text-orange-900 mb-4">AI 客服 Agent vs 傳統客服機器人</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-800 mb-3">傳統客服機器人</h4>
                            <ul className="text-red-700 text-sm space-y-2">
                              <li className="flex items-start">
                                <ExclamationTriangleIcon className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>依賴預設的問答對，無法處理未設定的問題</span>
                              </li>
                              <li className="flex items-start">
                                <ExclamationTriangleIcon className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>關鍵字比對，容易答非所問</span>
                              </li>
                              <li className="flex items-start">
                                <ExclamationTriangleIcon className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>維護成本高，每新增一個場景都要手動設定</span>
                              </li>
                              <li className="flex items-start">
                                <ExclamationTriangleIcon className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>體驗生硬，客戶滿意度低</span>
                              </li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">AI 客服 Agent</h4>
                            <ul className="text-green-700 text-sm space-y-2">
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>語意理解，能處理各種問法</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>RAG 知識庫讓回答有依據、不幻覺</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>更新知識庫即可擴充能力，維護簡單</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>自然對話體驗，客戶滿意度高</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                        <h4 className="font-semibold text-blue-900 mb-3">適用場景</h4>
                        <ul className="space-y-2 text-blue-800">
                          <li>&#8226; <strong>電商客服：</strong>商品諮詢、退換貨流程、訂單查詢</li>
                          <li>&#8226; <strong>SaaS 產品支援：</strong>功能操作指引、故障排除、帳號管理</li>
                          <li>&#8226; <strong>醫療診所：</strong>預約掛號、門診時間查詢、衛教資訊</li>
                          <li>&#8226; <strong>金融保險：</strong>保單查詢、理賠流程說明、費率諮詢</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 2: RAG 知識庫 */}
                <section id="rag-knowledge-base" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CpuChipIcon className="w-8 h-8 text-purple-600 mr-3" />
                      RAG 知識庫運作原理
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        RAG（Retrieval-Augmented Generation，檢索增強生成）是 AI 客服 Agent 的核心技術。
                        它讓 LLM 在回答問題時，先從企業知識庫檢索相關資料，再根據檢索結果生成答案，
                        大幅降低「幻覺」（hallucination）問題。
                      </p>

                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">RAG 運作流程</h3>

                        <div className="space-y-4">
                          <div className="flex items-start p-4 bg-white rounded-lg border border-purple-200">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              1
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-800 mb-1">知識庫建置</h4>
                              <p className="text-purple-700 text-sm">
                                將企業文件（FAQ、產品手冊、SOP）切分為段落，透過 Embedding 模型轉換為向量，
                                儲存在向量資料庫中。
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 bg-white rounded-lg border border-purple-200">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              2
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-800 mb-1">語意檢索</h4>
                              <p className="text-purple-700 text-sm">
                                客戶提問時，系統將問題轉換為向量，在知識庫中搜尋語意最相近的段落（Top-K）。
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 bg-white rounded-lg border border-purple-200">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              3
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-800 mb-1">增強生成</h4>
                              <p className="text-purple-700 text-sm">
                                將檢索到的段落作為上下文，連同客戶問題一起送給 LLM，生成有依據的回答。
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                          <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                            <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                            關鍵提醒
                          </h4>
                          <p className="text-yellow-800 text-sm">
                            知識庫品質決定 AI 客服的回答品質。建議定期更新知識庫內容，
                            並設定信心度門檻 — 當檢索結果信心度過低時，自動轉接人工客服。
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">知識庫資料來源建議</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">高優先資料</h4>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>&#8226; 產品/服務 FAQ（客戶最常問的問題）</li>
                              <li>&#8226; 退換貨與售後服務政策</li>
                              <li>&#8226; 價格方案與收費標準</li>
                              <li>&#8226; 使用教學與操作手冊</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">進階資料</h4>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>&#8226; 歷史客服對話紀錄</li>
                              <li>&#8226; 產品更新與公告</li>
                              <li>&#8226; 技術文件與 API 文檔</li>
                              <li>&#8226; 合約條款與法律聲明</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 3: LINE 整合實戰 */}
                <section id="line-integration" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ChatBubbleLeftRightIcon className="w-8 h-8 text-green-600 mr-3" />
                      LINE 整合實戰
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        LINE 是台灣滲透率最高的通訊軟體，超過 2,100 萬用戶每天使用。
                        將 AI 客服 Agent 串接 LINE Official Account，讓客戶在最熟悉的平台上直接獲得服務，
                        是台灣中小企業導入 AI 客服的最佳起點。
                      </p>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">LINE 整合架構</h3>

                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">技術串接流程</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-sm font-bold text-green-800 mb-1">LINE Messaging API</div>
                                <p className="text-xs text-green-600">接收客戶訊息</p>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-sm font-bold text-green-800 mb-1">AI Agent 後端</div>
                                <p className="text-xs text-green-600">RAG 檢索 + LLM 生成</p>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-sm font-bold text-green-800 mb-1">LINE Reply API</div>
                                <p className="text-xs text-green-600">回覆客戶訊息</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">LINE 專屬功能整合</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>Rich Menu 快捷選單導航</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>Flex Message 豐富訊息格式</span>
                                </li>
                              </ul>
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>Quick Reply 快速回覆按鈕</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>圖片/檔案辨識處理</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-blue-100 border border-blue-300 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">Web 嵌入式客服</h4>
                          <p className="text-blue-800 text-sm">
                            除了 LINE，同一套 AI Agent 也可以透過 WebSocket 嵌入官網，
                            提供網頁版即時客服。一套知識庫、多管道服務。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 4: 導入流程與時程 */}
                <section id="implementation-process" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CogIcon className="w-8 h-8 text-orange-600 mr-3" />
                      導入流程與時程
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        AI 客服 Agent 的導入不是一蹴而就，而是分階段逐步上線。
                        以下是我們建議的標準導入流程：
                      </p>

                      <div className="space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">Phase 1：需求診斷與規劃（1-2 週）</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-blue-700 text-sm">
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>現有客服流程分析</span>
                              </li>
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>高頻問題分類與統計</span>
                              </li>
                            </ul>
                            <ul className="space-y-2 text-blue-700 text-sm">
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>知識庫資料盤點</span>
                              </li>
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>整合通路確認（LINE / Web）</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-purple-900 mb-4">Phase 2：知識庫建置與調校（2-3 週）</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-purple-700 text-sm">
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>資料清洗與結構化</span>
                              </li>
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>向量化與索引建立</span>
                              </li>
                            </ul>
                            <ul className="space-y-2 text-purple-700 text-sm">
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Prompt 設計與調校</span>
                              </li>
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>回答品質測試（100+ 測試題）</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-4">Phase 3：通路串接與上線（1-2 週）</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-green-700 text-sm">
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>LINE / Web 前端串接</span>
                              </li>
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>人工轉接機制設定</span>
                              </li>
                            </ul>
                            <ul className="space-y-2 text-green-700 text-sm">
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>小範圍試營運</span>
                              </li>
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>正式上線與監控</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-orange-900 mb-4">Phase 4：持續優化（上線後持續）</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-orange-700 text-sm">
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>對話紀錄分析與知識庫補充</span>
                              </li>
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>回答準確率追蹤</span>
                              </li>
                            </ul>
                            <ul className="space-y-2 text-orange-700 text-sm">
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>客戶滿意度調查</span>
                              </li>
                              <li className="flex items-start">
                                <SparklesIcon className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>功能擴充（多語系、語音等）</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 5: 成本分析與 ROI */}
                <section id="cost-analysis" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CurrencyDollarIcon className="w-8 h-8 text-indigo-600 mr-3" />
                      成本分析與 ROI
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        AI 客服 Agent 的投資回報取決於企業的客服量與場景複雜度。
                        以下是中小企業常見的成本結構與效益分析：
                      </p>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-indigo-900 mb-4">成本結構</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-3">一次性建置費</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">知識庫建置與調校</span>
                                <span className="text-sm font-bold text-indigo-900">NT$ 5-15 萬</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">LINE / Web 通路串接</span>
                                <span className="text-sm font-bold text-indigo-900">NT$ 3-8 萬</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">客製化功能開發</span>
                                <span className="text-sm font-bold text-indigo-900">NT$ 0-10 萬</span>
                              </div>
                              <div className="pt-2 border-t border-indigo-200 flex justify-between items-center">
                                <span className="text-sm font-semibold text-indigo-800">合計</span>
                                <span className="text-base font-bold text-indigo-900">NT$ 8-30 萬</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-3">月營運費</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">LLM API 費用</span>
                                <span className="text-sm font-bold text-indigo-900">NT$ 2,000-8,000</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">雲端主機與向量資料庫</span>
                                <span className="text-sm font-bold text-indigo-900">NT$ 1,500-5,000</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">維運與知識庫更新</span>
                                <span className="text-sm font-bold text-indigo-900">NT$ 3,000-15,000</span>
                              </div>
                              <div className="pt-2 border-t border-indigo-200 flex justify-between items-center">
                                <span className="text-sm font-semibold text-indigo-800">合計</span>
                                <span className="text-base font-bold text-indigo-900">NT$ 5,000-30,000/月</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">效益評估</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                            <div className="text-3xl font-bold text-green-700 mb-1">60-80%</div>
                            <div className="text-sm text-green-600">常見問題自動解決率</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                            <div className="text-3xl font-bold text-green-700 mb-1">24/7</div>
                            <div className="text-sm text-green-600">全天候不間斷服務</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg border border-green-200">
                            <div className="text-3xl font-bold text-green-700 mb-1">30秒內</div>
                            <div className="text-sm text-green-600">平均首次回應時間</div>
                          </div>
                        </div>

                        <div className="mt-6 bg-white p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-3">ROI 試算範例</h4>
                          <p className="text-green-700 text-sm mb-3">
                            假設企業原本有 2 位專職客服人員（月薪各 NT$ 35,000），每月處理 1,500 則詢問：
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-sm font-medium text-green-800 mb-2">導入前</h5>
                              <ul className="text-green-700 text-sm space-y-1">
                                <li>&#8226; 人力成本：NT$ 70,000/月</li>
                                <li>&#8226; 服務時段：週一至週五 9-18 時</li>
                                <li>&#8226; 平均回應時間：15 分鐘</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-green-800 mb-2">導入後</h5>
                              <ul className="text-green-700 text-sm space-y-1">
                                <li>&#8226; AI + 1 位客服：NT$ 35,000 + 15,000 = NT$ 50,000/月</li>
                                <li>&#8226; 服務時段：24/7 全天候</li>
                                <li>&#8226; 平均回應時間：30 秒</li>
                              </ul>
                            </div>
                          </div>
                          <p className="mt-3 text-green-800 text-sm font-semibold">
                            每月節省 NT$ 20,000，同時服務品質與覆蓋時段大幅提升。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 6: 常見問題與迷思 */}
                <section id="faq-myths" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <QuestionMarkCircleIcon className="w-8 h-8 text-red-600 mr-3" />
                      常見問題與迷思
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <div className="space-y-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：AI 客服會完全取代人工客服嗎？</h3>
                          <p className="text-gray-600">
                            不會。AI 客服 Agent 的定位是處理重複性高、標準化的問題（約佔 60-80%），
                            讓人工客服專注在複雜、需要情感判斷的案件上。最佳實踐是 AI + 人工的混合模式。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：AI 客服會不會亂回答（幻覺問題）？</h3>
                          <p className="text-gray-600">
                            RAG 技術的核心就是解決幻覺問題。AI 只會根據知識庫中的資料回答，
                            當找不到相關資訊時，會誠實告知並轉接人工。設定好信心度門檻是關鍵。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：我的企業規模很小，也適合導入嗎？</h3>
                          <p className="text-gray-600">
                            只要每月有固定的客服量（例如每月超過 200 則詢問），就值得評估導入。
                            現在的 AI 客服方案已經可以做到輕量化部署，初期投資門檻不高。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：導入後多久能看到效果？</h3>
                          <p className="text-gray-600">
                            通常在上線後第一個月就能看到明顯效果：客服回應時間大幅縮短、
                            人工客服工作量減少。完整的 ROI 評估建議在上線 3 個月後進行。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：客戶資料的安全性如何保障？</h3>
                          <p className="text-gray-600">
                            企業等級的 AI 客服方案會採用資料加密傳輸、獨立的知識庫部署、
                            嚴格的存取控制，以及定期的安全稽核。敏感資料不會被用於模型訓練。
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-xl p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">想了解 AI 客服 Agent 如何幫助您的企業？</h3>
                    <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                      預約免費諮詢，我們將為您量身規劃最適合的 AI 客服方案
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                      >
                        <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                        免費諮詢
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </a>
                      <a
                        href="/resources/tools/1"
                        className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-orange-600 transition-colors duration-200"
                      >
                        <DocumentTextIcon className="w-5 h-5 mr-2" />
                        AI需求評估
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
