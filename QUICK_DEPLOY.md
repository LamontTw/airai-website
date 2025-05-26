# 🚀 快速部署指南 (Vercel)

## 🎯 如果您已經設定了 Vercel + GitHub 連接

### 一鍵部署（推薦）
只需要執行以下命令，Vercel 會自動檢測到更改並重新部署：

```bash
git add .
git commit -m "部署更新 $(date)"
git push
```

### 或使用我們的快速腳本：
```powershell
.\quick-deploy.ps1
```

---

## 🔧 首次設定 (僅需一次)

### 方法一：Vercel 網頁界面（推薦）

1. **登入 [Vercel](https://vercel.com)**
2. **點擊 "Add New Project"**
3. **連接 GitHub 倉庫**：
   - 選擇您的 `airai-website` 倉庫
   - Framework: 自動檢測為 `Next.js`
   - 保持預設設定
4. **點擊 "Deploy"**
5. **完成！** 🎉

### 方法二：使用 Vercel CLI

```bash
# 安裝 Vercel CLI（如果還沒安裝）
npm install -g vercel

# 登入
vercel login

# 部署
vercel

# 設定生產環境
vercel --prod
```

---

## 📋 部署檢查清單

首次部署後：
- [ ] 網站可以訪問
- [ ] SSL 證書正常（綠色鎖頭）
- [ ] Favicon 正常顯示
- [ ] 響應式設計正常
- [ ] 所有頁面正常載入

之後每次更新只需：
- [ ] `git push` 
- [ ] 等待自動部署完成（通常1-2分鐘）

---

## 🌐 自定義網域設定

1. **在 Vercel 項目設定中**：
   - Settings → Domains
   - 添加您的網域（例如：`airai.tw`）

2. **在網域提供商（如 GoDaddy）設定 DNS**：
   ```
   A 記錄:
   Name: @
   Value: 76.76.19.61
   
   CNAME 記錄:
   Name: www  
   Value: cname.vercel-dns.com
   ```

3. **等待 DNS 傳播**（1-48小時）

---

## 🚨 故障排除

**部署失敗？**
- 檢查 Vercel 儀表板中的建構日誌
- 確保 `npm run build` 在本地運行正常

**網站無法訪問？**
- 檢查 DNS 設定
- 等待 DNS 傳播完成

**需要強制重新部署？**
```bash
git commit --allow-empty -m "強制重新部署"
git push
```

---

**🎉 恭喜！您的 AI 網站現在使用 Vercel 自動部署！** 