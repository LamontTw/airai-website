#!/usr/bin/env node

/**
 * 生成Favicon腳本
 * 
 * 使用方法：
 * 1. 將您的 icon.png (512x512px) 放到 public/images/ 目錄
 * 2. 執行：node generate-favicons.js
 * 
 * 注意：需要先安裝 sharp: npm install sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 檢查是否安裝了 sharp
try {
  require.resolve('sharp');
} catch (e) {
  console.error('❌ 請先安裝 sharp: npm install sharp');
  process.exit(1);
}

// 配置
const sourceIcon = 'public/images/icon.png';
const outputDir = 'public';

// 需要生成的尺寸
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
];

async function generateFavicons() {
  try {
    // 檢查源文件是否存在
    if (!fs.existsSync(sourceIcon)) {
      console.error(`❌ 找不到源圖標文件: ${sourceIcon}`);
      console.log('📝 請將您的 icon.png (512x512px) 放到 public/images/ 目錄');
      return;
    }

    console.log('🚀 開始生成 Favicon...');
    
    // 生成各種尺寸
    for (const { size, name } of sizes) {
      const outputPath = path.join(outputDir, name);
      
      await sharp(sourceIcon)
        .resize(size, size, {
          kernel: sharp.kernel.lanczos3,
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath);
        
      console.log(`✅ 生成: ${name} (${size}x${size})`);
    }

    // 生成 favicon.ico 在 src/app/ 目錄
    await sharp(sourceIcon)
      .resize(32, 32, {
        kernel: sharp.kernel.lanczos3,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join('src/app', 'favicon.ico'));

    console.log('✅ 生成: src/app/favicon.ico (32x32)');

    // 也在 public 目錄生成 favicon.ico
    await sharp(sourceIcon)
      .resize(32, 32, {
        kernel: sharp.kernel.lanczos3,
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join('public', 'favicon.ico'));

    console.log('✅ 生成: public/favicon.ico (32x32)');

    console.log('\n🎉 所有 Favicon 生成完成！');
    console.log('\n📋 生成的文件：');
    console.log('- public/favicon.ico');
    console.log('- public/favicon-16x16.png');
    console.log('- public/favicon-32x32.png');
    console.log('- public/favicon-48x48.png');
    console.log('- public/android-chrome-192x192.png');
    console.log('- public/android-chrome-512x512.png');
    console.log('- public/apple-touch-icon.png');
    console.log('- src/app/favicon.ico');

    console.log('\n📌 注意事項：');
    console.log('1. 如需真正的 .ico 格式，建議使用線上工具：https://favicon.io/');
    console.log('2. 生成後請重新啟動開發伺服器：npm run dev');
    console.log('3. 清除瀏覽器快取以查看新的 favicon');
    console.log('4. Google 可能需要 24-48 小時才會顯示新的 favicon');
    
  } catch (error) {
    console.error('❌ 生成過程中發生錯誤：', error.message);
  }
}

// 執行生成
generateFavicons(); 