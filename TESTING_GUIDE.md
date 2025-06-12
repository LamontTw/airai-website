# AIRAI 網站測試指南

## 📋 測試框架概述

本專案使用以下測試框架：

- **Jest + React Testing Library**: 單元測試和組件測試
- **Playwright**: 端到端測試
- **TypeScript**: 完整的類型支援

## 🚀 快速開始

### 安裝依賴
```bash
npm install
```

### 運行測試

#### 單元測試
```bash
# 運行所有單元測試
npm run test

# 監視模式運行測試
npm run test:watch

# 生成測試覆蓋率報告
npm run test:coverage
```

#### 端到端測試
```bash
# 運行所有 E2E 測試
npm run test:e2e

# 使用 UI 模式運行 E2E 測試
npm run test:e2e:ui

# 有頭模式運行 E2E 測試（顯示瀏覽器）
npm run test:e2e:headed

# 運行所有測試（單元測試 + E2E 測試）
npm run test:all
```

## 📁 測試檔案結構

```
tests/
├── e2e/                    # 端到端測試
│   ├── homepage.spec.ts    # 首頁測試
│   └── multilingual.spec.ts # 多語言測試
└── unit/                   # 單元測試（如需要）

src/
├── components/
│   └── __tests__/          # 組件測試
│       └── Footer.test.tsx
└── lib/
    └── __tests__/          # 工具函數測試
        └── i18n.test.ts
```

## 🧪 測試類型

### 1. 單元測試
測試個別函數和組件的功能：

- **i18n 函數測試**: 驗證多語言翻譯功能
- **組件測試**: 驗證 React 組件的渲染和行為

### 2. 端到端測試
測試完整的用戶流程：

- **首頁功能測試**: 導航、Hero 區塊、服務項目、Footer
- **多語言測試**: 中文、英文、日文版本的完整功能
- **響應式設計測試**: 桌面版和手機版顯示
- **SEO 測試**: meta 標籤和 hreflang 設置

## 📊 測試覆蓋率

目前設置的覆蓋率目標：
- **分支覆蓋率**: 70%
- **函數覆蓋率**: 70%
- **行覆蓋率**: 70%
- **語句覆蓋率**: 70%

## 🔧 配置檔案

### Jest 配置 (`jest.config.js`)
- 使用 Next.js Jest 配置
- 設置測試環境為 jsdom
- 配置路徑映射 (`@/` -> `src/`)
- 設置覆蓋率收集規則

### Playwright 配置 (`playwright.config.ts`)
- 支援多瀏覽器測試（Chrome、Firefox、Safari）
- 手機版測試支援
- 自動啟動開發伺服器
- 失敗時自動截圖

## 🎯 測試最佳實踐

### 單元測試
1. **測試命名**: 使用描述性的中文測試名稱
2. **測試隔離**: 每個測試應該獨立運行
3. **Mock 依賴**: 適當地 mock 外部依賴
4. **斷言清晰**: 使用明確的斷言語句

### 端到端測試
1. **頁面物件模式**: 將頁面元素和操作封裝
2. **等待策略**: 使用適當的等待策略
3. **測試數據**: 使用穩定的測試數據
4. **清理**: 測試後清理狀態

## 🐛 常見問題

### 1. 測試失敗排查
```bash
# 檢查測試詳細輸出
npm run test -- --verbose

# 運行特定測試檔案
npm run test -- Footer.test.tsx
```

### 2. E2E 測試調試
```bash
# 使用 UI 模式調試
npm run test:e2e:ui

# 有頭模式查看瀏覽器行為
npm run test:e2e:headed
```

### 3. 覆蓋率問題
```bash
# 查看詳細覆蓋率報告
npm run test:coverage
open coverage/lcov-report/index.html
```

## 📈 持續改進

### 計劃新增的測試
1. **表單測試**: 聯絡表單提交和驗證
2. **API 測試**: 後端 API 端點測試
3. **性能測試**: 頁面載入速度測試
4. **可訪問性測試**: WCAG 合規性測試

### 測試自動化
- **CI/CD 整合**: GitHub Actions 自動運行測試
- **測試報告**: 自動生成測試報告
- **失敗通知**: 測試失敗時自動通知

## 🔗 相關資源

- [Jest 官方文檔](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright 官方文檔](https://playwright.dev/)
- [Next.js 測試指南](https://nextjs.org/docs/testing)

---

**最後更新**: ${new Date().toLocaleDateString('zh-TW')}
**維護者**: AIRAI 開發團隊 