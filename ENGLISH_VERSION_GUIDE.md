# AIRAI 官網英文版實作指南

> **完整的雙語言網站實作方案** - 支援中文 (預設) 和英文版本
> 
> 分支：`feature/english-version`  
> 更新日期：2024年12月  
> 版本：v1.0

## 📋 實作概述

### 🎯 目標
為 AIRAI 官網新增英文版本，提供完整的雙語言支援，擴大國際市場觸及範圍。

### 🌍 語言路由策略
- **中文版 (預設)**：`https://airai.tw/`
- **英文版**：`https://airai.tw/en/`

### 🛠️ 技術方案
使用 Next.js 13+ App Router 的路由分段式國際化，透過 `/en` 路由前綴實現多語言支援。

## 🗂️ 新增檔案結構

### 核心配置文件
```
src/
├── lib/
│   └── i18n.ts                    # 國際化配置和翻譯內容
├── middleware.ts                  # 語言路由中間件 (已更新)
└── components/
    └── ui/
        └── LanguageSwitcher.tsx   # 語言切換組件
```

### 英文版頁面結構
```
src/app/en/
├── layout.tsx                     # 英文版根佈局
├── page.tsx                       # 英文版首頁
├── about/
│   └── page.tsx                   # 關於我們 (英文)
├── services/                      # 服務項目 (待建立)
├── cases/                         # 成功案例 (待建立)
├── contact/                       # 聯絡我們 (待建立)
├── resources/                     # 資源洞察 (待建立)
├── privacy/                       # 隱私政策 (待建立)
└── terms/                         # 服務條款 (待建立)
```

## 🔧 核心功能實作

### 1. 國際化配置 (`src/lib/i18n.ts`)

```typescript
// 支援的語言
export const locales = ['zh', 'en'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'zh'

// 翻譯內容
export const translations = {
  zh: {
    nav: { home: '首頁', about: '關於我們', ... },
    home: { title: '將 AI 融入日常工作', ... },
    // ... 更多翻譯
  },
  en: {
    nav: { home: 'Home', about: 'About Us', ... },
    home: { title: 'Integrate AI into Daily Operations', ... },
    // ... 更多翻譯
  }
}
```

**主要功能**：
- 集中管理所有翻譯內容
- 提供工具函數取得翻譯文字
- 支援巢狀物件結構

### 2. 語言路由中間件 (`src/middleware.ts`)

```typescript
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 檢查路徑是否已經包含支援的語言
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // 根據 Accept-Language header 自動重新導向
  if (!pathnameHasLocale && !pathname.includes('.')) {
    const locale = getLocale(request)
    if (locale === 'en') {
      return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
    }
  }

  return NextResponse.next()
}
```

**主要功能**：
- 自動語言檢測
- 路由重新導向
- 靜態資源排除

### 3. 語言切換組件 (`src/components/ui/LanguageSwitcher.tsx`)

```typescript
export default function LanguageSwitcher() {
  const pathname = usePathname()
  const isEnglish = pathname.startsWith('/en')
  
  const getAlternatePath = () => {
    if (isEnglish) {
      return pathname.replace('/en', '') || '/'
    } else {
      return `/en${pathname}`
    }
  }
  
  // 下拉選單 UI
}
```

**主要功能**：
- 智能路徑轉換
- 響應式下拉選單
- 當前語言顯示

### 4. 多語言導航 (`src/components/ui/Navigation.tsx`)

**更新內容**：
- 整合語言切換組件
- 動態生成導航項目
- 根據當前語言調整連結

## 📊 SEO 優化策略

### 1. 語言標記
```html
<!-- 英文版 layout -->
<html lang="en">
<link rel="alternate" hrefLang="zh-TW" href="https://airai.tw" />
<link rel="alternate" hrefLang="en-US" href="https://airai.tw/en" />
<link rel="alternate" hrefLang="x-default" href="https://airai.tw" />
```

### 2. 獨立 Meta 標籤
- 英文版有獨立的 title、description、keywords
- Open Graph 和 Twitter Card 支援
- 正確的 canonical URL 設定

