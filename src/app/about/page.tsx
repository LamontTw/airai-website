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
    name: '李執行長',
    role: '創辦人暨執行長',
    description: '15年軟體開發經驗，專精AI導入策略規劃',
    achievements: ['台大資工碩士', '前科技公司技術總監', 'AI領域專利3項']
  },
  {
    name: '王技術長',
    role: '技術長',
    description: '10年AI研發經驗，專長機器學習與深度學習',
    achievements: ['交大資工博士', '國際期刊論文20篇', 'Google AI認證專家']
  },
  {
    name: '陳項目經理',
    role: '專案管理總監',
    description: '豐富中小企業服務經驗，專精AI導入流程管理',
    achievements: ['PMP國際專案管理師', '成功導入案例100+', '客戶滿意度99%']
  }
];

const milestones = [
  { year: '2020', event: '智流科技成立，專注中小企業AI解決方案' },
  { year: '2021', event: '完成首批10家企業AI導入，獲得市場認可' },
  { year: '2022', event: '開發自主AI Agent平台，服務客戶數突破50家' },
  { year: '2023', event: '獲選台灣AI新創企業獎，服務範圍擴展至全台' },
  { year: '2024', event: '累積導入案例超過100家，成為業界領導品牌' }
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

      {/* Company Milestones */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">發展歷程</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              從創立至今，我們持續成長，為更多企業提供AI轉型服務
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-gray-600">
                      {milestone.event}
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 