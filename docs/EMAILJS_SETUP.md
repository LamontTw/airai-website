# EmailJS 設定指南

## 🚀 快速設定步驟

### 1. 註冊 EmailJS 帳號
- 前往 [EmailJS.com](https://www.emailjs.com/)
- 點擊「Sign Up」註冊免費帳號
- 驗證email後登入

### 2. 連接Email服務
1. 在左側選單點擊「Email Services」
2. 點擊「Add New Service」
3. 選擇您使用的email服務（如Gmail、Outlook等）
4. 按照指示連接您的 `contact@airai.tw` 信箱
5. 記下生成的 **Service ID**

### 3. 創建Email模板
1. 點擊左側「Email Templates」
2. 點擊「Create New Template」  
3. 設定模板內容：

```
Subject: 【智流科技】新的客戶諮詢 - {{from_name}}

Hi there,

您有一個新的客戶諮詢：

客戶資訊：
- 姓名：{{from_name}}
- 公司：{{from_company}}  
- Email：{{from_email}}
- 電話：{{from_phone}}

諮詢詳情：
- 諮詢類型：{{consultation_type}}
- 預算範圍：{{budget_range}}
- 預計時程：{{timeline}}

詳細需求：
{{message}}

---
提交時間：{{current_date}}
回覆地址：{{reply_to}}

此郵件由智流科技官網自動發送
```

4. 在設定中：
   - **To Email**: 設為 `contact@airai.tw`
   - **From Name**: 設為 `智流科技官網`
   - **Reply To**: 設為 `{{reply_to}}`
5. 儲存後記下 **Template ID**

### 4. 獲取 Public Key
1. 點擊右上角帳號 → 「Account」
2. 在「General」頁籤找到 **Public Key**
3. 複製這個key

### 5. 設定環境變數
在 `.env.local` 檔案中加入：

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. 啟用表單發送功能
在 `src/app/contact/page.tsx` 中，取消註釋這行：
```javascript
await emailjs.send(serviceId, templateId, templateParams, publicKey);
```

## ✅ 測試
1. 重新啟動開發伺服器
2. 前往 `/contact` 頁面
3. 填寫並提交表單
4. 檢查 `contact@airai.tw` 是否收到email

## 📋 功能確認清單
- [ ] EmailJS 帳號已註冊
- [ ] Email服務已連接
- [ ] Email模板已建立
- [ ] 環境變數已設定
- [ ] 表單發送功能已啟用
- [ ] 測試email已收到

## 🎯 預期結果
用戶提交表單後：
1. 表單顯示「發送中...」
2. 您會立即收到包含完整客戶資訊的email
3. 用戶會看到成功提示
4. 5秒後表單自動重置

## 💰 費用
- **免費版**：每月200封email
- **付費版**：$15 USD/月 = 1000封email

---
**需要協助？**請聯絡開發團隊！ 