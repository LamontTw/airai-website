'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  CalendarIcon,
  EyeIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

interface TrendItem {
  id: number;
  title: string;
  description: string;
  category: string;
  views: string;
  date: string;
  tags: string[];
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo';
  featured?: boolean;
  readTime: string;
}

const trends: TrendItem[] = [
  {
    id: 1,
    title: '2024年中小企業AI應用趨勢報告',
    description: '深度分析台灣中小企業AI應用現況，預測未來發展趨勢與投資機會。',
    category: '趨勢分析',
    views: '5,230',
    date: '2024-05-22',
    tags: ['趨勢分析', '市場報告', '產業洞察'],
    color: 'purple',
    featured: true,
    readTime: '12分鐘'
  },
  {
    id: 2,
    title: '製造業智能化轉型關鍵趨勢',
    description: '探討製造業在AI時代的轉型重點，包括智能製造、預測維護等應用領域。',
    category: '製造業',
    views: '3,840',
    date: '2024-05-18',
    tags: ['製造業', '智能製造', '工業4.0'],
    color: 'indigo',
    featured: false,
    readTime: '10分鐘'
  },
  {
    id: 3,
    title: '零售業AI客服發展現況',
    description: '分析零售業AI客服的導入現況、技術發展與未來商機。',
    category: '零售業',
    views: '2,950',
    date: '2024-05-12',
    tags: ['零售業', 'AI客服', '消費者體驗'],
    color: 'red',
    featured: false,
    readTime: '8分鐘'
  }
];

const categoryIcons = {
  '趨勢分析': ArrowTrendingUpIcon,
  '製造業': BuildingOfficeIcon,
  '零售業': ShoppingBagIcon,
  '全球趨勢': GlobeAltIcon,
};

export default function TrendsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ChartBarIcon className="w-12 h-12 text-purple-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI趨勢分析
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              掌握最新AI發展趨勢，洞察產業變化，把握投資機會
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">{trends.length}</div>
                <div className="text-sm text-gray-600">趨勢報告</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">12K+</div>
                <div className="text-sm text-gray-600">總閱讀量</div>
              </div>
              <div className="text-center md:block hidden">
                <div className="text-2xl font-bold text-indigo-600 mb-1">每週</div>
                <div className="text-sm text-gray-600">更新頻率</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trends List */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid gap-8">
            {trends.map((trend, index) => {
              const IconComponent = categoryIcons[trend.category as keyof typeof categoryIcons] || DocumentTextIcon;
              
              return (
                <motion.div
                  key={trend.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    trend.featured ? 'ring-2 ring-purple-200' : ''
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-xl bg-${trend.color}-100`}>
                          <IconComponent className={`w-6 h-6 text-${trend.color}-600`} />
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className={`px-3 py-1 rounded-full bg-${trend.color}-100 text-${trend.color}-700 font-medium`}>
                            {trend.category}
                          </span>
                          {trend.featured && (
                            <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium">
                              精選
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {trend.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {trend.description}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{trend.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <EyeIcon className="w-4 h-4" />
                          <span>{trend.views} 次瀏覽</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DocumentTextIcon className="w-4 h-4" />
                          <span>{trend.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {trend.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:w-auto">
                      <Link
                        href={`/resources/trends/${trend.id}`}
                        className={`inline-flex items-center px-6 py-3 bg-${trend.color}-600 hover:bg-${trend.color}-700 text-white font-semibold rounded-lg transition-colors duration-200`}
                      >
                        閱讀報告
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">更多趨勢報告即將推出</p>
            <Link
              href="/resources"
              className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors duration-200"
            >
              返回資源中心
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 