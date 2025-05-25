# Gmail + GoDaddy 域名郵件設定指南

## 🎯 目標
設定專業郵件地址：`info@airai.tw`、`contact@airai.tw` 等

## 📋 準備工作
- GoDaddy 帳戶 (已有 airai.tw 域名)
- Gmail 帳戶
- 約 15-30 分鐘設定時間

## 🔧 方法選擇

### 方案 A：使用 Gmail Workspace (推薦 - 專業版)
**優點**：完整功能、無限制、專業形象
**費用**：每月約 $6 USD/用戶

### 方案 B：Gmail 免費版 + 轉發設定
**優點**：免費、簡單設定
**限制**：只能接收，回信顯示 gmail.com

---

## 🚀 方案 A：Gmail Workspace 設定 (推薦)

### 步驟 1：註冊 Gmail Workspace
1. 前往 [Google Workspace](https://workspace.google.com/)
2. 點擊「開始使用」
3. 輸入你的域名：`airai.tw`
4. 選擇方案：Business Starter ($6/月)
5. 創建管理員帳戶

### 步驟 2：驗證域名所有權
Google 會要求驗證 `airai.tw` 的所有權：

#### 在 GoDaddy 加入驗證記錄：
1. 登入 [GoDaddy DNS 管理](https://dcc.godaddy.com/control/portfolio)
2. 找到 `airai.tw` 點擊「DNS」
3. 新增 TXT 記錄：
   ```
   類型：TXT
   主機：@
   值：google-site-verification=XXXXX (Google 提供的驗證碼)
   TTL：1 小時
   ```

### 步驟 3：設定 MX 記錄
在 GoDaddy DNS 設定中新增 MX 記錄：

```
類型：MX    主機：@    值：smtp.gmail.com    優先級：10    TTL：1小時
類型：MX    主機：@    值：smtp2.gmail.com   優先級：20    TTL：1小時
類型：MX    主機：@    值：smtp3.gmail.com   優先級：30    TTL：1小時
類型：MX    主機：@    值：smtp4.gmail.com   優先級：40    TTL：1小時
```

### 步驟 4：創建郵件地址
在 Gmail Workspace 管理控制台：
1. 前往「用戶」→「新增用戶」
2. 創建郵件地址：
   - `info@airai.tw`
   - `contact@airai.tw`
   - `support@airai.tw`

---

## 💡 方案 B：Gmail 免費版設定

### 步驟 1：在 GoDaddy 設定郵件轉發
1. 登入 GoDaddy 帳戶
2. 進入「我的產品」→ 找到 `airai.tw`
3. 點擊「電子郵件與辦公室」
4. 選擇「電子郵件轉發」(免費)
5. 設定轉發：
   ```
   info@airai.tw → 你的gmail@gmail.com
   contact@airai.tw → 你的gmail@gmail.com
   ```

### 步驟 2：在 Gmail 設定「代表寄件」
1. 開啟 Gmail
2. 點擊右上角齒輪 → 「查看所有設定」
3. 前往「帳戶和匯入」標籤
4. 在「以下列身分傳送郵件」點擊「新增其他電子郵件地址」
5. 輸入：
   ```
   名稱：智流科技
   電子郵件：info@airai.tw
   勾選「視為別名」
   ```

### 步驟 3：驗證設定
1. Gmail 會發送驗證郵件到 `info@airai.tw`
2. 由於設定了轉發，你會在 Gmail 收到
3. 點擊驗證連結完成設定

---

## ✅ 測試設定

### 測試收件
1. 請朋友發郵件到 `info@airai.tw`
2. 確認能在 Gmail 收到

### 測試寄件
1. 在 Gmail 撰寫新郵件
2. 點擊「寄件者」旁的下拉選單
3. 選擇 `info@airai.tw`
4. 發送測試郵件

## 🔍 常見問題

### Q: MX 記錄生效需要多久？
A: 通常 1-24 小時，可用 [MX Lookup 工具](https://mxtoolbox.com/) 檢查

### Q: 為什麼收不到郵件？
A: 檢查：
1. MX 記錄是否正確
2. 垃圾郵件資料夾
3. DNS 是否生效

### Q: 如何設定郵件簽名？
A: Gmail 設定 → 一般 → 簽名 → 新增專業簽名：
```
--
智流科技 AIRAI
AI導入 | RPA自動化 | 智能客服

電話：+886 953-202-811
地址：新北市板橋區倉後街26號
網站：https://airai.tw
```

## 📱 手機設定

### iPhone/iPad
1. 設定 → 郵件 → 帳號 → 新增帳號
2. 選擇「Google」
3. 登入你的 Gmail Workspace 帳戶

### Android
Gmail App 會自動同步 Workspace 郵件

---

## 💼 建議郵件地址配置

```
info@airai.tw        - 一般詢問
contact@airai.tw     - 業務聯繫  
support@airai.tw     - 技術支援
admin@airai.tw       - 管理專用
hello@airai.tw       - 友善聯繫
```

## 🎯 下一步

設定完成後：
1. 更新網站聯絡資訊
2. 在名片上使用專業郵件
3. 設定 Google My Business 商家郵件
4. 更新所有社交媒體平台聯絡資訊

---
*建議選擇方案 A (Gmail Workspace) 獲得最專業的企業郵件體驗* 