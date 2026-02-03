import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import TableOfContents from '@/components/pillar/TableOfContents';
import FaqAccordion from '@/components/pillar/FaqAccordion';
import { detailedCases } from '@/lib/data/caseStudies';
import { ArticleSchema, HowToSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';
import {
  BookOpenIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LightBulbIcon,
  CogIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  ArrowPathIcon,
  SparklesIcon,
  CalculatorIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

// FAQ 數據
const faqData = [
  {
    question: 'AI導入需要多少預算？',
    answer: 'AI導入的投資範圍很廣，小型自動化專案從 10-50 萬起，中型整合專案約 50-200 萬，大型企業級系統可能達 200-500 萬以上。中小企業建議從 50-100 萬的預算開始，以單一流程優化為起點。智流科技提供彈性方案，可依企業需求分階段執行。'
  },
  {
    question: 'AI導入需要多長時間？',
    answer: '根據專案複雜度，一般 AI 導入專案需要 2-6 個月。小型自動化專案（如智能客服）可在 4-8 週完成；中型整合專案（如 RPA 流程）需要 2-3 個月；大型系統改造則需要 4-6 個月。我們採用敏捷開發，每 2 週交付可見成果。'
  },
  {
    question: '沒有技術團隊可以導入AI嗎？',
    answer: '完全可以。智流科技提供完整的 AI 導入顧問服務，從需求評估、技術選型到實施部署，全程專業支援。我們還提供教育訓練，協助您的團隊學會基本維護操作。導入後也有持續的技術支援服務。'
  },
  {
    question: 'AI會取代員工嗎？',
    answer: 'AI 的目標是「增強」而非「取代」。它能自動化重複性工作（如資料輸入、報表生成），讓員工專注於更有價值的策略性工作。根據我們的案例，導入 AI 後員工通常能提升工作滿意度，因為減少了枯燥的重複勞動。'
  },
  {
    question: '如何評估AI導入的效果？',
    answer: '我們建議設定明確的 KPI，包括：時間節省（如每日減少多少小時人工作業）、錯誤率降低（如從 5% 降至 0.5%）、成本節省（如每月減少多少人力成本）、效率提升（如處理量增加多少）。導入前後會進行完整的數據比對分析。'
  },
  {
    question: '資料安全如何保障？',
    answer: '我們嚴格遵守台灣個資法及國際資安標準。所有方案都包含資料加密、存取控制、稽核日誌等安全機制。可選擇地端部署或通過 ISO 27001 認證的雲端環境。敏感資料絕不外傳，所有 AI 模型訓練皆在安全環境中進行。'
  }
];

// 取得前兩個精選案例用於支柱頁展示
const featuredCases = detailedCases.filter(c => c.featured).slice(0, 2);

if (process.env.NODE_ENV === 'development' && featuredCases.length < 2) {
  throw new Error(
    `Data integrity issue: Expected at least 2 featured cases, but found ${featuredCases.length}. ` +
    `Please check 'src/lib/data/caseStudies.ts'.`
  );
}

// SEO metadata 共用常數（與 layout.tsx 保持一致）
const articleMeta = {
  headline: 'AI導入完整指南：企業如何成功導入人工智能',
  description: 'AI導入是什麼？完整解析企業AI導入流程、成本評估、技術選型、成功案例。專為台灣中小企業設計的AI導入指南，從需求診斷到上線維護一次搞懂。',
};

export default function AIIntroductionGuide() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-blue-600">首頁</Link>
              <ChevronRightIcon className="w-4 h-4 mx-2" />
              <Link href="/resources" className="hover:text-blue-600">資源中心</Link>
              <ChevronRightIcon className="w-4 h-4 mx-2" />
              <span className="text-gray-900">AI導入完整指南</span>
            </nav>

            <div className="flex items-center justify-center mb-6">
              <BookOpenIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI導入完整指南
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed">
              企業如何成功導入人工智能？從需求診斷到上線維護的完整指南，<br />
              專為台灣中小企業量身打造
            </p>

            {/* TL;DR - GEO 優化：前 60 字直接答案 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-left">
              <p className="text-sm font-semibold text-blue-900 mb-1">摘要 TL;DR</p>
              <p className="text-sm text-blue-800 leading-relaxed">
                AI導入是企業將人工智能技術整合到業務流程中的過程。成功導入需經歷五大步驟：需求診斷、技術選型、概念驗證（POC）、實施部署、持續優化。台灣中小企業平均投資 50-200 萬，6 個月內可回本，自動化處理率可達 85%。
              </p>
            </div>

            {/* Guide Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">5</div>
                <div className="text-sm text-gray-600">導入步驟</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">15分鐘</div>
                <div className="text-sm text-gray-600">閱讀時間</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">6個月</div>
                <div className="text-sm text-gray-600">平均回本</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">92%</div>
                <div className="text-sm text-gray-600">客戶滿意度</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                <SparklesIcon className="w-5 h-5 mr-2" />
                免費諮詢 AI 導入方案
              </Link>
              <Link
                href="/resources/tools/1"
                className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-colors duration-200 inline-flex items-center justify-center"
              >
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                使用評估工具
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sticky TOC */}
      <div className="container-max section-padding">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky TOC - Client Component */}
          <TableOfContents />

          {/* Main Content */}
          <article className="flex-1 max-w-4xl">
            <div className="bg-white rounded-2xl p-8 shadow-lg space-y-12">

              {/* Section 1: AI導入是什麼 */}
              <section id="what-is-ai" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <LightBulbIcon className="w-8 h-8 text-yellow-500 mr-3" />
                  AI導入是什麼？
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>AI導入（AI Implementation）</strong>是指企業將人工智能技術整合到現有業務流程中，
                    透過智能自動化、數據分析、預測模型等技術，達成提升營運效率、降低成本、改善客戶體驗的目標。
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3">AI導入的核心要素</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span><strong>明確的業務目標</strong>：不是為了用 AI 而用 AI，而是解決具體的業務痛點</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span><strong>可量化的成效指標</strong>：導入前後要有可比較的 KPI，如時間節省、錯誤率降低</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span><strong>循序漸進的實施</strong>：從單一流程開始驗證，再逐步擴展到其他場景</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span><strong>持續優化的機制</strong>：AI 系統需要持續學習和調整，不是一次性專案</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">AI導入 vs 數位轉型</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    數位轉型是更廣泛的概念，包含將傳統作業流程電子化。而 AI 導入則是數位轉型的進階階段，
                    運用機器學習、自然語言處理等技術，讓系統具備「智能」——能夠自動判斷、學習、預測。
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">數位轉型</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 紙本 → 電子表單</li>
                        <li>• 手動 → 系統化流程</li>
                        <li>• 基礎資料數位化</li>
                      </ul>
                    </div>
                    <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                      <h4 className="font-semibold text-blue-900 mb-2">AI導入</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• 系統化 → 智能化</li>
                        <li>• 規則式 → 學習式</li>
                        <li>• 自動判斷、預測、優化</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: 為什麼需要AI導入 */}
              <section id="why-need-ai" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <QuestionMarkCircleIcon className="w-8 h-8 text-purple-500 mr-3" />
                  為什麼台灣中小企業需要AI導入？
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    台灣中小企業佔全國企業總數 98% 以上，是經濟發展的主力。然而，面對全球化競爭、少子化、
                    人力成本上升等挑戰，傳統的經營模式已難以維持競爭力。AI 導入成為突破瓶頸的關鍵策略。
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">台灣企業面臨的四大挑戰</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="border border-red-200 rounded-lg p-5 bg-red-50">
                      <div className="flex items-center mb-3">
                        <UserGroupIcon className="w-6 h-6 text-red-600 mr-2" />
                        <h4 className="font-semibold text-red-900">人力短缺</h4>
                      </div>
                      <p className="text-sm text-red-800">
                        少子化導致勞動力縮減，關鍵職位難以招募，員工流動率高，教育訓練成本增加。
                      </p>
                    </div>
                    <div className="border border-orange-200 rounded-lg p-5 bg-orange-50">
                      <div className="flex items-center mb-3">
                        <ClockIcon className="w-6 h-6 text-orange-600 mr-2" />
                        <h4 className="font-semibold text-orange-900">重複性工作</h4>
                      </div>
                      <p className="text-sm text-orange-800">
                        大量時間耗費在資料輸入、報表整理、文件處理等低價值工作，難以專注核心業務。
                      </p>
                    </div>
                    <div className="border border-yellow-200 rounded-lg p-5 bg-yellow-50">
                      <div className="flex items-center mb-3">
                        <CurrencyDollarIcon className="w-6 h-6 text-yellow-600 mr-2" />
                        <h4 className="font-semibold text-yellow-900">成本壓力</h4>
                      </div>
                      <p className="text-sm text-yellow-800">
                        原物料、人力、租金持續上漲，毛利率受壓縮，需要更高效的營運模式。
                      </p>
                    </div>
                    <div className="border border-purple-200 rounded-lg p-5 bg-purple-50">
                      <div className="flex items-center mb-3">
                        <GlobeAltIcon className="w-6 h-6 text-purple-600 mr-2" />
                        <h4 className="font-semibold text-purple-900">競爭加劇</h4>
                      </div>
                      <p className="text-sm text-purple-800">
                        跨國企業、電商平台、新創公司多方競爭，客戶期望越來越高，必須持續創新。
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                    <h4 className="font-semibold text-green-900 mb-3">AI導入的商業價值</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700">50%</div>
                        <div className="text-sm text-green-800">平均成本降低</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700">14小時</div>
                        <div className="text-sm text-green-800">每日節省人工</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-700">85%</div>
                        <div className="text-sm text-green-800">自動化處理率</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: AI導入五大步驟 */}
              <section id="five-steps" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <ClipboardDocumentCheckIcon className="w-8 h-8 text-blue-500 mr-3" />
                  AI導入的五大步驟
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-8">
                    成功的 AI 導入需要系統性的方法論。以下是我們在多年實務經驗中歸納出的五大步驟，
                    每個步驟都有明確的交付物，確保專案可控、可驗收。
                  </p>

                  {/* Step 1 */}
                  <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-blue-600 text-white px-6 py-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <MagnifyingGlassIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Step 1</div>
                        <h3 className="text-xl font-bold">需求診斷</h3>
                      </div>
                      <div className="ml-auto text-sm opacity-80">1-2 週</div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        深入了解企業現況、痛點、目標，評估 AI 導入的可行性與預期效益。
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">交付物：</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            需求診斷報告（含痛點分析、目標設定）
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            現況流程圖（AS-IS）
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            ROI 初步估算
                          </li>
                        </ul>
                      </div>
                      <p className="text-sm text-gray-500">
                        <strong>台灣在地考量：</strong>評估與現有 ERP（鼎新、SAP B1）、會計系統（MYOB、QuickBooks）的整合可行性
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-indigo-600 text-white px-6 py-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <CogIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Step 2</div>
                        <h3 className="text-xl font-bold">技術選型</h3>
                      </div>
                      <div className="ml-auto text-sm opacity-80">1-2 週</div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        根據需求選擇最適合的 AI 技術方案，包含工具、平台、架構的評估與建議。
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">交付物：</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            技術選型報告（含方案比較）
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            系統架構圖（TO-BE）
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            專案時程與報價
                          </li>
                        </ul>
                      </div>
                      <p className="text-sm text-gray-500">
                        <strong>常用工具：</strong>OpenAI API、Azure AI、Google Cloud AI、LINE Bot、自建模型
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-purple-600 text-white px-6 py-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <BeakerIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Step 3</div>
                        <h3 className="text-xl font-bold">概念驗證 (POC)</h3>
                      </div>
                      <div className="ml-auto text-sm opacity-80">2-4 週</div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        以最小可行產品 (MVP) 驗證技術可行性，確保方案能解決實際問題。
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">交付物：</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            POC 原型系統
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            測試結果報告
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            調整建議書
                          </li>
                        </ul>
                      </div>
                      <p className="text-sm text-gray-500">
                        <strong>重點：</strong>POC 階段風險最低、成本最低，是驗證想法的最佳時機
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-green-600 text-white px-6 py-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <WrenchScrewdriverIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Step 4</div>
                        <h3 className="text-xl font-bold">實施部署</h3>
                      </div>
                      <div className="ml-auto text-sm opacity-80">4-8 週</div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        開發完整功能、整合現有系統、進行 UAT 測試、教育訓練，正式上線。
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">交付物：</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            正式版系統
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            UAT 測試報告
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            操作手冊與教育訓練
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            資安檢核報告
                          </li>
                        </ul>
                      </div>
                      <p className="text-sm text-gray-500">
                        <strong>資安合規：</strong>符合台灣個資法、GDPR（如有歐盟客戶）、ISO 27001 標準
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="mb-8 border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-orange-600 text-white px-6 py-4 flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                        <ArrowPathIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Step 5</div>
                        <h3 className="text-xl font-bold">持續優化</h3>
                      </div>
                      <div className="ml-auto text-sm opacity-80">持續進行</div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        監控系統表現、收集使用者回饋、持續優化模型，確保長期效益。
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">交付物：</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            月度效能報告
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            優化建議與執行
                          </li>
                          <li className="flex items-center">
                            <DocumentCheckIcon className="w-4 h-4 mr-2 text-green-600" />
                            技術支援服務
                          </li>
                        </ul>
                      </div>
                      <p className="text-sm text-gray-500">
                        <strong>維護模式：</strong>提供 SLA 保證，響應時間 4 小時內，重大問題 24 小時內處理
                      </p>
                    </div>
                  </div>
                </div>

                {/* 中段 CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-3">想知道您的企業適用哪種方案？</h3>
                  <p className="text-blue-100 mb-6">免費獲取客製化的 AI 導入評估報告，包含預算估算與時程規劃</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    免費諮詢評估
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </section>

              {/* Section 4: 成本與投資回報 */}
              <section id="cost-roi" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <CalculatorIcon className="w-8 h-8 text-green-500 mr-3" />
                  AI導入成本與投資回報
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    AI 導入的投資因專案規模、複雜度、技術選擇而異。以下是台灣市場的參考範圍，
                    幫助您做預算規劃。
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">投資範圍參考</h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">專案類型</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">預算範圍</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">時程</th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">適用情境</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700 border-b">小型自動化</td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-b">10-50 萬</td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-b">4-8 週</td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-b">LINE 智能客服、簡易報表自動化</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="px-4 py-3 text-sm text-blue-900 border-b font-medium">中型整合專案</td>
                          <td className="px-4 py-3 text-sm text-blue-900 border-b font-medium">50-200 萬</td>
                          <td className="px-4 py-3 text-sm text-blue-900 border-b">2-4 個月</td>
                          <td className="px-4 py-3 text-sm text-blue-900 border-b">RPA 流程自動化、數據分析儀表板</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700 border-b">大型系統</td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-b">200-500 萬+</td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-b">4-6 個月</td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-b">全流程 AI 改造、多系統整合</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">成本組成</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">一次性成本</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 顧問諮詢費（需求診斷、架構設計）</li>
                        <li>• 開發費用（依人月計算，約 8-15 萬/人月）</li>
                        <li>• 測試與上線費用</li>
                        <li>• 教育訓練費用</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">持續性成本</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 雲端服務費（Azure/AWS/GCP）</li>
                        <li>• API 使用費（OpenAI、LINE 等）</li>
                        <li>• 維護支援費（約專案金額 15-20%/年）</li>
                        <li>• 系統更新與優化</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                    <h4 className="font-semibold text-green-900 mb-3">ROI 計算範例</h4>
                    <p className="text-green-800 text-sm mb-3">
                      假設一家 10 人的貿易公司導入 AI 自動報價系統：
                    </p>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• 投資成本：80 萬（一次性）+ 2 萬/月（維護）</li>
                      <li>• 每日節省：2 位業務各 3 小時 = 6 小時</li>
                      <li>• 月省人力：6 小時 × 22 天 × 500 元/小時 = 66,000 元</li>
                      <li>• 回本時程：80 萬 ÷ 6.6 萬 ≈ <strong>12 個月</strong></li>
                      <li>• 三年總效益：6.6 萬 × 36 月 - 80 萬 - 2 萬 × 36 = <strong>86 萬</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5: 常見應用場景 */}
              <section id="use-cases" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <BuildingOfficeIcon className="w-8 h-8 text-indigo-500 mr-3" />
                  常見AI導入應用場景
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    以下是台灣中小企業最常見的 AI 導入應用場景，每個場景都有實際的效益數據參考。
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* 智能客服 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                          <ChatBubbleLeftRightIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">智能客服</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        LINE / 網站 / FB 多渠道整合，自動回覆常見問題，複雜問題轉接人工。
                      </p>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-xs text-blue-600 mb-1">效益參考</div>
                        <div className="text-sm text-blue-900">自動回覆率 85%｜回應時間 &lt; 3 秒</div>
                      </div>
                    </div>

                    {/* RPA 流程自動化 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                          <CogIcon className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">RPA 流程自動化</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        自動化資料輸入、報表生成、跨系統資料同步、發票處理等重複性工作。
                      </p>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="text-xs text-purple-600 mb-1">效益參考</div>
                        <div className="text-sm text-purple-900">每日節省 14 小時｜錯誤率降低 95%</div>
                      </div>
                    </div>

                    {/* 數據分析 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                          <ChartBarIcon className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">數據分析儀表板</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        自動整合多系統數據，生成即時儀表板，AI 預測銷售趨勢、庫存需求。
                      </p>
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="text-xs text-green-600 mb-1">效益參考</div>
                        <div className="text-sm text-green-900">決策速度提升 70%｜庫存週轉率 +30%</div>
                      </div>
                    </div>

                    {/* 智能辨識 */}
                    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                          <DocumentTextIcon className="w-6 h-6 text-orange-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">智能文件辨識</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">
                        自動辨識發票、訂單、名片等文件，提取關鍵資訊並匯入系統。
                      </p>
                      <div className="bg-orange-50 rounded-lg p-3">
                        <div className="text-xs text-orange-600 mb-1">效益參考</div>
                        <div className="text-sm text-orange-900">辨識準確率 98%｜處理速度 10x</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: 成功案例 */}
              <section id="success-cases" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <RocketLaunchIcon className="w-8 h-8 text-orange-500 mr-3" />
                  AI導入成功案例
                </h2>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    以下是智流科技協助台灣企業成功導入 AI 的真實案例（已匿名處理），
                    展示 AI 導入的具體效益。
                  </p>

                  {featuredCases.map((caseStudy, idx) => {
                    const isFirst = idx === 0;
                    const colors = isFirst
                      ? { header: 'bg-emerald-600', sub: 'text-emerald-100', bg: 'bg-emerald-50', text: 'text-emerald-800', bold: 'text-emerald-700' }
                      : { header: 'bg-blue-600', sub: 'text-blue-100', bg: 'bg-blue-50', text: 'text-blue-800', bold: 'text-blue-700' };
                    const label = isFirst ? '案例一' : '案例二';
                    const metric1Label = isFirst ? '每日節省時間' : '每月節省時間';
                    const metric2Label = isFirst ? '投資回報率' : '成本降低';
                    const metric2Value = isFirst ? caseStudy.metrics.roi : caseStudy.metrics.costReduction;

                    return (
                      <div key={caseStudy.id} className="border border-gray-200 rounded-xl overflow-hidden mb-6">
                        <div className={`${colors.header} text-white px-6 py-4`}>
                          <h3 className="text-xl font-bold">{label}：{caseStudy.solution}</h3>
                          <p className={`${colors.sub} text-sm`}>產業：{caseStudy.industry}｜規模：{caseStudy.size}｜導入時程：{caseStudy.projectDuration}</p>
                        </div>
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-red-600 mb-2">導入前的痛點</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {caseStudy.challenge.split(/[，。]/).filter(s => s.trim()).slice(0, 3).map((point, i) => (
                                  <li key={i}>• {point.trim()}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-green-600 mb-2">導入後的成果</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {caseStudy.results.slice(0, 3).map((result, i) => (
                                  <li key={i}>• {result}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className={`mt-4 ${colors.bg} rounded-lg p-4 grid grid-cols-2 gap-4`}>
                            <div className="flex items-center justify-between">
                              <span className={`text-sm ${colors.text}`}>{metric1Label}</span>
                              <span className={`text-xl font-bold ${colors.bold}`}>{caseStudy.metrics.timeSaved}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className={`text-sm ${colors.text}`}>{metric2Label}</span>
                              <span className={`text-xl font-bold ${colors.bold}`}>{metric2Value}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="text-center">
                    <Link
                      href="/cases"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
                    >
                      查看更多成功案例
                      <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 7: FAQ */}
              <section id="faq" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-teal-500 mr-3" />
                  AI導入常見問題
                </h2>

                <FaqAccordion items={faqData} />
              </section>

              {/* Final CTA */}
              <section className="mt-12">
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl p-8 text-white text-center">
                  <h2 className="text-3xl font-bold mb-4">開始您的 AI 導入之旅</h2>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    從免費諮詢開始，我們將協助您評估 AI 導入的可行性、預估 ROI，
                    並提供客製化的導入方案建議。
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <SparklesIcon className="w-5 h-5 mr-2" />
                      免費諮詢
                    </Link>
                    <Link
                      href="/resources/tools/1"
                      className="inline-flex items-center bg-white/20 text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <DocumentTextIcon className="w-5 h-5 mr-2" />
                      AI 需求評估工具
                    </Link>
                  </div>
                </div>
              </section>

            </div>
          </article>
        </div>
      </div>

      <Footer />

      {/* JSON-LD Structured Data - GEO 優化強化版 */}
      <ArticleSchema
        headline={articleMeta.headline}
        description={articleMeta.description}
        url="https://airai.tw/resources/ai-introduction-guide"
        image="https://airai.tw/images/og-image.jpg"
        datePublished="2026-01-28"
        dateModified="2026-02-03"
        authorName="智流科技 AIRAI 研究團隊"
        authorJobTitle="AI 導入顧問"
        wordCount={5000}
        articleSection="AI 導入指南"
        keywords={['AI導入', 'AI導入流程', 'AI導入成本', '企業AI', '台灣中小企業AI', 'AI實施指南', 'AI技術選型', 'AI概念驗證']}
        inLanguage="zh-TW"
      />
      <HowToSchema
        name="企業 AI 導入五大步驟"
        description="台灣中小企業成功導入 AI 的完整流程，從需求診斷到持續優化，平均 2-6 個月完成，投資 50-200 萬可在 6 個月內回本。"
        totalTime="P180D"
        estimatedCost={{ currency: "TWD", value: "50萬-200萬" }}
        steps={[
          { name: "需求診斷", text: "深入了解企業現況、痛點、目標，評估 AI 導入的可行性與預期效益。交付物包含需求診斷報告、現況流程圖（AS-IS）、ROI 初步估算。", url: "https://airai.tw/resources/ai-introduction-guide#five-steps" },
          { name: "技術選型", text: "根據需求選擇最適合的 AI 技術方案，包含工具、平台、架構的評估與建議。交付物包含技術選型報告、系統架構圖（TO-BE）、專案時程與報價。" },
          { name: "概念驗證（POC）", text: "以最小可行產品（MVP）驗證技術可行性，確保方案能解決實際問題。交付物包含 POC 原型系統、測試結果報告、調整建議書。" },
          { name: "實施部署", text: "開發完整功能、整合現有系統、進行 UAT 測試、教育訓練，正式上線。交付物包含正式版系統、UAT 測試報告、操作手冊與教育訓練。" },
          { name: "持續優化", text: "監控系統表現、收集使用者回饋、持續優化模型，確保長期效益。交付物包含月度效能報告、優化建議與執行、技術支援服務。" },
        ]}
      />
      <FAQSchema questions={faqData} />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "AI導入完整指南", url: "https://airai.tw/resources/ai-introduction-guide" },
        ]}
      />
    </main>
  );
}
