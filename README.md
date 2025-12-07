# 智流科技官網 (airai.tw)

> 專為台灣中小企業設計的AI解決方案提供商官方網站

## 📋 專案概述

智流科技官網是一個現代化的響應式網站，展示了智流科技如何透過AI Agent導入與程式外包服務，幫助中小企業進行數位轉型。網站基於策略分析報告設計，強調「將AI融入日常工作」的核心理念。

## 🚀 核心特色

- **現代化設計**: 使用 React 19 + Next.js 15 和 Tailwind CSS 構建
- **響應式設計**: 完美適配桌面、平板和手機設備
- **動畫效果**: 使用 Framer Motion 提供流暢的動畫體驗
- **SEO 優化**: 針對搜尋引擎進行優化，提升網站曝光度
- **無障礙設計**: 遵循 WCAG 指南，確保所有用戶都能順利使用

## 🛠 技術棧

- **框架**: Next.js 15 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **動畫**: Framer Motion
- **圖標**: Heroicons
- **字體**: Inter (Google Fonts)
- **工具**: React Intersection Observer

## 📁 專案結構

```
src/
├── app/                    # Next.js App Router 頁面
│   ├── about/             # 關於我們頁面
│   ├── contact/           # 聯絡我們頁面
│   ├── services/          # 服務項目頁面
│   ├── globals.css        # 全域樣式
│   ├── layout.tsx         # 根佈局
│   └── page.tsx           # 首頁
├── components/            # React 組件
│   ├── sections/          # 頁面區塊組件
│   │   ├── HeroSection.tsx
│   │   ├── ProblemSolutionSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   └── CTASection.tsx
│   └── ui/                # UI 組件
│       ├── Navigation.tsx
│       └── Footer.tsx
```

## 🎨 設計系統

### 色彩配置
- **主色**: Blue (#2563eb)
- **次色**: Indigo (#4f46e5)
- **強調色**: Purple (#7c3aed)
- **成功色**: Green (#10b981)
- **警告色**: Yellow (#f59e0b)

### 字體
- **主字體**: Inter (變數字體)
- **標題**: 700 (Bold)
- **內文**: 400 (Regular)
- **強調**: 600 (Semi-bold)

## 📖 頁面說明

### 🏠 首頁 (/)
- **Hero Section**: 展示核心價值主張和統計數據
- **問題解決方案**: 對比中小企業挑戰與智流科技解決方案
- **服務項目**: 程式外包和AI Agent導入服務概覽
- **成功案例**: 真實客戶案例和成效統計
- **行動呼籲**: 邀請用戶開始AI轉型之旅

### 🏢 關於我們 (/about)
- 公司使命與願景
- 核心價值觀
- 專業團隊介紹
- 公司發展歷程

### 🛠 服務項目 (/services)
- **程式外包**: 客製化軟體開發服務
- **AI Agent導入**: 智能自動化解決方案
- 詳細服務流程說明

### 📞 聯絡我們 (/contact)
- 多元聯絡方式
- 免費諮詢表單
- 服務時間說明
- 限時優惠資訊

## 🚀 快速開始

### 安裝依賴
```bash
npm install
```

### 啟動開發伺服器
```bash
npm run dev
```

### 建構生產版本
```bash
npm run build
```

### 啟動生產伺服器
```bash
npm start
```

## 📊 性能優化

- **圖片優化**: 使用 Next.js Image 組件
- **程式碼分割**: 自動進行頁面級程式碼分割
- **懶載入**: 使用 Intersection Observer 實現動畫觸發
- **字體優化**: 使用變數字體減少載入時間

## 🔧 自定義配置

### Tailwind CSS 自定義類別
```css
.btn-primary        # 主要按鈕樣式
.btn-secondary      # 次要按鈕樣式
.section-padding    # 統一的區塊內距
.container-max      # 最大寬度容器
.gradient-text      # 漸層文字效果
```

## 📱 響應式設計

- **手機**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

所有組件都經過測試，確保在不同螢幕尺寸下都能正常顯示。

## 🌍 SEO 最佳化

- 語意化 HTML 結構
- Meta 標籤優化
- Open Graph 標籤
- 結構化資料標記
- 網站地圖自動生成

## 🔄 持續更新

網站設計基於詳細的市場調研和策略分析，將持續根據用戶反饋和市場變化進行優化更新。

## 📄 授權

本專案僅供智流科技有限公司使用。

---

**智流科技有限公司** | 將AI融入日常工作，加速中小企業數位轉型
