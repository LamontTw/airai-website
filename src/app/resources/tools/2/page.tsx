'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import {
  CalculatorIcon,
    CurrencyDollarIcon,  ChartBarIcon,  ArrowTrendingUpIcon,  BanknotesIcon
} from '@heroicons/react/24/outline';

export default function ROICalculator() {
  const [totalCosts, setTotalCosts] = useState(1000000);
  const [totalBenefits, setTotalBenefits] = useState(1500000);
  const [projectPeriod, setProjectPeriod] = useState(36);

  const netBenefit = totalBenefits - totalCosts;
  const roiPercentage = totalCosts > 0 ? (netBenefit / totalCosts) * 100 : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
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
              精確計算AI專案投資回報率，支援多維度成本效益分析與風險評估
            </p>
            
            {/* Quick Settings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  專案期間
                </label>
                <div className="flex items-center">
                  <input
                    type="range"
                    min="12"
                    max="60"
                    value={projectPeriod}
                    onChange={(e) => setProjectPeriod(parseInt(e.target.value))}
                    className="flex-1 mr-3"
                  />
                  <span className="text-sm font-semibold text-gray-900 w-12">
                    {projectPeriod}月
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding">
        <div className="container-max max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BanknotesIcon className="w-6 h-6 text-blue-600 mr-3" />
                參數設定
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    總投資成本 (元)
                  </label>
                  <input
                    type="number"
                    value={totalCosts}
                    onChange={(e) => setTotalCosts(parseFloat(e.target.value) || 0)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="請輸入總投資成本"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    預期總效益 (元)
                  </label>
                  <input
                    type="number"
                    value={totalBenefits}
                    onChange={(e) => setTotalBenefits(parseFloat(e.target.value) || 0)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="請輸入預期總效益"
                  />
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ChartBarIcon className="w-6 h-6 text-green-600 mr-3" />
                計算結果
              </h2>
              
              {/* ROI Display */}
              <div className="text-center mb-8">
                <div className={`text-5xl font-bold mb-4 ${
                  roiPercentage >= 100 ? 'text-green-600' :
                  roiPercentage >= 50 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {roiPercentage.toFixed(1)}%
                </div>
                <div className="text-lg text-gray-600 mb-6">投資回報率 (ROI)</div>
                
                {/* Progress Circle */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke={roiPercentage >= 100 ? '#16a34a' : 
                             roiPercentage >= 50 ? '#eab308' : '#dc2626'}
                      strokeWidth="2"
                      strokeDasharray={`${Math.min(roiPercentage, 200)}, 100`}
                    />
                  </svg>
                </div>
              </div>
              
              {/* Detailed Results */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">總投資成本</span>
                  <span className="font-bold text-red-600">
                    {formatCurrency(totalCosts)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">預期總效益</span>
                  <span className="font-bold text-green-600">
                    {formatCurrency(totalBenefits)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">淨效益</span>
                  <span className={`font-bold ${netBenefit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(netBenefit)}
                  </span>
                </div>
              </div>
              
              {/* Investment Recommendation */}
              <div className="mt-8 p-4 rounded-lg border-2 border-dashed text-center">
                {roiPercentage >= 100 ? (
                  <div>
                    <div className="text-2xl mb-2">✅</div>
                    <div className="text-sm font-semibold text-green-700">強烈推薦投資</div>
                  </div>
                ) : roiPercentage >= 50 ? (
                  <div>
                    <div className="text-2xl mb-2">⚠️</div>
                    <div className="text-sm font-semibold text-yellow-700">建議進一步評估</div>
                  </div>
                ) : (
                  <div>
                    <div className="text-2xl mb-2">❌</div>
                    <div className="text-sm font-semibold text-red-700">需要重新檢視</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              準備開始您的AI投資了嗎？
            </h3>
            <p className="text-gray-600 mb-6">
              獲得專業顧問團隊的詳細評估與實施建議
            </p>
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              預約專業諮詢
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 