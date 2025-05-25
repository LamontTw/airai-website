# 📁 Logo檔案放置指南

## 🎯 您需要放置的檔案

根據您提供的三張logo圖片，請將它們重新命名並放置到以下位置：

### 📂 public/images/ 目錄
```
public/images/logo-nav.png      ← 導航欄logo（橫向，約120x32px）
public/images/logo-full.png     ← 完整logo（包含標語，約400x120px）  
public/images/icon.png          ← 圖標版本（正方形，512x512px）
```

## 🚀 快速部署步驟

### 步驟1：放置檔案
1. 將您的三張圖片重新命名：
   - 導航欄logo → `logo-nav.png`
   - 完整logo → `logo-full.png`
   - 圖標版本 → `icon.png`

2. 將它們放到 `public/images/` 目錄

### 步驟2：生成Favicon（可選）
```bash
# 安裝sharp圖片處理庫
npm install sharp

# 執行favicon生成腳本
node generate-favicons.js
```

### 步驟3：測試
```bash
# 重新啟動開發伺服器
npm run dev

# 打開瀏覽器檢查
# http://localhost:3000
```

## 📋 檔案結構檢查

放置完成後，您的檔案結構應該如下：

```
airai-website/
├── public/
│   ├── images/
│   │   ├── logo-nav.png      ✅ 導航欄logo
│   │   ├── logo-full.png     ✅ 完整logo
│   │   └── icon.png          ✅ 圖標
│   ├── favicon-16x16.png     ⚡ 自動生成
│   ├── favicon-32x32.png     ⚡ 自動生成
│   ├── android-chrome-192x192.png  ⚡ 自動生成
│   ├── android-chrome-512x512.png  ⚡ 自動生成
│   └── apple-touch-icon.png  ⚡ 自動生成
└── src/
    └── app/
        └── favicon.ico       ⚡ 自動生成
```

## ✅ 已完成的程式碼更新

我已經為您完成了以下程式碼修改：

### 1. Navigation 導航欄
- ✅ 文字logo → 圖片logo (`logo-nav.png`)
- ✅ 移除舊的"智"字圖標樣式

### 2. Footer 頁尾
- ✅ 文字logo → 圖片logo (`logo-nav.png`)

### 3. SEO配置
- ✅ 更新結構化資料中的logo路徑
- ✅ 更新社交媒體分享圖片

### 4. Favicon配置
- ✅ 新增多尺寸favicon支援
- ✅ 優化PWA圖標配置

## 🎨 設計建議

### Logo-nav.png（導航欄）
- **建議尺寸**：120-150px寬 × 32-40px高
- **內容**：AI圖標 + "airai.tw" 文字
- **格式**：PNG透明背景
- **適用場景**：導航欄、頁尾

### Logo-full.png（完整版）
- **建議尺寸**：400px寬 × 120px高
- **內容**：完整logo含標語
- **格式**：PNG透明背景  
- **適用場景**：首頁、關於頁面、社交分享

### Icon.png（圖標）
- **建議尺寸**：512×512px（正方形）
- **內容**：純AI圖標
- **格式**：PNG透明背景
- **適用場景**：Favicon、PWA圖標

## 🔧 故障排除

### 如果logo顯示不正常：
1. 檢查檔案名稱是否完全一致
2. 確認檔案路徑正確
3. 清除瀏覽器快取（Ctrl+F5）
4. 重新啟動開發伺服器

### 如果favicon沒有更新：
1. 執行 `node generate-favicons.js`
2. 清除瀏覽器快取
3. 檢查 `src/app/favicon.ico` 是否存在

### 如果需要調整logo尺寸：
1. 修改CSS類別：`className="h-8 w-auto"`
2. 調整 `h-8` 為其他數值（h-6, h-10等）

---

📞 **需要協助？**
如果遇到任何問題，請告訴我具體的錯誤訊息或現象，我會立即幫您解決！ 