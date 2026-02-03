'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  BookOpenIcon,
  ChartBarSquareIcon,
  PencilSquareIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
  ClockIcon,
  UserIcon,
  ChartBarIcon,
  CalculatorIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon,
  LightBulbIcon,
  CheckCircleIcon,
  CalendarIcon,
  TagIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

interface ResourceItem {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime?: string;
  downloadCount?: string;
  views?: string;
  date: string;
  tags: string[];
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo';
  featured?: boolean;
}

interface BlogPost extends ResourceItem {
  author: string;
  excerpt: string;
}

interface Tool extends ResourceItem {
  type: 'calculator' | 'assessment' | 'template' | 'guide';
  features: string[];
}

const guides: ResourceItem[] = [
  {
    id: 1,
    title: 'AI轉型五步驟：從現況評估到效果追蹤',
    description: '完整的中小企業AI導入指南，涵蓋需求評估、技術選擇、實施規劃到效果追蹤的全流程。',
    category: '導入指南',
    readTime: '15分鐘',
    date: '2025-09-12',
    tags: ['AI導入', '數位轉型', '流程規劃'],
    color: 'blue',
    featured: true
  },
  {
    id: 2,
    title: 'ROI計算與效益評估方法',
    description: '學習如何正確計算AI專案的投資回報率，建立可衡量的效益指標體系。',
    category: '效益評估',
    readTime: '12分鐘',
    date: '2025-07-03',
    tags: ['ROI', '效益評估', '財務分析'],
    color: 'green'
  },
  {
    id: 3,
    title: '常見AI導入障礙與解決方案',
    description: '深入分析中小企業在AI導入過程中的常見問題，提供實用的解決策略。',
    category: '問題解決',
    readTime: '10分鐘',
    date: '2025-04-18',
    tags: ['問題解決', '最佳實務', '經驗分享'],
    color: 'orange'
  }
];

const trends: ResourceItem[] = [
  {
    id: 1,
    title: 'AI導入完整指南：成本、選型與實戰案例',
    description: '完整解析企業AI導入流程、成本評估、技術選型，專為台灣中小企業設計的導入指南。',
    category: '趨勢分析',
    views: '5,230',
    date: '2026-01-30',
    tags: ['AI導入', '數位轉型', '流程規劃'],
    color: 'purple',
    featured: true
  },
  {
    id: 2,
    title: '製造業智能化轉型關鍵趨勢',
    description: '探討製造業在AI時代的轉型重點，包括智能製造、預測維護等應用領域。',
    category: '製造業',
    views: '3,840',
    date: '2025-11-07',
    tags: ['製造業', '智能製造', '工業4.0'],
    color: 'indigo'
  },
  {
    id: 3,
    title: '零售業AI客服發展現況',
    description: '分析零售業AI客服的導入現況、技術發展與未來商機。',
    category: '零售業',
    views: '2,950',
    date: '2025-06-21',
    tags: ['零售業', 'AI客服', '消費者體驗'],
    color: 'red'
  }
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'OpenAI企業AI觀點深度解析',
    description: '解讀OpenAI對企業AI應用的前瞻觀點，探索AI如何重塑企業競爭力。',
    category: '行業洞察',
    author: 'AIRAI研究團隊',
    excerpt: '深入分析OpenAI《AI in the Enterprise》文章的核心觀點，結合台灣市場實況，為企業提供AI轉型策略指引...',
    readTime: '15分鐘',
    date: '2025-10-14',
    tags: ['OpenAI', '企業AI', '數位轉型', '行業洞察'],
    color: 'purple'
  },
  {
    id: 2,
    title: 'ChatGPT在企業應用的實務經驗分享',
    description: '如何將ChatGPT整合到企業工作流程中，提升團隊協作效率。',
    category: '技術實務',
    author: '李技術長',
    excerpt: '分享我們團隊在導入ChatGPT時的實際經驗，包括技術整合、安全考量與效益評估...',
    readTime: '8分鐘',
    date: '2025-08-22',
    tags: ['ChatGPT', '企業應用', '實務分享'],
    color: 'blue'
  },
  {
    id: 3,
    title: 'RPA與AI結合的最佳實務',
    description: '探討如何將傳統RPA與現代AI技術結合，創造更大的自動化價值。',
    category: '自動化',
    author: '陳專案經理',
    excerpt: 'RPA搭配AI技術可以處理更複雜的業務流程，我們將分享成功案例與實施心得...',
    readTime: '12分鐘',
    date: '2025-05-09',
    tags: ['RPA', 'AI整合', '流程自動化'],
    color: 'green'
  },
  {
    id: 4,
    title: '小型企業AI導入成本控制策略',
    description: '針對預算有限的小型企業，提供實用的AI導入成本控制方法。',
    category: '成本管理',
    author: '王顧問',
    excerpt: '小企業也能享受AI帶來的效益！關鍵在於選擇合適的技術方案與循序漸進的導入策略...',
    readTime: '10分鐘',
    date: '2025-03-27',
    tags: ['成本控制', '小型企業', 'AI策略'],
    color: 'orange'
  },
  {
    id: 5,
    title: 'AI客服Agent完整解析：RAG知識庫 + LINE整合實戰指南',
    description: '深入了解AI客服Agent如何結合RAG知識庫與LINE整合，為中小企業打造24/7智能客服。',
    category: 'AI Agent',
    author: 'AIRAI研究團隊',
    excerpt: '深入了解AI客服Agent如何結合RAG知識庫與LINE整合，為中小企業打造24/7智能客服。含成本分析、導入流程與實戰案例。',
    readTime: '12分鐘',
    date: '2026-02-03',
    tags: ['AI Agent', 'AI客服', 'RAG', 'LINE'],
    color: 'orange',
    featured: true
  }
];

