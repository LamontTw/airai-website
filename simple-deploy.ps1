# Quick Deploy Script for Vercel
Write-Host "Starting quick deploy to Vercel..." -ForegroundColor Green

# Check if this is a git repository
if (!(Test-Path ".git")) {
    Write-Host "Not a Git repository. Please run: git init" -ForegroundColor Red
    exit 1
}

# Check for uncommitted changes
$status = git status --porcelain
if (!$status) {
    Write-Host "No changes to deploy" -ForegroundColor Yellow
    exit 0
}

Write-Host "Found changes:" -ForegroundColor Yellow
git status --short

# Ask to continue
$continue = Read-Host "Continue with deployment? (Y/n)"
if ($continue -eq "n" -or $continue -eq "N") {
    Write-Host "Deployment cancelled" -ForegroundColor Red
    exit 0
}

# Get commit message
$defaultMessage = "Deploy update"
$commitMessage = Read-Host "Enter commit message (leave empty for default)"
if (!$commitMessage) {
    $commitMessage = $defaultMessage
}

Write-Host "Preparing deployment..." -ForegroundColor Yellow

# Add all changes
git add .

# Commit changes
git commit -m $commitMessage

if ($LASTEXITCODE -ne 0) {
    Write-Host "Commit failed" -ForegroundColor Red
    exit 1
}

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push

if ($LASTEXITCODE -eq 0) {
    Write-Host "Deployment successful!" -ForegroundColor Green
    Write-Host "Vercel is automatically building and deploying..." -ForegroundColor Cyan
} else {
    Write-Host "Push failed" -ForegroundColor Red
    exit 1
} 