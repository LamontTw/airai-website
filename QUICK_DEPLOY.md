# 🚀 快速部署指南

## 方法一：使用自動腳本（推薦）

1. **執行部署腳本**：
```powershell
.\deploy.ps1
```

2. **按照提示完成部署**

## 方法二：手動部署

### 步驟 1：GitHub 設定

1. 在 [GitHub](https://github.com) 創建新倉庫 `airai-website`
2. 執行以下命令：

```bash
git remote add origin https://github.com/你的用戶名/airai-website.git
git branch -M main
git push -u origin main
```

### 步驟 2：Vercel 部署

1. **安裝 Vercel CLI**：
```bash
npm install -g vercel
```

2. **登入 Vercel**：
```bash
vercel login
```

3. **部署專案**：
```bash
vercel
```

4. **按照提示設定**：
   - Project name: `airai-website`
   - Framework: `Next.js`
   - 其他選項保持預設

### 步驟 3：設定自定義網域（GoDaddy）

1. **在 Vercel 添加網域**：
   - 進入專案儀表板
   - Settings → Domains
   - 添加您的 GoDaddy 網域

2. **在 GoDaddy 設定 DNS**：
   - 登入 GoDaddy
   - 進入 DNS 管理
   - 添加 A 記錄：
     ```
     Type: A
     Name: @
     Value: 76.76.19.61
     TTL: 600
     ```
   - 添加 CNAME 記錄：
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     TTL: 600
     ```

3. **等待 DNS 傳播**（1-48小時）

## 🎯 部署完成檢查

- [ ] 網站可以訪問
- [ ] SSL 證書正常（綠色鎖頭）
- [ ] 所有頁面正常載入
- [ ] 響應式設計正常

## 📞 需要幫助？

查看詳細的 `DEPLOYMENT_GUIDE.md` 或聯繫技術支援。

---

**恭喜！您的 AI 網站現在已經部署完成！** 🎉 