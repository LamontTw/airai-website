# 🔧 Logo顯示問題排查指南

## 🎯 左上角Logo顯示異常解決方案

### 已進行的調整：
1. ✅ 增加logo高度：`h-8` → `h-10`
2. ✅ 設定最大寬度：`max-w-[200px]`
3. ✅ 加入 `object-contain` 保持比例
4. ✅ Footer加入白色濾鏡：`brightness-0 invert`

## 🔍 常見問題與解決方案

### 問題1：Logo太小看不清楚
**解決方案：**
```tsx
// 調整高度和最大寬度
className="h-12 w-auto max-w-[250px] object-contain"
```

### 問題2：Logo被拉伸變形
**解決方案：**
```tsx
// 保持原始比例
className="h-10 w-auto object-contain"
```

### 問題3：Logo在深色背景看不到（Footer）
**解決方案：**
```tsx
// 白色濾鏡
className="h-10 w-auto brightness-0 invert"
```

### 問題4：Logo檔案太大影響載入
**解決方案：**
- 壓縮PNG檔案
- 考慮使用WebP格式
- 使用Next.js Image組件

## 🛠️ 進階優化選項

### 選項1：使用Next.js Image組件
```tsx
import Image from 'next/image';

<Image
  src="/images/logo-nav.png"
  alt="AIRAI - 智流科技"
  width={200}
  height={40}
  className="object-contain"
  priority
/>
```

### 選項2：響應式logo尺寸
```tsx
className="h-8 lg:h-10 w-auto max-w-[150px] lg:max-w-[200px] object-contain"
```

### 選項3：深色模式適配
```tsx
className="h-10 w-auto dark:brightness-0 dark:invert"
```

## 🎨 不同尺寸建議

### 桌面版導航欄：
- 高度：40-48px (h-10 到 h-12)
- 最大寬度：200-250px

### 行動版導航欄：
- 高度：32-40px (h-8 到 h-10)  
- 最大寬度：150-200px

### Footer：
- 高度：32-40px (h-8 到 h-10)
- 加入白色濾鏡：`brightness-0 invert`

## 🚀 快速測試命令

重新啟動開發伺服器：
```bash
npm run dev
```

清除瀏覽器快取：
- Windows: Ctrl + F5
- Mac: Cmd + Shift + R

## 📞 如果問題持續存在

請提供以下資訊：
1. Logo顯示的具體問題描述
2. 瀏覽器類型和版本
3. 螢幕截圖
4. 是否有控制台錯誤訊息

我會立即協助您解決！ 