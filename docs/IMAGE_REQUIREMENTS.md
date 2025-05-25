# 智流科技網站 - 圖片需求規劃

## 🎯 **優先級圖片清單**

### **P0 - 必須補充**
- [ ] **Hero主視覺** (1920x1080px) - 首頁最重要的視覺
- [ ] **服務圖示** (400x300px x4) - AI Agent、RPA、客服、數據分析
- [ ] **About團隊照片** (300x300px x4) - 呂執行長、羅項目經理、郭技術長、設計師

### **P1 - 建議補充**
- [ ] **案例配圖** (600x400px x3) - 批發商行、會計事務所、電商案例
- [ ] **Blog文章配圖** (800x400px x4) - 替換目前的og-image.jpg
- [ ] **流程圖解** (800x600px x3) - AI導入流程、服務流程、技術架構

### **P2 - 未來優化**
- [ ] **背景紋理** (1920x1080px) - 各section背景圖
- [ ] **產品截圖** (1200x800px) - AI工具界面、儀表板
- [ ] **動畫素材** (Lottie檔案) - 載入動畫、互動效果

## 📐 **圖片規格標準**

### **格式要求**
- **主要格式**: WebP (壓縮率高、現代瀏覽器支援)
- **備用格式**: PNG/JPG (舊瀏覽器相容)
- **向量圖**: SVG (圖示、logo)

### **尺寸規範**
```
Hero主視覺    : 1920x1080px (16:9)
服務圖示      : 400x300px (4:3)
案例配圖      : 600x400px (3:2) 
Blog配圖     : 800x400px (2:1)
團隊照片      : 300x300px (1:1)
社群分享圖    : 1200x630px (OG Image)
```

### **品質要求**
- **解析度**: 72-150 DPI (網頁用)
- **檔案大小**: < 500KB (載入速度)
- **色彩空間**: sRGB
- **壓縮**: 75-85% 品質

## 🎨 **視覺風格指南**

### **色調方案**
- **主色**: #2563EB (藍色) - 科技、信任
- **輔色**: #7C3AED (紫色) - 創新、智慧  
- **中性**: #F8FAFC (淺灰) - 乾淨、專業
- **強調**: #059669 (綠色) - 成功、成長

### **設計風格**
- **風格**: 現代簡約、專業商務
- **元素**: 幾何圖形、漸層、科技線條
- **氛圍**: 溫暖親和、可信賴、創新

### **目標客群視覺偏好**
- **台灣中小企業主** (35-55歲)
- **偏好**: 簡潔不花俏、專業有質感
- **避免**: 過於炫技、太卡通化

## 🤖 **AI生成 Prompt 模板**

### **Hero主視覺**
```
A modern Taiwanese office with professionals collaborating with AI technology, 
warm natural lighting, clean minimal workspace, laptops showing AI interfaces, 
people in business casual attire, productive atmosphere, 
blue and purple accent lighting, photorealistic, 
shot with professional camera, --ar 16:9 --style modern
```

### **服務圖示**
```
Isometric illustration of [AI Agent/RPA/Customer Service/Data Analytics], 
flat design style, blue gradient (#2563EB to #7C3AED), 
white background, professional business illustration, 
clean minimal style, --ar 4:3 --style flat
```

### **團隊照片**
```
Professional headshot of [Asian male/female] in business attire, 
confident friendly expression, office background, 
natural lighting, high quality portrait photography, 
professional LinkedIn style photo, --ar 1:1
```

## 📂 **檔案組織結構**

```
public/images/
├── hero/
│   ├── main-hero.webp          # 首頁主視覺
│   └── main-hero.jpg           # 備用格式
├── services/
│   ├── ai-agent.webp           # AI Agent服務
│   ├── rpa.webp               # RPA自動化
│   ├── customer-service.webp   # 智能客服
│   └── analytics.webp         # 數據分析
├── team/
│   ├── ceo-lu.webp            # 呂執行長
│   ├── pm-luo.webp            # 羅項目經理
│   ├── cto-guo.webp           # 郭技術長
│   └── designer.webp          # 設計師
├── cases/
│   ├── wholesale.webp         # 批發商行案例
│   ├── accounting.webp        # 會計事務所案例
│   └── ecommerce.webp         # 電商案例
└── blog/
    ├── ai-trends-2024.webp    # Blog文章配圖
    ├── rpa-guide.webp
    ├── ai-roi-analysis.webp
    └── success-stories.webp
```

## 🔧 **技術實作清單**

### **圖片組件優化**
- [ ] 建立 `ImageOptimized.tsx` 組件
- [ ] 實作多格式支援 (WebP + 備用)
- [ ] 加入懶加載和佔位符
- [ ] 響應式圖片 (不同螢幕尺寸)

### **性能優化**
- [ ] 設定 Next.js Image Optimization
- [ ] 實作圖片預載入 (critical images)
- [ ] 壓縮現有圖片檔案
- [ ] 設定 CDN 加速 (未來)

### **SEO優化**
- [ ] 所有圖片加入 alt 文字
- [ ] 結構化數據包含圖片資訊
- [ ] Open Graph 圖片優化
- [ ] 圖片 sitemap 生成

## 💰 **預算評估**

### **自行生成 (推薦)**
- **Midjourney**: $10 USD/月 (200張圖)
- **Leonardo.ai**: 免費150 tokens/天
- **總成本**: $10-30 USD

### **專業設計**
- **自由接案**: NT$15,000-30,000
- **設計公司**: NT$50,000-100,000

### **圖庫購買**
- **Shutterstock**: $29 USD/月 (10張圖)
- **Getty Images**: $199 USD/月 (無限下載)

## ⏰ **實作時程**

```
Week 1: Hero主視覺 + 核心服務圖示
Week 2: 團隊照片 + 案例配圖  
Week 3: Blog配圖 + 優化現有圖片
Week 4: 性能優化 + SEO檢查
```

---

**需要協助時聯絡開發團隊！** 🚀 