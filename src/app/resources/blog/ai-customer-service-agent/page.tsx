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
  CodeBracketIcon,
} from '@heroicons/react/24/outline';
import AiriLogo from '@/components/ui/AiriLogo';

export default function AiCustomerServiceAgentArticle() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeSection, setActiveSection] = useState('what-is-ai-agent');

  const tableOfContents = [
    { id: 'what-is-ai-agent', title: '什麼是 AI 客服 Agent', icon: LightBulbIcon },
    { id: 'rag-knowledge-base', title: 'RAG 知識庫運作原理', icon: CpuChipIcon },
    { id: 'widget-embed', title: '網站嵌入式 Widget', icon: CodeBracketIcon },
    { id: 'implementation-process', title: '導入流程（自助式）', icon: CogIcon },
    { id: 'cost-analysis', title: '成本分析與 ROI', icon: CurrencyDollarIcon },
    { id: 'faq-myths', title: '常見問題與迷思', icon: QuestionMarkCircleIcon },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
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
                AI 客服 Agent 完整解析：RAG 知識庫技術與實戰指南
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              深入了解 RAG 技術如何讓 AI 客服有根據地回答問題，以及中小企業如何低成本導入
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-1" />
                <span>閱讀時間：12 分鐘</span>
              </div>
              <div className="flex items-center">
                <TagIcon className="w-4 h-4 mr-1" />
                <span>AI Agent・AI客服・RAG・網站Widget</span>
              </div>
              <div className="flex items-center">
                <EyeIcon className="w-4 h-4 mr-1" />
                <span>2026-02-03</span>
              </div>
            </div>

            {/* TL;DR */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-left">
              <p className="sr-only">摘要 TL;DR</p>
              <p className="text-sm text-orange-800 leading-relaxed">
                AI 客服 Agent 結合 RAG 知識庫技術，讓 AI 根據你上傳的企業文件回答問題，大幅降低幻覺風險。
                以 Airi 為例，中小企業可以在 5 分鐘內自助完成設定，免費方案 NT$0/月（100 則訊息），
                付費方案最低 NT$490/月起。本文完整解析 RAG 技術原理、Widget 嵌入方式、導入流程與成本分析。
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
              {/* Internal link */}
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
                        AI 客服 Agent 是一種結合大型語言模型（LLM）與企業知識庫的自動客服系統。
                        它不只是傳統的「關鍵字比對」聊天機器人，而是能夠理解客戶問題的語意、
                        從你的專屬知識庫中找到正確資訊，再用自然語言回覆的 AI 助理。
                      </p>

                      <p>
                        關鍵差異在於：傳統機器人需要你手動設定每一條問答規則，問法稍微不同就答不出來；
                        AI 客服 Agent 則是讀懂你的文件後自己組織回答，客戶怎麼問都能理解。
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
                                <span>RAG 知識庫讓回答有依據、降低幻覺</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>上傳文件即可擴充知識，維護簡單</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>自然對話體驗，附帶引用來源</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                        <h4 className="font-semibold text-blue-900 mb-3">適用場景</h4>
                        <ul className="space-y-2 text-blue-800">
                          <li>&#8226; <strong>電商客服：</strong>商品諮詢、退換貨流程、運費查詢、庫存確認</li>
                          <li>&#8226; <strong>SaaS 產品支援：</strong>功能操作指引、故障排除、方案比較</li>
                          <li>&#8226; <strong>服務業：</strong>營業時間、服務項目、預約方式、價格查詢</li>
                          <li>&#8226; <strong>B2B 企業：</strong>產品規格、技術文件、合作流程說明</li>
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
                        簡單來說，它讓 AI 在回答問題之前，先從你的知識庫裡找到相關資料，
                        再根據這些資料生成答案。這樣 AI 就不會「掰」出不存在的答案。
                      </p>

                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-purple-900 mb-4">RAG 運作流程</h3>

                        <div className="space-y-4">
                          <div className="flex items-start p-4 bg-white rounded-lg border border-purple-200">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              1
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-800 mb-1">知識庫建置（你上傳文件時）</h4>
                              <p className="text-purple-700 text-sm">
                                你上傳 PDF、DOCX、TXT 等文件後，系統自動將文件拆分成段落（約 200 個 token 一段），
                                再透過 Embedding 模型把每個段落轉成向量（一串數字），儲存到向量資料庫。
                                以 Airi 為例，一份 10 頁的 PDF 大約 2 分鐘就能處理完。
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 bg-white rounded-lg border border-purple-200">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              2
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-800 mb-1">語意檢索（客戶提問時）</h4>
                              <p className="text-purple-700 text-sm">
                                客戶提問後，系統把問題也轉成向量，在知識庫裡搜尋語意最相近的 5 個段落。
                                這不是關鍵字比對，而是語意相似度比對 — 所以「幾點關門」和「營業時間」都能匹配到同一段資料。
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start p-4 bg-white rounded-lg border border-purple-200">
                            <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                              3
                            </div>
                            <div>
                              <h4 className="font-semibold text-purple-800 mb-1">增強生成（AI 回答時）</h4>
                              <p className="text-purple-700 text-sm">
                                將檢索到的段落作為上下文，連同客戶問題和系統提示詞，一起送給 LLM（以 Airi 為例是 Claude AI）。
                                AI 根據這些有依據的資料生成自然語言回覆，並附上引用來源。
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
                            知識庫品質決定 AI 客服的回答品質。建議定期更新知識庫內容。
                            當知識庫裡找不到相關資料時，好的 AI 客服會誠實告知，而不是硬掰答案。
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">知識庫資料來源建議</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">優先上傳</h4>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>&#8226; 產品/服務 FAQ（客戶最常問的問題）</li>
                              <li>&#8226; 退換貨與售後服務政策</li>
                              <li>&#8226; 價格方案與收費標準</li>
                              <li>&#8226; 營業時間與聯絡方式</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800 mb-2">之後補充</h4>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>&#8226; 產品使用手冊與操作說明</li>
                              <li>&#8226; 產品更新與公告</li>
                              <li>&#8226; 技術規格文件</li>
                              <li>&#8226; 合約條款與法律聲明</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 3: 網站嵌入式 Widget */}
                <section id="widget-embed" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CodeBracketIcon className="w-8 h-8 text-green-600 mr-3" />
                      網站嵌入式 Widget
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        AI 客服 Agent 最常見的部署方式就是在網站上嵌入一個聊天窗口（Widget）。
                        訪客在你的網站上看到右下角的聊天氣泡，點開就能直接向 AI 提問。
                        這種方式不需要客戶下載任何 App，在最自然的場景下提供即時服務。
                      </p>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">Widget 嵌入方式</h3>

                        <div className="space-y-4">
                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">技術實作</h4>
                            <p className="text-green-700 text-sm mb-3">
                              {`以 Airi 為例，只需要在網站 HTML 中加入一行 <script> 標籤：`}
                            </p>
                            <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs font-mono overflow-x-auto">
                              {`<script src="https://airi.airai.tw/api/widget/embed?botId=你的BOT_ID" async></script>`}
                            </div>
                            <p className="text-green-700 text-sm mt-3">
                              這段程式碼會自動在網站右下角建立一個浮動聊天按鈕和 iframe 聊天窗。
                              不影響你的網站效能（非同步載入），不改變你的網站結構。
                            </p>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-3">Widget 功能</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>歡迎訊息 + 建議問題按鈕</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>AI 串流回覆（打字機效果）</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>回覆附帶引用來源</span>
                                </li>
                              </ul>
                              <ul className="space-y-2 text-green-700 text-sm">
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>對話歷史自動保存</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>手機版自動全螢幕</span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                  <span>外觀顏色可自訂</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">效能指標</h4>
                        <p className="text-blue-800 text-sm">
                          以 Airi 的 Widget 為例：嵌入碼小於 5KB（gzip），Widget 開啟不到 500ms，
                          AI 首次回覆出現不到 1.5 秒（串流）。不影響你網站的 Lighthouse 分數。
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* Section 4: 導入流程 */}
                <section id="implementation-process" className="scroll-mt-20 mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CogIcon className="w-8 h-8 text-orange-600 mr-3" />
                      導入流程（自助式 SaaS）
                    </h2>

                    <div className="text-gray-700 leading-relaxed space-y-6">
                      <p>
                        過去導入 AI 客服需要找外包商、談需求、等開發，動輒花數十萬和好幾週。
                        現在有了 SaaS 工具，中小企業可以自己完成所有設定，不需要工程師。
                      </p>

                      <div className="space-y-4">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">Step 1：註冊 + 建立 Chatbot（1 分鐘）</h3>
                          <p className="text-blue-700 text-sm">
                            用 Google 帳號或 Email 註冊。登入後建立你的第一個 Chatbot，
                            設定名稱、歡迎訊息、建議問題。你也可以自訂系統提示詞，
                            控制 AI 的角色（例如「你是 XX 公司的客服助理，請用親切的語氣回答」）。
                          </p>
                        </div>

                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-purple-900 mb-4">Step 2：上傳知識庫文件（2 分鐘）</h3>
                          <p className="text-purple-700 text-sm">
                            把你的 FAQ、產品手冊、價目表等文件上傳。支援 PDF、DOCX、TXT。
                            也可以輸入網址讓系統自動爬取網頁內容。上傳後系統自動處理：
                            文字提取 → 段落切分 → 向量化 → 存入資料庫。10 頁 PDF 約 2 分鐘處理完。
                          </p>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-green-900 mb-4">Step 3：測試 + 調整（5-10 分鐘）</h3>
                          <p className="text-green-700 text-sm">
                            在後台的測試面板試問各種問題，確認 AI 回答的品質。
                            如果某些問題回答不好，通常是知識庫缺少相關資料，補上去就能改善。
                            也可以調整系統提示詞來改變 AI 的回答風格。
                          </p>
                        </div>

                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                          <h3 className="text-xl font-bold text-orange-900 mb-4">Step 4：嵌入網站 + 上線（1 分鐘）</h3>
                          <p className="text-orange-700 text-sm">
                            {`在「Widget 設定」頁面自訂聊天窗外觀（顏色、位置），
                            然後複製嵌入碼貼到你的網站 HTML 裡。
                            打開網站，右下角就會出現 AI 聊天窗，正式上線。`}
                          </p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                        <p className="text-yellow-800 text-sm">
                          <strong>與傳統專案制的差別：</strong>
                          傳統 AI 客服導入需要需求診斷、客製開發、通路串接，動輒 NT$8-30 萬建置費 + 4-7 週。
                          SaaS 工具讓你自己就能搞定，5 分鐘內完成，成本從免費開始。
                        </p>
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
                        AI 客服的成本結構已經因為 SaaS 工具的出現而大幅改變。
                        以 Airi 為例，中小企業不需要付建置費，訂閱制按月付費即可。
                      </p>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-indigo-900 mb-4">Airi 定價方案</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-3">SaaS 訂閱制（自助式）</h4>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">免費方案</span>
                                <span className="text-sm font-bold text-indigo-900">NT$0/月（100 則）</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">入門方案</span>
                                <span className="text-sm font-bold text-indigo-900">NT$490/月（2,000 則）</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">專業方案</span>
                                <span className="text-sm font-bold text-indigo-900">NT$1,490/月（10,000 則）</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-indigo-700">商務方案</span>
                                <span className="text-sm font-bold text-indigo-900">NT$3,990/月（50,000 則）</span>
                              </div>
                              <div className="pt-2 border-t border-indigo-200">
                                <p className="text-xs text-indigo-600">建置費：NT$0 / 開發時間：0 / 全部自助</p>
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-indigo-200">
                            <h4 className="font-semibold text-indigo-800 mb-3">特色</h4>
                            <div className="space-y-3 text-sm text-indigo-700">
                              <div className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>不用簽長約，按月訂閱隨時取消</span>
                              </div>
                              <div className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>台幣定價、台灣金流（PAYUNi）</span>
                              </div>
                              <div className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>繁體中文介面、在地化設計</span>
                              </div>
                              <div className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>免費方案無功能限制，只有用量限制</span>
                              </div>
                              <div className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>使用 Claude AI，繁中理解力優秀</span>
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
                            <div className="text-3xl font-bold text-green-700 mb-1">&lt;2 秒</div>
                            <div className="text-sm text-green-600">AI 首次回覆時間</div>
                          </div>
                        </div>

                        <div className="mt-6 bg-white p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-3">ROI 試算範例</h4>
                          <p className="text-green-700 text-sm mb-3">
                            假設你是一家中小型電商，每月約 500 則客戶詢問，其中 70% 是重複問題：
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="text-sm font-medium text-green-800 mb-2">導入前</h5>
                              <ul className="text-green-700 text-sm space-y-1">
                                <li>&#8226; 老闆自己回：每天 1-2 小時</li>
                                <li>&#8226; 或請客服人員：NT$ 35,000/月</li>
                                <li>&#8226; 下班後/假日：無人回覆</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-green-800 mb-2">導入 Airi 後</h5>
                              <ul className="text-green-700 text-sm space-y-1">
                                <li>&#8226; AI 處理 350 則/月（70%）</li>
                                <li>&#8226; 成本：NT$490/月（入門方案）</li>
                                <li>&#8226; 服務時段：24/7 全天候</li>
                              </ul>
                            </div>
                          </div>
                          <p className="mt-3 text-green-800 text-sm font-semibold">
                            每月省下大量時間或 NT$34,510 人力成本，同時服務覆蓋時段從 8 小時提升到 24 小時。
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
                            不會。AI 客服處理的是重複性高、答案明確的問題（約佔 60-80%），
                            讓真人專注在複雜、需要判斷力的案件上。最佳實踐是 AI 處理第一線，真人處理特殊狀況。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：AI 會不會亂回答（幻覺問題）？</h3>
                          <p className="text-gray-600">
                            RAG 技術的核心就是降低幻覺風險。AI 只根據你上傳的知識庫內容回答。
                            當知識庫裡找不到相關資料時，好的 AI 客服（如 Airi）會誠實告知客戶，建議聯繫真人。
                            你可以在後台查看所有對話，了解 AI 是否回答正確。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：我的企業很小，也適合用嗎？</h3>
                          <p className="text-gray-600">
                            SaaS 工具讓小企業也能用得起 AI 客服。Airi 的免費方案每月 100 則訊息，
                            適合先體驗效果。如果你有自己的網站、客戶會問重複問題，就值得試試。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：客戶資料安全嗎？</h3>
                          <p className="text-gray-600">
                            Airi 使用 Supabase（PostgreSQL）儲存資料，支援 Row-Level Security 確保多租戶資料隔離。
                            每個企業的知識庫和對話紀錄是完全獨立的，其他企業無法存取。
                            上傳的文件和對話資料不會被用於 AI 模型訓練。
                          </p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">Q：導入後多久能看到效果？</h3>
                          <p className="text-gray-600">
                            上線當天就能看到效果 — 因為設定只要 5 分鐘。
                            建議上線後第一週密切觀察對話紀錄，補充知識庫內容。
                            一個月後 AI 的回答品質會明顯提升，你花在客服上的時間也會大幅減少。
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
                    <a href="/resources/blog/airi-ai-customer-service-launch" className="flex items-center text-orange-600 hover:text-orange-800 text-sm">
                      <DocumentTextIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                      Airi 上線：上傳文件，5 分鐘建好你的 AI 客服
                    </a>
                    <a href="/resources/blog/how-to-setup-ai-chatbot-for-business" className="flex items-center text-orange-600 hover:text-orange-800 text-sm">
                      <DocumentTextIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                      中小企業 AI 客服完整教學：從零開始到上線
                    </a>
                  </div>
                </div>

                {/* Airi CTA */}
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl p-8">
                  <div className="text-center">
                    <AiriLogo size={40} className="mx-auto mb-3 rounded-full bg-white p-1" />
                    <h3 className="text-2xl font-bold mb-4">想要 5 分鐘擁有 AI 客服？試試 Airi</h3>
                    <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
                      Airi 是專為台灣中小企業打造的 AI 客服 SaaS。上傳文件、嵌入網站，免費方案就能開始用。
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <a
                        href="https://airi.airai.tw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white text-violet-600 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                      >
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        免費試用 Airi
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </a>
                      <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-violet-600 transition-colors duration-200"
                      >
                        預約免費諮詢
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
