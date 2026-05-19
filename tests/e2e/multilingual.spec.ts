import { test, expect } from '@playwright/test';

test.describe('多語言功能測試', () => {
  test('中文版頁面應該正確顯示', async ({ page }) => {
    await page.goto('/');

    // 檢查中文導航
    await expect(page.getByRole('link', { name: '首頁' })).toBeVisible();
    await expect(page.getByRole('link', { name: '關於我們' })).toBeVisible();
    await expect(page.getByRole('link', { name: '服務項目' })).toBeVisible();
    await expect(page.getByRole('link', { name: '成功案例' })).toBeVisible();
    // 結束營運後導覽列改為「結束營運說明」
    await expect(
      page.getByRole('link', { name: '結束營運說明' }).first()
    ).toBeVisible();
  });

  test('英文版頁面應該正確顯示', async ({ page }) => {
    await page.goto('/en');

    // 檢查英文導航
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About Us' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Case Studies' })).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Closure Notice' }).first()
    ).toBeVisible();
  });

  test('日文版頁面應該正確顯示', async ({ page }) => {
    await page.goto('/ja');

    // 檢查日文導航
    await expect(page.getByRole('link', { name: 'ホーム' })).toBeVisible();
    await expect(page.getByRole('link', { name: '私たちについて' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'サービス' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'ケーススタディ' })).toBeVisible();
    await expect(
      page.getByRole('link', { name: '営業終了のお知らせ' }).first()
    ).toBeVisible();
  });

  test('英文版子頁面路由應該正確', async ({ page }) => {
    await page.goto('/en/about');
    await expect(page).toHaveURL('/en/about');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    await page.goto('/en/services');
    await expect(page).toHaveURL('/en/services');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    await page.goto('/en/cases');
    await expect(page).toHaveURL('/en/cases');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // 結束營運說明頁
    await page.goto('/en/announcement');
    await expect(page).toHaveURL('/en/announcement');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('日文版子頁面路由應該正確', async ({ page }) => {
    await page.goto('/ja/about');
    await expect(page).toHaveURL('/ja/about');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    await page.goto('/ja/services');
    await expect(page).toHaveURL('/ja/services');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    await page.goto('/ja/cases');
    await expect(page).toHaveURL('/ja/cases');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // 結束營運說明頁
    await page.goto('/ja/announcement');
    await expect(page).toHaveURL('/ja/announcement');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('三語結束營運說明頁皆可索引且內容正確', async ({ page }) => {
    await page.goto('/announcement');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/AIRAI/);

    await page.goto('/contact');
    await expect(page).toHaveURL('/contact');
    // /contact 路由保留，但不再有表單
    await expect(page.locator('form')).toHaveCount(0);
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

    // 由各頁 metadata.alternates 輸出，格式為 zh-TW / en-US / ja-JP
    await expect(page.locator('link[hreflang="zh-TW"]')).toHaveCount(1);
    await expect(page.locator('link[hreflang="en-US"]')).toHaveCount(1);
    await expect(page.locator('link[hreflang="ja-JP"]')).toHaveCount(1);
  });

  test('canonical 標籤應該指向自身', async ({ page }) => {
    await page.goto('/announcement');
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute('href');
    expect(canonical).toContain('/announcement');
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