'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  CalculatorIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

// 成本類別定義
interface CostInputs {
  // 初期投資成本
  softwareLicense: number;
  hardwareInfrastructure: number;
  implementationConsulting: number;
  systemIntegration: number;
  dataPreparation: number;
  initialTraining: number;
  
  // 持續營運成本 (年度)
  maintenanceSupport: number;
  cloudHosting: number;
  ongoingTraining: number;
  additionalPersonnel: number;
  operationalOverhead: number;
}

// 效益類別定義
interface BenefitInputs {
  // 營運效率提升
  laborCostSavings: number;
  processEfficiencyGains: number;
  errorReductionSavings: number;
  
  // 收入增長
  newBusinessOpportunities: number;
  customerRetentionImprovement: number;
  pricingOptimization: number;
  
  // 風險降低
  complianceRiskReduction: number;
  securityRiskReduction: number;
  operationalRiskReduction: number;
}

export default function ROICalculator() {
  const [projectPeriod, setProjectPeriod] = useState(36);
  const [discountRate, setDiscountRate] = useState(8);
  const [riskFactor, setRiskFactor] = useState(1.0);
  
  const [costs, setCosts] = useState<CostInputs>({
    softwareLicense: 300000,
    hardwareInfrastructure: 200000,
    implementationConsulting: 400000,
    systemIntegration: 250000,
    dataPreparation: 150000,
    initialTraining: 100000,
    
    maintenanceSupport: 180000,
    cloudHosting: 120000,
    ongoingTraining: 50000,
    additionalPersonnel: 800000,
    operationalOverhead: 80000
  });

  const [benefits, setBenefits] = useState<BenefitInputs>({
    laborCostSavings: 600000,
    processEfficiencyGains: 400000,
    errorReductionSavings: 200000,
    
    newBusinessOpportunities: 500000,
    customerRetentionImprovement: 300000,
    pricingOptimization: 250000,
    
    complianceRiskReduction: 150000,
    securityRiskReduction: 100000,
    operationalRiskReduction: 100000
  });

  // 計算總投資成本
  const initialInvestment = Object.values(costs).slice(0, 6).reduce((sum, cost) => sum + cost, 0);
  const annualOperatingCosts = Object.values(costs).slice(6).reduce((sum, cost) => sum + cost, 0);
  
  // 計算年度總效益
  const annualBenefits = Object.values(benefits).reduce((sum, benefit) => sum + benefit, 0) * riskFactor;
  
  // NPV 計算
  const calculateNPV = () => {
    let npv = -initialInvestment; // 初期投資為負現金流
    
    for (let year = 1; year <= Math.floor(projectPeriod / 12); year++) {
      const annualNetBenefit = annualBenefits - annualOperatingCosts;
      const discountedValue = annualNetBenefit / Math.pow(1 + discountRate / 100, year);
      npv += discountedValue;
    }
    
    return npv;
  };

  // ROI 計算
  const totalCosts = initialInvestment + (annualOperatingCosts * projectPeriod / 12);
  const totalBenefits = annualBenefits * projectPeriod / 12;
  const netBenefit = totalBenefits - totalCosts;
  const roiPercentage = totalCosts > 0 ? (netBenefit / totalCosts) * 100 : 0;
  
  // 回收期計算
  const paybackPeriod = initialInvestment / (annualBenefits - annualOperatingCosts) * 12;
  
  // NPV
  const npv = calculateNPV();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const updateCost = (key: keyof CostInputs, value: number) => {
    setCosts(prev => ({ ...prev, [key]: value }));
  };

  const updateBenefit = (key: keyof BenefitInputs, value: number) => {
    setBenefits(prev => ({ ...prev, [key]: value }));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <CalculatorIcon className="w-12 h-12 text-green-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI投資 <span className="gradient-text">ROI計算器</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              專業級AI投資回報分析工具，支援NPV、IRR、回收期等多維度財務指標計算
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-gray-600">專案期間</div>
                  <div className="group relative">
                    <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                      AI專案的預期運行期間
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="12"
                    max="60"
                    value={projectPeriod}
                    onChange={(e) => setProjectPeriod(parseInt(e.target.value))}
                    className="flex-1 mr-2"
                  />
                  <span className="text-sm font-semibold w-12">{projectPeriod}月</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-gray-600">折現率</div>
                  <div className="group relative">
                    <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 w-48 text-center">
                      考慮資金時間價值的年利率<br/>一般企業為6-12%
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="3"
                    max="15"
                    step="0.5"
                    value={discountRate}
                    onChange={(e) => setDiscountRate(parseFloat(e.target.value))}
                    className="flex-1 mr-2"
                  />
                  <span className="text-sm font-semibold w-12">{discountRate}%</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-gray-600">風險係數</div>
                  <div className="group relative">
                    <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 w-48 text-center">
                      調整效益實現機率<br/>1.0=正常 &lt;1.0=保守 &gt;1.0=樂觀
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="0.7"
                    max="1.3"
                    step="0.1"
                    value={riskFactor}
                    onChange={(e) => setRiskFactor(parseFloat(e.target.value))}
                    className="flex-1 mr-2"
                  />
                  <span className="text-sm font-semibold w-12">{riskFactor}x</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Dashboard */}
      <section className="section-padding">
        <div className="container-max max-w-7xl">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center group relative"
            >
              <div className={`text-3xl font-bold mb-2 ${
                roiPercentage >= 100 ? 'text-green-600' :
                roiPercentage >= 50 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {roiPercentage.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center">
                投資回報率 (ROI)
                <InformationCircleIcon className="w-4 h-4 ml-1 text-gray-400" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                (總收益 - 總成本) / 總成本 × 100%
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center group relative"
            >
              <div className={`text-3xl font-bold mb-2 ${npv >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(npv)}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center">
                淨現值 (NPV)
                <InformationCircleIcon className="w-4 h-4 ml-1 text-gray-400" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                考慮時間價值的投資淨效益
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center group relative"
            >
              <div className={`text-3xl font-bold mb-2 ${
                paybackPeriod <= 24 ? 'text-green-600' :
                paybackPeriod <= 36 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {paybackPeriod.toFixed(1)}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center">
                回收期 (月)
                <InformationCircleIcon className="w-4 h-4 ml-1 text-gray-400" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                收回初期投資所需時間
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center group relative"
            >
              <div className={`text-3xl font-bold mb-2 ${netBenefit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(netBenefit)}
              </div>
              <div className="text-sm text-gray-600 flex items-center justify-center">
                淨效益
                <InformationCircleIcon className="w-4 h-4 ml-1 text-gray-400" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                總效益減去總投資成本
              </div>
            </motion.div>
          </div>

          {/* Financial Metrics Explanation */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
            <div className="flex items-center mb-4">
              <InformationCircleIcon className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">財務指標說明</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="bg-white p-3 rounded-lg">
                <div className="font-semibold text-blue-800 mb-1">ROI 投資回報率</div>
                <div className="text-gray-600">衡量投資效益的基本指標，&gt;100% 表示有利可圖</div>
              </div>
              
              <div className="bg-white p-3 rounded-lg">
                <div className="font-semibold text-green-800 mb-1">NPV 淨現值</div>
                <div className="text-gray-600">考慮資金時間價值，&gt;0 表示投資可行</div>
              </div>
              
              <div className="bg-white p-3 rounded-lg">
                <div className="font-semibold text-orange-800 mb-1">回收期</div>
                <div className="text-gray-600">收回投資成本所需時間，越短越好</div>
              </div>
              
              <div className="bg-white p-3 rounded-lg">
                <div className="font-semibold text-purple-800 mb-1">風險調整</div>
                <div className="text-gray-600">考慮實施不確定性對效益的影響</div>
              </div>
            </div>
          </div>

          {/* Input Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Cost Inputs */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <CurrencyDollarIcon className="w-6 h-6 text-red-600 mr-3" />
                投資成本分析
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-800">初期投資成本</h4>
                    <div className="group relative">
                      <InformationCircleIcon className="w-5 h-5 text-gray-400 cursor-help" />
                      <div className="absolute bottom-6 right-0 bg-gray-800 text-white text-xs rounded py-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-80">
                        <div className="font-semibold mb-2">成本估算建議：</div>
                        <div className="space-y-1">
                          <div><strong>軟體：</strong>通常佔總投資15-25%</div>
                          <div><strong>硬體：</strong>視AI複雜度，可能20-40%</div>
                          <div><strong>顧問：</strong>實施經驗豐富的團隊很重要</div>
                          <div><strong>整合：</strong>與既有系統整合成本不可忽視</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">軟體授權費用</label>
                      <input
                        type="number"
                        value={costs.softwareLicense}
                        onChange={(e) => updateCost('softwareLicense', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="AI平台授權、API使用費等"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">硬體基礎設施</label>
                      <input
                        type="number"
                        value={costs.hardwareInfrastructure}
                        onChange={(e) => updateCost('hardwareInfrastructure', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="GPU服務器、存儲設備等"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">實施顧問費用</label>
                      <input
                        type="number"
                        value={costs.implementationConsulting}
                        onChange={(e) => updateCost('implementationConsulting', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="專業服務、項目管理等"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">系統整合費用</label>
                      <input
                        type="number"
                        value={costs.systemIntegration}
                        onChange={(e) => updateCost('systemIntegration', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">資料準備成本</label>
                      <input
                        type="number"
                        value={costs.dataPreparation}
                        onChange={(e) => updateCost('dataPreparation', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">初期培訓費用</label>
                  <input
                    type="number"
                        value={costs.initialTraining}
                        onChange={(e) => updateCost('initialTraining', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-red-50 rounded-lg">
                    <div className="text-sm text-gray-600">初期投資小計</div>
                    <div className="text-lg font-bold text-red-600">{formatCurrency(initialInvestment)}</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">年度營運成本</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">維護支援費用</label>
                      <input
                        type="number"
                        value={costs.maintenanceSupport}
                        onChange={(e) => updateCost('maintenanceSupport', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">雲端託管費用</label>
                      <input
                        type="number"
                        value={costs.cloudHosting}
                        onChange={(e) => updateCost('cloudHosting', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">持續培訓費用</label>
                      <input
                        type="number"
                        value={costs.ongoingTraining}
                        onChange={(e) => updateCost('ongoingTraining', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">額外人力成本</label>
                      <input
                        type="number"
                        value={costs.additionalPersonnel}
                        onChange={(e) => updateCost('additionalPersonnel', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">營運管理費用</label>
                  <input
                    type="number"
                        value={costs.operationalOverhead}
                        onChange={(e) => updateCost('operationalOverhead', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                      />
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                    <div className="text-sm text-gray-600">年度營運成本</div>
                    <div className="text-lg font-bold text-orange-600">{formatCurrency(annualOperatingCosts)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit Inputs */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <ArrowTrendingUpIcon className="w-6 h-6 text-green-600 mr-3" />
                  效益評估分析
                </h3>
                <div className="group relative">
                  <InformationCircleIcon className="w-5 h-5 text-gray-400 cursor-help" />
                  <div className="absolute top-6 right-0 bg-gray-800 text-white text-xs rounded py-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-80">
                    <div className="font-semibold mb-2">效益分類說明：</div>
                    <div className="space-y-1">
                      <div><strong>營運效率：</strong>自動化減少人力成本、提升處理速度</div>
                      <div><strong>收入增長：</strong>新業務機會、客戶體驗改善</div>
                      <div><strong>風險降低：</strong>合規性提升、錯誤率下降</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">營運效率提升</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm text-gray-600">人力成本節省 (年)</label>
                        <div className="group relative">
                          <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute bottom-6 right-0 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-64">
                            自動化減少人力需求：員工時薪 × 節省工時 × 年工作天數<br/>
                            例：$300/小時 × 2小時/天 × 250天 = $150,000
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        value={benefits.laborCostSavings}
                        onChange={(e) => updateBenefit('laborCostSavings', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="例：600,000"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm text-gray-600">流程效率提升 (年)</label>
                        <div className="group relative">
                          <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute bottom-6 right-0 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-64">
                            處理速度提升帶來的效益：原處理時間 × 效率提升比例 × 單位價值<br/>
                            例：節省50%處理時間，年產值提升$400,000
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        value={benefits.processEfficiencyGains}
                        onChange={(e) => updateBenefit('processEfficiencyGains', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="例：400,000"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm text-gray-600">錯誤減少節省 (年)</label>
                        <div className="group relative">
                          <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute bottom-6 right-0 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-64">
                            減少人為錯誤的成本節省：錯誤率下降 × 單次錯誤成本 × 處理量<br/>
                            例：錯誤率從5%降到1%，年節省$200,000
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        value={benefits.errorReductionSavings}
                        onChange={(e) => updateBenefit('errorReductionSavings', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="例：200,000"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">收入增長</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm text-gray-600">新商機創造 (年)</label>
                        <div className="group relative">
                          <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute bottom-6 right-0 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-64">
                            AI開啟新業務模式或市場：新產品/服務收入 × 市場滲透率<br/>
                            例：AI推薦系統增加15%交叉銷售，年增收$500,000
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        value={benefits.newBusinessOpportunities}
                        onChange={(e) => updateBenefit('newBusinessOpportunities', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="例：500,000"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm text-gray-600">客戶留存改善 (年)</label>
                        <div className="group relative">
                          <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute bottom-6 right-0 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-64">
                            提升客戶體驗降低流失率：留存率提升 × 客戶生命週期價值<br/>
                            例：AI客服提升滿意度，留存率+5%，年增收$300,000
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        value={benefits.customerRetentionImprovement}
                        onChange={(e) => updateBenefit('customerRetentionImprovement', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="例：300,000"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm text-gray-600">定價優化收益 (年)</label>
                        <div className="group relative">
                          <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute bottom-6 right-0 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-64">
                            AI動態定價優化利潤：價格提升幅度 × 銷售量 × 利潤率<br/>
                            例：個性化定價提升3%毛利，年增收$250,000
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        value={benefits.pricingOptimization}
                        onChange={(e) => updateBenefit('pricingOptimization', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="例：250,000"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">風險降低</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm text-gray-600">合規風險降低 (年)</label>
                        <div className="group relative">
                          <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute bottom-6 right-0 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-64">
                            避免合規違規成本：罰金機率 × 預期罰金 + 合規作業成本節省<br/>
                            例：自動合規檢查降低違規風險，年節省$150,000
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        value={benefits.complianceRiskReduction}
                        onChange={(e) => updateBenefit('complianceRiskReduction', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="例：150,000"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm text-gray-600">安全風險降低 (年)</label>
                        <div className="group relative">
                          <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute bottom-6 right-0 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-64">
                            避免資安事件損失：威脅發生率 × 預期損失 + 保險費用節省<br/>
                            例：AI威脅偵測降低資安風險，年節省$100,000
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        value={benefits.securityRiskReduction}
                        onChange={(e) => updateBenefit('securityRiskReduction', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="例：100,000"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-sm text-gray-600">營運風險降低 (年)</label>
                        <div className="group relative">
                          <InformationCircleIcon className="w-4 h-4 text-gray-400 cursor-help" />
                          <div className="absolute bottom-6 right-0 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 w-64">
                            避免營運中斷損失：故障機率 × 單次中斷成本 + 預防性維護節省<br/>
                            例：預測性維護降低設備故障，年節省$100,000
                          </div>
                        </div>
                      </div>
                      <input
                        type="number"
                        value={benefits.operationalRiskReduction}
                        onChange={(e) => updateBenefit('operationalRiskReduction', parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border rounded-lg text-sm"
                        placeholder="例：100,000"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-600">年度總效益 (含風險調整)</div>
                  <div className="text-lg font-bold text-green-600">{formatCurrency(annualBenefits)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Analysis Summary */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ChartBarIcon className="w-7 h-7 text-blue-600 mr-3" />
              投資分析總結
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">
                  {roiPercentage >= 100 ? '🚀' : roiPercentage >= 50 ? '⚡' : '⚠️'}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">投資建議</div>
                <div className={`text-sm font-medium ${
                  roiPercentage >= 100 ? 'text-green-600' :
                  roiPercentage >= 50 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {roiPercentage >= 100 ? '強烈推薦投資' :
                   roiPercentage >= 50 ? '建議謹慎評估' : '建議重新檢視'}
                </div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">
                  {paybackPeriod <= 18 ? '🎯' : paybackPeriod <= 36 ? '⏱️' : '📈'}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">回收速度</div>
                <div className={`text-sm font-medium ${
                  paybackPeriod <= 18 ? 'text-green-600' :
                  paybackPeriod <= 36 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {paybackPeriod <= 18 ? '快速回收' :
                   paybackPeriod <= 36 ? '中等回收' : '緩慢回收'}
                </div>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">
                  {npv > 1000000 ? '💎' : npv > 0 ? '💰' : '📉'}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">價值創造</div>
                <div className={`text-sm font-medium ${
                  npv > 1000000 ? 'text-green-600' :
                  npv > 0 ? 'text-blue-600' : 'text-red-600'
                }`}>
                  {npv > 1000000 ? '高價值創造' :
                   npv > 0 ? '正向價值' : '價值損失'}
                </div>
                </div>
              </div>
              
            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <InformationCircleIcon className="w-5 h-5 mr-2" />
                  關鍵洞察
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 初期投資需求：{formatCurrency(initialInvestment)}</li>
                  <li>• 年度淨現金流：{formatCurrency(annualBenefits - annualOperatingCosts)}</li>
                  <li>• 風險調整後IRR：{roiPercentage > 0 ? `${(roiPercentage / (projectPeriod / 12)).toFixed(1)}%` : 'N/A'}</li>
                  <li>• 投資效益比：{totalCosts > 0 ? (totalBenefits / totalCosts).toFixed(2) : 'N/A'}</li>
                </ul>
                  </div>
              
              <div className="p-4 border border-orange-200 rounded-lg bg-orange-50">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                  <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
                  風險提醒
                </h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• 效益實現需要時間，請耐心等待</li>
                  <li>• 實際成本可能因實施複雜度而變動</li>
                  <li>• 建議分階段投資降低風險</li>
                  <li>• 定期檢視與調整投資策略</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
          
      {/* Action Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container-max max-w-3xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              需要專業的AI投資評估服務？
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              我們的專家團隊可以協助您進行更深入的投資分析與風險評估
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              預約專業諮詢
                <ArrowTrendingUpIcon className="w-5 h-5 ml-2" />
              </Link>
              
              <Link 
                href="/resources/ai-guide/2"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                閱讀ROI指南
                <InformationCircleIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 