const tools: Tool[] = [
  {
    id: 1,
    title: 'AI需求評估工具',
    description: '幫助企業快速評估AI導入需求，分析現有流程與改善機會。',
    category: '評估工具',
    type: 'assessment',
    downloadCount: '2,450',
    date: '2025-12-08',
    tags: ['需求評估', '流程分析', '免費工具'],
    color: 'blue',
    features: [
      '業務流程分析問卷',
      'AI適用性評估',
      '投資優先級排序',
      '詳細評估報告'
    ],
    featured: true
  },
  {
    id: 2,
    title: 'ROI計算器',
    description: '精確計算AI專案的投資回報率，支援多種成本與效益參數設定。',
    category: '計算工具',
    type: 'calculator',
    downloadCount: '1,830',
    date: '2025-09-19',
    tags: ['ROI計算', '財務分析', '效益評估'],
    color: 'green',
    features: [
      '多維度成本計算',
      '效益量化分析',
      '風險評估模型',
      '圖表化報告輸出'
    ]
  },
  {
    id: 3,
    title: 'AI專案規劃範本',
    description: '標準化的AI專案規劃範本，包含時程安排、里程碑與驗收標準。',
    category: '規劃範本',
    type: 'template',
    downloadCount: '1,620',
    date: '2025-06-14',
    tags: ['專案規劃', '範本', '時程管理'],
    color: 'purple',
    features: [
      '完整專案時程範本',
      '風險管控清單',
      '驗收標準模板',
      '溝通管理流程'
    ]
  },
  {
    id: 4,
    title: 'AI技術選型指南',
    description: '協助企業選擇最適合的AI技術方案，比較不同技術的優劣與適用性。',
    category: '選型指南',
    type: 'guide',
    downloadCount: '980',
    date: '2025-02-23',
    tags: ['技術選型', '比較分析', '決策支援'],
    color: 'indigo',
    features: [
      '技術比較矩陣',
      '適用場景分析',
      '成本效益評估',
      '供應商評選標準'
    ]
  }
];

const stats = [
  { label: '資源下載次數', value: '15,000+', icon: ArrowDownTrayIcon },
  { label: '知識文章', value: '120+', icon: BookOpenIcon },
  { label: '免費工具', value: '25+', icon: WrenchScrewdriverIcon },
  { label: '月活躍用戶', value: '3,200+', icon: UserIcon }
];

