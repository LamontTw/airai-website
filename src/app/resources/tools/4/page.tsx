'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  CpuChipIcon,
  LightBulbIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  StarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  CommandLineIcon,
  ChatBubbleLeftRightIcon,
  CameraIcon,
  DocumentTextIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  PauseIcon,
  HandRaisedIcon,
  Cog6ToothIcon,
  SpeakerWaveIcon,
  CloudIcon,
  ServerIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  PlusIcon,
  MinusIcon,
  InformationCircleIcon,
  FireIcon,
  SparklesIcon,
  BoltIcon,
  TrophyIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

interface AITechnology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: any;
  maturity: 'emerging' | 'growing' | 'mature';
  complexity: 'low' | 'medium' | 'high';
  cost: 'low' | 'medium' | 'high';
  timeToValue: string;
  useCases: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  providers: Provider[];
  color: string;
}

interface Provider {
  name: string;
  type: 'cloud' | 'opensource' | 'enterprise';
  pricing: string;
  support: 'basic' | 'standard' | 'premium';
  features: string[];
}

interface SelectionCriteria {
  id: string;
  name: string;
  description: string;
  weight: number;
  options: CriteriaOption[];
}

interface CriteriaOption {
  value: string;
  label: string;
  score: number;
}

interface DecisionMatrix {
  technology: string;
  scores: { [key: string]: number };
  totalScore: number;
  recommendation: string;
}

