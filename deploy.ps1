# AI網站一鍵部署腳本
# 使用說明：
# 1. 確保已安裝Git和Node.js
# 2. 已在GitHub上創建倉庫
# 3. 已註冊Vercel帳號

Write-Host "🚀 開始部署AI網站到Vercel..." -ForegroundColor Green

# 檢查必要工具
Write-Host "檢查環境..." -ForegroundColor Yellow

if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ 未安裝Git，請先安裝Git" -ForegroundColor Red
    exit 1
}

if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ 未安裝Node.js，請先安裝Node.js" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 環境檢查通過" -ForegroundColor Green

# 檢查專案是否可以建構
Write-Host "測試專案建構..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 專案建構失敗，請檢查錯誤訊息" -ForegroundColor Red
    exit 1
}
Write-Host "✅ 專案建構成功" -ForegroundColor Green

# 推送到GitHub（如果已設定）
Write-Host "推送到GitHub..." -ForegroundColor Yellow
git add .
git commit -m "Update for deployment $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push origin main 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ 已推送到GitHub" -ForegroundColor Green
} else {
    Write-Host "⚠️ GitHub推送失敗，請手動設定GitHub倉庫" -ForegroundColor Yellow
    Write-Host "請按照以下步驟設定GitHub：" -ForegroundColor Cyan
    Write-Host "1. 在GitHub創建新倉庫 'airai-website'" -ForegroundColor Cyan
    Write-Host "2. 執行：git remote add origin https://github.com/你的用戶名/airai-website.git" -ForegroundColor Cyan
    Write-Host "3. 執行：git branch -M main" -ForegroundColor Cyan
    Write-Host "4. 執行：git push -u origin main" -ForegroundColor Cyan
}

# 安裝Vercel CLI（如果未安裝）
Write-Host "檢查Vercel CLI..." -ForegroundColor Yellow
if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "安裝Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Vercel CLI安裝失敗" -ForegroundColor Red
        exit 1
    }
}
Write-Host "✅ Vercel CLI已準備好" -ForegroundColor Green

Write-Host ""
Write-Host "🎉 部署準備完成！" -ForegroundColor Green
Write-Host ""
Write-Host "接下來請執行：" -ForegroundColor Cyan
Write-Host "1. vercel login（首次使用需要登入）" -ForegroundColor White
Write-Host "2. vercel（開始部署）" -ForegroundColor White
Write-Host ""
Write-Host "部署完成後，請參考 DEPLOYMENT_GUIDE.md 設定自定義網域" -ForegroundColor Yellow
Write-Host ""

# 提供選項直接開始部署
$deploy = Read-Host "是否現在開始部署？(y/N)"
if ($deploy -eq "y" -or $deploy -eq "Y") {
    Write-Host "開始部署..." -ForegroundColor Green
    vercel
} else {
    Write-Host "部署已準備完成，您可以稍後執行 'vercel' 命令開始部署" -ForegroundColor Green
} 