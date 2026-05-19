'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  DocumentTextIcon,
  CalendarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  UsersIcon,
  BanknotesIcon,
  ClockIcon,
  CogIcon,
  ChartBarIcon,
  PlusIcon,
  MinusIcon,
  PencilIcon,
  TrashIcon,
  ClipboardDocumentListIcon,
  FlagIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  BeakerIcon,
  RocketLaunchIcon,
  PauseIcon,
  StopIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
  StarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  TrophyIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

interface ProjectPhase {
  id: string;
  name: string;
  description: string;
  duration: string;
  dependencies: string[];
  tasks: Task[];
  deliverables: string[];
  risks: Risk[];
  resources: Resource[];
  color: string;
}

interface Task {
  id: string;
  name: string;
  description: string;
  duration: string;
  priority: 'high' | 'medium' | 'low';
  responsible: string;
  status: 'pending' | 'in-progress' | 'completed';
  dependencies: string[];
}

interface Risk {
  id: string;
  description: string;
  probability: 'high' | 'medium' | 'low';
  impact: 'high' | 'medium' | 'low';
  mitigation: string;
  owner: string;
}

interface Resource {
  type: 'human' | 'technology' | 'budget';
  name: string;
  quantity: string;
  cost: string;
  notes: string;
}

interface Milestone {
  id: string;
  name: string;
  date: string;
  description: string;
  criteria: string[];
  phase: string;
}

