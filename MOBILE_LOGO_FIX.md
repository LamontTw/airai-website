# 手機模式Logo顯示修正

## 問題描述
用戶反映在手機模式下：
1. logo-nav 太大了
2. 首頁的「專為台灣中小企業設計的AI解決方案」文字與Nav錯開

## 修正內容

### 1. Logo響應式大小調整
**檔案**: `src/components/ui/Navigation.tsx`

**修正前**:
```css
className="h-13 w-auto max-w-[200px] object-contain"
```

**修正後**:
```css
className="h-8 sm:h-10 lg:h-[3.25rem] w-auto max-w-[150px] sm:max-w-[180px] lg:max-w-[260px] object-contain"
```

**變更說明**:
- **手機**: `h-8` (32px) + `max-w-[150px]` - 適合小螢幕
- **平板**: `h-10` (40px) + `max-w-[180px]` - 中等螢幕
- **桌面**: `h-[3.25rem]` (52px) + `max-w-[260px]` - 大螢幕，最大視覺重量

### 2. HeroSection上邊距調整
**檔案**: `src/components/sections/HeroSection.tsx`

**修正前**:
```css
className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
```

**修正後**:
```css
className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden pt-16 lg:pt-20"
```

**變更說明**:
- 新增 `pt-16`（手機64px上邊距）避免與導航重疊
- 新增 `lg:pt-20`（桌面80px上邊距）對應導航高度

## 響應式設計細節

### Navigation高度
- 手機: `h-16` (64px)
- 桌面: `lg:h-20` (80px)

### Logo相對應調整
- 手機logo高度從原本過大改為 32px，並限制最大寬度150px
- 桌面logo高度調整為 52px，最大寬度260px，最大化品牌識別度
- 確保在小螢幕上logo不會占用過多空間
- 保持logo比例不變形

## 測試建議
請在以下設備/模式下測試：
1. iPhone SE (375px寬)
2. iPhone 12/13 (390px寬) 
3. iPad (768px寬)
4. 桌面 (1024px+)

確認：
- Logo大小在各尺寸下都適中
- 首頁文字不與導航重疊
- 導航功能正常
- 整體視覺平衡良好 