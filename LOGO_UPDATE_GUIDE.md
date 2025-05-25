# 🎨 Logo與Icon更新指南

## 📋 需要準備的檔案

### 1. Favicon（瀏覽器分頁icon）
```
檔案名稱: favicon.ico
尺寸: 32x32px
格式: ICO
路徑: src/app/favicon.ico
```

### 2. PWA App Icons（手機桌面icon）
```
檔案名稱: android-chrome-192x192.png
尺寸: 192x192px
格式: PNG
路徑: public/android-chrome-192x192.png

檔案名稱: android-chrome-512x512.png  
尺寸: 512x512px
格式: PNG
路徝: public/android-chrome-512x512.png
```

### 3. Logo圖片（SEO使用）
```
檔案名稱: logo.png
尺寸: 建議 200x60px（或等比例）
格式: PNG（透明背景）
路徑: public/images/logo.png
```

### 4. 社交媒體分享圖
```
檔案名稱: og-image.jpg
尺寸: 1200x630px
格式: JPG
路徑: public/images/og-image.jpg
```

## 🔧 更新步驟

### 步驟1：替換檔案
1. 將準備好的檔案放到對應路徑
2. 確保檔案名稱完全一致

### 步驟2：更新Navigation中的Logo（可選）
如果要使用圖片logo取代目前的文字logo，需要修改：
```
檔案: src/components/ui/Navigation.tsx
位置: 第41-46行
```

目前的文字logo：
```jsx
<div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-sm">智</span>
</div>
<span className="text-xl font-bold text-gray-900">智流科技</span>
```

改為圖片logo：
```jsx
<img 
  src="/images/logo.png" 
  alt="智流科技" 
  className="h-8 w-auto"
/>
```

### 步驟3：檢查與測試
1. 重新啟動開發伺服器：`npm run dev`
2. 檢查瀏覽器分頁是否顯示新favicon
3. 測試PWA安裝功能
4. 檢查社交媒體分享是否顯示新圖片

## 🎨 設計建議

### Logo設計原則
- **簡潔明瞭**：適合各種尺寸顯示
- **品牌一致**：與網站整體色調協調
- **可讀性佳**：在小尺寸下仍清晰可見

### 色彩搭配
網站主色系：
- 主色：#2563eb（藍色）
- 輔色：#4f46e5（靛藍色）
- 強調色：#7c3aed（紫色）

### 檔案大小建議
- Favicon: < 50KB
- PWA Icons: < 100KB each
- Logo: < 50KB
- OG Image: < 300KB

## 🔍 檢查清單

- [ ] favicon.ico 已替換
- [ ] android-chrome-192x192.png 已放置
- [ ] android-chrome-512x512.png 已放置  
- [ ] logo.png 已放置
- [ ] og-image.jpg 已放置
- [ ] 開發伺服器重新啟動
- [ ] 瀏覽器清除快取測試
- [ ] 行動裝置測試
- [ ] 社交媒體分享測試

## 🛠 工具推薦

### Favicon生成工具
- [favicon.io](https://favicon.io/)
- [Real Favicon Generator](https://realfavicongenerator.net/)

### 圖片壓縮工具
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

### 設計工具
- Figma（向量設計）
- Canva（快速設計）
- Adobe Illustrator（專業設計）

---

**注意事項**：
- 更新後建議清除瀏覽器快取
- PWA圖示可能需要重新安裝app才會更新
- 建議準備SVG格式的向量logo作為備份 