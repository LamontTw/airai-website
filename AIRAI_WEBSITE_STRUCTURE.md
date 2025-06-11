# AIRAI 官網完整資料結構文檔

> **智流科技有限公司官方網站** - 專為台灣中小企業設計的AI解決方案提供商
> 
> 網址：https://airai.tw  
> 更新日期：2024年12月  
> 文檔版本：v1.0

## 📋 專案概述

### 公司資訊
- **公司名稱**：智流科技有限公司
- **英文名稱**：AIRAI
- **核心理念**：將AI融入日常工作，加速中小企業數位轉型
- **主要服務**：AI Agent導入、程式外包服務
- **聯絡資訊**：
  - 地址：新北市板橋區倉後街26號
  - 電話：+886 953-202-811
  - 信箱：contact@airai.tw

### 技術架構
- **框架**：Next.js 15.1.8 (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS 3.4.1
- **動畫**：Framer Motion 12.12.2
- **圖標**：Heroicons 2.2.0, Lucide React 0.511.0
- **字體**：Inter (Google Fonts)
- **部署**：Vercel
- **域名**：GoDaddy

## 🗂️ 檔案結構詳解

### 根目錄
```
airai-website/
├── .git/                          # Git 版本控制
├── .next/                         # Next.js 建構輸出
├── node_modules/                  # 依賴套件
├── public/                        # 靜態資源
├── src/                          # 原始碼
├── docs/                         # 文檔資料
├── package.json                  # 專案配置
├── next.config.ts               # Next.js 配置
├── tailwind.config.ts           # Tailwind CSS 配置
├── tsconfig.json                # TypeScript 配置
├── README.md                    # 專案說明
└── 各種部署腳本與文檔
```

### 核心原始碼結構 (src/)
```
src/
├── app/                          # Next.js App Router 頁面
│   ├── about/                   # 關於我們頁面
│   │   └── page.tsx            # 公司介紹、團隊、願景
│   ├── cases/                   # 成功案例頁面
│   │   ├── layout.tsx          # 案例頁面佈局
│   │   └── page.tsx            # 客戶案例展示
│   ├── contact/                 # 聯絡我們頁面
│   │   └── page.tsx            # 聯絡表單、公司資訊
│   ├── privacy/                 # 隱私政策
│   ├── resources/               # 資源洞察
│   │   ├── ai-guide/           # AI 導入指南
│   │   ├── blog/               # 部落格文章
│   │   ├── guides/             # 實用指南
│   │   ├── tools/              # 工具資源
│   │   ├── trends/             # 趨勢分析
│   │   ├── layout.tsx          # 資源頁面佈局
│   │   └── page.tsx            # 資源總覽
│   ├── services/                # 服務項目頁面
│   │   ├── layout.tsx          # 服務頁面佈局
│   │   └── page.tsx            # 服務詳細介紹
│   ├── site-map/               # 網站地圖
│   ├── terms/                  # 服務條款
│   ├── favicon.ico             # 網站圖標
│   ├── globals.css             # 全域樣式
│   ├── layout.tsx              # 根佈局
│   ├── not-found.tsx           # 404 頁面
│   ├── page.tsx                # 首頁
│   ├── robots.ts               # 搜尋引擎爬蟲規則
│   └── sitemap.ts              # 網站地圖生成
├── components/                  # React 組件
│   ├── animations/             # 動畫組件 (目前為空)
│   ├── sections/               # 頁面區塊組件
│   │   ├── CaseStudiesSection.tsx    # 成功案例區塊
│   │   ├── CTASection.tsx            # 行動呼籲區塊
│   │   ├── HeroSection.tsx           # 主視覺區塊
│   │   ├── ProblemSolutionSection.tsx # 問題解決方案區塊
│   │   └── ServicesSection.tsx       # 服務項目區塊
│   ├── seo/                    # SEO 相關組件
│   │   └── StructuredData.tsx  # 結構化資料標記
│   └── ui/                     # UI 組件
│       ├── Footer.tsx          # 頁尾組件
│       ├── Navigation.tsx      # 導航組件
│       └── VideoModal.tsx      # 影片彈出視窗
├── lib/                        # 工具函式庫
│   ├── emailjs-config.ts       # EmailJS 配置
│   └── seo.ts                  # SEO 配置
└── middleware.ts               # Next.js 中間件
```

### 靜態資源 (public/)
```
public/
├── images/                     # 圖片資源
│   ├── icon.png               # 網站圖標
│   ├── logo.png               # 完整 Logo
│   ├── logo-full.png          # 完整 Logo (高解析度)
│   ├── logo-nav.png           # 導航 Logo
│   └── og-image.jpg           # Open Graph 圖片
├── favicon.ico                # 主要圖標
├── apple-touch-icon.png       # Apple 裝置圖標
├── android-chrome-*.png       # Android 圖標
├── favicon-*.png              # 各尺寸圖標
├── robots.txt                 # 搜尋引擎規則
├── site.webmanifest          # PWA 配置
└── 其他 SVG 圖標
```

### 文檔資料 (docs/)
```
docs/
├── DEPLOYMENT_GUIDE.md        # 部署指南
├── EMAILJS_SETUP.md          # EmailJS 設置指南
├── GMAIL_GODADDY_SETUP.md    # Gmail + GoDaddy 設置
├── GOOGLE_ANALYTICS_SETUP.md # Google Analytics 設置
├── IMAGE_REQUIREMENTS.md     # 圖片需求規格
└── TODO_LIST.md              # 待辦事項清單
```

## 🎯 核心功能模組

### 1. 首頁 (/)
**檔案**：`src/app/page.tsx`
**功能**：
- Hero 區塊：主要價值主張展示
- 問題解決方案：對比企業挑戰與解決方案
- 服務項目：AI Agent 導入、程式外包
- 成功案例：客戶案例與成效統計
- 行動呼籲：引導用戶諮詢

**關鍵數據**：
- 85% 客服詢問自動回覆率
- 14小時 每日節省人工作業時間
- 50% 營運成本降低

### 2. 導航系統
**檔案**：`src/components/ui/Navigation.tsx`
**功能**：
- 響應式設計 (桌面/手機)
- 滾動時背景變化效果
- 手機版漢堡選單
- Logo 展示

**導航項目**：
- 首頁 (/)
- 關於我們 (/about)
- 服務項目 (/services)
- 成功案例 (/cases)
- 資源洞察 (/resources)
- 聯絡我們 (/contact)

### 3. 服務項目 (/services)
**檔案**：`src/app/services/page.tsx`
**主要服務**：
- **AI Agent 導入**：智能客服、自動化流程
- **程式外包**：客製化軟體開發

### 4. 成功案例 (/cases)
**檔案**：`src/app/cases/page.tsx`
**展示內容**：
- 客戶案例研究
- 實施成果數據
- 行業應用範例

### 5. 聯絡系統 (/contact)
**檔案**：`src/app/contact/page.tsx`
**功能**：
- EmailJS 整合聯絡表單
- 多元聯絡方式展示
- 免費諮詢預約

### 6. 資源洞察 (/resources)
**檔案**：`src/app/resources/page.tsx`
**內容類型**：
- AI 導入指南
- 趨勢分析文章
- 實用工具資源
- 部落格內容

## ⚙️ 配置文件詳解

### 1. SEO 配置 (src/lib/seo.ts)
```typescript
export const siteConfig = {
  name: "AIRAI - 智流科技",
  title: "AIRAI | 企業AI導入專家 - 智流科技",
  description: "AIRAI提供專業的企業AI導入諮詢服務...",
  keywords: ["AI人工智能", "企業AI導入", "AI技術選型"...],
  url: "https://airai.tw",
  company: {
    name: "智流科技有限公司",
    address: "新北市板橋區倉後街26號",
    phone: "+886 953-202-811",
    email: "contact@airai.tw"
  }
}
```

### 2. EmailJS 配置 (src/lib/emailjs-config.ts)
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  TO_EMAIL: 'contact@airai.tw'
}
```

### 3. Next.js 配置 (next.config.ts)
- 安全標頭設置
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

### 4. 依賴套件 (package.json)
**主要依賴**：
- Next.js 15.1.8
- React 19.0.0
- TypeScript 5
- Tailwind CSS 3.4.1
- Framer Motion 12.12.2
- @emailjs/browser 4.4.1

## 🎨 設計系統

### 色彩配置
- **主色**：Blue (#2563eb)
- **次色**：Indigo (#4f46e5)
- **強調色**：Purple (#7c3aed)
- **成功色**：Green (#10b981)

### 字體系統
- **主字體**：Inter (變數字體)
- **標題**：700 (Bold)
- **內文**：400 (Regular)
- **強調**：600 (Semi-bold)

### 響應式斷點
- **手機**：< 768px
- **平板**：768px - 1024px
- **桌面**：> 1024px

## 🔧 開發與部署

### 開發指令
```bash
npm run dev      # 開發模式
npm run build    # 建構生產版本
npm run start    # 啟動生產伺服器
npm run lint     # 程式碼檢查
```

### 部署流程
1. **GitHub**：程式碼版本控制
2. **Vercel**：自動部署與 CDN
3. **GoDaddy**：域名管理
4. **SSL**：自動 HTTPS 憑證

### 環境變數
```
NEXT_PUBLIC_SITE_URL=https://airai.tw
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx
```

## 📊 SEO 優化策略

### 結構化資料
- Organization Schema (公司資訊)
- Website Schema (網站資訊)
- FAQ Schema (常見問題)

### Meta 標籤優化
- Open Graph 標籤
- Twitter Card 標籤
- 多語言支援準備

### 技術 SEO
- 自動生成 sitemap.xml
- robots.txt 配置
- 語意化 HTML 結構

## 🚀 未來發展規劃

### 高優先級 (1-2週)
- [ ] Google Search Console 設置
- [ ] Google My Business 設置
- [ ] Hero 區塊主視覺圖片
- [ ] 服務圖標設計

### 中優先級 (2-4週)
- [ ] 關於我們頁面內容完善
- [ ] 實際客戶案例研究
- [ ] 部落格內容創建
- [ ] SEO 關鍵字優化

### 低優先級 (1-3個月)
- [ ] 社交媒體整合
- [ ] 線上廣告準備
- [ ] 網站效能優化
- [ ] 競爭對手分析

## 📞 技術支援

### 聯絡資訊
- **開發團隊**：AIRAI Tech Team
- **技術支援**：contact@airai.tw
- **緊急聯絡**：+886 953-202-811

### 相關文檔
- [部署指南](./DEPLOYMENT_GUIDE.md)
- [待辦事項](./docs/TODO_LIST.md)
- [圖片需求](./docs/IMAGE_REQUIREMENTS.md)
- [EmailJS 設置](./docs/EMAILJS_SETUP.md)

---

**最後更新**：2024年12月  
**文檔維護**：AIRAI 開發團隊  
**版本**：v1.0 