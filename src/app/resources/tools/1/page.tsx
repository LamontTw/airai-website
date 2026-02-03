'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChartBarIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

interface Question {
  id: string;
  category: string;
  question: string;
  type: 'multiple' | 'single' | 'scale' | 'text';
  options?: string[];
  weight: number;
  impact: 'high' | 'medium' | 'low';
}

interface Answer {
  questionId: string;
  value: string | number | string[];
  score: number;
}

interface AssessmentResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  recommendations: Recommendation[];
  priorities: Priority[];
  timeline: TimelineItem[];
  estimatedROI: string;
  estimatedCost: string;
  implementationTime: string;
}

interface Recommendation {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeframe: string;
  potentialROI: string;
}

interface Priority {
  area: string;
  score: number;
  maxScore: number;
  recommendations: string[];
}

interface TimelineItem {
  phase: string;
  duration: string;
  activities: string[];
  cost: string;
}

const questions: Question[] = [
  // 企業基本情況
  {
    id: 'company_size',
    category: '企業基本情況',
    question: '您的公司規模是？',
    type: 'single',
    options: ['10人以下', '11-50人', '51-100人', '101-500人', '500人以上'],
    weight: 1,
    impact: 'medium'
  },
  {
    id: 'industry',
    category: '企業基本情況',
    question: '您的主要行業領域是？',
    type: 'single',
    options: ['製造業', '零售/電商', '服務業', '金融業', '醫療健康', '教育', '物流運輸', '其他'],
    weight: 1,
    impact: 'medium'
  },
  {
    id: 'digital_maturity',
    category: '數位化程度',
    question: '目前公司的數位化程度如何？',
    type: 'scale',
    weight: 2,
    impact: 'high'
  },
  
  // 業務流程分析
  {
    id: 'repetitive_tasks',
    category: '業務流程分析',
    question: '您的團隊中有多少重複性工作？',
    type: 'scale',
    weight: 3,
    impact: 'high'
  },
  {
    id: 'data_volume',
    category: '業務流程分析',
    question: '您需要處理的數據量有多大？',
    type: 'single',
    options: ['很少數據處理', '中等數據量', '大量數據需要處理', '海量數據，難以處理'],
    weight: 2,
    impact: 'high'
  },
  {
    id: 'manual_processes',
    category: '業務流程分析',
    question: '以下哪些流程目前主要依靠人工處理？',
    type: 'multiple',
    options: ['客戶服務', '數據錄入', '報表製作', '庫存管理', '財務處理', '行銷活動', '品質檢測', '排程安排'],
    weight: 2,
    impact: 'high'
  },
  
  // 技術基礎設施
  {
    id: 'tech_infrastructure',
    category: '技術基礎設施',
    question: '目前的IT基礎設施完善度如何？',
    type: 'scale',
    weight: 2,
    impact: 'medium'
  },
  {
    id: 'cloud_usage',
    category: '技術基礎設施',
    question: '您目前使用雲端服務的程度？',
    type: 'single',
    options: ['完全沒有使用', '少量使用', '中等程度使用', '大量使用雲端服務'],
    weight: 1,
    impact: 'medium'
  },
  {
    id: 'data_integration',
    category: '技術基礎設施',
    question: '不同系統間的資料整合容易度？',
    type: 'scale',
    weight: 2,
    impact: 'medium'
  },
  
  // 預算與資源
  {
    id: 'budget_range',
    category: '預算與資源',
    question: '預計AI導入的年度預算範圍？',
    type: 'single',
    options: ['50萬以下', '50-100萬', '100-300萬', '300-500萬', '500萬以上'],
    weight: 2,
    impact: 'medium'
  },
  {
    id: 'technical_team',
    category: '預算與資源',
    question: '內部技術團隊的規模？',
    type: 'single',
    options: ['沒有技術團隊', '1-2人', '3-5人', '6-10人', '10人以上'],
    weight: 2,
    impact: 'medium'
  },
  {
    id: 'training_willingness',
    category: '預算與資源',
    question: '員工學習新技術的意願度？',
    type: 'scale',
    weight: 1,
    impact: 'low'
  },
  
  // 期望目標
  {
    id: 'main_goals',
    category: '期望目標',
    question: 'AI導入的主要目標是？',
    type: 'multiple',
    options: ['降低人工成本', '提升工作效率', '改善客戶體驗', '增加營收', '提升競爭力', '改善決策品質', '減少錯誤率', '創新產品服務'],
    weight: 2,
    impact: 'high'
  },
  {
    id: 'urgency',
    category: '期望目標',
    question: '希望多快看到AI導入的效果？',
    type: 'single',
    options: ['1-3個月', '3-6個月', '6-12個月', '1年以上'],
    weight: 1,
    impact: 'medium'
  },
  {
    id: 'roi_expectation',
    category: '期望目標',
    question: '期望的投資回報率？',
    type: 'single',
    options: ['100%以下', '100-200%', '200-300%', '300%以上'],
    weight: 1,
    impact: 'medium'
  }
];

