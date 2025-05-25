'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import { 
  LightBulbIcon, 
  UserGroupIcon, 
  CpuChipIcon,
  HeartIcon,
  StarIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const values = [
  {
    icon: LightBulbIcon,
    title: '創新導向',
    description: '持續探索最新AI技術，為客戶提供前瞻性解決方案'
  },
  {
    icon: UserGroupIcon,
    title: '客戶至上',
    description: '以客戶需求為中心，量身打造最適合的AI導入策略'
  },
  {
    icon: CpuChipIcon,
    title: '實用主義',
    description: '專注於實際可行的AI應用，確保投資回報可衡量'
  },
  {
    icon: HeartIcon,
    title: '用心服務',
    description: '提供全程陪伴式服務，成為客戶轉型路上的可靠夥伴'
  }
];

const teamMembers = [
  {
    name: '呂執行長',
    role: '創辦人暨執行長',
    description: '15年軟體開發經驗，專精AI導入策略規劃',
    achievements: ['交大資工碩士', '前科技公司技術總監', '多家企業AI顧問經驗']
  },
  {
    name: '郭技術長',
    role: '技術長',
    description: '10年AI研發經驗，專長機器學習與深度學習',
    achievements: ['台大電機博士', '多項AI技術研究成果', '業界技術領域專家']
  },
  {
    name: '羅項目經理',
    role: '專案管理總監',
    description: '豐富中小企業服務經驗，專精AI導入流程管理',
    achievements: ['敏捷專案管理認證', '跨產業服務經驗豐富', '客戶滿意度99%']
  }
];

const serviceEvolution = [
  { 
    phase: '需求洞察', 
    title: '深度市場研究',
    event: '深入了解台灣中小企業AI轉型的真實需求與痛點',
    icon: '🔍'
  },
  { 
    phase: '解決方案', 
    title: '實用導向設計',
    event: '開發適合台灣企業文化的AI導入方法論與工具',
    icon: '⚙️'
  },
  { 
    phase: '服務創新', 
    title: '陪伴式服務',
    event: '建立全程陪伴的AI導入服務模式，確保客戶成功',
    icon: '🤝'
  },
  { 
    phase: '技術整合', 
    title: '平台化發展',
    event: '整合多項AI技術，提供一站式智能化解決方案',
    icon: '🚀'
  },
  { 
    phase: '生態建構', 
    title: '夥伴網絡',
    event: '建立完整的合作夥伴生態系，擴大服務能量',
    icon: '🌐'
  }
];

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
              關於 <span className="gradient-text">智流科技</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              我們專注於為台灣中小企業提供實用的AI解決方案，
              讓AI真正融入日常工作，成為企業成長的驅動力。
            </p>
            <div className="flex justify-center">
              <div className="bg-blue-600 rounded-full p-4">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">我們的使命</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                讓每一家中小企業都能輕鬆享受AI帶來的效率提升和競爭優勢。
                我們相信，AI不應該是大企業的專利，而是所有企業都能負擔得起的實用工具。
              </p>
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-blue-900 mb-3">核心理念</h3>
                <p className="text-blue-700 text-sm">
                  &ldquo;將AI融入日常工作中&rdquo; - 我們不追求複雜的技術展示，
                  而是專注於解決實際問題，讓AI成為提升工作效率的得力助手。
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">我們的願景</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                成為台灣中小企業AI轉型的首選夥伴，
                讓台灣在全球AI浪潮中展現中小企業的創新活力。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">目標服務企業數</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-gray-600 text-sm">客戶成功率目標</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">核心價值觀</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              這些價值觀指導我們的每一個決策，確保為客戶提供最佳服務
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">專業團隊</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              經驗豐富的專家團隊，致力於為每位客戶提供最專業的AI導入服務
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-center font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm text-center mb-6">
                  {member.description}
                </p>
                <div className="space-y-2">
                  {member.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <StarIcon className="w-4 h-4 text-yellow-500 mr-2" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Evolution */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">服務理念發展</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我們持續精進服務模式，確保為台灣中小企業提供最適合的AI轉型方案
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceEvolution.map((evolution, index) => (
              <motion.div
                key={evolution.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{evolution.icon}</div>
                  <div className="text-sm font-medium text-blue-600 mb-1">
                    {evolution.phase}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {evolution.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {evolution.event}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">持續進化的服務承諾</h3>
              <p className="text-blue-100 leading-relaxed">
                我們相信每一家企業都有獨特的需求，因此我們的服務模式會隨著市場變化和客戶反饋持續優化，
                確保始終能為客戶提供最具價值的AI導入體驗。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 