'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  PencilSquareIcon,
  CalendarIcon,
  ClockIcon,
  ArrowRightIcon,
  TagIcon,
  UserIcon
} from '@heroicons/react/24/outline';

// 文章數據
const blogPosts = [
  {
    id: 'openai-enterprise-ai',
    title: 'OpenAI企業版：重新定義商業AI應用的新標準',
    excerpt: '深入探討OpenAI企業版如何為現代企業提供安全、可擴展且符合合規要求的AI解決方案，以及它對商業AI應用生態系統的革命性影響。',
    date: '2024年1月8日',
    readTime: '8分鐘',
    category: 'AI技術',
    tags: ['OpenAI', '企業AI', '商業應用'],
    image: '/images/og-image.jpg',
    author: 'AI專家團隊'
  },
  {
    id: '2',
    title: 'AI驅動的客戶服務革命：打造24/7智能支援體系',
    excerpt: '探索如何運用人工智慧技術建立全天候客戶服務系統，提升客戶滿意度並降低營運成本。從聊天機器人到智能工單分派，全面解析AI在客服領域的應用。',
    date: '2024年1月5日',
    readTime: '6分鐘',
    category: '應用案例',
    tags: ['客戶服務', 'AI應用', '自動化'],
    image: '/images/og-image.jpg',
    author: '客服解決方案專家'
  },
  {
    id: '3',
    title: '企業AI轉型指南：從策略規劃到實施落地',
    excerpt: '完整的企業AI轉型roadmap，包含技術選型、團隊建置、風險管控等關鍵要素。幫助企業避免常見陷阱，成功踏上AI轉型之路。',
    date: '2024年1月3日',
    readTime: '10分鐘',
    category: '戰略規劃',
    tags: ['數位轉型', 'AI策略', '企業管理'],
    image: '/images/og-image.jpg',
    author: '數位轉型顧問'
  },
  {
    id: '4',
    title: '2024年AI趨勢預測：生成式AI將如何重塑商業模式',
    excerpt: '分析2024年人工智慧技術發展趨勢，探討生成式AI、多模態AI等新興技術對各行業的影響，以及企業應如何準備迎接這些變化。',
    date: '2024年1月1日',
    readTime: '7分鐘',
    category: '趨勢分析',
    tags: ['AI趨勢', '生成式AI', '商業模式'],
    image: '/images/og-image.jpg',
    author: '產業分析師'
  },
  {
    id: 'ai-customer-service-agent',
    title: 'AI客服Agent完整解析：RAG知識庫 + LINE整合實戰指南',
    excerpt: '深入了解AI客服Agent如何結合RAG知識庫與LINE整合，為中小企業打造24/7智能客服。含成本分析、導入流程與實戰案例。',
    date: '2026年2月3日',
    readTime: '12分鐘',
    category: 'AI Agent',
    tags: ['AI Agent', 'AI客服', 'RAG', 'LINE'],
    image: '/images/og-image.jpg',
    author: 'AIRAI研究團隊'
  }
];

const categories = ['全部', 'AI Agent', 'AI技術', '應用案例', '戰略規劃', '趨勢分析'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('全部');

  const filteredPosts = selectedCategory === '全部' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <PencilSquareIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI洞察 <span className="gradient-text">部落格</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              探索人工智慧的最新趨勢、實務應用案例，以及專家深度分析
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding">
        <div className="container-max max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/resources/blog/${post.id}`}
                className="block"
              >
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer h-full"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <ClockIcon className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <UserIcon className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md flex items-center"
                        >
                          <TagIcon className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                      閱讀全文
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              訂閱我們的AI洞察電子報
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              每週獲得最新的AI技術趨勢、實務案例分析，以及專家深度見解
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="請輸入您的電子郵件"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200">
                立即訂閱
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 