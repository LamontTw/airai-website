# 🚀 Vercel 部署腳本 (已簡化)
# 
# 📋 使用前提：
# 1. 已在 Vercel 連接 GitHub 倉庫
# 2. 已設定自動部署
# 
# 🎯 如果您已經設定好，只需要執行：
# .\quick-deploy.ps1

Write-Host "🚀 Vercel 部署腳本" -ForegroundColor Green
Write-Host ""
Write-Host "📋 如果您已經設定好 Vercel + GitHub 自動部署：" -ForegroundColor Yellow
Write-Host "   建議使用：.\quick-deploy.ps1" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 如果這是首次設定，請選擇以下方式：" -ForegroundColor Yellow
Write-Host ""

# 選擇部署方式
Write-Host "選擇部署方式：" -ForegroundColor White
Write-Host "1. 智能部署 (自動分析提交信息，需已設定 Vercel)" -ForegroundColor Cyan  
Write-Host "2. 首次設定 Vercel CLI 部署" -ForegroundColor Cyan
Write-Host "3. 查看部署指南" -ForegroundColor Cyan
Write-Host "4. 簡單部署 (固定提交信息)" -ForegroundColor Gray
Write-Host ""

$choice = Read-Host "請選擇 (1-4)"

switch ($choice) {
    "1" {
        Write-Host "🚀 執行智能部署..." -ForegroundColor Green
        .\quick-deploy.ps1
    }
    "2" {
        Write-Host "🔧 首次設定 Vercel 部署..." -ForegroundColor Yellow
        
        # 檢查 Vercel CLI
        if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
            Write-Host "安裝 Vercel CLI..." -ForegroundColor Yellow
            npm install -g vercel
            if ($LASTEXITCODE -ne 0) {
                Write-Host "❌ Vercel CLI 安裝失敗" -ForegroundColor Red
                exit 1
            }
        }
        
        Write-Host "✅ Vercel CLI 已準備好" -ForegroundColor Green
        Write-Host ""
        Write-Host "請執行以下命令完成設定：" -ForegroundColor Cyan
        Write-Host "1. vercel login    # 登入 Vercel" -ForegroundColor White
        Write-Host "2. vercel          # 初始部署" -ForegroundColor White
        Write-Host "3. vercel --prod   # 部署到生產環境" -ForegroundColor White
        
        $startDeploy = Read-Host "`n是否現在開始？(y/N)"
        if ($startDeploy -eq "y" -or $startDeploy -eq "Y") {
            vercel
        }
    }
    "3" {
        Write-Host "📖 開啟部署指南..." -ForegroundColor Green
        if (Test-Path "QUICK_DEPLOY.md") {
            notepad "QUICK_DEPLOY.md"
        } else {
            Write-Host "找不到 QUICK_DEPLOY.md 文件" -ForegroundColor Red
        }
    }
    "4" {
        Write-Host "🔄 執行簡單部署..." -ForegroundColor Green
        .\simple-deploy.ps1
    }
    default {
        Write-Host "❌ 無效選擇" -ForegroundColor Red
        Write-Host "請執行 .\deploy.ps1 重新選擇" -ForegroundColor Yellow
    }
} 