# 🚀 Next.js專案部署到Vercel + GoDaddy網域綁定指南

## 📋 目錄
1. [準備專案](#準備專案)
2. [推送到GitHub](#推送到github)
3. [部署到Vercel](#部署到vercel)
4. [設定GoDaddy網域](#設定godaddy網域)
5. [SSL與安全設定](#ssl與安全設定)
6. [常見問題解決](#常見問題解決)

## 🔧 準備專案

### 1. 檢查專案設定

確保您的專案已經可以正常運行：

```bash
# 安裝依賴
npm install

# 本地測試
npm run dev

# 建構測試
npm run build
```

### 2. 優化部署設定

檢查 `next.config.ts` 設定：

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // 可選：用於Docker部署
  images: {
    domains: ['your-domain.com'], // 如果有外部圖片
  },
  env: {
    // 環境變數
  }
}

module.exports = nextConfig
```

## 📚 推送到GitHub

### 1. 添加檔案到Git

```bash
# 添加所有檔案
git add .

# 提交變更
git commit -m "Initial commit: AI website ready for deployment"
```

### 2. 連接到GitHub

在GitHub上創建新倉庫，然後：

```bash
# 設定遠端倉庫
git remote add origin https://github.com/你的用戶名/airai-website.git

# 推送到GitHub
git branch -M main
git push -u origin main
```

## 🌐 部署到Vercel

### 方法 1：使用Vercel CLI（推薦）

1. **安裝Vercel CLI**：
```bash
npm install -g vercel
```

2. **登入Vercel**：
```bash
vercel login
```

3. **部署專案**：
```bash
vercel
```

按照提示完成設定。

### 方法 2：使用Vercel網頁界面

1. 前往 [vercel.com](https://vercel.com)
2. 點擊 "New Project"
3. 連接您的GitHub帳號
4. 選擇 `airai-website` 倉庫
5. 配置專案設定：
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

6. 點擊 "Deploy"

## 🔗 設定GoDaddy網域

### 1. 在Vercel添加網域

1. 進入Vercel專案儀表板
2. 點擊 "Settings" → "Domains"
3. 添加您的GoDaddy網域（例如：`yoursite.com`）
4. Vercel會提供DNS記錄資訊

### 2. 在GoDaddy設定DNS

登入GoDaddy控制台，進入DNS管理：

#### A. 如果是根網域（yoursite.com）：

**刪除現有記錄**，添加以下記錄：

```
Type: A
Name: @
Value: 76.76.19.61
TTL: 600

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

#### B. 如果是子網域（www.yoursite.com）：

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

### 3. 驗證網域

回到Vercel儀表板：
1. 點擊 "Refresh" 驗證DNS設定
2. 等待DNS傳播（可能需要1-48小時）
3. 看到綠色勾號表示設定成功

## 🔒 SSL與安全設定

Vercel會自動提供免費SSL證書：

1. **自動SSL**：Vercel會為所有網域自動配置Let's Encrypt SSL
2. **強制HTTPS**：在Vercel設定中啟用 "Force HTTPS"
3. **安全標頭**：在 `next.config.ts` 中添加：

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## 🛠️ 環境變數設定

如果專案使用環境變數：

1. 在Vercel儀表板進入 "Settings" → "Environment Variables"
2. 添加所需環境變數：
   - `NODE_ENV=production`
   - 其他API金鑰等敏感資訊

## 📊 效能優化

### 1. 圖片優化

使用Next.js Image組件：

```jsx
import Image from 'next/image'

<Image
  src="/your-image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority={true} // 首頁重要圖片
/>
```

### 2. 分析組件

在 `layout.tsx` 中添加：

```jsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## ❗ 常見問題解決

### 1. DNS傳播慢

- 使用 [whatsmydns.net](https://whatsmydns.net) 檢查DNS傳播狀態
- 清除瀏覽器DNS快取：`chrome://net-internals/#dns`

### 2. 建構錯誤

```bash
# 本地測試建構
npm run build

# 檢查錯誤日誌
vercel logs
```

### 3. 404錯誤

確保 `app` 目錄結構正確：
```
src/
  app/
    layout.tsx
    page.tsx
    about/
      page.tsx
```

### 4. 樣式問題

確保Tailwind CSS配置正確：

```javascript
// tailwind.config.ts
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // ...
}
```

## 🎯 部署後檢查清單

- [ ] 網站可以正常訪問
- [ ] SSL證書正常工作（綠色鎖頭）
- [ ] 所有頁面都能正常載入
- [ ] 響應式設計在手機上正常
- [ ] 圖片和資源都能正常載入
- [ ] 搜尋引擎優化（SEO）設定完成

## 🔄 自動部署

設定完成後，每次推送到GitHub的main分支都會自動觸發Vercel重新部署：

```bash
# 更新代碼
git add .
git commit -m "Update website"
git push origin main
```

## 📞 技術支援

如果遇到問題：

1. **Vercel文檔**：[vercel.com/docs](https://vercel.com/docs)
2. **GoDaddy支援**：[godaddy.com/help](https://godaddy.com/help)
3. **Next.js文檔**：[nextjs.org/docs](https://nextjs.org/docs)

---

**恭喜！您的AI網站現在已經成功部署並可以通過自定義網域訪問了！** 🎉 