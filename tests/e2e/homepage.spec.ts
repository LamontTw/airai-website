import { test, expect } from '@playwright/test';

test.describe('首頁測試', () => {
  test('應該正確載入首頁', async ({ page }) => {
    await page.goto('/');
    
    // 檢查頁面標題
    await expect(page).toHaveTitle(/AIRAI/);
    
    // 檢查導航欄
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByText('首頁')).toBeVisible();
    await expect(page.getByText('關於我們')).toBeVisible();
    await expect(page.getByText('服務項目')).toBeVisible();
    await expect(page.getByText('成功案例')).toBeVisible();
    await expect(page.getByText('聯絡我們')).toBeVisible();
  });

  test('應該顯示 Hero 區塊', async ({ page }) => {
    await page.goto('/');
    
    // 檢查主標題
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    
    // 檢查 CTA 按鈕
    await expect(page.getByText('立即諮詢')).toBeVisible();
    await expect(page.getByText('了解更多')).toBeVisible();
  });

  test('應該顯示服務項目區塊', async ({ page }) => {
    await page.goto('/');
    
    // 檢查服務項目
    await expect(page.getByText('程式外包')).toBeVisible();
    await expect(page.getByText('AI Agent導入')).toBeVisible();
    await expect(page.getByText('智能客服')).toBeVisible();
    await expect(page.getByText('流程自動化')).toBeVisible();
  });

  test('應該顯示 Footer', async ({ page }) => {
    await page.goto('/');
    
    // 滾動到頁面底部
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // 檢查 Footer 內容
    await expect(page.getByText('智流科技')).toBeVisible();
    await expect(page.getByText('台北市信義區信義路五段7號')).toBeVisible();
    await expect(page.getByText('02-2345-6789')).toBeVisible();
    await expect(page.getByText('info@airai.com.tw')).toBeVisible();
  });

  test('導航連結應該正常工作', async ({ page }) => {
    await page.goto('/');
    
    // 點擊關於我們連結
    await page.getByText('關於我們').click();
    await expect(page).toHaveURL('/about');
    
    // 回到首頁
    await page.goto('/');
    
    // 點擊服務項目連結
    await page.getByText('服務項目').click();
    await expect(page).toHaveURL('/services');
    
    // 回到首頁
    await page.goto('/');
    
    // 點擊聯絡我們連結
    await page.getByText('聯絡我們').click();
    await expect(page).toHaveURL('/contact');
  });

  test('語言切換功能應該正常工作', async ({ page }) => {
    await page.goto('/');
    
    // 檢查語言切換器
    const languageSwitcher = page.locator('[data-testid="language-switcher"]');
    if (await languageSwitcher.isVisible()) {
      // 切換到英文
      await page.getByText('EN').click();
      await expect(page).toHaveURL('/en');
      await expect(page.getByText('Home')).toBeVisible();
      
      // 切換到日文
      await page.getByText('JA').click();
      await expect(page).toHaveURL('/ja');
      await expect(page.getByText('ホーム')).toBeVisible();
      
      // 切換回中文
      await page.getByText('中文').click();
      await expect(page).toHaveURL('/');
      await expect(page.getByText('首頁')).toBeVisible();
    }
  });

  test('響應式設計應該在手機版正常顯示', async ({ page }) => {
    // 設置手機視窗大小
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // 檢查導航欄在手機版的顯示
    await expect(page.locator('nav')).toBeVisible();
    
    // 檢查主要內容是否正常顯示
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    
    // 檢查 Footer 在手機版的顯示
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.getByText('智流科技')).toBeVisible();
  });
}); 