export default function AITechnologySelectionGuide() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [criteriaWeights, setCriteriaWeights] = useState<{ [key: string]: number }>({});
  const [showDecisionMatrix, setShowDecisionMatrix] = useState(false);

  const aiTechnologies: AITechnology[] = [
    {
      id: 'llm',
      name: '大型語言模型 (LLM)',
      category: '自然語言處理',
      description: '基於Transformer架構的大規模語言模型，如GPT、Claude等',
      icon: ChatBubbleLeftRightIcon,
      maturity: 'growing',
      complexity: 'medium',
      cost: 'medium',
      timeToValue: '2-4週',
      useCases: ['智能客服', '內容生成', '文檔摘要', '程式輔助', '翻譯服務'],
      pros: ['快速部署', '多功能應用', '持續改進', '生態豐富'],
      cons: ['運算成本較高', '幻覺問題', '數據隱私考量', '需要精細調優'],
      bestFor: ['內容創作業', '客服中心', '教育培訓', '軟體開發'],
      providers: [
        { name: 'OpenAI GPT', type: 'cloud', pricing: '按Token計費', support: 'standard', features: ['API接入', '多語言支援', '高品質輸出'] },
        { name: 'Anthropic Claude', type: 'cloud', pricing: '按使用量計費', support: 'premium', features: ['安全性優化', '長文本處理', '專業支援'] },
        { name: 'Hugging Face', type: 'opensource', pricing: '免費開源', support: 'basic', features: ['開源模型', '自主部署', '客製化'] }
      ],
      color: 'blue'
    },
    {
      id: 'computer-vision',
      name: '計算機視覺',
      category: '圖像識別',
      description: '圖像和視頻的智能分析與處理技術',
      icon: CameraIcon,
      maturity: 'mature',
      complexity: 'high',
      cost: 'high',
      timeToValue: '8-12週',
      useCases: ['品質檢測', '人臉識別', '物體偵測', '醫療影像', '自動駕駛'],
      pros: ['技術成熟', '準確率高', '應用廣泛', '硬體支援好'],
      cons: ['開發複雜', '需要大量數據', '硬體要求高', '維護成本高'],
      bestFor: ['製造業', '安防監控', '醫療機構', '零售業'],
      providers: [
        { name: 'Google Vision API', type: 'cloud', pricing: '按圖片計費', support: 'premium', features: ['預訓練模型', '高準確率', '多語言OCR'] },
        { name: 'AWS Rekognition', type: 'cloud', pricing: '按使用量計費', support: 'premium', features: ['人臉分析', '內容審核', '實時處理'] },
        { name: 'OpenCV', type: 'opensource', pricing: '免費開源', support: 'basic', features: ['完整工具包', '跨平台', '活躍社群'] }
      ],
      color: 'green'
    },
    {
      id: 'ml-prediction',
      name: '機器學習預測',
      category: '預測分析',
      description: '基於歷史數據進行未來趨勢預測的機器學習模型',
      icon: ArrowTrendingUpIcon,
      maturity: 'mature',
      complexity: 'medium',
      cost: 'medium',
      timeToValue: '4-8週',
      useCases: ['需求預測', '風險評估', '價格優化', '庫存管理', '客戶流失預測'],
      pros: ['ROI明確', '技術成熟', '工具豐富', '可解釋性好'],
      cons: ['需要品質數據', '模型維護', '專業知識需求', '時間敏感性'],
      bestFor: ['電商平台', '金融機構', '供應鏈管理', '製造業'],
      providers: [
        { name: 'Azure ML', type: 'cloud', pricing: '按運算時間', support: 'premium', features: ['自動化ML', '模型管理', '部署簡單'] },
        { name: 'Google AutoML', type: 'cloud', pricing: '按模型訓練', support: 'standard', features: ['無程式碼', '預建模型', '易於使用'] },
        { name: 'Scikit-learn', type: 'opensource', pricing: '免費開源', support: 'basic', features: ['Python生態', '算法豐富', '文檔完整'] }
      ],
      color: 'purple'
    },
    {
      id: 'recommendation',
      name: '推薦系統',
      category: '個性化服務',
      description: '基於用戶行為和偏好的個性化推薦引擎',
      icon: StarIcon,
      maturity: 'mature',
      complexity: 'medium',
      cost: 'low',
      timeToValue: '6-10週',
      useCases: ['商品推薦', '內容推薦', '廣告投放', '社交推薦', '音樂影片推薦'],
      pros: ['提升轉換率', '用戶體驗佳', '技術成熟', '可量化效果'],
      cons: ['冷啟動問題', '數據依賴', '算法偏見', '隱私考量'],
      bestFor: ['電商平台', '內容平台', '社交媒體', '娛樂服務'],
      providers: [
        { name: 'Amazon Personalize', type: 'cloud', pricing: '按請求計費', support: 'premium', features: ['即時推薦', '批量推薦', 'A/B測試'] },
        { name: 'TensorFlow Recommenders', type: 'opensource', pricing: '免費開源', support: 'basic', features: ['深度學習', '擴展性好', '客製化'] },
        { name: 'Apache Mahout', type: 'opensource', pricing: '免費開源', support: 'basic', features: ['分散式處理', '算法豐富', '大數據支援'] }
      ],
      color: 'orange'
    },
    {
      id: 'speech-ai',
      name: '語音AI',
      category: '語音處理',
      description: '語音識別、語音合成和語音理解技術',
      icon: SpeakerWaveIcon,
      maturity: 'growing',
      complexity: 'medium',
      cost: 'medium',
      timeToValue: '4-6週',
      useCases: ['語音助手', '語音轉文字', '語音客服', '語音控制', '多語言翻譯'],
      pros: ['互動自然', '無接觸操作', '多語言支援', '持續改進'],
      cons: ['噪音敏感', '方言識別', '隱私問題', '網路依賴'],
      bestFor: ['智能設備', '客服中心', '教育平台', '汽車產業'],
      providers: [
        { name: 'Google Speech-to-Text', type: 'cloud', pricing: '按分鐘計費', support: 'premium', features: ['120+語言', '實時識別', '說話者分離'] },
        { name: 'Azure Speech Services', type: 'cloud', pricing: '按使用量計費', support: 'premium', features: ['自定義語音', '語音翻譯', '批量處理'] },
        { name: 'Mozilla DeepSpeech', type: 'opensource', pricing: '免費開源', support: 'basic', features: ['離線運行', '隱私保護', '可定制'] }
      ],
      color: 'red'
    },
    {
      id: 'robotic-automation',
      name: '機器人流程自動化 (RPA)',
      category: '流程自動化',
      description: '模擬人類操作的軟體機器人，自動化重複性任務',
      icon: Cog6ToothIcon,
      maturity: 'mature',
      complexity: 'low',
      cost: 'low',
      timeToValue: '2-6週',
      useCases: ['資料輸入', '報表生成', '郵件處理', '系統整合', '合規檢查'],
      pros: ['快速實施', '投資回報高', '非侵入性', '易於維護'],
      cons: ['流程依賴', '變更敏感', '功能局限', '需要維護'],
      bestFor: ['金融業', '人力資源', '會計業務', '客服部門'],
      providers: [
        { name: 'UiPath', type: 'enterprise', pricing: '年度授權', support: 'premium', features: ['視覺化設計', 'AI整合', '企業級管理'] },
        { name: 'Automation Anywhere', type: 'enterprise', pricing: '按機器人計費', support: 'premium', features: ['雲端部署', '認知自動化', '分析儀表板'] },
        { name: 'Microsoft Power Automate', type: 'cloud', pricing: '訂閱制', support: 'standard', features: ['Office整合', '連接器豐富', '低代碼平台'] }
      ],
      color: 'indigo'
    }
  ];

  const selectionCriteria: SelectionCriteria[] = [
    {
      id: 'business-need',
      name: '業務需求匹配度',
      description: '技術解決方案與實際業務需求的匹配程度',
      weight: 25,
      options: [
        { value: 'perfect', label: '完全匹配', score: 5 },
        { value: 'good', label: '高度匹配', score: 4 },
        { value: 'moderate', label: '中等匹配', score: 3 },
        { value: 'low', label: '低度匹配', score: 2 },
        { value: 'poor', label: '不匹配', score: 1 }
      ]
    },
    {
      id: 'technical-maturity',
      name: '技術成熟度',
      description: '技術的穩定性和成熟程度',
      weight: 20,
      options: [
        { value: 'mature', label: '成熟穩定', score: 5 },
        { value: 'growing', label: '快速發展', score: 4 },
        { value: 'emerging', label: '新興技術', score: 3 },
        { value: 'experimental', label: '實驗階段', score: 2 },
        { value: 'prototype', label: '原型階段', score: 1 }
      ]
    },
    {
      id: 'implementation-cost',
      name: '實施成本',
      description: '包含開發、部署、維護的總體成本',
      weight: 20,
      options: [
        { value: 'very-low', label: '極低成本', score: 5 },
        { value: 'low', label: '低成本', score: 4 },
        { value: 'medium', label: '中等成本', score: 3 },
        { value: 'high', label: '高成本', score: 2 },
        { value: 'very-high', label: '極高成本', score: 1 }
      ]
    },
    {
      id: 'time-to-market',
      name: '上市時間',
      description: '從開始實施到正式投入使用的時間',
      weight: 15,
      options: [
        { value: 'immediate', label: '立即可用', score: 5 },
        { value: 'weeks', label: '數週內', score: 4 },
        { value: 'months', label: '數月內', score: 3 },
        { value: 'quarters', label: '數季內', score: 2 },
        { value: 'years', label: '一年以上', score: 1 }
      ]
    },
    {
      id: 'team-capability',
      name: '團隊能力',
      description: '內部團隊的技術能力和經驗',
      weight: 10,
      options: [
        { value: 'expert', label: '專家級別', score: 5 },
        { value: 'advanced', label: '進階水平', score: 4 },
        { value: 'intermediate', label: '中等水平', score: 3 },
        { value: 'beginner', label: '初學水平', score: 2 },
        { value: 'none', label: '無相關經驗', score: 1 }
      ]
    },
    {
      id: 'scalability',
      name: '擴展性需求',
      description: '未來業務成長對技術擴展的要求',
      weight: 10,
      options: [
        { value: 'unlimited', label: '無限擴展', score: 5 },
        { value: 'high', label: '高擴展性', score: 4 },
        { value: 'medium', label: '中等擴展', score: 3 },
        { value: 'low', label: '低擴展需求', score: 2 },
        { value: 'fixed', label: '固定規模', score: 1 }
      ]
    }
  ];

  const categories = [
    { id: 'nlp', name: '自然語言處理', icon: ChatBubbleLeftRightIcon, color: 'blue' },
    { id: 'vision', name: '圖像識別', icon: CameraIcon, color: 'green' },
    { id: 'prediction', name: '預測分析', icon: ArrowTrendingUpIcon, color: 'purple' },
    { id: 'personalization', name: '個性化服務', icon: StarIcon, color: 'orange' },
    { id: 'speech', name: '語音處理', icon: SpeakerWaveIcon, color: 'red' },
    { id: 'automation', name: '流程自動化', icon: Cog6ToothIcon, color: 'indigo' }
  ];

  const tabs = [
    { id: 'overview', label: '技術概覽', icon: CpuChipIcon },
    { id: 'categories', label: '技術分類', icon: BuildingOfficeIcon },
    { id: 'comparison', label: '技術比較', icon: ChartBarIcon },
    { id: 'decision-matrix', label: '決策矩陣', icon: MagnifyingGlassIcon },
    { id: 'guide', label: '選型指南', icon: LightBulbIcon }
  ];

  const maturityColors = {
    emerging: 'bg-yellow-100 text-yellow-800',
    growing: 'bg-blue-100 text-blue-800',
    mature: 'bg-green-100 text-green-800'
  };

  const complexityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const costColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <CpuChipIcon className="w-12 h-12 text-purple-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI技術選型指南
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              科學化的AI技術評估工具，幫助您選擇最適合的AI解決方案
            </p>
            
            {/* Guide Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">15+</div>
                <div className="text-sm text-gray-600">AI技術</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">6</div>
                <div className="text-sm text-gray-600">主要分類</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">100+</div>
                <div className="text-sm text-gray-600">應用場景</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">服務商</div>
              </div>
            </div>

            {/* TL;DR - GEO 優化 */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-left">
              <p className="sr-only">摘要 TL;DR</p>
              <p className="text-sm text-purple-800 leading-relaxed">
                AI 技術選型需考量業務需求、資料特性、預算規模與團隊能力四大面向。本工具涵蓋 50+ 種 AI 服務商的比較矩陣，從機器學習、自然語言處理到電腦視覺，協助企業依據 8 項評估指標（準確度、成本、易用性等）做出科學化的技術決策。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Tabs */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <CpuChipIcon className="w-5 h-5 text-purple-600 mr-2" />
                  選型工具
                </h3>
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-purple-100 text-purple-700 font-medium'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CpuChipIcon className="w-8 h-8 text-purple-600 mr-3" />
                      技術概覽
                    </h2>
                    
                    <div className="prose prose-lg max-w-none mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        AI技術選型是企業數位轉型的關鍵決策。本指南提供科學化的評估框架，
                        幫助您根據業務需求、技術成熟度、實施成本等多個維度，選擇最適合的AI解決方案。
                      </p>
                    </div>

                    {/* Selection Framework */}
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold text-purple-900 mb-4">🎯 選型框架</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-purple-800 mb-3">核心評估維度</h4>
                          <ul className="space-y-2 text-purple-700 text-sm">
                            <li>• <strong>業務匹配度</strong>：解決方案與需求的契合程度</li>
                            <li>• <strong>技術成熟度</strong>：技術的穩定性和可靠性</li>
                            <li>• <strong>實施成本</strong>：總體擁有成本評估</li>
                            <li>• <strong>時間效益</strong>：從導入到產生價值的時間</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-purple-800 mb-3">決策考量因素</h4>
                          <ul className="space-y-2 text-purple-700 text-sm">
                            <li>• <strong>團隊能力</strong>：內部技術團隊的準備度</li>
                            <li>• <strong>擴展需求</strong>：未來業務成長的技術要求</li>
                            <li>• <strong>風險承受</strong>：組織對新技術的接受度</li>
                            <li>• <strong>合規要求</strong>：行業法規與安全標準</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Technology Landscape */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">🗺️ 技術地圖</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CheckCircleIcon className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="font-semibold text-blue-800 mb-2">成熟技術</h4>
                          <p className="text-blue-600 text-sm">機器學習預測、推薦系統、RPA</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <RocketLaunchIcon className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="font-semibold text-blue-800 mb-2">快速發展</h4>
                          <p className="text-blue-600 text-sm">大型語言模型、語音AI、生成式AI</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <BeakerIcon className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="font-semibold text-blue-800 mb-2">新興技術</h4>
                          <p className="text-blue-600 text-sm">多模態AI、具身智能、AGI</p>
                        </div>
                      </div>
                    </div>

                    {/* Selection Process */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-green-900 mb-4">📋 選型流程</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full font-bold flex items-center justify-center mr-4 text-sm">1</div>
                          <div>
                            <h4 className="font-semibold text-green-800">需求分析</h4>
                            <p className="text-green-600 text-sm">明確業務問題與技術需求</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full font-bold flex items-center justify-center mr-4 text-sm">2</div>
                          <div>
                            <h4 className="font-semibold text-green-800">技術篩選</h4>
                            <p className="text-green-600 text-sm">基於需求篩選候選技術</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full font-bold flex items-center justify-center mr-4 text-sm">3</div>
                          <div>
                            <h4 className="font-semibold text-green-800">評估比較</h4>
                            <p className="text-green-600 text-sm">使用決策矩陣進行量化評估</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full font-bold flex items-center justify-center mr-4 text-sm">4</div>
                          <div>
                            <h4 className="font-semibold text-green-800">方案確定</h4>
                            <p className="text-green-600 text-sm">選擇最優方案並制定實施計畫</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Categories Tab */}
              {activeTab === 'categories' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <BuildingOfficeIcon className="w-8 h-8 text-blue-600 mr-3" />
                      技術分類
                    </h2>
                    
                    {/* Category Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {categories.map((category, index) => (
                        <motion.button
                          key={category.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                          className={`p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                            selectedCategory === category.id
                              ? `border-${category.color}-500 bg-${category.color}-50`
                              : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <category.icon className={`w-12 h-12 text-${category.color}-600 mb-4`} />
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                          <p className="text-gray-600 text-sm">
                            點擊查看相關技術
                          </p>
                        </motion.button>
                      ))}
                    </div>

                    {/* Technology Details */}
                    <div className="space-y-6">
                      {aiTechnologies.map((tech, index) => (
                        <motion.div
                          key={tech.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                          <button
                            onClick={() => setSelectedTech(selectedTech === tech.id ? null : tech.id)}
                            className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <tech.icon className={`w-12 h-12 text-${tech.color}-600 mr-4`} />
                                <div>
                                  <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                                  <p className="text-gray-600 mt-1">{tech.description}</p>
                                  <div className="flex gap-2 mt-2">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${maturityColors[tech.maturity]}`}>
                                      {tech.maturity === 'emerging' ? '新興' : tech.maturity === 'growing' ? '發展中' : '成熟'}
                                    </span>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${complexityColors[tech.complexity]}`}>
                                      {tech.complexity === 'low' ? '低複雜度' : tech.complexity === 'medium' ? '中複雜度' : '高複雜度'}
                                    </span>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${costColors[tech.cost]}`}>
                                      {tech.cost === 'low' ? '低成本' : tech.cost === 'medium' ? '中成本' : '高成本'}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="text-right mr-4">
                                  <div className="text-sm text-gray-500">導入時間</div>
                                  <div className="font-semibold text-gray-900">{tech.timeToValue}</div>
                                </div>
                                <ChevronDownIcon className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                                  selectedTech === tech.id ? 'rotate-180' : ''
                                }`} />
                              </div>
                            </div>
                          </button>
                          
                          {selectedTech === tech.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-200 p-6 bg-gray-50"
                            >
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Use Cases and Features */}
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-4">🎯 主要應用場景</h4>
                                  <div className="space-y-2 mb-6">
                                    {tech.useCases.map((useCase, idx) => (
                                      <div key={idx} className="flex items-center">
                                        <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" />
                                        <span className="text-gray-700 text-sm">{useCase}</span>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <h4 className="font-semibold text-gray-900 mb-4">✅ 優勢特點</h4>
                                  <div className="space-y-2">
                                    {tech.pros.map((pro, idx) => (
                                      <div key={idx} className="flex items-center">
                                        <SparklesIcon className="w-4 h-4 text-blue-600 mr-2" />
                                        <span className="text-gray-700 text-sm">{pro}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* Challenges and Providers */}
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-4">⚠️ 挑戰與限制</h4>
                                  <div className="space-y-2 mb-6">
                                    {tech.cons.map((con, idx) => (
                                      <div key={idx} className="flex items-center">
                                        <ExclamationCircleIcon className="w-4 h-4 text-orange-600 mr-2" />
                                        <span className="text-gray-700 text-sm">{con}</span>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <h4 className="font-semibold text-gray-900 mb-4">🏢 推薦服務商</h4>
                                  <div className="space-y-3">
                                    {tech.providers.slice(0, 3).map((provider, idx) => (
                                      <div key={idx} className="bg-white rounded-lg p-3 border border-gray-200">
                                        <div className="flex items-center justify-between mb-1">
                                          <h5 className="font-medium text-gray-900">{provider.name}</h5>
                                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                                            provider.type === 'cloud' ? 'bg-blue-100 text-blue-700' :
                                            provider.type === 'opensource' ? 'bg-green-100 text-green-700' :
                                            'bg-purple-100 text-purple-700'
                                          }`}>
                                            {provider.type === 'cloud' ? '雲端服務' : provider.type === 'opensource' ? '開源' : '企業版'}
                                          </span>
                                        </div>
                                        <p className="text-gray-600 text-xs">{provider.pricing}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Comparison Tab */}
              {activeTab === 'comparison' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ChartBarIcon className="w-8 h-8 text-green-600 mr-3" />
                      技術比較
                    </h2>
                    
                    {/* Comparison Matrix */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">技術名稱</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-900 border border-gray-200">成熟度</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-900 border border-gray-200">複雜度</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-900 border border-gray-200">成本</th>
                            <th className="text-center py-3 px-4 font-semibold text-gray-900 border border-gray-200">導入時間</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900 border border-gray-200">適用場景</th>
                          </tr>
                        </thead>
                        <tbody>
                          {aiTechnologies.map((tech, idx) => (
                            <tr key={tech.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-25'}>
                              <td className="py-3 px-4 border border-gray-200">
                                <div className="flex items-center">
                                  <tech.icon className={`w-6 h-6 text-${tech.color}-600 mr-3`} />
                                  <div>
                                    <div className="font-medium text-gray-900">{tech.name}</div>
                                    <div className="text-gray-500 text-xs">{tech.category}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-center border border-gray-200">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${maturityColors[tech.maturity]}`}>
                                  {tech.maturity === 'emerging' ? '新興' : tech.maturity === 'growing' ? '發展中' : '成熟'}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-center border border-gray-200">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${complexityColors[tech.complexity]}`}>
                                  {tech.complexity === 'low' ? '低' : tech.complexity === 'medium' ? '中' : '高'}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-center border border-gray-200">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${costColors[tech.cost]}`}>
                                  {tech.cost === 'low' ? '低' : tech.cost === 'medium' ? '中' : '高'}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-center border border-gray-200 font-medium">
                                {tech.timeToValue}
                              </td>
                              <td className="py-3 px-4 border border-gray-200">
                                <div className="text-gray-700">
                                  {tech.bestFor.slice(0, 2).join(', ')}
                                  {tech.bestFor.length > 2 && '...'}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Quick Filters */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">🔍 快速篩選建議</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                            <RocketLaunchIcon className="w-5 h-5 mr-2" />
                            快速見效
                          </h4>
                          <p className="text-blue-600 text-sm mb-2">建議技術：</p>
                          <ul className="text-blue-700 text-sm space-y-1">
                            <li>• 機器人流程自動化 (RPA)</li>
                            <li>• 大型語言模型 (LLM)</li>
                            <li>• 推薦系統</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                            <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                            成本敏感
                          </h4>
                          <p className="text-blue-600 text-sm mb-2">建議技術：</p>
                          <ul className="text-blue-700 text-sm space-y-1">
                            <li>• 開源機器學習框架</li>
                            <li>• 機器人流程自動化</li>
                            <li>• 雲端API服務</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-4 border border-blue-200">
                          <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                            <TrophyIcon className="w-5 h-5 mr-2" />
                            技術領先
                          </h4>
                          <p className="text-blue-600 text-sm mb-2">建議技術：</p>
                          <ul className="text-blue-700 text-sm space-y-1">
                            <li>• 大型語言模型</li>
                            <li>• 計算機視覺</li>
                            <li>• 多模態AI</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Decision Matrix Tab */}
              {activeTab === 'decision-matrix' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <MagnifyingGlassIcon className="w-8 h-8 text-orange-600 mr-3" />
                      決策矩陣
                    </h2>
                    
                    <div className="prose prose-lg max-w-none mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        使用量化評估方法，根據您的具體需求和偏好，為不同AI技術打分排序，
                        幫助您做出數據驅動的技術選型決策。
                      </p>
                    </div>

                    {/* Criteria Configuration */}
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold text-orange-900 mb-4">⚖️ 評估標準設定</h3>
                      <div className="space-y-6">
                        {selectionCriteria.map((criteria) => (
                          <div key={criteria.id} className="bg-white rounded-lg p-4 border border-orange-200">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h4 className="font-semibold text-orange-800">{criteria.name}</h4>
                                <p className="text-orange-600 text-sm">{criteria.description}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-orange-900 font-bold text-lg">{criteria.weight}%</div>
                                <div className="text-orange-600 text-xs">權重</div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {criteria.options.map((option) => (
                                <button
                                  key={option.value}
                                  className={`px-3 py-1 rounded text-sm transition-colors duration-200 ${
                                    criteriaWeights[criteria.id] === option.score
                                      ? 'bg-orange-600 text-white'
                                      : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                                  }`}
                                  onClick={() => setCriteriaWeights({
                                    ...criteriaWeights,
                                    [criteria.id]: option.score
                                  })}
                                >
                                  {option.label} ({option.score})
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-center mt-6">
                        <button
                          onClick={() => setShowDecisionMatrix(true)}
                          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center"
                        >
                          <ChartBarIcon className="w-5 h-5 mr-2" />
                          生成評估結果
                        </button>
                      </div>
                    </div>

                    {/* Decision Results */}
                    {showDecisionMatrix && Object.keys(criteriaWeights).length > 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">📊 評估結果</h3>
                        <div className="space-y-4">
                          {aiTechnologies
                            .map((tech) => {
                              const totalScore = selectionCriteria.reduce((sum, criteria) => {
                                const score = criteriaWeights[criteria.id] || 3;
                                const weight = criteria.weight / 100;
                                return sum + (score * weight);
                              }, 0);
                              return { ...tech, totalScore };
                            })
                            .sort((a, b) => b.totalScore - a.totalScore)
                            .slice(0, 5)
                            .map((tech, index) => (
                              <div
                                key={tech.id}
                                className={`bg-white rounded-lg p-4 border-2 ${
                                  index === 0 ? 'border-green-500' : 'border-green-200'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full font-bold flex items-center justify-center mr-4 text-sm ${
                                      index === 0 ? 'bg-green-600 text-white' :
                                      index === 1 ? 'bg-green-400 text-white' :
                                      'bg-green-200 text-green-800'
                                    }`}>
                                      {index + 1}
                                    </div>
                                    <tech.icon className={`w-8 h-8 text-${tech.color}-600 mr-3`} />
                                    <div>
                                      <h4 className="font-bold text-gray-900">{tech.name}</h4>
                                      <p className="text-gray-600 text-sm">{tech.category}</p>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-2xl font-bold text-green-600">
                                      {tech.totalScore.toFixed(1)}
                                    </div>
                                    <div className="text-green-600 text-sm">綜合評分</div>
                                  </div>
                                </div>
                                {index === 0 && (
                                  <div className="mt-3 p-3 bg-green-100 rounded-lg">
                                    <p className="text-green-800 text-sm font-medium">
                                      🏆 推薦選擇：基於您的評估標準，這是最適合的AI技術方案
                                    </p>
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Guide Tab */}
              {activeTab === 'guide' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <LightBulbIcon className="w-8 h-8 text-yellow-600 mr-3" />
                      選型指南
                    </h2>
                    
                    {/* Selection Guidelines */}
                    <div className="space-y-6">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-yellow-900 mb-4">🎯 按業務需求選型</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-yellow-800 mb-3">客戶服務優化</h4>
                            <ul className="space-y-2 text-yellow-700 text-sm">
                              <li>• <strong>智能客服</strong>：大型語言模型 (LLM)</li>
                              <li>• <strong>語音客服</strong>：語音AI + NLP</li>
                              <li>• <strong>情感分析</strong>：自然語言處理</li>
                              <li>• <strong>客戶分群</strong>：機器學習預測</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-yellow-800 mb-3">營運效率提升</h4>
                            <ul className="space-y-2 text-yellow-700 text-sm">
                              <li>• <strong>流程自動化</strong>：RPA + 規則引擎</li>
                              <li>• <strong>預測維護</strong>：機器學習 + IoT</li>
                              <li>• <strong>品質檢測</strong>：計算機視覺</li>
                              <li>• <strong>需求預測</strong>：時間序列分析</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">💰 按預算規模選型</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-2">💚 小預算 (50萬以下)</h4>
                            <ul className="text-blue-700 text-sm space-y-1">
                              <li>• RPA自動化工具</li>
                              <li>• 雲端API服務</li>
                              <li>• 開源ML框架</li>
                              <li>• 現成SaaS解決方案</li>
                            </ul>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-2">💛 中預算 (50-200萬)</h4>
                            <ul className="text-blue-700 text-sm space-y-1">
                              <li>• 客製化ML模型</li>
                              <li>• 混合雲部署</li>
                              <li>• 企業級AI平台</li>
                              <li>• 專業技術支援</li>
                            </ul>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-2">❤️ 大預算 (200萬以上)</h4>
                            <ul className="text-blue-700 text-sm space-y-1">
                              <li>• 深度學習專案</li>
                              <li>• 全棧AI解決方案</li>
                              <li>• 專屬模型訓練</li>
                              <li>• 長期技術合作</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-red-900 mb-4">⚠️ 選型陷阱與注意事項</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-red-800 mb-3">常見陷阱</h4>
                            <ul className="space-y-2 text-red-700 text-sm">
                              <li>• <strong>技術至上主義</strong>：選擇最新但不成熟的技術</li>
                              <li>• <strong>一步到位</strong>：忽視循序漸進的重要性</li>
                              <li>• <strong>成本低估</strong>：只考慮技術成本，忽視總體擁有成本</li>
                              <li>• <strong>需求不明確</strong>：技術選型前未充分分析業務需求</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-800 mb-3">最佳實踐</h4>
                            <ul className="space-y-2 text-red-700 text-sm">
                              <li>• <strong>POC驗證</strong>：小規模概念驗證後再大規模部署</li>
                              <li>• <strong>技術調研</strong>：充分評估多個候選方案</li>
                              <li>• <strong>團隊培訓</strong>：確保內部團隊具備相應技能</li>
                              <li>• <strong>分階段實施</strong>：制定清晰的實施里程碑</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-green-900 mb-4">✅ 決策檢查清單</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                            <span className="text-green-800">業務需求已充分調研和明確定義</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                            <span className="text-green-800">技術選項已全面評估和比較</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                            <span className="text-green-800">總體擁有成本已詳細計算</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                            <span className="text-green-800">團隊技能與技術要求已評估</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                            <span className="text-green-800">風險評估和緩解策略已制定</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircleIcon className="w-5 h-5 text-green-600 mr-3" />
                            <span className="text-green-800">實施計畫和時程已確定</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Call to Action */}
              <section className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    需要專業的技術選型諮詢？
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    我們的AI技術專家團隊可以為您提供客製化的技術評估與選型建議
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                    >
                      預約技術諮詢
                      <ChevronRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                      href="/resources/ai-guide/1"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                    >
                      查看導入指南
                      <DocumentTextIcon className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 