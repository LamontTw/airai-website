# 智流科技網站 - 上線部署指南

## 🚀 **快速部署 (推薦：Vercel)**

### **Step 1: 部署到 Vercel**
```bash
# 1. 安裝 Vercel CLI
npm i -g vercel

# 2. 登入 Vercel
vercel login

# 3. 部署專案 
vercel

# 4. 設定自訂域名
vercel --prod
```

### **Step 2: 域名設定**
1. 購買域名：`airai.tw` (建議在 PChome、GoDaddy)
2. 在 Vercel 添加自訂域名
3. 設定 DNS 指向 Vercel
4. 等待 SSL 證書生效 (5-30分鐘)

## 📊 **Google 搜尋優化 (SEO)**

### **🔥 上線立即執行清單**

#### **1. Google Search Console 設定**
```bash
# 前往: https://search.google.com/search-console
1. 添加 https://airai.tw 
2. 驗證域名擁有權 (HTML檔案驗證)
3. 提交 sitemap: https://airai.tw/sitemap.xml
4. 提交首頁索引請求
```

#### **2. Google Analytics 設定**
```bash
# 前往: https://analytics.google.com
1. 建立新帳戶：智流科技
2. 設定 GA4 追蹤代碼
3. 加入到 _app.tsx 或使用 @next/third-parties
```

#### **3. Google My Business**
```bash
# 前往: https://business.google.com
1. 註冊商家：智流科技
2. 地址：新北市板橋區倉後街26號
3. 電話：+886 953-202-811
4. 網站：https://airai.tw
5. 營業時間：週一至週五 09:00-18:00
```

### **🎯 SEO 關鍵詞策略**

#### **主要目標關鍵詞**
```
1. AI導入 (搜尋量: 2,400/月)
2. 企業AI (搜尋量: 1,600/月) 
3. RPA自動化 (搜尋量: 1,200/月)
4. 智能客服 (搜尋量: 3,600/月)
5. AI Agent (搜尋量: 8,100/月)
```

#### **長尾關鍵詞**
```
- "台灣 AI 導入 顧問"
- "中小企業 AI 解決方案"
- "客服機器人 建置"
- "RPA 流程自動化 台灣"
- "AI 程式外包"
```

### **📝 內容優化檢查清單**

#### **頁面 SEO 優化**
- [x] 每頁都有獨特的 title 和 description
- [x] H1-H6 標籤結構完整
- [x] 圖片都有 alt 文字
- [x] 內部連結完整
- [x] 載入速度 < 3 秒
- [x] 手機響應式設計
- [x] HTTPS 安全連線

#### **技術 SEO**
- [x] robots.txt 已設定
- [x] sitemap.xml 自動生成
- [x] 結構化數據 (JSON-LD)
- [x] Open Graph 標籤
- [x] 語意化 HTML 標籤
- [ ] 待加入：圖片 sitemap

#### **內容 SEO**
- [x] 關鍵詞自然分佈
- [x] 內容原創且有價值
- [x] FAQ 結構化數據
- [ ] 待新增：更多 Blog 文章

## 🏆 **Google 排名提升策略**

### **Phase 1: 基礎建立 (0-3個月)**
```
目標：被 Google 收錄，建立基本排名

行動：
1. ✅ 網站上線並提交 Google
2. 📝 每週發布 1-2 篇 Blog 文章  
3. 🔗 建立基本的反向連結
4. 📊 監控 Search Console 數據

預期：3個月內進入前100名
```

### **Phase 2: 排名提升 (3-6個月)**
```
目標：主要關鍵詞進入前30名

行動：
1. 📈 優化頁面載入速度
2. 📱 改善使用者體驗 (UX)
3. 🎯 建立主題相關內容集群
4. 🤝 與其他網站合作交換連結

預期：6個月內進入前30名
```

### **Phase 3: 競爭優勢 (6-12個月)**
```
目標：核心關鍵詞進入前10名

行動：
1. 🏆 發布高質量的專業內容
2. 📺 製作影片內容 (YouTube SEO)
3. 💬 積極參與產業社群
4. 📊 定期更新和優化現有內容

預期：12個月內進入前10名
```

## 📈 **追蹤和監控工具**

### **免費工具**
```
✅ Google Search Console - 搜尋流量分析
✅ Google Analytics 4 - 網站流量分析  
✅ Google PageSpeed Insights - 網站速度檢測
✅ Google My Business - 本地搜尋優化
🆓 Ubersuggest - 關鍵詞研究 (免費額度)
```

### **付費工具 (建議)**
```
💰 Ahrefs ($99/月) - 競爭對手分析、關鍵詞追蹤
💰 SEMrush ($119/月) - 全方位 SEO 工具
💰 Screaming Frog ($239/年) - 網站技術 SEO 檢測
```

## 🎯 **立即執行的行動計畫**

### **Week 1: 基礎設定**
```bash
Day 1-2: 
- 部署到 Vercel
- 設定自訂域名
- 安裝 SSL 證書

Day 3-4:
- 設定 Google Search Console
- 提交 sitemap 
- 設定 Google Analytics

Day 5-7:
- 設定 Google My Business
- 檢查所有頁面是否正常
- 測試網站速度和手機版
```

### **Week 2: 內容優化**
```bash
- 發布第一篇 Blog 文章
- 優化所有頁面的 SEO 標籤
- 檢查內部連結結構
- 新增更多 FAQ 內容
```

### **Week 3-4: 推廣和監控**
```bash
- 分享到社群媒體
- 聯絡產業相關網站
- 監控 Google 收錄狀況
- 分析第一個月的數據
```

## 💡 **其他平台註冊建議**

### **台灣本地平台**
```
🏢 台灣黃頁 - https://www.taiwanyp.com.tw
🏢 1111商搜網 - https://trade.1111.com.tw  
🏢 阿里巴巴台灣 - https://tw.1688.com
🏪 Google Maps 商家登錄
```

### **社群媒體**
```
📘 Facebook 粉絲專頁 - 本地客戶觸及
📺 YouTube 頻道 - 影片 SEO 和專業展示
💼 LinkedIn 公司專頁 - B2B 客戶開發
📱 LINE 官方帳號 - 客戶服務和溝通
```

### **產業目錄**
```
🔧 台灣軟體協會
💻 資策會廠商名錄  
🤖 台灣人工智慧學校合作夥伴
🏭 中小企業總會會員
```

## ⚡ **緊急檢查清單 (上線前)**

```bash
□ 所有連結都正常運作
□ 表單提交功能測試 (EmailJS)
□ 手機版顯示正常
□ 載入速度 < 3 秒
□ 所有圖片都有 alt 文字
□ Contact 資訊正確
□ SSL 證書正常
□ robots.txt 和 sitemap.xml 可訪問
□ Google Analytics 追蹤代碼已安裝
□ 404 頁面設定完成
```

---

**🎉 上線成功後，預計 3-7 天內會開始被 Google 收錄！**

**需要技術支援請隨時聯絡！** 🚀 