### 3. Sitemap 更新
- 自動包含所有英文版頁面
- 適當的優先級設定
- 更新頻率配置

## 🚀 已完成功能

### ✅ 基礎架構
- [x] 路由結構建立
- [x] 國際化配置
- [x] 語言切換功能
- [x] 中間件路由處理

### ✅ 頁面實作
- [x] 英文版 Layout
- [x] 英文版首頁
- [x] 英文版關於我們頁面

### ✅ SEO 優化
- [x] 語言標記
- [x] Meta 標籤
- [x] Sitemap 更新
- [x] 結構化資料

## 📝 待完成項目

### 🔄 頁面內容 (高優先級)
- [ ] 英文版服務項目頁面 (`/en/services`)
- [ ] 英文版成功案例頁面 (`/en/cases`)
- [ ] 英文版聯絡我們頁面 (`/en/contact`)
- [ ] 英文版資源洞察頁面 (`/en/resources`)

### 🔄 組件國際化 (中優先級)
- [ ] HeroSection 組件多語言支援
- [ ] ServicesSection 組件多語言支援
- [ ] CaseStudiesSection 組件多語言支援
- [ ] Footer 組件多語言支援

### 🔄 內容翻譯 (中優先級)
- [ ] 擴展翻譯內容覆蓋所有文字
- [ ] 專業術語統一翻譯
- [ ] 行銷文案本地化

### 🔄 進階功能 (低優先級)
- [ ] 語言偏好記憶 (localStorage)
- [ ] 自動語言檢測優化
- [ ] 多語言搜尋功能

## 🛠️ 開發指南

### 新增英文版頁面
1. 在 `src/app/en/` 下建立對應目錄
2. 複製中文版頁面結構
3. 更新 Meta 標籤為英文
4. 替換內容為英文翻譯
5. 更新內部連結加上 `/en` 前綴

### 組件國際化
1. 在組件中使用 `usePathname()` 檢測語言
2. 從 `src/lib/i18n.ts` 取得翻譯內容
3. 根據語言動態渲染內容

### 翻譯內容管理
1. 所有翻譯統一在 `src/lib/i18n.ts` 管理
2. 使用巢狀物件組織翻譯結構
3. 提供預設值避免翻譯缺失

## 🧪 測試指南

### 功能測試
```bash
# 啟動開發伺服器
npm run dev

# 測試路由
- 訪問 http://localhost:3000 (中文版)
- 訪問 http://localhost:3000/en (英文版)
- 測試語言切換功能
- 檢查導航連結正確性
```

### 建構測試
```bash
# 建構專案
npm run build

# 檢查是否有編譯錯誤
# 驗證所有路由可正常訪問
```

## 📈 效益評估

### SEO 優勢
- 擴大國際搜尋曝光
- 提升英文關鍵字排名
- 增加海外流量來源

### 用戶體驗
- 提供母語瀏覽體驗
- 降低語言障礙
- 提升國際客戶信任度

### 商業價值
- 開拓國際市場
- 吸引外資企業
- 提升品牌國際形象

## 🚀 部署注意事項

### 環境變數
確保以下環境變數正確設定：
```
NEXT_PUBLIC_SITE_URL=https://airai.tw
```

### Vercel 配置
- 自動支援多語言路由
- 正確的重新導向規則
- CDN 快取策略

### 監控指標
- 英文版頁面訪問量
- 語言切換使用率
- 國際用戶停留時間
- 轉換率比較

## 📞 技術支援

### 相關文檔
- [AIRAI 官網完整資料結構](./AIRAI_WEBSITE_STRUCTURE.md)
- [部署指南](./DEPLOYMENT_GUIDE.md)
- [Next.js 國際化文檔](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

### 聯絡資訊
- **開發團隊**：AIRAI Tech Team
- **技術支援**：contact@airai.tw
- **分支管理**：feature/english-version

---

**實作狀態**：基礎架構完成，頁面內容持續開發中  
**下一步**：完成剩餘英文版頁面，組件國際化  
**預計完成**：2-3 週內完整上線 