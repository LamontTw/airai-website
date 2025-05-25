# Google Analytics 4 設定指南

## 🎯 **已完成的技術設定**

✅ 已安裝 `@next/third-parties` 套件
✅ 已更新 `src/app/layout.tsx` 文件
✅ 已準備好環境變數配置

## 📋 **您需要完成的步驟**

### **Step 1: 獲取 GA4 測量 ID**

1. **前往 Google Analytics**
   ```
   https://analytics.google.com
   ```

2. **建立帳戶**
   - 帳戶名稱：`智流科技`
   - 資源名稱：`智流科技官網`
   - 報表時區：`台灣`
   - 貨幣：`新台幣 (TWD)`

3. **設定資料串流**
   - 平台：`網站`
   - 網站網址：`https://airai.tw`
   - 串流名稱：`智流科技官網`

4. **獲取測量 ID**
   - 完成後會顯示測量 ID
   - 格式：`G-XXXXXXXXXX`
   - 請記下這個 ID

### **Step 2: 設定環境變數**

1. **在專案根目錄建立 `.env.local` 檔案**
   ```bash
   # 在 D:\airai-website\ 目錄下
   建立檔案：.env.local
   ```

2. **加入以下內容**
   ```bash
   # Google Analytics 4 測量 ID
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   
   # 請將 G-XXXXXXXXXX 替換為您實際的測量 ID
   ```

### **Step 3: 設定 Vercel 環境變數**

1. **前往 Vercel Dashboard**
   ```
   https://vercel.com/dashboard
   ```

2. **選擇您的專案 `airai-website`**

3. **進入 Settings > Environment Variables**

4. **新增環境變數**
   ```
   Name: NEXT_PUBLIC_GA_ID
   Value: G-XXXXXXXXXX (您的實際測量 ID)
   Environments: Production, Preview, Development
   ```

5. **儲存後重新部署**
   ```bash
   git add .
   git commit -m "新增 Google Analytics 追蹤"
   git push
   ```

## ✅ **驗證安裝成功**

### **方法1: 瀏覽器開發者工具**
```bash
1. 開啟 https://airai.tw
2. 按 F12 開啟開發者工具
3. 切換到 Network 頁籤
4. 重新載入頁面
5. 搜尋 "gtag" 或 "google-analytics"
6. 如果有看到請求 = 安裝成功
```

### **方法2: GA4 即時報表**
```bash
1. 進入 Google Analytics
2. 點擊左側「即時」報表
3. 開啟您的網站
4. 如果即時報表顯示有訪客 = 安裝成功
```

### **方法3: Google Analytics Debugger 擴充功能**
```bash
1. 安裝 Chrome 擴充功能：Google Analytics Debugger
2. 開啟擴充功能
3. 造訪您的網站
4. 檢查 Console 是否有 GA 相關訊息
```

## 📊 **預期功能**

安裝完成後，Google Analytics 會自動追蹤：

### **基本數據**
- ✅ 頁面瀏覽量
- ✅ 訪客數量
- ✅ 工作階段時長
- ✅ 跳出率

### **進階數據**
- ✅ 流量來源 (Google、直接、社群媒體)
- ✅ 地理位置資訊
- ✅ 裝置類型 (手機、電腦、平板)
- ✅ 瀏覽器和作業系統

### **轉換追蹤**
- ✅ 聯絡表單提交
- ✅ 特定頁面瀏覽 (如服務頁面)
- ✅ 外部連結點擊

## 🔍 **故障排除**

### **問題1: 即時報表沒有數據**
```bash
原因: 環境變數設定錯誤
解決: 檢查 .env.local 和 Vercel 環境變數是否正確
```

### **問題2: 控制台錯誤訊息**
```bash
原因: 測量 ID 格式錯誤
解決: 確認格式為 G-XXXXXXXXXX (G- 開頭)
```

### **問題3: 數據延遲**
```bash
原因: GA4 數據處理需要時間
解決: 即時報表立即顯示，標準報表需要 24-48 小時
```

## 📈 **重要提醒**

1. **即時數據 vs 標準報表**
   - 即時報表：立即顯示（過去30分鐘）
   - 標準報表：24-48小時後完整顯示

2. **隱私權合規**
   - 已自動啟用 IP 匿名化
   - 符合 GDPR 要求
   - 建議在隱私權政策中說明

3. **數據保留**
   - 免費版：14個月
   - 可在設定中調整

---

**完成設定後，您就能開始追蹤網站流量和用戶行為了！** 📊🚀 