export default function AIProjectPlanningTemplate() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [projectInfo, setProjectInfo] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    budget: '',
    team: ''
  });

  const projectPhases: ProjectPhase[] = [
    {
      id: 'discovery',
      name: '需求發現與分析',
      description: '深入了解業務需求，評估AI應用可行性',
      duration: '4-6週',
      dependencies: [],
      color: 'blue',
      tasks: [
        {
          id: 'business-analysis',
          name: '業務流程分析',
          description: '分析現有業務流程，識別痛點與改善機會',
          duration: '2週',
          priority: 'high',
          responsible: '業務分析師',
          status: 'pending',
          dependencies: []
        },
        {
          id: 'requirements-gathering',
          name: '需求收集與整理',
          description: '與利害關係人訪談，收集詳細需求',
          duration: '2週',
          priority: 'high',
          responsible: '產品經理',
          status: 'pending',
          dependencies: ['business-analysis']
        },
        {
          id: 'feasibility-study',
          name: 'AI可行性評估',
          description: '評估技術可行性與投資效益',
          duration: '1週',
          priority: 'medium',
          responsible: 'AI技術專家',
          status: 'pending',
          dependencies: ['requirements-gathering']
        }
      ],
      deliverables: [
        '業務需求文件',
        '技術可行性報告',
        '專案範圍定義',
        '初步投資效益分析'
      ],
      risks: [
        {
          id: 'unclear-requirements',
          description: '需求不明確或經常變更',
          probability: 'medium',
          impact: 'high',
          mitigation: '建立需求變更管理流程',
          owner: '專案經理'
        }
      ],
      resources: [
        { type: 'human', name: '業務分析師', quantity: '1人', cost: 'NT$200,000', notes: '全職參與' },
        { type: 'human', name: '產品經理', quantity: '1人', cost: 'NT$250,000', notes: '全職參與' },
        { type: 'technology', name: '需求分析工具', quantity: '1套', cost: 'NT$50,000', notes: '軟體授權' }
      ]
    },
    {
      id: 'planning',
      name: '設計與規劃',
      description: '制定詳細的技術架構與實施計畫',
      duration: '6-8週',
      dependencies: ['discovery'],
      color: 'green',
      tasks: [
        {
          id: 'architecture-design',
          name: '技術架構設計',
          description: '設計AI系統的整體架構',
          duration: '3週',
          priority: 'high',
          responsible: '系統架構師',
          status: 'pending',
          dependencies: []
        },
        {
          id: 'data-strategy',
          name: '資料策略規劃',
          description: '規劃資料收集、清理與管理策略',
          duration: '2週',
          priority: 'high',
          responsible: '資料科學家',
          status: 'pending',
          dependencies: ['architecture-design']
        },
        {
          id: 'implementation-plan',
          name: '實施計畫制定',
          description: '詳細的開發與部署計畫',
          duration: '2週',
          priority: 'medium',
          responsible: '專案經理',
          status: 'pending',
          dependencies: ['data-strategy']
        }
      ],
      deliverables: [
        '技術架構文件',
        '資料管理策略',
        '詳細實施計畫',
        '測試策略文件'
      ],
      risks: [
        {
          id: 'technical-complexity',
          description: '技術複雜度超出預期',
          probability: 'medium',
          impact: 'medium',
          mitigation: '建立技術審查機制',
          owner: '技術主管'
        }
      ],
      resources: [
        { type: 'human', name: '系統架構師', quantity: '1人', cost: 'NT$350,000', notes: '全職參與' },
        { type: 'human', name: '資料科學家', quantity: '1人', cost: 'NT$300,000', notes: '全職參與' },
        { type: 'technology', name: '設計工具軟體', quantity: '1套', cost: 'NT$80,000', notes: '設計軟體' }
      ]
    },
    {
      id: 'development',
      name: '開發與實作',
      description: '進行AI模型開發與系統建置',
      duration: '12-16週',
      dependencies: ['planning'],
      color: 'purple',
      tasks: [
        {
          id: 'data-preparation',
          name: '資料準備與處理',
          description: '收集、清理與預處理訓練資料',
          duration: '4週',
          priority: 'high',
          responsible: '資料工程師',
          status: 'pending',
          dependencies: []
        },
        {
          id: 'model-development',
          name: 'AI模型開發',
          description: '訓練與優化AI模型',
          duration: '6週',
          priority: 'high',
          responsible: '機器學習工程師',
          status: 'pending',
          dependencies: ['data-preparation']
        },
        {
          id: 'system-integration',
          name: '系統整合',
          description: '將AI模型整合到現有系統',
          duration: '4週',
          priority: 'medium',
          responsible: '後端工程師',
          status: 'pending',
          dependencies: ['model-development']
        }
      ],
      deliverables: [
        '訓練完成的AI模型',
        '整合測試報告',
        '系統操作手冊',
        '效能測試結果'
      ],
      risks: [
        {
          id: 'data-quality',
          description: '資料品質不符合預期',
          probability: 'high',
          impact: 'high',
          mitigation: '建立資料品質檢查機制',
          owner: '資料工程師'
        }
      ],
      resources: [
        { type: 'human', name: '資料工程師', quantity: '2人', cost: 'NT$600,000', notes: '全職參與' },
        { type: 'human', name: '機器學習工程師', quantity: '2人', cost: 'NT$700,000', notes: '全職參與' },
        { type: 'technology', name: '雲端運算資源', quantity: '4個月', cost: 'NT$200,000', notes: 'GPU實例' }
      ]
    },
    {
      id: 'testing',
      name: '測試與驗證',
      description: '全面測試AI系統功能與效能',
      duration: '4-6週',
      dependencies: ['development'],
      color: 'orange',
      tasks: [
        {
          id: 'unit-testing',
          name: '單元測試',
          description: '對各個模組進行單元測試',
          duration: '2週',
          priority: 'high',
          responsible: 'QA工程師',
          status: 'pending',
          dependencies: []
        },
        {
          id: 'integration-testing',
          name: '整合測試',
          description: '測試系統整合功能',
          duration: '2週',
          priority: 'high',
          responsible: 'QA工程師',
          status: 'pending',
          dependencies: ['unit-testing']
        },
        {
          id: 'uat',
          name: '使用者驗收測試',
          description: '與最終使用者進行驗收測試',
          duration: '2週',
          priority: 'medium',
          responsible: '產品經理',
          status: 'pending',
          dependencies: ['integration-testing']
        }
      ],
      deliverables: [
        '測試計畫書',
        '測試執行報告',
        '缺陷管理報告',
        '驗收測試結果'
      ],
      risks: [
        {
          id: 'performance-issues',
          description: '系統效能不符合要求',
          probability: 'medium',
          impact: 'high',
          mitigation: '建立效能監控機制',
          owner: 'QA主管'
        }
      ],
      resources: [
        { type: 'human', name: 'QA工程師', quantity: '2人', cost: 'NT$300,000', notes: '全職參與' },
        { type: 'human', name: '產品經理', quantity: '1人', cost: 'NT$150,000', notes: '部分參與' },
        { type: 'technology', name: '測試工具', quantity: '1套', cost: 'NT$100,000', notes: '自動化測試' }
      ]
    },
    {
      id: 'deployment',
      name: '部署與上線',
      description: '將AI系統部署到生產環境',
      duration: '2-4週',
      dependencies: ['testing'],
      color: 'red',
      tasks: [
        {
          id: 'production-deployment',
          name: '生產環境部署',
          description: '將系統部署到生產環境',
          duration: '1週',
          priority: 'high',
          responsible: 'DevOps工程師',
          status: 'pending',
          dependencies: []
        },
        {
          id: 'monitoring-setup',
          name: '監控系統建置',
          description: '建立系統監控與告警機制',
          duration: '1週',
          priority: 'high',
          responsible: 'DevOps工程師',
          status: 'pending',
          dependencies: ['production-deployment']
        },
        {
          id: 'user-training',
          name: '使用者培訓',
          description: '對最終使用者進行系統培訓',
          duration: '2週',
          priority: 'medium',
          responsible: '培訓專員',
          status: 'pending',
          dependencies: ['monitoring-setup']
        }
      ],
      deliverables: [
        '部署文件',
        '監控儀表板',
        '使用者手冊',
        '維護程序文件'
      ],
      risks: [
        {
          id: 'deployment-failure',
          description: '部署過程出現問題',
          probability: 'low',
          impact: 'high',
          mitigation: '建立回滾機制',
          owner: 'DevOps主管'
        }
      ],
      resources: [
        { type: 'human', name: 'DevOps工程師', quantity: '1人', cost: 'NT$200,000', notes: '全職參與' },
        { type: 'human', name: '培訓專員', quantity: '1人', cost: 'NT$100,000', notes: '部分參與' },
        { type: 'technology', name: '生產環境', quantity: '1套', cost: 'NT$300,000', notes: '雲端基礎設施' }
      ]
    }
  ];

  const milestones: Milestone[] = [
    {
      id: 'requirements-approval',
      name: '需求確認完成',
      date: '專案開始後第6週',
      description: '所有業務需求已確認並獲得利害關係人同意',
      criteria: ['需求文件已審核通過', '利害關係人簽字確認', '專案範圍已定義'],
      phase: 'discovery'
    },
    {
      id: 'design-review',
      name: '設計審查通過',
      date: '專案開始後第14週',
      description: '技術設計方案已通過專業審查',
      criteria: ['架構設計文件完成', '技術審查會議通過', '資料策略確定'],
      phase: 'planning'
    },
    {
      id: 'model-completion',
      name: 'AI模型完成',
      date: '專案開始後第26週',
      description: 'AI模型開發完成並達到預期效能指標',
      criteria: ['模型準確率達標', '效能測試通過', '整合測試完成'],
      phase: 'development'
    },
    {
      id: 'uat-completion',
      name: '驗收測試通過',
      date: '專案開始後第32週',
      description: '使用者驗收測試全部通過',
      criteria: ['所有測試案例通過', '使用者滿意度達標', '缺陷已修復'],
      phase: 'testing'
    },
    {
      id: 'go-live',
      name: '系統正式上線',
      date: '專案開始後第36週',
      description: 'AI系統正式投入生產使用',
      criteria: ['部署成功', '監控系統運作', '使用者培訓完成'],
      phase: 'deployment'
    }
  ];

  const tabs = [
    { id: 'overview', label: '專案概覽', icon: DocumentTextIcon },
    { id: 'phases', label: '階段規劃', icon: CalendarIcon },
    { id: 'milestones', label: '里程碑', icon: FlagIcon },
    { id: 'risks', label: '風險管理', icon: ExclamationTriangleIcon },
    { id: 'resources', label: '資源配置', icon: UsersIcon }
  ];

  const priorityColors = {
    high: 'text-red-700 bg-red-100',
    medium: 'text-yellow-700 bg-yellow-100',
    low: 'text-green-700 bg-green-100'
  };

  const statusColors = {
    pending: 'text-gray-700 bg-gray-100',
    'in-progress': 'text-blue-700 bg-blue-100',
    completed: 'text-green-700 bg-green-100'
  };

  const riskColors = {
    high: 'border-red-500 bg-red-50',
    medium: 'border-yellow-500 bg-yellow-50',
    low: 'border-green-500 bg-green-50'
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <ClipboardDocumentListIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI專案規劃範本
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              標準化的AI專案管理工具，幫助您規劃、執行與監控AI導入專案
            </p>
            
            {/* Template Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">5</div>
                <div className="text-sm text-gray-600">主要階段</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">關鍵任務</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">30-40週</div>
                <div className="text-sm text-gray-600">預計工期</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">95%</div>
                <div className="text-sm text-gray-600">成功率</div>
              </div>
            </div>

            {/* TL;DR - GEO 優化 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-3xl mx-auto text-left">
              <p className="sr-only">摘要 TL;DR</p>
              <p className="text-sm text-blue-800 leading-relaxed">
                AI 專案規劃範本提供標準化的專案管理框架，涵蓋需求分析、技術選型、時程規劃與風險管理四大模組。適用於 3-12 個月的 AI 導入專案，內含甘特圖、里程碑追蹤與預算控管工具，幫助團隊有效管理 AI 專案從啟動到上線的全流程。
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
                  <DocumentTextIcon className="w-5 h-5 text-blue-600 mr-2" />
                  規劃工具
                </h3>
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
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
                      <DocumentTextIcon className="w-8 h-8 text-blue-600 mr-3" />
                      專案概覽
                    </h2>
                    
                    {/* Project Information Form */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">📋 專案基本資訊</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-blue-800 mb-2">專案名稱</label>
                          <input
                            type="text"
                            value={projectInfo.name}
                            onChange={(e) => setProjectInfo({...projectInfo, name: e.target.value})}
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="輸入AI專案名稱"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-blue-800 mb-2">預計預算</label>
                          <input
                            type="text"
                            value={projectInfo.budget}
                            onChange={(e) => setProjectInfo({...projectInfo, budget: e.target.value})}
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="例：NT$ 5,000,000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-blue-800 mb-2">開始日期</label>
                          <input
                            type="date"
                            value={projectInfo.startDate}
                            onChange={(e) => setProjectInfo({...projectInfo, startDate: e.target.value})}
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-blue-800 mb-2">預計結束日期</label>
                          <input
                            type="date"
                            value={projectInfo.endDate}
                            onChange={(e) => setProjectInfo({...projectInfo, endDate: e.target.value})}
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-blue-800 mb-2">專案描述</label>
                          <textarea
                            value={projectInfo.description}
                            onChange={(e) => setProjectInfo({...projectInfo, description: e.target.value})}
                            rows={3}
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="簡述專案目標與預期成果"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Timeline */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold text-green-900 mb-4">⏱️ 專案時程概覽</h3>
                      <div className="space-y-4">
                        {projectPhases.map((phase, index) => (
                          <div key={phase.id} className="flex items-center">
                            <div className={`w-4 h-4 rounded-full bg-${phase.color}-500 mr-4`}></div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-green-800">{phase.name}</h4>
                                <span className="text-green-600 text-sm font-medium">{phase.duration}</span>
                              </div>
                              <p className="text-green-600 text-sm">{phase.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Success Metrics */}
                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-purple-900 mb-4">🎯 成功關鍵指標</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CheckBadgeIcon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-purple-800 mb-2">準時交付</h4>
                          <p className="text-purple-600 text-sm">按照時程完成所有里程碑</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CurrencyDollarIcon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-purple-800 mb-2">預算控制</h4>
                          <p className="text-purple-600 text-sm">成本控制在預算範圍內</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                            <TrophyIcon className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-purple-800 mb-2">品質達標</h4>
                          <p className="text-purple-600 text-sm">達到預期的技術與業務目標</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Phases Tab */}
              {activeTab === 'phases' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <CalendarIcon className="w-8 h-8 text-green-600 mr-3" />
                      階段規劃
                    </h2>
                    
                    <div className="space-y-6">
                      {projectPhases.map((phase, index) => (
                        <motion.div
                          key={phase.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="border border-gray-200 rounded-xl overflow-hidden"
                        >
                          <button
                            onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                            className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className={`w-10 h-10 bg-${phase.color}-600 text-white rounded-full font-bold flex items-center justify-center mr-4`}>
                                  {index + 1}
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold text-gray-900">{phase.name}</h3>
                                  <p className="text-gray-600 mt-1">{phase.description}</p>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="text-right mr-4">
                                  <div className="text-sm text-gray-500">預計時程</div>
                                  <div className="font-semibold text-gray-900">{phase.duration}</div>
                                </div>
                                <ChevronDownIcon className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                                  selectedPhase === phase.id ? 'rotate-180' : ''
                                }`} />
                              </div>
                            </div>
                          </button>
                          
                          {selectedPhase === phase.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-200 p-6 bg-gray-50"
                            >
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Tasks */}
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                    <CheckCircleIcon className="w-5 h-5 text-green-600 mr-2" />
                                    主要任務
                                  </h4>
                                  <div className="space-y-3">
                                    {phase.tasks.map((task) => (
                                      <div key={task.id} className="bg-white rounded-lg p-4 border border-gray-200">
                                        <div className="flex items-center justify-between mb-2">
                                          <h5 className="font-medium text-gray-900">{task.name}</h5>
                                          <div className="flex gap-2">
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${priorityColors[task.priority]}`}>
                                              {task.priority === 'high' ? '高' : task.priority === 'medium' ? '中' : '低'}
                                            </span>
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[task.status]}`}>
                                              {task.status === 'pending' ? '待開始' : task.status === 'in-progress' ? '進行中' : '已完成'}
                                            </span>
                                          </div>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-2">{task.description}</p>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                          <span>負責人：{task.responsible}</span>
                                          <span>工期：{task.duration}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* Deliverables */}
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                    <DocumentTextIcon className="w-5 h-5 text-blue-600 mr-2" />
                                    交付成果
                                  </h4>
                                  <div className="space-y-2 mb-6">
                                    {phase.deliverables.map((deliverable, idx) => (
                                      <div key={idx} className="flex items-center">
                                        <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" />
                                        <span className="text-gray-700 text-sm">{deliverable}</span>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                                    <ExclamationTriangleIcon className="w-5 h-5 text-orange-600 mr-2" />
                                    主要風險
                                  </h4>
                                  <div className="space-y-3">
                                    {phase.risks.map((risk) => (
                                      <div key={risk.id} className={`p-3 rounded-lg border ${riskColors[risk.impact]}`}>
                                        <h5 className="font-medium text-gray-900 mb-1">{risk.description}</h5>
                                        <p className="text-gray-600 text-sm mb-2">{risk.mitigation}</p>
                                        <div className="flex items-center justify-between text-xs">
                                          <span>負責人：{risk.owner}</span>
                                          <span>影響度：{risk.impact === 'high' ? '高' : risk.impact === 'medium' ? '中' : '低'}</span>
                                        </div>
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

              {/* Milestones Tab */}
              {activeTab === 'milestones' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <FlagIcon className="w-8 h-8 text-red-600 mr-3" />
                      里程碑管理
                    </h2>
                    
                    <div className="space-y-6">
                      {milestones.map((milestone, index) => (
                        <motion.div
                          key={milestone.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-xl p-6"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-red-600 text-white rounded-full font-bold flex items-center justify-center mr-4">
                                <FlagIcon className="w-6 h-6" />
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{milestone.name}</h3>
                                <p className="text-gray-600">{milestone.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-red-600 font-semibold">{milestone.date}</div>
                              <div className="text-gray-500 text-sm">目標日期</div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">✅ 驗收標準</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {milestone.criteria.map((criterion, idx) => (
                                <div key={idx} className="flex items-center">
                                  <CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" />
                                  <span className="text-gray-700 text-sm">{criterion}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Risks Tab */}
              {activeTab === 'risks' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <ExclamationTriangleIcon className="w-8 h-8 text-orange-600 mr-3" />
                      風險管理
                    </h2>
                    
                    {/* Risk Matrix */}
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
                      <h3 className="text-xl font-bold text-orange-900 mb-4">🎯 風險評估矩陣</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-xl">H</span>
                          </div>
                          <h4 className="font-semibold text-red-800 mb-2">高風險</h4>
                          <p className="text-red-600 text-sm">需要立即關注與行動</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-xl">M</span>
                          </div>
                          <h4 className="font-semibold text-yellow-800 mb-2">中風險</h4>
                          <p className="text-yellow-600 text-sm">需要定期監控</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-xl">L</span>
                          </div>
                          <h4 className="font-semibold text-green-800 mb-2">低風險</h4>
                          <p className="text-green-600 text-sm">可接受風險</p>
                        </div>
                      </div>
                    </div>

                    {/* All Risks */}
                    <div className="space-y-6">
                      {projectPhases.map((phase) => (
                        <div key={phase.id} className="border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <div className={`w-4 h-4 rounded-full bg-${phase.color}-500 mr-3`}></div>
                            {phase.name} - 風險清單
                          </h3>
                          <div className="space-y-4">
                            {phase.risks.map((risk) => (
                              <div key={risk.id} className={`p-4 rounded-lg border ${riskColors[risk.impact]}`}>
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="font-semibold text-gray-900">{risk.description}</h4>
                                  <div className="flex gap-2">
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                      risk.probability === 'high' ? 'bg-red-200 text-red-800' :
                                      risk.probability === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                                      'bg-green-200 text-green-800'
                                    }`}>
                                      機率：{risk.probability === 'high' ? '高' : risk.probability === 'medium' ? '中' : '低'}
                                    </span>
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                                      risk.impact === 'high' ? 'bg-red-200 text-red-800' :
                                      risk.impact === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                                      'bg-green-200 text-green-800'
                                    }`}>
                                      影響：{risk.impact === 'high' ? '高' : risk.impact === 'medium' ? '中' : '低'}
                                    </span>
                                  </div>
                                </div>
                                <p className="text-gray-700 mb-2"><strong>緩解措施：</strong>{risk.mitigation}</p>
                                <p className="text-gray-600 text-sm"><strong>負責人：</strong>{risk.owner}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Resources Tab */}
              {activeTab === 'resources' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <UsersIcon className="w-8 h-8 text-purple-600 mr-3" />
                      資源配置
                    </h2>
                    
                    {/* Resource Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                        <UserGroupIcon className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-blue-900 mb-2">人力資源</h3>
                        <p className="text-blue-600">15+ 專業人員</p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                        <ComputerDesktopIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-green-900 mb-2">技術資源</h3>
                        <p className="text-green-600">雲端+軟體工具</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                        <CurrencyDollarIcon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-purple-900 mb-2">預算配置</h3>
                        <p className="text-purple-600">NT$ 2-8M</p>
                      </div>
                    </div>

                    {/* Detailed Resources by Phase */}
                    <div className="space-y-6">
                      {projectPhases.map((phase) => (
                        <div key={phase.id} className="border border-gray-200 rounded-xl p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <div className={`w-4 h-4 rounded-full bg-${phase.color}-500 mr-3`}></div>
                            {phase.name} - 資源需求
                          </h3>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-200">
                                  <th className="text-left py-3 px-4">類型</th>
                                  <th className="text-left py-3 px-4">資源名稱</th>
                                  <th className="text-left py-3 px-4">數量</th>
                                  <th className="text-left py-3 px-4">成本</th>
                                  <th className="text-left py-3 px-4">備註</th>
                                </tr>
                              </thead>
                              <tbody>
                                {phase.resources.map((resource, idx) => (
                                  <tr key={idx} className="border-b border-gray-100">
                                    <td className="py-3 px-4">
                                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                                        resource.type === 'human' ? 'bg-blue-100 text-blue-700' :
                                        resource.type === 'technology' ? 'bg-green-100 text-green-700' :
                                        'bg-purple-100 text-purple-700'
                                      }`}>
                                        {resource.type === 'human' ? '人力' : resource.type === 'technology' ? '技術' : '預算'}
                                      </span>
                                    </td>
                                    <td className="py-3 px-4 font-medium">{resource.name}</td>
                                    <td className="py-3 px-4">{resource.quantity}</td>
                                    <td className="py-3 px-4 font-semibold text-green-600">{resource.cost}</td>
                                    <td className="py-3 px-4 text-gray-600">{resource.notes}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Call to Action */}
              <section className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    需要專業的專案管理協助？
                  </h2>
                  <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    我們的專案管理專家團隊可以為您提供客製化的AI專案規劃與執行支援
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
                    >
                      預約專案諮詢
                      <ChevronRightIcon className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                      href="/resources/ai-guide/1"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
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