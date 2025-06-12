import { test, expect } from '@playwright/test';

test.describe('多語言功能測試', () => {
  test('中文版頁面應該正確顯示', async ({ page }) => {
    await page.goto('/');
    
    // 檢查中文導航
    await expect(page.getByText('首頁')).toBeVisible();
    await expect(page.getByText('關於我們')).toBeVisible();
    await expect(page.getByText('服務項目')).toBeVisible();
    await expect(page.getByText('成功案例')).toBeVisible();
    await expect(page.getByText('聯絡我們')).toBeVisible();
    
    // 檢查中文服務項目
    await expect(page.getByText('程式外包')).toBeVisible();
    await expect(page.getByText('AI Agent導入')).toBeVisible();
    await expect(page.getByText('智能客服')).toBeVisible();
    await expect(page.getByText('流程自動化')).toBeVisible();
  });

  test('英文版頁面應該正確顯示', async ({ page }) => {
    await page.goto('/en');
    
    // 檢查英文導航
    await expect(page.getByText('Home')).toBeVisible();
    await expect(page.getByText('About')).toBeVisible();
    await expect(page.getByText('Services')).toBeVisible();
    await expect(page.getByText('Cases')).toBeVisible();
    await expect(page.getByText('Contact')).toBeVisible();
    
    // 檢查英文服務項目
    await expect(page.getByText('Software Outsourcing')).toBeVisible();
    await expect(page.getByText('AI Agent Implementation')).toBeVisible();
    await expect(page.getByText('Intelligent Customer Service')).toBeVisible();
    await expect(page.getByText('Process Automation')).toBeVisible();
  });

  test('日文版頁面應該正確顯示', async ({ page }) => {
    await page.goto('/ja');
    
    // 檢查日文導航
    await expect(page.getByText('ホーム')).toBeVisible();
    await expect(page.getByText('会社概要')).toBeVisible();
    await expect(page.getByText('サービス')).toBeVisible();
    await expect(page.getByText('事例')).toBeVisible();
    await expect(page.getByText('お問い合わせ')).toBeVisible();
    
    // 檢查日文服務項目
    await expect(page.getByText('ソフトウェア外注')).toBeVisible();
    await expect(page.getByText('AIエージェント導入')).toBeVisible();
    await expect(page.getByText('インテリジェントカスタマーサービス')).toBeVisible();
    await expect(page.getByText('プロセス自動化')).toBeVisible();
  });

  test('英文版子頁面路由應該正確', async ({ page }) => {
    // 測試關於我們頁面
    await page.goto('/en/about');
    await expect(page).toHaveURL('/en/about');
    await expect(page.getByText('About')).toBeVisible();
    
    // 測試服務頁面
    await page.goto('/en/services');
    await expect(page).toHaveURL('/en/services');
    await expect(page.getByText('Services')).toBeVisible();
    
    // 測試案例頁面
    await page.goto('/en/cases');
    await expect(page).toHaveURL('/en/cases');
    await expect(page.getByText('Cases')).toBeVisible();
    
    // 測試聯絡頁面
    await page.goto('/en/contact');
    await expect(page).toHaveURL('/en/contact');
    await expect(page.getByText('Contact')).toBeVisible();
  });

  test('日文版子頁面路由應該正確', async ({ page }) => {
    // 測試關於我們頁面
    await page.goto('/ja/about');
    await expect(page).toHaveURL('/ja/about');
    await expect(page.getByText('会社概要')).toBeVisible();
    
    // 測試服務頁面
    await page.goto('/ja/services');
    await expect(page).toHaveURL('/ja/services');
    await expect(page.getByText('サービス')).toBeVisible();
    
    // 測試案例頁面
    await page.goto('/ja/cases');
    await expect(page).toHaveURL('/ja/cases');
    await expect(page.getByText('事例')).toBeVisible();
    
    // 測試聯絡頁面
    await page.goto('/ja/contact');
    await expect(page).toHaveURL('/ja/contact');
    await expect(page.getByText('お問い合わせ')).toBeVisible();
  });

  test('SEO meta 標籤應該根據語言正確設置', async ({ page }) => {
    // 中文版 SEO
    await page.goto('/');
    await expect(page).toHaveTitle(/AIRAI/);
    const zhDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(zhDescription).toContain('智流科技');
    
    // 英文版 SEO
    await page.goto('/en');
    await expect(page).toHaveTitle(/AIRAI/);
    const enDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(enDescription).toContain('AIRAI');
    
    // 日文版 SEO
    await page.goto('/ja');
    await expect(page).toHaveTitle(/AIRAI/);
    const jaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(jaDescription).toContain('AIRAI');
  });

  test('hreflang 標籤應該正確設置', async ({ page }) => {
    await page.goto('/');
    
    // 檢查 hreflang 標籤
    const hreflangZh = page.locator('link[hreflang="zh"]');
    const hreflangEn = page.locator('link[hreflang="en"]');
    const hreflangJa = page.locator('link[hreflang="ja"]');
    
    await expect(hreflangZh).toHaveCount(1);
    await expect(hreflangEn).toHaveCount(1);
    await expect(hreflangJa).toHaveCount(1);
  });

  test('Footer 內容應該根據語言正確顯示', async ({ page }) => {
    // 中文 Footer
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.getByText('智流科技')).toBeVisible();
    await expect(page.getByText('服務項目')).toBeVisible();
    await expect(page.getByText('快速連結')).toBeVisible();
    
    // 英文 Footer
    await page.goto('/en');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.getByText('AIRAI')).toBeVisible();
    await expect(page.getByText('Services')).toBeVisible();
    await expect(page.getByText('Quick Links')).toBeVisible();
    
    // 日文 Footer
    await page.goto('/ja');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.getByText('AIRAI')).toBeVisible();
    await expect(page.getByText('サービス')).toBeVisible();
    await expect(page.getByText('クイックリンク')).toBeVisible();
  });
}); 