const categories = [...new Set(questions.map(q => q.category))];

export default function AIAssessmentTool() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [currentCategory, setCurrentCategory] = useState(0);

  const categoryQuestions = questions.filter(q => q.category === categories[currentCategory]);
  const currentQuestion = categoryQuestions[currentStep];
  const totalQuestions = questions.length;
  const answeredQuestions = answers.length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const handleAnswer = (questionId: string, value: string | number | string[]) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    let score = 0;
    
    if (question.type === 'scale') {
      score = (value as number) * question.weight;
    } else if (question.type === 'single') {
      const optionIndex = question.options?.indexOf(value as string) || 0;
      score = ((optionIndex + 1) / (question.options?.length || 1)) * 10 * question.weight;
    } else if (question.type === 'multiple') {
      const selectedCount = (value as string[]).length;
      const totalOptions = question.options?.length || 1;
      score = (selectedCount / totalOptions) * 10 * question.weight;
    }

    const newAnswer: Answer = { questionId, value, score };
    setAnswers(prev => {
      const filtered = prev.filter(a => a.questionId !== questionId);
      return [...filtered, newAnswer];
    });
  };

  const nextStep = () => {
    if (currentStep < categoryQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
      setCurrentStep(0);
    } else {
      generateResult();
      setIsCompleted(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
      const prevCategoryQuestions = questions.filter(q => q.category === categories[currentCategory - 1]);
      setCurrentStep(prevCategoryQuestions.length - 1);
    }
  };

  const generateResult = () => {
    const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
    const maxScore = questions.reduce((sum, question) => sum + (10 * question.weight), 0);
    const percentage = (totalScore / maxScore) * 100;

    let level: 'beginner' | 'intermediate' | 'advanced';
    if (percentage < 40) level = 'beginner';
    else if (percentage < 70) level = 'intermediate';
    else level = 'advanced';

    const recommendations = generateRecommendations(answers, level);
    const priorities = generatePriorities(answers);
    const timeline = generateTimeline(level);

    const result: AssessmentResult = {
      totalScore,
      maxScore,
      percentage,
      level,
      recommendations,
      priorities,
      timeline,
      estimatedROI: level === 'advanced' ? '300-500%' : level === 'intermediate' ? '200-350%' : '150-250%',
      estimatedCost: level === 'advanced' ? '200-500萬' : level === 'intermediate' ? '100-300萬' : '50-150萬',
      implementationTime: level === 'advanced' ? '9-18個月' : level === 'intermediate' ? '6-12個月' : '3-9個月'
    };

    setResult(result);
  };

  const generateRecommendations = (answers: Answer[], level: string): Recommendation[] => {
    const recs: Recommendation[] = [];

    // 基於答案生成個人化建議
    const hasHighRepetitiveTasks = answers.find(a => a.questionId === 'repetitive_tasks')?.score || 0 > 6;
    const hasDataVolume = answers.find(a => a.questionId === 'data_volume')?.value === '大量數據需要處理' || answers.find(a => a.questionId === 'data_volume')?.value === '海量數據，難以處理';
    const lowDigitalMaturity = (answers.find(a => a.questionId === 'digital_maturity')?.score || 0) < 5;

    if (hasHighRepetitiveTasks) {
      recs.push({
        title: '流程自動化RPA導入',
        description: '針對重複性高的業務流程，導入RPA機器人自動化，可快速見效。',
        priority: 'high',
        category: '自動化',
        difficulty: 'easy',
        timeframe: '2-4個月',
        potentialROI: '200-400%'
      });
    }

    if (hasDataVolume) {
      recs.push({
        title: 'AI數據分析平台',
        description: '建立智能數據分析系統，自動化報表生成與洞察發現。',
        priority: 'high',
        category: '數據分析',
        difficulty: 'medium',
        timeframe: '4-8個月',
        potentialROI: '250-450%'
      });
    }

    if (lowDigitalMaturity) {
      recs.push({
        title: '數位基礎建設升級',
        description: '優先完善數位基礎設施，為後續AI導入打好基礎。',
        priority: 'high',
        category: '基礎建設',
        difficulty: 'medium',
        timeframe: '3-6個月',
        potentialROI: '150-250%'
      });
    }

    // 通用建議
    recs.push({
      title: 'AI員工培訓計畫',
      description: '提升團隊AI素養，確保技術導入的成功率。',
      priority: 'medium',
      category: '人才培育',
      difficulty: 'easy',
      timeframe: '1-3個月',
      potentialROI: '100-200%'
    });

    return recs.slice(0, 6);
  };

  const generatePriorities = (answers: Answer[]): Priority[] => {
    const categories = {
      '流程自動化': 0,
      '數據分析': 0,
      '客戶服務': 0,
      '技術基礎': 0,
      '人才培育': 0
    };

    // 基於答案計算各領域優先級
    answers.forEach(answer => {
      if (answer.questionId === 'repetitive_tasks') {
        categories['流程自動化'] += answer.score;
      }
      if (answer.questionId === 'data_volume') {
        categories['數據分析'] += answer.score;
      }
      // 更多計算邏輯...
    });

    return Object.entries(categories).map(([area, score]) => ({
      area,
      score: Math.round(score),
      maxScore: 30,
      recommendations: [`提升${area}能力`, `導入相關AI工具`, `建立標準流程`]
    }));
  };

  const generateTimeline = (level: string): TimelineItem[] => {
    if (level === 'beginner') {
      return [
        {
          phase: '準備階段',
          duration: '1-2個月',
          activities: ['需求調研', '技術評估', '團隊培訓', '基礎設施準備'],
          cost: '10-30萬'
        },
        {
          phase: '試點導入',
          duration: '2-4個月',
          activities: ['選定試點流程', '開發POC', '測試驗證', '效果評估'],
          cost: '30-80萬'
        },
        {
          phase: '規模化部署',
          duration: '3-6個月',
          activities: ['系統整合', '全面部署', '人員培訓', '持續優化'],
          cost: '50-120萬'
        }
      ];
    }
    // 更多級別的時程規劃...
    return [];
  };

  const getCurrentAnswer = (questionId: string) => {
    return answers.find(a => a.questionId === questionId)?.value;
  };

  const isAnswered = (questionId: string) => {
    return answers.some(a => a.questionId === questionId);
  };

  if (isCompleted && result) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Results Header */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-6">
                <CheckCircleIcon className="w-12 h-12 text-green-600 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  評估完成！
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                根據您的回答，我們為您生成了專屬的AI導入建議報告
              </p>
              
              {/* Score Display */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">
                    {Math.round(result.percentage)}%
                  </div>
                  <div className="text-lg text-gray-600 mb-4">AI準備度分數</div>
                  <div className={`inline-block px-6 py-2 rounded-full text-lg font-semibold ${
                    result.level === 'advanced' ? 'bg-green-100 text-green-700' :
                    result.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {result.level === 'advanced' ? '高級準備度' :
                     result.level === 'intermediate' ? '中級準備度' : '初級準備度'}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <CurrencyDollarIcon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {result.estimatedROI}
                  </div>
                  <div className="text-gray-600">預期投資回報率</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <ClockIcon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {result.implementationTime}
                  </div>
                  <div className="text-gray-600">預估實施時間</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <ChartBarIcon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {result.estimatedCost}
                  </div>
                  <div className="text-gray-600">預估投資金額</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Detailed Results */}
        <section className="section-padding">
          <div className="container-max">
            {/* Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <LightBulbIcon className="w-8 h-8 text-yellow-600 mr-3" />
                個人化建議
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-gray-900">{rec.title}</h3>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        rec.priority === 'high' ? 'bg-red-100 text-red-700' :
                        rec.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {rec.priority === 'high' ? '高優先級' :
                         rec.priority === 'medium' ? '中優先級' : '低優先級'}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{rec.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div>時程：{rec.timeframe}</div>
                      <div>預期ROI：{rec.potentialROI}</div>
                      <div>難度：{rec.difficulty === 'easy' ? '簡單' : rec.difficulty === 'medium' ? '中等' : '困難'}</div>
                      <div>類別：{rec.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Implementation Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <ClockIcon className="w-8 h-8 text-blue-600 mr-3" />
                實施時程規劃
              </h2>
              <div className="space-y-6">
                {result.timeline.map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{phase.phase}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>期間：{phase.duration}</span>
                        <span>預算：{phase.cost}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI需求 <span className="gradient-text">評估工具</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              透過科學化問卷，為您量身打造AI導入策略與實施建議
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-lg mx-auto">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>進度</span>
                <span>{answeredQuestions}/{totalQuestions}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-600 h-2 rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Assessment Form */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentCategory}-${currentStep}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              {/* Category Header */}
              <div className="mb-8">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {categories[currentCategory]} ({currentStep + 1}/{categoryQuestions.length})
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {currentQuestion.question}
                </h2>
                
                {currentQuestion.impact && (
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    currentQuestion.impact === 'high' ? 'bg-red-100 text-red-700' :
                    currentQuestion.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    <ExclamationTriangleIcon className="w-4 h-4 mr-1" />
                    {currentQuestion.impact === 'high' ? '高影響度' :
                     currentQuestion.impact === 'medium' ? '中影響度' : '低影響度'}
                  </div>
                )}
              </div>

              {/* Answer Options */}
              <div className="mb-8">
                {currentQuestion.type === 'single' && (
                  <div className="space-y-3">
                    {currentQuestion.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(currentQuestion.id, option)}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                          getCurrentAnswer(currentQuestion.id) === option
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border-2 mr-3 ${
                            getCurrentAnswer(currentQuestion.id) === option
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {getCurrentAnswer(currentQuestion.id) === option && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                            )}
                          </div>
                          {option}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'multiple' && (
                  <div className="space-y-3">
                    {currentQuestion.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          const currentAnswers = (getCurrentAnswer(currentQuestion.id) as string[]) || [];
                          const newAnswers = currentAnswers.includes(option)
                            ? currentAnswers.filter(a => a !== option)
                            : [...currentAnswers, option];
                          handleAnswer(currentQuestion.id, newAnswers);
                        }}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                          ((getCurrentAnswer(currentQuestion.id) as string[]) || []).includes(option)
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded border-2 mr-3 ${
                            ((getCurrentAnswer(currentQuestion.id) as string[]) || []).includes(option)
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {((getCurrentAnswer(currentQuestion.id) as string[]) || []).includes(option) && (
                              <CheckCircleIcon className="w-3 h-3 text-white mx-auto" />
                            )}
                          </div>
                          {option}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'scale' && (
                  <div className="space-y-6">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>非常不同意</span>
                      <span>中立</span>
                      <span>非常同意</span>
                    </div>
                    <div className="flex justify-between space-x-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => (
                        <button
                          key={score}
                          onClick={() => handleAnswer(currentQuestion.id, score)}
                          className={`w-12 h-12 rounded-full border-2 font-semibold transition-all duration-200 ${
                            getCurrentAnswer(currentQuestion.id) === score
                              ? 'border-blue-500 bg-blue-500 text-white scale-110'
                              : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                          }`}
                        >
                          {score}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentCategory === 0 && currentStep === 0}
                  className="flex items-center px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <ChevronLeftIcon className="w-5 h-5 mr-2" />
                  上一題
                </button>

                <button
                  onClick={nextStep}
                  disabled={!isAnswered(currentQuestion.id)}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {currentCategory === categories.length - 1 && currentStep === categoryQuestions.length - 1 ? '完成評估' : '下一題'}
                  <ChevronRightIcon className="w-5 h-5 ml-2" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
} 