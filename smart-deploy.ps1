# Smart Deploy Script for Vercel - Auto-generates commit messages
Write-Host "Starting smart deploy to Vercel..." -ForegroundColor Green

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

# Analyze changes and generate smart commit message
function Generate-SmartCommitMessage {
    $changes = git status --porcelain
    $addedFiles = @()
    $modifiedFiles = @()
    $deletedFiles = @()
    $renamedFiles = @()
    
    foreach ($line in $changes) {
        $status = $line.Substring(0, 2)
        $file = $line.Substring(3)
        
        switch ($status.Trim()) {
            "A" { $addedFiles += $file }
            "M" { $modifiedFiles += $file }
            "D" { $deletedFiles += $file }
            "R" { $renamedFiles += $file }
            "??" { $addedFiles += $file }
        }
    }
    
    $commitParts = @()
    
    # Check for specific types of changes
    $hasPackageJson = $modifiedFiles -contains "package.json" -or $addedFiles -contains "package.json"
    $hasConfigFiles = ($modifiedFiles + $addedFiles) | Where-Object { $_ -match "\.(config|env)" }
    $hasFavicon = ($modifiedFiles + $addedFiles) | Where-Object { $_ -match "favicon|icon" }
    $hasComponents = ($modifiedFiles + $addedFiles) | Where-Object { $_ -match "components/" }
    $hasPages = ($modifiedFiles + $addedFiles) | Where-Object { $_ -match "pages?/" -or $_ -match "app/" }
    $hasStyles = ($modifiedFiles + $addedFiles) | Where-Object { $_ -match "\.(css|scss|tailwind)" }
    $hasDeployScripts = ($modifiedFiles + $addedFiles) | Where-Object { $_ -match "deploy|quick-deploy" }
    $hasDocs = ($modifiedFiles + $addedFiles) | Where-Object { $_ -match "\.md$|README" }
    
    # Generate commit message based on changes
    if ($hasPackageJson) {
        $commitParts += "deps"
    }
    if ($hasFavicon) {
        $commitParts += "favicon"
    }
    if ($hasComponents) {
        $commitParts += "components"
    }
    if ($hasPages) {
        $commitParts += "pages"
    }
    if ($hasStyles) {
        $commitParts += "styles"
    }
    if ($hasConfigFiles) {
        $commitParts += "config"
    }
    if ($hasDeployScripts) {
        $commitParts += "deploy"
    }
    if ($hasDocs) {
        $commitParts += "docs"
    }
    
    # Generate action based on file operations
    $actions = @()
    if ($addedFiles.Count -gt 0) { $actions += "add" }
    if ($modifiedFiles.Count -gt 0) { $actions += "update" }
    if ($deletedFiles.Count -gt 0) { $actions += "remove" }
    
    # Construct final message
    if ($commitParts.Count -gt 0 -and $actions.Count -gt 0) {
        $actionStr = $actions -join "/"
        $partStr = $commitParts -join ", "
        return "$actionStr $partStr"
    } elseif ($actions.Count -gt 0) {
        $actionStr = $actions -join "/"
        $fileCount = ($addedFiles + $modifiedFiles + $deletedFiles).Count
        return "$actionStr $fileCount file$(if($fileCount -ne 1){'s'})"
    } else {
        return "Update files"
    }
}

# Generate smart commit message
$smartMessage = Generate-SmartCommitMessage
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

Write-Host ""
Write-Host "Generated commit message: " -NoNewline -ForegroundColor Cyan
Write-Host $smartMessage -ForegroundColor White

# Ask user if they want to use smart message or provide their own
$useDefault = Read-Host "Use this message? (Y/n/custom)"

if ($useDefault -eq "n" -or $useDefault -eq "N") {
    Write-Host "Deployment cancelled" -ForegroundColor Red
    exit 0
} elseif ($useDefault -eq "custom") {
    $commitMessage = Read-Host "Enter your custom commit message"
    if (!$commitMessage) {
        $commitMessage = $smartMessage
    }
} else {
    $commitMessage = $smartMessage
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
    Write-Host "Commit: $commitMessage" -ForegroundColor Gray
    Write-Host "Vercel is automatically building and deploying..." -ForegroundColor Cyan
} else {
    Write-Host "Push failed" -ForegroundColor Red
    exit 1
} 