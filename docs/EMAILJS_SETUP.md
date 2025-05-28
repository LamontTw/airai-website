# EmailJS 設定指南 (Google Workspace 企業版)

## 🏢 **您的優勢：Google Workspace 企業帳戶**
✅ 企業級安全性和控制  
✅ 可使用 contact@airai.tw 等企業郵箱  
✅ 更高的安全性和合規性  
✅ 管理員可控制權限設定  

---

## 🚀 快速設定步驟

### 1. 註冊 EmailJS 帳號
- 前往 [EmailJS.com](https://www.emailjs.com/)
- 點擊「Sign Up」註冊免費帳號
- **建議使用您的企業郵箱註冊** (如 admin@airai.tw)
- 驗證email後登入

### 2. 連接 Google Workspace Email 服務
1. 在左側選單點擊「Email Services」
2. 點擊「Add New Service」
3. 選擇「**Gmail**」(Google Workspace 使用相同設定)
4. 點擊「Connect Account」
5. **重要**：使用您的企業郵箱登入 (如 `contact@airai.tw`)
6. 授權 EmailJS 存取權限
7. 記下生成的 **Service ID** (格式如：service_st6dynj)

### 3. 創建Email模板
1. 點擊左側「Email Templates」
2. 點擊「Create New Template」  
3. 設定模板內容：

**模板設定：**
```
Template Name: AIRAI Contact Form
Subject: 【智流科技】新的客戶諮詢 - {{from_name}}

模板內容：
```

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>智流科技 - 客戶諮詢</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            🚀 新的客戶諮詢
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">客戶資訊</h3>
            <p><strong>姓名：</strong>{{from_name}}</p>
            <p><strong>公司：</strong>{{from_company}}</p>
            <p><strong>Email：</strong>{{from_email}}</p>
            <p><strong>電話：</strong>{{from_phone}}</p>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">諮詢詳情</h3>
            <p><strong>諮詢類型：</strong>{{consultation_type}}</p>
            <p><strong>預算範圍：</strong>{{budget_range}}</p>
            <p><strong>預計時程：</strong>{{timeline}}</p>
        </div>
        
        <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #a16207; margin-top: 0;">詳細需求</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        
        <div style="font-size: 12px; color: #6b7280;">
            <p><strong>提交時間：</strong>{{current_date}}</p>
            <p><strong>回覆地址：</strong>{{reply_to}}</p>
            <p style="margin-top: 20px;">此郵件由智流科技官網 (airai.tw) 自動發送</p>
        </div>
    </div>
</body>
</html>
```

4. **重要設定**：
   - **To Email**: 設為 `contact@airai.tw` (您的企業郵箱)
   - **From Name**: 設為 `智流科技官網`
   - **From Email**: 設為 `contact@airai.tw`
   - **Reply To**: 設為 `{{reply_to}}`
5. 儲存後記下 **Template ID** (格式如：template_02i3hyi)

### 4. 獲取 Public Key
1. 點擊右上角帳號 → 「Account」
2. 在「General」頁籤找到 **Public Key**
3. 複製這個key (格式如：SATe035y-ryZnqyvr)

### 5. 設定環境變數
在專案根目錄的 `.env.local` 檔案中加入：

```bash
# EmailJS 設定 (Google Workspace)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_st6dynj
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_02i3hyi
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=SATe035y-ryZnqyvr
```

### 6. 啟用表單發送功能
在 `src/app/contact/page.tsx` 中，找到這段註釋的代碼：

```javascript
// TODO: 等 EmailJS 設定完成後啟用以下代碼
// await emailjs.send(
//   EMAILJS_CONFIG.SERVICE_ID, 
//   EMAILJS_CONFIG.TEMPLATE_ID, 
//   templateParams, 
//   EMAILJS_CONFIG.PUBLIC_KEY
// );
```

取消註釋並修改為：
```javascript
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
  templateParams, 
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
```

## ✅ 測試步驟
1. 重新啟動開發伺服器：`npm run dev`
2. 前往 `/contact` 頁面
3. 填寫並提交測試表單
4. 檢查 `contact@airai.tw` 是否收到格式化的email
5. 確認回覆功能正常

## 📋 完整檢查清單
- [ ] EmailJS 帳號已註冊 (使用企業郵箱)
- [ ] Google Workspace 郵箱已連接
- [ ] Email模板已建立並測試
- [ ] 環境變數已正確設定
- [ ] 表單發送功能已啟用
- [ ] 測試email已成功收到
- [ ] 回覆功能已確認正常

## 🔒 **Google Workspace 安全優勢**
- ✅ 企業級資料保護
- ✅ 管理員可隨時撤銷權限
- ✅ 符合商業合規要求
- ✅ 完整的稽核記錄
- ✅ 進階安全設定

## 💰 費用說明
- **EmailJS 免費版**：每月200封email (通常足夠)
- **EmailJS 付費版**：$15 USD/月 = 1000封email
- **您的 Google Workspace**：已包含企業郵箱服務

## 🎯 預期結果
用戶提交表單後：
1. 表單顯示「發送中...」狀態
2. 您的 `contact@airai.tw` 立即收到格式化的客戶資訊
3. 用戶看到「感謝您的諮詢！我們將在24小時內與您聯繫」
4. 5秒後表單自動重置
5. 您可以直接回覆客戶的郵件

---
**🚀 準備好開始設定了嗎？需要協助請隨時聯絡！** 