export default function ResourcesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    purple: 'bg-purple-50 border-purple-200 text-purple-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
    red: 'bg-red-50 border-red-200 text-red-700',
    indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600',
    indigo: 'text-indigo-600'
  };

  return (
    <main className="min-h-screen">
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
              <span className="gradient-text">資源洞察</span> 中心
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              提供豐富的AI知識資源，助力中小企業成功轉型
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              精選資源
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              最受歡迎的AI轉型資源，幫助您快速入門
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Featured Guide */}
            {guides.filter(g => g.featured).map((guide, index) => (
              <Link key={guide.id} href={`/resources/ai-guide/${guide.id}`} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-blue-500 h-full"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <BookOpenIcon className="w-8 h-8 text-blue-600 mr-3" />
                      <span className="text-blue-600 text-sm font-medium">AI導入指南</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">{guide.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {guide.readTime}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {guide.date}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {guide.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-blue-600 font-medium text-sm inline-flex items-center">
                      閱讀全文
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* Featured Trend */}
            {trends.filter(t => t.featured).map((trend, index) => (
              <Link key={trend.id} href="/resources/ai-introduction-guide" className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-purple-500 h-full"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <ChartBarSquareIcon className="w-8 h-8 text-purple-600 mr-3" />
                      <span className="text-purple-600 text-sm font-medium">趨勢分析</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">{trend.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{trend.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-1" />
                        {trend.views} 次瀏覽
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {trend.date}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trend.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-purple-600 font-medium text-sm inline-flex items-center">
                      查看報告
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}

            {/* Featured Blog - AI客服Agent */}
            {blogPosts.filter(p => p.featured).map((post, index) => (
              <Link key={post.id} href="/resources/blog/ai-customer-service-agent" className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-orange-500 h-full"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <ChatBubbleLeftRightIcon className="w-8 h-8 text-orange-600 mr-3" />
                      <span className="text-orange-600 text-sm font-medium">部落格</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-orange-600 font-medium text-sm inline-flex items-center">
                      閱讀文章
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Guides Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <BookOpenIcon className="w-8 h-8 text-blue-600 mr-3" />
                AI轉型指南
              </h2>
              <p className="text-gray-600">系統化的AI導入知識，從零開始到專家進階</p>
            </div>
            <Link href="/resources/ai-guide" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
              查看全部
              <ArrowRightIcon className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <motion.article
                key={guide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <Link href={`/resources/ai-guide/${guide.id}`} className="block">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${colorClasses[guide.color]}`}>
                  {guide.category}
                </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">{guide.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    {guide.readTime}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {guide.date}
                  </div>
                </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                  {guide.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                  <div className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center group">
                    閱讀指南
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <PencilSquareIcon className="w-8 h-8 text-green-600 mr-3" />
                技術部落格
              </h2>
              <p className="text-gray-600">深度技術文章與實務經驗分享</p>
            </div>
            <Link href="/resources/blog" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center group">
              查看全部
              <ArrowRightIcon className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorClasses[post.color]}`}>
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <UserIcon className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link href={post.id === 1 ? `/resources/blog/openai-enterprise-ai` : post.id === 5 ? `/resources/blog/ai-customer-service-agent` : `/resources/blog/${post.id}`} className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center group">
                    閱讀全文
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <WrenchScrewdriverIcon className="w-8 h-8 text-orange-600 mr-3" />
                免費工具
              </h2>
              <p className="text-gray-600">實用的AI評估與規劃工具，完全免費使用</p>
            </div>
            <Link href="/resources/tools" className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center group">
              查看全部
              <ArrowRightIcon className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {tool.type === 'calculator' && <CalculatorIcon className={`w-8 h-8 ${iconColorClasses[tool.color]} mr-3`} />}
                    {tool.type === 'assessment' && <CheckCircleIcon className={`w-8 h-8 ${iconColorClasses[tool.color]} mr-3`} />}
                    {tool.type === 'template' && <DocumentTextIcon className={`w-8 h-8 ${iconColorClasses[tool.color]} mr-3`} />}
                    {tool.type === 'guide' && <LightBulbIcon className={`w-8 h-8 ${iconColorClasses[tool.color]} mr-3`} />}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{tool.title}</h3>
                      <span className={`text-sm font-medium ${iconColorClasses[tool.color]}`}>{tool.category}</span>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    免費
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{tool.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">主要功能：</h4>
                  <div className="space-y-1">
                    {tool.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className={`w-4 h-4 ${iconColorClasses[tool.color]} mr-2`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <ArrowDownTrayIcon className="w-4 h-4 mr-1" />
                    {tool.downloadCount} 次下載
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {tool.date}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href={`/resources/tools/${tool.id}`} 
                  className={`w-full text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-center block ${
                    tool.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                    tool.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                    tool.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                    'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  立即使用工具
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              需要專業的AI導入建議？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              我們的專家團隊隨時準備為您提供個人化的AI轉型諮詢服務
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center group"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                免費專家諮詢
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/cases"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white transition-colors duration-200 inline-flex items-center justify-center"
              >
                查看成功案例
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 